
export const isWindows = /(windows|win32)/i.test(navigator.platform)

export const isXPath = selector => /^(\/\/|\.\.)/.test(selector.trim())

export const calcPixel = text => {
  if (typeof text === 'number') return text
  text = text.toLowerCase()
  let number = parseFloat(text)
  if (text.includes('vw') || text.includes('%')) {
    number *= window.innerWidth / 100
  } else if (text.includes('vh')) {
    number *= window.innerHeight / 100
  } else if (text.includes('vmax')) {
    number *= Math.max(window.innerWidth, window.innerHeight) / 100
  } else if (text.includes('vmin')) {
    number *= Math.min(window.innerWidth, window.innerHeight) / 100
  } else if (text.includes('rem')) {
    number *= parseFloat(getComputedStyle(document.documentElement).fontSize)
  }
  return Math.floor(number)
}

export const img2Base64 = selector => {
  const img = typeof selector === 'string' ? $one(selector) : selector
  const canvas = document.createElement('canvas')
  canvas.width = img.width
  canvas.height = img.height
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
  return canvas.toDataURL()
}

export const loadScript = src => {
  const script = document.createElement('script')
  script.src = src
  return new Promise((resolve, reject) => {
    script.onload = resolve
    script.onerror = reject
    document.body.appendChild(script)
  })
}

export const loadScripts = srcs => {
  return Promise.allSettled(srcs.map(loadScript))
}

export const loadStyle = src => {
  const isLink = src.startsWith('http')
  const node = document.createElement(isLink ? 'link' : 'style')
  if (isLink) {
    node.rel = 'stylesheet'
    node.href = src
  } else {
    node.innerHTML = src
  }
  return new Promise((resolve, reject) => {
    node.onload = resolve
    node.onerror = reject
    document.head.appendChild(node)
  })
}

export const loadStyles = srcs => {
  return Promise.allSettled(srcs.map(loadStyle))
}

const _nodes = {}
let _zoom = 1
const _resize = () => {
  if (!document.documentElement) return
  _zoom = 1 / parseFloat(document.documentElement.style.zoom)
  setTimeout(() => {
    Object.values(_nodes).forEach(n => n.style.zoom = _zoom)
  }, 0)
}
_resize()
window.addEventListener('resize', _resize)
export const unzoom = node => {
  if (!(node instanceof HTMLElement)) {
    node = node.value
  }
  node.style.zoom = _zoom
  const id = crypto.randomUUID()
  _nodes[id] = node
  return () => delete _nodes[id]
}

export const scanCode = async (options = {}) => {
  let {
    timeGap = 50,
    multiple = false,
    details = false,
    cameraStyle = '',
    continuous = false,
    onRecognize,
    onInit,
    onDestroy,
    done,
    mode = 'environment',
    ...others
  } = options

  const detector = new BarcodeDetector(others)

  const detect = async source => {
    let result = await detector.detect(source)
    if (details !== true) result = result.map(r => r.rawValue)
    return result
  }

  if (mode === 'image') {
    if (Array.isArray(others.images)) return Promise.all(others.images.map(detect))
    if (others.images) return detect(others.images)
    let files = await StardustBrowser.file.select('image/*', multiple)
    files = multiple ? [...files] : [files]
    const codes = await Promise.all(files.map(async file => {
      const base64 = await StardustBrowser.file.toType(file, 'dataurl')
      const image = new Image()
      await new Promise(resolve => {
        image.onload = resolve
        image.src = base64
      })
      return detect(image)
    }))
    return multiple ? codes : codes[0]
  }
  if (continuous && (!onRecognize || !done)) throw 'continuous need onRecognize and done'
  timeGap = Math.max(timeGap, 16)
  const stream = await navigator.mediaDevices.getUserMedia({
    ...others,
    video: {
      facingMode: mode
    }
  })
  const container = document.createElement('div')
  container.style.cssText += `
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 99999999;
    background-color: black;
  ` + (cameraStyle || '')
  const video = document.createElement('video')
  video.style.cssText += `
    width: 100%;
    height: 100%;
  `
  container.appendChild(video)

  const destroy = () => {
    stream.getTracks().forEach(t => t.stop())
    container.remove()
  }

  const selectOne = async results => {
    return results[0]
    // video.pause()
    // return new Promise(resolve => {
    //   const containerRect = container.getBoundingClientRect()
    //   const rects = results.map(result => {
    //     const rect = document.createElement('div')
    //     let { left, top, width, height } = result.boundingBox
    //     left -= containerRect.left
    //     top -= containerRect.top
    //     rect.style.cssText += `
    //       position: absolute;
    //       left: ${left}px;
    //       top: ${top}px;
    //       width: ${width}px;
    //       height: ${height}px;
    //       border: 2px solid lime;
    //     `
    //     container.appendChild(rect)
    //     rect.onclick = () => {
    //       video.play()
    //       rects.forEach(r => r.remove())
    //       resolve(result)
    //     }
    //     return rect
    //   })
    // })
  }

  const close = document.createElement('div')
  close.textContent = 'x'
  close.style.cssText += `
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 16px;
    cursor: pointer;
    color: white;
    z-index: 100000000;
  `
  close.onclick = destroy
  container.appendChild(close)
  document.body.appendChild(container)
  video.srcObject = stream
  await new Promise(resolve => {
    video.onloadedmetadata = () => {
      video.play()
      resolve()
    }
  })

  onInit?.({ video, detector })
  while (true) {
    let result = await detector.detect(video)
    if (result.length) {
      if (!details) result = result.map(r => r.rawValue)
      if (continuous) {
        onRecognize(result)
        if (done()) {
          onDestroy?.({ video, detector })
          destroy()
          return
        }
      } else {
        if (!multiple) {
          if (result.length === 1) {
            result = result[0]
          } else {
            result = await selectOne(result)
          }
        }
        onDestroy?.({ video, detector })
        destroy()
        return result
      }
    }
    await new Promise(resolve => setTimeout(resolve, timeGap))
  }
}

export default {
  isWindows,
  isXPath,
  calcPixel,
  img2Base64,
  loadScript,
  loadScripts,
  loadStyle,
  loadStyles,
  unzoom,
  scanCode
}
