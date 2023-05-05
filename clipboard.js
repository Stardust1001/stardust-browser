
export const writeText = async text => {
  try {
    await navigator.clipboard.writeText(text)
    return
  } catch {}
  const input = document.createElement('input')
  input.value = text
  input.style.opacity = 0
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  input.remove()
}

export const getText = async () => {
  try {
    return await navigator.clipboard.readText()
  } catch {
    return null
  }
}

export default {
  writeText,
  getText
}
