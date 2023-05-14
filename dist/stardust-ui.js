const m = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, n] of t)
    o[s] = n;
  return o;
}, se = {
  name: "XActionSheet",
  props: {
    actionSheet: Object
  }
};
function re(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("van-action-sheet");
  return Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps(e.$attrs, {
    show: o.actionSheet.show,
    "onUpdate:show": t[0] || (t[0] = (a) => o.actionSheet.show = a),
    actions: o.actionSheet.actions
  }), null, 16, ["show", "actions"]);
}
const ae = /* @__PURE__ */ m(se, [["render", re]]), ie = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ae
}, Symbol.toStringTag, { value: "Module" })), ue = {
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
}, ce = { class: "x-auto-rows" }, de = { key: 1 };
function pe(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("XCol"), a = Vue.resolveComponent("XRow");
  return Vue.openBlock(), Vue.createElementBlock("div", ce, [
    (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(l.rows, (i, u) => (Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ key: u }, e.$attrs, {
      platform: e.$attrs.platform
    }), {
      default: Vue.withCtx(() => [
        (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(i, (c, V) => (Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps(c, {
          span: c.span || o.span,
          key: V,
          platform: e.$attrs.platform
        }), {
          default: Vue.withCtx(() => [
            c.slot || e.$attrs.slot ? Vue.renderSlot(e.$slots, c.slot || e.$attrs.slot, {
              key: 0,
              col: c
            }) : (Vue.openBlock(), Vue.createElementBlock("span", de, Vue.toDisplayString(c.text), 1))
          ]),
          _: 2
        }, 1040, ["span", "platform"]))), 128))
      ]),
      _: 2
    }, 1040, ["platform"]))), 128))
  ]);
}
const me = /* @__PURE__ */ m(ue, [["render", pe]]), Ve = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: me
}, Symbol.toStringTag, { value: "Module" })), he = {
  name: "MobileXButton"
};
function fe(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("van-button");
  return Vue.openBlock(), Vue.createBlock(r, null, {
    default: Vue.withCtx(() => [
      Vue.renderSlot(e.$slots, "default")
    ]),
    _: 3
  });
}
const _e = /* @__PURE__ */ m(he, [["render", fe]]), be = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _e
}, Symbol.toStringTag, { value: "Module" })), ge = {
  name: "PcXButton"
};
function ve(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("el-button");
  return Vue.openBlock(), Vue.createBlock(r, null, {
    default: Vue.withCtx(() => [
      Vue.renderSlot(e.$slots, "default")
    ]),
    _: 3
  });
}
const ke = /* @__PURE__ */ m(ge, [["render", ve]]), ye = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ke
}, Symbol.toStringTag, { value: "Module" }));
const { funcs: Ce } = StardustBrowser, M = {
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
      return Ce.calcPixel(this.height) * this.zoom + "px";
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
}, U = () => {
  Vue.useCssVars((e) => ({
    "127c024a": e.zoomedHeight,
    "137ee0b8": e.zoom
  }));
}, L = M.setup;
M.setup = L ? (e, t) => (U(), L(e, t)) : U;
const Se = {
  class: "x-chart",
  ref: "el"
};
function we(e, t, o, s, n, l) {
  return Vue.openBlock(), Vue.createElementBlock("div", Se, null, 512);
}
const Be = /* @__PURE__ */ m(M, [["render", we], ["__scopeId", "data-v-0c2da986"]]), $e = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Be
}, Symbol.toStringTag, { value: "Module" })), { toRaw: xe } = Vue, Ne = (e, t) => e.$.appContext.components[t], Ee = (e, t) => {
  const o = e.__v_isRef ? e.value : xe(e);
  let s = o;
  if (typeof o[0] != "object" && (s = o.map((l) => ({ text: l, value: l }))), !t.sort)
    return s;
  const n = typeof t.sort == "string" ? t.sort : t.text || "text";
  return s.sort((l, r) => l[n].localeCompare(r[n]));
}, x = {
  resolveComponent: Ne,
  formatOptions: Ee
}, { watch: Oe } = Vue, { funcs: j } = StardustJs, je = (e, t) => (Object.values(e).forEach((o) => {
  !o || typeof o != "object" || (o._isBaseTable ? G(o, t) : o._isBaseDialog ? Q(o, t) : o._isBaseForm && z(o, t));
}), e), G = (e, t) => (e.columns.push(...t.filter((o) => o.visible === !1 ? o.canView : o.canView !== !1)), e), Q = (e, t) => (e.formItems = t.filter((o) => o.visible === !1 ? o.canAdd || o.canEdit : o.canAdd !== !1 || o.canEdit !== !1), z(e, t), e), z = (e, t) => (e._isBaseForm && !e._isBaseDialog && (e.formItems = t.filter((s) => s.visible !== !1)), te(e.form, e.formItems), e.initialForm = j.deepCopy(e.form), e.initialFormRules = j.deepCopy(e.formRules), Oe(() => e.formItems, () => {
  ee(e);
}, { immediate: !0, deep: !0 }), e), ee = (e) => {
  const { formItems: t, initialFormRules: o } = e, s = t.filter((l) => {
    let { formAttrs: r = {}, required: a = !1 } = l;
    return a = "required" in r ? r.required : a, !l.hasOwnProperty("rules") && !e.initialFormRules.hasOwnProperty(l.prop) && a !== !1;
  }).map((l) => l.prop);
  if (Object.assign(e.formRules, j.deepCopy(o)), Object.keys(e.formRules).forEach((l) => {
    l in o || delete e.formRules[l];
  }), !s.length)
    return;
  const n = {};
  return s.forEach((l) => {
    if (e.formRules[l])
      return;
    const r = t.find((b) => b.prop === l), a = r.platform || e.platform || (window.isMobile ? "mobile" : "pc"), i = oe[a], u = [], p = { required: !0, message: `请${"options" in r ? "选择" : "输入"}${(r == null ? void 0 : r.label) || l}` };
    r.validator && (p.validator = r.validator), r.asyncValidator && (p.asyncValidator = r.asyncValidator), r.comp ? u.push({ ...p, trigger: i.change }) : u.push({ ...p, trigger: i.blur }), r.comp === "ElInputNumber" && u.push({ ...p, trigger: i.blur }), n[l] = u;
  }), Object.assign(e.formRules, n), e.formRules;
}, te = (e, t, o = !0) => {
  const s = {};
  return t.forEach((n) => {
    var u;
    let l = "";
    const { type: r, options: a } = n, { multiple: i } = n.formAttrs || {};
    if (o && r === "number" || n.comp === "ElInputNumber")
      l = 0;
    else if (n.comp === "ElSwitch")
      l = !1;
    else if (a && ((u = n.comp) != null && u.endsWith("XCheckboxs") || i))
      l = [];
    else if (n.comp === "ElDatePicker" && ["datetimerange", "daterange", "monthrange"].includes(n.type)) {
      const c = {
        datetimerange: "时间",
        daterange: "日期",
        monthrange: "月份"
      }[n.type];
      n["start-placeholder"] || (n["start-placeholder"] = "开始" + c), n["end-placeholder"] || (n["end-placeholder"] = "结束" + c), l = [];
    }
    s[n.prop] = l;
  }), Object.assign(e, { ...s, ...e }), e;
}, oe = {
  mobile: {
    blur: "onBlur",
    change: "onChange"
  },
  pc: {
    blur: "blur",
    change: "change"
  }
}, Pe = {
  initModel: je,
  initTable: G,
  initDialog: Q,
  initForm: z,
  initFormRules: ee,
  initDefaultForm: te,
  triggers: oe
}, y = {
  funcs: x,
  ...x,
  modelUtils: Pe
}, Te = {
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
    formatOptions: y.formatOptions
  }
};
function Ae(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("van-checkbox"), a = Vue.resolveComponent("van-checkbox-group");
  return Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ class: "mobile-x-checkboxs" }, l.attrs, { direction: o.direction }), {
    default: Vue.withCtx(() => [
      (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(l.formatOptions(o.options, this), (i) => (Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps(l.attrs, {
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
const De = /* @__PURE__ */ m(Te, [["render", Ae]]), Me = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: De
}, Symbol.toStringTag, { value: "Module" })), ze = {
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
    formatOptions: y.formatOptions
  }
};
function Ie(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("el-checkbox"), a = Vue.resolveComponent("el-checkbox-group");
  return Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ class: "pc-x-checkboxs" }, l.attrs, {
    modelValue: o.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (i) => e.$emit("update:modelValue", i))
  }), {
    default: Vue.withCtx(() => [
      (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(l.formatOptions(o.options, this), (i) => (Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps(l.attrs, {
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
const Re = /* @__PURE__ */ m(ze, [["render", Ie]]), Fe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Re
}, Symbol.toStringTag, { value: "Module" })), Xe = {
  name: "MobileXCol",
  inheritAttrs: !1,
  computed: {
    attrs() {
      const { text: e, slot: t, ...o } = this.$attrs;
      return o;
    }
  }
};
function Ue(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("van-col");
  return Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps(l.attrs, { class: "mobile-x-col" }), {
    default: Vue.withCtx(() => [
      Vue.renderSlot(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const Le = /* @__PURE__ */ m(Xe, [["render", Ue]]), qe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Le
}, Symbol.toStringTag, { value: "Module" })), We = {
  name: "PcXCol",
  inheritAttrs: !1,
  computed: {
    attrs() {
      const { text: e, slot: t, ...o } = this.$attrs;
      return o;
    }
  }
};
function He(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("el-col");
  return Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps(l.attrs, { class: "pc-x-col" }), {
    default: Vue.withCtx(() => [
      Vue.renderSlot(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const Je = /* @__PURE__ */ m(We, [["render", He]]), Ke = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Je
}, Symbol.toStringTag, { value: "Module" })), Ye = {
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
function Ze(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("van-dialog");
  return Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({ width: "92%" }, e.$attrs, {
    show: l.visible,
    "onUpdate:show": t[0] || (t[0] = (a) => l.visible = a),
    class: "mobile-x-dialog",
    "show-confirm-button": !!e.$attrs.onSubmit || !!e.$parent.$attrs.onSubmit,
    "show-cancel-button": !!e.$attrs.onCancel || !!e.$parent.$attrs.onCancel,
    onConfirm: t[1] || (t[1] = (a) => e.$emit("submit")),
    onCancel: t[2] || (t[2] = (a) => e.$emit("cancel"))
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
const Ge = /* @__PURE__ */ m(Ye, [["render", Ze]]), Qe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ge
}, Symbol.toStringTag, { value: "Module" })), et = {
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
}, tt = {
  key: 1,
  class: "el-dialog__title"
};
function ot(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("x-icon"), a = Vue.resolveComponent("el-button");
  return Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(o.drawer ? "ElDrawer" : "ElDialog"), Vue.mergeProps({ draggable: o.draggable }, e.$attrs, {
    modelValue: l.visible,
    "onUpdate:modelValue": t[2] || (t[2] = (i) => l.visible = i),
    fullscreen: n.fullscreen,
    size: e.$attrs.width,
    class: ["pc-x-dialog", { "pc-x-drawer": o.drawer }]
  }), {
    header: Vue.withCtx(() => [
      e.$slots.header ? Vue.renderSlot(e.$slots, "header", { key: 0 }) : (Vue.openBlock(), Vue.createElementBlock("span", tt, Vue.toDisplayString(e.$attrs.title), 1)),
      o.drawer ? Vue.createCommentVNode("", !0) : (Vue.openBlock(), Vue.createBlock(r, {
        key: 2,
        name: "FullScreen",
        class: "full el-dialog__headerbtn",
        style: { right: "50px" },
        onClick: l.handleToggleFullscreen
      }, null, 8, ["onClick"]))
    ]),
    footer: Vue.withCtx(() => [
      e.$slots.footer ? Vue.renderSlot(e.$slots, "footer", { key: 0 }) : Vue.createCommentVNode("", !0),
      e.$attrs.onSubmit || e.$parent.$attrs.onSubmit ? (Vue.openBlock(), Vue.createBlock(a, {
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
      e.$attrs.onCancel || e.$parent.$attrs.onCancel ? (Vue.openBlock(), Vue.createBlock(a, {
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
const nt = /* @__PURE__ */ m(et, [["render", ot]]), lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nt
}, Symbol.toStringTag, { value: "Module" })), k = {}, S = {
  provinces: [],
  cities: [],
  counties: []
}, st = {
  name: "XDistrictSelect",
  props: {
    areaList: Object,
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
      provinces: Object.freeze(S.provinces),
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
    areaList: {
      handler: "initAreas",
      immediate: !0
    },
    province(e) {
      if (this.county || this.update(), this.city = this.county = "", !e) {
        this.cities = [], this.counties = [];
        return;
      }
      const t = e.slice(0, 2);
      this.cities = Object.freeze(S.cities.filter((o) => o.value.slice(0, 2) === t));
    },
    city(e) {
      if (this.county || this.update(), this.county = "", !e) {
        this.counties = [];
        return;
      }
      const t = e.slice(0, 4);
      this.counties = Object.freeze(S.counties.filter((o) => o.value.slice(0, 4) === t));
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
    initAreas() {
      Object.assign(k, this.areaList), S.provinces = Object.entries(k.province_list).map((e) => ({ value: e[0], text: e[1] })), S.cities = Object.entries(k.city_list).map((e) => ({ value: e[0], text: e[1] })), S.counties = Object.entries(k.county_list).map((e) => ({ value: e[0], text: e[1] })), this.provinces = Object.freeze(S.provinces);
    },
    async init() {
      this.inited = !1;
      const [e, t, o] = this.modelValue.split("/");
      if (e) {
        const s = Object.entries(k.province_list).find((n) => n[1] === e);
        this.province = s == null ? void 0 : s[0];
      } else {
        this.province = "", this.inited = !0;
        return;
      }
      if (await this.$nextTick(), t) {
        const s = Object.entries(k.city_list).find((n) => n[1] === t);
        this.city = s == null ? void 0 : s[0];
      } else {
        this.city = "", this.inited = !0;
        return;
      }
      if (await this.$nextTick(), o) {
        const s = Object.entries(k.county_list).find((n) => n[1] === o);
        this.county = s == null ? void 0 : s[0];
      } else
        this.county = "";
      this.inited = !0, this.update();
    },
    update() {
      if (!this.inited)
        return;
      let e = [
        this.province && k.province_list[this.province] || "",
        this.number > 1 && this.city && k.city_list[this.city] || "",
        this.number > 2 && this.county && k.county_list[this.county] || ""
      ].slice(0, this.number).join("/");
      this.$emit("update:modelValue", e), this.$emit("change", e);
    }
  }
};
function rt(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("x-select"), a = Vue.resolveComponent("x-col"), i = Vue.resolveComponent("x-row");
  return Vue.openBlock(), Vue.createBlock(i, {
    class: "x-district-select",
    gutter: 10
  }, {
    default: Vue.withCtx(() => [
      Vue.createVNode(a, { span: l.span }, {
        default: Vue.withCtx(() => [
          Vue.createVNode(r, {
            modelValue: n.province,
            "onUpdate:modelValue": t[0] || (t[0] = (u) => n.province = u),
            options: n.provinces,
            placeholder: "省份"
          }, null, 8, ["modelValue", "options"])
        ]),
        _: 1
      }, 8, ["span"]),
      l.number > 1 ? (Vue.openBlock(), Vue.createBlock(a, {
        key: 0,
        span: l.span
      }, {
        default: Vue.withCtx(() => [
          Vue.createVNode(r, {
            modelValue: n.city,
            "onUpdate:modelValue": t[1] || (t[1] = (u) => n.city = u),
            options: n.cities,
            placeholder: "城市"
          }, null, 8, ["modelValue", "options"])
        ]),
        _: 1
      }, 8, ["span"])) : Vue.createCommentVNode("", !0),
      l.number > 2 ? (Vue.openBlock(), Vue.createBlock(a, {
        key: 1,
        span: l.span
      }, {
        default: Vue.withCtx(() => [
          Vue.createVNode(r, {
            modelValue: n.county,
            "onUpdate:modelValue": t[2] || (t[2] = (u) => n.county = u),
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
const at = /* @__PURE__ */ m(st, [["render", rt]]), it = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: at
}, Symbol.toStringTag, { value: "Module" }));
function ut() {
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
function ct() {
  const { dialog: e, form: t, model: o } = this.$props;
  return o || (e || t).form;
}
function dt() {
  const { hideLabels: e, dialog: t, form: o } = this.$props;
  return (this.items || (t || o).formItems).map((n) => (delete n.visible, e ? {
    ...n,
    label: " ",
    _label: n.label
  } : n)).filter((n) => this.dialog ? this.dialog.isEditing ? n.canEdit !== !1 : n.canAdd !== !1 : !0).map((n) => Object.assign({}, n, n.formAttrs));
}
function pt() {
  const { dialog: e, form: t, rules: o } = this.$props;
  return o || (e || t).formRules;
}
function mt(e) {
  var s;
  let { placeholder: t, comp: o } = e;
  return t || (t = "options" in e || /(date|time)/i.test(o) ? "请选择" : "请输入", t += ((s = e.label) == null ? void 0 : s.trim()) || e._label || e.text || e.model || ""), t;
}
function Vt(e) {
  const t = { ...e.style };
  return "itemWidth" in this && (t.width = this.itemWidth), e.span && (t.width = e.span / 24 * 100 + "%"), e.offset && (t.marginLeft = e.offset / 24 * 100 + "%"), t;
}
function ht(e) {
  return typeof e == "boolean" ? e.toString() : e;
}
const w = {
  props: ut,
  computed: {
    _model: ct,
    _items: dt,
    _rules: pt
  },
  methods: {
    calcPlaceholder: mt,
    calcStyle: Vt,
    formatModelValue: ht
  }
}, ft = {
  name: "MobileXForm",
  inheritAttrs: !1,
  props: {
    ...w.props()
  },
  emits: ["update:fref"],
  computed: {
    ...w.computed
  },
  mounted() {
    const e = this.dialog ?? this.form;
    e && (e.formRef = this.$refs.formRef), this.$emit("update:fref", this.$refs.formRef);
  },
  methods: {
    ...w.methods
  }
};
function _t(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("mobile-x-form-item"), a = Vue.resolveComponent("van-cell-group"), i = Vue.resolveComponent("van-form");
  return Vue.openBlock(), Vue.createBlock(i, {
    ref: "formRef",
    class: "mobile-x-form"
  }, {
    default: Vue.withCtx(() => [
      e.$slots.pre ? Vue.renderSlot(e.$slots, "pre", { key: 0 }) : Vue.createCommentVNode("", !0),
      Vue.createVNode(a, Vue.normalizeProps(Vue.guardReactiveProps(e.$attrs)), {
        default: Vue.withCtx(() => [
          (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(e._items, (u, c) => (Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps(u, {
            rules: e._rules[u.prop] || u.rules,
            key: c,
            modelValue: e.formatModelValue(e._model[u.prop]),
            "onUpdate:modelValue": (V) => e._model[u.prop] = V,
            placeholder: e.calcPlaceholder(u)
          }), {
            default: Vue.withCtx(() => [
              u.slot ? Vue.renderSlot(e.$slots, u.slot, Vue.normalizeProps(Vue.mergeProps({ key: 0 }, u))) : Vue.createCommentVNode("", !0)
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
const bt = /* @__PURE__ */ m(ft, [["render", _t]]), gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bt
}, Symbol.toStringTag, { value: "Module" })), vt = {
  name: "PcXForm",
  inheritAttrs: !1,
  props: {
    ...w.props(),
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
    ...w.computed
  },
  mounted() {
    const e = this.dialog ?? this.form;
    e && (e.formRef = this.$refs.formRef), this.$emit("update:fref", this.$refs.formRef);
  },
  methods: {
    ...w.methods
  }
}, kt = { key: 1 };
function yt(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("pc-x-form-item"), a = Vue.resolveComponent("el-form"), i = Vue.resolveComponent("el-collapse-item"), u = Vue.resolveComponent("el-collapse");
  return Vue.openBlock(), Vue.createBlock(u, {
    modelValue: n.activeNames,
    "onUpdate:modelValue": t[0] || (t[0] = (c) => n.activeNames = c),
    class: Vue.normalizeClass((o.useCollapse ? "use" : "no") + "-collapse")
  }, {
    default: Vue.withCtx(() => [
      Vue.createVNode(i, {
        name: n.activeNames[0]
      }, {
        title: Vue.withCtx(() => [
          e.$slots["collapse-title"] ? Vue.renderSlot(e.$slots, "collapse-title", { key: 0 }) : (Vue.openBlock(), Vue.createElementBlock("span", kt, Vue.toDisplayString(o.title), 1))
        ]),
        default: Vue.withCtx(() => [
          Vue.createVNode(a, Vue.mergeProps({ ref: "formRef" }, e.$attrs, {
            model: e._model,
            rules: e._rules,
            "label-width": o.labelWidth,
            "label-position": e.$attrs.labelPosition || "right",
            class: ["pc-x-form", { "hide-labels": o.hideLabels }]
          }), {
            default: Vue.withCtx(() => [
              e.$slots.pre ? Vue.renderSlot(e.$slots, "pre", { key: 0 }) : Vue.createCommentVNode("", !0),
              (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(e._items, (c, V) => (Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps(c, {
                key: V,
                modelValue: e._model[c.prop],
                "onUpdate:modelValue": [(p) => e._model[c.prop] = p, (p) => c.onChange || null],
                "label-width": o.labelWidth,
                prop: c.prop || c.model,
                clearable: c.clearable !== !1,
                placeholder: e.calcPlaceholder(c),
                style: e.calcStyle(c),
                "show-tooltip": e.$attrs.showTooltip || !1
              }), {
                default: Vue.withCtx(() => [
                  c.slot ? Vue.renderSlot(e.$slots, c.slot, { key: 0 }) : Vue.createCommentVNode("", !0)
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
const Ct = /* @__PURE__ */ m(vt, [["render", yt]]), St = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ct
}, Symbol.toStringTag, { value: "Module" }));
function q(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Vue.isVNode(e);
}
const {
  h: P
} = Vue, {
  resolveComponent: T
} = x, A = (e) => {
  const {
    $props: t,
    $attrs: o,
    attrs: s,
    $emit: n
  } = e;
  let {
    comp: l,
    compType: r,
    html: a,
    text: i
  } = t;
  const u = {
    ...s,
    "onUpdate:modelValue": (V) => n("update:modelValue", V)
  }, c = [];
  return r === "html" ? u.class = "comp-html" : l = T(e, l), a && (u.innerHTML = a), i && c.push(i), P(l, u, {
    default: () => c
  });
}, wt = (e) => {
  const {
    $props: t,
    $attrs: o,
    attrs: s,
    $emit: n,
    $slots: l
  } = e, {
    slot: r,
    showTooltip: a,
    placeholder: i
  } = t;
  if (r && !o.label)
    return l.default();
  let u = null;
  if (a) {
    let c;
    u = Vue.createVNode(Vue.resolveComponent("el-tooltip"), {
      effect: "dark",
      content: i,
      placement: "bottom"
    }, q(c = A(e)) ? c : {
      default: () => [c]
    });
  } else
    u = A(e);
  return Vue.createVNode(Vue.resolveComponent("el-form-item"), null, q(u) ? u : {
    default: () => [u]
  });
}, Bt = (e) => {
  const {
    $props: t,
    $attrs: o,
    attrs: s,
    $emit: n,
    $slots: l,
    mValue: r
  } = e, {
    slot: a,
    comp: i,
    modelValue: u
  } = t;
  if (a && !o.label)
    return l.default({
      ...t,
      ...o
    });
  const c = {
    modelValue: r,
    "onUpdate:modelValue": (V) => n("update:modelValue", V)
  };
  return a && o.label || i ? P(T(e, "van-field"), c, {
    input: () => a && o.label ? l.default() : A(e)
  }) : (Object.assign(c, s), P(T(e, "van-field"), c));
}, $t = {
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
        slot: r,
        html: a,
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
    return Bt(this);
  }
}, xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $t
}, Symbol.toStringTag, { value: "Module" }));
const I = {
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
        span: r,
        offset: a,
        showTooltip: i,
        required: u,
        format: c,
        style: V,
        html: p,
        class: b,
        ...g
      } = { ...this.$props, ...this.$attrs };
      return g;
    },
    width() {
      return this.$attrs.label ? this.labelWidth : "0px";
    }
  },
  render() {
    return wt(this);
  }
}, W = () => {
  Vue.useCssVars((e) => ({
    ba9709f0: e.width
  }));
}, H = I.setup;
I.setup = H ? (e, t) => (W(), H(e, t)) : W;
const Nt = /* @__PURE__ */ m(I, [["__scopeId", "data-v-d2cde1e2"]]), Et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Nt
}, Symbol.toStringTag, { value: "Module" })), J = /* @__PURE__ */ Object.assign({}), Ot = {
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
      await Promise.all(Object.keys(J).map(async (t) => {
        const o = t.split("/").pop().split(".")[0], s = await J[t]();
        e[o] = s.default;
      })), this.icons = e;
    }
  }
}, jt = ["src"];
function Pt(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("van-icon");
  return n.icons[o.name] ? (Vue.openBlock(), Vue.createElementBlock("img", {
    key: 0,
    src: n.icons[o.name],
    alt: "icon"
  }, null, 8, jt)) : (Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({ key: 1 }, e.$attrs, { name: o.name }), null, 16, ["name"]));
}
const Tt = /* @__PURE__ */ m(Ot, [["render", Pt]]), At = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tt
}, Symbol.toStringTag, { value: "Module" })), K = /* @__PURE__ */ Object.assign({}), Dt = {
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
      await Promise.all(Object.keys(K).map(async (t) => {
        const o = t.split("/").pop().split(".")[0], s = await K[t]();
        e[o] = s.default;
      })), this.icons = e;
    }
  }
}, Mt = ["src"];
function zt(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("el-icon");
  return n.icons[o.name] ? (Vue.openBlock(), Vue.createElementBlock("img", {
    key: 0,
    src: n.icons[o.name],
    alt: "icon"
  }, null, 8, Mt)) : (Vue.openBlock(), Vue.createBlock(r, Vue.normalizeProps(Vue.mergeProps({ key: 1 }, e.$attrs)), {
    default: Vue.withCtx(() => [
      (Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(o.name)))
    ]),
    _: 1
  }, 16));
}
const It = /* @__PURE__ */ m(Dt, [["render", zt]]), Rt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: It
}, Symbol.toStringTag, { value: "Module" })), { highdict: Ft } = StardustJs, { storage: Xt } = StardustBrowser, { local: ne } = Xt, R = ["index", "selection", "expand", "radio", "_index"];
function Ut() {
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
function Lt() {
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
function qt() {
  const t = (this.$.attrs.platform || (window.isMobile ? "mobile" : "pc")) + "TableAttrs", o = { ...this.$attrs };
  return t in this && Object.assign(o, this[t]), o;
}
function Wt() {
  const e = {};
  return ["search", "add", "multi-edit", "multi-delete", "export", "search-export", "import"].forEach((o) => e[o] = o), { ...e, ...this.$attrs.domids };
}
function Ht() {
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
function Jt() {
  const { table: e, loading: t } = this.$props;
  return t || (e == null ? void 0 : e.loading);
}
function Kt() {
  const { table: e, data: t } = this.$props;
  return t || (e == null ? void 0 : e.list) || [];
}
function Yt() {
  const { $props: e, _query: t } = this, { table: o, columns: s } = e;
  return (s || (o == null ? void 0 : o.columns) || []).map((l) => l.type === "_index" ? Object.assign({
    width: 60,
    label: "序号",
    index(r) {
      const { page: a, limit: i } = t;
      return (a - 1) * i + r + 1;
    }
  }, l, { type: "index" }) : l.type === "radio" ? Object.assign({ width: 60, label: "单选" }, l) : Object.assign({}, l, l.tableAttrs));
}
function Zt() {
  const { table: e, query: t } = this.$props;
  return t || (e == null ? void 0 : e.query);
}
function Gt() {
  const { table: e, total: t } = this.$props;
  return t || (e == null ? void 0 : e.total);
}
function Qt() {
  const { table: e, selection: t } = this.$props;
  return t || (e == null ? void 0 : e.selection);
}
function eo() {
  return this.onSearch || this._listen.search ? (e) => {
    e ? this._emit("search") : this.$refs.searcher.open();
  } : null;
}
function to() {
  return this.onAdd || this._listen.add ? () => this._emit("add") : null;
}
function oo() {
  return this.onExport || this._listen.export ? () => this._emit("export") : null;
}
function no() {
  return this.onSearchExport || this._listen["search-export"] ? () => this._emit("search-export") : null;
}
function lo() {
  return this.onImport || this._listen.import ? () => this._emit("import") : null;
}
function so() {
  return this.onMultiEdit || this._listen["multi-edit"] ? () => this._emit("multi-edit") : null;
}
function ro() {
  return this.onMultiDelete || this._listen["multi-delete"] ? () => this._emit("multi-delete") : null;
}
function ao() {
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
function io() {
  const e = this._columns.filter((o) => o.type && R.includes(o.type)), t = this.settings.columns.filter((o) => !o.hide).map((o) => {
    const s = this._columns.find((n) => n.prop === o.prop);
    return {
      sortable: "custom",
      ...s,
      width: o.width || s.width
    };
  });
  return e.concat(t);
}
function uo() {
  const { table: e, uid: t } = this.$props;
  return t || (e == null ? void 0 : e.uid) || "";
}
function co() {
  return this.table.hideOperates || this.$attrs["hide-operates"] !== void 0 && this.$attrs["hide-operates"] !== !1;
}
function po() {
  return this._columns.filter((e) => !e.type || !R.includes(e.type));
}
function mo() {
  return this.table.searcherConfig ?? this.$attrs["searcher-config"] ?? {};
}
function Vo() {
  const e = this._uid && ne.getJson(`Settings[${this._uid}]`, {}) || {};
  e.columns = e.columns || this._columns.filter((t) => !t.type || !R.includes(t.type)).map((t) => {
    const { prop: o, label: s, show: n, hide: l, width: r } = t;
    return { prop: o, label: s, show: n, hide: l, width: r };
  }), this.settings = e;
}
function ho(e) {
  ne.setJson(`Settings[${this._uid}]`, e);
}
function fo(e, t) {
  const { prop: o } = t;
  let { format: s, formatter: n } = t.tableAttrs || t;
  s = Array.isArray(t.options) ? s !== !1 : s;
  const l = e[o];
  if (l == null || l === "")
    return this.defaultValue;
  if (s || n) {
    const r = `_formatted_${o}`;
    if (r in e)
      return e[r];
    if (n)
      return typeof n == "function" ? n(l, e, t) : Ft.get(e, n);
  }
  return l;
}
function _o(e) {
  if (["index", "selection", "expand"].includes(e.type))
    return !1;
  const { showOverflowTooltip: t } = e.tableAttrs || e;
  return t !== !1;
}
function bo(e) {
  this.params = e, this._emit("search", e);
}
function go(e) {
  this.saveSettings(e), this.initSettings();
}
function vo(e, t, o, s) {
  const n = this.settings.columns.find((l) => l.prop === o.property);
  n && (n.width = e, this.saveSettings(this.settings)), this.onHeaderDragend && this.onHeaderDragend(e, t, o, s);
}
function ko(e) {
  this._selection && (this._selection.splice(0), this._selection.push(...e)), this.onSelectionChange && this.onSelectionChange(e);
}
function yo(...e) {
  var t, o;
  this.onSortChange ? this.onSortChange(...e) : e[0].column.sortable === "custom" && ((o = (t = this.controller) == null ? void 0 : t.handleSortChange) == null || o.call(t, ...e));
}
function Co(e) {
  this.checked = e.target.value * 1;
  const t = this._data[this.checked];
  this.table && (this.table.checked = t), this.onCheckedChange && this.onCheckedChange(t);
}
function So() {
  this.isFullscreen = !this.isFullscreen, this.isFullscreen ? (this.zoom = document.documentElement.style.zoom, document.documentElement.style.zoom = 1) : document.documentElement.style.zoom = this.zoom;
}
function wo(e) {
  var s;
  let t = this.$attrs["cell-class-name"] ? this.$attrs["cell-class-name"](e) : "";
  const o = this._visibleColumns[e.columnIndex];
  if ((s = o == null ? void 0 : o.tableAttrs) != null && s.class) {
    const n = o.tableAttrs.class;
    typeof n == "function" ? t += " " + n(e) : typeof n == "string" && (t += " " + n);
  }
  return t ? [...new Set(t.split(" "))].join(" ") : "";
}
function Bo(e) {
  var s;
  const t = this.$attrs["cell-style"] ? this.$attrs["cell-style"](e) : {}, o = this._visibleColumns[e.columnIndex];
  if ((s = o == null ? void 0 : o.tableAttrs) != null && s.style) {
    const n = o.tableAttrs.style;
    typeof n == "function" ? Object.assign(t, n(e)) : typeof n == "object" && Object.assign(t, n);
  }
  return Object.keys(t) ? t : null;
}
function $o(e) {
  return !!(this.onEdit || this._listen.edit) && e.editable !== !1 && !e.isEditing;
}
function xo(e) {
  return !!(this.onRowEdit || this._listen["row-edit"]) && this.table.isRowEdit && e.isEditing;
}
function No(e) {
  return !!(this.onRowEdit || this._listen["row-edit"]) && this.table.isRowEdit && e.isEditing;
}
function Eo(e) {
  return !!(this.onCancelEdit || this._listen["cancel-edit"]) && this.table.isRowEdit && e.isEditing;
}
function Oo(e) {
  return !!(this.onDelete || this._listen.delete) && e.deletable !== !1;
}
function jo(e, t) {
  const o = "on" + e.split("-").map((s) => s[0].toUpperCase() + s.slice(1)).join("");
  this[o] ? this[o](t) : this._listen[e] ? this._listen[e](t) : this.$emit(e, t);
}
function Po() {
  this.zoom !== 1 && (document.documentElement.style.zoom = this.zoom);
}
const _ = {
  props: Ut,
  emits: Lt,
  computed: {
    _attrs: qt,
    domids: Wt,
    elTableAttrs: Ht,
    _loading: Jt,
    _data: Kt,
    _columns: Yt,
    _query: Zt,
    _total: Gt,
    _selection: Qt,
    _onSearch: eo,
    _onAdd: to,
    _onExport: oo,
    _onSearchExport: no,
    _onImport: lo,
    _onMultiEdit: so,
    _onMultiDelete: ro,
    _listen: ao,
    _visibleColumns: io,
    _uid: uo,
    hideOperates: co,
    searcherColumns: po,
    searcherConfig: mo
  },
  watch: {
    $route: Po
  },
  methods: {
    initSettings: Vo,
    saveSettings: ho,
    calcValue: fo,
    calcOverflowTooltip: _o,
    handleSearch: bo,
    handleResetSettings: go,
    handleHeaderDragend: vo,
    handleSelectionChange: ko,
    handleSortChange: yo,
    handleCheckedChange: Co,
    handleToggleFullscreen: So,
    cellClassName: wo,
    cellStyle: Bo,
    canEdit: $o,
    canSave: xo,
    canRowEdit: No,
    canCancelEdit: Eo,
    canDelete: Oo,
    _emit: jo
  }
};
const To = {
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
        let r = e[l];
        r || (e[l] = r = [], r.span = 0), r.span + n.span > 24 && r.length ? r[r.length - 1].span += 24 - r.span : r.span += n.span, r.push(n);
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
}, Ao = { key: 0 }, Do = { key: 1 };
function Mo(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("el-descriptions-item"), a = Vue.resolveComponent("el-descriptions"), i = Vue.resolveComponent("el-collapse-item"), u = Vue.resolveComponent("el-collapse");
  return Vue.openBlock(), Vue.createBlock(u, {
    modelValue: n.activeNames,
    "onUpdate:modelValue": t[0] || (t[0] = (c) => n.activeNames = c),
    class: Vue.normalizeClass(["x-info", { "hide-header": l.hideHeader }])
  }, {
    default: Vue.withCtx(() => [
      (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(l.blocks, (c, V) => (Vue.openBlock(), Vue.createBlock(i, {
        key: V,
        title: V,
        name: V
      }, {
        default: Vue.withCtx(() => [
          Vue.createVNode(a, {
            column: o.column,
            border: o.border
          }, {
            default: Vue.withCtx(() => [
              (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(c, (p) => (Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({
                key: p.prop
              }, p), Vue.createSlots({
                default: Vue.withCtx(() => [
                  p.slot ? (Vue.openBlock(), Vue.createElementBlock("span", Ao, [
                    Vue.renderSlot(e.$slots, p.slot, Vue.normalizeProps(Vue.guardReactiveProps({ data: o.data, field: p, value: l.calcValue(o.data, p) })), void 0, !0)
                  ])) : (Vue.openBlock(), Vue.createElementBlock("span", Do, Vue.toDisplayString(l.calcValue(o.data, p)), 1))
                ]),
                _: 2
              }, [
                o.labelSlot ? {
                  name: "label",
                  fn: Vue.withCtx(() => [
                    Vue.renderSlot(e.$slots, "label", {
                      label: p.label
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
const zo = /* @__PURE__ */ m(To, [["render", Mo], ["__scopeId", "data-v-0c3b67a5"]]), Io = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zo
}, Symbol.toStringTag, { value: "Module" })), Ro = {
  name: "XLooper",
  props: {
    compName: String,
    items: Array
  }
}, Fo = { key: 1 };
function Xo(e, t, o, s, n, l) {
  return Vue.openBlock(), Vue.createElementBlock("div", null, [
    (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(o.items, (r, a) => (Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(o.compName), Vue.mergeProps({ key: a }, r), {
      default: Vue.withCtx(() => [
        r.slot || e.$attrs.slot ? Vue.renderSlot(e.$slots, "default", {
          key: 0,
          item: r
        }) : (Vue.openBlock(), Vue.createElementBlock("span", Fo, Vue.toDisplayString(r.text), 1))
      ]),
      _: 2
    }, 1040))), 128))
  ]);
}
const Uo = /* @__PURE__ */ m(Ro, [["render", Xo]]), Lo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Uo
}, Symbol.toStringTag, { value: "Module" })), qo = {
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
function Wo(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("van-icon"), a = Vue.resolveComponent("van-pagination");
  return Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ ...e.$attrs, ...e.mobilePagination || {} }, {
    modelValue: o.query.page,
    "onUpdate:modelValue": t[0] || (t[0] = (i) => o.query.page = i),
    "items-per-page": o.query.limit,
    "page-count": l.pageCount,
    "total-items": o.total
  }), {
    "prev-text": Vue.withCtx(() => [
      Vue.createVNode(r, { name: "arrow-left" })
    ]),
    "next-text": Vue.withCtx(() => [
      Vue.createVNode(r, { name: "arrow" })
    ]),
    page: Vue.withCtx(({ text: i }) => [
      Vue.createTextVNode(Vue.toDisplayString(i), 1)
    ]),
    _: 1
  }, 16, ["modelValue", "items-per-page", "page-count", "total-items"]);
}
const Ho = /* @__PURE__ */ m(qo, [["render", Wo]]), Jo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ho
}, Symbol.toStringTag, { value: "Module" })), Ko = {
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
function Yo(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("el-pagination");
  return Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({
    background: "",
    layout: "total, sizes, prev, pager, next, jumper"
  }, { ...e.$attrs, ...e.pcPagination || {} }, {
    "current-page": o.query.page,
    "onUpdate:currentPage": t[0] || (t[0] = (a) => o.query.page = a),
    "page-size": o.query.limit,
    "onUpdate:pageSize": t[1] || (t[1] = (a) => o.query.limit = a),
    "page-count": l.pageCount,
    total: o.total
  }), null, 16, ["current-page", "page-size", "page-count", "total"]);
}
const Zo = /* @__PURE__ */ m(Ko, [["render", Yo]]), Go = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zo
}, Symbol.toStringTag, { value: "Module" })), Qo = {
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
function en(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("van-picker"), a = Vue.resolveComponent("van-popup");
  return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
    Vue.createElementVNode("span", {
      onClick: t[0] || (t[0] = (i) => e.$emit("show")),
      class: Vue.normalizeClass(`x-picker__${o.modelValue ? "value" : "placeholder"}`)
    }, Vue.toDisplayString(o.modelValue || o.placeholder), 3),
    Vue.createVNode(a, Vue.mergeProps({
      class: "x-picker",
      round: "",
      position: "bottom"
    }, e.$attrs, {
      show: l.visible,
      "onUpdate:show": t[2] || (t[2] = (i) => l.visible = i)
    }), {
      default: Vue.withCtx(() => [
        Vue.createVNode(r, Vue.mergeProps(e.$attrs, {
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
const tn = /* @__PURE__ */ m(Qo, [["render", en]]), on = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tn
}, Symbol.toStringTag, { value: "Module" })), nn = {
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
    formatOptions: y.formatOptions
  }
};
function ln(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("van-radio"), a = Vue.resolveComponent("van-radio-group");
  return Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ class: "mobile-x-radios" }, e.$attrs, { direction: o.direction }), {
    default: Vue.withCtx(() => [
      (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(l.formatOptions(o.options, this), (i) => (Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps(e.$attrs, {
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
const sn = /* @__PURE__ */ m(nn, [["render", ln]]), rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sn
}, Symbol.toStringTag, { value: "Module" })), an = {
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
    formatOptions: y.formatOptions
  }
};
function un(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("el-radio-group");
  return Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({ class: "pc-x-radios" }, l.attrs, {
    modelValue: o.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (a) => e.$emit("update:modelValue", a))
  }), {
    default: Vue.withCtx(() => [
      (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(l.formatOptions(o.options, this), (a) => (Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(o.button ? "el-radio-button" : "el-radio"), Vue.mergeProps(l.attrs, {
        key: a[o.text],
        label: a[o.value]
      }), {
        default: Vue.withCtx(() => [
          Vue.createTextVNode(Vue.toDisplayString(a[o.text]), 1)
        ]),
        _: 2
      }, 1040, ["label"]))), 128))
    ]),
    _: 1
  }, 16, ["modelValue"]);
}
const cn = /* @__PURE__ */ m(an, [["render", un]]), dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cn
}, Symbol.toStringTag, { value: "Module" })), pn = {
  name: "MobileXRow",
  props: {
    cols: {
      type: Array,
      default: []
    }
  }
}, mn = { key: 1 };
function Vn(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("MobileXCol"), a = Vue.resolveComponent("van-row");
  return Vue.openBlock(), Vue.createBlock(a, { class: "mobile-x-row" }, {
    default: Vue.withCtx(() => [
      (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(o.cols, (i, u) => (Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps(i, { key: u }), {
        default: Vue.withCtx(() => [
          i.slot || e.$attrs.slot ? Vue.renderSlot(e.$slots, i.slot || e.$attrs.slot, {
            key: 0,
            col: i
          }) : (Vue.openBlock(), Vue.createElementBlock("span", mn, Vue.toDisplayString(i.text), 1))
        ]),
        _: 2
      }, 1040))), 128)),
      o.cols.length === 0 ? Vue.renderSlot(e.$slots, "default", { key: 0 }) : Vue.createCommentVNode("", !0)
    ]),
    _: 3
  });
}
const hn = /* @__PURE__ */ m(pn, [["render", Vn]]), fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hn
}, Symbol.toStringTag, { value: "Module" })), _n = {
  name: "PcXRow",
  props: {
    cols: {
      type: Array,
      default: []
    }
  }
}, bn = { key: 1 };
function gn(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("pc-x-col"), a = Vue.resolveComponent("el-row");
  return Vue.openBlock(), Vue.createBlock(a, { class: "pc-x-row" }, {
    default: Vue.withCtx(() => [
      (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(o.cols, (i, u) => (Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps(i, { key: u }), {
        default: Vue.withCtx(() => [
          i.slot || e.$attrs.slot ? Vue.renderSlot(e.$slots, i.slot || e.$attrs.slot, {
            key: 0,
            col: i
          }) : (Vue.openBlock(), Vue.createElementBlock("span", bn, Vue.toDisplayString(i.text), 1))
        ]),
        _: 2
      }, 1040))), 128)),
      o.cols.length === 0 ? Vue.renderSlot(e.$slots, "default", { key: 0 }) : Vue.createCommentVNode("", !0)
    ]),
    _: 3
  });
}
const vn = /* @__PURE__ */ m(_n, [["render", gn]]), kn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vn
}, Symbol.toStringTag, { value: "Module" })), le = async (e, t, o) => {
  o.loading = !0;
  const s = t == null ? void 0 : t.trim(), { text: n = "text", value: l = "value", labelTexts: r, params: a = {} } = o;
  a.attributes = [...new Set(a.attributes || [...r || [], n, l])], a.limit = a.limit || 20, s && (a.where = a.where || {}, a.where[n] = a.where[n] || {}, a.where[n]["[Op.like]"] = `%${s}%`);
  const i = await e.search(o.modelName, a);
  o.options.splice(0, o.options.length, ...i.data), o.loading = !1;
}, yn = (e, t) => !t.labelTexts || !t.labelTexts.length ? e[t.text] : t.labelTexts.map((s) => e[s])[0], Cn = (e, t) => !t.labelTexts || t.labelTexts.length < 2 ? "" : "(" + t.labelTexts.map((s) => e[s]).slice(1).join(" - ") + ")", Sn = {
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
        this._options = y.formatOptions(this.options, this);
      }
    }
  },
  created() {
    this.modelName && this.remoteSearch();
  },
  methods: {
    formatOptions: y.formatOptions,
    remoteSearch(e) {
      if (!this.modelName)
        return this._options;
      le(this.$api.restful, e, this);
    },
    onClick(e) {
      e.target.classList.contains("van-overlay") || (this.visible = !0);
    }
  }
};
function wn(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("XPicker");
  return Vue.openBlock(), Vue.createElementBlock("div", {
    onClick: t[5] || (t[5] = (...a) => l.onClick && l.onClick(...a)),
    class: "mobile-x-select"
  }, [
    Vue.createVNode(r, Vue.mergeProps(e.$attrs, {
      modelValue: l.formattedModelValue,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.$emit("update:modelValue", a.selectedValues[0])),
      show: n.visible,
      columns: n._options,
      onClick: t[1] || (t[1] = Vue.withModifiers(() => {
      }, ["stop"])),
      onShow: t[2] || (t[2] = (a) => n.visible = !0),
      onCancel: t[3] || (t[3] = (a) => n.visible = !1),
      onConfirm: t[4] || (t[4] = (a) => n.visible = !1)
    }), null, 16, ["modelValue", "show", "columns"])
  ]);
}
const Bn = /* @__PURE__ */ m(Sn, [["render", wn]]), $n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bn
}, Symbol.toStringTag, { value: "Module" }));
const xn = {
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
        this._options = y.formatOptions(this.options, this);
      }
    }
  },
  created() {
    this.modelName && this.remoteSearch();
  },
  methods: {
    formatOptions: y.formatOptions,
    remoteSearch(e) {
      if (!this.remote && !this.modelName)
        return this._options;
      le(this.$api.restful, e, this);
    },
    calcMainLabel(e) {
      return yn(e, this);
    },
    calcRemarkLabel(e) {
      return Cn(e, this);
    }
  }
}, Nn = { key: 1 }, En = { class: "main" }, On = { class: "remark" };
function jn(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("el-option"), a = Vue.resolveComponent("el-select");
  return Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({
    class: "pc-x-select",
    loading: n.loading
  }, e.$attrs, {
    filterable: o.filterable,
    clearable: "",
    "remote-method": e.$attrs.remoteMethod || l.remoteSearch
  }), {
    default: Vue.withCtx(() => [
      (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(n._options, (i) => (Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps(e.$attrs, {
        key: i[o.text],
        label: i[o.text],
        value: i[o.value]
      }), {
        default: Vue.withCtx(() => [
          e.$slots.default ? Vue.renderSlot(e.$slots, "default", { key: 0 }, void 0, !0) : (Vue.openBlock(), Vue.createElementBlock("span", Nn, [
            Vue.createElementVNode("span", En, Vue.toDisplayString(l.calcMainLabel(i)), 1),
            Vue.createElementVNode("span", On, Vue.toDisplayString(l.calcRemarkLabel(i)), 1)
          ]))
        ]),
        _: 2
      }, 1040, ["label", "value"]))), 128))
    ]),
    _: 3
  }, 16, ["loading", "filterable", "remote-method"]);
}
const Pn = /* @__PURE__ */ m(xn, [["render", jn], ["__scopeId", "data-v-51ae17c5"]]), Tn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pn
}, Symbol.toStringTag, { value: "Module" }));
const An = {
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
}, Dn = { class: "mobile-x-table" }, Mn = {
  key: 1,
  class: "mobile-x-table card"
}, zn = ["onClick"], In = ["value", "checked"], Rn = { class: "label" }, Fn = { class: "value" }, Xn = { class: "operates" }, Un = ["value", "checked"], Ln = {
  key: 2,
  class: "index"
}, qn = { class: "title" }, Wn = { class: "operates" };
function Hn(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("x-table-tools"), a = Vue.resolveComponent("van-checkbox"), i = Vue.resolveComponent("van-button"), u = Vue.resolveComponent("XCol"), c = Vue.resolveComponent("XRow"), V = Vue.resolveComponent("van-swipe-cell"), p = Vue.resolveComponent("van-cell"), b = Vue.resolveComponent("van-list"), g = Vue.resolveComponent("x-pagination"), B = Vue.resolveComponent("XInfo"), v = Vue.resolveComponent("van-popup");
  return Vue.openBlock(), Vue.createElementBlock("div", Dn, [
    e.hideTools !== "" && e.hideTools !== !0 ? (Vue.openBlock(), Vue.createBlock(r, Vue.mergeProps({ key: 0 }, e._attrs, {
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
    (o.mode || e._attrs.mode) === "card" ? (Vue.openBlock(), Vue.createElementBlock("div", Mn, [
      (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(e._data, (d, f) => (Vue.openBlock(), Vue.createElementBlock("div", {
        key: f,
        class: "row",
        onClick: (h) => l.handleClickCard(f)
      }, [
        Vue.createVNode(V, {
          onOpen: (h) => n.scope = { row: d, $index: f }
        }, {
          right: Vue.withCtx(() => [
            Vue.createElementVNode("div", Xn, [
              Vue.renderSlot(e.$slots, "operates-prefix", { scope: n.scope }, void 0, !0),
              e.hideOperates ? Vue.createCommentVNode("", !0) : (Vue.openBlock(), Vue.createBlock(c, {
                key: 0,
                gutter: 10
              }, {
                default: Vue.withCtx(() => [
                  Vue.createVNode(u, { span: 12 }, {
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
                  Vue.createVNode(u, { span: 12 }, {
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
            l.hasSelection ? (Vue.openBlock(), Vue.createBlock(a, {
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
            }, null, 40, In)) : Vue.createCommentVNode("", !0),
            (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(l.cols, (h, $) => (Vue.openBlock(), Vue.createElementBlock("div", {
              key: $,
              class: "field"
            }, [
              Vue.createElementVNode("span", Rn, Vue.toDisplayString(h.label) + ":", 1),
              Vue.createElementVNode("span", Fn, Vue.toDisplayString(e.calcValue(d, h)), 1)
            ]))), 128))
          ]),
          _: 2
        }, 1032, ["onOpen"])
      ], 8, zn))), 128))
    ])) : (o.mode || e._attrs.mode) === "list" ? (Vue.openBlock(), Vue.createBlock(b, Vue.mergeProps({
      key: 2,
      class: "mobile-x-table list"
    }, e._attrs, {
      onLoad: t[6] || (t[6] = (d) => e.$emit("search"))
    }), {
      default: Vue.withCtx(() => [
        (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(e._data, (d, f) => (Vue.openBlock(), Vue.createBlock(p, {
          key: f,
          "is-link": "",
          onClick: (h) => l.handleShowDetail(d, f)
        }, {
          default: Vue.withCtx(() => [
            l.hasSelection ? (Vue.openBlock(), Vue.createBlock(a, {
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
            }, null, 40, Un)) : Vue.createCommentVNode("", !0),
            l.hasIndex ? (Vue.openBlock(), Vue.createElementBlock("span", Ln, Vue.toDisplayString(f + 1), 1)) : Vue.createCommentVNode("", !0),
            Vue.createElementVNode("span", qn, Vue.toDisplayString(l.calcTitle(d)), 1)
          ]),
          _: 2
        }, 1032, ["onClick"]))), 128))
      ]),
      _: 1
    }, 16)) : Vue.createCommentVNode("", !0),
    e._query && e._total && (e.onSearch || e._listen.search) ? (Vue.openBlock(), Vue.createBlock(g, {
      key: 3,
      query: e._query,
      total: e._total,
      onSearch: t[7] || (t[7] = (d) => e._emit("search"))
    }, null, 8, ["query", "total"])) : Vue.createCommentVNode("", !0),
    Vue.createVNode(v, {
      show: n.popupVisible,
      "onUpdate:show": t[8] || (t[8] = (d) => n.popupVisible = d),
      position: "bottom",
      style: { height: "70%" }
    }, {
      default: Vue.withCtx(() => [
        Vue.createVNode(B, {
          data: n.scope.row,
          fields: l.infoFields,
          "value-align": "right"
        }, null, 8, ["data", "fields"]),
        Vue.createElementVNode("div", Wn, [
          Vue.renderSlot(e.$slots, "operates-prefix", { scope: n.scope }, void 0, !0),
          e.hideOperates ? Vue.createCommentVNode("", !0) : (Vue.openBlock(), Vue.createBlock(c, {
            key: 0,
            gutter: 10
          }, {
            default: Vue.withCtx(() => [
              Vue.createVNode(u, { span: 12 }, {
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
              Vue.createVNode(u, { span: 12 }, {
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
const Jn = /* @__PURE__ */ m(An, [["render", Hn], ["__scopeId", "data-v-d230adfe"]]), Kn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jn
}, Symbol.toStringTag, { value: "Module" })), {
  h: Yn
} = Vue, {
  resolveComponent: Zn
} = x, Y = {
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
}, C = {
  XSelect: ["eq", "ne", "in", "notIn"],
  ElDatePicker: ["eq", "gt", "gte", "lt", "lte", "between"],
  ElInputNumber: ["eq", "ne", "gt", "gte", "lt", "lte", "between"],
  ElInput: ["eq", "ne", "like", "notLike", "between"]
};
C["x-select"] = C.XSelect;
C["el-date-picker"] = C.ElDatePicker;
C["el-input-number"] = C.ElInputNumber;
C["el-input"] = C.ElInput;
function Gn() {
  const {
    columns: e,
    visible: t,
    conditions: o,
    expression: s,
    handleSearch: n,
    handleReset: l,
    handleAdd: r,
    handleDelete: a,
    handleSelectField: i,
    handleSelectOp: u
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
    "onUpdate:modelValue": (c) => this.visible = c,
    onCancel: l,
    onSubmit: n
  }), {
    default: () => [Vue.createVNode(Vue.resolveComponent("el-button"), {
      type: "primary",
      icon: "plus",
      onClick: r
    }, {
      default: () => [Vue.createTextVNode("新增条件")]
    }), Vue.createVNode("div", {
      class: "conditions"
    }, [o.map((c, V) => Vue.createVNode("div", {
      class: "condition flex-center",
      key: c.no
    }, [Vue.createVNode(Vue.resolveComponent("el-button"), {
      type: "danger",
      size: "small",
      plain: !0,
      onClick: () => a(V)
    }, {
      default: () => [Vue.createTextVNode("X")]
    }), Vue.createVNode("span", {
      class: "title"
    }, [c.no]), Vue.createVNode("div", {
      class: "expression"
    }, [Vue.createVNode(Vue.resolveComponent("pc-x-select"), {
      modelValue: c.prop,
      onChange: (p) => i(c, p),
      options: e,
      text: "label",
      value: "prop"
    }, null), Vue.createVNode(Vue.resolveComponent("pc-x-select"), {
      modelValue: c.op,
      onChange: (p) => u(c, p),
      options: c.ops
    }, null), Qn(this, c)])]))]), Vue.createVNode(Vue.resolveComponent("el-input"), Vue.mergeProps({
      type: "textarea",
      autosize: {
        minRows: 3,
        maxRows: 10
      },
      placeholder: "分组条件表达式"
    }, {
      modelValue: s,
      "onUpdate:modelValue": (c) => this.expression = c
    }), null)]
  });
}
function Qn(e, t) {
  const o = (n) => Yn(Zn(e, t.component), Object.assign({
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
const { storage: E } = StardustBrowser, el = {
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
  render: Gn,
  methods: {
    open() {
      this.visible = !0;
    },
    close() {
      this.visible = !1;
    },
    saveCache() {
      E.local.setJson(this.key, {
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
      const e = E.local.getJson(this.key, this.config);
      (t = e.conditions) == null || t.forEach((s) => {
        const { prop: n, op: l, value: r } = s;
        s.item = this.columns.find((a) => a.prop === n), this.handleSelectField(s, n), this.handleSelectOp(s, l), s.ops = C[s.component].map((a) => Y[a]), s.value = r;
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
      E.local.remove(this.key), Object.assign(this, {
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
        for (let r of s.items)
          if (typeof r == "string") {
            const a = this.conditions.find((i) => i.no === r * 1);
            if (a) {
              if (!this.checkFilled(a))
                throw "条件不完整: " + r;
            } else
              throw "条件不存在: " + r;
            l.push(this.parseCondition(a));
          } else {
            const a = {};
            l.push(a), t(r, a);
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
          const r = l.shift();
          if (["and", "or"].includes(r)) {
            if (n.type && n.type !== r)
              throw "串联不同逻辑表达式请使用小括号区分";
            n.type = r;
          } else if (r === "(") {
            const a = { type: "", items: [] };
            n.items.push(a), a._parent = n, o(a, l);
            break;
          } else
            r === ")" ? (o(n._parent, l), delete n._parent) : n.items.push(r);
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
      e.component = n.comp || o && "XSelect" || s === "number" && "ElInputNumber" || "ElInput", e.ops = C[e.component].map((l) => Y[l]), e.op = e.ops[0].value, n.comp === "ElDatePicker" && (e.component = "ElInput", e.item.formAttrs.type = "date");
    },
    handleSelectOp(e, t) {
      e.op = t, t === "between" ? e.value = ["", ""] : ["in", "notIn"].includes(t) && (e.value = []), !["between", "in", "notIn"].includes(t) && Array.isArray(t) && (e.value = "");
    }
  }
}, F = /* @__PURE__ */ m(el, [["__scopeId", "data-v-e9987bfb"]]), tl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: F
}, Symbol.toStringTag, { value: "Module" }));
const ol = {
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
}, nl = (e) => (Vue.pushScopeId("data-v-16737013"), e = e(), Vue.popScopeId(), e), ll = { class: "table" }, sl = ["title", "onClick"], rl = /* @__PURE__ */ nl(() => /* @__PURE__ */ Vue.createElementVNode("span", { class: "unit" }, "px", -1));
function al(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("el-button"), a = Vue.resolveComponent("ElCheckbox"), i = Vue.resolveComponent("el-input-number"), u = Vue.resolveComponent("el-tab-pane"), c = Vue.resolveComponent("el-tabs"), V = Vue.resolveComponent("el-popover");
  return o.visible ? (Vue.openBlock(), Vue.createBlock(V, Vue.mergeProps({
    key: 0,
    placement: "bottom",
    trigger: "hover",
    "popper-class": "table-settings"
  }, e.$attrs), {
    reference: Vue.withCtx(() => [
      Vue.createVNode(r, {
        class: "settings-reference",
        icon: "Setting"
      })
    ]),
    default: Vue.withCtx(() => [
      Vue.createVNode(c, {
        modelValue: n.activeName,
        "onUpdate:modelValue": t[0] || (t[0] = (p) => n.activeName = p)
      }, {
        default: Vue.withCtx(() => [
          Vue.createVNode(u, {
            name: "columns",
            label: "展示列"
          }, {
            default: Vue.withCtx(() => [
              Vue.createVNode(r, {
                type: "warning",
                icon: "Close",
                onClick: l.handleResetColumns
              }, {
                default: Vue.withCtx(() => [
                  Vue.createTextVNode("重置")
                ]),
                _: 1
              }, 8, ["onClick"]),
              Vue.createElementVNode("div", ll, [
                (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(n.columns, (p, b) => (Vue.openBlock(), Vue.createElementBlock("div", {
                  key: b,
                  class: "row flex-center"
                }, [
                  Vue.createVNode(r, {
                    disabled: b === 0,
                    circle: "",
                    icon: "arrow-up",
                    type: "primary",
                    class: "move",
                    onClick: (g) => l.handleMove(p, b, -1)
                  }, null, 8, ["disabled", "onClick"]),
                  Vue.createVNode(r, {
                    disabled: b === n.columns.length - 1,
                    circle: "",
                    icon: "arrow-down",
                    type: "success",
                    class: "move",
                    onClick: (g) => l.handleMove(p, b, 1)
                  }, null, 8, ["disabled", "onClick"]),
                  Vue.createVNode(a, {
                    modelValue: p.show,
                    "onUpdate:modelValue": (g) => p.show = g,
                    onChange: l.update
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"]),
                  Vue.createElementVNode("span", {
                    class: "label overflow-text",
                    title: p.label,
                    onClick: (g) => l.handleToggle(p)
                  }, Vue.toDisplayString(p.label), 9, sl),
                  Vue.createVNode(i, {
                    modelValue: p.width,
                    "onUpdate:modelValue": (g) => p.width = g,
                    onChange: l.update
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"]),
                  rl
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
const X = /* @__PURE__ */ m(ol, [["render", al], ["__scopeId", "data-v-16737013"]]), il = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: X
}, Symbol.toStringTag, { value: "Module" }));
const ul = {
  name: "PcXTable",
  inheritAttrs: !1,
  props: {
    ..._.props()
  },
  emits: [
    ..._.emits()
  ],
  components: { Searcher: F, Settings: X },
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
}, cl = { key: 1 }, dl = ["value", "checked"], pl = { key: 1 };
function ml(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("searcher"), a = Vue.resolveComponent("pc-x-icon"), i = Vue.resolveComponent("settings"), u = Vue.resolveComponent("pc-x-table-tools"), c = Vue.resolveComponent("el-table-column"), V = Vue.resolveComponent("el-button"), p = Vue.resolveComponent("el-table"), b = Vue.resolveComponent("x-pagination"), g = Vue.resolveComponent("el-collapse-item"), B = Vue.resolveComponent("el-collapse"), v = Vue.resolveDirective("loading");
  return Vue.openBlock(), Vue.createElementBlock("div", {
    class: Vue.normalizeClass(["pc-x-table", { fullscreen: n.isFullscreen, "hide-header": e.hideHeader }])
  }, [
    Vue.createVNode(r, {
      ref: "searcher",
      uid: e._uid,
      columns: e.searcherColumns,
      config: e.searcherConfig,
      onSearch: e.handleSearch
    }, null, 8, ["uid", "columns", "config", "onSearch"]),
    Vue.createVNode(B, {
      modelValue: n.activeNames,
      "onUpdate:modelValue": t[3] || (t[3] = (d) => n.activeNames = d),
      class: Vue.normalizeClass((e.useCollapse ? "use" : "no") + "-collapse")
    }, {
      default: Vue.withCtx(() => [
        Vue.createVNode(g, {
          name: n.activeNames[0]
        }, {
          title: Vue.withCtx(() => [
            e.$slots["collapse-title"] ? Vue.renderSlot(e.$slots, "collapse-title", { key: 0 }) : (Vue.openBlock(), Vue.createElementBlock("span", cl, Vue.toDisplayString(e.title), 1))
          ]),
          default: Vue.withCtx(() => [
            e.hideTools !== "" && e.hideTools !== !0 ? (Vue.openBlock(), Vue.createBlock(u, Vue.mergeProps({ key: 0 }, e._attrs, {
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
                Vue.createVNode(a, {
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
            Vue.withDirectives((Vue.openBlock(), Vue.createBlock(p, Vue.mergeProps({ ref: "tableRef" }, e.elTableAttrs, {
              onHeaderDragend: e.handleHeaderDragend,
              onSelectionChange: e.handleSelectionChange,
              onSortChange: e.handleSortChange
            }), {
              default: Vue.withCtx(() => [
                (Vue.openBlock(!0), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(e._visibleColumns, (d, f) => (Vue.openBlock(), Vue.createBlock(c, Vue.mergeProps(d, {
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
                        onChange: t[1] || (t[1] = (...$) => e.handleCheckedChange && e.handleCheckedChange(...$))
                      }, null, 40, dl)) : d.slot ? Vue.renderSlot(e.$slots, d.slot, {
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
                          "onUpdate:modelValue": ($) => h.row[d.prop] = $,
                          disabled: !h.row.editable || !h.row.isEditing
                        }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : (Vue.openBlock(), Vue.createElementBlock("span", pl, Vue.toDisplayString(e.calcValue(h.row, d)), 1))
                      ], 64))
                    ]),
                    key: "0"
                  }
                ]), 1040, ["min-width", "align", "resizable", "show-overflow-tooltip"]))), 128)),
                e.hideOperates ? Vue.createCommentVNode("", !0) : (Vue.openBlock(), Vue.createBlock(c, {
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
                        Vue.createVNode(a, { name: "edit" }),
                        Vue.createTextVNode(" 编辑 ")
                      ]),
                      _: 2
                    }, 1040, ["onClick"])) : Vue.createCommentVNode("", !0),
                    e.canSave(d.row) ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(V, Vue.mergeProps({ key: 1 }, { type: "success", ...e._attrs["row-edit-btn"] }, {
                      disabled: d.row._loading,
                      onClick: (f) => e._emit("row-edit", d)
                    }), {
                      default: Vue.withCtx(() => [
                        Vue.createVNode(a, { name: "collection" }),
                        Vue.createTextVNode(" 保存 ")
                      ]),
                      _: 2
                    }, 1040, ["disabled", "onClick"])), [
                      [v, d.row._loading]
                    ]) : Vue.createCommentVNode("", !0),
                    e.canCancelEdit(d.row) ? (Vue.openBlock(), Vue.createBlock(V, Vue.mergeProps({ key: 2 }, { type: "warning", ...e._attrs["cancel-edit-btn"] }, {
                      onClick: (f) => e._emit("cancel-edit", d)
                    }), {
                      default: Vue.withCtx(() => [
                        Vue.createVNode(a, { name: "refresh-left" }),
                        Vue.createTextVNode(" 取消编辑 ")
                      ]),
                      _: 2
                    }, 1040, ["onClick"])) : Vue.createCommentVNode("", !0),
                    e.canDelete(d.row) ? (Vue.openBlock(), Vue.createBlock(V, Vue.mergeProps({ key: 3 }, { type: "danger", ...e._attrs["delete-btn"] }, {
                      onClick: (f) => e._emit("delete", d)
                    }), {
                      default: Vue.withCtx(() => [
                        Vue.createVNode(a, { name: "DeleteFilled" }),
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
              [v, e._loading]
            ]),
            e._query && e._total && (e.onSearch || e._listen.search) ? (Vue.openBlock(), Vue.createBlock(b, {
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
const Vl = /* @__PURE__ */ m(ul, [["render", ml]]), hl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vl
}, Symbol.toStringTag, { value: "Module" }));
const fl = {
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
}, _l = { class: "mobile-x-table-tools" }, bl = { class: "tools" }, gl = { class: "tools-end" };
function vl(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("mobile-x-icon"), a = Vue.resolveComponent("van-button"), i = Vue.resolveDirective("domid");
  return Vue.openBlock(), Vue.createElementBlock("div", _l, [
    Vue.createElementVNode("div", bl, [
      Vue.renderSlot(e.$slots, "tools-prefix", {}, void 0, !0),
      e.$attrs.onSearch ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ key: 0 }, { type: "success", ...o.searchBtn }, {
        onClick: t[0] || (t[0] = (u) => e.$emit("search"))
      }), {
        default: Vue.withCtx(() => [
          Vue.createVNode(r, { name: "search" }),
          Vue.createTextVNode(" 查询 ")
        ]),
        _: 1
      }, 16)), [
        [i, o.domids.search]
      ]) : Vue.createCommentVNode("", !0),
      e.$attrs.onAdd ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ key: 1 }, { type: "primary", ...o.addBtn }, {
        onClick: t[1] || (t[1] = (u) => e.$emit("add"))
      }), {
        default: Vue.withCtx(() => [
          Vue.createVNode(r, { name: "circle-plus-filled" }),
          Vue.createTextVNode(" 新增 ")
        ]),
        _: 1
      }, 16)), [
        [i, o.domids.add]
      ]) : Vue.createCommentVNode("", !0),
      e.$attrs.onMultiEdit ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ key: 2 }, { type: "warning", ...o.multiEditBtn }, {
        onClick: t[2] || (t[2] = (u) => e.$emit("multi-edit"))
      }), {
        default: Vue.withCtx(() => [
          Vue.createVNode(r, { name: "edit" }),
          Vue.createTextVNode(" 编辑 ")
        ]),
        _: 1
      }, 16)), [
        [i, o.domids["multi-edit"]]
      ]) : Vue.createCommentVNode("", !0),
      e.$attrs.onMultiDelete ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ key: 3 }, { type: "danger", ...o.multiDeleteBtn }, {
        onClick: t[3] || (t[3] = (u) => e.$emit("multi-delete"))
      }), {
        default: Vue.withCtx(() => [
          Vue.createVNode(r, { name: "DeleteFilled" }),
          Vue.createTextVNode(" 批量删除 ")
        ]),
        _: 1
      }, 16)), [
        [i, o.domids["multi-delete"]]
      ]) : Vue.createCommentVNode("", !0),
      e.$attrs.onExport ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ key: 4 }, { type: "success", ...o.exportBtn }, {
        onClick: t[4] || (t[4] = (u) => e.$emit("export"))
      }), {
        default: Vue.withCtx(() => [
          Vue.createVNode(r, { name: "printer" }),
          Vue.createTextVNode(" 导出 ")
        ]),
        _: 1
      }, 16)), [
        [i, o.domids.export]
      ]) : Vue.createCommentVNode("", !0),
      e.$attrs.onSearchExport ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ key: 5 }, { type: "success", ...o.exportBtn }, {
        onClick: t[5] || (t[5] = (u) => e.$emit("search-export"))
      }), {
        default: Vue.withCtx(() => [
          Vue.createVNode(r, { name: "printer" }),
          Vue.createTextVNode(" 查询导出 ")
        ]),
        _: 1
      }, 16)), [
        [i, o.domids["search-export"]]
      ]) : Vue.createCommentVNode("", !0),
      e.$attrs.onImport ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ key: 6 }, { type: "warning", ...o.importBtn }, {
        onClick: t[6] || (t[6] = (u) => e.$emit("import"))
      }), {
        default: Vue.withCtx(() => [
          Vue.createVNode(r, { name: "UploadFilled" }),
          Vue.createTextVNode(" 导入 ")
        ]),
        _: 1
      }, 16)), [
        [i, o.domids.import]
      ]) : Vue.createCommentVNode("", !0),
      Vue.renderSlot(e.$slots, "tools-suffix", {}, void 0, !0),
      Vue.createElementVNode("div", gl, [
        Vue.renderSlot(e.$slots, "tools-end", {}, void 0, !0)
      ])
    ])
  ]);
}
const kl = /* @__PURE__ */ m(fl, [["render", vl], ["__scopeId", "data-v-442404e2"]]), yl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kl
}, Symbol.toStringTag, { value: "Module" }));
const Cl = {
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
}, Sl = { class: "tools" }, wl = { class: "tools-end flex-center" };
function Bl(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("pc-x-icon"), a = Vue.resolveComponent("el-button"), i = Vue.resolveComponent("el-card"), u = Vue.resolveDirective("domid");
  return Vue.openBlock(), Vue.createBlock(i, {
    shadow: "hover",
    "body-style": { padding: "10px" },
    class: "pc-x-table-tools"
  }, {
    default: Vue.withCtx(() => [
      Vue.createElementVNode("div", Sl, [
        Vue.renderSlot(e.$slots, "tools-prefix", {}, void 0, !0),
        e.$attrs.onSearch ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ key: 0 }, { type: "success", ...o.searchBtn }, {
          onClick: t[0] || (t[0] = (c) => e.$emit("search"))
        }), {
          default: Vue.withCtx(() => [
            Vue.createVNode(r, { name: "search" }),
            Vue.createTextVNode(" 查询 ")
          ]),
          _: 1
        }, 16)), [
          [u, o.domids.search]
        ]) : Vue.createCommentVNode("", !0),
        e.$attrs.onAdd ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ key: 1 }, { type: "primary", ...o.addBtn }, {
          onClick: t[1] || (t[1] = (c) => e.$emit("add"))
        }), {
          default: Vue.withCtx(() => [
            Vue.createVNode(r, { name: "circle-plus-filled" }),
            Vue.createTextVNode(" 新增 ")
          ]),
          _: 1
        }, 16)), [
          [u, o.domids.add]
        ]) : Vue.createCommentVNode("", !0),
        e.$attrs.onMultiEdit ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ key: 2 }, { type: "warning", ...o.multiEditBtn }, {
          onClick: t[2] || (t[2] = (c) => e.$emit("multi-edit"))
        }), {
          default: Vue.withCtx(() => [
            Vue.createVNode(r, { name: "edit" }),
            Vue.createTextVNode(" 编辑 ")
          ]),
          _: 1
        }, 16)), [
          [u, o.domids["multi-edit"]]
        ]) : Vue.createCommentVNode("", !0),
        e.$attrs.onMultiDelete ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ key: 3 }, { type: "danger", ...o.multiDeleteBtn }, {
          onClick: t[3] || (t[3] = (c) => e.$emit("multi-delete"))
        }), {
          default: Vue.withCtx(() => [
            Vue.createVNode(r, { name: "DeleteFilled" }),
            Vue.createTextVNode(" 批量删除 ")
          ]),
          _: 1
        }, 16)), [
          [u, o.domids["multi-delete"]]
        ]) : Vue.createCommentVNode("", !0),
        e.$attrs.onExport ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ key: 4 }, { type: "success", ...o.exportBtn }, {
          onClick: t[4] || (t[4] = (c) => e.$emit("export"))
        }), {
          default: Vue.withCtx(() => [
            Vue.createVNode(r, { name: "printer" }),
            Vue.createTextVNode(" 导出 ")
          ]),
          _: 1
        }, 16)), [
          [u, o.domids.export]
        ]) : Vue.createCommentVNode("", !0),
        e.$attrs.onSearchExport ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ key: 5 }, { type: "success", ...o.exportBtn }, {
          onClick: t[5] || (t[5] = (c) => e.$emit("search-export"))
        }), {
          default: Vue.withCtx(() => [
            Vue.createVNode(r, { name: "printer" }),
            Vue.createTextVNode(" 查询导出 ")
          ]),
          _: 1
        }, 16)), [
          [u, o.domids["search-export"]]
        ]) : Vue.createCommentVNode("", !0),
        e.$attrs.onImport ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(a, Vue.mergeProps({ key: 6 }, { type: "warning", ...o.importBtn }, {
          onClick: t[6] || (t[6] = (c) => e.$emit("import"))
        }), {
          default: Vue.withCtx(() => [
            Vue.createVNode(r, { name: "UploadFilled" }),
            Vue.createTextVNode(" 导入 ")
          ]),
          _: 1
        }, 16)), [
          [u, o.domids.import]
        ]) : Vue.createCommentVNode("", !0),
        Vue.renderSlot(e.$slots, "tools-suffix", {}, void 0, !0),
        Vue.createElementVNode("div", wl, [
          Vue.renderSlot(e.$slots, "tools-end", {}, void 0, !0)
        ])
      ])
    ]),
    _: 3
  });
}
const $l = /* @__PURE__ */ m(Cl, [["render", Bl], ["__scopeId", "data-v-02d70f98"]]), xl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $l
}, Symbol.toStringTag, { value: "Module" }));
function Nl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Vue.isVNode(e);
}
const {
  h: El
} = Vue, {
  resolveComponent: Ol
} = x, jl = (e) => {
  const t = e._data.length > 0 && e.selected.size === e._data.length, o = !t && e.selected.size > 0, s = (n) => {
    n ? e._data.forEach((r, a) => e.selected.add(a)) : e.selected.clear();
    const l = n ? e._data.slice() : [];
    e.handleSelectionChange(l);
  };
  return Vue.createVNode(Vue.resolveComponent("el-checkbox"), {
    modelValue: t,
    indeterminate: o,
    onChange: s
  }, null);
}, Pl = (e, t) => {
  const {
    rowIndex: o,
    rowData: s
  } = e, n = () => {
    t.selected.has(o) ? t.selected.delete(o) : t.selected.add(o);
    const l = [...t.selected].map((r) => t._data[r]);
    t.handleSelectionChange(l);
  };
  return Vue.createVNode(Vue.resolveComponent("el-checkbox"), {
    modelValue: t.selected.has(o),
    onChange: n
  }, null);
}, Tl = (e, t) => {
  const {
    page: o,
    limit: s
  } = t._query;
  return (o - 1) * s + e.rowIndex + 1;
}, Al = (e, t) => {
  const {
    rowIndex: o
  } = e;
  return Vue.createVNode("input", {
    type: "radio",
    value: o,
    checked: o === t.checked,
    onChange: t.handleCheckedChange
  }, null);
}, N = ([e, t, o, s, n, l]) => {
  const {
    rowIndex: r,
    rowData: a
  } = e, i = () => {
    t._emit(o, {
      $index: r,
      row: a
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
}, Dl = (e, t) => {
  if (t.canEdit(e.rowData))
    return N([e, t, "edit", "warning", "edit", "编辑"]);
}, Ml = (e, t) => {
  if (t.canRowEdit(e.rowData))
    return N([e, t, "row-edit", "success", "collection", "保存"]);
}, zl = (e, t) => {
  if (t.canCancelEdit(e.rowData))
    return N([e, t, "cancel-edit", "warning", "refresh-left", "取消编辑"]);
}, Il = (e, t) => {
  if (t.canDelete(e.rowData))
    return N([e, t, "delete", "danger", "DeleteFilled", "删除"]);
}, Rl = (e, t) => {
  const {
    _attrs: o,
    $slots: s
  } = t, {
    slotRenderers: n = {}
  } = o;
  if (e.type === "selection")
    return (l) => Pl(l, t);
  if (e.type === "index")
    return (l) => Tl(l, t);
  if (e.type === "radio")
    return (l) => Al(l, t);
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
      rowData: r,
      column: a
    } = l;
    if (a.comp === "ElSwitch" || t.table.isRowEdit && r.isEditing && (a.visible !== !1 || a.canEdit)) {
      const c = (p) => {
        r[a.prop] = p;
      }, V = a.comp || "ElInput";
      return El(Ol(t, V), {
        ...a,
        ...a.formAttrs,
        modelValue: r[a.prop],
        onInput: c,
        disabled: !r.editable || !r.isEditing
      });
    }
    const i = t.calcValue(l.rowData, e), {
      showOverflowTooltip: u
    } = a.tableAttrs || {};
    return u ? Vue.createVNode(Vue.resolveComponent("el-tooltip"), {
      content: i
    }, Nl(i) ? i : {
      default: () => [i]
    }) : i;
  };
}, Fl = (e, t) => {
  const {
    _attrs: o,
    $slots: s
  } = t, n = e.map((l, r) => {
    const {
      tableAttrs: a = {}
    } = l, i = {
      ...l,
      key: r,
      dataKey: l.prop,
      title: l.label,
      width: l.width || a.width || l.minWidth || a.minWidth || l.maxWidth || a.maxWidth,
      align: l.align || o.tableAlign || "center"
    };
    return i.type === "selection" && (i.width = i.width || 46, i.headerCellRenderer = jl(t)), i.cellRenderer = Rl(i, t), i;
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
      }, [s["operates-prefix"] ? s["operates-prefix"]() : null, Dl(l, t), Ml(l, t), zl(l, t), Il(l, t), s["operates-suffix"] ? s["operates-suffix"]() : null]);
    }
  }), n;
}, Xl = {
  convertColumnsForTableV2: Fl
};
const Ul = {
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
  components: { Searcher: F, Settings: X },
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
    convertColumnsForTableV2: Xl.convertColumnsForTableV2
  }
}, Ll = { key: 1 };
function ql(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("Searcher"), a = Vue.resolveComponent("x-icon"), i = Vue.resolveComponent("Settings"), u = Vue.resolveComponent("x-table-tools"), c = Vue.resolveComponent("el-table-v2"), V = Vue.resolveComponent("el-auto-resizer"), p = Vue.resolveComponent("x-pagination"), b = Vue.resolveComponent("el-collapse-item"), g = Vue.resolveComponent("el-collapse"), B = Vue.resolveDirective("loading");
  return Vue.openBlock(), Vue.createElementBlock("div", {
    class: Vue.normalizeClass(["pc-x-table-v2", { fullscreen: n.isFullscreen }])
  }, [
    Vue.createVNode(r, {
      ref: "searcher",
      uid: e._uid,
      columns: e.searcherColumns,
      config: e.searcherConfig,
      onSearch: t[0] || (t[0] = (v) => e._emit("search", v))
    }, null, 8, ["uid", "columns", "config"]),
    Vue.createVNode(g, {
      modelValue: n.activeNames,
      "onUpdate:modelValue": t[3] || (t[3] = (v) => n.activeNames = v),
      class: Vue.normalizeClass((e.useCollapse ? "use" : "no") + "-collapse")
    }, {
      default: Vue.withCtx(() => [
        Vue.createVNode(b, {
          name: n.activeNames[0]
        }, {
          title: Vue.withCtx(() => [
            e.$slots["collapse-title"] ? Vue.renderSlot(e.$slots, "collapse-title", { key: 0 }) : (Vue.openBlock(), Vue.createElementBlock("span", Ll, Vue.toDisplayString(e.title), 1))
          ]),
          default: Vue.withCtx(() => [
            e.hideTools !== "" && e.hideTools !== !0 ? (Vue.openBlock(), Vue.createBlock(u, Vue.mergeProps({ key: 0 }, e._attrs, {
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
                Vue.createVNode(a, {
                  name: "FullScreen",
                  class: "full",
                  onClick: e.handleToggleFullscreen
                }, null, 8, ["onClick"]),
                Vue.createVNode(i, {
                  modelValue: n.settings,
                  "onUpdate:modelValue": t[1] || (t[1] = (v) => n.settings = v),
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
              default: Vue.withCtx(({ width: v, height: d }) => [
                Vue.withDirectives((Vue.openBlock(), Vue.createBlock(c, Vue.mergeProps({
                  ref: "tableRef",
                  "header-height": 46,
                  "row-height": 40
                }, e.elTableAttrs, {
                  data: e._data,
                  columns: l.convertColumnsForTableV2(e._visibleColumns, this),
                  fixed: o.fixed,
                  width: v,
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
                  [B, e._loading]
                ])
              ]),
              _: 3
            }, 8, ["style"]),
            e._query && e._total && (e.onSearch || e._listen.search) ? (Vue.openBlock(), Vue.createBlock(p, {
              key: 1,
              query: e._query,
              total: e._total,
              onSearch: t[2] || (t[2] = (v) => e._emit("search"))
            }, null, 8, ["query", "total"])) : Vue.createCommentVNode("", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["modelValue", "class"])
  ], 2);
}
const Wl = /* @__PURE__ */ m(Ul, [["render", ql]]), Hl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wl
}, Symbol.toStringTag, { value: "Module" }));
const O = ["selection", "radio"], Jl = {
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
      O.includes(t) && (e.columns.find((o) => o.type === "_index") || e.columns.unshift({ type: "_index" }), e.columns.find((o) => o.type === t) || e.columns.unshift({
        prop: "_index",
        type: t,
        fixed: "left",
        width: 55,
        label: t === "selection" ? "" : "单选"
      })), e.columns = e.columns.filter((o) => this.selectMode === o.type || !O.includes(o.type));
    },
    handleSubmit() {
      const { table: e, selectMode: t } = this;
      if (O.includes(t)) {
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
}, Kl = { class: "x-table-viewer" };
function Yl(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("x-dialog");
  return Vue.openBlock(), Vue.createElementBlock("div", Kl, [
    Vue.createVNode(r, Vue.mergeProps(l._dialogAttrs, {
      modelValue: o.visible,
      "onUpdate:modelValue": t[1] || (t[1] = (a) => e.$emit("update:visible", a)),
      title: o.title,
      "before-close": l.handleBeforeClose,
      onSubmit: l.handleSubmit,
      onCancel: l.handleCancel
    }), {
      default: Vue.withCtx(() => [
        (Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(o.useTableV2 ? "x-table-v2" : "x-table"), Vue.mergeProps({
          tref: l.table.tableRef,
          "onUpdate:tref": t[0] || (t[0] = (a) => l.table.tableRef = a),
          table: l.table
        }, l._tableAttrs, {
          onSearch: o.controller.handleSearch
        }), null, 16, ["tref", "table", "onSearch"]))
      ]),
      _: 1
    }, 16, ["modelValue", "title", "before-close", "onSubmit", "onCancel"])
  ]);
}
const Zl = /* @__PURE__ */ m(Jl, [["render", Yl], ["__scopeId", "data-v-f5d31400"]]), Gl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zl
}, Symbol.toStringTag, { value: "Module" })), Ql = {
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
}, es = { class: "x-tinymce" }, ts = ["id", "innerHTML"];
function os(e, t, o, s, n, l) {
  return Vue.openBlock(), Vue.createElementBlock("div", es, [
    Vue.createElementVNode("textarea", {
      id: n.id,
      innerHTML: o.modelValue
    }, null, 8, ts)
  ]);
}
const ns = /* @__PURE__ */ m(Ql, [["render", os]]), ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ns
}, Symbol.toStringTag, { value: "Module" }));
const ss = {
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
}, rs = (e) => (Vue.pushScopeId("data-v-e756c8fc"), e = e(), Vue.popScopeId(), e), as = { class: "mask" }, is = /* @__PURE__ */ rs(() => /* @__PURE__ */ Vue.createElementVNode("div", { class: "el-upload__text" }, [
  /* @__PURE__ */ Vue.createTextVNode(" 将文件拖到此处，或"),
  /* @__PURE__ */ Vue.createElementVNode("em", null, "点击上传")
], -1)), us = {
  key: 0,
  class: "path"
};
function cs(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("x-icon"), a = Vue.resolveComponent("el-upload");
  return Vue.openBlock(), Vue.createBlock(a, {
    drag: "",
    "show-file-list": !1,
    action: n.action,
    accept: o.accept,
    multiple: o.multiple,
    "on-success": l.onSuccess,
    class: "x-file-uploader"
  }, {
    default: Vue.withCtx(() => [
      Vue.createElementVNode("div", as, [
        Vue.createVNode(r, { name: "upload-filled" }),
        is
      ]),
      l.filepath ? (Vue.openBlock(), Vue.createElementBlock("div", us, Vue.toDisplayString(o.modelValue), 1)) : Vue.createCommentVNode("", !0)
    ]),
    _: 1
  }, 8, ["action", "accept", "multiple", "on-success"]);
}
const ds = /* @__PURE__ */ m(ss, [["render", cs], ["__scopeId", "data-v-e756c8fc"]]), ps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ds
}, Symbol.toStringTag, { value: "Module" }));
const ms = {
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
}, Vs = (e) => (Vue.pushScopeId("data-v-c8f36d63"), e = e(), Vue.popScopeId(), e), hs = { class: "mask" }, fs = /* @__PURE__ */ Vs(() => /* @__PURE__ */ Vue.createElementVNode("div", { class: "el-upload__text" }, [
  /* @__PURE__ */ Vue.createTextVNode(" 将图片拖到此处，或"),
  /* @__PURE__ */ Vue.createElementVNode("em", null, "点击上传")
], -1));
function _s(e, t, o, s, n, l) {
  const r = Vue.resolveComponent("el-image"), a = Vue.resolveComponent("x-icon"), i = Vue.resolveComponent("el-upload");
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
      l.image ? (Vue.openBlock(), Vue.createBlock(r, {
        key: 0,
        src: l.image,
        alt: "upload-image",
        fit: "cover"
      }, null, 8, ["src"])) : Vue.createCommentVNode("", !0),
      Vue.createElementVNode("div", hs, [
        Vue.createVNode(a, { name: "upload-filled" }),
        fs
      ])
    ]),
    _: 1
  }, 8, ["action", "multiple", "on-success"]);
}
const bs = /* @__PURE__ */ m(ms, [["render", _s], ["__scopeId", "data-v-c8f36d63"]]), gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bs
}, Symbol.toStringTag, { value: "Module" }));
const { h: vs } = Vue, { resolveComponent: ks } = y.funcs, Z = /* @__PURE__ */ Object.assign({ "./components/xactionsheet/xactionsheet.vue": ie, "./components/xautorows/xautorows.vue": Ve, "./components/xbutton/mobile.vue": be, "./components/xbutton/pc.vue": ye, "./components/xchart/xchart.vue": $e, "./components/xcheckboxs/mobile.vue": Me, "./components/xcheckboxs/pc.vue": Fe, "./components/xcol/mobile.vue": qe, "./components/xcol/pc.vue": Ke, "./components/xdialog/mobile.vue": Qe, "./components/xdialog/pc.vue": lt, "./components/xdistrictselect/xdistrictselect.vue": it, "./components/xform/mobile.vue": gt, "./components/xform/pc.vue": St, "./components/xformitem/mobile.vue": xt, "./components/xformitem/pc.vue": Et, "./components/xicon/mobile.vue": At, "./components/xicon/pc.vue": Rt, "./components/xinfo/xinfo.vue": Io, "./components/xlooper/xlooper.vue": Lo, "./components/xpagination/mobile.vue": Jo, "./components/xpagination/pc.vue": Go, "./components/xpicker/xpicker.vue": on, "./components/xradios/mobile.vue": rn, "./components/xradios/pc.vue": dn, "./components/xrow/mobile.vue": fn, "./components/xrow/pc.vue": kn, "./components/xselect/mobile.vue": $n, "./components/xselect/pc.vue": Tn, "./components/xtable/mobile.vue": Kn, "./components/xtable/pc.vue": hl, "./components/xtable/searcher.vue": tl, "./components/xtable/settings.vue": il, "./components/xtabletools/mobile.vue": yl, "./components/xtabletools/pc.vue": xl, "./components/xtablev2/xtablev2.vue": Hl, "./components/xtableviewer/xtableviewer.vue": Gl, "./components/xtinymce/xtinymce.vue": ls, "./components/xuploader/xfileuploader.vue": ps, "./components/xuploader/ximageuploader.vue": gs }), ys = (e) => ({
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
    return vs(ks(this, this.name), {
      platform: this.platform,
      ...this.$attrs
    }, this.$slots);
  }
}), D = (() => {
  const e = {};
  for (const n in Z) {
    const l = Z[n].default;
    /X[A-Z][a-z]/.test(l.name) && (e[l.name] = l);
  }
  const t = Object.keys(e), o = [...new Set(t.map((n) => n.replace(/(pc|mobile)/i, "")))], s = {};
  for (const n of t)
    /(pc|mobile)/i.test(n) && (s[n] = e[n]);
  for (const n of o)
    t.find((l) => /(pc|mobile)/i.test(l) && l.toLowerCase().includes(n.toLowerCase())) ? s[n] = ys(n) : s[n] = e[n];
  return s;
})(), Cs = (e, t) => {
  for (let o in D)
    e.component(o, D[o]);
}, Ss = {
  ...D,
  ...y,
  install: Cs
};
export {
  Ss as default
};
