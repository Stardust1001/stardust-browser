
export const isWindows = /(windows|win32)/i.test(navigator.platform)

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

export default {
  isWindows,
  calcPixel
}
