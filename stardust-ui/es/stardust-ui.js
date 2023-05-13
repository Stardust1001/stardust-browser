import { resolveComponent as d, openBlock as r, createBlock as p, mergeProps as h, createElementBlock as g, Fragment as x, renderList as E, withCtx as c, renderSlot as y, toDisplayString as C, useCssVars as ge, createTextVNode as k, createSlots as N, resolveDynamicComponent as F, createCommentVNode as b, createVNode as m, normalizeProps as W, guardReactiveProps as ye, normalizeClass as D, isVNode as ve, createElementVNode as V, withModifiers as L, pushScopeId as oe, popScopeId as ne, resolveDirective as H, withDirectives as A, normalizeStyle as ke } from "vue";
import { a as B } from "./.store-ec770b89.js";
import { E as we } from "./@element-plus-3084701b.js";
const S = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, n] of t)
    o[s] = n;
  return o;
}, Ce = {
  name: "XActionSheet",
  props: {
    actionSheet: Object
  }
};
function Oe(e, t, o, s, n, l) {
  const a = d("van-action-sheet");
  return r(), p(a, h(e.$attrs, {
    show: o.actionSheet.show,
    "onUpdate:show": t[0] || (t[0] = (i) => o.actionSheet.show = i),
    actions: o.actionSheet.actions
  }), null, 16, ["show", "actions"]);
}
const Ve = /* @__PURE__ */ S(Ce, [["render", Oe]]), je = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ve
}, Symbol.toStringTag, { value: "Module" })), xe = {
  name: "XAutoRows",
  props: {
    span: {
      type: Number,
      default: 8
    },
    cols: {
      type: Array,
      default: []
    }
  },
  computed: {
    rows() {
      const e = [[]];
      let t = e[0], o = 0;
      return this.cols.forEach((s) => {
        const n = s.span || this.span;
        t.push(s), o += n, o >= 24 && (t = [], e.push(t), o = 0);
      }), e;
    }
  }
}, Ee = { class: "x-auto-rows" }, Ae = { key: 1 };
function Te(e, t, o, s, n, l) {
  const a = d("XCol"), i = d("XRow");
  return r(), g("div", Ee, [
    (r(!0), g(x, null, E(l.rows, (u, _) => (r(), p(i, h({ key: _ }, e.$attrs, {
      platform: e.$attrs.platform
    }), {
      default: c(() => [
        (r(!0), g(x, null, E(u, (f, w) => (r(), p(a, h(f, {
          span: f.span || o.span,
          key: w,
          platform: e.$attrs.platform
        }), {
          default: c(() => [
            f.slot || e.$attrs.slot ? y(e.$slots, f.slot || e.$attrs.slot, {
              key: 0,
              col: f
            }) : (r(), g("span", Ae, C(f.text), 1))
          ]),
          _: 2
        }, 1040, ["span", "platform"]))), 128))
      ]),
      _: 2
    }, 1040, ["platform"]))), 128))
  ]);
}
const Me = /* @__PURE__ */ S(xe, [["render", Te]]), ze = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Me
}, Symbol.toStringTag, { value: "Module" })), Pe = {
  name: "MobileXButton"
};
function Be(e, t, o, s, n, l) {
  const a = d("van-button");
  return r(), p(a, null, {
    default: c(() => [
      y(e.$slots, "default")
    ]),
    _: 3
  });
}
const Ie = /* @__PURE__ */ S(Pe, [["render", Be]]), Re = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ie
}, Symbol.toStringTag, { value: "Module" })), Ne = {
  name: "PcXButton"
};
function De(e, t, o, s, n, l) {
  const a = d("el-button");
  return r(), p(a, null, {
    default: c(() => [
      y(e.$slots, "default")
    ]),
    _: 3
  });
}
const Xe = /* @__PURE__ */ S(Ne, [["render", De]]), Fe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xe
}, Symbol.toStringTag, { value: "Module" }));
const { funcs: Ue } = StardustBrowser, le = {
  name: "XChart",
  props: {
    height: {
      type: String,
      default: "150px"
    },
    option: {
      type: Object,
      default: () => ({})
    },
    updator: Object
  },
  data() {
    return {
      zoom: 1
    };
  },
  computed: {
    zoomedHeight() {
      return Ue.calcPixel(this.height) * this.zoom + "px";
    },
    sidebarCollapse() {
      return this.$store.app.sidebarCollapse;
    }
  },
  watch: {
    zoomedHeight() {
      this.$nextTick(() => {
        var e;
        (e = this.chart) == null || e.resize();
      });
    },
    option: {
      handler: "update",
      immediate: !0
    },
    sidebarCollapse() {
      const e = (this.$store.app.toggleDuration || 0) * 1e3 + 50, t = 50;
      for (let o = 0; o < Math.ceil(e / t); o++)
        setTimeout(this.chart.resize, t * o);
    }
  },
  mounted() {
    this.chart = window.echarts.init(this.$refs.el), this.update(), document.addEventListener("resize", this.update), this.updator && (this.timer = setInterval(this.updator.handler.bind(this), this.updator.interval || 1e3));
  },
  beforeUnmount() {
    document.removeEventListener("resize", this.update), this.timer && clearInterval(this.timer);
  },
  methods: {
    update() {
      var e;
      this.zoom = 1 / (parseFloat(document.documentElement.style.zoom) || 1), (e = this.chart) == null || e.setOption({
        tooltip: {},
        ...this.option,
        grid: {
          left: 20,
          top: 10,
          right: 10,
          bottom: 20,
          ...this.option.grid
        }
      }, !0);
    }
  }
}, ce = () => {
  ge((e) => ({
    "127c024a": e.zoomedHeight,
    "137ee0b8": e.zoom
  }));
}, ue = le.setup;
le.setup = ue ? (e, t) => (ce(), ue(e, t)) : ce;
const qe = {
  class: "x-chart",
  ref: "el"
};
function Le(e, t, o, s, n, l) {
  return r(), g("div", qe, null, 512);
}
const We = /* @__PURE__ */ S(le, [["render", Le], ["__scopeId", "data-v-0c2da986"]]), He = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: We
}, Symbol.toStringTag, { value: "Module" })), { toRaw: Je } = Vue, Ke = (e, t) => {
  const o = e.__v_isRef ? e.value : Je(e);
  let s = o;
  if (typeof o[0] != "object" && (s = o.map((l) => ({ text: l, value: l }))), !t.sort)
    return s;
  const n = typeof t.sort == "string" ? t.sort : t.text || "text";
  return s.sort((l, a) => l[n].localeCompare(a[n]));
}, R = {
  formatOptions: Ke
}, Ye = {
  name: "MobileXCheckboxs",
  inheritAttrs: !1,
  props: {
    text: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: "value"
    },
    shape: {
      type: String,
      default: "square"
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    sort: Boolean | String,
    options: Array | Object
  },
  computed: {
    attrs() {
      const {
        clearable: e,
        platform: t,
        placeholder: o,
        rules: s,
        required: n,
        ...l
      } = this.$attrs;
      return l;
    }
  },
  methods: {
    formatOptions: R.formatOptions
  }
};
function Ze(e, t, o, s, n, l) {
  const a = d("van-checkbox"), i = d("van-checkbox-group");
  return r(), p(i, h({ class: "mobile-x-checkboxs" }, l.attrs, { direction: o.direction }), {
    default: c(() => [
      (r(!0), g(x, null, E(l.formatOptions(o.options, this), (u) => (r(), p(a, h(l.attrs, {
        key: u[o.text],
        shape: o.shape,
        name: u[o.value]
      }), {
        default: c(() => [
          k(C(u[o.text]), 1)
        ]),
        _: 2
      }, 1040, ["shape", "name"]))), 128))
    ]),
    _: 1
  }, 16, ["direction"]);
}
const Ge = /* @__PURE__ */ S(Ye, [["render", Ze]]), Qe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ge
}, Symbol.toStringTag, { value: "Module" })), et = {
  name: "PcXCheckboxs",
  inheritAttrs: !1,
  props: {
    modelValue: Array,
    text: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: "value"
    },
    sort: Boolean | String,
    options: Array | Object
  },
  emits: ["update:modelValue"],
  computed: {
    attrs() {
      const {
        clearable: e,
        platform: t,
        placeholder: o,
        ...s
      } = this.$attrs;
      return s;
    }
  },
  methods: {
    formatOptions: R.formatOptions
  }
};
function tt(e, t, o, s, n, l) {
  const a = d("el-checkbox"), i = d("el-checkbox-group");
  return r(), p(i, h({ class: "pc-x-checkboxs" }, l.attrs, {
    modelValue: o.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (u) => e.$emit("update:modelValue", u))
  }), {
    default: c(() => [
      (r(!0), g(x, null, E(l.formatOptions(o.options, this), (u) => (r(), p(a, h(l.attrs, {
        key: u[o.text],
        label: u[o.value]
      }), {
        default: c(() => [
          k(C(u[o.text]), 1)
        ]),
        _: 2
      }, 1040, ["label"]))), 128))
    ]),
    _: 1
  }, 16, ["modelValue"]);
}
const ot = /* @__PURE__ */ S(et, [["render", tt]]), nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ot
}, Symbol.toStringTag, { value: "Module" })), lt = {
  name: "MobileXCol",
  inheritAttrs: !1,
  computed: {
    attrs() {
      const { text: e, slot: t, ...o } = this.$attrs;
      return o;
    }
  }
};
function st(e, t, o, s, n, l) {
  const a = d("van-col");
  return r(), p(a, h(l.attrs, { class: "mobile-x-col" }), {
    default: c(() => [
      y(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const it = /* @__PURE__ */ S(lt, [["render", st]]), at = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: it
}, Symbol.toStringTag, { value: "Module" })), rt = {
  name: "PcXCol",
  inheritAttrs: !1,
  computed: {
    attrs() {
      const { text: e, slot: t, ...o } = this.$attrs;
      return o;
    }
  }
};
function ct(e, t, o, s, n, l) {
  const a = d("el-col");
  return r(), p(a, h(l.attrs, { class: "pc-x-col" }), {
    default: c(() => [
      y(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const ut = /* @__PURE__ */ S(rt, [["render", ct]]), dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ut
}, Symbol.toStringTag, { value: "Module" })), pt = {
  name: "MobileXDialog",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "update:modelValue",
    "submit",
    "cancel"
  ],
  computed: {
    visible: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    }
  }
};
function mt(e, t, o, s, n, l) {
  const a = d("van-dialog");
  return r(), p(a, h({ width: "92%" }, e.$attrs, {
    show: l.visible,
    "onUpdate:show": t[0] || (t[0] = (i) => l.visible = i),
    class: "mobile-x-dialog",
    "show-confirm-button": !!e.$attrs.onSubmit || !!e.$parent.$attrs.onSubmit,
    "show-cancel-button": !!e.$attrs.onCancel || !!e.$parent.$attrs.onCancel,
    onConfirm: t[1] || (t[1] = (i) => e.$emit("submit")),
    onCancel: t[2] || (t[2] = (i) => e.$emit("cancel"))
  }), N({ _: 2 }, [
    e.$slots.title ? {
      name: "title",
      fn: c(() => [
        y(e.$slots, "title")
      ]),
      key: "0"
    } : void 0,
    e.$slots.header ? {
      name: "header",
      fn: c(() => [
        y(e.$slots, "header")
      ]),
      key: "1"
    } : void 0,
    e.$slots.default ? {
      name: "default",
      fn: c(() => [
        y(e.$slots, "default")
      ]),
      key: "2"
    } : void 0
  ]), 1040, ["show", "show-confirm-button", "show-cancel-button"]);
}
const ft = /* @__PURE__ */ S(pt, [["render", mt]]), ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ft
}, Symbol.toStringTag, { value: "Module" })), _t = {
  name: "PcXDialog",
  props: {
    platform: String,
    drawer: {
      type: Boolean,
      default: !1
    },
    modelValue: {
      type: Boolean,
      default: !1
    },
    submitText: {
      type: String,
      default: "提交"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    draggable: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    "update:modelValue",
    "submit",
    "cancel",
    "fullscreenchange"
  ],
  data() {
    return {
      fullscreen: this.$attrs.fullscreen || !1
    };
  },
  computed: {
    visible: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    }
  },
  methods: {
    handleToggleFullscreen() {
      this.fullscreen = !this.fullscreen, this.$emit("fullscreenchange", this.fullscreen);
    }
  }
}, bt = {
  key: 1,
  class: "el-dialog__title"
};
function gt(e, t, o, s, n, l) {
  const a = d("x-icon"), i = d("el-button");
  return r(), p(F(o.drawer ? "ElDrawer" : "ElDialog"), h({ draggable: o.draggable }, e.$attrs, {
    modelValue: l.visible,
    "onUpdate:modelValue": t[2] || (t[2] = (u) => l.visible = u),
    fullscreen: n.fullscreen,
    size: e.$attrs.width,
    class: ["pc-x-dialog", { "pc-x-drawer": o.drawer }]
  }), {
    header: c(() => [
      e.$slots.header ? y(e.$slots, "header", { key: 0 }) : (r(), g("span", bt, C(e.$attrs.title), 1)),
      o.drawer ? b("", !0) : (r(), p(a, {
        key: 2,
        name: "FullScreen",
        class: "full el-dialog__headerbtn",
        style: { right: "50px" },
        onClick: l.handleToggleFullscreen
      }, null, 8, ["onClick"]))
    ]),
    footer: c(() => [
      e.$slots.footer ? y(e.$slots, "footer", { key: 0 }) : b("", !0),
      e.$attrs.onSubmit || e.$parent.$attrs.onSubmit ? (r(), p(i, {
        key: 1,
        type: "primary",
        disabled: e.$attrs["submit-disabled"],
        onClick: t[0] || (t[0] = (u) => e.$emit("submit"))
      }, {
        default: c(() => [
          k(C(o.submitText), 1)
        ]),
        _: 1
      }, 8, ["disabled"])) : b("", !0),
      e.$attrs.onCancel || e.$parent.$attrs.onCancel ? (r(), p(i, {
        key: 2,
        disabled: e.$attrs["cancel-disabled"],
        onClick: t[1] || (t[1] = (u) => e.$emit("cancel"))
      }, {
        default: c(() => [
          k(C(o.cancelText), 1)
        ]),
        _: 1
      }, 8, ["disabled"])) : b("", !0)
    ]),
    default: c(() => [
      e.$slots.default ? y(e.$slots, "default", { key: 0 }) : b("", !0)
    ]),
    _: 3
  }, 16, ["draggable", "modelValue", "fullscreen", "size", "class"]);
}
const yt = /* @__PURE__ */ S(_t, [["render", gt]]), vt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yt
}, Symbol.toStringTag, { value: "Module" })), K = {
  provinces: Object.entries(B.province_list).map((e) => ({ value: e[0], text: e[1] })),
  cities: Object.entries(B.city_list).map((e) => ({ value: e[0], text: e[1] })),
  counties: Object.entries(B.county_list).map((e) => ({ value: e[0], text: e[1] }))
}, St = {
  name: "XDistrictSelect",
  props: {
    modelValue: String,
    level: {
      type: String,
      default: "county"
    }
  },
  emits: ["update:modelValue", "change"],
  data() {
    return {
      inited: !0,
      province: "",
      city: "",
      county: "",
      provinces: Object.freeze(K.provinces),
      cities: [],
      counties: []
    };
  },
  computed: {
    number() {
      return { province: 1, city: 2, county: 3 }[this.level];
    },
    span() {
      return 24 / this.number;
    }
  },
  watch: {
    province(e) {
      if (this.county || this.update(), this.city = this.county = "", !e) {
        this.cities = [], this.counties = [];
        return;
      }
      const t = e.slice(0, 2);
      this.cities = Object.freeze(K.cities.filter((o) => o.value.slice(0, 2) === t));
    },
    city(e) {
      if (this.county || this.update(), this.county = "", !e) {
        this.counties = [];
        return;
      }
      const t = e.slice(0, 4);
      this.counties = Object.freeze(K.counties.filter((o) => o.value.slice(0, 4) === t));
    },
    county() {
      this.update();
    },
    modelValue: {
      handler: "init",
      immediate: !0
    }
  },
  methods: {
    async init() {
      this.inited = !1;
      const [e, t, o] = this.modelValue.split("/");
      if (e) {
        const s = Object.entries(B.province_list).find((n) => n[1] === e);
        this.province = s == null ? void 0 : s[0];
      } else {
        this.province = "", this.inited = !0;
        return;
      }
      if (await this.$nextTick(), t) {
        const s = Object.entries(B.city_list).find((n) => n[1] === t);
        this.city = s == null ? void 0 : s[0];
      } else {
        this.city = "", this.inited = !0;
        return;
      }
      if (await this.$nextTick(), o) {
        const s = Object.entries(B.county_list).find((n) => n[1] === o);
        this.county = s == null ? void 0 : s[0];
      } else
        this.county = "";
      this.inited = !0, this.update();
    },
    update() {
      if (!this.inited)
        return;
      let e = [
        this.province && B.province_list[this.province] || "",
        this.number > 1 && this.city && B.city_list[this.city] || "",
        this.number > 2 && this.county && B.county_list[this.county] || ""
      ].slice(0, this.number).join("/");
      this.$emit("update:modelValue", e), this.$emit("change", e);
    }
  }
};
function $t(e, t, o, s, n, l) {
  const a = d("x-select"), i = d("XCol"), u = d("XRow");
  return r(), p(u, {
    class: "x-district-select",
    gutter: 10
  }, {
    default: c(() => [
      m(i, { span: l.span }, {
        default: c(() => [
          m(a, {
            modelValue: n.province,
            "onUpdate:modelValue": t[0] || (t[0] = (_) => n.province = _),
            options: n.provinces,
            placeholder: "省份"
          }, null, 8, ["modelValue", "options"])
        ]),
        _: 1
      }, 8, ["span"]),
      l.number > 1 ? (r(), p(i, {
        key: 0,
        span: l.span
      }, {
        default: c(() => [
          m(a, {
            modelValue: n.city,
            "onUpdate:modelValue": t[1] || (t[1] = (_) => n.city = _),
            options: n.cities,
            placeholder: "城市"
          }, null, 8, ["modelValue", "options"])
        ]),
        _: 1
      }, 8, ["span"])) : b("", !0),
      l.number > 2 ? (r(), p(i, {
        key: 1,
        span: l.span
      }, {
        default: c(() => [
          m(a, {
            modelValue: n.county,
            "onUpdate:modelValue": t[2] || (t[2] = (_) => n.county = _),
            options: n.counties,
            placeholder: "县区"
          }, null, 8, ["modelValue", "options"])
        ]),
        _: 1
      }, 8, ["span"])) : b("", !0)
    ]),
    _: 1
  });
}
const kt = /* @__PURE__ */ S(St, [["render", $t]]), wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kt
}, Symbol.toStringTag, { value: "Module" }));
function Ct() {
  return {
    dialog: Object,
    form: Object,
    model: Object,
    items: Array,
    rules: Object,
    fref: Object,
    hideLabels: {
      type: Boolean,
      default: !1
    }
  };
}
function Ot() {
  const { dialog: e, form: t, model: o } = this.$props;
  return o || (e || t).form;
}
function Vt() {
  const { hideLabels: e, dialog: t, form: o } = this.$props;
  return (this.items || (t || o).formItems).map((n) => (delete n.visible, e ? {
    ...n,
    label: " ",
    _label: n.label
  } : n)).filter((n) => this.dialog ? this.dialog.isEditing ? n.canEdit !== !1 : n.canAdd !== !1 : !0).map((n) => Object.assign({}, n, n.formAttrs));
}
function jt() {
  const { dialog: e, form: t, rules: o } = this.$props;
  return o || (e || t).formRules;
}
function xt(e) {
  var s;
  let { placeholder: t, comp: o } = e;
  return t || (t = "options" in e || /(date|time)/i.test(o) ? "请选择" : "请输入", t += ((s = e.label) == null ? void 0 : s.trim()) || e._label || e.text || e.model || ""), t;
}
function Et(e) {
  const t = { ...e.style };
  return "itemWidth" in this && (t.width = this.itemWidth), e.span && (t.width = e.span / 24 * 100 + "%"), e.offset && (t.marginLeft = e.offset / 24 * 100 + "%"), t;
}
function At(e) {
  return typeof e == "boolean" ? e.toString() : e;
}
const X = {
  props: Ct,
  computed: {
    _model: Ot,
    _items: Vt,
    _rules: jt
  },
  methods: {
    calcPlaceholder: xt,
    calcStyle: Et,
    formatModelValue: At
  }
}, Tt = {
  name: "MobileXForm",
  inheritAttrs: !1,
  props: {
    ...X.props()
  },
  emits: ["update:fref"],
  computed: {
    ...X.computed
  },
  mounted() {
    const e = this.dialog ?? this.form;
    e && (e.formRef = this.$refs.formRef), this.$emit("update:fref", this.$refs.formRef);
  },
  methods: {
    ...X.methods
  }
};
function Mt(e, t, o, s, n, l) {
  const a = d("mobile-x-form-item"), i = d("van-cell-group"), u = d("van-form");
  return r(), p(u, {
    ref: "formRef",
    class: "mobile-x-form"
  }, {
    default: c(() => [
      e.$slots.pre ? y(e.$slots, "pre", { key: 0 }) : b("", !0),
      m(i, W(ye(e.$attrs)), {
        default: c(() => [
          (r(!0), g(x, null, E(e._items, (_, f) => (r(), p(a, h(_, {
            rules: e._rules[_.prop] || _.rules,
            key: f,
            modelValue: e.formatModelValue(e._model[_.prop]),
            "onUpdate:modelValue": (w) => e._model[_.prop] = w,
            placeholder: e.calcPlaceholder(_)
          }), {
            default: c(() => [
              _.slot ? y(e.$slots, _.slot, W(h({ key: 0 }, _))) : b("", !0)
            ]),
            _: 2
          }, 1040, ["rules", "modelValue", "onUpdate:modelValue", "placeholder"]))), 128))
        ]),
        _: 3
      }, 16),
      e.$slots.default ? y(e.$slots, "default", { key: 1 }) : b("", !0)
    ]),
    _: 3
  }, 512);
}
const zt = /* @__PURE__ */ S(Tt, [["render", Mt]]), Pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zt
}, Symbol.toStringTag, { value: "Module" })), Bt = {
  name: "PcXForm",
  inheritAttrs: !1,
  props: {
    ...X.props(),
    title: {
      type: String,
      default: "表单"
    },
    hideLabels: {
      type: Boolean,
      default: !1
    },
    labelWidth: {
      type: String,
      default: (e) => e.labelWidth || (e.dialog ? "100px" : "0px")
    },
    useCollapse: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:fref"],
  data() {
    return {
      activeNames: ["name"]
    };
  },
  computed: {
    ...X.computed
  },
  mounted() {
    const e = this.dialog ?? this.form;
    e && (e.formRef = this.$refs.formRef), this.$emit("update:fref", this.$refs.formRef);
  },
  methods: {
    ...X.methods
  }
}, It = { key: 1 };
function Rt(e, t, o, s, n, l) {
  const a = d("pc-x-form-item"), i = d("el-form"), u = d("el-collapse-item"), _ = d("el-collapse");
  return r(), p(_, {
    modelValue: n.activeNames,
    "onUpdate:modelValue": t[0] || (t[0] = (f) => n.activeNames = f),
    class: D((o.useCollapse ? "use" : "no") + "-collapse")
  }, {
    default: c(() => [
      m(u, {
        name: n.activeNames[0]
      }, {
        title: c(() => [
          e.$slots["collapse-title"] ? y(e.$slots, "collapse-title", { key: 0 }) : (r(), g("span", It, C(o.title), 1))
        ]),
        default: c(() => [
          m(i, h({ ref: "formRef" }, e.$attrs, {
            model: e._model,
            rules: e._rules,
            "label-width": o.labelWidth,
            "label-position": e.$attrs.labelPosition || "right",
            class: ["pc-x-form", { "hide-labels": o.hideLabels }]
          }), {
            default: c(() => [
              e.$slots.pre ? y(e.$slots, "pre", { key: 0 }) : b("", !0),
              (r(!0), g(x, null, E(e._items, (f, w) => (r(), p(a, h(f, {
                key: w,
                modelValue: e._model[f.prop],
                "onUpdate:modelValue": [($) => e._model[f.prop] = $, ($) => f.onChange || null],
                "label-width": o.labelWidth,
                prop: f.prop || f.model,
                clearable: f.clearable !== !1,
                placeholder: e.calcPlaceholder(f),
                style: e.calcStyle(f),
                "show-tooltip": e.$attrs.showTooltip || !1
              }), {
                default: c(() => [
                  f.slot ? y(e.$slots, f.slot, { key: 0 }) : b("", !0)
                ]),
                _: 2
              }, 1040, ["modelValue", "onUpdate:modelValue", "label-width", "prop", "clearable", "placeholder", "style", "show-tooltip"]))), 128)),
              e.$slots.default ? y(e.$slots, "default", { key: 1 }) : b("", !0)
            ]),
            _: 3
          }, 16, ["model", "rules", "label-width", "label-position", "class"])
        ]),
        _: 3
      }, 8, ["name"])
    ]),
    _: 3
  }, 8, ["modelValue", "class"]);
}
const Nt = /* @__PURE__ */ S(Bt, [["render", Rt]]), Dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Nt
}, Symbol.toStringTag, { value: "Module" }));
function de(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ve(e);
}
const {
  h: G
} = Vue, Q = (e, t) => e.$.appContext.components[t], ee = (e) => {
  const {
    $props: t,
    $attrs: o,
    attrs: s,
    $emit: n
  } = e;
  let {
    comp: l,
    compType: a,
    html: i,
    text: u
  } = t;
  const _ = {
    ...s,
    "onUpdate:modelValue": (w) => n("update:modelValue", w)
  }, f = [];
  return a === "html" ? _.class = "comp-html" : l = Q(e, l), i && (_.innerHTML = i), u && f.push(u), G(l, _, {
    default: () => f
  });
}, Xt = (e) => {
  const {
    $props: t,
    $attrs: o,
    attrs: s,
    $emit: n,
    $slots: l
  } = e, {
    slot: a,
    showTooltip: i,
    placeholder: u
  } = t;
  if (a && !o.label)
    return l.default();
  let _ = null;
  if (i) {
    let f;
    _ = m(d("el-tooltip"), {
      effect: "dark",
      content: u,
      placement: "bottom"
    }, de(f = ee(e)) ? f : {
      default: () => [f]
    });
  } else
    _ = ee(e);
  return m(d("el-form-item"), null, de(_) ? _ : {
    default: () => [_]
  });
}, Ft = (e) => {
  const {
    $props: t,
    $attrs: o,
    attrs: s,
    $emit: n,
    $slots: l,
    mValue: a
  } = e, {
    slot: i,
    comp: u,
    modelValue: _
  } = t;
  if (i && !o.label)
    return l.default({
      ...t,
      ...o
    });
  const f = {
    modelValue: a,
    "onUpdate:modelValue": (w) => n("update:modelValue", w)
  };
  return i && o.label || u ? G(Q(e, "van-field"), f, {
    input: () => i && o.label ? l.default() : ee(e)
  }) : (Object.assign(f, s), G(Q(e, "van-field"), f));
}, Ut = {
  name: "MobileXFormItem",
  props: {
    modelValue: Boolean | Number | String | Array,
    clearable: {
      type: Boolean,
      default: !0
    },
    // 接收下面这几个属性，为了避免这些属性被绑定到当前组件根节点上，在下面会进行过滤传给子组件
    comp: String,
    compType: String,
    options: Array,
    platform: String,
    iconSize: String | Number,
    min: Number,
    max: Number,
    maxlength: String | Number,
    buttonSize: String | Number,
    activeColor: String,
    slot: String,
    time: Number,
    percentage: Number,
    barHeight: String | Number,
    text: String,
    html: String
  },
  emits: ["update:modelValue"],
  computed: {
    attrs() {
      const {
        prop: e,
        label: t,
        platform: o,
        comp: s,
        compType: n,
        iconSize: l,
        slot: a,
        html: i,
        ...u
      } = { ...this.$props, ...this.$attrs };
      return u;
    },
    mValue: {
      get() {
        var e, t;
        return (e = this.comp) != null && e.endsWith("XSelect") || (t = this.comp) != null && t.endsWith("x-select") ? this.modelValue : "";
      },
      set(e) {
        var t, o;
        ((t = this.comp) != null && t.endsWith("XSelect") || (o = this.comp) != null && o.endsWith("x-select")) && this.$emit("update:modelValue", e);
      }
    }
  },
  render() {
    return Ft(this);
  }
}, qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ut
}, Symbol.toStringTag, { value: "Module" }));
const se = {
  name: "PcXFormItem",
  props: {
    modelValue: Boolean | Number | String | Array,
    comp: {
      type: String,
      default: "ElInput"
    },
    showTooltip: {
      type: Boolean,
      default: !1
    },
    labelWidth: String,
    // 接收下面这几个属性，为了避免这些属性被绑定到当前组件根节点上，在下面会进行过滤传给子组件
    compType: String,
    slot: String,
    span: Number,
    clearable: Boolean,
    html: String,
    text: String,
    options: Array,
    platform: String,
    placeholder: String,
    maxlength: String | Number,
    prefixIcon: String,
    suffixIcon: String,
    modelName: String,
    params: Object,
    labelTexts: Array,
    required: Boolean,
    minWidth: String | Number,
    _label: String
  },
  emits: ["update:modelValue"],
  computed: {
    attrs() {
      const {
        prop: e,
        label: t,
        platform: o,
        comp: s,
        slot: n,
        compType: l,
        span: a,
        offset: i,
        showTooltip: u,
        required: _,
        format: f,
        style: w,
        html: $,
        class: P,
        ...M
      } = { ...this.$props, ...this.$attrs };
      return M;
    },
    width() {
      return this.$attrs.label ? this.labelWidth : "0px";
    }
  },
  render() {
    return Xt(this);
  }
}, pe = () => {
  ge((e) => ({
    ba9709f0: e.width
  }));
}, me = se.setup;
se.setup = me ? (e, t) => (pe(), me(e, t)) : pe;
const Lt = /* @__PURE__ */ S(se, [["__scopeId", "data-v-d2cde1e2"]]), Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lt
}, Symbol.toStringTag, { value: "Module" })), fe = /* @__PURE__ */ Object.assign({}), Ht = {
  name: "MobileXIcon",
  props: {
    name: String
  },
  data() {
    return {
      icons: {}
    };
  },
  created() {
    this.initIcons();
  },
  methods: {
    async initIcons() {
      const e = {};
      await Promise.all(Object.keys(fe).map(async (t) => {
        const o = t.split("/").pop().split(".")[0], s = await fe[t]();
        e[o] = s.default;
      })), this.icons = e;
    }
  }
}, Jt = ["src"];
function Kt(e, t, o, s, n, l) {
  const a = d("van-icon");
  return n.icons[o.name] ? (r(), g("img", {
    key: 0,
    src: n.icons[o.name],
    alt: "icon"
  }, null, 8, Jt)) : (r(), p(a, h({ key: 1 }, e.$attrs, { name: o.name }), null, 16, ["name"]));
}
const Yt = /* @__PURE__ */ S(Ht, [["render", Kt]]), Zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yt
}, Symbol.toStringTag, { value: "Module" })), he = /* @__PURE__ */ Object.assign({}), Gt = {
  name: "PcXIcon",
  props: {
    name: String
  },
  data() {
    return {
      icons: {}
    };
  },
  created() {
    this.initIcons();
  },
  methods: {
    async initIcons() {
      const e = {};
      await Promise.all(Object.keys(he).map(async (t) => {
        const o = t.split("/").pop().split(".")[0], s = await he[t]();
        e[o] = s.default;
      })), this.icons = e;
    }
  }
}, Qt = ["src"];
function eo(e, t, o, s, n, l) {
  const a = d("el-icon");
  return n.icons[o.name] ? (r(), g("img", {
    key: 0,
    src: n.icons[o.name],
    alt: "icon"
  }, null, 8, Qt)) : (r(), p(a, W(h({ key: 1 }, e.$attrs)), {
    default: c(() => [
      (r(), p(F(o.name)))
    ]),
    _: 1
  }, 16));
}
const to = /* @__PURE__ */ S(Gt, [["render", eo]]), oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: to
}, Symbol.toStringTag, { value: "Module" })), { highdict: no } = StardustJs, { storage: lo } = StardustBrowser, { local: Se } = lo, ie = ["index", "selection", "expand", "radio", "_index"];
function so() {
  return {
    table: Object,
    loading: Boolean,
    data: Array,
    columns: Array,
    query: Object,
    total: Number,
    selection: Array,
    tref: Object,
    defaultValue: "",
    slotAll: {
      type: Boolean,
      default: !1
    },
    hideHeader: {
      type: Boolean,
      default: !1
    },
    hideTools: {
      type: Boolean,
      default: !1
    },
    operatesWidth: {
      type: [Number, String],
      default: 195
    },
    hideSettings: {
      type: Boolean,
      default: !1
    },
    onSelectionChange: Function,
    onSortChange: Function,
    onHeaderDragend: Function,
    onCheckedChange: Function,
    onSearch: Function,
    onAdd: Function,
    onEdit: Function,
    onDelete: Function,
    onRowEdit: Function,
    onCancelEdit: Function,
    onExport: Function,
    onSearchExport: Function,
    onImport: Function,
    onMultiEdit: Function,
    onMultiDelete: Function,
    controller: Object,
    listen: Array | String,
    title: {
      type: String,
      default: "表格"
    },
    useCollapse: {
      type: Boolean,
      default: !1
    },
    uid: String
  };
}
function io() {
  return [
    "update:tref",
    "search",
    "add",
    "edit",
    "row-edit",
    "cancel-edit",
    "delete",
    "export",
    "search-export"
  ];
}
function ao() {
  const t = (this.$.attrs.platform || (window.isMobile ? "mobile" : "pc")) + "TableAttrs", o = { ...this.$attrs };
  return t in this && Object.assign(o, this[t]), o;
}
function ro() {
  const e = {};
  return ["search", "add", "multi-edit", "multi-delete", "export", "search-export", "import"].forEach((o) => e[o] = o), { ...e, ...this.$attrs.domids };
}
function co() {
  const e = Object.keys(this._attrs).filter((o) => !o.endsWith("-btn")), t = {};
  return e.forEach((o) => t[o] = this._attrs[o]), delete t.platform, {
    border: !0,
    stripe: !0,
    fit: !0,
    "highlight-current-row": !0,
    ...t,
    data: this._data,
    "cell-class-name": this.cellClassName,
    "cell-style": this.cellStyle
  };
}
function uo() {
  const { table: e, loading: t } = this.$props;
  return t || (e == null ? void 0 : e.loading);
}
function po() {
  const { table: e, data: t } = this.$props;
  return t || (e == null ? void 0 : e.list) || [];
}
function mo() {
  const { $props: e, _query: t } = this, { table: o, columns: s } = e;
  return (s || (o == null ? void 0 : o.columns) || []).map((l) => l.type === "_index" ? Object.assign({
    width: 60,
    label: "序号",
    index(a) {
      const { page: i, limit: u } = t;
      return (i - 1) * u + a + 1;
    }
  }, l, { type: "index" }) : l.type === "radio" ? Object.assign({ width: 60, label: "单选" }, l) : Object.assign({}, l, l.tableAttrs));
}
function fo() {
  const { table: e, query: t } = this.$props;
  return t || (e == null ? void 0 : e.query);
}
function ho() {
  const { table: e, total: t } = this.$props;
  return t || (e == null ? void 0 : e.total);
}
function _o() {
  const { table: e, selection: t } = this.$props;
  return t || (e == null ? void 0 : e.selection);
}
function bo() {
  return this.onSearch || this._listen.search ? (e) => {
    e ? this._emit("search") : this.$refs.searcher.open();
  } : null;
}
function go() {
  return this.onAdd || this._listen.add ? () => this._emit("add") : null;
}
function yo() {
  return this.onExport || this._listen.export ? () => this._emit("export") : null;
}
function vo() {
  return this.onSearchExport || this._listen["search-export"] ? () => this._emit("search-export") : null;
}
function So() {
  return this.onImport || this._listen.import ? () => this._emit("import") : null;
}
function $o() {
  return this.onMultiEdit || this._listen["multi-edit"] ? () => this._emit("multi-edit") : null;
}
function ko() {
  return this.onMultiDelete || this._listen["multi-delete"] ? () => this._emit("multi-delete") : null;
}
function wo() {
  if (!this.controller)
    return {};
  let e = this.listen;
  Array.isArray(this.listen) || (e = this.listen.split(","));
  const t = {};
  return e.forEach((o) => {
    const s = "handle" + o.split("-").map((n) => n[0].toUpperCase() + n.slice(1)).join("");
    t[o] = this.controller[s];
  }), t;
}
function Co() {
  const e = this._columns.filter((o) => o.type && ie.includes(o.type)), t = this.settings.columns.filter((o) => !o.hide).map((o) => {
    const s = this._columns.find((n) => n.prop === o.prop);
    return {
      sortable: "custom",
      ...s,
      width: o.width || s.width
    };
  });
  return e.concat(t);
}
function Oo() {
  const { table: e, uid: t } = this.$props;
  return t || (e == null ? void 0 : e.uid) || "";
}
function Vo() {
  return this.table.hideOperates || this.$attrs["hide-operates"] !== void 0 && this.$attrs["hide-operates"] !== !1;
}
function jo() {
  return this._columns.filter((e) => !e.type || !ie.includes(e.type));
}
function xo() {
  return this.table.searcherConfig ?? this.$attrs["searcher-config"] ?? {};
}
function Eo() {
  const e = this._uid && Se.getJson(`Settings[${this._uid}]`, {}) || {};
  e.columns = e.columns || this._columns.filter((t) => !t.type || !ie.includes(t.type)).map((t) => {
    const { prop: o, label: s, show: n, hide: l, width: a } = t;
    return { prop: o, label: s, show: n, hide: l, width: a };
  }), this.settings = e;
}
function Ao(e) {
  Se.setJson(`Settings[${this._uid}]`, e);
}
function To(e, t) {
  const { prop: o } = t;
  let { format: s, formatter: n } = t.tableAttrs || t;
  s = Array.isArray(t.options) ? s !== !1 : s;
  const l = e[o];
  if (l == null || l === "")
    return this.defaultValue;
  if (s || n) {
    const a = `_formatted_${o}`;
    if (a in e)
      return e[a];
    if (n)
      return typeof n == "function" ? n(l, e, t) : no.get(e, n);
  }
  return l;
}
function Mo(e) {
  if (["index", "selection", "expand"].includes(e.type))
    return !1;
  const { showOverflowTooltip: t } = e.tableAttrs || e;
  return t !== !1;
}
function zo(e) {
  this.params = e, this._emit("search", e);
}
function Po(e) {
  this.saveSettings(e), this.initSettings();
}
function Bo(e, t, o, s) {
  const n = this.settings.columns.find((l) => l.prop === o.property);
  n && (n.width = e, this.saveSettings(this.settings)), this.onHeaderDragend && this.onHeaderDragend(e, t, o, s);
}
function Io(e) {
  this._selection && (this._selection.splice(0), this._selection.push(...e)), this.onSelectionChange && this.onSelectionChange(e);
}
function Ro(...e) {
  var t, o;
  this.onSortChange ? this.onSortChange(...e) : e[0].column.sortable === "custom" && ((o = (t = this.controller) == null ? void 0 : t.handleSortChange) == null || o.call(t, ...e));
}
function No(e) {
  this.checked = e.target.value * 1;
  const t = this._data[this.checked];
  this.table && (this.table.checked = t), this.onCheckedChange && this.onCheckedChange(t);
}
function Do() {
  this.isFullscreen = !this.isFullscreen, this.isFullscreen ? (this.zoom = document.documentElement.style.zoom, document.documentElement.style.zoom = 1) : document.documentElement.style.zoom = this.zoom;
}
function Xo(e) {
  var s;
  let t = this.$attrs["cell-class-name"] ? this.$attrs["cell-class-name"](e) : "";
  const o = this._visibleColumns[e.columnIndex];
  if ((s = o == null ? void 0 : o.tableAttrs) != null && s.class) {
    const n = o.tableAttrs.class;
    typeof n == "function" ? t += " " + n(e) : typeof n == "string" && (t += " " + n);
  }
  return t ? [...new Set(t.split(" "))].join(" ") : "";
}
function Fo(e) {
  var s;
  const t = this.$attrs["cell-style"] ? this.$attrs["cell-style"](e) : {}, o = this._visibleColumns[e.columnIndex];
  if ((s = o == null ? void 0 : o.tableAttrs) != null && s.style) {
    const n = o.tableAttrs.style;
    typeof n == "function" ? Object.assign(t, n(e)) : typeof n == "object" && Object.assign(t, n);
  }
  return Object.keys(t) ? t : null;
}
function Uo(e) {
  return !!(this.onEdit || this._listen.edit) && e.editable !== !1 && !e.isEditing;
}
function qo(e) {
  return !!(this.onRowEdit || this._listen["row-edit"]) && this.table.isRowEdit && e.isEditing;
}
function Lo(e) {
  return !!(this.onRowEdit || this._listen["row-edit"]) && this.table.isRowEdit && e.isEditing;
}
function Wo(e) {
  return !!(this.onCancelEdit || this._listen["cancel-edit"]) && this.table.isRowEdit && e.isEditing;
}
function Ho(e) {
  return !!(this.onDelete || this._listen.delete) && e.deletable !== !1;
}
function Jo(e, t) {
  const o = "on" + e.split("-").map((s) => s[0].toUpperCase() + s.slice(1)).join("");
  this[o] ? this[o](t) : this._listen[e] ? this._listen[e](t) : this.$emit(e, t);
}
function Ko() {
  this.zoom !== 1 && (document.documentElement.style.zoom = this.zoom);
}
const T = {
  props: so,
  emits: io,
  computed: {
    _attrs: ao,
    domids: ro,
    elTableAttrs: co,
    _loading: uo,
    _data: po,
    _columns: mo,
    _query: fo,
    _total: ho,
    _selection: _o,
    _onSearch: bo,
    _onAdd: go,
    _onExport: yo,
    _onSearchExport: vo,
    _onImport: So,
    _onMultiEdit: $o,
    _onMultiDelete: ko,
    _listen: wo,
    _visibleColumns: Co,
    _uid: Oo,
    hideOperates: Vo,
    searcherColumns: jo,
    searcherConfig: xo
  },
  watch: {
    $route: Ko
  },
  methods: {
    initSettings: Eo,
    saveSettings: Ao,
    calcValue: To,
    calcOverflowTooltip: Mo,
    handleSearch: zo,
    handleResetSettings: Po,
    handleHeaderDragend: Bo,
    handleSelectionChange: Io,
    handleSortChange: Ro,
    handleCheckedChange: No,
    handleToggleFullscreen: Do,
    cellClassName: Xo,
    cellStyle: Fo,
    canEdit: Uo,
    canSave: qo,
    canRowEdit: Lo,
    canCancelEdit: Wo,
    canDelete: Ho,
    _emit: Jo
  }
};
const Yo = {
  name: "XInfo",
  props: {
    data: Object,
    fields: Array,
    column: {
      type: Number,
      default: 24
    },
    border: {
      type: Boolean,
      default: !0
    },
    span: {
      type: Number,
      default: window.isMobile ? 24 : 8
    },
    labelSlot: {
      type: Boolean,
      default: !1
    },
    defaultValue: ""
  },
  computed: {
    blocks() {
      const e = {};
      return this.fields.filter((t) => t.prop).forEach((t) => {
        const { infoAttrs: o = {}, ...s } = t, n = { span: this.span, ...s, ...o }, l = n.block || "基本信息";
        let a = e[l];
        a || (e[l] = a = [], a.span = 0), a.span + n.span > 24 && a.length ? a[a.length - 1].span += 24 - a.span : a.span += n.span, a.push(n);
      }), e;
    },
    hideHeader() {
      const e = Object.keys(this.blocks);
      return e.length === 1 && e[0] === "基本信息";
    }
  },
  data() {
    return {
      activeNames: []
    };
  },
  created() {
    this.activeNames = Object.keys(this.blocks);
  },
  methods: {
    calcValue: T.methods.calcValue
  }
}, Zo = { key: 0 }, Go = { key: 1 };
function Qo(e, t, o, s, n, l) {
  const a = d("el-descriptions-item"), i = d("el-descriptions"), u = d("el-collapse-item"), _ = d("el-collapse");
  return r(), p(_, {
    modelValue: n.activeNames,
    "onUpdate:modelValue": t[0] || (t[0] = (f) => n.activeNames = f),
    class: D(["x-info", { "hide-header": l.hideHeader }])
  }, {
    default: c(() => [
      (r(!0), g(x, null, E(l.blocks, (f, w) => (r(), p(u, {
        key: w,
        title: w,
        name: w
      }, {
        default: c(() => [
          m(i, {
            column: o.column,
            border: o.border
          }, {
            default: c(() => [
              (r(!0), g(x, null, E(f, ($) => (r(), p(a, h({
                key: $.prop
              }, $), N({
                default: c(() => [
                  $.slot ? (r(), g("span", Zo, [
                    y(e.$slots, $.slot, W(ye({ data: o.data, field: $, value: l.calcValue(o.data, $) })), void 0, !0)
                  ])) : (r(), g("span", Go, C(l.calcValue(o.data, $)), 1))
                ]),
                _: 2
              }, [
                o.labelSlot ? {
                  name: "label",
                  fn: c(() => [
                    y(e.$slots, "label", {
                      label: $.label
                    }, void 0, !0)
                  ]),
                  key: "0"
                } : void 0
              ]), 1040))), 128))
            ]),
            _: 2
          }, 1032, ["column", "border"])
        ]),
        _: 2
      }, 1032, ["title", "name"]))), 128))
    ]),
    _: 3
  }, 8, ["modelValue", "class"]);
}
const en = /* @__PURE__ */ S(Yo, [["render", Qo], ["__scopeId", "data-v-0c3b67a5"]]), tn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: en
}, Symbol.toStringTag, { value: "Module" })), on = {
  name: "XLooper",
  props: {
    compName: String,
    items: Array
  }
}, nn = { key: 1 };
function ln(e, t, o, s, n, l) {
  return r(), g("div", null, [
    (r(!0), g(x, null, E(o.items, (a, i) => (r(), p(F(o.compName), h({ key: i }, a), {
      default: c(() => [
        a.slot || e.$attrs.slot ? y(e.$slots, "default", {
          key: 0,
          item: a
        }) : (r(), g("span", nn, C(a.text), 1))
      ]),
      _: 2
    }, 1040))), 128))
  ]);
}
const sn = /* @__PURE__ */ S(on, [["render", ln]]), an = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sn
}, Symbol.toStringTag, { value: "Module" })), rn = {
  name: "MobileXPagination",
  props: {
    query: Object,
    total: Number
  },
  emits: ["search"],
  computed: {
    pageCount() {
      return Math.ceil(this.total / this.query.limit);
    }
  },
  watch: {
    "query.page"() {
      this.$emit("search");
    },
    "query.limit"() {
      this.$emit("search");
    }
  }
};
function cn(e, t, o, s, n, l) {
  const a = d("van-icon"), i = d("van-pagination");
  return r(), p(i, h({ ...e.$attrs, ...e.mobilePagination || {} }, {
    modelValue: o.query.page,
    "onUpdate:modelValue": t[0] || (t[0] = (u) => o.query.page = u),
    "items-per-page": o.query.limit,
    "page-count": l.pageCount,
    "total-items": o.total
  }), {
    "prev-text": c(() => [
      m(a, { name: "arrow-left" })
    ]),
    "next-text": c(() => [
      m(a, { name: "arrow" })
    ]),
    page: c(({ text: u }) => [
      k(C(u), 1)
    ]),
    _: 1
  }, 16, ["modelValue", "items-per-page", "page-count", "total-items"]);
}
const un = /* @__PURE__ */ S(rn, [["render", cn]]), dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: un
}, Symbol.toStringTag, { value: "Module" })), pn = {
  name: "PcXPagination",
  props: {
    query: Object,
    total: Number
  },
  emits: ["search"],
  computed: {
    pageCount() {
      return Math.ceil(this.total / this.query.limit);
    }
  },
  watch: {
    "query.page"() {
      this.$emit("search");
    },
    "query.limit"() {
      this.$emit("search");
    }
  }
};
function mn(e, t, o, s, n, l) {
  const a = d("el-pagination");
  return r(), p(a, h({
    background: "",
    layout: "total, sizes, prev, pager, next, jumper"
  }, { ...e.$attrs, ...e.pcPagination || {} }, {
    "current-page": o.query.page,
    "onUpdate:currentPage": t[0] || (t[0] = (i) => o.query.page = i),
    "page-size": o.query.limit,
    "onUpdate:pageSize": t[1] || (t[1] = (i) => o.query.limit = i),
    "page-count": l.pageCount,
    total: o.total
  }), null, 16, ["current-page", "page-size", "page-count", "total"]);
}
const fn = /* @__PURE__ */ S(pn, [["render", mn]]), hn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fn
}, Symbol.toStringTag, { value: "Module" })), _n = {
  name: "XPicker",
  props: {
    modelValue: Boolean | Number | String,
    placeholder: String,
    show: Boolean,
    columns: Array
  },
  emits: [
    "show",
    "confirm",
    "cancel",
    "update:modelValue"
  ],
  computed: {
    visible: {
      get() {
        return this.show;
      },
      set(e) {
        this.$emit(e ? "show" : "cancel");
      }
    }
  },
  methods: {
    onConfirm(e) {
      this.$emit("confirm", e), this.$emit("update:modelValue", e);
    }
  }
};
function bn(e, t, o, s, n, l) {
  const a = d("van-picker"), i = d("van-popup");
  return r(), g(x, null, [
    V("span", {
      onClick: t[0] || (t[0] = (u) => e.$emit("show")),
      class: D(`x-picker__${o.modelValue ? "value" : "placeholder"}`)
    }, C(o.modelValue || o.placeholder), 3),
    m(i, h({
      class: "x-picker",
      round: "",
      position: "bottom"
    }, e.$attrs, {
      show: l.visible,
      "onUpdate:show": t[2] || (t[2] = (u) => l.visible = u)
    }), {
      default: c(() => [
        m(a, h(e.$attrs, {
          title: e.$attrs.title,
          columns: o.columns,
          onCancel: t[1] || (t[1] = (u) => e.$emit("cancel")),
          onConfirm: l.onConfirm
        }), null, 16, ["title", "columns", "onConfirm"])
      ]),
      _: 1
    }, 16, ["show"])
  ], 64);
}
const gn = /* @__PURE__ */ S(_n, [["render", bn]]), yn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gn
}, Symbol.toStringTag, { value: "Module" })), vn = {
  name: "MobileXRadios",
  inheritAttrs: !1,
  props: {
    text: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: "value"
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    sort: Boolean | String,
    options: Array | Object
  },
  methods: {
    formatOptions: R.formatOptions
  }
};
function Sn(e, t, o, s, n, l) {
  const a = d("van-radio"), i = d("van-radio-group");
  return r(), p(i, h({ class: "mobile-x-radios" }, e.$attrs, { direction: o.direction }), {
    default: c(() => [
      (r(!0), g(x, null, E(l.formatOptions(o.options, this), (u) => (r(), p(a, h(e.$attrs, {
        key: u[o.text],
        name: u[o.value]
      }), {
        default: c(() => [
          k(C(u[o.text]), 1)
        ]),
        _: 2
      }, 1040, ["name"]))), 128))
    ]),
    _: 1
  }, 16, ["direction"]);
}
const $n = /* @__PURE__ */ S(vn, [["render", Sn]]), kn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $n
}, Symbol.toStringTag, { value: "Module" })), wn = {
  name: "PcXRadios",
  inheritAttrs: !1,
  props: {
    modelValue: Number | String,
    text: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: "value"
    },
    button: {
      type: Boolean,
      default: !1
    },
    sort: Boolean | String,
    options: Array | Object
  },
  emits: ["update:modelValue"],
  computed: {
    attrs() {
      const {
        clearable: e,
        platform: t,
        placeholder: o,
        ...s
      } = this.$attrs;
      return s;
    }
  },
  methods: {
    formatOptions: R.formatOptions
  }
};
function Cn(e, t, o, s, n, l) {
  const a = d("el-radio-group");
  return r(), p(a, h({ class: "pc-x-radios" }, l.attrs, {
    modelValue: o.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (i) => e.$emit("update:modelValue", i))
  }), {
    default: c(() => [
      (r(!0), g(x, null, E(l.formatOptions(o.options, this), (i) => (r(), p(F(o.button ? "el-radio-button" : "el-radio"), h(l.attrs, {
        key: i[o.text],
        label: i[o.value]
      }), {
        default: c(() => [
          k(C(i[o.text]), 1)
        ]),
        _: 2
      }, 1040, ["label"]))), 128))
    ]),
    _: 1
  }, 16, ["modelValue"]);
}
const On = /* @__PURE__ */ S(wn, [["render", Cn]]), Vn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: On
}, Symbol.toStringTag, { value: "Module" })), jn = {
  name: "MobileXRow",
  props: {
    cols: {
      type: Array,
      default: []
    }
  }
}, xn = { key: 1 };
function En(e, t, o, s, n, l) {
  const a = d("MobileXCol"), i = d("van-row");
  return r(), p(i, { class: "mobile-x-row" }, {
    default: c(() => [
      (r(!0), g(x, null, E(o.cols, (u, _) => (r(), p(a, h(u, { key: _ }), {
        default: c(() => [
          u.slot || e.$attrs.slot ? y(e.$slots, u.slot || e.$attrs.slot, {
            key: 0,
            col: u
          }) : (r(), g("span", xn, C(u.text), 1))
        ]),
        _: 2
      }, 1040))), 128)),
      o.cols.length === 0 ? y(e.$slots, "default", { key: 0 }) : b("", !0)
    ]),
    _: 3
  });
}
const An = /* @__PURE__ */ S(jn, [["render", En]]), Tn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: An
}, Symbol.toStringTag, { value: "Module" })), Mn = {
  name: "PcXRow",
  props: {
    cols: {
      type: Array,
      default: []
    }
  }
}, zn = { key: 1 };
function Pn(e, t, o, s, n, l) {
  const a = d("pc-x-col"), i = d("el-row");
  return r(), p(i, { class: "pc-x-row" }, {
    default: c(() => [
      (r(!0), g(x, null, E(o.cols, (u, _) => (r(), p(a, h(u, { key: _ }), {
        default: c(() => [
          u.slot || e.$attrs.slot ? y(e.$slots, u.slot || e.$attrs.slot, {
            key: 0,
            col: u
          }) : (r(), g("span", zn, C(u.text), 1))
        ]),
        _: 2
      }, 1040))), 128)),
      o.cols.length === 0 ? y(e.$slots, "default", { key: 0 }) : b("", !0)
    ]),
    _: 3
  });
}
const Bn = /* @__PURE__ */ S(Mn, [["render", Pn]]), In = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bn
}, Symbol.toStringTag, { value: "Module" })), $e = async (e, t, o) => {
  o.loading = !0;
  const s = t == null ? void 0 : t.trim(), { text: n = "text", value: l = "value", labelTexts: a, params: i = {} } = o;
  i.attributes = [...new Set(i.attributes || [...a || [], n, l])], i.limit = i.limit || 20, s && (i.where = i.where || {}, i.where[n] = i.where[n] || {}, i.where[n]["[Op.like]"] = `%${s}%`);
  const u = await e.search(o.modelName, i);
  o.options.splice(0, o.options.length, ...u.data), o.loading = !1;
}, Rn = (e, t) => !t.labelTexts || !t.labelTexts.length ? e[t.text] : t.labelTexts.map((s) => e[s])[0], Nn = (e, t) => !t.labelTexts || t.labelTexts.length < 2 ? "" : "(" + t.labelTexts.map((s) => e[s]).slice(1).join(" - ") + ")", Dn = {
  name: "MobileXSelect",
  inheritAttrs: !1,
  props: {
    modelValue: Boolean | Number | String | Array,
    modelName: String,
    params: Object,
    text: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: "value"
    },
    sort: Boolean | String,
    options: Array | Object
  },
  emits: ["update:modelValue"],
  data() {
    return {
      visible: !1,
      _options: []
    };
  },
  computed: {
    formattedModelValue() {
      if (this.modelValue === "true" || this.modelValue === "false") {
        const e = this.modelValue === "true";
        return this._options.find((t) => t[this.value] === e)[this.text];
      }
      return this.modelValue;
    }
  },
  watch: {
    options: {
      immediate: !0,
      deep: !0,
      handler() {
        this._options = R.formatOptions(this.options, this);
      }
    }
  },
  created() {
    this.modelName && this.remoteSearch();
  },
  methods: {
    formatOptions: R.formatOptions,
    remoteSearch(e) {
      if (!this.modelName)
        return this._options;
      $e(this.$api.restful, e, this);
    },
    onClick(e) {
      e.target.classList.contains("van-overlay") || (this.visible = !0);
    }
  }
};
function Xn(e, t, o, s, n, l) {
  const a = d("XPicker");
  return r(), g("div", {
    onClick: t[5] || (t[5] = (...i) => l.onClick && l.onClick(...i)),
    class: "mobile-x-select"
  }, [
    m(a, h(e.$attrs, {
      modelValue: l.formattedModelValue,
      "onUpdate:modelValue": t[0] || (t[0] = (i) => e.$emit("update:modelValue", i.selectedValues[0])),
      show: n.visible,
      columns: n._options,
      onClick: t[1] || (t[1] = L(() => {
      }, ["stop"])),
      onShow: t[2] || (t[2] = (i) => n.visible = !0),
      onCancel: t[3] || (t[3] = (i) => n.visible = !1),
      onConfirm: t[4] || (t[4] = (i) => n.visible = !1)
    }), null, 16, ["modelValue", "show", "columns"])
  ]);
}
const Fn = /* @__PURE__ */ S(Dn, [["render", Xn]]), Un = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fn
}, Symbol.toStringTag, { value: "Module" }));
const qn = {
  name: "PcXSelect",
  props: {
    modelName: String,
    params: Object,
    text: {
      type: String,
      default: "text"
    },
    labelTexts: Array,
    value: {
      type: String,
      default: "value"
    },
    filterable: {
      type: Boolean,
      default: !0
    },
    sort: Boolean | String,
    options: Array | Object,
    // 接收下面这几个属性，为了避免这些属性被绑定到当前组件根节点上，在下面会进行过滤传给子组件
    platform: String
  },
  data() {
    return {
      loading: !1,
      _options: []
    };
  },
  watch: {
    options: {
      immediate: !0,
      deep: !0,
      handler() {
        this._options = R.formatOptions(this.options, this);
      }
    }
  },
  created() {
    this.modelName && this.remoteSearch();
  },
  methods: {
    formatOptions: R.formatOptions,
    remoteSearch(e) {
      if (!this.remote && !this.modelName)
        return this._options;
      $e(this.$api.restful, e, this);
    },
    calcMainLabel(e) {
      return Rn(e, this);
    },
    calcRemarkLabel(e) {
      return Nn(e, this);
    }
  }
}, Ln = { key: 1 }, Wn = { class: "main" }, Hn = { class: "remark" };
function Jn(e, t, o, s, n, l) {
  const a = d("el-option"), i = d("el-select");
  return r(), p(i, h({
    class: "pc-x-select",
    loading: n.loading
  }, e.$attrs, {
    filterable: o.filterable,
    clearable: "",
    "remote-method": e.$attrs.remoteMethod || l.remoteSearch
  }), {
    default: c(() => [
      (r(!0), g(x, null, E(n._options, (u) => (r(), p(a, h(e.$attrs, {
        key: u[o.text],
        label: u[o.text],
        value: u[o.value]
      }), {
        default: c(() => [
          e.$slots.default ? y(e.$slots, "default", { key: 0 }, void 0, !0) : (r(), g("span", Ln, [
            V("span", Wn, C(l.calcMainLabel(u)), 1),
            V("span", Hn, C(l.calcRemarkLabel(u)), 1)
          ]))
        ]),
        _: 2
      }, 1040, ["label", "value"]))), 128))
    ]),
    _: 3
  }, 16, ["loading", "filterable", "remote-method"]);
}
const Kn = /* @__PURE__ */ S(qn, [["render", Jn], ["__scopeId", "data-v-d6803d7d"]]), Yn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kn
}, Symbol.toStringTag, { value: "Module" }));
const Zn = {
  name: "MobileXTable",
  inheritAttrs: !1,
  props: {
    ...T.props(),
    mode: String,
    platform: String,
    "max-height": String,
    height: String,
    slotRenderers: Object
  },
  emits: [
    ...T.emits()
  ],
  data() {
    return {
      popupVisible: !1,
      scope: {},
      selected: [],
      settings: {},
      checked: null
    };
  },
  computed: {
    ...T.computed,
    hasIndex() {
      return this._visibleColumns.some((e) => e.type === "index" || e.type === "_index");
    },
    hasSelection() {
      return this._visibleColumns.some((e) => e.type === "selection");
    },
    hasRadio() {
      return this._visibleColumns.some((e) => e.type === "radio");
    },
    cols() {
      return this._visibleColumns.filter((e) => !["index", "selection", "expand", "radio", "_index"].includes(e.type));
    },
    infoFields() {
      return this.cols.map((e) => ({
        ...e,
        slot: void 0,
        infoAttrs: {
          ...e.infoAttrs ?? {},
          slot: void 0
        }
      }));
    }
  },
  watch: {
    selected: {
      handler(e) {
        const t = [];
        e.forEach((o, s) => {
          o && t.push(this._data[s]);
        }), this.handleSelectionChange(t);
      },
      deep: !0
    }
  },
  created() {
    this.initSettings();
  },
  mounted() {
    this.$emit("update:tref", this);
  },
  methods: {
    ...T.methods,
    handleShowDetail(e, t) {
      this.scope = { row: e, $index: t }, this.popupVisible = !0;
    },
    calcTitle(e) {
      return typeof this._attrs.title == "function" ? this._attrs.title(e) : e[this.cols[0].prop];
    },
    handleEdit() {
      this.popupVisible = !1, this._emit("edit", this.scope);
    },
    handleDelete() {
      this.popupVisible = !1, this._emit("delete", this.scope);
    },
    handleClickCard(e) {
      this.hasSelection ? this.selected[e] = !this.selected[e] : this.hasRadio && this.handleCheckedChange({ target: { value: e } });
    },
    clearSelection() {
      this.selected = [], this.checked = null;
    }
  }
}, Gn = { class: "mobile-x-table" }, Qn = {
  key: 1,
  class: "mobile-x-table card"
}, el = ["onClick"], tl = ["value", "checked"], ol = { class: "label" }, nl = { class: "value" }, ll = { class: "operates" }, sl = ["value", "checked"], il = {
  key: 2,
  class: "index"
}, al = { class: "title" }, rl = { class: "operates" };
function cl(e, t, o, s, n, l) {
  const a = d("x-table-tools"), i = d("van-checkbox"), u = d("van-button"), _ = d("XCol"), f = d("XRow"), w = d("van-swipe-cell"), $ = d("van-cell"), P = d("van-list"), M = d("x-pagination"), U = d("XInfo"), z = d("van-popup");
  return r(), g("div", Gn, [
    e.hideTools !== "" && e.hideTools !== !0 ? (r(), p(a, h({ key: 0 }, e._attrs, {
      domids: e.domids,
      onAdd: e._onAdd,
      onSearch: e._onSearch,
      onExport: e._onExport,
      onSearchExport: e._onSearchExport,
      onImport: e._onImport,
      onMultiDelete: e._onMultiDelete
    }), N({ _: 2 }, [
      e.$slots["tools-prefix"] ? {
        name: "tools-prefix",
        fn: c(() => [
          y(e.$slots, "tools-prefix", {}, void 0, !0)
        ]),
        key: "0"
      } : void 0,
      e.$slots["tools-suffix"] ? {
        name: "tools-suffix",
        fn: c(() => [
          y(e.$slots, "tools-suffix", {}, void 0, !0)
        ]),
        key: "1"
      } : void 0
    ]), 1040, ["domids", "onAdd", "onSearch", "onExport", "onSearchExport", "onImport", "onMultiDelete"])) : b("", !0),
    (o.mode || e._attrs.mode) === "card" ? (r(), g("div", Qn, [
      (r(!0), g(x, null, E(e._data, (v, j) => (r(), g("div", {
        key: j,
        class: "row",
        onClick: (O) => l.handleClickCard(j)
      }, [
        m(w, {
          onOpen: (O) => n.scope = { row: v, $index: j }
        }, {
          right: c(() => [
            V("div", ll, [
              y(e.$slots, "operates-prefix", { scope: n.scope }, void 0, !0),
              e.hideOperates ? b("", !0) : (r(), p(f, {
                key: 0,
                gutter: 10
              }, {
                default: c(() => [
                  m(_, { span: 12 }, {
                    default: c(() => [
                      e.canEdit(n.scope) ? (r(), p(u, h({ key: 0 }, { type: "warning", ...e._attrs["edit-btn"] }, { onClick: l.handleEdit }), {
                        default: c(() => [
                          k(" 编辑 ")
                        ]),
                        _: 1
                      }, 16, ["onClick"])) : b("", !0)
                    ]),
                    _: 1
                  }),
                  m(_, { span: 12 }, {
                    default: c(() => [
                      e.canDelete(n.scope) ? (r(), p(u, h({ key: 0 }, { type: "danger", ...e._attrs["delete-btn"] }, { onClick: l.handleDelete }), {
                        default: c(() => [
                          k(" 删除 ")
                        ]),
                        _: 1
                      }, 16, ["onClick"])) : b("", !0)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })),
              y(e.$slots, "operates-suffix", { scope: n.scope }, void 0, !0)
            ])
          ]),
          default: c(() => [
            l.hasSelection ? (r(), p(i, {
              key: 0,
              modelValue: n.selected[j],
              "onUpdate:modelValue": (O) => n.selected[j] = O,
              shape: "square",
              class: "selection",
              onClick: t[0] || (t[0] = L(() => {
              }, ["stop"]))
            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : b("", !0),
            l.hasRadio ? (r(), g("input", {
              key: 1,
              type: "radio",
              value: j,
              checked: j === n.checked,
              class: "radio",
              onClick: t[1] || (t[1] = L(() => {
              }, ["stop"])),
              onChange: t[2] || (t[2] = (...O) => e.handleCheckedChange && e.handleCheckedChange(...O))
            }, null, 40, tl)) : b("", !0),
            (r(!0), g(x, null, E(l.cols, (O, q) => (r(), g("div", {
              key: q,
              class: "field"
            }, [
              V("span", ol, C(O.label) + ":", 1),
              V("span", nl, C(e.calcValue(v, O)), 1)
            ]))), 128))
          ]),
          _: 2
        }, 1032, ["onOpen"])
      ], 8, el))), 128))
    ])) : (o.mode || e._attrs.mode) === "list" ? (r(), p(P, h({
      key: 2,
      class: "mobile-x-table list"
    }, e._attrs, {
      onLoad: t[6] || (t[6] = (v) => e.$emit("search"))
    }), {
      default: c(() => [
        (r(!0), g(x, null, E(e._data, (v, j) => (r(), p($, {
          key: j,
          "is-link": "",
          onClick: (O) => l.handleShowDetail(v, j)
        }, {
          default: c(() => [
            l.hasSelection ? (r(), p(i, {
              key: 0,
              modelValue: n.selected[j],
              "onUpdate:modelValue": (O) => n.selected[j] = O,
              shape: "square",
              class: "selection",
              onClick: t[3] || (t[3] = L(() => {
              }, ["stop"]))
            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : b("", !0),
            l.hasRadio ? (r(), g("input", {
              key: 1,
              type: "radio",
              value: j,
              checked: j === n.checked,
              class: "radio",
              onClick: t[4] || (t[4] = L(() => {
              }, ["stop"])),
              onChange: t[5] || (t[5] = (...O) => e.handleCheckedChange && e.handleCheckedChange(...O))
            }, null, 40, sl)) : b("", !0),
            l.hasIndex ? (r(), g("span", il, C(j + 1), 1)) : b("", !0),
            V("span", al, C(l.calcTitle(v)), 1)
          ]),
          _: 2
        }, 1032, ["onClick"]))), 128))
      ]),
      _: 1
    }, 16)) : b("", !0),
    e._query && e._total && (e.onSearch || e._listen.search) ? (r(), p(M, {
      key: 3,
      query: e._query,
      total: e._total,
      onSearch: t[7] || (t[7] = (v) => e._emit("search"))
    }, null, 8, ["query", "total"])) : b("", !0),
    m(z, {
      show: n.popupVisible,
      "onUpdate:show": t[8] || (t[8] = (v) => n.popupVisible = v),
      position: "bottom",
      style: { height: "70%" }
    }, {
      default: c(() => [
        m(U, {
          data: n.scope.row,
          fields: l.infoFields,
          "value-align": "right"
        }, null, 8, ["data", "fields"]),
        V("div", rl, [
          y(e.$slots, "operates-prefix", { scope: n.scope }, void 0, !0),
          e.hideOperates ? b("", !0) : (r(), p(f, {
            key: 0,
            gutter: 10
          }, {
            default: c(() => [
              m(_, { span: 12 }, {
                default: c(() => [
                  e.canEdit(n.scope) ? (r(), p(u, h({ key: 0 }, { type: "warning", ...e._attrs["edit-btn"], block: !0 }, { onClick: l.handleEdit }), {
                    default: c(() => [
                      k(" 编辑 ")
                    ]),
                    _: 1
                  }, 16, ["onClick"])) : b("", !0)
                ]),
                _: 1
              }),
              m(_, { span: 12 }, {
                default: c(() => [
                  e.canDelete(n.scope) ? (r(), p(u, h({ key: 0 }, { type: "danger", ...e._attrs["delete-btn"], block: !0 }, { onClick: l.handleDelete }), {
                    default: c(() => [
                      k(" 删除 ")
                    ]),
                    _: 1
                  }, 16, ["onClick"])) : b("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })),
          y(e.$slots, "operates-suffix", { scope: n.scope }, void 0, !0)
        ])
      ]),
      _: 3
    }, 8, ["show"])
  ]);
}
const ul = /* @__PURE__ */ S(Zn, [["render", cl], ["__scopeId", "data-v-d230adfe"]]), dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ul
}, Symbol.toStringTag, { value: "Module" })), {
  h: pl
} = Vue, ml = (e, t) => e.$.appContext.components[t], _e = {
  eq: {
    text: "等于",
    value: "eq"
  },
  ne: {
    text: "不等于",
    value: "ne"
  },
  gt: {
    text: "大于",
    value: "gt"
  },
  gte: {
    text: "大于等于",
    value: "gte"
  },
  lt: {
    text: "小于",
    value: "lt"
  },
  lte: {
    text: "小于等于",
    value: "lte"
  },
  in: {
    text: "包含",
    value: "in"
  },
  like: {
    text: "模糊匹配",
    value: "like"
  },
  notIn: {
    text: "不包含",
    value: "notIn"
  },
  notLike: {
    text: "模糊不匹配",
    value: "notLike"
  },
  between: {
    text: "介于",
    value: "between"
  }
}, I = {
  XSelect: ["eq", "ne", "in", "notIn"],
  ElDatePicker: ["eq", "gt", "gte", "lt", "lte", "between"],
  ElInputNumber: ["eq", "ne", "gt", "gte", "lt", "lte", "between"],
  ElInput: ["eq", "ne", "like", "notLike", "between"]
};
I["x-select"] = I.XSelect;
I["el-date-picker"] = I.ElDatePicker;
I["el-input-number"] = I.ElInputNumber;
I["el-input"] = I.ElInput;
function fl() {
  const {
    columns: e,
    visible: t,
    conditions: o,
    expression: s,
    handleSearch: n,
    handleReset: l,
    handleAdd: a,
    handleDelete: i,
    handleSelectField: u,
    handleSelectOp: _
  } = this;
  return m(d("pc-x-dialog"), h({
    "append-to-body": !0,
    drawer: !0,
    width: "700px",
    title: "自定义查询",
    class: "searcher",
    "cancel-text": "重置",
    "submit-text": "查询"
  }, {
    modelValue: t,
    "onUpdate:modelValue": (f) => this.visible = f,
    onCancel: l,
    onSubmit: n
  }), {
    default: () => [m(d("el-button"), {
      type: "primary",
      icon: "plus",
      onClick: a
    }, {
      default: () => [k("新增条件")]
    }), m("div", {
      class: "conditions"
    }, [o.map((f, w) => m("div", {
      class: "condition flex-center",
      key: f.no
    }, [m(d("el-button"), {
      type: "danger",
      size: "small",
      plain: !0,
      onClick: () => i(w)
    }, {
      default: () => [k("X")]
    }), m("span", {
      class: "title"
    }, [f.no]), m("div", {
      class: "expression"
    }, [m(d("pc-x-select"), {
      modelValue: f.prop,
      onChange: ($) => u(f, $),
      options: e,
      text: "label",
      value: "prop"
    }, null), m(d("pc-x-select"), {
      modelValue: f.op,
      onChange: ($) => _(f, $),
      options: f.ops
    }, null), hl(this, f)])]))]), m(d("el-input"), h({
      type: "textarea",
      autosize: {
        minRows: 3,
        maxRows: 10
      },
      placeholder: "分组条件表达式"
    }, {
      modelValue: s,
      "onUpdate:modelValue": (f) => this.expression = f
    }), null)]
  });
}
function hl(e, t) {
  const o = (n) => pl(ml(e, t.component), Object.assign({
    modelValue: t.value,
    "onUpdate:modelValue": (l) => t.value = l
  }, t.item, t.item.formAttrs, n)), s = {
    multiple: !1,
    "collapse-tags": !0
  };
  return t.op === "between" ? m("div", {
    class: "col-2"
  }, [o({
    ...s,
    modelValue: t.value[0],
    "onUpdate:modelValue": (n) => t.value[0] = n
  }), o({
    ...s,
    modelValue: t.value[1],
    "onUpdate:modelValue": (n) => t.value[1] = n
  })]) : ["in", "notIn"].includes(t.op) ? (s.multiple = !0, o(s)) : o();
}
const { storage: Y } = StardustBrowser, _l = {
  name: "Searcher",
  props: {
    uid: String,
    columns: Array,
    config: Object
  },
  emits: ["search"],
  data() {
    return {
      visible: !1,
      conditionNo: 1,
      conditions: [],
      expression: ""
    };
  },
  computed: {
    key() {
      return `Searcher[${this.uid}]`;
    }
  },
  created() {
    this.uid && this.restoreCache();
  },
  render: fl,
  methods: {
    open() {
      this.visible = !0;
    },
    close() {
      this.visible = !1;
    },
    saveCache() {
      Y.local.setJson(this.key, {
        conditionNo: this.conditionNo,
        conditions: this.conditions.map((e) => {
          const { item: t, ops: o, component: s, ...n } = e;
          return n;
        }),
        expression: this.expression
      });
    },
    restoreCache() {
      var t, o;
      const e = Y.local.getJson(this.key, this.config);
      (t = e.conditions) == null || t.forEach((s) => {
        const { prop: n, op: l, value: a } = s;
        s.item = this.columns.find((i) => i.prop === n), this.handleSelectField(s, n), this.handleSelectOp(s, l), s.ops = I[s.component].map((i) => _e[i]), s.value = a;
      }), !e.conditionNo && ((o = e.conditions) != null && o.length) && (e.conditionNo = Math.max.apply(null, e.conditions.map((s) => s.no)) + 1), Object.assign(this, e);
    },
    handleSearch() {
      let e = null;
      try {
        e = this.calcParams();
      } catch (t) {
        this.utils.message.Message({ type: "warning", message: t.toString() });
        return;
      }
      this.uid && e && this.saveCache(), e = e || { where: {} }, this.$emit("search", e), this.visible = !1;
    },
    handleReset() {
      Y.local.remove(this.key), Object.assign(this, {
        visible: !1,
        conditionNo: 1,
        conditions: [],
        expression: ""
      }), this.restoreCache(), this.$emit("search", { where: {} });
    },
    calcParams() {
      const e = this.calcTree();
      if (!e)
        return;
      const t = (s, n) => {
        const l = [];
        n["[Op." + s.type + "]"] = l;
        for (let a of s.items)
          if (typeof a == "string") {
            const i = this.conditions.find((u) => u.no === a * 1);
            if (i) {
              if (!this.checkFilled(i))
                throw "条件不完整: " + a;
            } else
              throw "条件不存在: " + a;
            l.push(this.parseCondition(i));
          } else {
            const i = {};
            l.push(i), t(a, i);
          }
      }, o = {};
      return t(e, o), { where: o };
    },
    calcTree() {
      const e = this.expression.trim();
      if (!e)
        return null;
      const t = e.split(/(\(|\)|\s)/).filter((n) => n.trim()), o = (n, l) => {
        for (; l.length; ) {
          const a = l.shift();
          if (["and", "or"].includes(a)) {
            if (n.type && n.type !== a)
              throw "串联不同逻辑表达式请使用小括号区分";
            n.type = a;
          } else if (a === "(") {
            const i = { type: "", items: [] };
            n.items.push(i), i._parent = n, o(i, l);
            break;
          } else
            a === ")" ? (o(n._parent, l), delete n._parent) : n.items.push(a);
        }
      }, s = { type: "", items: [] };
      return o(s, t), s.type = s.type || "and", s;
    },
    parseCondition(e) {
      let { prop: t, op: o, value: s } = e;
      const n = {};
      return (o === "like" || o === "notLike") && (s = "%" + s + "%"), n[t] = {
        [`[Op.${o}]`]: s
      }, n;
    },
    checkFilled(e) {
      if (!e.prop || !e.op)
        return !1;
      const t = Array.isArray(e.value) ? e.value : [e.value];
      return t.length && t.every((o) => typeof o != "string" || o.length);
    },
    handleAdd() {
      this.conditions.push({
        no: this.conditionNo++,
        prop: "",
        op: "",
        value: "",
        component: "ElInput",
        ops: [],
        item: {}
      });
    },
    handleDelete(e) {
      this.conditions.splice(e, 1);
    },
    handleSelectField(e, t) {
      e.value = "", e.prop = t, e.item = this.columns.find((l) => l.prop === e.prop);
      const { options: o, type: s, formAttrs: n = {} } = e.item;
      e.component = n.comp || o && "XSelect" || s === "number" && "ElInputNumber" || "ElInput", e.ops = I[e.component].map((l) => _e[l]), e.op = e.ops[0].value, n.comp === "ElDatePicker" && (e.component = "ElInput", e.item.formAttrs.type = "date");
    },
    handleSelectOp(e, t) {
      e.op = t, t === "between" ? e.value = ["", ""] : ["in", "notIn"].includes(t) && (e.value = []), !["between", "in", "notIn"].includes(t) && Array.isArray(t) && (e.value = "");
    }
  }
}, ae = /* @__PURE__ */ S(_l, [["__scopeId", "data-v-e9987bfb"]]), bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ae
}, Symbol.toStringTag, { value: "Module" }));
const gl = {
  name: "Settings",
  props: {
    visible: Boolean,
    modelValue: Object
  },
  emits: ["update:modelValue", "reset"],
  data() {
    return {
      activeName: "columns",
      columns: []
    };
  },
  watch: {
    modelValue: {
      handler(e) {
        this.columns = e.columns.map((t) => ({
          ...t,
          show: t.show !== !1,
          width: t.width || t.minWidth
        }));
      },
      immediate: !0
    }
  },
  methods: {
    handleResetColumns() {
      const { columns: e, ...t } = this.modelValue;
      this.$emit("reset", t);
    },
    handleMove(e, t, o) {
      const s = t + o;
      this.columns.splice(t, 1), this.columns.splice(s, 0, e), this.update();
    },
    handleToggle(e) {
      e.show = !e.show, this.update();
    },
    update() {
      this.columns.forEach((e) => {
        e.hide = !e.show;
      }), this.$emit("update:modelValue", {
        ...this.modelValue,
        columns: this.columns.map((e) => {
          const { prop: t, label: o, show: s, hide: n, width: l } = e;
          return { prop: t, label: o, show: s, hide: n, width: l };
        })
      });
    }
  }
}, yl = (e) => (oe("data-v-16737013"), e = e(), ne(), e), vl = { class: "table" }, Sl = ["title", "onClick"], $l = /* @__PURE__ */ yl(() => /* @__PURE__ */ V("span", { class: "unit" }, "px", -1));
function kl(e, t, o, s, n, l) {
  const a = d("el-button"), i = d("ElCheckbox"), u = d("el-input-number"), _ = d("el-tab-pane"), f = d("el-tabs"), w = d("el-popover");
  return o.visible ? (r(), p(w, h({
    key: 0,
    placement: "bottom",
    trigger: "hover",
    "popper-class": "table-settings"
  }, e.$attrs), {
    reference: c(() => [
      m(a, {
        class: "settings-reference",
        icon: "Setting"
      })
    ]),
    default: c(() => [
      m(f, {
        modelValue: n.activeName,
        "onUpdate:modelValue": t[0] || (t[0] = ($) => n.activeName = $)
      }, {
        default: c(() => [
          m(_, {
            name: "columns",
            label: "展示列"
          }, {
            default: c(() => [
              m(a, {
                type: "warning",
                icon: "Close",
                onClick: l.handleResetColumns
              }, {
                default: c(() => [
                  k("重置")
                ]),
                _: 1
              }, 8, ["onClick"]),
              V("div", vl, [
                (r(!0), g(x, null, E(n.columns, ($, P) => (r(), g("div", {
                  key: P,
                  class: "row flex-center"
                }, [
                  m(a, {
                    disabled: P === 0,
                    circle: "",
                    icon: "arrow-up",
                    type: "primary",
                    class: "move",
                    onClick: (M) => l.handleMove($, P, -1)
                  }, null, 8, ["disabled", "onClick"]),
                  m(a, {
                    disabled: P === n.columns.length - 1,
                    circle: "",
                    icon: "arrow-down",
                    type: "success",
                    class: "move",
                    onClick: (M) => l.handleMove($, P, 1)
                  }, null, 8, ["disabled", "onClick"]),
                  m(i, {
                    modelValue: $.show,
                    "onUpdate:modelValue": (M) => $.show = M,
                    onChange: l.update
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"]),
                  V("span", {
                    class: "label overflow-text",
                    title: $.label,
                    onClick: (M) => l.handleToggle($)
                  }, C($.label), 9, Sl),
                  m(u, {
                    modelValue: $.width,
                    "onUpdate:modelValue": (M) => $.width = M,
                    onChange: l.update
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"]),
                  $l
                ]))), 128))
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]),
    _: 1
  }, 16)) : b("", !0);
}
const re = /* @__PURE__ */ S(gl, [["render", kl], ["__scopeId", "data-v-16737013"]]), wl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: re
}, Symbol.toStringTag, { value: "Module" }));
const Cl = {
  name: "PcXTable",
  inheritAttrs: !1,
  props: {
    ...T.props()
  },
  emits: [
    ...T.emits()
  ],
  components: { Searcher: ae, Settings: re },
  data() {
    return {
      searcher: null,
      isFullscreen: !1,
      zoom: 1,
      checked: null,
      activeNames: ["name"],
      settings: {},
      params: {}
    };
  },
  computed: {
    ...T.computed
  },
  watch: {
    ...T.watch,
    settings: "saveSettings"
  },
  created() {
    this.initSettings();
  },
  mounted() {
    this.table && (this.table.tableRef = this.$refs.tableRef), this.$emit("update:tref", this.$refs.tableRef);
  },
  methods: {
    ...T.methods
  }
}, Ol = { key: 1 }, Vl = ["value", "checked"], jl = { key: 1 };
function xl(e, t, o, s, n, l) {
  const a = d("searcher"), i = d("pc-x-icon"), u = d("settings"), _ = d("pc-x-table-tools"), f = d("el-table-column"), w = d("el-button"), $ = d("el-table"), P = d("x-pagination"), M = d("el-collapse-item"), U = d("el-collapse"), z = H("loading");
  return r(), g("div", {
    class: D(["pc-x-table", { fullscreen: n.isFullscreen, "hide-header": e.hideHeader }])
  }, [
    m(a, {
      ref: "searcher",
      uid: e._uid,
      columns: e.searcherColumns,
      config: e.searcherConfig,
      onSearch: e.handleSearch
    }, null, 8, ["uid", "columns", "config", "onSearch"]),
    m(U, {
      modelValue: n.activeNames,
      "onUpdate:modelValue": t[3] || (t[3] = (v) => n.activeNames = v),
      class: D((e.useCollapse ? "use" : "no") + "-collapse")
    }, {
      default: c(() => [
        m(M, {
          name: n.activeNames[0]
        }, {
          title: c(() => [
            e.$slots["collapse-title"] ? y(e.$slots, "collapse-title", { key: 0 }) : (r(), g("span", Ol, C(e.title), 1))
          ]),
          default: c(() => [
            e.hideTools !== "" && e.hideTools !== !0 ? (r(), p(_, h({ key: 0 }, e._attrs, {
              domids: e.domids,
              onAdd: e._onAdd,
              onSearch: e._onSearch,
              onExport: e._onExport,
              onSearchExport: e._onSearchExport,
              onImport: e._onImport,
              onMultiEdit: e._onMultiEdit,
              onMultiDelete: e._onMultiDelete
            }), N({
              "tools-end": c(() => [
                m(i, {
                  name: "FullScreen",
                  class: "full",
                  onClick: e.handleToggleFullscreen
                }, null, 8, ["onClick"]),
                m(u, {
                  modelValue: n.settings,
                  "onUpdate:modelValue": t[0] || (t[0] = (v) => n.settings = v),
                  visible: !e.hideSettings,
                  width: e._attrs["cols-popover-width"] || 500,
                  onReset: e.handleResetSettings
                }, null, 8, ["modelValue", "visible", "width", "onReset"])
              ]),
              _: 2
            }, [
              e.$slots["tools-prefix"] ? {
                name: "tools-prefix",
                fn: c(() => [
                  y(e.$slots, "tools-prefix")
                ]),
                key: "0"
              } : void 0,
              e.$slots["tools-suffix"] ? {
                name: "tools-suffix",
                fn: c(() => [
                  y(e.$slots, "tools-suffix")
                ]),
                key: "1"
              } : void 0
            ]), 1040, ["domids", "onAdd", "onSearch", "onExport", "onSearchExport", "onImport", "onMultiEdit", "onMultiDelete"])) : b("", !0),
            A((r(), p($, h({ ref: "tableRef" }, e.elTableAttrs, {
              onHeaderDragend: e.handleHeaderDragend,
              onSelectionChange: e.handleSelectionChange,
              onSortChange: e.handleSortChange
            }), {
              default: c(() => [
                (r(!0), g(x, null, E(e._visibleColumns, (v, j) => (r(), p(f, h(v, {
                  key: j,
                  "min-width": v.minWidth,
                  align: v.align || e._attrs.tableAlign || "center",
                  resizable: v.resizable || !0,
                  "show-overflow-tooltip": e.calcOverflowTooltip(v)
                }), N({ _: 2 }, [
                  ["selection", "index"].includes(v.type) ? void 0 : {
                    name: "default",
                    fn: c((O) => [
                      v.type === "radio" ? (r(), g("input", {
                        key: 0,
                        type: "radio",
                        value: O.$index,
                        checked: O.$index === n.checked,
                        onChange: t[1] || (t[1] = (...q) => e.handleCheckedChange && e.handleCheckedChange(...q))
                      }, null, 40, Vl)) : v.slot ? y(e.$slots, v.slot, {
                        key: 1,
                        scope: O,
                        column: v
                      }) : e.slotAll ? y(e.$slots, "all", {
                        key: 2,
                        scope: O,
                        column: v
                      }) : (r(), g(x, { key: 3 }, [
                        v.comp === "ElSwitch" || e.table.isRowEdit && O.row.isEditing && (v.visible !== !1 || v.canEdit) ? (r(), p(F(v.comp || "ElInput"), h({ key: 0 }, { ...v, ...v.formAttrs }, {
                          modelValue: O.row[v.prop],
                          "onUpdate:modelValue": (q) => O.row[v.prop] = q,
                          disabled: !O.row.editable || !O.row.isEditing
                        }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : (r(), g("span", jl, C(e.calcValue(O.row, v)), 1))
                      ], 64))
                    ]),
                    key: "0"
                  }
                ]), 1040, ["min-width", "align", "resizable", "show-overflow-tooltip"]))), 128)),
                e.hideOperates ? b("", !0) : (r(), p(f, {
                  key: 0,
                  label: "操作",
                  "min-width": e.operatesWidth,
                  align: e._attrs.operatesAlign || e._attrs.tableAlign || "center",
                  fixed: e._attrs.operatesFixed || "right"
                }, {
                  default: c((v) => [
                    y(e.$slots, "operates-prefix", { scope: v }),
                    e.canEdit(v.row) ? (r(), p(w, h({ key: 0 }, { type: "warning", ...e._attrs["edit-btn"] }, {
                      onClick: (j) => e._emit("edit", v)
                    }), {
                      default: c(() => [
                        m(i, { name: "edit" }),
                        k(" 编辑 ")
                      ]),
                      _: 2
                    }, 1040, ["onClick"])) : b("", !0),
                    e.canSave(v.row) ? A((r(), p(w, h({ key: 1 }, { type: "success", ...e._attrs["row-edit-btn"] }, {
                      disabled: v.row._loading,
                      onClick: (j) => e._emit("row-edit", v)
                    }), {
                      default: c(() => [
                        m(i, { name: "collection" }),
                        k(" 保存 ")
                      ]),
                      _: 2
                    }, 1040, ["disabled", "onClick"])), [
                      [z, v.row._loading]
                    ]) : b("", !0),
                    e.canCancelEdit(v.row) ? (r(), p(w, h({ key: 2 }, { type: "warning", ...e._attrs["cancel-edit-btn"] }, {
                      onClick: (j) => e._emit("cancel-edit", v)
                    }), {
                      default: c(() => [
                        m(i, { name: "refresh-left" }),
                        k(" 取消编辑 ")
                      ]),
                      _: 2
                    }, 1040, ["onClick"])) : b("", !0),
                    e.canDelete(v.row) ? (r(), p(w, h({ key: 3 }, { type: "danger", ...e._attrs["delete-btn"] }, {
                      onClick: (j) => e._emit("delete", v)
                    }), {
                      default: c(() => [
                        m(i, { name: "DeleteFilled" }),
                        k(" 删除 ")
                      ]),
                      _: 2
                    }, 1040, ["onClick"])) : b("", !0),
                    y(e.$slots, "operates-suffix", { scope: v })
                  ]),
                  _: 3
                }, 8, ["min-width", "align", "fixed"]))
              ]),
              _: 3
            }, 16, ["onHeaderDragend", "onSelectionChange", "onSortChange"])), [
              [z, e._loading]
            ]),
            e._query && e._total && (e.onSearch || e._listen.search) ? (r(), p(P, {
              key: 1,
              query: e._query,
              total: e._total,
              onSearch: t[2] || (t[2] = (v) => e._emit("search", n.params))
            }, null, 8, ["query", "total"])) : b("", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["modelValue", "class"])
  ], 2);
}
const El = /* @__PURE__ */ S(Cl, [["render", xl]]), Al = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: El
}, Symbol.toStringTag, { value: "Module" }));
const Tl = {
  name: "MobileXTableTools",
  inheritAttrs: !1,
  props: {
    searchBtn: Object,
    addBtn: Object,
    multiEditBtn: Object,
    multiDeleteBtn: Object,
    exportBtn: Object,
    importBtn: Object,
    domids: Object
  }
}, Ml = { class: "mobile-x-table-tools" }, zl = { class: "tools" }, Pl = { class: "tools-end" };
function Bl(e, t, o, s, n, l) {
  const a = d("mobile-x-icon"), i = d("van-button"), u = H("domid");
  return r(), g("div", Ml, [
    V("div", zl, [
      y(e.$slots, "tools-prefix", {}, void 0, !0),
      e.$attrs.onSearch ? A((r(), p(i, h({ key: 0 }, { type: "success", ...o.searchBtn }, {
        onClick: t[0] || (t[0] = (_) => e.$emit("search"))
      }), {
        default: c(() => [
          m(a, { name: "search" }),
          k(" 查询 ")
        ]),
        _: 1
      }, 16)), [
        [u, o.domids.search]
      ]) : b("", !0),
      e.$attrs.onAdd ? A((r(), p(i, h({ key: 1 }, { type: "primary", ...o.addBtn }, {
        onClick: t[1] || (t[1] = (_) => e.$emit("add"))
      }), {
        default: c(() => [
          m(a, { name: "circle-plus-filled" }),
          k(" 新增 ")
        ]),
        _: 1
      }, 16)), [
        [u, o.domids.add]
      ]) : b("", !0),
      e.$attrs.onMultiEdit ? A((r(), p(i, h({ key: 2 }, { type: "warning", ...o.multiEditBtn }, {
        onClick: t[2] || (t[2] = (_) => e.$emit("multi-edit"))
      }), {
        default: c(() => [
          m(a, { name: "edit" }),
          k(" 编辑 ")
        ]),
        _: 1
      }, 16)), [
        [u, o.domids["multi-edit"]]
      ]) : b("", !0),
      e.$attrs.onMultiDelete ? A((r(), p(i, h({ key: 3 }, { type: "danger", ...o.multiDeleteBtn }, {
        onClick: t[3] || (t[3] = (_) => e.$emit("multi-delete"))
      }), {
        default: c(() => [
          m(a, { name: "DeleteFilled" }),
          k(" 批量删除 ")
        ]),
        _: 1
      }, 16)), [
        [u, o.domids["multi-delete"]]
      ]) : b("", !0),
      e.$attrs.onExport ? A((r(), p(i, h({ key: 4 }, { type: "success", ...o.exportBtn }, {
        onClick: t[4] || (t[4] = (_) => e.$emit("export"))
      }), {
        default: c(() => [
          m(a, { name: "printer" }),
          k(" 导出 ")
        ]),
        _: 1
      }, 16)), [
        [u, o.domids.export]
      ]) : b("", !0),
      e.$attrs.onSearchExport ? A((r(), p(i, h({ key: 5 }, { type: "success", ...o.exportBtn }, {
        onClick: t[5] || (t[5] = (_) => e.$emit("search-export"))
      }), {
        default: c(() => [
          m(a, { name: "printer" }),
          k(" 查询导出 ")
        ]),
        _: 1
      }, 16)), [
        [u, o.domids["search-export"]]
      ]) : b("", !0),
      e.$attrs.onImport ? A((r(), p(i, h({ key: 6 }, { type: "warning", ...o.importBtn }, {
        onClick: t[6] || (t[6] = (_) => e.$emit("import"))
      }), {
        default: c(() => [
          m(a, { name: "UploadFilled" }),
          k(" 导入 ")
        ]),
        _: 1
      }, 16)), [
        [u, o.domids.import]
      ]) : b("", !0),
      y(e.$slots, "tools-suffix", {}, void 0, !0),
      V("div", Pl, [
        y(e.$slots, "tools-end", {}, void 0, !0)
      ])
    ])
  ]);
}
const Il = /* @__PURE__ */ S(Tl, [["render", Bl], ["__scopeId", "data-v-442404e2"]]), Rl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Il
}, Symbol.toStringTag, { value: "Module" }));
const Nl = {
  name: "PcXTableTools",
  inheritAttrs: !1,
  props: {
    searchBtn: Object,
    addBtn: Object,
    multiEditBtn: Object,
    multiDeleteBtn: Object,
    exportBtn: Object,
    importBtn: Object,
    domids: Object
  }
}, Dl = { class: "tools" }, Xl = { class: "tools-end flex-center" };
function Fl(e, t, o, s, n, l) {
  const a = d("pc-x-icon"), i = d("el-button"), u = d("el-card"), _ = H("domid");
  return r(), p(u, {
    shadow: "hover",
    "body-style": { padding: "10px" },
    class: "pc-x-table-tools"
  }, {
    default: c(() => [
      V("div", Dl, [
        y(e.$slots, "tools-prefix", {}, void 0, !0),
        e.$attrs.onSearch ? A((r(), p(i, h({ key: 0 }, { type: "success", ...o.searchBtn }, {
          onClick: t[0] || (t[0] = (f) => e.$emit("search"))
        }), {
          default: c(() => [
            m(a, { name: "search" }),
            k(" 查询 ")
          ]),
          _: 1
        }, 16)), [
          [_, o.domids.search]
        ]) : b("", !0),
        e.$attrs.onAdd ? A((r(), p(i, h({ key: 1 }, { type: "primary", ...o.addBtn }, {
          onClick: t[1] || (t[1] = (f) => e.$emit("add"))
        }), {
          default: c(() => [
            m(a, { name: "circle-plus-filled" }),
            k(" 新增 ")
          ]),
          _: 1
        }, 16)), [
          [_, o.domids.add]
        ]) : b("", !0),
        e.$attrs.onMultiEdit ? A((r(), p(i, h({ key: 2 }, { type: "warning", ...o.multiEditBtn }, {
          onClick: t[2] || (t[2] = (f) => e.$emit("multi-edit"))
        }), {
          default: c(() => [
            m(a, { name: "edit" }),
            k(" 编辑 ")
          ]),
          _: 1
        }, 16)), [
          [_, o.domids["multi-edit"]]
        ]) : b("", !0),
        e.$attrs.onMultiDelete ? A((r(), p(i, h({ key: 3 }, { type: "danger", ...o.multiDeleteBtn }, {
          onClick: t[3] || (t[3] = (f) => e.$emit("multi-delete"))
        }), {
          default: c(() => [
            m(a, { name: "DeleteFilled" }),
            k(" 批量删除 ")
          ]),
          _: 1
        }, 16)), [
          [_, o.domids["multi-delete"]]
        ]) : b("", !0),
        e.$attrs.onExport ? A((r(), p(i, h({ key: 4 }, { type: "success", ...o.exportBtn }, {
          onClick: t[4] || (t[4] = (f) => e.$emit("export"))
        }), {
          default: c(() => [
            m(a, { name: "printer" }),
            k(" 导出 ")
          ]),
          _: 1
        }, 16)), [
          [_, o.domids.export]
        ]) : b("", !0),
        e.$attrs.onSearchExport ? A((r(), p(i, h({ key: 5 }, { type: "success", ...o.exportBtn }, {
          onClick: t[5] || (t[5] = (f) => e.$emit("search-export"))
        }), {
          default: c(() => [
            m(a, { name: "printer" }),
            k(" 查询导出 ")
          ]),
          _: 1
        }, 16)), [
          [_, o.domids["search-export"]]
        ]) : b("", !0),
        e.$attrs.onImport ? A((r(), p(i, h({ key: 6 }, { type: "warning", ...o.importBtn }, {
          onClick: t[6] || (t[6] = (f) => e.$emit("import"))
        }), {
          default: c(() => [
            m(a, { name: "UploadFilled" }),
            k(" 导入 ")
          ]),
          _: 1
        }, 16)), [
          [_, o.domids.import]
        ]) : b("", !0),
        y(e.$slots, "tools-suffix", {}, void 0, !0),
        V("div", Xl, [
          y(e.$slots, "tools-end", {}, void 0, !0)
        ])
      ])
    ]),
    _: 3
  });
}
const Ul = /* @__PURE__ */ S(Nl, [["render", Fl], ["__scopeId", "data-v-02d70f98"]]), ql = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ul
}, Symbol.toStringTag, { value: "Module" }));
function Ll(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ve(e);
}
const {
  h: Wl,
  resolveComponent: Hl
} = Vue, Jl = (e) => {
  const t = e._data.length > 0 && e.selected.size === e._data.length, o = !t && e.selected.size > 0, s = (n) => {
    n ? e._data.forEach((a, i) => e.selected.add(i)) : e.selected.clear();
    const l = n ? e._data.slice() : [];
    e.handleSelectionChange(l);
  };
  return m(d("el-checkbox"), {
    modelValue: t,
    indeterminate: o,
    onChange: s
  }, null);
}, Kl = (e, t) => {
  const {
    rowIndex: o,
    rowData: s
  } = e, n = () => {
    t.selected.has(o) ? t.selected.delete(o) : t.selected.add(o);
    const l = [...t.selected].map((a) => t._data[a]);
    t.handleSelectionChange(l);
  };
  return m(d("el-checkbox"), {
    modelValue: t.selected.has(o),
    onChange: n
  }, null);
}, Yl = (e, t) => {
  const {
    page: o,
    limit: s
  } = t._query;
  return (o - 1) * s + e.rowIndex + 1;
}, Zl = (e, t) => {
  const {
    rowIndex: o
  } = e;
  return m("input", {
    type: "radio",
    value: o,
    checked: o === t.checked,
    onChange: t.handleCheckedChange
  }, null);
}, J = ([e, t, o, s, n, l]) => {
  const {
    rowIndex: a,
    rowData: i
  } = e, u = () => {
    t._emit(o, {
      $index: a,
      row: i
    });
  };
  return m(d("el-button"), h({
    type: s
  }, t._attrs[o + "-btn"], {
    onClick: u
  }), {
    default: () => [m(d("x-icon"), {
      name: n
    }, null), l]
  });
}, Gl = (e, t) => {
  if (t.canEdit(e.rowData))
    return J([e, t, "edit", "warning", "edit", "编辑"]);
}, Ql = (e, t) => {
  if (t.canRowEdit(e.rowData))
    return J([e, t, "row-edit", "success", "collection", "保存"]);
}, es = (e, t) => {
  if (t.canCancelEdit(e.rowData))
    return J([e, t, "cancel-edit", "warning", "refresh-left", "取消编辑"]);
}, ts = (e, t) => {
  if (t.canDelete(e.rowData))
    return J([e, t, "delete", "danger", "DeleteFilled", "删除"]);
}, os = (e, t) => {
  const {
    _attrs: o,
    $slots: s
  } = t, {
    slotRenderers: n = {}
  } = o;
  if (e.type === "selection")
    return (l) => Kl(l, t);
  if (e.type === "index")
    return (l) => Yl(l, t);
  if (e.type === "radio")
    return (l) => Zl(l, t);
  if (e.slot) {
    if (n[e.slot])
      return n[e.slot];
    if (s[e.slot])
      return (l) => s[e.slot]({
        scope: {
          $index: l.rowIndex,
          row: l.rowData
        },
        column: e
      });
  } else if (t.slotAll)
    return (l) => s.all({
      scope: {
        $index: l.rowIndex,
        row: l.rowData
      },
      column: e
    });
  return (l) => {
    const {
      rowData: a,
      column: i
    } = l;
    if (i.comp === "ElSwitch" || t.table.isRowEdit && a.isEditing && (i.visible !== !1 || i.canEdit)) {
      const f = ($) => {
        a[i.prop] = $;
      }, w = i.comp || "ElInput";
      return Wl(Hl(w), {
        ...i,
        ...i.formAttrs,
        modelValue: a[i.prop],
        onInput: f,
        disabled: !a.editable || !a.isEditing
      });
    }
    const u = t.calcValue(l.rowData, e), {
      showOverflowTooltip: _
    } = i.tableAttrs || {};
    return _ ? m(d("el-tooltip"), {
      content: u
    }, Ll(u) ? u : {
      default: () => [u]
    }) : u;
  };
}, ns = (e, t) => {
  const {
    _attrs: o,
    $slots: s
  } = t, n = e.map((l, a) => {
    const {
      tableAttrs: i = {}
    } = l, u = {
      ...l,
      key: a,
      dataKey: l.prop,
      title: l.label,
      width: l.width || i.width || l.minWidth || i.minWidth || l.maxWidth || i.maxWidth,
      align: l.align || o.tableAlign || "center"
    };
    return u.type === "selection" && (u.width = u.width || 46, u.headerCellRenderer = Jl(t)), u.cellRenderer = os(u, t), u;
  });
  return t.hideOperates || n.push({
    key: n.length,
    title: "操作",
    type: "operates",
    width: t.operatesWidth || 195,
    align: o.operatesAlign || o.tableAlign || "center",
    fixed: o.operatesFixed || "right",
    cellRenderer(l) {
      return m("div", {
        class: "operates"
      }, [s["operates-prefix"] ? s["operates-prefix"]() : null, Gl(l, t), Ql(l, t), es(l, t), ts(l, t), s["operates-suffix"] ? s["operates-suffix"]() : null]);
    }
  }), n;
}, ls = {
  convertColumnsForTableV2: ns
};
const ss = {
  name: "XTableV2",
  props: {
    ...T.props(),
    fixed: {
      type: Boolean,
      default: !0
    },
    height: {
      type: String,
      default: "60vh"
    }
  },
  emits: [
    ...T.emits()
  ],
  components: { Searcher: ae, Settings: re },
  data() {
    return {
      isFullscreen: !1,
      zoom: 1,
      selected: /* @__PURE__ */ new Set(),
      checked: null,
      activeNames: ["name"],
      settings: {}
    };
  },
  computed: {
    ...T.computed
  },
  watch: {
    ...T.watch,
    settings: "saveSettings"
  },
  created() {
    this.initSettings();
  },
  mounted() {
    this.table && (this.table.tableRef = this.$refs.tableRef), this.$emit("update:tref", this.$refs.tableRef);
  },
  methods: {
    ...T.methods,
    convertColumnsForTableV2: ls.convertColumnsForTableV2
  }
}, is = { key: 1 };
function as(e, t, o, s, n, l) {
  const a = d("Searcher"), i = d("x-icon"), u = d("Settings"), _ = d("x-table-tools"), f = d("el-table-v2"), w = d("el-auto-resizer"), $ = d("x-pagination"), P = d("el-collapse-item"), M = d("el-collapse"), U = H("loading");
  return r(), g("div", {
    class: D(["pc-x-table-v2", { fullscreen: n.isFullscreen }])
  }, [
    m(a, {
      ref: "searcher",
      uid: e._uid,
      columns: e.searcherColumns,
      config: e.searcherConfig,
      onSearch: t[0] || (t[0] = (z) => e._emit("search", z))
    }, null, 8, ["uid", "columns", "config"]),
    m(M, {
      modelValue: n.activeNames,
      "onUpdate:modelValue": t[3] || (t[3] = (z) => n.activeNames = z),
      class: D((e.useCollapse ? "use" : "no") + "-collapse")
    }, {
      default: c(() => [
        m(P, {
          name: n.activeNames[0]
        }, {
          title: c(() => [
            e.$slots["collapse-title"] ? y(e.$slots, "collapse-title", { key: 0 }) : (r(), g("span", is, C(e.title), 1))
          ]),
          default: c(() => [
            e.hideTools !== "" && e.hideTools !== !0 ? (r(), p(_, h({ key: 0 }, e._attrs, {
              domids: e.domids,
              onAdd: e._onAdd,
              onSearch: e._onSearch,
              onExport: e._onExport,
              onSearchExport: e._onSearchExport,
              onImport: e._onImport,
              onMultiEdit: e._onMultiEdit,
              onMultiDelete: e._onMultiDelete
            }), N({
              "tools-end": c(() => [
                m(i, {
                  name: "FullScreen",
                  class: "full",
                  onClick: e.handleToggleFullscreen
                }, null, 8, ["onClick"]),
                m(u, {
                  modelValue: n.settings,
                  "onUpdate:modelValue": t[1] || (t[1] = (z) => n.settings = z),
                  visible: !e.hideSettings,
                  width: e._attrs["cols-popover-width"] || 500,
                  onReset: e.handleResetSettings
                }, null, 8, ["modelValue", "visible", "width", "onReset"])
              ]),
              _: 2
            }, [
              e.$slots["tools-prefix"] ? {
                name: "tools-prefix",
                fn: c(() => [
                  y(e.$slots, "tools-prefix")
                ]),
                key: "0"
              } : void 0,
              e.$slots["tools-suffix"] ? {
                name: "tools-suffix",
                fn: c(() => [
                  y(e.$slots, "tools-suffix")
                ]),
                key: "1"
              } : void 0
            ]), 1040, ["domids", "onAdd", "onSearch", "onExport", "onSearchExport", "onImport", "onMultiEdit", "onMultiDelete"])) : b("", !0),
            m(w, {
              style: ke({ height: o.height })
            }, {
              default: c(({ width: z, height: v }) => [
                A((r(), p(f, h({
                  ref: "tableRef",
                  "header-height": 46,
                  "row-height": 40
                }, e.elTableAttrs, {
                  data: e._data,
                  columns: l.convertColumnsForTableV2(e._visibleColumns, this),
                  fixed: o.fixed,
                  width: z,
                  height: v
                }), N({ _: 2 }, [
                  e.$slots.footer ? {
                    name: "footer",
                    fn: c(() => [
                      y(e.$slots, "footer")
                    ]),
                    key: "0"
                  } : void 0,
                  e.$slots.empty ? {
                    name: "empty",
                    fn: c(() => [
                      y(e.$slots, "empty")
                    ]),
                    key: "1"
                  } : void 0,
                  e.$slots.overlay ? {
                    name: "overlay",
                    fn: c(() => [
                      y(e.$slots, "overlay")
                    ]),
                    key: "2"
                  } : void 0
                ]), 1040, ["data", "columns", "fixed", "width", "height"])), [
                  [U, e._loading]
                ])
              ]),
              _: 3
            }, 8, ["style"]),
            e._query && e._total && (e.onSearch || e._listen.search) ? (r(), p($, {
              key: 1,
              query: e._query,
              total: e._total,
              onSearch: t[2] || (t[2] = (z) => e._emit("search"))
            }, null, 8, ["query", "total"])) : b("", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["modelValue", "class"])
  ], 2);
}
const rs = /* @__PURE__ */ S(ss, [["render", as]]), cs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rs
}, Symbol.toStringTag, { value: "Module" }));
const Z = ["selection", "radio"], us = {
  name: "XTableViewer",
  inheritAttrs: !1,
  props: {
    title: {
      type: String,
      default: "数据表查看器"
    },
    useTableV2: {
      type: Boolean,
      default: !1
    },
    visible: Boolean,
    selectMode: String,
    model: Object,
    controller: Object,
    dialogAttrs: Object,
    tableAttrs: Object
  },
  emits: [
    "update:visible",
    "select"
  ],
  computed: {
    table() {
      return this.model.table;
    },
    dialog() {
      return this.model.dialog;
    },
    _tableAttrs() {
      return {
        "max-height": "50vh",
        "hide-operates": !0,
        "hide-settings": !0,
        ...this.tableAttrs
      };
    },
    _dialogAttrs() {
      return {
        width: this.$attrs.width || (window.isMobile ? "92%" : "60%"),
        "submit-text": "确定",
        "close-on-click-modal": !1,
        "close-on-press-escape": !1,
        ...this.dialogAttrs
      };
    }
  },
  created() {
    this.init(), this.controller.handleSearch();
  },
  methods: {
    init() {
      const { table: e, selectMode: t } = this;
      Z.includes(t) && (e.columns.find((o) => o.type === "_index") || e.columns.unshift({ type: "_index" }), e.columns.find((o) => o.type === t) || e.columns.unshift({
        prop: "_index",
        type: t,
        fixed: "left",
        width: 55,
        label: t === "selection" ? "" : "单选"
      })), e.columns = e.columns.filter((o) => this.selectMode === o.type || !Z.includes(o.type));
    },
    handleSubmit() {
      const { table: e, selectMode: t } = this;
      if (Z.includes(t)) {
        let o = null;
        if (t === "selection" ? o = e.selection : t === "radio" && (o = e.checked), t === "selection" && !o.length || !o) {
          this.$message({ type: "warning", message: "未选择数据" }), this.handleCancel();
          return;
        }
        this.$emit("select", o), this.clearSelected();
      }
      this.handleCancel();
    },
    handleCancel() {
      this.$emit("update:visible", !1);
    },
    handleBeforeClose(e) {
      return e === "cancel" ? !0 : new Promise((t) => {
        const o = () => {
          this.handleCancel(), t(!0);
        };
        this._dialogAttrs["before-close"] ? this._dialogAttrs["before-close"](o) : o();
      });
    },
    clearSelected() {
      this.table.selection = [], this.table.checked = null, this.table.tableRef.clearSelection(), this.table.tableRef.$el.querySelectorAll('input[type="radio"]').forEach((t) => t.checked = !1);
    }
  }
}, ds = { class: "x-table-viewer" };
function ps(e, t, o, s, n, l) {
  const a = d("x-dialog");
  return r(), g("div", ds, [
    m(a, h(l._dialogAttrs, {
      modelValue: o.visible,
      "onUpdate:modelValue": t[1] || (t[1] = (i) => e.$emit("update:visible", i)),
      title: o.title,
      "before-close": l.handleBeforeClose,
      onSubmit: l.handleSubmit,
      onCancel: l.handleCancel
    }), {
      default: c(() => [
        (r(), p(F(o.useTableV2 ? "x-table-v2" : "x-table"), h({
          tref: l.table.tableRef,
          "onUpdate:tref": t[0] || (t[0] = (i) => l.table.tableRef = i),
          table: l.table
        }, l._tableAttrs, {
          onSearch: o.controller.handleSearch
        }), null, 16, ["tref", "table", "onSearch"]))
      ]),
      _: 1
    }, 16, ["modelValue", "title", "before-close", "onSubmit", "onCancel"])
  ]);
}
const ms = /* @__PURE__ */ S(us, [["render", ps], ["__scopeId", "data-v-f5d31400"]]), fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ms
}, Symbol.toStringTag, { value: "Module" })), hs = {
  name: "XTinymce",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    config: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      id: "tm-" + Date.now().toString(16),
      instance: null
    };
  },
  watch: {
    modelValue(e) {
      var t;
      (t = this.instance) == null || t[0].setContent(e);
    }
  },
  mounted() {
    this.initEditor();
  },
  beforeUnmount() {
    this.instance && (this.instance[0].destroy(), this.instance = null);
  },
  methods: {
    async initEditor() {
      const e = await window.tinymce.init({
        selector: "textarea#" + this.id,
        height: 500,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "help",
          "wordcount"
        ],
        toolbar: `
          undo redo | blocks | 
          bold italic backcolor | alignleft aligncenter 
          alignright alignjustify | bullist numlist outdent indent | 
          removeformat | help
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }
        `,
        placeholder: "请输入、编辑富文本内容~",
        ...this.config
      });
      this.instance = Object.freeze(e), this.addSaveButton();
    },
    handleSave() {
      this.$emit("update:modelValue", this.instance[0].getContent());
    },
    addSaveButton() {
      const e = document.querySelector(".tox-menubar"), t = e.childNodes[0].cloneNode(!0);
      t.textContent = "保存", t.style.color = "#409EFF", t.onclick = this.handleSave.bind(this), e.appendChild(t);
    }
  }
}, _s = { class: "x-tinymce" }, bs = ["id", "innerHTML"];
function gs(e, t, o, s, n, l) {
  return r(), g("div", _s, [
    V("textarea", {
      id: n.id,
      innerHTML: o.modelValue
    }, null, 8, bs)
  ]);
}
const ys = /* @__PURE__ */ S(hs, [["render", gs]]), vs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ys
}, Symbol.toStringTag, { value: "Module" }));
const Ss = {
  name: "XFileUploader",
  props: {
    modelValue: Array | String,
    multiple: Boolean,
    accept: String
  },
  emits: ["update:modelValue"],
  data() {
    return {
      action: `${this.$api.API_BASE_URL}/upload_file`
    };
  },
  computed: {
    filepath() {
      const e = this.modelValue;
      return Array.isArray(e) ? e[0] : e;
    }
  },
  methods: {
    onSuccess(e, t, o) {
      const s = this.$api.API_BASE_URL + "/" + e.filename;
      this.$emit("update:modelValue", s);
    }
  }
}, $s = (e) => (oe("data-v-e756c8fc"), e = e(), ne(), e), ks = { class: "mask" }, ws = /* @__PURE__ */ $s(() => /* @__PURE__ */ V("div", { class: "el-upload__text" }, [
  /* @__PURE__ */ k(" 将文件拖到此处，或"),
  /* @__PURE__ */ V("em", null, "点击上传")
], -1)), Cs = {
  key: 0,
  class: "path"
};
function Os(e, t, o, s, n, l) {
  const a = d("x-icon"), i = d("el-upload");
  return r(), p(i, {
    drag: "",
    "show-file-list": !1,
    action: n.action,
    accept: o.accept,
    multiple: o.multiple,
    "on-success": l.onSuccess,
    class: "x-file-uploader"
  }, {
    default: c(() => [
      V("div", ks, [
        m(a, { name: "upload-filled" }),
        ws
      ]),
      l.filepath ? (r(), g("div", Cs, C(o.modelValue), 1)) : b("", !0)
    ]),
    _: 1
  }, 8, ["action", "accept", "multiple", "on-success"]);
}
const Vs = /* @__PURE__ */ S(Ss, [["render", Os], ["__scopeId", "data-v-e756c8fc"]]), js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vs
}, Symbol.toStringTag, { value: "Module" }));
const xs = {
  name: "XImageUploader",
  props: {
    modelValue: Array | String,
    multiple: Boolean
  },
  emits: ["update:modelValue"],
  data() {
    return {
      action: `${this.$api.API_BASE_URL}/upload_file`
    };
  },
  computed: {
    image() {
      const e = this.modelValue;
      return Array.isArray(e) ? e[0] : e;
    }
  },
  methods: {
    onSuccess(e, t, o) {
      const s = this.$api.API_BASE_URL + "/" + e.filename;
      this.$emit("update:modelValue", s);
    }
  }
}, Es = (e) => (oe("data-v-c8f36d63"), e = e(), ne(), e), As = { class: "mask" }, Ts = /* @__PURE__ */ Es(() => /* @__PURE__ */ V("div", { class: "el-upload__text" }, [
  /* @__PURE__ */ k(" 将图片拖到此处，或"),
  /* @__PURE__ */ V("em", null, "点击上传")
], -1));
function Ms(e, t, o, s, n, l) {
  const a = d("el-image"), i = d("x-icon"), u = d("el-upload");
  return r(), p(u, {
    drag: "",
    "show-file-list": !1,
    action: n.action,
    accept: "image/*",
    multiple: o.multiple,
    "on-success": l.onSuccess,
    class: "x-image-uploader"
  }, {
    default: c(() => [
      l.image ? (r(), p(a, {
        key: 0,
        src: l.image,
        alt: "upload-image",
        fit: "cover"
      }, null, 8, ["src"])) : b("", !0),
      V("div", As, [
        m(i, { name: "upload-filled" }),
        Ts
      ])
    ]),
    _: 1
  }, 8, ["action", "multiple", "on-success"]);
}
const zs = /* @__PURE__ */ S(xs, [["render", Ms], ["__scopeId", "data-v-c8f36d63"]]), Ps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zs
}, Symbol.toStringTag, { value: "Module" }));
const { h: Bs } = Vue, Is = (e, t) => e.$.appContext.components[t], be = /* @__PURE__ */ Object.assign({ "./components/xactionsheet/xactionsheet.vue": je, "./components/xautorows/xautorows.vue": ze, "./components/xbutton/mobile.vue": Re, "./components/xbutton/pc.vue": Fe, "./components/xchart/xchart.vue": He, "./components/xcheckboxs/mobile.vue": Qe, "./components/xcheckboxs/pc.vue": nt, "./components/xcol/mobile.vue": at, "./components/xcol/pc.vue": dt, "./components/xdialog/mobile.vue": ht, "./components/xdialog/pc.vue": vt, "./components/xdistrictselect/xdistrictselect.vue": wt, "./components/xform/mobile.vue": Pt, "./components/xform/pc.vue": Dt, "./components/xformitem/mobile.vue": qt, "./components/xformitem/pc.vue": Wt, "./components/xicon/mobile.vue": Zt, "./components/xicon/pc.vue": oo, "./components/xinfo/xinfo.vue": tn, "./components/xlooper/xlooper.vue": an, "./components/xpagination/mobile.vue": dn, "./components/xpagination/pc.vue": hn, "./components/xpicker/xpicker.vue": yn, "./components/xradios/mobile.vue": kn, "./components/xradios/pc.vue": Vn, "./components/xrow/mobile.vue": Tn, "./components/xrow/pc.vue": In, "./components/xselect/mobile.vue": Un, "./components/xselect/pc.vue": Yn, "./components/xtable/mobile.vue": dl, "./components/xtable/pc.vue": Al, "./components/xtable/searcher.vue": bl, "./components/xtable/settings.vue": wl, "./components/xtabletools/mobile.vue": Rl, "./components/xtabletools/pc.vue": ql, "./components/xtablev2/xtablev2.vue": cs, "./components/xtableviewer/xtableviewer.vue": fs, "./components/xtinymce/xtinymce.vue": vs, "./components/xuploader/xfileuploader.vue": js, "./components/xuploader/ximageuploader.vue": Ps }), Rs = (e) => ({
  props: {
    platform: {
      type: String,
      default: window.isMobile ? "mobile" : "pc"
    }
  },
  data() {
    return { name: "" };
  },
  created() {
    this.name = (this.platform.toLowerCase() === "pc" ? "Pc" : "Mobile") + e;
  },
  render() {
    return Bs(Is(this, this.name), {
      platform: this.platform,
      ...this.$attrs
    }, this.$slots);
  }
}), te = (() => {
  const e = {};
  for (const n in be) {
    const l = be[n].default;
    /X[A-Z][a-z]/.test(l.name) && (e[l.name] = l);
  }
  const t = Object.keys(e), o = [...new Set(t.map((n) => n.replace(/(pc|mobile)/i, "")))], s = {};
  for (const n of t)
    /(pc|mobile)/i.test(n) && (s[n] = e[n]);
  for (const n of o)
    t.find((l) => /(pc|mobile)/i.test(l) && l.toLowerCase().includes(n.toLowerCase())) ? s[n] = Rs(n) : s[n] = e[n];
  return s;
})(), Ns = (e, t) => {
  for (const [o, s] of Object.entries(we))
    e.component(o, s);
  for (let o in te)
    e.component(o, te[o]);
}, Us = {
  ...te,
  install: Ns,
  areaList: B
};
export {
  Us as default
};
