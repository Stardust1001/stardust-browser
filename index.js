import dbsdk from './dbsdk/index.js'
import clipboard from './clipboard.js'
import cookies from './cookies.js'
import excel from './excel.js'
import Fetcher from './fetcher.js'
import file from './file.js'
import fullscreen from './fullscreen.js'
import funcs from './funcs.js'
import selector from './selector.js'
import storage from './storage.js'
import UIExecutor from './ui-executor.js'

const { local, session } = storage

export {
  dbsdk,
  clipboard,
  cookies,
  excel,
  Fetcher,
  file,
  fullscreen,
  funcs,
  selector,
  storage,
  local,
  session,
  UIExecutor
}

export default {
  version: '1.0.105',
  dbsdk,
  clipboard,
  cookies,
  excel,
  Fetcher,
  file,
  fullscreen,
  funcs,
  selector,
  storage,
  local,
  session,
  UIExecutor
}
