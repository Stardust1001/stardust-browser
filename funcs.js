
export const isWindows = /(windows|win32)/i.test(navigator.platform)

export const isXPath = selector => /^(\/\/|\.\.)/.test(selector.trim())

export const calcPixel = text => {
  if (typeof text === 'number') return text
  text = text.toLowerCase()
  let number = parseFloat(text)
  if (text.includes('vw')) {
    number *= window.innerWidth / 100
  } else if (text.includes('vh')) {
    number *= window.innerHeight / 100
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

const _nodes = {}
let _zoom = 1
const _resize = () => {
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

export default {
  isWindows,
  isXPath,
  calcPixel,
  img2Base64,
  unzoom
}
