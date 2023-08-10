
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

const qs = Element.prototype.querySelector
const qsa = Element.prototype.querySelectorAll
const sdqs = ShadowRoot.prototype.querySelector
const sdqsa = ShadowRoot.prototype.querySelectorAll
Element.prototype.$one = function (selector) {
  const root = this.shadowRoot || this
  const finder = this.shadowRoot ? sdqs : qs
  const [first, ...others] = selector.split(' >> ')
  let node = isXPath(first) ? xfind(first, root) : finder.call(root, first)
  if (others.length) {
    node = node.$one(others.join(' >> '))
  }
  return node
}
Element.prototype.$all = function (selector) {
  const root = this.shadowRoot || this
  const finder = this.shadowRoot ? sdqsa : qsa
  return [...finder.call(root, selector)]
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
