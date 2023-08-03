
export const writeText = text => {
  try {
    return navigator.clipboard.writeText(text)
  } catch {}
  const input = document.createElement('input')
  input.value = text
  input.style.opacity = 0
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  input.remove()
}

export const readText = () => {
  try {
    return navigator.clipboard.readText()
  } catch {
    return null
  }
}

export default {
  writeText,
  readText
}
