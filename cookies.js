
const cookies = {
  all () {
    return document.cookie.split('; ').map(e => e.split('=')).reduce((dict, [k, v]) => ({ ...dict, [k]: v }))
  },
  get (key) {
    return this.all()[key]
  },
  set (key, value) {
    document.cookie = key + '=' + value
  },
  delete (key) {
    document.cookie = key + '= ; max-age=0'
  },
  clear () {
    Object.keys(this.all()).forEach(this.delete)
  },
  setRaw (str) {
    str.split('; ').map(e => e.split('=')).forEach(e => this.set(e[0], e[1]))
  }
}

export default cookies
