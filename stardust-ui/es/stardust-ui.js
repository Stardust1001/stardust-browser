import { resolveComponent as d, openBlock as r, createBlock as p, mergeProps as f, createElementBlock as g, Fragment as x, renderList as E, withCtx as c, renderSlot as y, toDisplayString as C, useCssVars as ye, createTextVNode as k, createSlots as N, resolveDynamicComponent as F, createCommentVNode as b, createVNode as m, normalizeProps as H, guardReactiveProps as ve, normalizeClass as D, isVNode as Se, createElementVNode as V, withModifiers as L, pushScopeId as ne, popScopeId as le, resolveDirective as J, withDirectives as A, normalizeStyle as we } from "vue";
import { a as I } from "./.store-ec770b89.js";
import { E as Ce } from "./@element-plus-3084701b.js";
const S = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, n] of t)
    o[s] = n;
  return o;
}, Oe = {
  name: "XActionSheet",
  props: {
    actionSheet: Object
  }
};
function Ve(e, t, o, s, n, l) {
  const a = d("van-action-sheet");
  return r(), p(a, f(e.$attrs, {
    show: o.actionSheet.show,
    "onUpdate:show": t[0] || (t[0] = (i) => o.actionSheet.show = i),
    actions: o.actionSheet.actions
  }), null, 16, ["show", "actions"]);
}
const je = /* @__PURE__ */ S(Oe, [["render", Ve]]), xe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: je
}, Symbol.toStringTag, { value: "Module" })), Ee = {
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
}, Ae = { class: "x-auto-rows" }, Te = { key: 1 };
function Me(e, t, o, s, n, l) {
  const a = d("XCol"), i = d("XRow");
  return r(), g("div", Ae, [
    (r(!0), g(x, null, E(l.rows, (u, _) => (r(), p(i, f({ key: _ }, e.$attrs, {
      platform: e.$attrs.platform
    }), {
      default: c(() => [
        (r(!0), g(x, null, E(u, (h, w) => (r(), p(a, f(h, {
          span: h.span || o.span,
          key: w,
          platform: e.$attrs.platform
        }), {
          default: c(() => [
            h.slot || e.$attrs.slot ? y(e.$slots, h.slot || e.$attrs.slot, {
              key: 0,
              col: h
            }) : (r(), g("span", Te, C(h.text), 1))
          ]),
          _: 2
        }, 1040, ["span", "platform"]))), 128))
      ]),
      _: 2
    }, 1040, ["platform"]))), 128))
  ]);
}
const ze = /* @__PURE__ */ S(Ee, [["render", Me]]), Pe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ze
}, Symbol.toStringTag, { value: "Module" })), Ie = {
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
const Re = /* @__PURE__ */ S(Ie, [["render", Be]]), Ne = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Re
}, Symbol.toStringTag, { value: "Module" })), De = {
  name: "PcXButton"
};
function Xe(e, t, o, s, n, l) {
  const a = d("el-button");
  return r(), p(a, null, {
    default: c(() => [
      y(e.$slots, "default")
    ]),
    _: 3
  });
}
const Fe = /* @__PURE__ */ S(De, [["render", Xe]]), Ue = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fe
}, Symbol.toStringTag, { value: "Module" }));
const { funcs: qe } = StardustBrowser, se = {
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
      return qe.calcPixel(this.height) * this.zoom + "px";
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
}, de = () => {
  ye((e) => ({
    "127c024a": e.zoomedHeight,
    "137ee0b8": e.zoom
  }));
}, pe = se.setup;
se.setup = pe ? (e, t) => (de(), pe(e, t)) : de;
const Le = {
  class: "x-chart",
  ref: "el"
};
function We(e, t, o, s, n, l) {
  return r(), g("div", Le, null, 512);
}
const He = /* @__PURE__ */ S(se, [["render", We], ["__scopeId", "data-v-0c2da986"]]), Je = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: He
}, Symbol.toStringTag, { value: "Module" })), { toRaw: Ke } = Vue, Ye = (e, t) => {
  const o = e.__v_isRef ? e.value : Ke(e);
  let s = o;
  if (typeof o[0] != "object" && (s = o.map((l) => ({ text: l, value: l }))), !t.sort)
    return s;
  const n = typeof t.sort == "string" ? t.sort : t.text || "text";
  return s.sort((l, a) => l[n].localeCompare(a[n]));
}, R = {
  formatOptions: Ye
}, Ze = {
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
function Ge(e, t, o, s, n, l) {
  const a = d("van-checkbox"), i = d("van-checkbox-group");
  return r(), p(i, f({ class: "mobile-x-checkboxs" }, l.attrs, { direction: o.direction }), {
    default: c(() => [
      (r(!0), g(x, null, E(l.formatOptions(o.options, this), (u) => (r(), p(a, f(l.attrs, {
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
const Qe = /* @__PURE__ */ S(Ze, [["render", Ge]]), et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qe
}, Symbol.toStringTag, { value: "Module" })), tt = {
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
function ot(e, t, o, s, n, l) {
  const a = d("el-checkbox"), i = d("el-checkbox-group");
  return r(), p(i, f({ class: "pc-x-checkboxs" }, l.attrs, {
    modelValue: o.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (u) => e.$emit("update:modelValue", u))
  }), {
    default: c(() => [
      (r(!0), g(x, null, E(l.formatOptions(o.options, this), (u) => (r(), p(a, f(l.attrs, {
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
const nt = /* @__PURE__ */ S(tt, [["render", ot]]), lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nt
}, Symbol.toStringTag, { value: "Module" })), st = {
  name: "MobileXCol",
  inheritAttrs: !1,
  computed: {
    attrs() {
      const { text: e, slot: t, ...o } = this.$attrs;
      return o;
    }
  }
};
function it(e, t, o, s, n, l) {
  const a = d("van-col");
  return r(), p(a, f(l.attrs, { class: "mobile-x-col" }), {
    default: c(() => [
      y(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const at = /* @__PURE__ */ S(st, [["render", it]]), rt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: at
}, Symbol.toStringTag, { value: "Module" })), ct = {
  name: "PcXCol",
  inheritAttrs: !1,
  computed: {
    attrs() {
      const { text: e, slot: t, ...o } = this.$attrs;
      return o;
    }
  }
};
function ut(e, t, o, s, n, l) {
  const a = d("el-col");
  return r(), p(a, f(l.attrs, { class: "pc-x-col" }), {
    default: c(() => [
      y(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const dt = /* @__PURE__ */ S(ct, [["render", ut]]), pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dt
}, Symbol.toStringTag, { value: "Module" })), mt = {
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
function ht(e, t, o, s, n, l) {
  const a = d("van-dialog");
  return r(), p(a, f({ width: "92%" }, e.$attrs, {
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
const ft = /* @__PURE__ */ S(mt, [["render", ht]]), _t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ft
}, Symbol.toStringTag, { value: "Module" })), bt = {
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
}, gt = {
  key: 1,
  class: "el-dialog__title"
};
function yt(e, t, o, s, n, l) {
  const a = d("x-icon"), i = d("el-button");
  return r(), p(F(o.drawer ? "ElDrawer" : "ElDialog"), f({ draggable: o.draggable }, e.$attrs, {
    modelValue: l.visible,
    "onUpdate:modelValue": t[2] || (t[2] = (u) => l.visible = u),
    fullscreen: n.fullscreen,
    size: e.$attrs.width,
    class: ["pc-x-dialog", { "pc-x-drawer": o.drawer }]
  }), {
    header: c(() => [
      e.$slots.header ? y(e.$slots, "header", { key: 0 }) : (r(), g("span", gt, C(e.$attrs.title), 1)),
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
const vt = /* @__PURE__ */ S(bt, [["render", yt]]), St = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vt
}, Symbol.toStringTag, { value: "Module" })), Y = {
  provinces: Object.entries(I.province_list).map((e) => ({ value: e[0], text: e[1] })),
  cities: Object.entries(I.city_list).map((e) => ({ value: e[0], text: e[1] })),
  counties: Object.entries(I.county_list).map((e) => ({ value: e[0], text: e[1] }))
}, $t = {
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
      provinces: Object.freeze(Y.provinces),
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
      this.cities = Object.freeze(Y.cities.filter((o) => o.value.slice(0, 2) === t));
    },
    city(e) {
      if (this.county || this.update(), this.county = "", !e) {
        this.counties = [];
        return;
      }
      const t = e.slice(0, 4);
      this.counties = Object.freeze(Y.counties.filter((o) => o.value.slice(0, 4) === t));
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
        const s = Object.entries(I.province_list).find((n) => n[1] === e);
        this.province = s == null ? void 0 : s[0];
      } else {
        this.province = "", this.inited = !0;
        return;
      }
      if (await this.$nextTick(), t) {
        const s = Object.entries(I.city_list).find((n) => n[1] === t);
        this.city = s == null ? void 0 : s[0];
      } else {
        this.city = "", this.inited = !0;
        return;
      }
      if (await this.$nextTick(), o) {
        const s = Object.entries(I.county_list).find((n) => n[1] === o);
        this.county = s == null ? void 0 : s[0];
      } else
        this.county = "";
      this.inited = !0, this.update();
    },
    update() {
      if (!this.inited)
        return;
      let e = [
        this.province && I.province_list[this.province] || "",
        this.number > 1 && this.city && I.city_list[this.city] || "",
        this.number > 2 && this.county && I.county_list[this.county] || ""
      ].slice(0, this.number).join("/");
      this.$emit("update:modelValue", e), this.$emit("change", e);
    }
  }
};
function kt(e, t, o, s, n, l) {
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
const wt = /* @__PURE__ */ S($t, [["render", kt]]), Ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wt
}, Symbol.toStringTag, { value: "Module" }));
function Ot() {
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
function Vt() {
  const { dialog: e, form: t, model: o } = this.$props;
  return o || (e || t).form;
}
function jt() {
  const { hideLabels: e, dialog: t, form: o } = this.$props;
  return (this.items || (t || o).formItems).map((n) => (delete n.visible, e ? {
    ...n,
    label: " ",
    _label: n.label
  } : n)).filter((n) => this.dialog ? this.dialog.isEditing ? n.canEdit !== !1 : n.canAdd !== !1 : !0).map((n) => Object.assign({}, n, n.formAttrs));
}
function xt() {
  const { dialog: e, form: t, rules: o } = this.$props;
  return o || (e || t).formRules;
}
function Et(e) {
  var s;
  let { placeholder: t, comp: o } = e;
  return t || (t = "options" in e || /(date|time)/i.test(o) ? "请选择" : "请输入", t += ((s = e.label) == null ? void 0 : s.trim()) || e._label || e.text || e.model || ""), t;
}
function At(e) {
  const t = { ...e.style };
  return "itemWidth" in this && (t.width = this.itemWidth), e.span && (t.width = e.span / 24 * 100 + "%"), e.offset && (t.marginLeft = e.offset / 24 * 100 + "%"), t;
}
function Tt(e) {
  return typeof e == "boolean" ? e.toString() : e;
}
const X = {
  props: Ot,
  computed: {
    _model: Vt,
    _items: jt,
    _rules: xt
  },
  methods: {
    calcPlaceholder: Et,
    calcStyle: At,
    formatModelValue: Tt
  }
}, Mt = {
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
function zt(e, t, o, s, n, l) {
  const a = d("mobile-x-form-item"), i = d("van-cell-group"), u = d("van-form");
  return r(), p(u, {
    ref: "formRef",
    class: "mobile-x-form"
  }, {
    default: c(() => [
      e.$slots.pre ? y(e.$slots, "pre", { key: 0 }) : b("", !0),
      m(i, H(ve(e.$attrs)), {
        default: c(() => [
          (r(!0), g(x, null, E(e._items, (_, h) => (r(), p(a, f(_, {
            rules: e._rules[_.prop] || _.rules,
            key: h,
            modelValue: e.formatModelValue(e._model[_.prop]),
            "onUpdate:modelValue": (w) => e._model[_.prop] = w,
            placeholder: e.calcPlaceholder(_)
          }), {
            default: c(() => [
              _.slot ? y(e.$slots, _.slot, H(f({ key: 0 }, _))) : b("", !0)
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
const Pt = /* @__PURE__ */ S(Mt, [["render", zt]]), It = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pt
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
}, Rt = { key: 1 };
function Nt(e, t, o, s, n, l) {
  const a = d("pc-x-form-item"), i = d("el-form"), u = d("el-collapse-item"), _ = d("el-collapse");
  return r(), p(_, {
    modelValue: n.activeNames,
    "onUpdate:modelValue": t[0] || (t[0] = (h) => n.activeNames = h),
    class: D((o.useCollapse ? "use" : "no") + "-collapse")
  }, {
    default: c(() => [
      m(u, {
        name: n.activeNames[0]
      }, {
        title: c(() => [
          e.$slots["collapse-title"] ? y(e.$slots, "collapse-title", { key: 0 }) : (r(), g("span", Rt, C(o.title), 1))
        ]),
        default: c(() => [
          m(i, f({ ref: "formRef" }, e.$attrs, {
            model: e._model,
            rules: e._rules,
            "label-width": o.labelWidth,
            "label-position": e.$attrs.labelPosition || "right",
            class: ["pc-x-form", { "hide-labels": o.hideLabels }]
          }), {
            default: c(() => [
              e.$slots.pre ? y(e.$slots, "pre", { key: 0 }) : b("", !0),
              (r(!0), g(x, null, E(e._items, (h, w) => (r(), p(a, f(h, {
                key: w,
                modelValue: e._model[h.prop],
                "onUpdate:modelValue": [($) => e._model[h.prop] = $, ($) => h.onChange || null],
                "label-width": o.labelWidth,
                prop: h.prop || h.model,
                clearable: h.clearable !== !1,
                placeholder: e.calcPlaceholder(h),
                style: e.calcStyle(h),
                "show-tooltip": e.$attrs.showTooltip || !1
              }), {
                default: c(() => [
                  h.slot ? y(e.$slots, h.slot, { key: 0 }) : b("", !0)
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
const Dt = /* @__PURE__ */ S(Bt, [["render", Nt]]), Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dt
}, Symbol.toStringTag, { value: "Module" }));
function me(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Se(e);
}
const {
  h: Q
} = Vue, ee = (e, t) => e.$.appContext.components[t], te = (e) => {
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
  }, h = [];
  return a === "html" ? _.class = "comp-html" : l = ee(e, l), i && (_.innerHTML = i), u && h.push(u), Q(l, _, {
    default: () => h
  });
}, Ft = (e) => {
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
    let h;
    _ = m(d("el-tooltip"), {
      effect: "dark",
      content: u,
      placement: "bottom"
    }, me(h = te(e)) ? h : {
      default: () => [h]
    });
  } else
    _ = te(e);
  return m(d("el-form-item"), null, me(_) ? _ : {
    default: () => [_]
  });
}, Ut = (e) => {
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
  const h = {
    modelValue: a,
    "onUpdate:modelValue": (w) => n("update:modelValue", w)
  };
  return i && o.label || u ? Q(ee(e, "van-field"), h, {
    input: () => i && o.label ? l.default() : te(e)
  }) : (Object.assign(h, s), Q(ee(e, "van-field"), h));
}, qt = {
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
    return Ut(this);
  }
}, Lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qt
}, Symbol.toStringTag, { value: "Module" }));
const ie = {
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
        format: h,
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
    return Ft(this);
  }
}, he = () => {
  ye((e) => ({
    ba9709f0: e.width
  }));
}, fe = ie.setup;
ie.setup = fe ? (e, t) => (he(), fe(e, t)) : he;
const Wt = /* @__PURE__ */ S(ie, [["__scopeId", "data-v-d2cde1e2"]]), Ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wt
}, Symbol.toStringTag, { value: "Module" })), _e = /* @__PURE__ */ Object.assign({}), Jt = {
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
      await Promise.all(Object.keys(_e).map(async (t) => {
        const o = t.split("/").pop().split(".")[0], s = await _e[t]();
        e[o] = s.default;
      })), this.icons = e;
    }
  }
}, Kt = ["src"];
function Yt(e, t, o, s, n, l) {
  const a = d("van-icon");
  return n.icons[o.name] ? (r(), g("img", {
    key: 0,
    src: n.icons[o.name],
    alt: "icon"
  }, null, 8, Kt)) : (r(), p(a, f({ key: 1 }, e.$attrs, { name: o.name }), null, 16, ["name"]));
}
const Zt = /* @__PURE__ */ S(Jt, [["render", Yt]]), Gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zt
}, Symbol.toStringTag, { value: "Module" })), be = /* @__PURE__ */ Object.assign({}), Qt = {
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
      await Promise.all(Object.keys(be).map(async (t) => {
        const o = t.split("/").pop().split(".")[0], s = await be[t]();
        e[o] = s.default;
      })), this.icons = e;
    }
  }
}, eo = ["src"];
function to(e, t, o, s, n, l) {
  const a = d("el-icon");
  return n.icons[o.name] ? (r(), g("img", {
    key: 0,
    src: n.icons[o.name],
    alt: "icon"
  }, null, 8, eo)) : (r(), p(a, H(f({ key: 1 }, e.$attrs)), {
    default: c(() => [
      (r(), p(F(o.name)))
    ]),
    _: 1
  }, 16));
}
const oo = /* @__PURE__ */ S(Qt, [["render", to]]), no = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oo
}, Symbol.toStringTag, { value: "Module" })), { highdict: lo } = StardustJs, { storage: so } = StardustBrowser, { local: $e } = so, ae = ["index", "selection", "expand", "radio", "_index"];
function io() {
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
function ao() {
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
function ro() {
  const t = (this.$.attrs.platform || (window.isMobile ? "mobile" : "pc")) + "TableAttrs", o = { ...this.$attrs };
  return t in this && Object.assign(o, this[t]), o;
}
function co() {
  const e = {};
  return ["search", "add", "multi-edit", "multi-delete", "export", "search-export", "import"].forEach((o) => e[o] = o), { ...e, ...this.$attrs.domids };
}
function uo() {
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
function po() {
  const { table: e, loading: t } = this.$props;
  return t || (e == null ? void 0 : e.loading);
}
function mo() {
  const { table: e, data: t } = this.$props;
  return t || (e == null ? void 0 : e.list) || [];
}
function ho() {
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
function _o() {
  const { table: e, total: t } = this.$props;
  return t || (e == null ? void 0 : e.total);
}
function bo() {
  const { table: e, selection: t } = this.$props;
  return t || (e == null ? void 0 : e.selection);
}
function go() {
  return this.onSearch || this._listen.search ? (e) => {
    e ? this._emit("search") : this.$refs.searcher.open();
  } : null;
}
function yo() {
  return this.onAdd || this._listen.add ? () => this._emit("add") : null;
}
function vo() {
  return this.onExport || this._listen.export ? () => this._emit("export") : null;
}
function So() {
  return this.onSearchExport || this._listen["search-export"] ? () => this._emit("search-export") : null;
}
function $o() {
  return this.onImport || this._listen.import ? () => this._emit("import") : null;
}
function ko() {
  return this.onMultiEdit || this._listen["multi-edit"] ? () => this._emit("multi-edit") : null;
}
function wo() {
  return this.onMultiDelete || this._listen["multi-delete"] ? () => this._emit("multi-delete") : null;
}
function Co() {
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
function Oo() {
  const e = this._columns.filter((o) => o.type && ae.includes(o.type)), t = this.settings.columns.filter((o) => !o.hide).map((o) => {
    const s = this._columns.find((n) => n.prop === o.prop);
    return {
      sortable: "custom",
      ...s,
      width: o.width || s.width
    };
  });
  return e.concat(t);
}
function Vo() {
  const { table: e, uid: t } = this.$props;
  return t || (e == null ? void 0 : e.uid) || "";
}
function jo() {
  return this.table.hideOperates || this.$attrs["hide-operates"] !== void 0 && this.$attrs["hide-operates"] !== !1;
}
function xo() {
  return this._columns.filter((e) => !e.type || !ae.includes(e.type));
}
function Eo() {
  return this.table.searcherConfig ?? this.$attrs["searcher-config"] ?? {};
}
function Ao() {
  const e = this._uid && $e.getJson(`Settings[${this._uid}]`, {}) || {};
  e.columns = e.columns || this._columns.filter((t) => !t.type || !ae.includes(t.type)).map((t) => {
    const { prop: o, label: s, show: n, hide: l, width: a } = t;
    return { prop: o, label: s, show: n, hide: l, width: a };
  }), this.settings = e;
}
function To(e) {
  $e.setJson(`Settings[${this._uid}]`, e);
}
function Mo(e, t) {
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
      return typeof n == "function" ? n(l, e, t) : lo.get(e, n);
  }
  return l;
}
function zo(e) {
  if (["index", "selection", "expand"].includes(e.type))
    return !1;
  const { showOverflowTooltip: t } = e.tableAttrs || e;
  return t !== !1;
}
function Po(e) {
  this.params = e, this._emit("search", e);
}
function Io(e) {
  this.saveSettings(e), this.initSettings();
}
function Bo(e, t, o, s) {
  const n = this.settings.columns.find((l) => l.prop === o.property);
  n && (n.width = e, this.saveSettings(this.settings)), this.onHeaderDragend && this.onHeaderDragend(e, t, o, s);
}
function Ro(e) {
  this._selection && (this._selection.splice(0), this._selection.push(...e)), this.onSelectionChange && this.onSelectionChange(e);
}
function No(...e) {
  var t, o;
  this.onSortChange ? this.onSortChange(...e) : e[0].column.sortable === "custom" && ((o = (t = this.controller) == null ? void 0 : t.handleSortChange) == null || o.call(t, ...e));
}
function Do(e) {
  this.checked = e.target.value * 1;
  const t = this._data[this.checked];
  this.table && (this.table.checked = t), this.onCheckedChange && this.onCheckedChange(t);
}
function Xo() {
  this.isFullscreen = !this.isFullscreen, this.isFullscreen ? (this.zoom = document.documentElement.style.zoom, document.documentElement.style.zoom = 1) : document.documentElement.style.zoom = this.zoom;
}
function Fo(e) {
  var s;
  let t = this.$attrs["cell-class-name"] ? this.$attrs["cell-class-name"](e) : "";
  const o = this._visibleColumns[e.columnIndex];
  if ((s = o == null ? void 0 : o.tableAttrs) != null && s.class) {
    const n = o.tableAttrs.class;
    typeof n == "function" ? t += " " + n(e) : typeof n == "string" && (t += " " + n);
  }
  return t ? [...new Set(t.split(" "))].join(" ") : "";
}
function Uo(e) {
  var s;
  const t = this.$attrs["cell-style"] ? this.$attrs["cell-style"](e) : {}, o = this._visibleColumns[e.columnIndex];
  if ((s = o == null ? void 0 : o.tableAttrs) != null && s.style) {
    const n = o.tableAttrs.style;
    typeof n == "function" ? Object.assign(t, n(e)) : typeof n == "object" && Object.assign(t, n);
  }
  return Object.keys(t) ? t : null;
}
function qo(e) {
  return !!(this.onEdit || this._listen.edit) && e.editable !== !1 && !e.isEditing;
}
function Lo(e) {
  return !!(this.onRowEdit || this._listen["row-edit"]) && this.table.isRowEdit && e.isEditing;
}
function Wo(e) {
  return !!(this.onRowEdit || this._listen["row-edit"]) && this.table.isRowEdit && e.isEditing;
}
function Ho(e) {
  return !!(this.onCancelEdit || this._listen["cancel-edit"]) && this.table.isRowEdit && e.isEditing;
}
function Jo(e) {
  return !!(this.onDelete || this._listen.delete) && e.deletable !== !1;
}
function Ko(e, t) {
  const o = "on" + e.split("-").map((s) => s[0].toUpperCase() + s.slice(1)).join("");
  this[o] ? this[o](t) : this._listen[e] ? this._listen[e](t) : this.$emit(e, t);
}
function Yo() {
  this.zoom !== 1 && (document.documentElement.style.zoom = this.zoom);
}
const T = {
  props: io,
  emits: ao,
  computed: {
    _attrs: ro,
    domids: co,
    elTableAttrs: uo,
    _loading: po,
    _data: mo,
    _columns: ho,
    _query: fo,
    _total: _o,
    _selection: bo,
    _onSearch: go,
    _onAdd: yo,
    _onExport: vo,
    _onSearchExport: So,
    _onImport: $o,
    _onMultiEdit: ko,
    _onMultiDelete: wo,
    _listen: Co,
    _visibleColumns: Oo,
    _uid: Vo,
    hideOperates: jo,
    searcherColumns: xo,
    searcherConfig: Eo
  },
  watch: {
    $route: Yo
  },
  methods: {
    initSettings: Ao,
    saveSettings: To,
    calcValue: Mo,
    calcOverflowTooltip: zo,
    handleSearch: Po,
    handleResetSettings: Io,
    handleHeaderDragend: Bo,
    handleSelectionChange: Ro,
    handleSortChange: No,
    handleCheckedChange: Do,
    handleToggleFullscreen: Xo,
    cellClassName: Fo,
    cellStyle: Uo,
    canEdit: qo,
    canSave: Lo,
    canRowEdit: Wo,
    canCancelEdit: Ho,
    canDelete: Jo,
    _emit: Ko
  }
};
const Zo = {
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
}, Go = { key: 0 }, Qo = { key: 1 };
function en(e, t, o, s, n, l) {
  const a = d("el-descriptions-item"), i = d("el-descriptions"), u = d("el-collapse-item"), _ = d("el-collapse");
  return r(), p(_, {
    modelValue: n.activeNames,
    "onUpdate:modelValue": t[0] || (t[0] = (h) => n.activeNames = h),
    class: D(["x-info", { "hide-header": l.hideHeader }])
  }, {
    default: c(() => [
      (r(!0), g(x, null, E(l.blocks, (h, w) => (r(), p(u, {
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
              (r(!0), g(x, null, E(h, ($) => (r(), p(a, f({
                key: $.prop
              }, $), N({
                default: c(() => [
                  $.slot ? (r(), g("span", Go, [
                    y(e.$slots, $.slot, H(ve({ data: o.data, field: $, value: l.calcValue(o.data, $) })), void 0, !0)
                  ])) : (r(), g("span", Qo, C(l.calcValue(o.data, $)), 1))
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
const tn = /* @__PURE__ */ S(Zo, [["render", en], ["__scopeId", "data-v-0c3b67a5"]]), on = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tn
}, Symbol.toStringTag, { value: "Module" })), nn = {
  name: "XLooper",
  props: {
    compName: String,
    items: Array
  }
}, ln = { key: 1 };
function sn(e, t, o, s, n, l) {
  return r(), g("div", null, [
    (r(!0), g(x, null, E(o.items, (a, i) => (r(), p(F(o.compName), f({ key: i }, a), {
      default: c(() => [
        a.slot || e.$attrs.slot ? y(e.$slots, "default", {
          key: 0,
          item: a
        }) : (r(), g("span", ln, C(a.text), 1))
      ]),
      _: 2
    }, 1040))), 128))
  ]);
}
const an = /* @__PURE__ */ S(nn, [["render", sn]]), rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: an
}, Symbol.toStringTag, { value: "Module" })), cn = {
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
function un(e, t, o, s, n, l) {
  const a = d("van-icon"), i = d("van-pagination");
  return r(), p(i, f({ ...e.$attrs, ...e.mobilePagination || {} }, {
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
const dn = /* @__PURE__ */ S(cn, [["render", un]]), pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dn
}, Symbol.toStringTag, { value: "Module" })), mn = {
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
function hn(e, t, o, s, n, l) {
  const a = d("el-pagination");
  return r(), p(a, f({
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
const fn = /* @__PURE__ */ S(mn, [["render", hn]]), _n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fn
}, Symbol.toStringTag, { value: "Module" })), bn = {
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
function gn(e, t, o, s, n, l) {
  const a = d("van-picker"), i = d("van-popup");
  return r(), g(x, null, [
    V("span", {
      onClick: t[0] || (t[0] = (u) => e.$emit("show")),
      class: D(`x-picker__${o.modelValue ? "value" : "placeholder"}`)
    }, C(o.modelValue || o.placeholder), 3),
    m(i, f({
      class: "x-picker",
      round: "",
      position: "bottom"
    }, e.$attrs, {
      show: l.visible,
      "onUpdate:show": t[2] || (t[2] = (u) => l.visible = u)
    }), {
      default: c(() => [
        m(a, f(e.$attrs, {
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
const yn = /* @__PURE__ */ S(bn, [["render", gn]]), vn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yn
}, Symbol.toStringTag, { value: "Module" })), Sn = {
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
function $n(e, t, o, s, n, l) {
  const a = d("van-radio"), i = d("van-radio-group");
  return r(), p(i, f({ class: "mobile-x-radios" }, e.$attrs, { direction: o.direction }), {
    default: c(() => [
      (r(!0), g(x, null, E(l.formatOptions(o.options, this), (u) => (r(), p(a, f(e.$attrs, {
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
const kn = /* @__PURE__ */ S(Sn, [["render", $n]]), wn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kn
}, Symbol.toStringTag, { value: "Module" })), Cn = {
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
function On(e, t, o, s, n, l) {
  const a = d("el-radio-group");
  return r(), p(a, f({ class: "pc-x-radios" }, l.attrs, {
    modelValue: o.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (i) => e.$emit("update:modelValue", i))
  }), {
    default: c(() => [
      (r(!0), g(x, null, E(l.formatOptions(o.options, this), (i) => (r(), p(F(o.button ? "el-radio-button" : "el-radio"), f(l.attrs, {
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
const Vn = /* @__PURE__ */ S(Cn, [["render", On]]), jn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vn
}, Symbol.toStringTag, { value: "Module" })), xn = {
  name: "MobileXRow",
  props: {
    cols: {
      type: Array,
      default: []
    }
  }
}, En = { key: 1 };
function An(e, t, o, s, n, l) {
  const a = d("MobileXCol"), i = d("van-row");
  return r(), p(i, { class: "mobile-x-row" }, {
    default: c(() => [
      (r(!0), g(x, null, E(o.cols, (u, _) => (r(), p(a, f(u, { key: _ }), {
        default: c(() => [
          u.slot || e.$attrs.slot ? y(e.$slots, u.slot || e.$attrs.slot, {
            key: 0,
            col: u
          }) : (r(), g("span", En, C(u.text), 1))
        ]),
        _: 2
      }, 1040))), 128)),
      o.cols.length === 0 ? y(e.$slots, "default", { key: 0 }) : b("", !0)
    ]),
    _: 3
  });
}
const Tn = /* @__PURE__ */ S(xn, [["render", An]]), Mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tn
}, Symbol.toStringTag, { value: "Module" })), zn = {
  name: "PcXRow",
  props: {
    cols: {
      type: Array,
      default: []
    }
  }
}, Pn = { key: 1 };
function In(e, t, o, s, n, l) {
  const a = d("pc-x-col"), i = d("el-row");
  return r(), p(i, { class: "pc-x-row" }, {
    default: c(() => [
      (r(!0), g(x, null, E(o.cols, (u, _) => (r(), p(a, f(u, { key: _ }), {
        default: c(() => [
          u.slot || e.$attrs.slot ? y(e.$slots, u.slot || e.$attrs.slot, {
            key: 0,
            col: u
          }) : (r(), g("span", Pn, C(u.text), 1))
        ]),
        _: 2
      }, 1040))), 128)),
      o.cols.length === 0 ? y(e.$slots, "default", { key: 0 }) : b("", !0)
    ]),
    _: 3
  });
}
const Bn = /* @__PURE__ */ S(zn, [["render", In]]), Rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bn
}, Symbol.toStringTag, { value: "Module" })), ke = async (e, t, o) => {
  o.loading = !0;
  const s = t == null ? void 0 : t.trim(), { text: n = "text", value: l = "value", labelTexts: a, params: i = {} } = o;
  i.attributes = [...new Set(i.attributes || [...a || [], n, l])], i.limit = i.limit || 20, s && (i.where = i.where || {}, i.where[n] = i.where[n] || {}, i.where[n]["[Op.like]"] = `%${s}%`);
  const u = await e.search(o.modelName, i);
  o.options.splice(0, o.options.length, ...u.data), o.loading = !1;
}, Nn = (e, t) => !t.labelTexts || !t.labelTexts.length ? e[t.text] : t.labelTexts.map((s) => e[s])[0], Dn = (e, t) => !t.labelTexts || t.labelTexts.length < 2 ? "" : "(" + t.labelTexts.map((s) => e[s]).slice(1).join(" - ") + ")", Xn = {
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
      ke(this.$api.restful, e, this);
    },
    onClick(e) {
      e.target.classList.contains("van-overlay") || (this.visible = !0);
    }
  }
};
function Fn(e, t, o, s, n, l) {
  const a = d("XPicker");
  return r(), g("div", {
    onClick: t[5] || (t[5] = (...i) => l.onClick && l.onClick(...i)),
    class: "mobile-x-select"
  }, [
    m(a, f(e.$attrs, {
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
const Un = /* @__PURE__ */ S(Xn, [["render", Fn]]), qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Un
}, Symbol.toStringTag, { value: "Module" }));
const Ln = {
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
      ke(this.$api.restful, e, this);
    },
    calcMainLabel(e) {
      return Nn(e, this);
    },
    calcRemarkLabel(e) {
      return Dn(e, this);
    }
  }
}, Wn = { key: 1 }, Hn = { class: "main" }, Jn = { class: "remark" };
function Kn(e, t, o, s, n, l) {
  const a = d("el-option"), i = d("el-select");
  return r(), p(i, f({
    class: "pc-x-select",
    loading: n.loading
  }, e.$attrs, {
    filterable: o.filterable,
    clearable: "",
    "remote-method": e.$attrs.remoteMethod || l.remoteSearch
  }), {
    default: c(() => [
      (r(!0), g(x, null, E(n._options, (u) => (r(), p(a, f(e.$attrs, {
        key: u[o.text],
        label: u[o.text],
        value: u[o.value]
      }), {
        default: c(() => [
          e.$slots.default ? y(e.$slots, "default", { key: 0 }, void 0, !0) : (r(), g("span", Wn, [
            V("span", Hn, C(l.calcMainLabel(u)), 1),
            V("span", Jn, C(l.calcRemarkLabel(u)), 1)
          ]))
        ]),
        _: 2
      }, 1040, ["label", "value"]))), 128))
    ]),
    _: 3
  }, 16, ["loading", "filterable", "remote-method"]);
}
const Yn = /* @__PURE__ */ S(Ln, [["render", Kn], ["__scopeId", "data-v-d6803d7d"]]), Zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yn
}, Symbol.toStringTag, { value: "Module" }));
const Gn = {
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
}, Qn = { class: "mobile-x-table" }, el = {
  key: 1,
  class: "mobile-x-table card"
}, tl = ["onClick"], ol = ["value", "checked"], nl = { class: "label" }, ll = { class: "value" }, sl = { class: "operates" }, il = ["value", "checked"], al = {
  key: 2,
  class: "index"
}, rl = { class: "title" }, cl = { class: "operates" };
function ul(e, t, o, s, n, l) {
  const a = d("x-table-tools"), i = d("van-checkbox"), u = d("van-button"), _ = d("XCol"), h = d("XRow"), w = d("van-swipe-cell"), $ = d("van-cell"), P = d("van-list"), M = d("x-pagination"), U = d("XInfo"), z = d("van-popup");
  return r(), g("div", Qn, [
    e.hideTools !== "" && e.hideTools !== !0 ? (r(), p(a, f({ key: 0 }, e._attrs, {
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
    (o.mode || e._attrs.mode) === "card" ? (r(), g("div", el, [
      (r(!0), g(x, null, E(e._data, (v, j) => (r(), g("div", {
        key: j,
        class: "row",
        onClick: (O) => l.handleClickCard(j)
      }, [
        m(w, {
          onOpen: (O) => n.scope = { row: v, $index: j }
        }, {
          right: c(() => [
            V("div", sl, [
              y(e.$slots, "operates-prefix", { scope: n.scope }, void 0, !0),
              e.hideOperates ? b("", !0) : (r(), p(h, {
                key: 0,
                gutter: 10
              }, {
                default: c(() => [
                  m(_, { span: 12 }, {
                    default: c(() => [
                      e.canEdit(n.scope) ? (r(), p(u, f({ key: 0 }, { type: "warning", ...e._attrs["edit-btn"] }, { onClick: l.handleEdit }), {
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
                      e.canDelete(n.scope) ? (r(), p(u, f({ key: 0 }, { type: "danger", ...e._attrs["delete-btn"] }, { onClick: l.handleDelete }), {
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
            }, null, 40, ol)) : b("", !0),
            (r(!0), g(x, null, E(l.cols, (O, q) => (r(), g("div", {
              key: q,
              class: "field"
            }, [
              V("span", nl, C(O.label) + ":", 1),
              V("span", ll, C(e.calcValue(v, O)), 1)
            ]))), 128))
          ]),
          _: 2
        }, 1032, ["onOpen"])
      ], 8, tl))), 128))
    ])) : (o.mode || e._attrs.mode) === "list" ? (r(), p(P, f({
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
            }, null, 40, il)) : b("", !0),
            l.hasIndex ? (r(), g("span", al, C(j + 1), 1)) : b("", !0),
            V("span", rl, C(l.calcTitle(v)), 1)
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
        V("div", cl, [
          y(e.$slots, "operates-prefix", { scope: n.scope }, void 0, !0),
          e.hideOperates ? b("", !0) : (r(), p(h, {
            key: 0,
            gutter: 10
          }, {
            default: c(() => [
              m(_, { span: 12 }, {
                default: c(() => [
                  e.canEdit(n.scope) ? (r(), p(u, f({ key: 0 }, { type: "warning", ...e._attrs["edit-btn"], block: !0 }, { onClick: l.handleEdit }), {
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
                  e.canDelete(n.scope) ? (r(), p(u, f({ key: 0 }, { type: "danger", ...e._attrs["delete-btn"], block: !0 }, { onClick: l.handleDelete }), {
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
const dl = /* @__PURE__ */ S(Gn, [["render", ul], ["__scopeId", "data-v-d230adfe"]]), pl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dl
}, Symbol.toStringTag, { value: "Module" }));
class re {
  constructor(t) {
    this.storage = t;
  }
  clear() {
    this.storage.clear();
  }
  keys() {
    return Object.keys(this.storage);
  }
  values() {
    return Object.values(this.storage);
  }
  get(t, o) {
    return this.storage.getItem(t) || o;
  }
  set(t, o) {
    this.storage.setItem(t, o);
  }
  remove(t) {
    this.storage.removeItem(t);
  }
  getJson(t, o, s = !0) {
    const n = this.get(t);
    if (n && s)
      try {
        return JSON.parse(n);
      } catch {
      }
    return o;
  }
  setJson(t, o) {
    this.set(t, JSON.stringify(o));
  }
}
const ml = new re(window.localStorage), hl = new re(window.sessionStorage), Z = {
  Storage: re,
  local: ml,
  session: hl
}, {
  h: fl
} = Vue, _l = (e, t) => e.$.appContext.components[t], ge = {
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
}, B = {
  XSelect: ["eq", "ne", "in", "notIn"],
  ElDatePicker: ["eq", "gt", "gte", "lt", "lte", "between"],
  ElInputNumber: ["eq", "ne", "gt", "gte", "lt", "lte", "between"],
  ElInput: ["eq", "ne", "like", "notLike", "between"]
};
B["x-select"] = B.XSelect;
B["el-date-picker"] = B.ElDatePicker;
B["el-input-number"] = B.ElInputNumber;
B["el-input"] = B.ElInput;
function bl() {
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
  return m(d("pc-x-dialog"), f({
    "append-to-body": !0,
    drawer: !0,
    width: "700px",
    title: "自定义查询",
    class: "searcher",
    "cancel-text": "重置",
    "submit-text": "查询"
  }, {
    modelValue: t,
    "onUpdate:modelValue": (h) => this.visible = h,
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
    }, [o.map((h, w) => m("div", {
      class: "condition flex-center",
      key: h.no
    }, [m(d("el-button"), {
      type: "danger",
      size: "small",
      plain: !0,
      onClick: () => i(w)
    }, {
      default: () => [k("X")]
    }), m("span", {
      class: "title"
    }, [h.no]), m("div", {
      class: "expression"
    }, [m(d("pc-x-select"), {
      modelValue: h.prop,
      onChange: ($) => u(h, $),
      options: e,
      text: "label",
      value: "prop"
    }, null), m(d("pc-x-select"), {
      modelValue: h.op,
      onChange: ($) => _(h, $),
      options: h.ops
    }, null), gl(this, h)])]))]), m(d("el-input"), f({
      type: "textarea",
      autosize: {
        minRows: 3,
        maxRows: 10
      },
      placeholder: "分组条件表达式"
    }, {
      modelValue: s,
      "onUpdate:modelValue": (h) => this.expression = h
    }), null)]
  });
}
function gl(e, t) {
  const o = (n) => fl(_l(e, t.component), Object.assign({
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
const yl = {
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
  render: bl,
  methods: {
    open() {
      this.visible = !0;
    },
    close() {
      this.visible = !1;
    },
    saveCache() {
      Z.local.setJson(this.key, {
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
      const e = Z.local.getJson(this.key, this.config);
      (t = e.conditions) == null || t.forEach((s) => {
        const { prop: n, op: l, value: a } = s;
        s.item = this.columns.find((i) => i.prop === n), this.handleSelectField(s, n), this.handleSelectOp(s, l), s.ops = B[s.component].map((i) => ge[i]), s.value = a;
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
      Z.local.remove(this.key), Object.assign(this, {
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
      e.component = n.comp || o && "XSelect" || s === "number" && "ElInputNumber" || "ElInput", e.ops = B[e.component].map((l) => ge[l]), e.op = e.ops[0].value, n.comp === "ElDatePicker" && (e.component = "ElInput", e.item.formAttrs.type = "date");
    },
    handleSelectOp(e, t) {
      e.op = t, t === "between" ? e.value = ["", ""] : ["in", "notIn"].includes(t) && (e.value = []), !["between", "in", "notIn"].includes(t) && Array.isArray(t) && (e.value = "");
    }
  }
}, ce = /* @__PURE__ */ S(yl, [["__scopeId", "data-v-72368505"]]), vl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ce
}, Symbol.toStringTag, { value: "Module" }));
const Sl = {
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
}, $l = (e) => (ne("data-v-16737013"), e = e(), le(), e), kl = { class: "table" }, wl = ["title", "onClick"], Cl = /* @__PURE__ */ $l(() => /* @__PURE__ */ V("span", { class: "unit" }, "px", -1));
function Ol(e, t, o, s, n, l) {
  const a = d("el-button"), i = d("ElCheckbox"), u = d("el-input-number"), _ = d("el-tab-pane"), h = d("el-tabs"), w = d("el-popover");
  return o.visible ? (r(), p(w, f({
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
      m(h, {
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
              V("div", kl, [
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
                  }, C($.label), 9, wl),
                  m(u, {
                    modelValue: $.width,
                    "onUpdate:modelValue": (M) => $.width = M,
                    onChange: l.update
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"]),
                  Cl
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
const ue = /* @__PURE__ */ S(Sl, [["render", Ol], ["__scopeId", "data-v-16737013"]]), Vl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ue
}, Symbol.toStringTag, { value: "Module" }));
const jl = {
  name: "PcXTable",
  inheritAttrs: !1,
  props: {
    ...T.props()
  },
  emits: [
    ...T.emits()
  ],
  components: { Searcher: ce, Settings: ue },
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
}, xl = { key: 1 }, El = ["value", "checked"], Al = { key: 1 };
function Tl(e, t, o, s, n, l) {
  const a = d("searcher"), i = d("pc-x-icon"), u = d("settings"), _ = d("pc-x-table-tools"), h = d("el-table-column"), w = d("el-button"), $ = d("el-table"), P = d("x-pagination"), M = d("el-collapse-item"), U = d("el-collapse"), z = J("loading");
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
            e.$slots["collapse-title"] ? y(e.$slots, "collapse-title", { key: 0 }) : (r(), g("span", xl, C(e.title), 1))
          ]),
          default: c(() => [
            e.hideTools !== "" && e.hideTools !== !0 ? (r(), p(_, f({ key: 0 }, e._attrs, {
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
            A((r(), p($, f({ ref: "tableRef" }, e.elTableAttrs, {
              onHeaderDragend: e.handleHeaderDragend,
              onSelectionChange: e.handleSelectionChange,
              onSortChange: e.handleSortChange
            }), {
              default: c(() => [
                (r(!0), g(x, null, E(e._visibleColumns, (v, j) => (r(), p(h, f(v, {
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
                      }, null, 40, El)) : v.slot ? y(e.$slots, v.slot, {
                        key: 1,
                        scope: O,
                        column: v
                      }) : e.slotAll ? y(e.$slots, "all", {
                        key: 2,
                        scope: O,
                        column: v
                      }) : (r(), g(x, { key: 3 }, [
                        v.comp === "ElSwitch" || e.table.isRowEdit && O.row.isEditing && (v.visible !== !1 || v.canEdit) ? (r(), p(F(v.comp || "ElInput"), f({ key: 0 }, { ...v, ...v.formAttrs }, {
                          modelValue: O.row[v.prop],
                          "onUpdate:modelValue": (q) => O.row[v.prop] = q,
                          disabled: !O.row.editable || !O.row.isEditing
                        }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : (r(), g("span", Al, C(e.calcValue(O.row, v)), 1))
                      ], 64))
                    ]),
                    key: "0"
                  }
                ]), 1040, ["min-width", "align", "resizable", "show-overflow-tooltip"]))), 128)),
                e.hideOperates ? b("", !0) : (r(), p(h, {
                  key: 0,
                  label: "操作",
                  "min-width": e.operatesWidth,
                  align: e._attrs.operatesAlign || e._attrs.tableAlign || "center",
                  fixed: e._attrs.operatesFixed || "right"
                }, {
                  default: c((v) => [
                    y(e.$slots, "operates-prefix", { scope: v }),
                    e.canEdit(v.row) ? (r(), p(w, f({ key: 0 }, { type: "warning", ...e._attrs["edit-btn"] }, {
                      onClick: (j) => e._emit("edit", v)
                    }), {
                      default: c(() => [
                        m(i, { name: "edit" }),
                        k(" 编辑 ")
                      ]),
                      _: 2
                    }, 1040, ["onClick"])) : b("", !0),
                    e.canSave(v.row) ? A((r(), p(w, f({ key: 1 }, { type: "success", ...e._attrs["row-edit-btn"] }, {
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
                    e.canCancelEdit(v.row) ? (r(), p(w, f({ key: 2 }, { type: "warning", ...e._attrs["cancel-edit-btn"] }, {
                      onClick: (j) => e._emit("cancel-edit", v)
                    }), {
                      default: c(() => [
                        m(i, { name: "refresh-left" }),
                        k(" 取消编辑 ")
                      ]),
                      _: 2
                    }, 1040, ["onClick"])) : b("", !0),
                    e.canDelete(v.row) ? (r(), p(w, f({ key: 3 }, { type: "danger", ...e._attrs["delete-btn"] }, {
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
const Ml = /* @__PURE__ */ S(jl, [["render", Tl]]), zl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ml
}, Symbol.toStringTag, { value: "Module" }));
const Pl = {
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
}, Il = { class: "mobile-x-table-tools" }, Bl = { class: "tools" }, Rl = { class: "tools-end" };
function Nl(e, t, o, s, n, l) {
  const a = d("mobile-x-icon"), i = d("van-button"), u = J("domid");
  return r(), g("div", Il, [
    V("div", Bl, [
      y(e.$slots, "tools-prefix", {}, void 0, !0),
      e.$attrs.onSearch ? A((r(), p(i, f({ key: 0 }, { type: "success", ...o.searchBtn }, {
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
      e.$attrs.onAdd ? A((r(), p(i, f({ key: 1 }, { type: "primary", ...o.addBtn }, {
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
      e.$attrs.onMultiEdit ? A((r(), p(i, f({ key: 2 }, { type: "warning", ...o.multiEditBtn }, {
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
      e.$attrs.onMultiDelete ? A((r(), p(i, f({ key: 3 }, { type: "danger", ...o.multiDeleteBtn }, {
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
      e.$attrs.onExport ? A((r(), p(i, f({ key: 4 }, { type: "success", ...o.exportBtn }, {
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
      e.$attrs.onSearchExport ? A((r(), p(i, f({ key: 5 }, { type: "success", ...o.exportBtn }, {
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
      e.$attrs.onImport ? A((r(), p(i, f({ key: 6 }, { type: "warning", ...o.importBtn }, {
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
      V("div", Rl, [
        y(e.$slots, "tools-end", {}, void 0, !0)
      ])
    ])
  ]);
}
const Dl = /* @__PURE__ */ S(Pl, [["render", Nl], ["__scopeId", "data-v-442404e2"]]), Xl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dl
}, Symbol.toStringTag, { value: "Module" }));
const Fl = {
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
}, Ul = { class: "tools" }, ql = { class: "tools-end flex-center" };
function Ll(e, t, o, s, n, l) {
  const a = d("pc-x-icon"), i = d("el-button"), u = d("el-card"), _ = J("domid");
  return r(), p(u, {
    shadow: "hover",
    "body-style": { padding: "10px" },
    class: "pc-x-table-tools"
  }, {
    default: c(() => [
      V("div", Ul, [
        y(e.$slots, "tools-prefix", {}, void 0, !0),
        e.$attrs.onSearch ? A((r(), p(i, f({ key: 0 }, { type: "success", ...o.searchBtn }, {
          onClick: t[0] || (t[0] = (h) => e.$emit("search"))
        }), {
          default: c(() => [
            m(a, { name: "search" }),
            k(" 查询 ")
          ]),
          _: 1
        }, 16)), [
          [_, o.domids.search]
        ]) : b("", !0),
        e.$attrs.onAdd ? A((r(), p(i, f({ key: 1 }, { type: "primary", ...o.addBtn }, {
          onClick: t[1] || (t[1] = (h) => e.$emit("add"))
        }), {
          default: c(() => [
            m(a, { name: "circle-plus-filled" }),
            k(" 新增 ")
          ]),
          _: 1
        }, 16)), [
          [_, o.domids.add]
        ]) : b("", !0),
        e.$attrs.onMultiEdit ? A((r(), p(i, f({ key: 2 }, { type: "warning", ...o.multiEditBtn }, {
          onClick: t[2] || (t[2] = (h) => e.$emit("multi-edit"))
        }), {
          default: c(() => [
            m(a, { name: "edit" }),
            k(" 编辑 ")
          ]),
          _: 1
        }, 16)), [
          [_, o.domids["multi-edit"]]
        ]) : b("", !0),
        e.$attrs.onMultiDelete ? A((r(), p(i, f({ key: 3 }, { type: "danger", ...o.multiDeleteBtn }, {
          onClick: t[3] || (t[3] = (h) => e.$emit("multi-delete"))
        }), {
          default: c(() => [
            m(a, { name: "DeleteFilled" }),
            k(" 批量删除 ")
          ]),
          _: 1
        }, 16)), [
          [_, o.domids["multi-delete"]]
        ]) : b("", !0),
        e.$attrs.onExport ? A((r(), p(i, f({ key: 4 }, { type: "success", ...o.exportBtn }, {
          onClick: t[4] || (t[4] = (h) => e.$emit("export"))
        }), {
          default: c(() => [
            m(a, { name: "printer" }),
            k(" 导出 ")
          ]),
          _: 1
        }, 16)), [
          [_, o.domids.export]
        ]) : b("", !0),
        e.$attrs.onSearchExport ? A((r(), p(i, f({ key: 5 }, { type: "success", ...o.exportBtn }, {
          onClick: t[5] || (t[5] = (h) => e.$emit("search-export"))
        }), {
          default: c(() => [
            m(a, { name: "printer" }),
            k(" 查询导出 ")
          ]),
          _: 1
        }, 16)), [
          [_, o.domids["search-export"]]
        ]) : b("", !0),
        e.$attrs.onImport ? A((r(), p(i, f({ key: 6 }, { type: "warning", ...o.importBtn }, {
          onClick: t[6] || (t[6] = (h) => e.$emit("import"))
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
        V("div", ql, [
          y(e.$slots, "tools-end", {}, void 0, !0)
        ])
      ])
    ]),
    _: 3
  });
}
const Wl = /* @__PURE__ */ S(Fl, [["render", Ll], ["__scopeId", "data-v-02d70f98"]]), Hl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wl
}, Symbol.toStringTag, { value: "Module" }));
function Jl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Se(e);
}
const {
  h: Kl,
  resolveComponent: Yl
} = Vue, Zl = (e) => {
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
}, Gl = (e, t) => {
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
}, Ql = (e, t) => {
  const {
    page: o,
    limit: s
  } = t._query;
  return (o - 1) * s + e.rowIndex + 1;
}, es = (e, t) => {
  const {
    rowIndex: o
  } = e;
  return m("input", {
    type: "radio",
    value: o,
    checked: o === t.checked,
    onChange: t.handleCheckedChange
  }, null);
}, K = ([e, t, o, s, n, l]) => {
  const {
    rowIndex: a,
    rowData: i
  } = e, u = () => {
    t._emit(o, {
      $index: a,
      row: i
    });
  };
  return m(d("el-button"), f({
    type: s
  }, t._attrs[o + "-btn"], {
    onClick: u
  }), {
    default: () => [m(d("x-icon"), {
      name: n
    }, null), l]
  });
}, ts = (e, t) => {
  if (t.canEdit(e.rowData))
    return K([e, t, "edit", "warning", "edit", "编辑"]);
}, os = (e, t) => {
  if (t.canRowEdit(e.rowData))
    return K([e, t, "row-edit", "success", "collection", "保存"]);
}, ns = (e, t) => {
  if (t.canCancelEdit(e.rowData))
    return K([e, t, "cancel-edit", "warning", "refresh-left", "取消编辑"]);
}, ls = (e, t) => {
  if (t.canDelete(e.rowData))
    return K([e, t, "delete", "danger", "DeleteFilled", "删除"]);
}, ss = (e, t) => {
  const {
    _attrs: o,
    $slots: s
  } = t, {
    slotRenderers: n = {}
  } = o;
  if (e.type === "selection")
    return (l) => Gl(l, t);
  if (e.type === "index")
    return (l) => Ql(l, t);
  if (e.type === "radio")
    return (l) => es(l, t);
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
      const h = ($) => {
        a[i.prop] = $;
      }, w = i.comp || "ElInput";
      return Kl(Yl(w), {
        ...i,
        ...i.formAttrs,
        modelValue: a[i.prop],
        onInput: h,
        disabled: !a.editable || !a.isEditing
      });
    }
    const u = t.calcValue(l.rowData, e), {
      showOverflowTooltip: _
    } = i.tableAttrs || {};
    return _ ? m(d("el-tooltip"), {
      content: u
    }, Jl(u) ? u : {
      default: () => [u]
    }) : u;
  };
}, is = (e, t) => {
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
    return u.type === "selection" && (u.width = u.width || 46, u.headerCellRenderer = Zl(t)), u.cellRenderer = ss(u, t), u;
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
      }, [s["operates-prefix"] ? s["operates-prefix"]() : null, ts(l, t), os(l, t), ns(l, t), ls(l, t), s["operates-suffix"] ? s["operates-suffix"]() : null]);
    }
  }), n;
}, as = {
  convertColumnsForTableV2: is
};
const rs = {
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
  components: { Searcher: ce, Settings: ue },
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
    convertColumnsForTableV2: as.convertColumnsForTableV2
  }
}, cs = { key: 1 };
function us(e, t, o, s, n, l) {
  const a = d("Searcher"), i = d("x-icon"), u = d("Settings"), _ = d("x-table-tools"), h = d("el-table-v2"), w = d("el-auto-resizer"), $ = d("x-pagination"), P = d("el-collapse-item"), M = d("el-collapse"), U = J("loading");
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
            e.$slots["collapse-title"] ? y(e.$slots, "collapse-title", { key: 0 }) : (r(), g("span", cs, C(e.title), 1))
          ]),
          default: c(() => [
            e.hideTools !== "" && e.hideTools !== !0 ? (r(), p(_, f({ key: 0 }, e._attrs, {
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
              style: we({ height: o.height })
            }, {
              default: c(({ width: z, height: v }) => [
                A((r(), p(h, f({
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
const ds = /* @__PURE__ */ S(rs, [["render", us]]), ps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ds
}, Symbol.toStringTag, { value: "Module" }));
const G = ["selection", "radio"], ms = {
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
      G.includes(t) && (e.columns.find((o) => o.type === "_index") || e.columns.unshift({ type: "_index" }), e.columns.find((o) => o.type === t) || e.columns.unshift({
        prop: "_index",
        type: t,
        fixed: "left",
        width: 55,
        label: t === "selection" ? "" : "单选"
      })), e.columns = e.columns.filter((o) => this.selectMode === o.type || !G.includes(o.type));
    },
    handleSubmit() {
      const { table: e, selectMode: t } = this;
      if (G.includes(t)) {
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
}, hs = { class: "x-table-viewer" };
function fs(e, t, o, s, n, l) {
  const a = d("x-dialog");
  return r(), g("div", hs, [
    m(a, f(l._dialogAttrs, {
      modelValue: o.visible,
      "onUpdate:modelValue": t[1] || (t[1] = (i) => e.$emit("update:visible", i)),
      title: o.title,
      "before-close": l.handleBeforeClose,
      onSubmit: l.handleSubmit,
      onCancel: l.handleCancel
    }), {
      default: c(() => [
        (r(), p(F(o.useTableV2 ? "XTableV2" : "XTable"), f({
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
const _s = /* @__PURE__ */ S(ms, [["render", fs], ["__scopeId", "data-v-501a3f94"]]), bs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _s
}, Symbol.toStringTag, { value: "Module" })), gs = {
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
}, ys = { class: "x-tinymce" }, vs = ["id", "innerHTML"];
function Ss(e, t, o, s, n, l) {
  return r(), g("div", ys, [
    V("textarea", {
      id: n.id,
      innerHTML: o.modelValue
    }, null, 8, vs)
  ]);
}
const $s = /* @__PURE__ */ S(gs, [["render", Ss]]), ks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $s
}, Symbol.toStringTag, { value: "Module" }));
const ws = {
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
}, Cs = (e) => (ne("data-v-e756c8fc"), e = e(), le(), e), Os = { class: "mask" }, Vs = /* @__PURE__ */ Cs(() => /* @__PURE__ */ V("div", { class: "el-upload__text" }, [
  /* @__PURE__ */ k(" 将文件拖到此处，或"),
  /* @__PURE__ */ V("em", null, "点击上传")
], -1)), js = {
  key: 0,
  class: "path"
};
function xs(e, t, o, s, n, l) {
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
      V("div", Os, [
        m(a, { name: "upload-filled" }),
        Vs
      ]),
      l.filepath ? (r(), g("div", js, C(o.modelValue), 1)) : b("", !0)
    ]),
    _: 1
  }, 8, ["action", "accept", "multiple", "on-success"]);
}
const Es = /* @__PURE__ */ S(ws, [["render", xs], ["__scopeId", "data-v-e756c8fc"]]), As = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Es
}, Symbol.toStringTag, { value: "Module" }));
const Ts = {
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
}, Ms = (e) => (ne("data-v-c8f36d63"), e = e(), le(), e), zs = { class: "mask" }, Ps = /* @__PURE__ */ Ms(() => /* @__PURE__ */ V("div", { class: "el-upload__text" }, [
  /* @__PURE__ */ k(" 将图片拖到此处，或"),
  /* @__PURE__ */ V("em", null, "点击上传")
], -1));
function Is(e, t, o, s, n, l) {
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
      V("div", zs, [
        m(i, { name: "upload-filled" }),
        Ps
      ])
    ]),
    _: 1
  }, 8, ["action", "multiple", "on-success"]);
}
const Bs = /* @__PURE__ */ S(Ts, [["render", Is], ["__scopeId", "data-v-c8f36d63"]]), Rs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bs
}, Symbol.toStringTag, { value: "Module" }));
const { h: Ns } = Vue, Ds = (e, t) => e.$.appContext.components[t], oe = /* @__PURE__ */ Object.assign({ "./components/xactionsheet/xactionsheet.vue": xe, "./components/xautorows/xautorows.vue": Pe, "./components/xbutton/mobile.vue": Ne, "./components/xbutton/pc.vue": Ue, "./components/xchart/xchart.vue": Je, "./components/xcheckboxs/mobile.vue": et, "./components/xcheckboxs/pc.vue": lt, "./components/xcol/mobile.vue": rt, "./components/xcol/pc.vue": pt, "./components/xdialog/mobile.vue": _t, "./components/xdialog/pc.vue": St, "./components/xdistrictselect/xdistrictselect.vue": Ct, "./components/xform/mobile.vue": It, "./components/xform/pc.vue": Xt, "./components/xformitem/mobile.vue": Lt, "./components/xformitem/pc.vue": Ht, "./components/xicon/mobile.vue": Gt, "./components/xicon/pc.vue": no, "./components/xinfo/xinfo.vue": on, "./components/xlooper/xlooper.vue": rn, "./components/xpagination/mobile.vue": pn, "./components/xpagination/pc.vue": _n, "./components/xpicker/xpicker.vue": vn, "./components/xradios/mobile.vue": wn, "./components/xradios/pc.vue": jn, "./components/xrow/mobile.vue": Mn, "./components/xrow/pc.vue": Rn, "./components/xselect/mobile.vue": qn, "./components/xselect/pc.vue": Zn, "./components/xtable/mobile.vue": pl, "./components/xtable/pc.vue": zl, "./components/xtable/searcher.vue": vl, "./components/xtable/settings.vue": Vl, "./components/xtabletools/mobile.vue": Xl, "./components/xtabletools/pc.vue": Hl, "./components/xtablev2/xtablev2.vue": ps, "./components/xtableviewer/xtableviewer.vue": bs, "./components/xtinymce/xtinymce.vue": ks, "./components/xuploader/xfileuploader.vue": As, "./components/xuploader/ximageuploader.vue": Rs }), Xs = (e) => ({
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
    return Ns(Ds(this, this.name), {
      platform: this.platform,
      ...this.$attrs
    }, this.$slots);
  }
}), W = {};
for (let e in oe) {
  const t = oe[e].default;
  /(pc|mobile)/i.test(t.name) && (W[t.name] = t);
}
const Fs = Object.values(oe).map((e) => e.default.name), Us = [...new Set(Fs.map((e) => e.replace(/(pc|mobile)/i, "")))];
for (let e of Us)
  /X[A-Z][a-z]/.test(e) && (W[e] = Xs(e));
const qs = (e, t) => {
  for (const [o, s] of Object.entries(Ce))
    e.component(o, s);
  for (let o in W)
    e.component(o, W[o]);
}, Js = {
  ...W,
  install: qs,
  areaList: I
};
export {
  Js as default
};
