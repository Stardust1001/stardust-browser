
export class EventGenerator {
  constructor (config) {
    this.config = config
    this.base = {
      bubbles: true,
      cancelable: true,
      view: window,
      ...config?.base
    }
  }

  keyboard (name, options = {}) {
    let { key, code } = options
    if (key && !code) {
      code = key.charCodeAt(0)
    }
    if (code && !key) {
      key = String.fromCharCode(code)
    }
    return new KeyboardEvent(name, {
      ...this.base,
      key,
      code,
      location: 0,
      ctrlKey: false,
      shiftKey: false,
      altKey: false,
      metaKey: false,
      repeat: false,
      isComposing: false,
      ...options
    })
  }

  mouse (name, options, target) {
    const rect = target?.getBoundingClientRect() || {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }
    const cx = rect.x + rect.width / 2
    const cy = rect.y + rect.height / 2
    return new MouseEvent(name, {
      ...this.base,
      screenX: cx,
      screenY: cy,
      clientX: cx,
      clientY: cy,
      x: cx,
      y: cy,
      ctrlKey: false,
      shiftKey: false,
      altKey: false,
      metaKey: false,
      button: 0,
      buttons: 0,
      relatedTarget: null,
      region: null,
      movementX: 0,
      movementY: 0,
      offsetX: rect.width / 2,
      offsetY: rect.height / 2,
      pageX: cx,
      pageY: cy,
      which: null,
      ...options
    })
  }

  wheel (options = {}) {
    return new WheelEvent({
      ...this.base,
      deltaX: 0,
      deltaY: 0,
      deltaZ: 0,
      deltaMode: 0,
      ...options
    })
  }

  focus (options = {}) {
    return new FocusEvent({
      ...this.base,
      relatedTarget: null,
      ...options
    })
  }

  input (text, options = {}) {
    return new InputEvent({
      ...this.base,
      data: text,
      isComposing: false,
      ...options
    })
  }

  composition (text, options = {}) {
    return new CompositionEvent({
      ...this.base,
      data: text,
      ...options
    })
  }

  touch (name, options, target) {
    const rect = target?.getBoundingClientRect() || {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }
    const cx = rect.x + rect.width / 2
    const cy = rect.y + rect.height / 2
    const point = new Touch({
      identifier: Date.now() + Math.round(Math.random() * 1e6),
      target,
      clientX: cx,
      clientY: cy,
      screenX: cx,
      screenY: cy,
      pageX: cx,
      pageY: cy,
      radiusX: 0,
      radiusY: 0,
      rotationAngle: 0,
      force: 0
    })
    return new TouchEvent({
      ...this.base,
      type: name,
      changedTouches: [point],
      targetTouches: [point],
      touches: [point],
      ...options
    })
  }
}

const inputElements = ['HTMLInputElement', 'HTMLTextAreaElement']
const setters = {}
inputElements.forEach(n => setters[n] = Object.getOwnPropertyDescriptor(window[n].prototype, 'value').set)
const getInputElementPrototypeName = node => inputElements.find(n => node instanceof window[n])

export class UIExecutor {
  constructor (config = {}) {
    this.config = {
      interval: 17,
      slow: 0,
      ...config
    }
    this.generator = new EventGenerator()
    this.data = {}

    this._isInIf = false
    this._maskStyle = `
      position: fixed;
      z-index: 999998;
      width: 100vw;
      height: 100vh;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.3);
      pointer-events: none;
    ` + (config.maskStyle || '')
  }

  async waitFor (selector, options = {}) {
    options = {
      visible: true,
      interval: this.config.interval,
      ...options
    }
    let node
    while (true) {
      node = typeof selector === 'string' ? $one(selector) : selector
      if (node) {
        if (!options.visible || node.getBoundingClientRect().width) {
          break
        }
      }
      await this.sleep(options.interval)
    }
    return node
  }

  waitOr (selectors, options = {}) {
    return Promise.any(selectors.map(s => this.waitFor(selector, options)))
  }

  async waitForURL (url, options = {}) {
    options = {
      interval: this.config.interval,
      ...options
    }
    while (true) {
      if (typeof url === 'string') {
        if (location.href.includes(url)) return true
      } else if (typeof url === 'function') {
        if (url(location.href)) return true
      } else if (url instanceof RegExp) {
        if (url.test(location.href)) return true
      } else {
        throw '不支持的 url 类型'
      }
      await this.sleep(options.interval)
    }
  }

  async waitForFunction (func, options = {}) {
    options = {
      interval: this.config.interval,
      ...options
    }
    while (true) {
      try {
        if (func(this)) break
      } catch {}
      await this.sleep(options.interval)
    }
  }

  async waitForNext (title = '下一步', options = {}) {
    const mask = document.createElement('div')
    mask.id = 'webot-mask'
    mask.style.cssText += this._maskStyle + (options.maskStyle || '')
    await this.waitFor('body')
    document.body.appendChild(mask)
    const button = document.createElement('div')
    const root = options.root || ''
    document.querySelector(root || 'body').appendChild(button)
    button.style.cssText += `
      z-index: 999999;
      width: auto;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background-color: #ff0040;
      color: white;
      font-size: 15px;
      cursor: pointer;
      margin: 2px;
      padding: 0 10px;
      box-shadow: 10px 10px 20px 20px rgba(0, 0, 0, 0.2);
      pointer-events: auto;
      border-radius: 6px;
    `
    if (!root) {
      button.style.cssText += `
        position: fixed;
        right: 5px;
        bottom: 5px;
      `
    }
    button.style.cssText += options.style || ''
    button.onmouseover = () => {
      button.style.opacity = 0.8
    }
    button.onmouseout = () => {
      button.style.opacity = 1
    }
    button.textContent = title
    return new Promise(resolve => {
      button.onclick = () => {
        button.remove()
        mask.remove()
        resolve()
      }
    })
  }

  async report (title, percent, options = {}, isDone = false) {
    if (typeof title === 'function') {
      title = await title(this)
    }
    let node = document.querySelector('#webot-ui-report-container')
    if (!node) {
      node = document.createElement('div')
      node.id = 'webot-ui-report-container'
      node.style.cssText += `
        position: fixed;
        z-index: 999999;
        top: 10px;
        right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        height: 36px;
        line-height: 36px;
        text-align: center;
        background-color: #ffeb3b;
        color: white;
        font-size: 15px;
        cursor: pointer;
        margin: 2px;
        padding: 0 15px;
        border-radius: 6px;
        box-shadow: 10px 10px 20px 20px rgba(0, 0, 0, 0.2);
      `
      node.onmouseover = () => {
        node.style.opacity = 0
      }
      node.onmouseout = () => {
        node.style.opacity = 1
      }
      const percentNode = document.createElement('div')
      percentNode.id = 'webot-ui-report-progress'
      percentNode.style.cssText += `
        display: none;
        width: 250px;
        margin-right: 10px;
        background-color: #e3b326;
        height: 10px;
        border-radius: 10px;
        position: relative;
        overflow: hidden;
      `
      const barNode = document.createElement('div')
      barNode.style.cssText += `
        position: absolute;
        left: 0;
        top: 0;
        height: 10px;
        background-color: #ff5722;
        width: 0;
      `
      barNode.id = 'webot-ui-report-progress-bar'
      percentNode.appendChild(barNode)
      node.appendChild(percentNode)
      const titleNode = document.createElement('span')
      titleNode.id = 'webot-ui-report-title'
      titleNode.style.cssText += `
        color: darkred;
        font-weight: 600;
      `
      node.appendChild(titleNode)
      await this.waitFor('body')
      document.body.appendChild(node)
    }
    node.style.cssText += options.style
    const titleNode = node.querySelector('#webot-ui-report-title')
    titleNode.innerHTML = title
    titleNode.style.cssText += options.titleStyle || ''
    const percentNode = node.querySelector('#webot-ui-report-progress')
    if (typeof percent === 'number') {
      percentNode.style.display = 'block'
      percentNode.style.cssText += options.progressStyle || ''
      const barNode = percentNode.querySelector('#webot-ui-report-progress-bar')
      barNode.style.cssText += options.barStyle || ''
      barNode.style.width = percent + '%'
    } else {
      percentNode.style.display = 'none'
    }
    if (isDone) node.remove()
  }

  reportTable ({ data, header, maskStyle, closeStyle, contentStyle, tableStyle, tdStyle }) {
    const mask = document.createElement('div')
    mask.id = 'webot-mask'
    mask.style.cssText += `
      ${this._maskStyle}
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: auto;
      pointer-events: all;
      background-color: white;
      ${maskStyle}
    `
    const close = document.createElement('div')
    close.style.cssText += `
      position: absolute;
      right: calc(6% - 22px);
      top: calc(6% - 22px);
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 1px solid orangered;
      color: orangered;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 15px;
      ${closeStyle}
    `
    close.textContent = 'x'
    close.onclick = () => mask.remove()
    const content = document.createElement('div')
    content.style.cssText += `
      width: 88%;
      height: 88%;
      overflow: auto;
      background-color: white;
      ${contentStyle}
    `
    const table = document.createElement('table')
    table.border = '1'
    table.style.cssText += `
      border-collapse: collapse;
      border-color: #999;
      ${tableStyle}
    `
    if (header) {
      const thead = document.createElement('thead')
      const tr = document.createElement('tr')
      header.forEach(key => {
        const th = document.createElement('th')
        th.textContent = key
        tr.appendChild(th)
      })
      thead.appendChild(tr)
      table.appendChild(thead)
    }
    const tbody = document.createElement('tbody')
    const isArray = Array.isArray(data[0])
    const keys = header || !isArray && Object.keys(data[0])
    data.forEach(row => {
      const tr = document.createElement('tr')
      const values = isArray ? row : keys.map(k => row[k])
      values.forEach(v => {
        const td = document.createElement('td')
        td.textContent = v
        td.style.cssText += `
          padding: 5px 10px;
          ${tdStyle}
        `
        tr.appendChild(td)
      })
      tbody.appendChild(tr)
    })
    table.appendChild(tbody)
    content.appendChild(table)
    mask.appendChild(close)
    mask.appendChild(content)
    document.body.appendChild(mask)
    return mask
  }

  sleep (ms) {
    return StardustJs.funcs.sleep(ms)
  }

  async blur (node, options = {}) {
    node = await this.waitFor(node, options)
    node.blur()
  }

  async box (node, options = {}) {
    node = await this.waitFor(node, options)
    return node.getBoundingClientRect()
  }

  async clear (node, options = {}) {
    node = await this.waitFor(node, options)
    node.value = ''
  }

  async click (node, options = {}) {
    node = await this.waitFor(node, options)
    node.dispatchEvent(this.generator.mouse('click', options, node))
  }

  async dblclick (node, options = {}) {
    options = {
      clickInterval: this.config.interval,
      ...options
    }
    node = await this.waitFor(node, options)
    node.dispatchEvent(this.generator.mouse('click', options, node))
    await this.sleep(options.clickInterval)
    node.dispatchEvent(this.generator.mouse('click', options, node))
  }

  async eval (func, args = {}) {
    if (typeof func === 'function') {
      return func(this, args)
    }
    return window.eval(func)
  }

  async evalOn (node, func, options = {}) {
    node = await this.waitFor(node, options)
    if (typeof func === 'function') {
      return func(node)
    }
    return window.eval(func)
  }

  async evalOnAll (node, func, options = {}) {
    await this.waitFor(node, options)
    const nodes = await $all(node)
    if (typeof func === 'function') {
      return func(nodes)
    }
    return window.eval(func)
  }

  async set (node, attr, value, bySetter = false, options = {}) {
    if (typeof value === 'function') {
      value = await this.eval(value, options)
    }
    node = await this.waitFor(node, options)
    if (bySetter) {
      node.setAttribute(attr, value)
    } else {
      node[attr] = value
    }
  }

  async fill (node, text, options = { }) {
    options = {
      fillInterval: this.config.interval,
      customs: [],
      isReact: false,
      ...options
    }
    node = await this.waitFor(node, options)
    await this.focus(node)
    await this.clear(node)

    if (options.isReact) {
      if (!options.customs.includes('input')) {
        options.customs.push('input')
      }
      const name = getInputElementPrototypeName(node)
      if (!name) throw '未知的 input 元素类型'
      setters[name].call(node, text)
    } else {
      for (let key of text) {
        if (options.fillInterval > 0) {
          await this.sleep(options.fillInterval)
        }
        this.keydown(node, key)
        this.keypress(node, key)
        this.keyup(node, key)
        node.value += key
      }
    }
    for (let name of options.customs) {
      await this.custom(node, name)
    }
    if (options.isReact) {
      this.blur(node)
    }
  }

  async focus (node, options = {}) {
    node = await this.waitFor(node, options)
    node.focus()
    node.dispatchEvent(this.generator.focus())
  }

  async hover (node, options = {}) {
    node = await this.waitFor(node, options)
    node.dispatchEvent(this.generator.mouse('move', options, node))
  }

  async press (node, keys, options = {}) {
    options = {
      pressInterval: this.config.interval,
      ...options
    }
    keys = Array.isArray(keys) ? keys : [keys]
    node = await this.waitFor(node, options)
    for (let key of keys) {
      this.keydown(node, key, options)
      await this.sleep(options.pressInterval)
      this.keyup(node, key, options)
      await this.sleep(options.pressInterval)
    }
  }

  async select (node, value, options = {}) {
    node = await this.waitFor(node, options)
    node.value = value
    this.change(node, options)
  }

  async check (node, value, options = {}) {
    node = await this.waitFor(node, options)
    node.checked = value
    this.change(node, options)
  }

  async jump (func, options = {}) {
    const url = await this.eval(func, options)
    location.href = url
  }

  async mouse (node, name, options = {}) {
    node = await this.waitFor(node, options)
    node.dispatchEvent(this.generator.mouse(name, options, node))
  }

  async keyboard (method, node, keys, options = {}) {
    options = {
      keyboardInterval: this.config.interval,
      ...options
    }
    node = await this.waitFor(node, options)
    for (let key of keys) {
      this['key' + method](node, key, options)
      await this.sleep(options.keyboardInterval)
    }
  }

  enter (node, options = {}) {
    this.press(node, 'Enter', options)
  }

  async view (node, options = {}) {
    node = await this.waitFor(node, options)
    node.scrollIntoViewIfNeeded()
  }

  async attr (node, name, options = {}) {
    node = await this.waitFor(node, options)
    return node.getAttribute(name, options)
  }

  async call (node, method, options = {}) {
    node = await this.waitFor(node, options)
    return node[method](options)
  }

  async html (node, options = {}) {
    node = await this.waitFor(node, options)
    return node.innerHTML
  }

  async text (node, options = {}) {
    node = await this.waitFor(node, options)
    return node.innerText
  }

  async content (node, options = {}) {
    node = await this.waitFor(node, options)
    return node.textContent
  }

  async if (func, operations, ...props) {
    this._isInIf = true
    const ok = await this.eval(func, ...props)
    if (ok) {
      if (typeof operations === 'function') {
        operations = await operations(this, ...props)
      }
      await this.execute(operations, ...props)
    }
  }

  async elseIf (func, operations, ...props) {
    const ok = await this.eval(func, ...props)
    if (ok) {
      if (typeof operations === 'function') {
        operations = await operations(this, ...props)
      }
      await this.execute(operations, ...props)
    }
  }

  async else (operations, ...props) {
    if (this._isInIf) {
      if (typeof operations === 'function') {
        operations = await operations(this, ...props)
      }
      await this.execute(operations, ...props)
    }
    this._isInIf = false
  }

  async switch (value, cases, ...props) {
    if (typeof value === 'function') {
      value = await value(this, ...props)
    }
    for (let [caseValue, operations] of cases) {
      if (typeof caseValue === 'function') {
        caseValue = await caseValue(this, ...props)
      }
      caseValue = Array.isArray(caseValue) ? caseValue : [caseValue]
      if (caseValue.includes(value)) {
        await this.execute(operations, ...props)
        return
      }
    }
    const last = cases[cases.length - 1]
    if (last[0] === 'default') {
      await this.execute(last[1], ...props)
    }
  }

  async promiseAll (operations) {
    if (typeof operations === 'function') {
      operations = await operations(this)
    }
    return Promise.all(operations.map(ele => {
      return this[ele[0]](...ele.slice(1)).catch(err => {
        console.error(err)
      })
    }))
  }

  async promiseRace (operations) {
    if (typeof operations === 'function') {
      operations = await operations(this)
    }
    return Promise.race(operations.map(ele => {
      return this[ele[0]](...ele.slice(1)).catch(err => {
        console.error(err)
      })
    }))
  }

  async promiseAny (operations) {
    if (typeof operations === 'function') {
      operations = await operations(this)
    }
    return Promise.any(operations.map(ele => {
      return this[ele[0]](...ele.slice(1)).catch(err => {
        console.error(err)
      })
    }))
  }

  async for (func, operations, ...props) {
    let items = func
    if (typeof func === 'function') {
      items = await func(this, ...props)
    }
    if (typeof items === 'number') {
      items = Array.from({ length: items }).map((_, i) => i)
    }
    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      let ops = operations
      if (typeof operations === 'function') {
        ops = await operations(this, item, i, ...props)
      }
      await this.execute(ops, [item, i], ...props)
    }
  }

  async while (func, operations, options = {}) {
    let i = 0
    while (true) {
      const ok = await this.eval(func, options)
      if (!ok) break
      let ops = operations
      if (typeof operations === 'function') {
        ops = await operations(this, i++)
      }
      await this.execute(ops)
    }
  }

  async dynamic (func) {
    const operations = await this.eval(func)
    await this.execute(operations)
  }

  func (func, ...props) {
    return this.eval(func, ...props)
  }

  async keydown (node, key, options = {}) {
    node = await this.waitFor(node, options)
    this.keyboard(node, 'keydown', { key, ...options })
  }

  async keypress (node, key, options = {}) {
    node = await this.waitFor(node, options)
    this.keyboard(node, 'keypress', { key, ...options })
  }

  async keyup (node, key, options = {}) {
    node = await this.waitFor(node, options)
    this.keyboard(node, 'keyup', { key, ...options })
  }

  async prompt (node, options = {}) {
    options = {
      placeholder: '请输入验证码',
      ...options
    }
    node = await this.waitFor(node)
    const text = window.prompt(options.placeholder)
    await this.fill(node, text, options)
  }

  async fillOcr (node, imgSelector, options = {}) {
    node = await this.waitFor(node, options)
    const { ocrCaptchaUrl } = options
    if (ocrCaptchaUrl) {
      const base64 = StardustBrowser.funcs.img2Base64(imgSelector)
      const data = await fetch(ocrCaptchaUrl, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ file: base64 })
      }).then(res => res.json())
      return this.fill(node, data.text, options)
    }
    return this.prompt(node, options)
  }

  async autogui (operations, options = {}) {
    const autoguiUrl = options.autoguiUrl ?? this.config.autoguiUrl
    if (!autoguiUrl) throw '没有配置桌面自动化服务的网址'
    this._autogui ||= {
      baseURL: autoguiUrl,
      fetcher: new StardustBrowser.Fetcher(autoguiUrl, {}),
      fetch (...props) {
        return this.fetcher.fetch(...props)
      },
      async execute (operations) {
        const data = await this.fetch('/execute', { body: { operations } })
        return data.data
      },
      async find_window (class_name, window_name) {
        const data = await this.fetch('/find_window', { body: { class_name, window_name } })
        return data.data
      },
      async get_window_rect (handle) {
        const data = await this.fetch('/get_window_rect', { body: { handle } })
        return data.data
      }
    }
    if (operations.length) {
      return this._autogui.execute(operations)
    }
  }

  async save (data, saveTo, key, options = {}) {
    if (typeof data === 'function') {
      data = await data(this)
    }
    if (typeof saveTo === 'object') {
      StardustJs.highdict.set(saveTo, key, data)
      return saveTo
    }
    throw '不支持的 saveTo 类型'
  }

  async pick (func, name) {
    this.data[name] = await this.eval(func)
    return this.data[name]
  }

  async pickList (optionsOrFunc, ...props) {
    let list = []
    if (typeof optionsOrFunc === 'object') {
      const { each, saveTo } = optionsOrFunc
      const fields = optionsOrFunc.fields.map(ele => {
        if (typeof ele === 'object') {
          return ele
        }
        const [prop, selector, type] = ele.split('::')
        return { prop, selector, type }
      })
      list = $all(each).map(n => {
        const item = {}
        fields.forEach(field => {
          const value = n.$one(field.selector)?._text()
          item[field.prop] = field.type === 'number' ? parseFloat(value) : value
        })
        return item
      })
    } else {
      list = await this.eval(optionsOrFunc)
    }
    if (props.length) {
      return this.save(list, ...props)
    }
    return list
  }

  async exportTable (options = {}) {
    options = {
      report: true,
      isElementUI: false,
      type: 'excel',
      log: console.log,
      withInput: true,
      withHidden: false,
      page: 0,
      ...options,
    }
    let selectors = {}
    if (options.isElementUI) {
      selectors = {
        root: '',
        active: '.el-pager .active',
        first: '.el-pager .number',
        last: '.el-pager .number:last-child',
        next: '.el-pagination .btn-next',
        size: '.el-pagination__sizes .el-select input',
        sizer: '.el-pagination__sizes .el-select',
        pageSize: '//span[contains(text(),"100条/页")]',
        loading: '.el-loading-mask',
        headerTr: '.el-table__header-wrapper thead tr',
        bodyTrs: '.el-table__fixed .el-table__fixed-body-wrapper table tbody tr',
        headerTh: 'th',
        bodyTd: 'td'
      }
    }
    selectors = {
      ...selectors,
      ...options.selectors
    }
    selectors.headerTh ||= 'th'
    selectors.bodyTd ||= 'td'
    if (selectors.root) {
      for (let key in selectors) {
        if (key === 'root') continue
        selectors[key] = selectors.root + ' ' + selectors[key]
      }
    }
    const isFirst = () => {
      if (options.isFirst) return options.isFirst()
      const active = $one(selectors.active)
      const first = $one(selectors.first)
      const page = (active.value || active._text()).toString().match(/\d+/)[0] * 1
      return active === first || page === 1
    }
    const isDone = () => {
      if (options.isDone) return options.isDone()
      const active = $one(selectors.active)
      const last = $one(selectors.last)
      const page = (active.value || active._text()).toString().match(/\d+/)[0] * 1
      return active === last || page === getPageCount()
    }
    const setFirst = async () => {
      if (options.setFirst) return options.setFirst()
      const first = $one(selectors.first)
      options.beforeSetFirst?.(page)
      if (['INPUT', 'TEXTAREA'].includes(first)) {
        await this.fill(first, '1')
        await this.enter(first)
      } else {
        await this.click(first)
      }
    }
    const setNext = async () => {
      options.beforeSetNext?.(page)
      if (options.setNext) return options.setNext()
      await this.click($one(selectors.next))
    }
    const getCurrentSize = () => {
      if (options.getCurrentSize) return options.getCurrentSize()
      const node = $one(selectors.size)
      const page = (node.value || node._text()).toString().match(/\d+/)[0] * 1
      return page
    }
    const getSettingSize = () => {
      if (options.getSettingSize) return options.getSettingSize()
      const node = $one(selectors.pageSize)
      const page = (node.value || node._text()).toString().match(/\d+/)[0] * 1
      return page
    }
    const setSize = async () => {
      options.beforeSetSize?.(page)
      if (options.setSize) return options.setSize()
      if (selectors.sizer) {
        const node = $one(selectors.sizer)
        if (node.nodeName === 'SELECT') {
          await this.select(node, $one(selectors.pageSize).value)
          return
        } else {
          await this.click(selectors.sizer)
        }
      }
      await this.click(selectors.pageSize)
    }
    const waitLoading = async () => {
      if (options.waitLoading) return options.waitLoading()
      await this.waitFor(selectors.loading)
      await this.waitForFunction(() => !$one(selectors.loading)?._rect()?.width)
    }
    const getHeader = () => {
      if (options.getHeader) return options.getHeader()
      const headerTr = options.getHeaderTr?.() || $one(selectors.headerTr)
      return headerTr.$all(selectors.headerTh).map(th => th._text())
    }
    const getRows = () => {
      if (options.getRows) return options.getRows()
      const bodyTrs = options.getBodyTrs?.() || $all(selectors.bodyTrs)
      return bodyTrs.filter(tr => tr._rect().width).map(tr => tr.$all(selectors.bodyTd).map(td => {
        let temp
        if (!options.withHidden) {
          temp = td.cloneNode(true)
          const walker = document.createTreeWalker(td, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, false)
          const childs = []
          let child
          while (child = walker.nextNode()) childs.push(child)
          childs.filter(c => c.nodeName !== '#text' && !c._rect?.().width).forEach(c => c.remove())
        }
        let text = td._text()
        if (options.withInput) {
          const inputs = [
            ...td.$all('input').filter(i => i.type !== 'file'),
            ...td.$all('select'),
            ...td.$all('textarea')
          ]
          text += inputs.map(i => i.value + '').join(',')
        }
        if (!options.withHidden) {
          td.parentNode.replaceChild(temp, td)
        }
        return text
      }))
    }
    const getPageCount = () => {
      if (options.getPageCount) return options.getPageCount()
      return ($one(selectors.pageCount || selectors.last)?._text() || 1) * 1
    }
    const data = []
    let pageCount = 0
    let page = options.page
    if (options.report) await this.report('准备获取数据...')
    options.log('当前页 ' + getRows().length + ' 条数据，每页限制 ' + getCurrentSize() + ' 条')
    if (getRows().length && getCurrentSize() !== getSettingSize()) {
      if (options.report) await this.report('设置每页条数: ' + getSettingSize())
      options.log('设置每页条数: ' + getSettingSize())
      await setSize()
      options.log('设置每页条数后等待加载')
      await waitLoading()
    }
    options.log('获取表头')
    let header = getHeader()
    options.log('表头: ', header)
    if (options.report) {
      pageCount = getPageCount()
      await this.report('总共 ' + pageCount + ' 页')
      options.log('总共 ' + pageCount + ' 页')
    }
    if (!isFirst()) {
      options.log('不是第一页，应设置第一页')
      await setFirst()
      options.log('设置第一页后等待加载')
      await waitLoading()
    }
    while (true) {
      if (options.report) {
        page++
        options.log(`已获取第 ${page} / ${pageCount} 页 ` + page / pageCount * 100 + '%')
        await this.report(`已获取第 ${page} / ${pageCount} 页`, page / pageCount * 100)
      }
      options.log('抓取当前页的数据')
      data.push(...getRows())
      options.onData?.(data)
      if (!data.length) {
        throw '抓取当前页的数据，失败'
      }
      options.log('共已抓到 ' + data.length + ' 条数据')
      if (isDone()) {
        options.log('数据抓取完毕')
        break
      }
      options.log('设置下一页: ' + (page + 1))
      await setNext()
      options.log('设置下一页后等待加载')
      await waitLoading()
    }
    options.log('准备导出', header, data)
    if (data.length && header.length > data[0].length) {
      header = header.slice(0, data[0].length)
    }
    if (options.beforeExport?.({ header, data })) return
    let method
    if (options.type === 'excel') {
      method = 'export2Excel'
    } else if (options.type === 'csv') {
      method = 'export2Csv'
    } else if (options.type === 'table') {
      document.body.innerHTML = `
        <table border="1" style="border-collapse: collapse; width: 96%; margin: 20px auto;">
          <thead>
            <tr>${header.map(ele => '<th>' + ele + '</th>').join('')}</tr>
          </thead>
          <tbody>
            ${data.map(row => '<tr>' + row.map(ele => '<td>' + ele + '</td>').join('') + '</tr>').join('')}
          </tbody>
        </table>
      `
    } else {
      const error = '未知的导出模式: ' + options.type
      options.log(error)
      throw error
    }
    if (options.type !== 'table') {
      let { filename } = options
      let title = document.title
      try { title = top.document.title } catch { }
      filename ||= (title ? title + '-' : '') + '导出'
      filename += '-' + Date.now().toString(16)
      StardustBrowser.excel[method]({ header, data, filename })
    }
    if (options.report) {
      options.log('正在导出 excel ...')
      await this.report('正在导出 excel ...')
      this.sleep(1000).then(async () => {
        options.log('已完成导出')
        await this.report('已完成导出', 100, {}, true)
      })
    }
    return { header, data }
  }

  title (title, options = {}) {
    options = {
      resetable: false,
      ...options
    }
    document.title = title
    if (!options.resetable) {
      Object.defineProperty(document, 'title', {
        get: () => title,
        set: () => true
      })
    }
  }

  async comment (message, options, ...props) {
    if (typeof message === 'function') {
      message = await message(this, ...props)
    }
    console.log(message)
  }

  async fetch (urlOrList, options, transformer, ...props) {
    if (typeof urlOrList === 'function') {
      urlOrList = await urlOrList(this)
    }
    const isArray = Array.isArray(urlOrList)
    urlOrList = isArray ? urlOrList : [[urlOrList, options]]
    const list = await Promise.all(urlOrList.map(async (ele, index) => {
      const url = ele[0]
      const op = { ...options, ...ele[1] }
      const { type = 'json' } = op
      let data = await fetch(url, op).then(res => res[type]())
      transformer = op.transformer || transformer
      if (transformer) {
        data = await transformer(data, ele, index)
      }
      return data
    }))
    const result = isArray ? list : list[0]
    if (props.length) {
      return this.save(result, ...props)
    }
    return result
  }

  async assert (func, message) {
    const ok = await this.eval(func)
    if (ok) {
      return this.comment('断言失败: ' + message)
    }
    return funcs.sleep(Number.MAX_SAFE_INTEGER)
  }

  async change (node, options = {}) {
    node = await this.waitFor(node, options)
    this.custom(node, 'change', options)
  }

  custom (node, name, options = {}) {
    node = typeof node === 'string' ? $one(node) : node
    node.dispatchEvent(new Event(name, {
      bubbles: true,
      cancelable: true,
      view: window,
      ...options
    }))
  }

  async execute (operations, options = {}) {
    for (let i = 0, len = operations.length; i < len; i++) {
      if (this.config.slow && i) {
        await this.sleep(this.config.slow)
      }
      const [command, ...props] = operations[i]
      await this[command](...props)
    }
  }
}

UIExecutor.EventGenerator = EventGenerator

export default UIExecutor
