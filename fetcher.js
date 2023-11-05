import UIExecutor from './ui-executor.js'

export class Fetcher {
  constructor (baseUrl = '', headers = {}, options = {}) {
    this._baseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
    this._headers = {
      'content-type': 'application/json',
      ...headers
    }
    this._options = options
  }

  baseUrl (baseUrl) {
    this._baseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
  }

  headers (headers = {}, replace = false) {
    if (replace) this._headers = { ...headers }
    else Object.assign(this._headers, headers)
  }

  options (options = {}, replace = false) {
    if (replace) this._options = { ...options }
    else Object.assign(this._options, options)
  }

  fetch (url, options = {}) {
    options = { ...this._options, ...options }
    let {
      type = 'json',
      method = 'GET',
      headers = {},
      retries = 0,
      ...others
    } = options
    headers = { ...this._headers, ...headers }
    if (headers['content-type']?.toLowerCase().startsWith('application/json')) {
      if (others.body && typeof others.body) {
        others.body = JSON.stringify(others.body)
      }
    }
    if (url) {
      url = this._baseUrl + (url.startsWith('/') ? url : ('/' + url))
    }
    if (others.params) {
      others.params = {
        ...StardustJs.funcs.decodeQuery(url),
        ...others.params
      }
      const search = StardustJs.funcs.encodeQuery(others.params)
      url = url.split('?')[0] + '?' + search
    }
    return fetch(url, { ...others, headers, method })
      .then(res => res[type]())
      .catch(() => {
        if (retries) return this.fetch(url, {
          ...options,
          retries: retries - 1
        })
      })
  }

  async queryAll (size, func, onProgress, options = {}) {
    const { limit = 10, report = true, title = '' } = options
    const executor = report ? new UIExecutor() : null
    let count = 0
    const [total, all] = await func(1, size)
    count = all.length
    const percent = (count / total * 100).toFixed(2) * 1
    if (report) executor.report(title + ' 抓取到 ' + count + '条数据，已完成 ' + percent + '%', percent)
    onProgress?.(percent, all)
    if (total > size) {
      const results = await StardustJs.promises.schedule(async i => {
        const [_, rows] = await func(i + 2, size)
        count += rows.length
        const percent = (count / total * 100).toFixed(2) * 1
        if (report) executor.report(title + ' 抓取到 ' + count + ' 条数据，已完成 ' + percent + '%', percent)
        onProgress?.(percent, rows)
        return rows
      }, Math.ceil(total / size) - 1, limit)
      results.forEach(r => all.push(...r))
    }
    return all
  }
}

export default Fetcher
