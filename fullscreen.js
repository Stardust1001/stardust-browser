
export const isOpened = () => {
  return !!(document.webkitIsFullScreen ||
            document.mozFullScreen ||
            document.msFullscreenElement ||
            document.fullscreenElement
  )
}

export const open = node => {
  if (isOpened()) return
  const root = document.documentElement
  const func = root.requestFullscreen ||
                root.msRequestFullscreen ||
                root.mozRequestFullScreen ||
                root.webkitRequestFullscreen
  func.call(node || root)
}

export const exit = () => {
  if (!isOpened()) return
  const func = document.exitFullscreen ||
                document.msExitFullscreen ||
                document.mozCancelFullScreen ||
                document.webkitExitFullscreen
  func.call(document)
}

export default {
  isOpened,
  open,
  exit
}
