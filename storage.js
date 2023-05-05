
export class Storage {
  constructor (storage) {
    this.storage = storage
  }

  clear () {
  	this.storage.clear()
  }

  keys () {
    return Object.keys(this.storage)
  }

  values () {
    return Object.values(this.storage)
  }

  get (key, defaults) {
    return this.storage.getItem(key) || defaults
  }

  set (key, value) {
    this.storage.setItem(key, value)
  }

  remove (key) {
    this.storage.removeItem(key)
  }

  getJson (key, defaults, catches = true) {
    const value = this.get(key)
    if (value && catches) {
    	try {
    		return JSON.parse(value)
    	} catch {}
    }
    return defaults
  }

  setJson (key, value) {
    this.set(key, JSON.stringify(value))
  }
}

export const local = new Storage(window.localStorage)
export const session = new Storage(window.sessionStorage)

export default {
  Storage,
  local,
  session
}
