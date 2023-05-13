import { a as v } from "./.store-ec770b89.js";
import { E as Z } from "./@element-plus-5b58e898.js";
const p = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, n] of t)
    o[s] = n;
  return o;
}, G = {
  name: "XActionSheet",
  props: {
    actionSheet: Object
  }
};
function Q(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("van-action-sheet");
  return Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps(e.$attrs, {
    show: o.actionSheet.show,
    "onUpdate:show": t[0] || (t[0] = (r) => o.actionSheet.show = r),
    actions: o.actionSheet.actions
  }), null, 16, ["show", "actions"]);
}
const ee = /* @__PURE__ */ p(G, [["render", Q]]), te = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ee
}, Symbol.toStringTag, { value: "Module" })), oe = {
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
}, ne = { class: "x-auto-rows" }, le = { key: 1 };
function se(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("XCol"), r = Vue.resolveComponent("XRow");
  return Vue.openBlock(), Vue.createElementBlock("div", ne, [
    (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(l.rows, (i, c) => (Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({ key: c }, e.$attrs, {
      platform: e.$attrs.platform
    }), {
      default: Vue.withCtx(() => [
        (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(i, (u, V) => (Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps(u, {
          span: u.span || o.span,
          key: V,
          platform: e.$attrs.platform
        }), {
          default: Vue.withCtx(() => [
            u.slot || e.$attrs.slot ? Vue.renderSlot(e.$slots, u.slot || e.$attrs.slot, {
              key: 0,
              col: u
            }) : (Vue.openBlock(), Vue.createElementBlock("span", le, Vue.toDisplayString(u.text), 1))
          ]),
          _: 2
        }, 1040, ["span", "platform"]))), 128))
      ]),
      _: 2
    }, 1040, ["platform"]))), 128))
  ]);
}
const re = /* @__PURE__ */ p(oe, [["render", se]]), ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: re
}, Symbol.toStringTag, { value: "Module" })), ie = {
  name: "MobileXButton"
};
function ue(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("van-button");
  return Vue.openBlock(), Vue.createBlock(a, null, {
    default: Vue.withCtx(() => [
      Vue.renderSlot(e.$slots, "default")
    ]),
    _: 3
  });
}
const ce = /* @__PURE__ */ p(ie, [["render", ue]]), de = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ce
}, Symbol.toStringTag, { value: "Module" })), pe = {
  name: "PcXButton"
};
function me(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("el-button");
  return Vue.openBlock(), Vue.createBlock(a, null, {
    default: Vue.withCtx(() => [
      Vue.renderSlot(e.$slots, "default")
    ]),
    _: 3
  });
}
const Ve = /* @__PURE__ */ p(pe, [["render", me]]), he = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ve
}, Symbol.toStringTag, { value: "Module" }));
const { funcs: fe } = StardustBrowser, A = {
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
      return fe.calcPixel(this.height) * this.zoom + "px";
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
}, R = () => {
  Vue.useCssVars((e) => ({
    "127c024a": e.zoomedHeight,
    "137ee0b8": e.zoom
  }));
}, F = A.setup;
A.setup = F ? (e, t) => (R(), F(e, t)) : R;
const _e = {
  class: "x-chart",
  ref: "el"
};
function be(e, t, o, s, n, l) {
  return Vue.openBlock(), Vue.createElementBlock("div", _e, null, 512);
}
const ge = /* @__PURE__ */ p(A, [["render", be], ["__scopeId", "data-v-0c2da986"]]), ke = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ge
}, Symbol.toStringTag, { value: "Module" })), { toRaw: ve } = Vue, ye = (e, t) => {
  const o = e.__v_isRef ? e.value : ve(e);
  let s = o;
  if (typeof o[0] != "object" && (s = o.map((l) => ({ text: l, value: l }))), !t.sort)
    return s;
  const n = typeof t.sort == "string" ? t.sort : t.text || "text";
  return s.sort((l, a) => l[n].localeCompare(a[n]));
}, C = {
  formatOptions: ye
}, Ce = {
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
    formatOptions: C.formatOptions
  }
};
function Se(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("van-checkbox"), r = Vue.resolveComponent("van-checkbox-group");
  return Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({ class: "mobile-x-checkboxs" }, l.attrs, { direction: o.direction }), {
    default: Vue.withCtx(() => [
      (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(l.formatOptions(o.options, this), (i) => (Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps(l.attrs, {
        key: i[o.text],
        shape: o.shape,
        name: i[o.value]
      }), {
        default: Vue.withCtx(() => [
          Vue.createTextVNode(Vue.toDisplayString(i[o.text]), 1)
        ]),
        _: 2
      }, 1040, ["shape", "name"]))), 128))
    ]),
    _: 1
  }, 16, ["direction"]);
}
const we = /* @__PURE__ */ p(Ce, [["render", Se]]), Be = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: we
}, Symbol.toStringTag, { value: "Module" })), $e = {
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
    formatOptions: C.formatOptions
  }
};
function xe(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("el-checkbox"), r = Vue.resolveComponent("el-checkbox-group");
  return Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({ class: "pc-x-checkboxs" }, l.attrs, {
    modelValue: o.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (i) => e.$emit("update:modelValue", i))
  }), {
    default: Vue.withCtx(() => [
      (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(l.formatOptions(o.options, this), (i) => (Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps(l.attrs, {
        key: i[o.text],
        label: i[o.value]
      }), {
        default: Vue.withCtx(() => [
          Vue.createTextVNode(Vue.toDisplayString(i[o.text]), 1)
        ]),
        _: 2
      }, 1040, ["label"]))), 128))
    ]),
    _: 1
  }, 16, ["modelValue"]);
}
const Ne = /* @__PURE__ */ p($e, [["render", xe]]), Ee = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ne
}, Symbol.toStringTag, { value: "Module" })), Oe = {
  name: "MobileXCol",
  inheritAttrs: !1,
  computed: {
    attrs() {
      const { text: e, slot: t, ...o } = this.$attrs;
      return o;
    }
  }
};
function je(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("van-col");
  return Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps(l.attrs, { class: "mobile-x-col" }), {
    default: Vue.withCtx(() => [
      Vue.renderSlot(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const Pe = /* @__PURE__ */ p(Oe, [["render", je]]), Te = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pe
}, Symbol.toStringTag, { value: "Module" })), Ae = {
  name: "PcXCol",
  inheritAttrs: !1,
  computed: {
    attrs() {
      const { text: e, slot: t, ...o } = this.$attrs;
      return o;
    }
  }
};
function De(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("el-col");
  return Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps(l.attrs, { class: "pc-x-col" }), {
    default: Vue.withCtx(() => [
      Vue.renderSlot(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const Me = /* @__PURE__ */ p(Ae, [["render", De]]), ze = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Me
}, Symbol.toStringTag, { value: "Module" })), Ie = {
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
function Re(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("van-dialog");
  return Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ width: "92%" }, e.$attrs, {
    show: l.visible,
    "onUpdate:show": t[0] || (t[0] = (r) => l.visible = r),
    class: "mobile-x-dialog",
    "show-confirm-button": !!e.$attrs.onSubmit || !!e.$parent.$attrs.onSubmit,
    "show-cancel-button": !!e.$attrs.onCancel || !!e.$parent.$attrs.onCancel,
    onConfirm: t[1] || (t[1] = (r) => e.$emit("submit")),
    onCancel: t[2] || (t[2] = (r) => e.$emit("cancel"))
  }), Vue.createSlots({ _: 2 }, [
    e.$slots.title ? {
      name: "title",
      fn: Vue.withCtx(() => [
        Vue.renderSlot(e.$slots, "title")
      ]),
      key: "0"
    } : void 0,
    e.$slots.header ? {
      name: "header",
      fn: Vue.withCtx(() => [
        Vue.renderSlot(e.$slots, "header")
      ]),
      key: "1"
    } : void 0,
    e.$slots.default ? {
      name: "default",
      fn: Vue.withCtx(() => [
        Vue.renderSlot(e.$slots, "default")
      ]),
      key: "2"
    } : void 0
  ]), 1040, ["show", "show-confirm-button", "show-cancel-button"]);
}
const Fe = /* @__PURE__ */ p(Ie, [["render", Re]]), Xe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fe
}, Symbol.toStringTag, { value: "Module" })), Ue = {
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
}, Le = {
  key: 1,
  class: "el-dialog__title"
};
function qe(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("x-icon"), r = Vue.resolveComponent("el-button");
  return Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(o.drawer ? "ElDrawer" : "ElDialog"), Vue.mergeProps({ draggable: o.draggable }, e.$attrs, {
    modelValue: l.visible,
    "onUpdate:modelValue": t[2] || (t[2] = (i) => l.visible = i),
    fullscreen: n.fullscreen,
    size: e.$attrs.width,
    class: ["pc-x-dialog", { "pc-x-drawer": o.drawer }]
  }), {
    header: Vue.withCtx(() => [
      e.$slots.header ? Vue.renderSlot(e.$slots, "header", { key: 0 }) : (Vue.openBlock(), Vue.createElementBlock("span", Le, Vue.toDisplayString(e.$attrs.title), 1)),
      o.drawer ? Vue.createCommentVNode("", !0) : (Vue.openBlock(), Vue.createBlock(a, {
        key: 2,
        name: "FullScreen",
        class: "full el-dialog__headerbtn",
        style: { right: "50px" },
        onClick: l.handleToggleFullscreen
      }, null, 8, ["onClick"]))
    ]),
    footer: Vue.withCtx(() => [
      e.$slots.footer ? Vue.renderSlot(e.$slots, "footer", { key: 0 }) : Vue.createCommentVNode("", !0),
      e.$attrs.onSubmit || e.$parent.$attrs.onSubmit ? (Vue.openBlock(), Vue.createBlock(r, {
        key: 1,
        type: "primary",
        disabled: e.$attrs["submit-disabled"],
        onClick: t[0] || (t[0] = (i) => e.$emit("submit"))
      }, {
        default: Vue.withCtx(() => [
          Vue.createTextVNode(Vue.toDisplayString(o.submitText), 1)
        ]),
        _: 1
      }, 8, ["disabled"])) : Vue.createCommentVNode("", !0),
      e.$attrs.onCancel || e.$parent.$attrs.onCancel ? (Vue.openBlock(), Vue.createBlock(r, {
        key: 2,
        disabled: e.$attrs["cancel-disabled"],
        onClick: t[1] || (t[1] = (i) => e.$emit("cancel"))
      }, {
        default: Vue.withCtx(() => [
          Vue.createTextVNode(Vue.toDisplayString(o.cancelText), 1)
        ]),
        _: 1
      }, 8, ["disabled"])) : Vue.createCommentVNode("", !0)
    ]),
    default: Vue.withCtx(() => [
      e.$slots.default ? Vue.renderSlot(e.$slots, "default", { key: 0 }) : Vue.createCommentVNode("", !0)
    ]),
    _: 3
  }, 16, ["draggable", "modelValue", "fullscreen", "size", "class"]);
}
const We = /* @__PURE__ */ p(Ue, [["render", qe]]), He = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: We
}, Symbol.toStringTag, { value: "Module" })), x = {
  provinces: Object.entries(v.province_list).map((e) => ({ value: e[0], text: e[1] })),
  cities: Object.entries(v.city_list).map((e) => ({ value: e[0], text: e[1] })),
  counties: Object.entries(v.county_list).map((e) => ({ value: e[0], text: e[1] }))
}, Je = {
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
      provinces: Object.freeze(x.provinces),
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
      this.cities = Object.freeze(x.cities.filter((o) => o.value.slice(0, 2) === t));
    },
    city(e) {
      if (this.county || this.update(), this.county = "", !e) {
        this.counties = [];
        return;
      }
      const t = e.slice(0, 4);
      this.counties = Object.freeze(x.counties.filter((o) => o.value.slice(0, 4) === t));
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
        const s = Object.entries(v.province_list).find((n) => n[1] === e);
        this.province = s == null ? void 0 : s[0];
      } else {
        this.province = "", this.inited = !0;
        return;
      }
      if (await this.$nextTick(), t) {
        const s = Object.entries(v.city_list).find((n) => n[1] === t);
        this.city = s == null ? void 0 : s[0];
      } else {
        this.city = "", this.inited = !0;
        return;
      }
      if (await this.$nextTick(), o) {
        const s = Object.entries(v.county_list).find((n) => n[1] === o);
        this.county = s == null ? void 0 : s[0];
      } else
        this.county = "";
      this.inited = !0, this.update();
    },
    update() {
      if (!this.inited)
        return;
      let e = [
        this.province && v.province_list[this.province] || "",
        this.number > 1 && this.city && v.city_list[this.city] || "",
        this.number > 2 && this.county && v.county_list[this.county] || ""
      ].slice(0, this.number).join("/");
      this.$emit("update:modelValue", e), this.$emit("change", e);
    }
  }
};
function Ke(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("x-select"), r = Vue.resolveComponent("XCol"), i = Vue.resolveComponent("XRow");
  return Vue.openBlock(), Vue.createBlock(i, {
    class: "x-district-select",
    gutter: 10
  }, {
    default: Vue.withCtx(() => [
      Vue.createVNode(r, { span: l.span }, {
        default: Vue.withCtx(() => [
          Vue.createVNode(a, {
            modelValue: n.province,
            "onUpdate:modelValue": t[0] || (t[0] = (c) => n.province = c),
            options: n.provinces,
            placeholder: "省份"
          }, null, 8, ["modelValue", "options"])
        ]),
        _: 1
      }, 8, ["span"]),
      l.number > 1 ? (Vue.openBlock(), Vue.createBlock(r, {
        key: 0,
        span: l.span
      }, {
        default: Vue.withCtx(() => [
          Vue.createVNode(a, {
            modelValue: n.city,
            "onUpdate:modelValue": t[1] || (t[1] = (c) => n.city = c),
            options: n.cities,
            placeholder: "城市"
          }, null, 8, ["modelValue", "options"])
        ]),
        _: 1
      }, 8, ["span"])) : Vue.createCommentVNode("", !0),
      l.number > 2 ? (Vue.openBlock(), Vue.createBlock(r, {
        key: 1,
        span: l.span
      }, {
        default: Vue.withCtx(() => [
          Vue.createVNode(a, {
            modelValue: n.county,
            "onUpdate:modelValue": t[2] || (t[2] = (c) => n.county = c),
            options: n.counties,
            placeholder: "县区"
          }, null, 8, ["modelValue", "options"])
        ]),
        _: 1
      }, 8, ["span"])) : Vue.createCommentVNode("", !0)
    ]),
    _: 1
  });
}
const Ye = /* @__PURE__ */ p(Je, [["render", Ke]]), Ze = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ye
}, Symbol.toStringTag, { value: "Module" }));
function Ge() {
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
function Qe() {
  const { dialog: e, form: t, model: o } = this.$props;
  return o || (e || t).form;
}
function et() {
  const { hideLabels: e, dialog: t, form: o } = this.$props;
  return (this.items || (t || o).formItems).map((n) => (delete n.visible, e ? {
    ...n,
    label: " ",
    _label: n.label
  } : n)).filter((n) => this.dialog ? this.dialog.isEditing ? n.canEdit !== !1 : n.canAdd !== !1 : !0).map((n) => Object.assign({}, n, n.formAttrs));
}
function tt() {
  const { dialog: e, form: t, rules: o } = this.$props;
  return o || (e || t).formRules;
}
function ot(e) {
  var s;
  let { placeholder: t, comp: o } = e;
  return t || (t = "options" in e || /(date|time)/i.test(o) ? "请选择" : "请输入", t += ((s = e.label) == null ? void 0 : s.trim()) || e._label || e.text || e.model || ""), t;
}
function nt(e) {
  const t = { ...e.style };
  return "itemWidth" in this && (t.width = this.itemWidth), e.span && (t.width = e.span / 24 * 100 + "%"), e.offset && (t.marginLeft = e.offset / 24 * 100 + "%"), t;
}
function lt(e) {
  return typeof e == "boolean" ? e.toString() : e;
}
const S = {
  props: Ge,
  computed: {
    _model: Qe,
    _items: et,
    _rules: tt
  },
  methods: {
    calcPlaceholder: ot,
    calcStyle: nt,
    formatModelValue: lt
  }
}, st = {
  name: "MobileXForm",
  inheritAttrs: !1,
  props: {
    ...S.props()
  },
  emits: ["update:fref"],
  computed: {
    ...S.computed
  },
  mounted() {
    const e = this.dialog ?? this.form;
    e && (e.formRef = this.$refs.formRef), this.$emit("update:fref", this.$refs.formRef);
  },
  methods: {
    ...S.methods
  }
};
function rt(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("mobile-x-form-item"), r = Vue.resolveComponent("van-cell-group"), i = Vue.resolveComponent("van-form");
  return Vue.openBlock(), Vue.createBlock(i, {
    ref: "formRef",
    class: "mobile-x-form"
  }, {
    default: Vue.withCtx(() => [
      e.$slots.pre ? Vue.renderSlot(e.$slots, "pre", { key: 0 }) : Vue.createCommentVNode("", !0),
      Vue.createVNode(r, Vue.normalizeProps(Vue.guardReactiveProps(e.$attrs)), {
        default: Vue.withCtx(() => [
          (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(e._items, (c, u) => (Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps(c, {
            rules: e._rules[c.prop] || c.rules,
            key: u,
            modelValue: e.formatModelValue(e._model[c.prop]),
            "onUpdate:modelValue": (V) => e._model[c.prop] = V,
            placeholder: e.calcPlaceholder(c)
          }), {
            default: Vue.withCtx(() => [
              c.slot ? Vue.renderSlot(e.$slots, c.slot, Vue.normalizeProps(Vue.mergeProps({ key: 0 }, c))) : Vue.createCommentVNode("", !0)
            ]),
            _: 2
          }, 1040, ["rules", "modelValue", "onUpdate:modelValue", "placeholder"]))), 128))
        ]),
        _: 3
      }, 16),
      e.$slots.default ? Vue.renderSlot(e.$slots, "default", { key: 1 }) : Vue.createCommentVNode("", !0)
    ]),
    _: 3
  }, 512);
}
const at = /* @__PURE__ */ p(st, [["render", rt]]), it = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: at
}, Symbol.toStringTag, { value: "Module" })), ut = {
  name: "PcXForm",
  inheritAttrs: !1,
  props: {
    ...S.props(),
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
    ...S.computed
  },
  mounted() {
    const e = this.dialog ?? this.form;
    e && (e.formRef = this.$refs.formRef), this.$emit("update:fref", this.$refs.formRef);
  },
  methods: {
    ...S.methods
  }
}, ct = { key: 1 };
function dt(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("pc-x-form-item"), r = Vue.resolveComponent("el-form"), i = Vue.resolveComponent("el-collapse-item"), c = Vue.resolveComponent("el-collapse");
  return Vue.openBlock(), Vue.createBlock(c, {
    modelValue: n.activeNames,
    "onUpdate:modelValue": t[0] || (t[0] = (u) => n.activeNames = u),
    class: Vue.normalizeClass((o.useCollapse ? "use" : "no") + "-collapse")
  }, {
    default: Vue.withCtx(() => [
      Vue.createVNode(i, {
        name: n.activeNames[0]
      }, {
        title: Vue.withCtx(() => [
          e.$slots["collapse-title"] ? Vue.renderSlot(e.$slots, "collapse-title", { key: 0 }) : (Vue.openBlock(), Vue.createElementBlock("span", ct, Vue.toDisplayString(o.title), 1))
        ]),
        default: Vue.withCtx(() => [
          Vue.createVNode(r, Vue.mergeProps({ ref: "formRef" }, e.$attrs, {
            model: e._model,
            rules: e._rules,
            "label-width": o.labelWidth,
            "label-position": e.$attrs.labelPosition || "right",
            class: ["pc-x-form", { "hide-labels": o.hideLabels }]
          }), {
            default: Vue.withCtx(() => [
              e.$slots.pre ? Vue.renderSlot(e.$slots, "pre", { key: 0 }) : Vue.createCommentVNode("", !0),
              (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(e._items, (u, V) => (Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps(u, {
                key: V,
                modelValue: e._model[u.prop],
                "onUpdate:modelValue": [(m) => e._model[u.prop] = m, (m) => u.onChange || null],
                "label-width": o.labelWidth,
                prop: u.prop || u.model,
                clearable: u.clearable !== !1,
                placeholder: e.calcPlaceholder(u),
                style: e.calcStyle(u),
                "show-tooltip": e.$attrs.showTooltip || !1
              }), {
                default: Vue.withCtx(() => [
                  u.slot ? Vue.renderSlot(e.$slots, u.slot, { key: 0 }) : Vue.createCommentVNode("", !0)
                ]),
                _: 2
              }, 1040, ["modelValue", "onUpdate:modelValue", "label-width", "prop", "clearable", "placeholder", "style", "show-tooltip"]))), 128)),
              e.$slots.default ? Vue.renderSlot(e.$slots, "default", { key: 1 }) : Vue.createCommentVNode("", !0)
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
const pt = /* @__PURE__ */ p(ut, [["render", dt]]), mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pt
}, Symbol.toStringTag, { value: "Module" }));
function X(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Vue.isVNode(e);
}
const {
  h: O
} = Vue, j = (e, t) => e.$.appContext.components[t], P = (e) => {
  const {
    $props: t,
    $attrs: o,
    attrs: s,
    $emit: n
  } = e;
  let {
    comp: l,
    compType: a,
    html: r,
    text: i
  } = t;
  const c = {
    ...s,
    "onUpdate:modelValue": (V) => n("update:modelValue", V)
  }, u = [];
  return a === "html" ? c.class = "comp-html" : l = j(e, l), r && (c.innerHTML = r), i && u.push(i), O(l, c, {
    default: () => u
  });
}, Vt = (e) => {
  const {
    $props: t,
    $attrs: o,
    attrs: s,
    $emit: n,
    $slots: l
  } = e, {
    slot: a,
    showTooltip: r,
    placeholder: i
  } = t;
  if (a && !o.label)
    return l.default();
  let c = null;
  if (r) {
    let u;
    c = Vue.createVNode(Vue.resolveComponent("el-tooltip"), {
      effect: "dark",
      content: i,
      placement: "bottom"
    }, X(u = P(e)) ? u : {
      default: () => [u]
    });
  } else
    c = P(e);
  return Vue.createVNode(Vue.resolveComponent("el-form-item"), null, X(c) ? c : {
    default: () => [c]
  });
}, ht = (e) => {
  const {
    $props: t,
    $attrs: o,
    attrs: s,
    $emit: n,
    $slots: l,
    mValue: a
  } = e, {
    slot: r,
    comp: i,
    modelValue: c
  } = t;
  if (r && !o.label)
    return l.default({
      ...t,
      ...o
    });
  const u = {
    modelValue: a,
    "onUpdate:modelValue": (V) => n("update:modelValue", V)
  };
  return r && o.label || i ? O(j(e, "van-field"), u, {
    input: () => r && o.label ? l.default() : P(e)
  }) : (Object.assign(u, s), O(j(e, "van-field"), u));
}, ft = {
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
        html: r,
        ...i
      } = { ...this.$props, ...this.$attrs };
      return i;
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
    return ht(this);
  }
}, _t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ft
}, Symbol.toStringTag, { value: "Module" }));
const D = {
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
        offset: r,
        showTooltip: i,
        required: c,
        format: u,
        style: V,
        html: m,
        class: k,
        ...b
      } = { ...this.$props, ...this.$attrs };
      return b;
    },
    width() {
      return this.$attrs.label ? this.labelWidth : "0px";
    }
  },
  render() {
    return Vt(this);
  }
}, U = () => {
  Vue.useCssVars((e) => ({
    ba9709f0: e.width
  }));
}, L = D.setup;
D.setup = L ? (e, t) => (U(), L(e, t)) : U;
const bt = /* @__PURE__ */ p(D, [["__scopeId", "data-v-d2cde1e2"]]), gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bt
}, Symbol.toStringTag, { value: "Module" })), q = /* @__PURE__ */ Object.assign({}), kt = {
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
      await Promise.all(Object.keys(q).map(async (t) => {
        const o = t.split("/").pop().split(".")[0], s = await q[t]();
        e[o] = s.default;
      })), this.icons = e;
    }
  }
}, vt = ["src"];
function yt(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("van-icon");
  return n.icons[o.name] ? (Vue.openBlock(), Vue.createElementBlock("img", {
    key: 0,
    src: n.icons[o.name],
    alt: "icon"
  }, null, 8, vt)) : (Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ key: 1 }, e.$attrs, { name: o.name }), null, 16, ["name"]));
}
const Ct = /* @__PURE__ */ p(kt, [["render", yt]]), St = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ct
}, Symbol.toStringTag, { value: "Module" })), W = /* @__PURE__ */ Object.assign({}), wt = {
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
      await Promise.all(Object.keys(W).map(async (t) => {
        const o = t.split("/").pop().split(".")[0], s = await W[t]();
        e[o] = s.default;
      })), this.icons = e;
    }
  }
}, Bt = ["src"];
function $t(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("el-icon");
  return n.icons[o.name] ? (Vue.openBlock(), Vue.createElementBlock("img", {
    key: 0,
    src: n.icons[o.name],
    alt: "icon"
  }, null, 8, Bt)) : (Vue.openBlock(), Vue.createBlock(a, Vue.normalizeProps(Vue.mergeProps({ key: 1 }, e.$attrs)), {
    default: Vue.withCtx(() => [
      (Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(o.name)))
    ]),
    _: 1
  }, 16));
}
const xt = /* @__PURE__ */ p(wt, [["render", $t]]), Nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xt
}, Symbol.toStringTag, { value: "Module" })), { highdict: Et } = StardustJs, { storage: Ot } = StardustBrowser, { local: K } = Ot, M = ["index", "selection", "expand", "radio", "_index"];
function jt() {
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
function Pt() {
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
function Tt() {
  const t = (this.$.attrs.platform || (window.isMobile ? "mobile" : "pc")) + "TableAttrs", o = { ...this.$attrs };
  return t in this && Object.assign(o, this[t]), o;
}
function At() {
  const e = {};
  return ["search", "add", "multi-edit", "multi-delete", "export", "search-export", "import"].forEach((o) => e[o] = o), { ...e, ...this.$attrs.domids };
}
function Dt() {
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
function Mt() {
  const { table: e, loading: t } = this.$props;
  return t || (e == null ? void 0 : e.loading);
}
function zt() {
  const { table: e, data: t } = this.$props;
  return t || (e == null ? void 0 : e.list) || [];
}
function It() {
  const { $props: e, _query: t } = this, { table: o, columns: s } = e;
  return (s || (o == null ? void 0 : o.columns) || []).map((l) => l.type === "_index" ? Object.assign({
    width: 60,
    label: "序号",
    index(a) {
      const { page: r, limit: i } = t;
      return (r - 1) * i + a + 1;
    }
  }, l, { type: "index" }) : l.type === "radio" ? Object.assign({ width: 60, label: "单选" }, l) : Object.assign({}, l, l.tableAttrs));
}
function Rt() {
  const { table: e, query: t } = this.$props;
  return t || (e == null ? void 0 : e.query);
}
function Ft() {
  const { table: e, total: t } = this.$props;
  return t || (e == null ? void 0 : e.total);
}
function Xt() {
  const { table: e, selection: t } = this.$props;
  return t || (e == null ? void 0 : e.selection);
}
function Ut() {
  return this.onSearch || this._listen.search ? (e) => {
    e ? this._emit("search") : this.$refs.searcher.open();
  } : null;
}
function Lt() {
  return this.onAdd || this._listen.add ? () => this._emit("add") : null;
}
function qt() {
  return this.onExport || this._listen.export ? () => this._emit("export") : null;
}
function Wt() {
  return this.onSearchExport || this._listen["search-export"] ? () => this._emit("search-export") : null;
}
function Ht() {
  return this.onImport || this._listen.import ? () => this._emit("import") : null;
}
function Jt() {
  return this.onMultiEdit || this._listen["multi-edit"] ? () => this._emit("multi-edit") : null;
}
function Kt() {
  return this.onMultiDelete || this._listen["multi-delete"] ? () => this._emit("multi-delete") : null;
}
function Yt() {
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
function Zt() {
  const e = this._columns.filter((o) => o.type && M.includes(o.type)), t = this.settings.columns.filter((o) => !o.hide).map((o) => {
    const s = this._columns.find((n) => n.prop === o.prop);
    return {
      sortable: "custom",
      ...s,
      width: o.width || s.width
    };
  });
  return e.concat(t);
}
function Gt() {
  const { table: e, uid: t } = this.$props;
  return t || (e == null ? void 0 : e.uid) || "";
}
function Qt() {
  return this.table.hideOperates || this.$attrs["hide-operates"] !== void 0 && this.$attrs["hide-operates"] !== !1;
}
function eo() {
  return this._columns.filter((e) => !e.type || !M.includes(e.type));
}
function to() {
  return this.table.searcherConfig ?? this.$attrs["searcher-config"] ?? {};
}
function oo() {
  const e = this._uid && K.getJson(`Settings[${this._uid}]`, {}) || {};
  e.columns = e.columns || this._columns.filter((t) => !t.type || !M.includes(t.type)).map((t) => {
    const { prop: o, label: s, show: n, hide: l, width: a } = t;
    return { prop: o, label: s, show: n, hide: l, width: a };
  }), this.settings = e;
}
function no(e) {
  K.setJson(`Settings[${this._uid}]`, e);
}
function lo(e, t) {
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
      return typeof n == "function" ? n(l, e, t) : Et.get(e, n);
  }
  return l;
}
function so(e) {
  if (["index", "selection", "expand"].includes(e.type))
    return !1;
  const { showOverflowTooltip: t } = e.tableAttrs || e;
  return t !== !1;
}
function ro(e) {
  this.params = e, this._emit("search", e);
}
function ao(e) {
  this.saveSettings(e), this.initSettings();
}
function io(e, t, o, s) {
  const n = this.settings.columns.find((l) => l.prop === o.property);
  n && (n.width = e, this.saveSettings(this.settings)), this.onHeaderDragend && this.onHeaderDragend(e, t, o, s);
}
function uo(e) {
  this._selection && (this._selection.splice(0), this._selection.push(...e)), this.onSelectionChange && this.onSelectionChange(e);
}
function co(...e) {
  var t, o;
  this.onSortChange ? this.onSortChange(...e) : e[0].column.sortable === "custom" && ((o = (t = this.controller) == null ? void 0 : t.handleSortChange) == null || o.call(t, ...e));
}
function po(e) {
  this.checked = e.target.value * 1;
  const t = this._data[this.checked];
  this.table && (this.table.checked = t), this.onCheckedChange && this.onCheckedChange(t);
}
function mo() {
  this.isFullscreen = !this.isFullscreen, this.isFullscreen ? (this.zoom = document.documentElement.style.zoom, document.documentElement.style.zoom = 1) : document.documentElement.style.zoom = this.zoom;
}
function Vo(e) {
  var s;
  let t = this.$attrs["cell-class-name"] ? this.$attrs["cell-class-name"](e) : "";
  const o = this._visibleColumns[e.columnIndex];
  if ((s = o == null ? void 0 : o.tableAttrs) != null && s.class) {
    const n = o.tableAttrs.class;
    typeof n == "function" ? t += " " + n(e) : typeof n == "string" && (t += " " + n);
  }
  return t ? [...new Set(t.split(" "))].join(" ") : "";
}
function ho(e) {
  var s;
  const t = this.$attrs["cell-style"] ? this.$attrs["cell-style"](e) : {}, o = this._visibleColumns[e.columnIndex];
  if ((s = o == null ? void 0 : o.tableAttrs) != null && s.style) {
    const n = o.tableAttrs.style;
    typeof n == "function" ? Object.assign(t, n(e)) : typeof n == "object" && Object.assign(t, n);
  }
  return Object.keys(t) ? t : null;
}
function fo(e) {
  return !!(this.onEdit || this._listen.edit) && e.editable !== !1 && !e.isEditing;
}
function _o(e) {
  return !!(this.onRowEdit || this._listen["row-edit"]) && this.table.isRowEdit && e.isEditing;
}
function bo(e) {
  return !!(this.onRowEdit || this._listen["row-edit"]) && this.table.isRowEdit && e.isEditing;
}
function go(e) {
  return !!(this.onCancelEdit || this._listen["cancel-edit"]) && this.table.isRowEdit && e.isEditing;
}
function ko(e) {
  return !!(this.onDelete || this._listen.delete) && e.deletable !== !1;
}
function vo(e, t) {
  const o = "on" + e.split("-").map((s) => s[0].toUpperCase() + s.slice(1)).join("");
  this[o] ? this[o](t) : this._listen[e] ? this._listen[e](t) : this.$emit(e, t);
}
function yo() {
  this.zoom !== 1 && (document.documentElement.style.zoom = this.zoom);
}
const _ = {
  props: jt,
  emits: Pt,
  computed: {
    _attrs: Tt,
    domids: At,
    elTableAttrs: Dt,
    _loading: Mt,
    _data: zt,
    _columns: It,
    _query: Rt,
    _total: Ft,
    _selection: Xt,
    _onSearch: Ut,
    _onAdd: Lt,
    _onExport: qt,
    _onSearchExport: Wt,
    _onImport: Ht,
    _onMultiEdit: Jt,
    _onMultiDelete: Kt,
    _listen: Yt,
    _visibleColumns: Zt,
    _uid: Gt,
    hideOperates: Qt,
    searcherColumns: eo,
    searcherConfig: to
  },
  watch: {
    $route: yo
  },
  methods: {
    initSettings: oo,
    saveSettings: no,
    calcValue: lo,
    calcOverflowTooltip: so,
    handleSearch: ro,
    handleResetSettings: ao,
    handleHeaderDragend: io,
    handleSelectionChange: uo,
    handleSortChange: co,
    handleCheckedChange: po,
    handleToggleFullscreen: mo,
    cellClassName: Vo,
    cellStyle: ho,
    canEdit: fo,
    canSave: _o,
    canRowEdit: bo,
    canCancelEdit: go,
    canDelete: ko,
    _emit: vo
  }
};
const Co = {
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
    calcValue: _.methods.calcValue
  }
}, So = { key: 0 }, wo = { key: 1 };
function Bo(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("el-descriptions-item"), r = Vue.resolveComponent("el-descriptions"), i = Vue.resolveComponent("el-collapse-item"), c = Vue.resolveComponent("el-collapse");
  return Vue.openBlock(), Vue.createBlock(c, {
    modelValue: n.activeNames,
    "onUpdate:modelValue": t[0] || (t[0] = (u) => n.activeNames = u),
    class: Vue.normalizeClass(["x-info", { "hide-header": l.hideHeader }])
  }, {
    default: Vue.withCtx(() => [
      (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(l.blocks, (u, V) => (Vue.openBlock(), Vue.createBlock(i, {
        key: V,
        title: V,
        name: V
      }, {
        default: Vue.withCtx(() => [
          Vue.createVNode(r, {
            column: o.column,
            border: o.border
          }, {
            default: Vue.withCtx(() => [
              (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(u, (m) => (Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({
                key: m.prop
              }, m), Vue.createSlots({
                default: Vue.withCtx(() => [
                  m.slot ? (Vue.openBlock(), Vue.createElementBlock("span", So, [
                    Vue.renderSlot(e.$slots, m.slot, Vue.normalizeProps(Vue.guardReactiveProps({ data: o.data, field: m, value: l.calcValue(o.data, m) })), void 0, !0)
                  ])) : (Vue.openBlock(), Vue.createElementBlock("span", wo, Vue.toDisplayString(l.calcValue(o.data, m)), 1))
                ]),
                _: 2
              }, [
                o.labelSlot ? {
                  name: "label",
                  fn: Vue.withCtx(() => [
                    Vue.renderSlot(e.$slots, "label", {
                      label: m.label
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
const $o = /* @__PURE__ */ p(Co, [["render", Bo], ["__scopeId", "data-v-0c3b67a5"]]), xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $o
}, Symbol.toStringTag, { value: "Module" })), No = {
  name: "XLooper",
  props: {
    compName: String,
    items: Array
  }
}, Eo = { key: 1 };
function Oo(e, t, o, s, n, l) {
  return Vue.openBlock(), Vue.createElementBlock("div", null, [
    (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(o.items, (a, r) => (Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(o.compName), Vue.mergeProps({ key: r }, a), {
      default: Vue.withCtx(() => [
        a.slot || e.$attrs.slot ? Vue.renderSlot(e.$slots, "default", {
          key: 0,
          item: a
        }) : (Vue.openBlock(), Vue.createElementBlock("span", Eo, Vue.toDisplayString(a.text), 1))
      ]),
      _: 2
    }, 1040))), 128))
  ]);
}
const jo = /* @__PURE__ */ p(No, [["render", Oo]]), Po = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jo
}, Symbol.toStringTag, { value: "Module" })), To = {
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
function Ao(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("van-icon"), r = Vue.resolveComponent("van-pagination");
  return Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({ ...e.$attrs, ...e.mobilePagination || {} }, {
    modelValue: o.query.page,
    "onUpdate:modelValue": t[0] || (t[0] = (i) => o.query.page = i),
    "items-per-page": o.query.limit,
    "page-count": l.pageCount,
    "total-items": o.total
  }), {
    "prev-text": Vue.withCtx(() => [
      Vue.createVNode(a, { name: "arrow-left" })
    ]),
    "next-text": Vue.withCtx(() => [
      Vue.createVNode(a, { name: "arrow" })
    ]),
    page: Vue.withCtx(({ text: i }) => [
      Vue.createTextVNode(Vue.toDisplayString(i), 1)
    ]),
    _: 1
  }, 16, ["modelValue", "items-per-page", "page-count", "total-items"]);
}
const Do = /* @__PURE__ */ p(To, [["render", Ao]]), Mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Do
}, Symbol.toStringTag, { value: "Module" })), zo = {
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
function Io(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("el-pagination");
  return Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({
    background: "",
    layout: "total, sizes, prev, pager, next, jumper"
  }, { ...e.$attrs, ...e.pcPagination || {} }, {
    "current-page": o.query.page,
    "onUpdate:currentPage": t[0] || (t[0] = (r) => o.query.page = r),
    "page-size": o.query.limit,
    "onUpdate:pageSize": t[1] || (t[1] = (r) => o.query.limit = r),
    "page-count": l.pageCount,
    total: o.total
  }), null, 16, ["current-page", "page-size", "page-count", "total"]);
}
const Ro = /* @__PURE__ */ p(zo, [["render", Io]]), Fo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ro
}, Symbol.toStringTag, { value: "Module" })), Xo = {
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
function Uo(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("van-picker"), r = Vue.resolveComponent("van-popup");
  return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
    Vue.createElementVNode("span", {
      onClick: t[0] || (t[0] = (i) => e.$emit("show")),
      class: Vue.normalizeClass(`x-picker__${o.modelValue ? "value" : "placeholder"}`)
    }, Vue.toDisplayString(o.modelValue || o.placeholder), 3),
    Vue.createVNode(r, Vue.mergeProps({
      class: "x-picker",
      round: "",
      position: "bottom"
    }, e.$attrs, {
      show: l.visible,
      "onUpdate:show": t[2] || (t[2] = (i) => l.visible = i)
    }), {
      default: Vue.withCtx(() => [
        Vue.createVNode(a, Vue.mergeProps(e.$attrs, {
          title: e.$attrs.title,
          columns: o.columns,
          onCancel: t[1] || (t[1] = (i) => e.$emit("cancel")),
          onConfirm: l.onConfirm
        }), null, 16, ["title", "columns", "onConfirm"])
      ]),
      _: 1
    }, 16, ["show"])
  ], 64);
}
const Lo = /* @__PURE__ */ p(Xo, [["render", Uo]]), qo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lo
}, Symbol.toStringTag, { value: "Module" })), Wo = {
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
    formatOptions: C.formatOptions
  }
};
function Ho(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("van-radio"), r = Vue.resolveComponent("van-radio-group");
  return Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({ class: "mobile-x-radios" }, e.$attrs, { direction: o.direction }), {
    default: Vue.withCtx(() => [
      (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(l.formatOptions(o.options, this), (i) => (Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps(e.$attrs, {
        key: i[o.text],
        name: i[o.value]
      }), {
        default: Vue.withCtx(() => [
          Vue.createTextVNode(Vue.toDisplayString(i[o.text]), 1)
        ]),
        _: 2
      }, 1040, ["name"]))), 128))
    ]),
    _: 1
  }, 16, ["direction"]);
}
const Jo = /* @__PURE__ */ p(Wo, [["render", Ho]]), Ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jo
}, Symbol.toStringTag, { value: "Module" })), Yo = {
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
    formatOptions: C.formatOptions
  }
};
function Zo(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("el-radio-group");
  return Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ class: "pc-x-radios" }, l.attrs, {
    modelValue: o.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => e.$emit("update:modelValue", r))
  }), {
    default: Vue.withCtx(() => [
      (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(l.formatOptions(o.options, this), (r) => (Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(o.button ? "el-radio-button" : "el-radio"), Vue.mergeProps(l.attrs, {
        key: r[o.text],
        label: r[o.value]
      }), {
        default: Vue.withCtx(() => [
          Vue.createTextVNode(Vue.toDisplayString(r[o.text]), 1)
        ]),
        _: 2
      }, 1040, ["label"]))), 128))
    ]),
    _: 1
  }, 16, ["modelValue"]);
}
const Go = /* @__PURE__ */ p(Yo, [["render", Zo]]), Qo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Go
}, Symbol.toStringTag, { value: "Module" })), en = {
  name: "MobileXRow",
  props: {
    cols: {
      type: Array,
      default: []
    }
  }
}, tn = { key: 1 };
function on(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("MobileXCol"), r = Vue.resolveComponent("van-row");
  return Vue.openBlock(), Vue.createBlock(r, { class: "mobile-x-row" }, {
    default: Vue.withCtx(() => [
      (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(o.cols, (i, c) => (Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps(i, { key: c }), {
        default: Vue.withCtx(() => [
          i.slot || e.$attrs.slot ? Vue.renderSlot(e.$slots, i.slot || e.$attrs.slot, {
            key: 0,
            col: i
          }) : (Vue.openBlock(), Vue.createElementBlock("span", tn, Vue.toDisplayString(i.text), 1))
        ]),
        _: 2
      }, 1040))), 128)),
      o.cols.length === 0 ? Vue.renderSlot(e.$slots, "default", { key: 0 }) : Vue.createCommentVNode("", !0)
    ]),
    _: 3
  });
}
const nn = /* @__PURE__ */ p(en, [["render", on]]), ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nn
}, Symbol.toStringTag, { value: "Module" })), sn = {
  name: "PcXRow",
  props: {
    cols: {
      type: Array,
      default: []
    }
  }
}, rn = { key: 1 };
function an(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("pc-x-col"), r = Vue.resolveComponent("el-row");
  return Vue.openBlock(), Vue.createBlock(r, { class: "pc-x-row" }, {
    default: Vue.withCtx(() => [
      (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(o.cols, (i, c) => (Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps(i, { key: c }), {
        default: Vue.withCtx(() => [
          i.slot || e.$attrs.slot ? Vue.renderSlot(e.$slots, i.slot || e.$attrs.slot, {
            key: 0,
            col: i
          }) : (Vue.openBlock(), Vue.createElementBlock("span", rn, Vue.toDisplayString(i.text), 1))
        ]),
        _: 2
      }, 1040))), 128)),
      o.cols.length === 0 ? Vue.renderSlot(e.$slots, "default", { key: 0 }) : Vue.createCommentVNode("", !0)
    ]),
    _: 3
  });
}
const un = /* @__PURE__ */ p(sn, [["render", an]]), cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: un
}, Symbol.toStringTag, { value: "Module" })), Y = async (e, t, o) => {
  o.loading = !0;
  const s = t == null ? void 0 : t.trim(), { text: n = "text", value: l = "value", labelTexts: a, params: r = {} } = o;
  r.attributes = [...new Set(r.attributes || [...a || [], n, l])], r.limit = r.limit || 20, s && (r.where = r.where || {}, r.where[n] = r.where[n] || {}, r.where[n]["[Op.like]"] = `%${s}%`);
  const i = await e.search(o.modelName, r);
  o.options.splice(0, o.options.length, ...i.data), o.loading = !1;
}, dn = (e, t) => !t.labelTexts || !t.labelTexts.length ? e[t.text] : t.labelTexts.map((s) => e[s])[0], pn = (e, t) => !t.labelTexts || t.labelTexts.length < 2 ? "" : "(" + t.labelTexts.map((s) => e[s]).slice(1).join(" - ") + ")", mn = {
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
        this._options = C.formatOptions(this.options, this);
      }
    }
  },
  created() {
    this.modelName && this.remoteSearch();
  },
  methods: {
    formatOptions: C.formatOptions,
    remoteSearch(e) {
      if (!this.modelName)
        return this._options;
      Y(this.$api.restful, e, this);
    },
    onClick(e) {
      e.target.classList.contains("van-overlay") || (this.visible = !0);
    }
  }
};
function Vn(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("XPicker");
  return Vue.openBlock(), Vue.createElementBlock("div", {
    onClick: t[5] || (t[5] = (...r) => l.onClick && l.onClick(...r)),
    class: "mobile-x-select"
  }, [
    Vue.createVNode(a, Vue.mergeProps(e.$attrs, {
      modelValue: l.formattedModelValue,
      "onUpdate:modelValue": t[0] || (t[0] = (r) => e.$emit("update:modelValue", r.selectedValues[0])),
      show: n.visible,
      columns: n._options,
      onClick: t[1] || (t[1] = Vue.withModifiers(() => {
      }, ["stop"])),
      onShow: t[2] || (t[2] = (r) => n.visible = !0),
      onCancel: t[3] || (t[3] = (r) => n.visible = !1),
      onConfirm: t[4] || (t[4] = (r) => n.visible = !1)
    }), null, 16, ["modelValue", "show", "columns"])
  ]);
}
const hn = /* @__PURE__ */ p(mn, [["render", Vn]]), fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hn
}, Symbol.toStringTag, { value: "Module" }));
const _n = {
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
        this._options = C.formatOptions(this.options, this);
      }
    }
  },
  created() {
    this.modelName && this.remoteSearch();
  },
  methods: {
    formatOptions: C.formatOptions,
    remoteSearch(e) {
      if (!this.remote && !this.modelName)
        return this._options;
      Y(this.$api.restful, e, this);
    },
    calcMainLabel(e) {
      return dn(e, this);
    },
    calcRemarkLabel(e) {
      return pn(e, this);
    }
  }
}, bn = { key: 1 }, gn = { class: "main" }, kn = { class: "remark" };
function vn(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("el-option"), r = Vue.resolveComponent("el-select");
  return Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({
    class: "pc-x-select",
    loading: n.loading
  }, e.$attrs, {
    filterable: o.filterable,
    clearable: "",
    "remote-method": e.$attrs.remoteMethod || l.remoteSearch
  }), {
    default: Vue.withCtx(() => [
      (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(n._options, (i) => (Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps(e.$attrs, {
        key: i[o.text],
        label: i[o.text],
        value: i[o.value]
      }), {
        default: Vue.withCtx(() => [
          e.$slots.default ? Vue.renderSlot(e.$slots, "default", { key: 0 }, void 0, !0) : (Vue.openBlock(), Vue.createElementBlock("span", bn, [
            Vue.createElementVNode("span", gn, Vue.toDisplayString(l.calcMainLabel(i)), 1),
            Vue.createElementVNode("span", kn, Vue.toDisplayString(l.calcRemarkLabel(i)), 1)
          ]))
        ]),
        _: 2
      }, 1040, ["label", "value"]))), 128))
    ]),
    _: 3
  }, 16, ["loading", "filterable", "remote-method"]);
}
const yn = /* @__PURE__ */ p(_n, [["render", vn], ["__scopeId", "data-v-d6803d7d"]]), Cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yn
}, Symbol.toStringTag, { value: "Module" }));
const Sn = {
  name: "MobileXTable",
  inheritAttrs: !1,
  props: {
    ..._.props(),
    mode: String,
    platform: String,
    "max-height": String,
    height: String,
    slotRenderers: Object
  },
  emits: [
    ..._.emits()
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
    ..._.computed,
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
    ..._.methods,
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
}, wn = { class: "mobile-x-table" }, Bn = {
  key: 1,
  class: "mobile-x-table card"
}, $n = ["onClick"], xn = ["value", "checked"], Nn = { class: "label" }, En = { class: "value" }, On = { class: "operates" }, jn = ["value", "checked"], Pn = {
  key: 2,
  class: "index"
}, Tn = { class: "title" }, An = { class: "operates" };
function Dn(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("x-table-tools"), r = Vue.resolveComponent("van-checkbox"), i = Vue.resolveComponent("van-button"), c = Vue.resolveComponent("XCol"), u = Vue.resolveComponent("XRow"), V = Vue.resolveComponent("van-swipe-cell"), m = Vue.resolveComponent("van-cell"), k = Vue.resolveComponent("van-list"), b = Vue.resolveComponent("x-pagination"), w = Vue.resolveComponent("XInfo"), g = Vue.resolveComponent("van-popup");
  return Vue.openBlock(), Vue.createElementBlock("div", wn, [
    e.hideTools !== "" && e.hideTools !== !0 ? (Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ key: 0 }, e._attrs, {
      domids: e.domids,
      onAdd: e._onAdd,
      onSearch: e._onSearch,
      onExport: e._onExport,
      onSearchExport: e._onSearchExport,
      onImport: e._onImport,
      onMultiDelete: e._onMultiDelete
    }), Vue.createSlots({ _: 2 }, [
      e.$slots["tools-prefix"] ? {
        name: "tools-prefix",
        fn: Vue.withCtx(() => [
          Vue.renderSlot(e.$slots, "tools-prefix", {}, void 0, !0)
        ]),
        key: "0"
      } : void 0,
      e.$slots["tools-suffix"] ? {
        name: "tools-suffix",
        fn: Vue.withCtx(() => [
          Vue.renderSlot(e.$slots, "tools-suffix", {}, void 0, !0)
        ]),
        key: "1"
      } : void 0
    ]), 1040, ["domids", "onAdd", "onSearch", "onExport", "onSearchExport", "onImport", "onMultiDelete"])) : Vue.createCommentVNode("", !0),
    (o.mode || e._attrs.mode) === "card" ? (Vue.openBlock(), Vue.createElementBlock("div", Bn, [
      (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(e._data, (d, f) => (Vue.openBlock(), Vue.createElementBlock("div", {
        key: f,
        class: "row",
        onClick: (h) => l.handleClickCard(f)
      }, [
        Vue.createVNode(V, {
          onOpen: (h) => n.scope = { row: d, $index: f }
        }, {
          right: Vue.withCtx(() => [
            Vue.createElementVNode("div", On, [
              Vue.renderSlot(e.$slots, "operates-prefix", { scope: n.scope }, void 0, !0),
              e.hideOperates ? Vue.createCommentVNode("", !0) : (Vue.openBlock(), Vue.createBlock(u, {
                key: 0,
                gutter: 10
              }, {
                default: Vue.withCtx(() => [
                  Vue.createVNode(c, { span: 12 }, {
                    default: Vue.withCtx(() => [
                      e.canEdit(n.scope) ? (Vue.openBlock(), Vue.createBlock(i, Vue.mergeProps({ key: 0 }, { type: "warning", ...e._attrs["edit-btn"] }, { onClick: l.handleEdit }), {
                        default: Vue.withCtx(() => [
                          Vue.createTextVNode(" 编辑 ")
                        ]),
                        _: 1
                      }, 16, ["onClick"])) : Vue.createCommentVNode("", !0)
                    ]),
                    _: 1
                  }),
                  Vue.createVNode(c, { span: 12 }, {
                    default: Vue.withCtx(() => [
                      e.canDelete(n.scope) ? (Vue.openBlock(), Vue.createBlock(i, Vue.mergeProps({ key: 0 }, { type: "danger", ...e._attrs["delete-btn"] }, { onClick: l.handleDelete }), {
                        default: Vue.withCtx(() => [
                          Vue.createTextVNode(" 删除 ")
                        ]),
                        _: 1
                      }, 16, ["onClick"])) : Vue.createCommentVNode("", !0)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })),
              Vue.renderSlot(e.$slots, "operates-suffix", { scope: n.scope }, void 0, !0)
            ])
          ]),
          default: Vue.withCtx(() => [
            l.hasSelection ? (Vue.openBlock(), Vue.createBlock(r, {
              key: 0,
              modelValue: n.selected[f],
              "onUpdate:modelValue": (h) => n.selected[f] = h,
              shape: "square",
              class: "selection",
              onClick: t[0] || (t[0] = Vue.withModifiers(() => {
              }, ["stop"]))
            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : Vue.createCommentVNode("", !0),
            l.hasRadio ? (Vue.openBlock(), Vue.createElementBlock("input", {
              key: 1,
              type: "radio",
              value: f,
              checked: f === n.checked,
              class: "radio",
              onClick: t[1] || (t[1] = Vue.withModifiers(() => {
              }, ["stop"])),
              onChange: t[2] || (t[2] = (...h) => e.handleCheckedChange && e.handleCheckedChange(...h))
            }, null, 40, xn)) : Vue.createCommentVNode("", !0),
            (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(l.cols, (h, B) => (Vue.openBlock(), Vue.createElementBlock("div", {
              key: B,
              class: "field"
            }, [
              Vue.createElementVNode("span", Nn, Vue.toDisplayString(h.label) + ":", 1),
              Vue.createElementVNode("span", En, Vue.toDisplayString(e.calcValue(d, h)), 1)
            ]))), 128))
          ]),
          _: 2
        }, 1032, ["onOpen"])
      ], 8, $n))), 128))
    ])) : (o.mode || e._attrs.mode) === "list" ? (Vue.openBlock(), Vue.createBlock(k, Vue.mergeProps({
      key: 2,
      class: "mobile-x-table list"
    }, e._attrs, {
      onLoad: t[6] || (t[6] = (d) => e.$emit("search"))
    }), {
      default: Vue.withCtx(() => [
        (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(e._data, (d, f) => (Vue.openBlock(), Vue.createBlock(m, {
          key: f,
          "is-link": "",
          onClick: (h) => l.handleShowDetail(d, f)
        }, {
          default: Vue.withCtx(() => [
            l.hasSelection ? (Vue.openBlock(), Vue.createBlock(r, {
              key: 0,
              modelValue: n.selected[f],
              "onUpdate:modelValue": (h) => n.selected[f] = h,
              shape: "square",
              class: "selection",
              onClick: t[3] || (t[3] = Vue.withModifiers(() => {
              }, ["stop"]))
            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : Vue.createCommentVNode("", !0),
            l.hasRadio ? (Vue.openBlock(), Vue.createElementBlock("input", {
              key: 1,
              type: "radio",
              value: f,
              checked: f === n.checked,
              class: "radio",
              onClick: t[4] || (t[4] = Vue.withModifiers(() => {
              }, ["stop"])),
              onChange: t[5] || (t[5] = (...h) => e.handleCheckedChange && e.handleCheckedChange(...h))
            }, null, 40, jn)) : Vue.createCommentVNode("", !0),
            l.hasIndex ? (Vue.openBlock(), Vue.createElementBlock("span", Pn, Vue.toDisplayString(f + 1), 1)) : Vue.createCommentVNode("", !0),
            Vue.createElementVNode("span", Tn, Vue.toDisplayString(l.calcTitle(d)), 1)
          ]),
          _: 2
        }, 1032, ["onClick"]))), 128))
      ]),
      _: 1
    }, 16)) : Vue.createCommentVNode("", !0),
    e._query && e._total && (e.onSearch || e._listen.search) ? (Vue.openBlock(), Vue.createBlock(b, {
      key: 3,
      query: e._query,
      total: e._total,
      onSearch: t[7] || (t[7] = (d) => e._emit("search"))
    }, null, 8, ["query", "total"])) : Vue.createCommentVNode("", !0),
    Vue.createVNode(g, {
      show: n.popupVisible,
      "onUpdate:show": t[8] || (t[8] = (d) => n.popupVisible = d),
      position: "bottom",
      style: { height: "70%" }
    }, {
      default: Vue.withCtx(() => [
        Vue.createVNode(w, {
          data: n.scope.row,
          fields: l.infoFields,
          "value-align": "right"
        }, null, 8, ["data", "fields"]),
        Vue.createElementVNode("div", An, [
          Vue.renderSlot(e.$slots, "operates-prefix", { scope: n.scope }, void 0, !0),
          e.hideOperates ? Vue.createCommentVNode("", !0) : (Vue.openBlock(), Vue.createBlock(u, {
            key: 0,
            gutter: 10
          }, {
            default: Vue.withCtx(() => [
              Vue.createVNode(c, { span: 12 }, {
                default: Vue.withCtx(() => [
                  e.canEdit(n.scope) ? (Vue.openBlock(), Vue.createBlock(i, Vue.mergeProps({ key: 0 }, { type: "warning", ...e._attrs["edit-btn"], block: !0 }, { onClick: l.handleEdit }), {
                    default: Vue.withCtx(() => [
                      Vue.createTextVNode(" 编辑 ")
                    ]),
                    _: 1
                  }, 16, ["onClick"])) : Vue.createCommentVNode("", !0)
                ]),
                _: 1
              }),
              Vue.createVNode(c, { span: 12 }, {
                default: Vue.withCtx(() => [
                  e.canDelete(n.scope) ? (Vue.openBlock(), Vue.createBlock(i, Vue.mergeProps({ key: 0 }, { type: "danger", ...e._attrs["delete-btn"], block: !0 }, { onClick: l.handleDelete }), {
                    default: Vue.withCtx(() => [
                      Vue.createTextVNode(" 删除 ")
                    ]),
                    _: 1
                  }, 16, ["onClick"])) : Vue.createCommentVNode("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })),
          Vue.renderSlot(e.$slots, "operates-suffix", { scope: n.scope }, void 0, !0)
        ])
      ]),
      _: 3
    }, 8, ["show"])
  ]);
}
const Mn = /* @__PURE__ */ p(Sn, [["render", Dn], ["__scopeId", "data-v-d230adfe"]]), zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mn
}, Symbol.toStringTag, { value: "Module" })), {
  h: In
} = Vue, Rn = (e, t) => e.$.appContext.components[t], H = {
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
}, y = {
  XSelect: ["eq", "ne", "in", "notIn"],
  ElDatePicker: ["eq", "gt", "gte", "lt", "lte", "between"],
  ElInputNumber: ["eq", "ne", "gt", "gte", "lt", "lte", "between"],
  ElInput: ["eq", "ne", "like", "notLike", "between"]
};
y["x-select"] = y.XSelect;
y["el-date-picker"] = y.ElDatePicker;
y["el-input-number"] = y.ElInputNumber;
y["el-input"] = y.ElInput;
function Fn() {
  const {
    columns: e,
    visible: t,
    conditions: o,
    expression: s,
    handleSearch: n,
    handleReset: l,
    handleAdd: a,
    handleDelete: r,
    handleSelectField: i,
    handleSelectOp: c
  } = this;
  return Vue.createVNode(Vue.resolveComponent("pc-x-dialog"), Vue.mergeProps({
    "append-to-body": !0,
    drawer: !0,
    width: "700px",
    title: "自定义查询",
    class: "searcher",
    "cancel-text": "重置",
    "submit-text": "查询"
  }, {
    modelValue: t,
    "onUpdate:modelValue": (u) => this.visible = u,
    onCancel: l,
    onSubmit: n
  }), {
    default: () => [Vue.createVNode(Vue.resolveComponent("el-button"), {
      type: "primary",
      icon: "plus",
      onClick: a
    }, {
      default: () => [Vue.createTextVNode("新增条件")]
    }), Vue.createVNode("div", {
      class: "conditions"
    }, [o.map((u, V) => Vue.createVNode("div", {
      class: "condition flex-center",
      key: u.no
    }, [Vue.createVNode(Vue.resolveComponent("el-button"), {
      type: "danger",
      size: "small",
      plain: !0,
      onClick: () => r(V)
    }, {
      default: () => [Vue.createTextVNode("X")]
    }), Vue.createVNode("span", {
      class: "title"
    }, [u.no]), Vue.createVNode("div", {
      class: "expression"
    }, [Vue.createVNode(Vue.resolveComponent("pc-x-select"), {
      modelValue: u.prop,
      onChange: (m) => i(u, m),
      options: e,
      text: "label",
      value: "prop"
    }, null), Vue.createVNode(Vue.resolveComponent("pc-x-select"), {
      modelValue: u.op,
      onChange: (m) => c(u, m),
      options: u.ops
    }, null), Xn(this, u)])]))]), Vue.createVNode(Vue.resolveComponent("el-input"), Vue.mergeProps({
      type: "textarea",
      autosize: {
        minRows: 3,
        maxRows: 10
      },
      placeholder: "分组条件表达式"
    }, {
      modelValue: s,
      "onUpdate:modelValue": (u) => this.expression = u
    }), null)]
  });
}
function Xn(e, t) {
  const o = (n) => In(Rn(e, t.component), Object.assign({
    modelValue: t.value,
    "onUpdate:modelValue": (l) => t.value = l
  }, t.item, t.item.formAttrs, n)), s = {
    multiple: !1,
    "collapse-tags": !0
  };
  return t.op === "between" ? Vue.createVNode("div", {
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
const { storage: N } = StardustBrowser, Un = {
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
  render: Fn,
  methods: {
    open() {
      this.visible = !0;
    },
    close() {
      this.visible = !1;
    },
    saveCache() {
      N.local.setJson(this.key, {
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
      const e = N.local.getJson(this.key, this.config);
      (t = e.conditions) == null || t.forEach((s) => {
        const { prop: n, op: l, value: a } = s;
        s.item = this.columns.find((r) => r.prop === n), this.handleSelectField(s, n), this.handleSelectOp(s, l), s.ops = y[s.component].map((r) => H[r]), s.value = a;
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
      N.local.remove(this.key), Object.assign(this, {
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
            const r = this.conditions.find((i) => i.no === a * 1);
            if (r) {
              if (!this.checkFilled(r))
                throw "条件不完整: " + a;
            } else
              throw "条件不存在: " + a;
            l.push(this.parseCondition(r));
          } else {
            const r = {};
            l.push(r), t(a, r);
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
            const r = { type: "", items: [] };
            n.items.push(r), r._parent = n, o(r, l);
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
      e.component = n.comp || o && "XSelect" || s === "number" && "ElInputNumber" || "ElInput", e.ops = y[e.component].map((l) => H[l]), e.op = e.ops[0].value, n.comp === "ElDatePicker" && (e.component = "ElInput", e.item.formAttrs.type = "date");
    },
    handleSelectOp(e, t) {
      e.op = t, t === "between" ? e.value = ["", ""] : ["in", "notIn"].includes(t) && (e.value = []), !["between", "in", "notIn"].includes(t) && Array.isArray(t) && (e.value = "");
    }
  }
}, z = /* @__PURE__ */ p(Un, [["__scopeId", "data-v-e9987bfb"]]), Ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: z
}, Symbol.toStringTag, { value: "Module" }));
const qn = {
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
}, Wn = (e) => (Vue.pushScopeId("data-v-16737013"), e = e(), Vue.popScopeId(), e), Hn = { class: "table" }, Jn = ["title", "onClick"], Kn = /* @__PURE__ */ Wn(() => /* @__PURE__ */ Vue.createElementVNode("span", { class: "unit" }, "px", -1));
function Yn(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("el-button"), r = Vue.resolveComponent("ElCheckbox"), i = Vue.resolveComponent("el-input-number"), c = Vue.resolveComponent("el-tab-pane"), u = Vue.resolveComponent("el-tabs"), V = Vue.resolveComponent("el-popover");
  return o.visible ? (Vue.openBlock(), Vue.createBlock(V, Vue.mergeProps({
    key: 0,
    placement: "bottom",
    trigger: "hover",
    "popper-class": "table-settings"
  }, e.$attrs), {
    reference: Vue.withCtx(() => [
      Vue.createVNode(a, {
        class: "settings-reference",
        icon: "Setting"
      })
    ]),
    default: Vue.withCtx(() => [
      Vue.createVNode(u, {
        modelValue: n.activeName,
        "onUpdate:modelValue": t[0] || (t[0] = (m) => n.activeName = m)
      }, {
        default: Vue.withCtx(() => [
          Vue.createVNode(c, {
            name: "columns",
            label: "展示列"
          }, {
            default: Vue.withCtx(() => [
              Vue.createVNode(a, {
                type: "warning",
                icon: "Close",
                onClick: l.handleResetColumns
              }, {
                default: Vue.withCtx(() => [
                  Vue.createTextVNode("重置")
                ]),
                _: 1
              }, 8, ["onClick"]),
              Vue.createElementVNode("div", Hn, [
                (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(n.columns, (m, k) => (Vue.openBlock(), Vue.createElementBlock("div", {
                  key: k,
                  class: "row flex-center"
                }, [
                  Vue.createVNode(a, {
                    disabled: k === 0,
                    circle: "",
                    icon: "arrow-up",
                    type: "primary",
                    class: "move",
                    onClick: (b) => l.handleMove(m, k, -1)
                  }, null, 8, ["disabled", "onClick"]),
                  Vue.createVNode(a, {
                    disabled: k === n.columns.length - 1,
                    circle: "",
                    icon: "arrow-down",
                    type: "success",
                    class: "move",
                    onClick: (b) => l.handleMove(m, k, 1)
                  }, null, 8, ["disabled", "onClick"]),
                  Vue.createVNode(r, {
                    modelValue: m.show,
                    "onUpdate:modelValue": (b) => m.show = b,
                    onChange: l.update
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"]),
                  Vue.createElementVNode("span", {
                    class: "label overflow-text",
                    title: m.label,
                    onClick: (b) => l.handleToggle(m)
                  }, Vue.toDisplayString(m.label), 9, Jn),
                  Vue.createVNode(i, {
                    modelValue: m.width,
                    "onUpdate:modelValue": (b) => m.width = b,
                    onChange: l.update
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"]),
                  Kn
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
  }, 16)) : Vue.createCommentVNode("", !0);
}
const I = /* @__PURE__ */ p(qn, [["render", Yn], ["__scopeId", "data-v-16737013"]]), Zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: I
}, Symbol.toStringTag, { value: "Module" }));
const Gn = {
  name: "PcXTable",
  inheritAttrs: !1,
  props: {
    ..._.props()
  },
  emits: [
    ..._.emits()
  ],
  components: { Searcher: z, Settings: I },
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
    ..._.computed
  },
  watch: {
    ..._.watch,
    settings: "saveSettings"
  },
  created() {
    this.initSettings();
  },
  mounted() {
    this.table && (this.table.tableRef = this.$refs.tableRef), this.$emit("update:tref", this.$refs.tableRef);
  },
  methods: {
    ..._.methods
  }
}, Qn = { key: 1 }, el = ["value", "checked"], tl = { key: 1 };
function ol(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("searcher"), r = Vue.resolveComponent("pc-x-icon"), i = Vue.resolveComponent("settings"), c = Vue.resolveComponent("pc-x-table-tools"), u = Vue.resolveComponent("el-table-column"), V = Vue.resolveComponent("el-button"), m = Vue.resolveComponent("el-table"), k = Vue.resolveComponent("x-pagination"), b = Vue.resolveComponent("el-collapse-item"), w = Vue.resolveComponent("el-collapse"), g = Vue.resolveDirective("loading");
  return Vue.openBlock(), Vue.createElementBlock("div", {
    class: Vue.normalizeClass(["pc-x-table", { fullscreen: n.isFullscreen, "hide-header": e.hideHeader }])
  }, [
    Vue.createVNode(a, {
      ref: "searcher",
      uid: e._uid,
      columns: e.searcherColumns,
      config: e.searcherConfig,
      onSearch: e.handleSearch
    }, null, 8, ["uid", "columns", "config", "onSearch"]),
    Vue.createVNode(w, {
      modelValue: n.activeNames,
      "onUpdate:modelValue": t[3] || (t[3] = (d) => n.activeNames = d),
      class: Vue.normalizeClass((e.useCollapse ? "use" : "no") + "-collapse")
    }, {
      default: Vue.withCtx(() => [
        Vue.createVNode(b, {
          name: n.activeNames[0]
        }, {
          title: Vue.withCtx(() => [
            e.$slots["collapse-title"] ? Vue.renderSlot(e.$slots, "collapse-title", { key: 0 }) : (Vue.openBlock(), Vue.createElementBlock("span", Qn, Vue.toDisplayString(e.title), 1))
          ]),
          default: Vue.withCtx(() => [
            e.hideTools !== "" && e.hideTools !== !0 ? (Vue.openBlock(), Vue.createBlock(c, Vue.mergeProps({ key: 0 }, e._attrs, {
              domids: e.domids,
              onAdd: e._onAdd,
              onSearch: e._onSearch,
              onExport: e._onExport,
              onSearchExport: e._onSearchExport,
              onImport: e._onImport,
              onMultiEdit: e._onMultiEdit,
              onMultiDelete: e._onMultiDelete
            }), Vue.createSlots({
              "tools-end": Vue.withCtx(() => [
                Vue.createVNode(r, {
                  name: "FullScreen",
                  class: "full",
                  onClick: e.handleToggleFullscreen
                }, null, 8, ["onClick"]),
                Vue.createVNode(i, {
                  modelValue: n.settings,
                  "onUpdate:modelValue": t[0] || (t[0] = (d) => n.settings = d),
                  visible: !e.hideSettings,
                  width: e._attrs["cols-popover-width"] || 500,
                  onReset: e.handleResetSettings
                }, null, 8, ["modelValue", "visible", "width", "onReset"])
              ]),
              _: 2
            }, [
              e.$slots["tools-prefix"] ? {
                name: "tools-prefix",
                fn: Vue.withCtx(() => [
                  Vue.renderSlot(e.$slots, "tools-prefix")
                ]),
                key: "0"
              } : void 0,
              e.$slots["tools-suffix"] ? {
                name: "tools-suffix",
                fn: Vue.withCtx(() => [
                  Vue.renderSlot(e.$slots, "tools-suffix")
                ]),
                key: "1"
              } : void 0
            ]), 1040, ["domids", "onAdd", "onSearch", "onExport", "onSearchExport", "onImport", "onMultiEdit", "onMultiDelete"])) : Vue.createCommentVNode("", !0),
            Vue.withDirectives((Vue.openBlock(), Vue.createBlock(m, Vue.mergeProps({ ref: "tableRef" }, e.elTableAttrs, {
              onHeaderDragend: e.handleHeaderDragend,
              onSelectionChange: e.handleSelectionChange,
              onSortChange: e.handleSortChange
            }), {
              default: Vue.withCtx(() => [
                (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(e._visibleColumns, (d, f) => (Vue.openBlock(), Vue.createBlock(u, Vue.mergeProps(d, {
                  key: f,
                  "min-width": d.minWidth,
                  align: d.align || e._attrs.tableAlign || "center",
                  resizable: d.resizable || !0,
                  "show-overflow-tooltip": e.calcOverflowTooltip(d)
                }), Vue.createSlots({ _: 2 }, [
                  ["selection", "index"].includes(d.type) ? void 0 : {
                    name: "default",
                    fn: Vue.withCtx((h) => [
                      d.type === "radio" ? (Vue.openBlock(), Vue.createElementBlock("input", {
                        key: 0,
                        type: "radio",
                        value: h.$index,
                        checked: h.$index === n.checked,
                        onChange: t[1] || (t[1] = (...B) => e.handleCheckedChange && e.handleCheckedChange(...B))
                      }, null, 40, el)) : d.slot ? Vue.renderSlot(e.$slots, d.slot, {
                        key: 1,
                        scope: h,
                        column: d
                      }) : e.slotAll ? Vue.renderSlot(e.$slots, "all", {
                        key: 2,
                        scope: h,
                        column: d
                      }) : (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 3 }, [
                        d.comp === "ElSwitch" || e.table.isRowEdit && h.row.isEditing && (d.visible !== !1 || d.canEdit) ? (Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(d.comp || "ElInput"), Vue.mergeProps({ key: 0 }, { ...d, ...d.formAttrs }, {
                          modelValue: h.row[d.prop],
                          "onUpdate:modelValue": (B) => h.row[d.prop] = B,
                          disabled: !h.row.editable || !h.row.isEditing
                        }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : (Vue.openBlock(), Vue.createElementBlock("span", tl, Vue.toDisplayString(e.calcValue(h.row, d)), 1))
                      ], 64))
                    ]),
                    key: "0"
                  }
                ]), 1040, ["min-width", "align", "resizable", "show-overflow-tooltip"]))), 128)),
                e.hideOperates ? Vue.createCommentVNode("", !0) : (Vue.openBlock(), Vue.createBlock(u, {
                  key: 0,
                  label: "操作",
                  "min-width": e.operatesWidth,
                  align: e._attrs.operatesAlign || e._attrs.tableAlign || "center",
                  fixed: e._attrs.operatesFixed || "right"
                }, {
                  default: Vue.withCtx((d) => [
                    Vue.renderSlot(e.$slots, "operates-prefix", { scope: d }),
                    e.canEdit(d.row) ? (Vue.openBlock(), Vue.createBlock(V, Vue.mergeProps({ key: 0 }, { type: "warning", ...e._attrs["edit-btn"] }, {
                      onClick: (f) => e._emit("edit", d)
                    }), {
                      default: Vue.withCtx(() => [
                        Vue.createVNode(r, { name: "edit" }),
                        Vue.createTextVNode(" 编辑 ")
                      ]),
                      _: 2
                    }, 1040, ["onClick"])) : Vue.createCommentVNode("", !0),
                    e.canSave(d.row) ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(V, Vue.mergeProps({ key: 1 }, { type: "success", ...e._attrs["row-edit-btn"] }, {
                      disabled: d.row._loading,
                      onClick: (f) => e._emit("row-edit", d)
                    }), {
                      default: Vue.withCtx(() => [
                        Vue.createVNode(r, { name: "collection" }),
                        Vue.createTextVNode(" 保存 ")
                      ]),
                      _: 2
                    }, 1040, ["disabled", "onClick"])), [
                      [g, d.row._loading]
                    ]) : Vue.createCommentVNode("", !0),
                    e.canCancelEdit(d.row) ? (Vue.openBlock(), Vue.createBlock(V, Vue.mergeProps({ key: 2 }, { type: "warning", ...e._attrs["cancel-edit-btn"] }, {
                      onClick: (f) => e._emit("cancel-edit", d)
                    }), {
                      default: Vue.withCtx(() => [
                        Vue.createVNode(r, { name: "refresh-left" }),
                        Vue.createTextVNode(" 取消编辑 ")
                      ]),
                      _: 2
                    }, 1040, ["onClick"])) : Vue.createCommentVNode("", !0),
                    e.canDelete(d.row) ? (Vue.openBlock(), Vue.createBlock(V, Vue.mergeProps({ key: 3 }, { type: "danger", ...e._attrs["delete-btn"] }, {
                      onClick: (f) => e._emit("delete", d)
                    }), {
                      default: Vue.withCtx(() => [
                        Vue.createVNode(r, { name: "DeleteFilled" }),
                        Vue.createTextVNode(" 删除 ")
                      ]),
                      _: 2
                    }, 1040, ["onClick"])) : Vue.createCommentVNode("", !0),
                    Vue.renderSlot(e.$slots, "operates-suffix", { scope: d })
                  ]),
                  _: 3
                }, 8, ["min-width", "align", "fixed"]))
              ]),
              _: 3
            }, 16, ["onHeaderDragend", "onSelectionChange", "onSortChange"])), [
              [g, e._loading]
            ]),
            e._query && e._total && (e.onSearch || e._listen.search) ? (Vue.openBlock(), Vue.createBlock(k, {
              key: 1,
              query: e._query,
              total: e._total,
              onSearch: t[2] || (t[2] = (d) => e._emit("search", n.params))
            }, null, 8, ["query", "total"])) : Vue.createCommentVNode("", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["modelValue", "class"])
  ], 2);
}
const nl = /* @__PURE__ */ p(Gn, [["render", ol]]), ll = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nl
}, Symbol.toStringTag, { value: "Module" }));
const sl = {
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
}, rl = { class: "mobile-x-table-tools" }, al = { class: "tools" }, il = { class: "tools-end" };
function ul(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("mobile-x-icon"), r = Vue.resolveComponent("van-button"), i = Vue.resolveDirective("domid");
  return Vue.openBlock(), Vue.createElementBlock("div", rl, [
    Vue.createElementVNode("div", al, [
      Vue.renderSlot(e.$slots, "tools-prefix", {}, void 0, !0),
      e.$attrs.onSearch ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({ key: 0 }, { type: "success", ...o.searchBtn }, {
        onClick: t[0] || (t[0] = (c) => e.$emit("search"))
      }), {
        default: Vue.withCtx(() => [
          Vue.createVNode(a, { name: "search" }),
          Vue.createTextVNode(" 查询 ")
        ]),
        _: 1
      }, 16)), [
        [i, o.domids.search]
      ]) : Vue.createCommentVNode("", !0),
      e.$attrs.onAdd ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({ key: 1 }, { type: "primary", ...o.addBtn }, {
        onClick: t[1] || (t[1] = (c) => e.$emit("add"))
      }), {
        default: Vue.withCtx(() => [
          Vue.createVNode(a, { name: "circle-plus-filled" }),
          Vue.createTextVNode(" 新增 ")
        ]),
        _: 1
      }, 16)), [
        [i, o.domids.add]
      ]) : Vue.createCommentVNode("", !0),
      e.$attrs.onMultiEdit ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({ key: 2 }, { type: "warning", ...o.multiEditBtn }, {
        onClick: t[2] || (t[2] = (c) => e.$emit("multi-edit"))
      }), {
        default: Vue.withCtx(() => [
          Vue.createVNode(a, { name: "edit" }),
          Vue.createTextVNode(" 编辑 ")
        ]),
        _: 1
      }, 16)), [
        [i, o.domids["multi-edit"]]
      ]) : Vue.createCommentVNode("", !0),
      e.$attrs.onMultiDelete ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({ key: 3 }, { type: "danger", ...o.multiDeleteBtn }, {
        onClick: t[3] || (t[3] = (c) => e.$emit("multi-delete"))
      }), {
        default: Vue.withCtx(() => [
          Vue.createVNode(a, { name: "DeleteFilled" }),
          Vue.createTextVNode(" 批量删除 ")
        ]),
        _: 1
      }, 16)), [
        [i, o.domids["multi-delete"]]
      ]) : Vue.createCommentVNode("", !0),
      e.$attrs.onExport ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({ key: 4 }, { type: "success", ...o.exportBtn }, {
        onClick: t[4] || (t[4] = (c) => e.$emit("export"))
      }), {
        default: Vue.withCtx(() => [
          Vue.createVNode(a, { name: "printer" }),
          Vue.createTextVNode(" 导出 ")
        ]),
        _: 1
      }, 16)), [
        [i, o.domids.export]
      ]) : Vue.createCommentVNode("", !0),
      e.$attrs.onSearchExport ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({ key: 5 }, { type: "success", ...o.exportBtn }, {
        onClick: t[5] || (t[5] = (c) => e.$emit("search-export"))
      }), {
        default: Vue.withCtx(() => [
          Vue.createVNode(a, { name: "printer" }),
          Vue.createTextVNode(" 查询导出 ")
        ]),
        _: 1
      }, 16)), [
        [i, o.domids["search-export"]]
      ]) : Vue.createCommentVNode("", !0),
      e.$attrs.onImport ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({ key: 6 }, { type: "warning", ...o.importBtn }, {
        onClick: t[6] || (t[6] = (c) => e.$emit("import"))
      }), {
        default: Vue.withCtx(() => [
          Vue.createVNode(a, { name: "UploadFilled" }),
          Vue.createTextVNode(" 导入 ")
        ]),
        _: 1
      }, 16)), [
        [i, o.domids.import]
      ]) : Vue.createCommentVNode("", !0),
      Vue.renderSlot(e.$slots, "tools-suffix", {}, void 0, !0),
      Vue.createElementVNode("div", il, [
        Vue.renderSlot(e.$slots, "tools-end", {}, void 0, !0)
      ])
    ])
  ]);
}
const cl = /* @__PURE__ */ p(sl, [["render", ul], ["__scopeId", "data-v-442404e2"]]), dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cl
}, Symbol.toStringTag, { value: "Module" }));
const pl = {
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
}, ml = { class: "tools" }, Vl = { class: "tools-end flex-center" };
function hl(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("pc-x-icon"), r = Vue.resolveComponent("el-button"), i = Vue.resolveComponent("el-card"), c = Vue.resolveDirective("domid");
  return Vue.openBlock(), Vue.createBlock(i, {
    shadow: "hover",
    "body-style": { padding: "10px" },
    class: "pc-x-table-tools"
  }, {
    default: Vue.withCtx(() => [
      Vue.createElementVNode("div", ml, [
        Vue.renderSlot(e.$slots, "tools-prefix", {}, void 0, !0),
        e.$attrs.onSearch ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({ key: 0 }, { type: "success", ...o.searchBtn }, {
          onClick: t[0] || (t[0] = (u) => e.$emit("search"))
        }), {
          default: Vue.withCtx(() => [
            Vue.createVNode(a, { name: "search" }),
            Vue.createTextVNode(" 查询 ")
          ]),
          _: 1
        }, 16)), [
          [c, o.domids.search]
        ]) : Vue.createCommentVNode("", !0),
        e.$attrs.onAdd ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({ key: 1 }, { type: "primary", ...o.addBtn }, {
          onClick: t[1] || (t[1] = (u) => e.$emit("add"))
        }), {
          default: Vue.withCtx(() => [
            Vue.createVNode(a, { name: "circle-plus-filled" }),
            Vue.createTextVNode(" 新增 ")
          ]),
          _: 1
        }, 16)), [
          [c, o.domids.add]
        ]) : Vue.createCommentVNode("", !0),
        e.$attrs.onMultiEdit ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({ key: 2 }, { type: "warning", ...o.multiEditBtn }, {
          onClick: t[2] || (t[2] = (u) => e.$emit("multi-edit"))
        }), {
          default: Vue.withCtx(() => [
            Vue.createVNode(a, { name: "edit" }),
            Vue.createTextVNode(" 编辑 ")
          ]),
          _: 1
        }, 16)), [
          [c, o.domids["multi-edit"]]
        ]) : Vue.createCommentVNode("", !0),
        e.$attrs.onMultiDelete ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({ key: 3 }, { type: "danger", ...o.multiDeleteBtn }, {
          onClick: t[3] || (t[3] = (u) => e.$emit("multi-delete"))
        }), {
          default: Vue.withCtx(() => [
            Vue.createVNode(a, { name: "DeleteFilled" }),
            Vue.createTextVNode(" 批量删除 ")
          ]),
          _: 1
        }, 16)), [
          [c, o.domids["multi-delete"]]
        ]) : Vue.createCommentVNode("", !0),
        e.$attrs.onExport ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({ key: 4 }, { type: "success", ...o.exportBtn }, {
          onClick: t[4] || (t[4] = (u) => e.$emit("export"))
        }), {
          default: Vue.withCtx(() => [
            Vue.createVNode(a, { name: "printer" }),
            Vue.createTextVNode(" 导出 ")
          ]),
          _: 1
        }, 16)), [
          [c, o.domids.export]
        ]) : Vue.createCommentVNode("", !0),
        e.$attrs.onSearchExport ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({ key: 5 }, { type: "success", ...o.exportBtn }, {
          onClick: t[5] || (t[5] = (u) => e.$emit("search-export"))
        }), {
          default: Vue.withCtx(() => [
            Vue.createVNode(a, { name: "printer" }),
            Vue.createTextVNode(" 查询导出 ")
          ]),
          _: 1
        }, 16)), [
          [c, o.domids["search-export"]]
        ]) : Vue.createCommentVNode("", !0),
        e.$attrs.onImport ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({ key: 6 }, { type: "warning", ...o.importBtn }, {
          onClick: t[6] || (t[6] = (u) => e.$emit("import"))
        }), {
          default: Vue.withCtx(() => [
            Vue.createVNode(a, { name: "UploadFilled" }),
            Vue.createTextVNode(" 导入 ")
          ]),
          _: 1
        }, 16)), [
          [c, o.domids.import]
        ]) : Vue.createCommentVNode("", !0),
        Vue.renderSlot(e.$slots, "tools-suffix", {}, void 0, !0),
        Vue.createElementVNode("div", Vl, [
          Vue.renderSlot(e.$slots, "tools-end", {}, void 0, !0)
        ])
      ])
    ]),
    _: 3
  });
}
const fl = /* @__PURE__ */ p(pl, [["render", hl], ["__scopeId", "data-v-02d70f98"]]), _l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fl
}, Symbol.toStringTag, { value: "Module" }));
function bl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Vue.isVNode(e);
}
const {
  h: gl,
  resolveComponent: kl
} = Vue, vl = (e) => {
  const t = e._data.length > 0 && e.selected.size === e._data.length, o = !t && e.selected.size > 0, s = (n) => {
    n ? e._data.forEach((a, r) => e.selected.add(r)) : e.selected.clear();
    const l = n ? e._data.slice() : [];
    e.handleSelectionChange(l);
  };
  return Vue.createVNode(Vue.resolveComponent("el-checkbox"), {
    modelValue: t,
    indeterminate: o,
    onChange: s
  }, null);
}, yl = (e, t) => {
  const {
    rowIndex: o,
    rowData: s
  } = e, n = () => {
    t.selected.has(o) ? t.selected.delete(o) : t.selected.add(o);
    const l = [...t.selected].map((a) => t._data[a]);
    t.handleSelectionChange(l);
  };
  return Vue.createVNode(Vue.resolveComponent("el-checkbox"), {
    modelValue: t.selected.has(o),
    onChange: n
  }, null);
}, Cl = (e, t) => {
  const {
    page: o,
    limit: s
  } = t._query;
  return (o - 1) * s + e.rowIndex + 1;
}, Sl = (e, t) => {
  const {
    rowIndex: o
  } = e;
  return Vue.createVNode("input", {
    type: "radio",
    value: o,
    checked: o === t.checked,
    onChange: t.handleCheckedChange
  }, null);
}, $ = ([e, t, o, s, n, l]) => {
  const {
    rowIndex: a,
    rowData: r
  } = e, i = () => {
    t._emit(o, {
      $index: a,
      row: r
    });
  };
  return Vue.createVNode(Vue.resolveComponent("el-button"), Vue.mergeProps({
    type: s
  }, t._attrs[o + "-btn"], {
    onClick: i
  }), {
    default: () => [Vue.createVNode(Vue.resolveComponent("x-icon"), {
      name: n
    }, null), l]
  });
}, wl = (e, t) => {
  if (t.canEdit(e.rowData))
    return $([e, t, "edit", "warning", "edit", "编辑"]);
}, Bl = (e, t) => {
  if (t.canRowEdit(e.rowData))
    return $([e, t, "row-edit", "success", "collection", "保存"]);
}, $l = (e, t) => {
  if (t.canCancelEdit(e.rowData))
    return $([e, t, "cancel-edit", "warning", "refresh-left", "取消编辑"]);
}, xl = (e, t) => {
  if (t.canDelete(e.rowData))
    return $([e, t, "delete", "danger", "DeleteFilled", "删除"]);
}, Nl = (e, t) => {
  const {
    _attrs: o,
    $slots: s
  } = t, {
    slotRenderers: n = {}
  } = o;
  if (e.type === "selection")
    return (l) => yl(l, t);
  if (e.type === "index")
    return (l) => Cl(l, t);
  if (e.type === "radio")
    return (l) => Sl(l, t);
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
      column: r
    } = l;
    if (r.comp === "ElSwitch" || t.table.isRowEdit && a.isEditing && (r.visible !== !1 || r.canEdit)) {
      const u = (m) => {
        a[r.prop] = m;
      }, V = r.comp || "ElInput";
      return gl(kl(V), {
        ...r,
        ...r.formAttrs,
        modelValue: a[r.prop],
        onInput: u,
        disabled: !a.editable || !a.isEditing
      });
    }
    const i = t.calcValue(l.rowData, e), {
      showOverflowTooltip: c
    } = r.tableAttrs || {};
    return c ? Vue.createVNode(Vue.resolveComponent("el-tooltip"), {
      content: i
    }, bl(i) ? i : {
      default: () => [i]
    }) : i;
  };
}, El = (e, t) => {
  const {
    _attrs: o,
    $slots: s
  } = t, n = e.map((l, a) => {
    const {
      tableAttrs: r = {}
    } = l, i = {
      ...l,
      key: a,
      dataKey: l.prop,
      title: l.label,
      width: l.width || r.width || l.minWidth || r.minWidth || l.maxWidth || r.maxWidth,
      align: l.align || o.tableAlign || "center"
    };
    return i.type === "selection" && (i.width = i.width || 46, i.headerCellRenderer = vl(t)), i.cellRenderer = Nl(i, t), i;
  });
  return t.hideOperates || n.push({
    key: n.length,
    title: "操作",
    type: "operates",
    width: t.operatesWidth || 195,
    align: o.operatesAlign || o.tableAlign || "center",
    fixed: o.operatesFixed || "right",
    cellRenderer(l) {
      return Vue.createVNode("div", {
        class: "operates"
      }, [s["operates-prefix"] ? s["operates-prefix"]() : null, wl(l, t), Bl(l, t), $l(l, t), xl(l, t), s["operates-suffix"] ? s["operates-suffix"]() : null]);
    }
  }), n;
}, Ol = {
  convertColumnsForTableV2: El
};
const jl = {
  name: "XTableV2",
  props: {
    ..._.props(),
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
    ..._.emits()
  ],
  components: { Searcher: z, Settings: I },
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
    ..._.computed
  },
  watch: {
    ..._.watch,
    settings: "saveSettings"
  },
  created() {
    this.initSettings();
  },
  mounted() {
    this.table && (this.table.tableRef = this.$refs.tableRef), this.$emit("update:tref", this.$refs.tableRef);
  },
  methods: {
    ..._.methods,
    convertColumnsForTableV2: Ol.convertColumnsForTableV2
  }
}, Pl = { key: 1 };
function Tl(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("Searcher"), r = Vue.resolveComponent("x-icon"), i = Vue.resolveComponent("Settings"), c = Vue.resolveComponent("x-table-tools"), u = Vue.resolveComponent("el-table-v2"), V = Vue.resolveComponent("el-auto-resizer"), m = Vue.resolveComponent("x-pagination"), k = Vue.resolveComponent("el-collapse-item"), b = Vue.resolveComponent("el-collapse"), w = Vue.resolveDirective("loading");
  return Vue.openBlock(), Vue.createElementBlock("div", {
    class: Vue.normalizeClass(["pc-x-table-v2", { fullscreen: n.isFullscreen }])
  }, [
    Vue.createVNode(a, {
      ref: "searcher",
      uid: e._uid,
      columns: e.searcherColumns,
      config: e.searcherConfig,
      onSearch: t[0] || (t[0] = (g) => e._emit("search", g))
    }, null, 8, ["uid", "columns", "config"]),
    Vue.createVNode(b, {
      modelValue: n.activeNames,
      "onUpdate:modelValue": t[3] || (t[3] = (g) => n.activeNames = g),
      class: Vue.normalizeClass((e.useCollapse ? "use" : "no") + "-collapse")
    }, {
      default: Vue.withCtx(() => [
        Vue.createVNode(k, {
          name: n.activeNames[0]
        }, {
          title: Vue.withCtx(() => [
            e.$slots["collapse-title"] ? Vue.renderSlot(e.$slots, "collapse-title", { key: 0 }) : (Vue.openBlock(), Vue.createElementBlock("span", Pl, Vue.toDisplayString(e.title), 1))
          ]),
          default: Vue.withCtx(() => [
            e.hideTools !== "" && e.hideTools !== !0 ? (Vue.openBlock(), Vue.createBlock(c, Vue.mergeProps({ key: 0 }, e._attrs, {
              domids: e.domids,
              onAdd: e._onAdd,
              onSearch: e._onSearch,
              onExport: e._onExport,
              onSearchExport: e._onSearchExport,
              onImport: e._onImport,
              onMultiEdit: e._onMultiEdit,
              onMultiDelete: e._onMultiDelete
            }), Vue.createSlots({
              "tools-end": Vue.withCtx(() => [
                Vue.createVNode(r, {
                  name: "FullScreen",
                  class: "full",
                  onClick: e.handleToggleFullscreen
                }, null, 8, ["onClick"]),
                Vue.createVNode(i, {
                  modelValue: n.settings,
                  "onUpdate:modelValue": t[1] || (t[1] = (g) => n.settings = g),
                  visible: !e.hideSettings,
                  width: e._attrs["cols-popover-width"] || 500,
                  onReset: e.handleResetSettings
                }, null, 8, ["modelValue", "visible", "width", "onReset"])
              ]),
              _: 2
            }, [
              e.$slots["tools-prefix"] ? {
                name: "tools-prefix",
                fn: Vue.withCtx(() => [
                  Vue.renderSlot(e.$slots, "tools-prefix")
                ]),
                key: "0"
              } : void 0,
              e.$slots["tools-suffix"] ? {
                name: "tools-suffix",
                fn: Vue.withCtx(() => [
                  Vue.renderSlot(e.$slots, "tools-suffix")
                ]),
                key: "1"
              } : void 0
            ]), 1040, ["domids", "onAdd", "onSearch", "onExport", "onSearchExport", "onImport", "onMultiEdit", "onMultiDelete"])) : Vue.createCommentVNode("", !0),
            Vue.createVNode(V, {
              style: Vue.normalizeStyle({ height: o.height })
            }, {
              default: Vue.withCtx(({ width: g, height: d }) => [
                Vue.withDirectives((Vue.openBlock(), Vue.createBlock(u, Vue.mergeProps({
                  ref: "tableRef",
                  "header-height": 46,
                  "row-height": 40
                }, e.elTableAttrs, {
                  data: e._data,
                  columns: l.convertColumnsForTableV2(e._visibleColumns, this),
                  fixed: o.fixed,
                  width: g,
                  height: d
                }), Vue.createSlots({ _: 2 }, [
                  e.$slots.footer ? {
                    name: "footer",
                    fn: Vue.withCtx(() => [
                      Vue.renderSlot(e.$slots, "footer")
                    ]),
                    key: "0"
                  } : void 0,
                  e.$slots.empty ? {
                    name: "empty",
                    fn: Vue.withCtx(() => [
                      Vue.renderSlot(e.$slots, "empty")
                    ]),
                    key: "1"
                  } : void 0,
                  e.$slots.overlay ? {
                    name: "overlay",
                    fn: Vue.withCtx(() => [
                      Vue.renderSlot(e.$slots, "overlay")
                    ]),
                    key: "2"
                  } : void 0
                ]), 1040, ["data", "columns", "fixed", "width", "height"])), [
                  [w, e._loading]
                ])
              ]),
              _: 3
            }, 8, ["style"]),
            e._query && e._total && (e.onSearch || e._listen.search) ? (Vue.openBlock(), Vue.createBlock(m, {
              key: 1,
              query: e._query,
              total: e._total,
              onSearch: t[2] || (t[2] = (g) => e._emit("search"))
            }, null, 8, ["query", "total"])) : Vue.createCommentVNode("", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["modelValue", "class"])
  ], 2);
}
const Al = /* @__PURE__ */ p(jl, [["render", Tl]]), Dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Al
}, Symbol.toStringTag, { value: "Module" }));
const E = ["selection", "radio"], Ml = {
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
      E.includes(t) && (e.columns.find((o) => o.type === "_index") || e.columns.unshift({ type: "_index" }), e.columns.find((o) => o.type === t) || e.columns.unshift({
        prop: "_index",
        type: t,
        fixed: "left",
        width: 55,
        label: t === "selection" ? "" : "单选"
      })), e.columns = e.columns.filter((o) => this.selectMode === o.type || !E.includes(o.type));
    },
    handleSubmit() {
      const { table: e, selectMode: t } = this;
      if (E.includes(t)) {
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
}, zl = { class: "x-table-viewer" };
function Il(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("x-dialog");
  return Vue.openBlock(), Vue.createElementBlock("div", zl, [
    Vue.createVNode(a, Vue.mergeProps(l._dialogAttrs, {
      modelValue: o.visible,
      "onUpdate:modelValue": t[1] || (t[1] = (r) => e.$emit("update:visible", r)),
      title: o.title,
      "before-close": l.handleBeforeClose,
      onSubmit: l.handleSubmit,
      onCancel: l.handleCancel
    }), {
      default: Vue.withCtx(() => [
        (Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(o.useTableV2 ? "x-table-v2" : "x-table"), Vue.mergeProps({
          tref: l.table.tableRef,
          "onUpdate:tref": t[0] || (t[0] = (r) => l.table.tableRef = r),
          table: l.table
        }, l._tableAttrs, {
          onSearch: o.controller.handleSearch
        }), null, 16, ["tref", "table", "onSearch"]))
      ]),
      _: 1
    }, 16, ["modelValue", "title", "before-close", "onSubmit", "onCancel"])
  ]);
}
const Rl = /* @__PURE__ */ p(Ml, [["render", Il], ["__scopeId", "data-v-f5d31400"]]), Fl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rl
}, Symbol.toStringTag, { value: "Module" })), Xl = {
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
}, Ul = { class: "x-tinymce" }, Ll = ["id", "innerHTML"];
function ql(e, t, o, s, n, l) {
  return Vue.openBlock(), Vue.createElementBlock("div", Ul, [
    Vue.createElementVNode("textarea", {
      id: n.id,
      innerHTML: o.modelValue
    }, null, 8, Ll)
  ]);
}
const Wl = /* @__PURE__ */ p(Xl, [["render", ql]]), Hl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wl
}, Symbol.toStringTag, { value: "Module" }));
const Jl = {
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
}, Kl = (e) => (Vue.pushScopeId("data-v-e756c8fc"), e = e(), Vue.popScopeId(), e), Yl = { class: "mask" }, Zl = /* @__PURE__ */ Kl(() => /* @__PURE__ */ Vue.createElementVNode("div", { class: "el-upload__text" }, [
  /* @__PURE__ */ Vue.createTextVNode(" 将文件拖到此处，或"),
  /* @__PURE__ */ Vue.createElementVNode("em", null, "点击上传")
], -1)), Gl = {
  key: 0,
  class: "path"
};
function Ql(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("x-icon"), r = Vue.resolveComponent("el-upload");
  return Vue.openBlock(), Vue.createBlock(r, {
    drag: "",
    "show-file-list": !1,
    action: n.action,
    accept: o.accept,
    multiple: o.multiple,
    "on-success": l.onSuccess,
    class: "x-file-uploader"
  }, {
    default: Vue.withCtx(() => [
      Vue.createElementVNode("div", Yl, [
        Vue.createVNode(a, { name: "upload-filled" }),
        Zl
      ]),
      l.filepath ? (Vue.openBlock(), Vue.createElementBlock("div", Gl, Vue.toDisplayString(o.modelValue), 1)) : Vue.createCommentVNode("", !0)
    ]),
    _: 1
  }, 8, ["action", "accept", "multiple", "on-success"]);
}
const es = /* @__PURE__ */ p(Jl, [["render", Ql], ["__scopeId", "data-v-e756c8fc"]]), ts = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: es
}, Symbol.toStringTag, { value: "Module" }));
const os = {
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
}, ns = (e) => (Vue.pushScopeId("data-v-c8f36d63"), e = e(), Vue.popScopeId(), e), ls = { class: "mask" }, ss = /* @__PURE__ */ ns(() => /* @__PURE__ */ Vue.createElementVNode("div", { class: "el-upload__text" }, [
  /* @__PURE__ */ Vue.createTextVNode(" 将图片拖到此处，或"),
  /* @__PURE__ */ Vue.createElementVNode("em", null, "点击上传")
], -1));
function rs(e, t, o, s, n, l) {
  const a = Vue.resolveComponent("el-image"), r = Vue.resolveComponent("x-icon"), i = Vue.resolveComponent("el-upload");
  return Vue.openBlock(), Vue.createBlock(i, {
    drag: "",
    "show-file-list": !1,
    action: n.action,
    accept: "image/*",
    multiple: o.multiple,
    "on-success": l.onSuccess,
    class: "x-image-uploader"
  }, {
    default: Vue.withCtx(() => [
      l.image ? (Vue.openBlock(), Vue.createBlock(a, {
        key: 0,
        src: l.image,
        alt: "upload-image",
        fit: "cover"
      }, null, 8, ["src"])) : Vue.createCommentVNode("", !0),
      Vue.createElementVNode("div", ls, [
        Vue.createVNode(r, { name: "upload-filled" }),
        ss
      ])
    ]),
    _: 1
  }, 8, ["action", "multiple", "on-success"]);
}
const as = /* @__PURE__ */ p(os, [["render", rs], ["__scopeId", "data-v-c8f36d63"]]), is = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: as
}, Symbol.toStringTag, { value: "Module" }));
const { h: us } = Vue, cs = (e, t) => e.$.appContext.components[t], J = /* @__PURE__ */ Object.assign({ "./components/xactionsheet/xactionsheet.vue": te, "./components/xautorows/xautorows.vue": ae, "./components/xbutton/mobile.vue": de, "./components/xbutton/pc.vue": he, "./components/xchart/xchart.vue": ke, "./components/xcheckboxs/mobile.vue": Be, "./components/xcheckboxs/pc.vue": Ee, "./components/xcol/mobile.vue": Te, "./components/xcol/pc.vue": ze, "./components/xdialog/mobile.vue": Xe, "./components/xdialog/pc.vue": He, "./components/xdistrictselect/xdistrictselect.vue": Ze, "./components/xform/mobile.vue": it, "./components/xform/pc.vue": mt, "./components/xformitem/mobile.vue": _t, "./components/xformitem/pc.vue": gt, "./components/xicon/mobile.vue": St, "./components/xicon/pc.vue": Nt, "./components/xinfo/xinfo.vue": xo, "./components/xlooper/xlooper.vue": Po, "./components/xpagination/mobile.vue": Mo, "./components/xpagination/pc.vue": Fo, "./components/xpicker/xpicker.vue": qo, "./components/xradios/mobile.vue": Ko, "./components/xradios/pc.vue": Qo, "./components/xrow/mobile.vue": ln, "./components/xrow/pc.vue": cn, "./components/xselect/mobile.vue": fn, "./components/xselect/pc.vue": Cn, "./components/xtable/mobile.vue": zn, "./components/xtable/pc.vue": ll, "./components/xtable/searcher.vue": Ln, "./components/xtable/settings.vue": Zn, "./components/xtabletools/mobile.vue": dl, "./components/xtabletools/pc.vue": _l, "./components/xtablev2/xtablev2.vue": Dl, "./components/xtableviewer/xtableviewer.vue": Fl, "./components/xtinymce/xtinymce.vue": Hl, "./components/xuploader/xfileuploader.vue": ts, "./components/xuploader/ximageuploader.vue": is }), ds = (e) => ({
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
    return us(cs(this, this.name), {
      platform: this.platform,
      ...this.$attrs
    }, this.$slots);
  }
}), T = (() => {
  const e = {};
  for (const n in J) {
    const l = J[n].default;
    /X[A-Z][a-z]/.test(l.name) && (e[l.name] = l);
  }
  const t = Object.keys(e), o = [...new Set(t.map((n) => n.replace(/(pc|mobile)/i, "")))], s = {};
  for (const n of t)
    /(pc|mobile)/i.test(n) && (s[n] = e[n]);
  for (const n of o)
    t.find((l) => /(pc|mobile)/i.test(l) && l.toLowerCase().includes(n.toLowerCase())) ? s[n] = ds(n) : s[n] = e[n];
  return s;
})(), ps = (e, t) => {
  for (const [o, s] of Object.entries(Z))
    e.component(o, s);
  for (let o in T)
    e.component(o, T[o]);
}, hs = {
  ...T,
  install: ps,
  areaList: v
};
export {
  hs as default
};
