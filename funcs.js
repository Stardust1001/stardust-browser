
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

export default {
  isWindows,
  isXPath,
  calcPixel,
  img2Base64
}
