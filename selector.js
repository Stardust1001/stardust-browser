
import { isXPath } from './funcs.js'

export const xfind = (selector, root, all = false) => {
  const iterator = document.evaluate(selector, root || document)
  if (!all) return iterator.iterateNext()
  const nodes = []
  let n
  while (n = iterator.iterateNext()) {
    nodes.push(n)
  }
  return nodes
}

const qsa = Element.prototype.querySelectorAll
const sdqsa = ShadowRoot.prototype.querySelectorAll
Element.prototype.$one = function (selector) {
  return this.$all(selector)[0]
}
Element.prototype.$all = function (selector) {
  const root = this.shadowRoot || this
  const finder = this.shadowRoot ? sdqsa : qsa
  let [first, ...others] = selector.split(' >> ')
  let nodes = isXPath(first) ? xfind(first, root, true) : [...finder.call(root, first)]
  while (others.length) {
    if (/^\d+$/.test(others[0])) {
      nodes = [nodes[others[0] * 1]]
      others = others.slice(1)
    } else if (others[0] === '<visible>') {
      nodes = nodes.filter(n => n?._rect()?.width)
      others = others.slice(1)
    } else {
      break
    }
  }
  if (others.length) {
    nodes = nodes.reduce((all, n) => all.concat(n.$all(others.join(' >> '))), [])
  }
  return nodes
}
Element.prototype.$parent = function (level = 1) {
  let parent = this
  while (level --) {
    parent = parent.parentNode
    if (!parent) return parent
  }
  return parent
}
Element.prototype._text = function (value) {
  if (value) {
    this.textContent = value
  } else {
    return this.textContent.trim()
  }
}
Element.prototype._rect = function () {
  return this.getBoundingClientRect()
}

window.$one = document.$one = function (selector) {
  return Element.prototype.$one.call(document.documentElement, selector)
}
window.$all = document.$all = function (selector) {
  return Element.prototype.$all.call(document.documentElement, selector)
}

export const $one = window.$one
export const $all = window.$all

export default {
  $one,
  $all
}
