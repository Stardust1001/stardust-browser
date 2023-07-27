
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

  keyboard (name, options) {
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

  wheel (options) {
    return new WheelEvent({
      ...this.base,
      deltaX: 0,
      deltaY: 0,
      deltaZ: 0,
      deltaMode: 0,
      ...options
    })
  }

  focus (options) {
    return new FocusEvent({
      ...this.base,
      relatedTarget: null,
      ...options
    })
  }

  input (text, options) {
    return new InputEvent({
      ...this.base,
      data: text,
      isComposing: false,
      ...options
    })
  }

  composition (text, options) {
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

export class UIOperator {
  constructor (config) {
    this.config = {
      interval: 20,
      slow: 0,
      ...config
    }
    this.generator = new EventGenerator()
    this.data = {}

    this._isInIf = false
  }

  async waitFor (selector, options) {
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

  waitOr (selectors, options) {
    return Promise.any(selectors.map(s => this.waitFor(selector, options)))
  }

  async waitForURL (url, options) {
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

  async waitForFunction (func, options) {
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

  async waitForNext (title = '下一步', options) {
    const button = document.createElement('div')
    document.querySelector(options.root || 'body').appendChild(button)
    button.style.cssText += `
      z-index: 9999;
      width: 300px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background-color: #409eff;
      color: white;
      cursor: pointer;
      margin: 2px;
    `
    if (!options.root) {
      button.style.cssText += `
        position: fixed;
        left: 5px;
        bottom: 5px;
      `
    }
    button.style.cssText += `
      ${options.style}
    `
    button.onmouseover = () => {
      button.style.opacity = 0.8
    }
    button.onmouseout = () => {
      button.style.opacity = 1
    }
    button.textContent = title
    return new Promise(resolve => {
      button.onclick = () => { button.remove(); resolve() }
    })
  }

  sleep (ms) {
    return StardustJs.funcs.sleep(ms)
  }

  async blur (node, options) {
    node = await this.waitFor(node, options)
    node.blur()
  }

  async box (node, options) {
    node = await this.waitFor(node, options)
    return node.getBoundingClientRect()
  }

  async clear (node, options) {
    node = await this.waitFor(node, options)
    node.value = ''
  }

  async click (node, options) {
    node = await this.waitFor(node, options)
    node.dispatchEvent(this.generator.mouse('click', options, node))
  }

  async dblclick (node, options) {
    node = await this.waitFor(node, options)
    node.dispatchEvent(this.generator.mouse('click', options, node))
    await this.sleep(options.timeGap || 20)
    node.dispatchEvent(this.generator.mouse('click', options, node))
  }

  async keyboard (node, name, options) {
    node = await this.waitFor(node, options)
    node.dispatchEvent(this.generator.keyboard(name, options))
  }

  async eval (func, args = {}) {
    if (typeof func === 'function') {
      return func(this, args)
    }
    return window.eval(func)
  }

  async evalOn (node, func, options) {
    node = await this.waitFor(node, options)
    if (typeof func === 'function') {
      return func(node)
    }
    return window.eval(func)
  }

  async evalOnAll (node, func, options) {
    await this.waitFor(node, options)
    const nodes = await $all(node)
    if (typeof func === 'function') {
      return func(nodes)
    }
    return window.eval(func)
  }

  async set (node, attr, value, bySetter = false, options) {
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

  async fill (node, text, options) {
    options = {
      interval: this.config.interval,
      ...options
    }
    node = await this.waitFor(node, options)
    this.focus(node)
    this.clear(node)
    for (let key of text) {
      await this.sleep(options.interval)
      this.keydown(node, key)
      this.keyup(node, key)
      node.value += key
    }
  }

  async focus (node, options) {
    node = await this.waitFor(node, options)
    node.focus()
    node.dispatchEvent(this.generator.focus())
  }

  async hover (node, options) {
    node = await this.waitFor(node, options)
    node.dispatchEvent(this.generator.mouse('move', options, node))
  }

  async press (node, keys, options) {
    options = {
      interval: this.config.interval,
      ...options
    }
    keys = Array.isArray(keys) ? keys : [keys]
    node = await this.waitFor(node, options)
    for (let key of keys) {
      this.keydown(node, key, options)
      await this.sleep(options.interval)
      this.keyup(node, key, options)
      await this.sleep(options.interval)
    }
  }

  async select (node, value, options) {
    node = await this.waitFor(node, options)
    node.value = value
    this.change(node, options)
  }

  async check (node, value, options) {
    node = await this.waitFor(node, options)
    node.checked = value
    this.change(node, options)
  }

  async jump (func, options) {
    const url = await this.eval(func, options)
    location.href = url
  }

  async mouse (node, name, options) {
    node = await this.waitFor(node, options)
    node.dispatchEvent(this.generator.mouse(name, options, node))
  }

  async keyboard (method, node, keys, options) {
    options = {
      interval: this.config.interval,
      ...options
    }
    node = await this.waitFor(node, options)
    for (let key of keys) {
      this['key' + method](node, key, options)
      await this.sleep(options.interval)
    }
  }

  enter (node, options) {
    this.press(node, 'Enter', options)
  }

  async view (node, options) {
    node = await this.waitFor(node, options)
    node.scrollIntoViewIfNeeded()
  }

  async attr (node, name, options) {
    node = await this.waitFor(node, options)
    return node.getAttribute(name, options)
  }

  async call (node, method, options) {
    node = await this.waitFor(node, options)
    return node[method](options)
  }

  async html (node, options) {
    node = await this.waitFor(node, options)
    return node.innerHTML
  }

  async text (node, options) {
    node = await this.waitFor(node, options)
    return node.innerText
  }

  async content (node, options) {
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
      await this.exec(operations, options)
    }
  }

  async elseIf (func, operations, ...props) {
    const ok = await this.eval(func, ...props)
    if (ok) {
      if (typeof operations === 'function') {
        operations = await operations(this, ...props)
      }
      await this.exec(operations, options)
    }
  }

  async else (operations, ...props) {
    if (typeof operations === 'function') {
      operations = await operations(this, ...props)
    }
    await this.exec(operations, options)
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
        await this.exec(operations, ...props)
        return
      }
    }
    const last = cases[cases.length - 1]
    if (last[0] === 'default') {
      await this.exec(last[1], ...props)
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
      await this.exec(ops, [item, i], ...props)
    }
  }

  async while (func, operations, options) {
    while (true) {
      const ok = await this.eval(func, options)
      if (!ok) break
      await this.exec(operations)
    }
  }

  async dynamic (func) {
    const operations = await this.eval(func)
    await this.exec(operations)
  }

  func (func, ...props) {
    return this.eval(func, ...props)
  }

  async prompt (node, options) {
    options = {
      placeholder: '请输入验证码',
      ...options
    }
    node = await this.waitFor(node, options)
    const value = window.prompt(options.placeholder)
    this.fill(node, value, options)
  }

  async keydown (node, key, options) {
    node = await this.waitFor(node, options)
    this.keyboard(node, 'keydown', { key, ...options })
  }

  async keyup (node, key, options) {
    node = await this.waitFor(node, options)
    this.keyboard(node, 'keyup', { key, ...options })
  }

  async prompt (node, options) {
    options = {
      placeholder: '请输入验证码',
      ...options
    }
    node = await this.waitFor(node)
    const text = window.prompt(options.placeholder)
    await this.fill(node, text, options)
  }

  async fillOcr (node, imgSelector, options) {
    options = {
      ...options
    }
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

  async save (data, saveTo, key, options) {
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

  title (title, options) {
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

  async change (node, options) {
    node = await this.waitFor(node, options)
    this.custom(node, 'change', options)
  }

  custom (node, name, options) {
    node = typeof node === 'string' ? $one(node) : node
    node.dispatchEvent(new Event(name, {
      bubbles: true,
      cancelable: true,
      view: window,
      ...options
    }))
  }

  async exec (operations, options) {
    for (let i = 0, len = operations.length; i < len; i++) {
      if (this.config.slow && i) {
        await this.sleep(this.config.slow)
      }
      const [command, ...props] = operations[i]
      await this[command](...props)
    }
  }
}
      
window.operator = new UIOperator({ slow: 10, interval: 10 })

UIOperator.EventGenerator = EventGenerator

export default UIOperator
