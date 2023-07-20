
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
    return new MouseEvent('click', {
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
  }

  sleep (ms) {
    return StardustJs.funcs.sleep(ms)
  }

  async keyboard (node, name, options) {
    node = await this.waitForSelector(node, options)
    node.dispatchEvent(this.generator.keyboard(name, options))
  }

  async mouse (node, name, options) {
    node = await this.waitForSelector(node, options)
    node.dispatchEvent(this.generator.mouse(name, options, node))
  }

  keydown (node, key, options) {
    this.keyboard(node, 'keydown', { key, ...options })
  }

  keyup (node, key, options) {
    this.keyboard(node, 'keyup', { key, ...options })
  }

  async focus (node, options) {
    node = await this.waitForSelector(node, options)
    node.focus()
    node.dispatchEvent(this.generator.focus())
  }

  async clear (node, options) {
    node = await this.waitForSelector(node, options)
    node.value = ''
  }

  async fill (node, text, options) {
    options = {
      interval: this.config.interval,
      ...options
    }
    node = await this.waitForSelector(node, options)
    this.focus(node)
    this.clear(node)
    for (let key of text) {
      await this.sleep(options.interval)
      this.keydown(node, key)
      this.keyup(node, key)
      node.value += key
    }
  }

  async prompt (node, options) {
    options = {
      placeholder: '请输入验证码',
      ...options
    }
    node = await this.waitForSelector(node)
    const text = window.prompt(options.placeholder)
    await this.fill(node, text, options)
  }

  async fillOcr (node, imgSelector, options) {
    options = {
      ...options
    }
    node = await this.waitForSelector(node, options)
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

  async change (node, options) {
    node = await this.waitForSelector(node, options)
    node.dispatchEvent(new Event('change', {
      view: window,
      bubbles: true,
      cancelable: true,
      ...options
    }))
  }

  async click (node, options) {
    node = await this.waitForSelector(node, options)
    node.dispatchEvent(this.generator.mouse('click', options, node))
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

  async waitForSelector (selector, options) {
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

  async waitForFunction (func, options) {
    options = {
      interval: this.config.interval,
      ...options
    }
    while (true) {
      if (func(this)) {
        break
      }
      await this.sleep(options.interval)
    }
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

  async pick (func, name) {
    this.data[name] = await func(this)
    return this.data[name]
  }

  async dynamic (func) {
    const operations = await func(this)
    await this.exec(operations)
  }
}
      
window.operator = new UIOperator({ slow: 10, interval: 10 })

UIOperator.EventGenerator = EventGenerator

export default UIOperator
