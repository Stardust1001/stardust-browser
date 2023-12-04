var StardustBrowser = (() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // index.js
  var stardust_browser_exports = {};
  __export(stardust_browser_exports, {
    Fetcher: () => fetcher_default,
    UIExecutor: () => ui_executor_default,
    clipboard: () => clipboard_default,
    cookies: () => cookies_default,
    dbsdk: () => dbsdk_default2,
    default: () => stardust_browser_default,
    excel: () => excel_default,
    file: () => file_default,
    fullscreen: () => fullscreen_default,
    funcs: () => funcs_default,
    local: () => local2,
    selector: () => selector_default,
    session: () => session2,
    storage: () => storage_default
  });

  // dbsdk/api/common.js
  var createCommon = (req = request) => {
    const uploadFiles = (data) => {
      return req({
        url: "/common/upload_files",
        method: "post",
        data
      });
    };
    const getSettings = (params) => __async(void 0, null, function* () {
      return req({
        url: "/common/get_settings",
        method: "get",
        params
      });
    });
    const updateSettings = (data) => __async(void 0, null, function* () {
      return req({
        url: "/common/update_settings",
        method: "post",
        data
      });
    });
    const callSql = (data) => __async(void 0, null, function* () {
      return req({
        url: "/common/call_sql",
        method: "post",
        data
      });
    });
    return {
      uploadFiles,
      getSettings,
      updateSettings,
      callSql
    };
  };
  var common_default = createCommon;

  // dbsdk/api/dbsdk.js
  var createDbsdk = (rest = restful) => {
    class Database {
      constructor(database2) {
        this._database = database2;
      }
      database(name) {
        this._database = database;
        return this;
      }
      table(name) {
        return new Table(this._database, name);
      }
    }
    class Table {
      constructor(database2, table) {
        this._database = database2;
        this._table = table;
        this.model = this._database + "." + this._table;
      }
      get(id) {
        return rest.get(this.model, id);
      }
      add(data) {
        return rest.add(this.model, data);
      }
      search(data) {
        return rest.search(this.model, data);
      }
      update(id, data) {
        return rest.update(this.model, id, data);
      }
      remove(id) {
        return rest.remove(this.model, id);
      }
      func(data) {
        return rest.func(this.model, data);
      }
      batch(data) {
        data.operations.forEach((ele) => {
          ele.model = ele.model || this.model;
        });
        return rest.batch(data);
      }
    }
    return {
      Database,
      Table
    };
  };
  var dbsdk_default = createDbsdk;

  // dbsdk/validates.js
  var validateModel = (model) => {
    if (!model) {
      throw "model \u9519\u8BEF";
    }
  };
  var validateId = (id) => {
    const type = typeof id;
    if (!id || type !== "number" && type !== "string") {
      throw "id \u9519\u8BEF";
    }
  };
  var validateData = (data) => {
    if (typeof data !== "object") {
      throw "data \u9519\u8BEF";
    }
  };
  var validateGet = (model, id) => {
    validateModel(model);
    validateId(id);
  };
  var validateAdd = (model, data) => {
    validateModel(model);
    validateData(data);
  };
  var validateSearch = (model, data) => {
    validateModel(model);
    validateData(data);
  };
  var validateUpdate = (model, id, data) => {
    validateModel(model);
    validateId(id);
    validateData(data);
  };
  var validateRemove = (model, id) => {
    validateModel(model);
    validateId(id);
  };
  var validateFunc = (model, data) => {
    validateModel(model);
    validateData(data);
    if (data.length < 2) {
      throw "data \u9519\u8BEF";
    }
  };
  var validates_default = {
    validateModel,
    validateId,
    validateData,
    validateGet,
    validateAdd,
    validateSearch,
    validateUpdate,
    validateRemove,
    validateFunc
  };

  // dbsdk/api/restful.js
  var createRestful = (req = request) => {
    return {
      get(model, id) {
        validates_default.validateGet(model, id);
        return req({
          url: `/restful?model=${model}&id=${id}`,
          method: "get"
        });
      },
      add(model, data) {
        validates_default.validateAdd(model, data);
        return req({
          url: `/restful/add?model=${model}`,
          method: "post",
          data
        });
      },
      search(model, data) {
        validates_default.validateSearch(model, data);
        return req({
          url: `/restful/search?model=${model}`,
          method: "post",
          data
        });
      },
      update(model, id, data) {
        validates_default.validateUpdate(model, id, data);
        return req({
          url: `/restful?model=${model}&id=${id}`,
          method: "put",
          data
        });
      },
      remove(model, id) {
        validates_default.validateRemove(model, id);
        return req({
          url: `/restful?model=${model}&id=${id}`,
          method: "delete"
        });
      },
      func(model, data) {
        validates_default.validateFunc(model, data);
        return req({
          url: `/restful/func?model=${model}`,
          method: "post",
          data
        });
      },
      batch(data) {
        validates_default.validateData(data);
        return req({
          url: `/restful/batch`,
          method: "post",
          data
        });
      }
    };
  };
  var restful_default = createRestful;

  // dbsdk/api/index.js
  var api_default = {
    createCommon: common_default,
    createDbsdk: dbsdk_default,
    createRestful: restful_default
  };

  // dbsdk/index.js
  var dbsdk_default2 = {
    api: api_default,
    validates: validates_default
  };

  // clipboard.js
  var writeText = (text) => {
    try {
      return navigator.clipboard.writeText(text);
    } catch (e) {
    }
    const input = document.createElement("input");
    input.value = text;
    input.style.opacity = 0;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
  };
  var readText = () => {
    try {
      return navigator.clipboard.readText();
    } catch (e) {
      return null;
    }
  };
  var clipboard_default = {
    writeText,
    readText
  };

  // cookies.js
  var cookies = {
    all() {
      return document.cookie.split("; ").map((e) => e.split("=")).reduce((dict, [k, v]) => __spreadProps(__spreadValues({}, dict), { [k]: v }));
    },
    get(key) {
      return this.all()[key];
    },
    set(key, value) {
      document.cookie = key + "=" + value;
    },
    delete(key) {
      document.cookie = key + "= ; max-age=0";
    },
    clear() {
      Object.keys(this.all()).forEach(this.delete);
    },
    setRaw(str) {
      str.split("; ").map((e) => e.split("=")).forEach((e) => this.set(e[0], e[1]));
    }
  };
  var cookies_default = cookies;

  // Export2Excel.js
  function generateArray(table) {
    var out = [];
    var rows = table.querySelectorAll("tr");
    var ranges = [];
    for (var R = 0; R < rows.length; ++R) {
      var outRow = [];
      var row = rows[R];
      var columns = row.querySelectorAll("td");
      for (var C = 0; C < columns.length; ++C) {
        var cell = columns[C];
        var colspan = cell.getAttribute("colspan");
        var rowspan = cell.getAttribute("rowspan");
        var cellValue = cell.innerText;
        if (cellValue !== "" && cellValue == +cellValue)
          cellValue = +cellValue;
        ranges.forEach(function(range) {
          if (R >= range.s.r && R <= range.e.r && outRow.length >= range.s.c && outRow.length <= range.e.c) {
            for (var i = 0; i <= range.e.c - range.s.c; ++i)
              outRow.push(null);
          }
        });
        if (rowspan || colspan) {
          rowspan = rowspan || 1;
          colspan = colspan || 1;
          ranges.push({
            s: {
              r: R,
              c: outRow.length
            },
            e: {
              r: R + rowspan - 1,
              c: outRow.length + colspan - 1
            }
          });
        }
        ;
        outRow.push(cellValue !== "" ? cellValue : null);
        if (colspan)
          for (var k = 0; k < colspan - 1; ++k)
            outRow.push(null);
      }
      out.push(outRow);
    }
    return [out, ranges];
  }
  function datenum(v, date1904) {
    if (date1904)
      v += 1462;
    var epoch = Date.parse(v);
    return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1e3);
  }
  function sheet_from_array_of_arrays(data, opts) {
    var ws = {};
    var range = {
      s: {
        c: 1e7,
        r: 1e7
      },
      e: {
        c: 0,
        r: 0
      }
    };
    for (var R = 0; R != data.length; ++R) {
      for (var C = 0; C != data[R].length; ++C) {
        if (range.s.r > R)
          range.s.r = R;
        if (range.s.c > C)
          range.s.c = C;
        if (range.e.r < R)
          range.e.r = R;
        if (range.e.c < C)
          range.e.c = C;
        var cell = {
          v: data[R][C]
        };
        if (cell.v == null)
          continue;
        var cell_ref = XLSX.utils.encode_cell({
          c: C,
          r: R
        });
        if (typeof cell.v === "number")
          cell.t = "n";
        else if (typeof cell.v === "boolean")
          cell.t = "b";
        else if (cell.v instanceof Date) {
          cell.t = "n";
          cell.z = XLSX.SSF._table[14];
          cell.v = datenum(cell.v);
        } else
          cell.t = "s";
        ws[cell_ref] = cell;
      }
    }
    if (range.s.c < 1e7)
      ws["!ref"] = XLSX.utils.encode_range(range);
    return ws;
  }
  function Workbook() {
    if (!(this instanceof Workbook))
      return new Workbook();
    this.SheetNames = [];
    this.Sheets = {};
  }
  function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i)
      view[i] = s.charCodeAt(i) & 255;
    return buf;
  }
  function export_table_to_excel(selector2) {
    var theTable = typeof selector2 === "string" ? document.querySelector(selector2) : selector2;
    var oo = generateArray(theTable);
    var ranges = oo[1];
    var data = oo[0];
    var ws_name = "SheetJS";
    var wb = new Workbook(), ws = sheet_from_array_of_arrays(data);
    ws["!merges"] = ranges;
    wb.SheetNames.push(ws_name);
    wb.Sheets[ws_name] = ws;
    var wbout = XLSX.write(wb, {
      bookType: "xlsx",
      bookSST: false,
      type: "binary"
    });
    saveAs(new Blob([s2ab(wbout)], {
      type: "application/octet-stream"
    }), "test.xlsx");
  }
  function export_json_to_excel({
    multiHeader = [],
    header,
    data,
    filename,
    merges = [],
    autoWidth = true,
    bookType = "xlsx"
  } = {}) {
    filename = filename || "excel-list";
    data = [...data];
    data.unshift(header);
    for (let i = multiHeader.length - 1; i > -1; i--) {
      data.unshift(multiHeader[i]);
    }
    var ws_name = "SheetJS";
    var wb = new Workbook(), ws = sheet_from_array_of_arrays(data);
    if (merges.length > 0) {
      if (!ws["!merges"])
        ws["!merges"] = [];
      merges.forEach((item) => {
        ws["!merges"].push(XLSX.utils.decode_range(item));
      });
    }
    if (autoWidth) {
      const colWidth = data.map((row) => row.map((val) => {
        if (val == null) {
          return {
            "wch": 10
          };
        } else if (val.toString().charCodeAt(0) > 255) {
          return {
            "wch": val.toString().length * 2
          };
        } else {
          return {
            "wch": val.toString().length
          };
        }
      }));
      let result = colWidth[0];
      for (let i = 1; i < colWidth.length; i++) {
        for (let j = 0; j < colWidth[i].length; j++) {
          if (result[j]["wch"] < colWidth[i][j]["wch"]) {
            result[j]["wch"] = colWidth[i][j]["wch"];
          }
        }
      }
      ws["!cols"] = result;
    }
    wb.SheetNames.push(ws_name);
    wb.Sheets[ws_name] = ws;
    var wbout = XLSX.write(wb, {
      bookType,
      bookSST: false,
      type: "binary"
    });
    saveAs(new Blob([s2ab(wbout)], {
      type: "application/octet-stream"
    }), `${filename}.${bookType}`);
  }

  // excel.js
  var exportTable2Excel = (id) => {
    export_table_to_excel(id);
  };
  var export2Excel = (options) => {
    export_json_to_excel(options);
  };
  var export2Csv = (options) => {
    let { header, data, filename = "table" } = options;
    const integerReg = /^\d{6,}$/;
    data = data.map((row) => {
      if (!row || typeof row !== "object")
        return row;
      if (Array.isArray(row)) {
        return row.map((value) => integerReg.test(value) ? value + "	" : value);
      }
      for (let key in row) {
        if (integerReg.test(row[key])) {
          row[key] += "	";
        }
      }
      return row;
    });
    const csv = window.Papa.unparse({
      data,
      fields: header
    });
    const blob = new Blob([csv], { type: "application/csv" });
    window.saveAs(
      blob,
      filename.toLowerCase().endsWith(".csv") ? filename : filename + ".csv"
    );
  };
  var excel_default = {
    exportTable2Excel,
    export2Excel,
    export2Csv
  };

  // ui-executor.js
  var EventGenerator = class {
    constructor(config) {
      this.config = config;
      this.base = __spreadValues({
        bubbles: true,
        cancelable: true,
        view: window
      }, config == null ? void 0 : config.base);
    }
    keyboard(name, options = {}) {
      let { key, code } = options;
      if (key && !code) {
        code = key.charCodeAt(0);
      }
      if (code && !key) {
        key = String.fromCharCode(code);
      }
      return new KeyboardEvent(name, __spreadValues(__spreadProps(__spreadValues({}, this.base), {
        key,
        code,
        location: 0,
        ctrlKey: false,
        shiftKey: false,
        altKey: false,
        metaKey: false,
        repeat: false,
        isComposing: false
      }), options));
    }
    mouse(name, options, target) {
      const rect = (target == null ? void 0 : target.getBoundingClientRect()) || {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
      const cx = rect.x + rect.width / 2;
      const cy = rect.y + rect.height / 2;
      return new MouseEvent(name, __spreadValues(__spreadProps(__spreadValues({}, this.base), {
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
        which: null
      }), options));
    }
    wheel(options = {}) {
      return new WheelEvent(__spreadValues(__spreadProps(__spreadValues({}, this.base), {
        deltaX: 0,
        deltaY: 0,
        deltaZ: 0,
        deltaMode: 0
      }), options));
    }
    focus(options = {}) {
      return new FocusEvent(__spreadValues(__spreadProps(__spreadValues({}, this.base), {
        relatedTarget: null
      }), options));
    }
    input(text, options = {}) {
      return new InputEvent(__spreadValues(__spreadProps(__spreadValues({}, this.base), {
        data: text,
        isComposing: false
      }), options));
    }
    composition(text, options = {}) {
      return new CompositionEvent(__spreadValues(__spreadProps(__spreadValues({}, this.base), {
        data: text
      }), options));
    }
    touch(name, options, target) {
      const rect = (target == null ? void 0 : target.getBoundingClientRect()) || {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
      const cx = rect.x + rect.width / 2;
      const cy = rect.y + rect.height / 2;
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
      });
      return new TouchEvent(__spreadValues(__spreadProps(__spreadValues({}, this.base), {
        type: name,
        changedTouches: [point],
        targetTouches: [point],
        touches: [point]
      }), options));
    }
  };
  var UIExecutor = class {
    constructor(config = {}) {
      this.config = __spreadValues({
        interval: 20,
        slow: 0
      }, config);
      this.generator = new EventGenerator();
      this.data = {};
      this._isInIf = false;
      this._maskStyle = `
      position: fixed;
      z-index: 999998;
      width: 100vw;
      height: 100vh;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.3);
      pointer-events: none;
    ` + (config.maskStyle || "");
    }
    waitFor(_0) {
      return __async(this, arguments, function* (selector2, options = {}) {
        options = __spreadValues({
          visible: true,
          interval: this.config.interval
        }, options);
        let node;
        while (true) {
          node = typeof selector2 === "string" ? $one(selector2) : selector2;
          if (node) {
            if (!options.visible || node.getBoundingClientRect().width) {
              break;
            }
          }
          yield this.sleep(options.interval);
        }
        return node;
      });
    }
    waitOr(selectors, options = {}) {
      return Promise.any(selectors.map((s) => this.waitFor(selector, options)));
    }
    waitForURL(_0) {
      return __async(this, arguments, function* (url, options = {}) {
        options = __spreadValues({
          interval: this.config.interval
        }, options);
        while (true) {
          if (typeof url === "string") {
            if (location.href.includes(url))
              return true;
          } else if (typeof url === "function") {
            if (url(location.href))
              return true;
          } else if (url instanceof RegExp) {
            if (url.test(location.href))
              return true;
          } else {
            throw "\u4E0D\u652F\u6301\u7684 url \u7C7B\u578B";
          }
          yield this.sleep(options.interval);
        }
      });
    }
    waitForFunction(_0) {
      return __async(this, arguments, function* (func, options = {}) {
        options = __spreadValues({
          interval: this.config.interval
        }, options);
        while (true) {
          try {
            if (func(this))
              break;
          } catch (e) {
          }
          yield this.sleep(options.interval);
        }
      });
    }
    waitForNext() {
      return __async(this, arguments, function* (title = "\u4E0B\u4E00\u6B65", options = {}) {
        const mask = document.createElement("div");
        mask.id = "webot-mask";
        mask.style.cssText += this._maskStyle + (options.maskStyle || "");
        yield this.waitFor("body");
        document.body.appendChild(mask);
        const button = document.createElement("div");
        const root = options.root || "";
        document.querySelector(root || "body").appendChild(button);
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
    `;
        if (!root) {
          button.style.cssText += `
        position: fixed;
        right: 5px;
        bottom: 5px;
      `;
        }
        button.style.cssText += options.style || "";
        button.onmouseover = () => {
          button.style.opacity = 0.8;
        };
        button.onmouseout = () => {
          button.style.opacity = 1;
        };
        button.textContent = title;
        return new Promise((resolve) => {
          button.onclick = () => {
            button.remove();
            mask.remove();
            resolve();
          };
        });
      });
    }
    report(_0, _1) {
      return __async(this, arguments, function* (title, percent, options = {}, isDone = false) {
        if (typeof title === "function") {
          title = yield title(this);
        }
        let node = document.querySelector("#webot-ui-report-container");
        if (!node) {
          node = document.createElement("div");
          node.id = "webot-ui-report-container";
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
      `;
          node.onmouseover = () => {
            node.style.opacity = 0;
          };
          node.onmouseout = () => {
            node.style.opacity = 1;
          };
          const percentNode2 = document.createElement("div");
          percentNode2.id = "webot-ui-report-progress";
          percentNode2.style.cssText += `
        display: none;
        width: 250px;
        margin-right: 10px;
        background-color: #e3b326;
        height: 10px;
        border-radius: 10px;
        position: relative;
        overflow: hidden;
      `;
          const barNode = document.createElement("div");
          barNode.style.cssText += `
        position: absolute;
        left: 0;
        top: 0;
        height: 10px;
        background-color: #ff5722;
        width: 0;
      `;
          barNode.id = "webot-ui-report-progress-bar";
          percentNode2.appendChild(barNode);
          node.appendChild(percentNode2);
          const titleNode2 = document.createElement("span");
          titleNode2.id = "webot-ui-report-title";
          titleNode2.style.cssText += `
        color: darkred;
        font-weight: 600;
      `;
          node.appendChild(titleNode2);
          yield this.waitFor("body");
          document.body.appendChild(node);
        }
        node.style.cssText += options.style;
        const titleNode = node.querySelector("#webot-ui-report-title");
        titleNode.innerHTML = title;
        titleNode.style.cssText += options.titleStyle || "";
        const percentNode = node.querySelector("#webot-ui-report-progress");
        if (typeof percent === "number") {
          percentNode.style.display = "block";
          percentNode.style.cssText += options.progressStyle || "";
          const barNode = percentNode.querySelector("#webot-ui-report-progress-bar");
          barNode.style.cssText += options.barStyle || "";
          barNode.style.width = percent + "%";
        } else {
          percentNode.style.display = "none";
        }
        if (isDone)
          node.remove();
      });
    }
    sleep(ms) {
      return StardustJs.funcs.sleep(ms);
    }
    blur(_0) {
      return __async(this, arguments, function* (node, options = {}) {
        node = yield this.waitFor(node, options);
        node.blur();
      });
    }
    box(_0) {
      return __async(this, arguments, function* (node, options = {}) {
        node = yield this.waitFor(node, options);
        return node.getBoundingClientRect();
      });
    }
    clear(_0) {
      return __async(this, arguments, function* (node, options = {}) {
        node = yield this.waitFor(node, options);
        node.value = "";
      });
    }
    click(_0) {
      return __async(this, arguments, function* (node, options = {}) {
        node = yield this.waitFor(node, options);
        node.dispatchEvent(this.generator.mouse("click", options, node));
      });
    }
    dblclick(_0) {
      return __async(this, arguments, function* (node, options = {}) {
        options = __spreadValues({
          clickInterval: this.config.interval
        }, options);
        node = yield this.waitFor(node, options);
        node.dispatchEvent(this.generator.mouse("click", options, node));
        yield this.sleep(options.clickInterval);
        node.dispatchEvent(this.generator.mouse("click", options, node));
      });
    }
    keyboard(_0, _1) {
      return __async(this, arguments, function* (node, name, options = {}) {
        node = yield this.waitFor(node, options);
        node.dispatchEvent(this.generator.keyboard(name, options));
      });
    }
    eval(_0) {
      return __async(this, arguments, function* (func, args = {}) {
        if (typeof func === "function") {
          return func(this, args);
        }
        return window.eval(func);
      });
    }
    evalOn(_0, _1) {
      return __async(this, arguments, function* (node, func, options = {}) {
        node = yield this.waitFor(node, options);
        if (typeof func === "function") {
          return func(node);
        }
        return window.eval(func);
      });
    }
    evalOnAll(_0, _1) {
      return __async(this, arguments, function* (node, func, options = {}) {
        yield this.waitFor(node, options);
        const nodes = yield $all(node);
        if (typeof func === "function") {
          return func(nodes);
        }
        return window.eval(func);
      });
    }
    set(_0, _1, _2) {
      return __async(this, arguments, function* (node, attr, value, bySetter = false, options = {}) {
        if (typeof value === "function") {
          value = yield this.eval(value, options);
        }
        node = yield this.waitFor(node, options);
        if (bySetter) {
          node.setAttribute(attr, value);
        } else {
          node[attr] = value;
        }
      });
    }
    fill(_0, _1) {
      return __async(this, arguments, function* (node, text, options = {}) {
        options = __spreadValues({
          fillInterval: 10
        }, options);
        node = yield this.waitFor(node, options);
        this.focus(node);
        this.clear(node);
        for (let key of text) {
          yield this.sleep(options.fillInterval);
          this.keydown(node, key);
          this.keyup(node, key);
          node.value += key;
        }
      });
    }
    focus(_0) {
      return __async(this, arguments, function* (node, options = {}) {
        node = yield this.waitFor(node, options);
        node.focus();
        node.dispatchEvent(this.generator.focus());
      });
    }
    hover(_0) {
      return __async(this, arguments, function* (node, options = {}) {
        node = yield this.waitFor(node, options);
        node.dispatchEvent(this.generator.mouse("move", options, node));
      });
    }
    press(_0, _1) {
      return __async(this, arguments, function* (node, keys, options = {}) {
        options = __spreadValues({
          pressInterval: this.config.interval
        }, options);
        keys = Array.isArray(keys) ? keys : [keys];
        node = yield this.waitFor(node, options);
        for (let key of keys) {
          this.keydown(node, key, options);
          yield this.sleep(options.pressInterval);
          this.keyup(node, key, options);
          yield this.sleep(options.pressInterval);
        }
      });
    }
    select(_0, _1) {
      return __async(this, arguments, function* (node, value, options = {}) {
        node = yield this.waitFor(node, options);
        node.value = value;
        this.change(node, options);
      });
    }
    check(_0, _1) {
      return __async(this, arguments, function* (node, value, options = {}) {
        node = yield this.waitFor(node, options);
        node.checked = value;
        this.change(node, options);
      });
    }
    jump(_0) {
      return __async(this, arguments, function* (func, options = {}) {
        const url = yield this.eval(func, options);
        location.href = url;
      });
    }
    mouse(_0, _1) {
      return __async(this, arguments, function* (node, name, options = {}) {
        node = yield this.waitFor(node, options);
        node.dispatchEvent(this.generator.mouse(name, options, node));
      });
    }
    keyboard(_0, _1, _2) {
      return __async(this, arguments, function* (method, node, keys, options = {}) {
        options = __spreadValues({
          keyboardInterval: this.config.interval
        }, options);
        node = yield this.waitFor(node, options);
        for (let key of keys) {
          this["key" + method](node, key, options);
          yield this.sleep(options.keyboardInterval);
        }
      });
    }
    enter(node, options = {}) {
      this.press(node, "Enter", options);
    }
    view(_0) {
      return __async(this, arguments, function* (node, options = {}) {
        node = yield this.waitFor(node, options);
        node.scrollIntoViewIfNeeded();
      });
    }
    attr(_0, _1) {
      return __async(this, arguments, function* (node, name, options = {}) {
        node = yield this.waitFor(node, options);
        return node.getAttribute(name, options);
      });
    }
    call(_0, _1) {
      return __async(this, arguments, function* (node, method, options = {}) {
        node = yield this.waitFor(node, options);
        return node[method](options);
      });
    }
    html(_0) {
      return __async(this, arguments, function* (node, options = {}) {
        node = yield this.waitFor(node, options);
        return node.innerHTML;
      });
    }
    text(_0) {
      return __async(this, arguments, function* (node, options = {}) {
        node = yield this.waitFor(node, options);
        return node.innerText;
      });
    }
    content(_0) {
      return __async(this, arguments, function* (node, options = {}) {
        node = yield this.waitFor(node, options);
        return node.textContent;
      });
    }
    if(func, operations, ...props) {
      return __async(this, null, function* () {
        this._isInIf = true;
        const ok = yield this.eval(func, ...props);
        if (ok) {
          if (typeof operations === "function") {
            operations = yield operations(this, ...props);
          }
          yield this.execute(operations, ...props);
        }
      });
    }
    elseIf(func, operations, ...props) {
      return __async(this, null, function* () {
        const ok = yield this.eval(func, ...props);
        if (ok) {
          if (typeof operations === "function") {
            operations = yield operations(this, ...props);
          }
          yield this.execute(operations, ...props);
        }
      });
    }
    else(operations, ...props) {
      return __async(this, null, function* () {
        if (this._isInIf) {
          if (typeof operations === "function") {
            operations = yield operations(this, ...props);
          }
          yield this.execute(operations, ...props);
        }
        this._isInIf = false;
      });
    }
    switch(value, cases, ...props) {
      return __async(this, null, function* () {
        if (typeof value === "function") {
          value = yield value(this, ...props);
        }
        for (let [caseValue, operations] of cases) {
          if (typeof caseValue === "function") {
            caseValue = yield caseValue(this, ...props);
          }
          caseValue = Array.isArray(caseValue) ? caseValue : [caseValue];
          if (caseValue.includes(value)) {
            yield this.execute(operations, ...props);
            return;
          }
        }
        const last = cases[cases.length - 1];
        if (last[0] === "default") {
          yield this.execute(last[1], ...props);
        }
      });
    }
    promiseAll(operations) {
      return __async(this, null, function* () {
        if (typeof operations === "function") {
          operations = yield operations(this);
        }
        return Promise.all(operations.map((ele) => {
          return this[ele[0]](...ele.slice(1)).catch((err) => {
            console.error(err);
          });
        }));
      });
    }
    promiseRace(operations) {
      return __async(this, null, function* () {
        if (typeof operations === "function") {
          operations = yield operations(this);
        }
        return Promise.race(operations.map((ele) => {
          return this[ele[0]](...ele.slice(1)).catch((err) => {
            console.error(err);
          });
        }));
      });
    }
    promiseAny(operations) {
      return __async(this, null, function* () {
        if (typeof operations === "function") {
          operations = yield operations(this);
        }
        return Promise.any(operations.map((ele) => {
          return this[ele[0]](...ele.slice(1)).catch((err) => {
            console.error(err);
          });
        }));
      });
    }
    for(func, operations, ...props) {
      return __async(this, null, function* () {
        let items = func;
        if (typeof func === "function") {
          items = yield func(this, ...props);
        }
        if (typeof items === "number") {
          items = Array.from({ length: items }).map((_, i) => i);
        }
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          let ops = operations;
          if (typeof operations === "function") {
            ops = yield operations(this, item, i, ...props);
          }
          yield this.execute(ops, [item, i], ...props);
        }
      });
    }
    while(_0, _1) {
      return __async(this, arguments, function* (func, operations, options = {}) {
        let i = 0;
        while (true) {
          const ok = yield this.eval(func, options);
          if (!ok)
            break;
          let ops = operations;
          if (typeof operations === "function") {
            ops = yield operations(this, i++);
          }
          yield this.execute(ops);
        }
      });
    }
    dynamic(func) {
      return __async(this, null, function* () {
        const operations = yield this.eval(func);
        yield this.execute(operations);
      });
    }
    func(func, ...props) {
      return this.eval(func, ...props);
    }
    prompt(_0) {
      return __async(this, arguments, function* (node, options = {}) {
        options = __spreadValues({
          placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"
        }, options);
        node = yield this.waitFor(node, options);
        const value = window.prompt(options.placeholder);
        this.fill(node, value, options);
      });
    }
    keydown(_0, _1) {
      return __async(this, arguments, function* (node, key, options = {}) {
        node = yield this.waitFor(node, options);
        this.keyboard(node, "keydown", __spreadValues({ key }, options));
      });
    }
    keyup(_0, _1) {
      return __async(this, arguments, function* (node, key, options = {}) {
        node = yield this.waitFor(node, options);
        this.keyboard(node, "keyup", __spreadValues({ key }, options));
      });
    }
    prompt(_0) {
      return __async(this, arguments, function* (node, options = {}) {
        options = __spreadValues({
          placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"
        }, options);
        node = yield this.waitFor(node);
        const text = window.prompt(options.placeholder);
        yield this.fill(node, text, options);
      });
    }
    fillOcr(_0, _1) {
      return __async(this, arguments, function* (node, imgSelector, options = {}) {
        options = __spreadValues({}, options);
        node = yield this.waitFor(node, options);
        const { ocrCaptchaUrl } = options;
        if (ocrCaptchaUrl) {
          const base64 = StardustBrowser.funcs.img2Base64(imgSelector);
          const data = yield fetch(ocrCaptchaUrl, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ file: base64 })
          }).then((res) => res.json());
          return this.fill(node, data.text, options);
        }
        return this.prompt(node, options);
      });
    }
    save(_0, _1, _2) {
      return __async(this, arguments, function* (data, saveTo, key, options = {}) {
        if (typeof data === "function") {
          data = yield data(this);
        }
        if (typeof saveTo === "object") {
          StardustJs.highdict.set(saveTo, key, data);
          return saveTo;
        }
        throw "\u4E0D\u652F\u6301\u7684 saveTo \u7C7B\u578B";
      });
    }
    pick(func, name) {
      return __async(this, null, function* () {
        this.data[name] = yield this.eval(func);
        return this.data[name];
      });
    }
    pickList(optionsOrFunc, ...props) {
      return __async(this, null, function* () {
        let list = [];
        if (typeof optionsOrFunc === "object") {
          const { each, saveTo } = optionsOrFunc;
          const fields = optionsOrFunc.fields.map((ele) => {
            if (typeof ele === "object") {
              return ele;
            }
            const [prop, selector2, type] = ele.split("::");
            return { prop, selector: selector2, type };
          });
          list = $all(each).map((n) => {
            const item = {};
            fields.forEach((field) => {
              var _a;
              const value = (_a = n.$one(field.selector)) == null ? void 0 : _a._text();
              item[field.prop] = field.type === "number" ? parseFloat(value) : value;
            });
            return item;
          });
        } else {
          list = yield this.eval(optionsOrFunc);
        }
        if (props.length) {
          return this.save(list, ...props);
        }
        return list;
      });
    }
    exportTable() {
      return __async(this, arguments, function* (options = {}) {
        var _a;
        options = __spreadValues({
          report: true,
          isElementUI: false,
          type: "excel",
          log: console.log,
          withInput: true
        }, options);
        let selectors = {};
        if (options.isElementUI) {
          selectors = {
            root: "",
            active: ".el-pager .active",
            first: ".el-pager .number",
            last: ".el-pager .number:last-child",
            next: ".el-pagination .btn-next",
            size: ".el-pagination__sizes .el-select input",
            sizer: ".el-pagination__sizes .el-select",
            pageSize: '//span[contains(text(),"100\u6761/\u9875")]',
            loading: ".el-loading-mask",
            headerTr: ".el-table__header-wrapper thead tr",
            bodyTrs: ".el-table__fixed .el-table__fixed-body-wrapper table tbody tr",
            headerTh: "th",
            bodyTd: "td"
          };
        }
        selectors = __spreadValues(__spreadValues({}, selectors), options.selectors);
        selectors.headerTh || (selectors.headerTh = "th");
        selectors.bodyTd || (selectors.bodyTd = "td");
        if (selectors.root) {
          for (let key in selectors) {
            if (key === "root")
              continue;
            selectors[key] = selectors.root + " " + selectors[key];
          }
        }
        const isFirst = () => {
          if (options.isFirst)
            return options.isFirst();
          const active = $one(selectors.active);
          const first = $one(selectors.first);
          const page2 = (active.value || active._text()).toString().match(/\d+/)[0] * 1;
          return active === first || page2 === 1;
        };
        const isDone = () => {
          if (options.isDone)
            return options.isDone();
          const active = $one(selectors.active);
          const last = $one(selectors.last);
          const page2 = (active.value || active._text()).toString().match(/\d+/)[0] * 1;
          return active === last || page2 === getPageCount();
        };
        const setFirst = () => __async(this, null, function* () {
          if (options.setFirst)
            return options.setFirst();
          const first = $one(selectors.first);
          if (["INPUT", "TEXTAREA"].includes(first)) {
            yield this.fill(first, "1");
            yield this.enter(first);
          } else {
            yield this.click(first);
          }
        });
        const setNext = () => __async(this, null, function* () {
          if (options.setNext)
            return options.setNext();
          yield this.click($one(selectors.next));
        });
        const getCurrentSize = () => {
          if (options.getCurrentSize)
            return options.getCurrentSize();
          const node = $one(selectors.size);
          const page2 = (node.value || node._text()).toString().match(/\d+/)[0] * 1;
          return page2;
        };
        const getSettingSize = () => {
          if (options.getSettingSize)
            return options.getSettingSize();
          const node = $one(selectors.pageSize);
          const page2 = (node.value || node._text()).toString().match(/\d+/)[0] * 1;
          return page2;
        };
        const setSize = () => __async(this, null, function* () {
          if (options.setSize)
            return options.setSize();
          if (selectors.sizer) {
            const node = $one(selectors.sizer);
            if (node.nodeName === "SELECT") {
              yield this.select(node, $one(selectors.pageSize).value);
              return;
            } else {
              yield this.click(selectors.sizer);
            }
          }
          yield this.click(selectors.pageSize);
        });
        const waitLoading = () => __async(this, null, function* () {
          if (options.waitLoading)
            return options.waitLoading();
          yield this.waitFor(selectors.loading);
          yield this.waitForFunction(() => {
            var _a2, _b;
            return !((_b = (_a2 = $one(selectors.loading)) == null ? void 0 : _a2._rect()) == null ? void 0 : _b.width);
          });
        });
        const getHeader = () => {
          if (options.getHeader)
            return options.getHeader();
          const headerTr = $one(selectors.headerTr);
          return headerTr.$all(selectors.headerTh).map((th) => th._text());
        };
        const getRows = () => {
          if (options.getRows)
            return options.getRows();
          const bodyTrs = $all(selectors.bodyTrs);
          return bodyTrs.map((tr) => tr.$all(selectors.bodyTd).map((td) => {
            let text = td._text();
            if (options.withInput) {
              const inputs = [
                ...td.$all("input").filter((i) => i.type !== "file"),
                ...td.$all("select"),
                ...td.$all("textarea")
              ];
              text += inputs.map((i) => i.value + "").join(",");
            }
            return text;
          }));
        };
        const getPageCount = () => {
          var _a2;
          if (options.getPageCount)
            return options.getPageCount();
          return (((_a2 = $one(selectors.pageCount || selectors.last)) == null ? void 0 : _a2._text()) || 1) * 1;
        };
        if (options.report)
          yield this.report("\u51C6\u5907\u83B7\u53D6\u6570\u636E...");
        options.log("\u5F53\u524D\u9875 " + getRows().length + " \u6761\u6570\u636E\uFF0C\u6BCF\u9875\u9650\u5236 " + getCurrentSize() + " \u6761");
        if (getRows().length && getCurrentSize() !== getSettingSize()) {
          if (options.report)
            yield this.report("\u8BBE\u7F6E\u6BCF\u9875\u6761\u6570: " + getSettingSize());
          options.log("\u8BBE\u7F6E\u6BCF\u9875\u6761\u6570: " + getSettingSize());
          yield setSize();
          options.log("\u8BBE\u7F6E\u6BCF\u9875\u6761\u6570\u540E\u7B49\u5F85\u52A0\u8F7D");
          yield waitLoading();
        }
        options.log("\u83B7\u53D6\u8868\u5934");
        let header = getHeader();
        options.log("\u8868\u5934: ", header);
        const data = [];
        let pageCount = 0;
        let page = 0;
        if (options.report) {
          pageCount = getPageCount();
          yield this.report("\u603B\u5171 " + pageCount + " \u9875");
          options.log("\u603B\u5171 " + pageCount + " \u9875");
        }
        if (!isFirst()) {
          options.log("\u4E0D\u662F\u7B2C\u4E00\u9875\uFF0C\u5E94\u8BBE\u7F6E\u7B2C\u4E00\u9875");
          yield setFirst();
          options.log("\u8BBE\u7F6E\u7B2C\u4E00\u9875\u540E\u7B49\u5F85\u52A0\u8F7D");
          yield waitLoading();
        }
        while (true) {
          if (options.report) {
            page++;
            options.log(`\u5DF2\u83B7\u53D6\u7B2C ${page} / ${pageCount} \u9875 ` + page / pageCount * 100 + "%");
            yield this.report(`\u5DF2\u83B7\u53D6\u7B2C ${page} / ${pageCount} \u9875`, page / pageCount * 100);
          }
          options.log("\u6293\u53D6\u5F53\u524D\u9875\u7684\u6570\u636E");
          data.push(...getRows());
          if (!data.length) {
            throw "\u6293\u53D6\u5F53\u524D\u9875\u7684\u6570\u636E\uFF0C\u5931\u8D25";
          }
          options.log("\u5171\u5DF2\u6293\u5230 " + data.length + " \u6761\u6570\u636E");
          if (isDone()) {
            options.log("\u6570\u636E\u6293\u53D6\u5B8C\u6BD5");
            break;
          }
          options.log("\u8BBE\u7F6E\u4E0B\u4E00\u9875: " + (page + 1));
          yield setNext();
          options.log("\u8BBE\u7F6E\u4E0B\u4E00\u9875\u540E\u7B49\u5F85\u52A0\u8F7D");
          yield waitLoading();
        }
        options.log("\u51C6\u5907\u5BFC\u51FA", header, data);
        if (data.length && header.length > data[0].length) {
          header = header.slice(0, data[0].length);
        }
        if ((_a = options.beforeExport) == null ? void 0 : _a.call(options, { header, data }))
          return;
        let method;
        if (options.type === "excel") {
          method = "export2Excel";
        } else if (options.type === "csv") {
          method = "export2Csv";
        } else if (options.type === "table") {
          document.body.innerHTML = `
        <table border="1" style="border-collapse: collapse; width: 96%; margin: 20px auto;">
          <thead>
            <tr>${header.map((ele) => "<th>" + ele + "</th>").join("")}</tr>
          </thead>
          <tbody>
            ${data.map((row) => "<tr>" + row.map((ele) => "<td>" + ele + "</td>").join("") + "</tr>").join("")}
          </tbody>
        </table>
      `;
        } else {
          const error = "\u672A\u77E5\u7684\u5BFC\u51FA\u6A21\u5F0F: " + options.type;
          options.log(error);
          throw error;
        }
        if (options.type !== "table") {
          StardustBrowser.excel[method]({
            header,
            data,
            filename: options.filename || "\u5BFC\u51FA"
          });
        }
        if (options.report) {
          options.log("\u6B63\u5728\u5BFC\u51FA excel ...");
          yield this.report("\u6B63\u5728\u5BFC\u51FA excel ...");
          this.sleep(1e3).then(() => __async(this, null, function* () {
            options.log("\u5DF2\u5B8C\u6210\u5BFC\u51FA");
            yield this.report("\u5DF2\u5B8C\u6210\u5BFC\u51FA", 100, {}, true);
          }));
        }
        return { header, data };
      });
    }
    title(title, options = {}) {
      options = __spreadValues({
        resetable: false
      }, options);
      document.title = title;
      if (!options.resetable) {
        Object.defineProperty(document, "title", {
          get: () => title,
          set: () => true
        });
      }
    }
    comment(message, options, ...props) {
      return __async(this, null, function* () {
        if (typeof message === "function") {
          message = yield message(this, ...props);
        }
        console.log(message);
      });
    }
    fetch(urlOrList, options, transformer, ...props) {
      return __async(this, null, function* () {
        if (typeof urlOrList === "function") {
          urlOrList = yield urlOrList(this);
        }
        const isArray = Array.isArray(urlOrList);
        urlOrList = isArray ? urlOrList : [[urlOrList, options]];
        const list = yield Promise.all(urlOrList.map((ele, index) => __async(this, null, function* () {
          const url = ele[0];
          const op = __spreadValues(__spreadValues({}, options), ele[1]);
          const { type = "json" } = op;
          let data = yield fetch(url, op).then((res) => res[type]());
          transformer = op.transformer || transformer;
          if (transformer) {
            data = yield transformer(data, ele, index);
          }
          return data;
        })));
        const result = isArray ? list : list[0];
        if (props.length) {
          return this.save(result, ...props);
        }
        return result;
      });
    }
    assert(func, message) {
      return __async(this, null, function* () {
        const ok = yield this.eval(func);
        if (ok) {
          return this.comment("\u65AD\u8A00\u5931\u8D25: " + message);
        }
        return funcs.sleep(Number.MAX_SAFE_INTEGER);
      });
    }
    change(_0) {
      return __async(this, arguments, function* (node, options = {}) {
        node = yield this.waitFor(node, options);
        this.custom(node, "change", options);
      });
    }
    custom(node, name, options = {}) {
      node = typeof node === "string" ? $one(node) : node;
      node.dispatchEvent(new Event(name, __spreadValues({
        bubbles: true,
        cancelable: true,
        view: window
      }, options)));
    }
    execute(_0) {
      return __async(this, arguments, function* (operations, options = {}) {
        for (let i = 0, len = operations.length; i < len; i++) {
          if (this.config.slow && i) {
            yield this.sleep(this.config.slow);
          }
          const [command, ...props] = operations[i];
          yield this[command](...props);
        }
      });
    }
  };
  UIExecutor.EventGenerator = EventGenerator;
  var ui_executor_default = UIExecutor;

  // fetcher.js
  var Fetcher = class {
    constructor(baseUrl = "", headers = {}, options = {}) {
      this._baseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
      this._headers = __spreadValues({
        "content-type": "application/json"
      }, headers);
      this._options = options;
    }
    baseUrl(baseUrl) {
      this._baseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
    }
    headers(headers = {}, replace = false) {
      if (replace)
        this._headers = __spreadValues({}, headers);
      else
        Object.assign(this._headers, headers);
    }
    options(options = {}, replace = false) {
      if (replace)
        this._options = __spreadValues({}, options);
      else
        Object.assign(this._options, options);
    }
    fetch(url, options = {}) {
      options = __spreadValues(__spreadValues({}, this._options), options);
      let _a = options, {
        type = "json",
        method = "GET",
        headers = {},
        retries = 0
      } = _a, others = __objRest(_a, [
        "type",
        "method",
        "headers",
        "retries"
      ]);
      headers = __spreadValues(__spreadValues({}, this._headers), headers);
      let contentType = headers["content-type"].toLowerCase();
      if (others.body && typeof others.body === "object") {
        if (contentType === "application/json") {
          if (others.body instanceof URLSearchParams) {
            contentType = headers["content-type"] = "application/x-www-form-urlencoded";
          } else if (others.body instanceof FormData) {
            contentType = headers["content-type"] = "application/form-data";
          }
        }
        if (contentType.includes("application/json")) {
          others.body = JSON.stringify(others.body);
        } else if (contentType.includes("application/x-www-form-urlencoded")) {
          others.body = StardustJs.funcs.encodeQuery(others.body);
        } else if (contentType.includes("application/form-data")) {
          if (!(others.body instanceof FormData)) {
            const form = new FormData();
            for (let key in others.body)
              form.append(key, others.body[key]);
            others.body = form;
          }
        }
        method = options.method || "POST";
      }
      if (url) {
        url = this._baseUrl + (url.startsWith("/") ? url : "/" + url);
      }
      if (others.params) {
        others.params = __spreadValues(__spreadValues({}, StardustJs.funcs.decodeQuery(url)), others.params);
        const search = StardustJs.funcs.encodeQuery(others.params);
        url = url.split("?")[0] + "?" + search;
      }
      return fetch(url, __spreadProps(__spreadValues({}, others), { headers, method })).then((res) => res[type]()).catch(() => {
        if (retries)
          return this.fetch(url, __spreadProps(__spreadValues({}, options), {
            retries: retries - 1
          }));
      });
    }
    queryAll(_0, _1, _2) {
      return __async(this, arguments, function* (size, func, onProgress, options = {}) {
        const { limit = 10, report = true, title = "" } = options;
        const executor = report ? new ui_executor_default() : null;
        let count = 0;
        const [total, all] = yield func(1, size);
        count = all.length;
        const percent = (count / total * 100).toFixed(2) * 1;
        if (report)
          executor.report(title + " \u6293\u53D6\u5230 " + count + "\u6761\u6570\u636E\uFF0C\u5DF2\u5B8C\u6210 " + percent + "%", percent);
        onProgress == null ? void 0 : onProgress(percent, all);
        if (total > size) {
          const results = yield StardustJs.promises.schedule((i) => __async(this, null, function* () {
            const [_, rows] = yield func(i + 2, size);
            count += rows.length;
            const percent2 = (count / total * 100).toFixed(2) * 1;
            if (report)
              executor.report(title + " \u6293\u53D6\u5230 " + count + " \u6761\u6570\u636E\uFF0C\u5DF2\u5B8C\u6210 " + percent2 + "%", percent2);
            onProgress == null ? void 0 : onProgress(percent2, rows);
            return rows;
          }), Math.ceil(total / size) - 1, limit);
          results.forEach((r) => all.push(...r));
        }
        return all;
      });
    }
  };
  var fetcher_default = Fetcher;

  // file.js
  var preview = (type, url) => {
    const baseSuffixes = ["png", "jpg", "jpeg", "gif", "txt"];
    const officeSuffixes = ["doc", "docx", "ppt", "pptx"];
    const canViewSuffixes = [...baseSuffixes, ...officeSuffixes, "pdf"];
    if (canViewSuffixes.includes(type)) {
      const a = document.createElement("a");
      a.target = "_blank";
      if (baseSuffixes.includes(type)) {
        a.href = url;
      } else if (type === "pdf") {
        a.href = `http://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURI(url)}`;
      } else if (officeSuffixes.includes(type)) {
        a.href = `https://view.officeapps.live.com/op/view.aspx?src=${encodeURI(url)}`;
      }
      a.click();
    } else {
      throw `\u6682\u4E0D\u652F\u6301\u9884\u89C8\u8BE5\u683C\u5F0F\uFF08${type}\uFF09\u6587\u4EF6`;
    }
  };
  var select = (accept, multiple = false, dir = false) => __async(void 0, null, function* () {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = accept;
    if (dir) {
      multiple = true;
      input.webkitdirectory = true;
    }
    input.multiple = multiple;
    return new Promise((resolve) => {
      input.onchange = () => {
        input.remove();
        resolve(multiple ? input.files : input.files[0]);
      };
      document.body.appendChild(input);
      input.click();
    });
  });
  var toType = (file, type = "text") => __async(void 0, null, function* () {
    const reader = new FileReader();
    const types = {
      text: "readAsText",
      arraybuffer: "readAsArrayBuffer",
      binarystring: "readAsBinaryString",
      dataurl: "readAsDataURL"
    };
    if (!(type in types)) {
      return null;
    }
    return new Promise((resolve) => {
      reader.onload = () => resolve(reader.result);
      reader[types[type]](file);
    });
  });
  var file_default = {
    preview,
    select,
    toType
  };

  // fullscreen.js
  var isOpened = () => {
    return !!(document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
  };
  var open = (node) => {
    if (isOpened())
      return;
    const root = document.documentElement;
    const func = root.requestFullscreen || root.msRequestFullscreen || root.mozRequestFullScreen || root.webkitRequestFullscreen;
    func.call(node || root);
  };
  var exit = () => {
    if (!isOpened())
      return;
    const func = document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen;
    func.call(document);
  };
  var fullscreen_default = {
    isOpened,
    open,
    exit
  };

  // funcs.js
  var isWindows = /(windows|win32)/i.test(navigator.platform);
  var isXPath = (selector2) => /^(\/\/|\.\.)/.test(selector2.trim());
  var calcPixel = (text) => {
    if (typeof text === "number")
      return text;
    text = text.toLowerCase();
    let number = parseFloat(text);
    if (text.includes("vw")) {
      number *= window.innerWidth / 100;
    } else if (text.includes("vh")) {
      number *= window.innerHeight / 100;
    } else if (text.includes("rem")) {
      number *= parseFloat(getComputedStyle(document.documentElement).fontSize);
    }
    return Math.floor(number);
  };
  var img2Base64 = (selector2) => {
    const img = typeof selector2 === "string" ? $one(selector2) : selector2;
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL();
  };
  var _nodes = {};
  var _zoom = 1;
  var _resize = () => {
    if (!document.documentElement)
      return;
    _zoom = 1 / parseFloat(document.documentElement.style.zoom);
    setTimeout(() => {
      Object.values(_nodes).forEach((n) => n.style.zoom = _zoom);
    }, 0);
  };
  _resize();
  window.addEventListener("resize", _resize);
  var unzoom = (node) => {
    if (!(node instanceof HTMLElement)) {
      node = node.value;
    }
    node.style.zoom = _zoom;
    const id = crypto.randomUUID();
    _nodes[id] = node;
    return () => delete _nodes[id];
  };
  var scanCode = (..._0) => __async(void 0, [..._0], function* (options = {}) {
    let _a = options, {
      timeGap = 50,
      multiple = false,
      details = false,
      cameraStyle = "",
      continuous = false,
      onRecognize,
      onInit,
      onDestroy,
      done,
      mode = "environment"
    } = _a, others = __objRest(_a, [
      "timeGap",
      "multiple",
      "details",
      "cameraStyle",
      "continuous",
      "onRecognize",
      "onInit",
      "onDestroy",
      "done",
      "mode"
    ]);
    const detector = new BarcodeDetector(others);
    const detect = (source) => __async(void 0, null, function* () {
      let result = yield detector.detect(source);
      if (details !== true)
        result = result.map((r) => r.rawValue);
      return result;
    });
    if (mode === "image") {
      if (Array.isArray(others.images))
        return Promise.all(others.images.map(detect));
      if (others.images)
        return detect(others.images);
      let files = yield StardustBrowser.file.select("image/*", multiple);
      files = multiple ? [...files] : [files];
      const codes = yield Promise.all(files.map((file) => __async(void 0, null, function* () {
        const base64 = yield StardustBrowser.file.toType(file, "dataurl");
        const image = new Image();
        yield new Promise((resolve) => {
          image.onload = resolve;
          image.src = base64;
        });
        return detect(image);
      })));
      return multiple ? codes : codes[0];
    }
    if (continuous && (!onRecognize || !done))
      throw "continuous need onRecognize and done";
    timeGap = Math.max(timeGap, 16);
    const stream = yield navigator.mediaDevices.getUserMedia(__spreadProps(__spreadValues({}, others), {
      video: {
        facingMode: mode
      }
    }));
    const container = document.createElement("div");
    container.style.cssText += `
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 99999999;
    background-color: black;
  ` + (cameraStyle || "");
    const video = document.createElement("video");
    video.style.cssText += `
    width: 100%;
    height: 100%;
  `;
    container.appendChild(video);
    const destroy = () => {
      stream.getTracks().forEach((t) => t.stop());
      container.remove();
    };
    const selectOne = (results) => __async(void 0, null, function* () {
      return results[0];
    });
    const close = document.createElement("div");
    close.textContent = "x";
    close.style.cssText += `
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 16px;
    cursor: pointer;
    color: white;
    z-index: 100000000;
  `;
    close.onclick = destroy;
    container.appendChild(close);
    document.body.appendChild(container);
    video.srcObject = stream;
    yield new Promise((resolve) => {
      video.onloadedmetadata = () => {
        video.play();
        resolve();
      };
    });
    onInit == null ? void 0 : onInit({ video, detector });
    while (true) {
      let result = yield detector.detect(video);
      if (result.length) {
        if (!details)
          result = result.map((r) => r.rawValue);
        if (continuous) {
          onRecognize(result);
          if (done()) {
            onDestroy == null ? void 0 : onDestroy({ video, detector });
            destroy();
            return;
          }
        } else {
          if (!multiple) {
            if (result.length === 1) {
              result = result[0];
            } else {
              result = yield selectOne(result);
            }
          }
          onDestroy == null ? void 0 : onDestroy({ video, detector });
          destroy();
          return result;
        }
      }
      yield new Promise((resolve) => setTimeout(resolve, timeGap));
    }
  });
  var funcs_default = {
    isWindows,
    isXPath,
    calcPixel,
    img2Base64,
    unzoom,
    scanCode
  };

  // selector.js
  var xfind = (selector2, root, all = false) => {
    const iterator = document.evaluate(selector2, root || document);
    if (!all)
      return iterator.iterateNext();
    const nodes = [];
    let n;
    while (n = iterator.iterateNext()) {
      nodes.push(n);
    }
    return nodes;
  };
  var qsa = Element.prototype.querySelectorAll;
  var sdqsa = ShadowRoot.prototype.querySelectorAll;
  Element.prototype.$one = function(selector2) {
    return this.$all(selector2)[0];
  };
  Element.prototype.$all = function(selector2) {
    const root = this.shadowRoot || this;
    const finder = this.shadowRoot ? sdqsa : qsa;
    let [first, ...others] = selector2.split(" >> ");
    let nodes = isXPath(first) ? xfind(first, root, true) : [...finder.call(root, first)];
    while (others.length) {
      if (/^-?\d+$/.test(others[0])) {
        const index = (others[0] * 1 + nodes.length) % nodes.length;
        nodes = [nodes[index]];
        others = others.slice(1);
      } else if (others[0] === "<visible>") {
        nodes = nodes.filter((n) => {
          var _a;
          return (_a = n == null ? void 0 : n._rect()) == null ? void 0 : _a.width;
        });
        others = others.slice(1);
      } else {
        break;
      }
    }
    if (others.length) {
      nodes = nodes.reduce((all, n) => all.concat(n.$all(others.join(" >> "))), []);
    }
    return nodes;
  };
  Element.prototype.$parent = function(level = 1) {
    let parent = this;
    while (level--) {
      parent = parent.parentNode;
      if (!parent)
        return parent;
    }
    return parent;
  };
  Element.prototype._text = function(value) {
    if (value) {
      this.textContent = value;
    } else {
      return this.textContent.trim();
    }
  };
  Element.prototype._rect = function() {
    return this.getBoundingClientRect();
  };
  window.$one = document.$one = function(selector2) {
    return Element.prototype.$one.call(document.documentElement, selector2);
  };
  window.$all = document.$all = function(selector2) {
    return Element.prototype.$all.call(document.documentElement, selector2);
  };
  var $one2 = window.$one;
  var $all2 = window.$all;
  var selector_default = {
    $one: $one2,
    $all: $all2
  };

  // storage.js
  var Storage = class {
    constructor(storage) {
      this.storage = storage;
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
    get(key, defaults) {
      return this.storage.getItem(key) || defaults;
    }
    set(key, value) {
      this.storage.setItem(key, value);
    }
    remove(key) {
      this.storage.removeItem(key);
    }
    getJson(key, defaults, catches = true) {
      const value = this.get(key);
      if (value && catches) {
        try {
          return JSON.parse(value);
        } catch (e) {
        }
      }
      return defaults;
    }
    setJson(key, value) {
      this.set(key, JSON.stringify(value));
    }
  };
  var local = new Storage(window.localStorage);
  var session = new Storage(window.sessionStorage);
  var storage_default = {
    Storage,
    local,
    session
  };

  // index.js
  var { local: local2, session: session2 } = storage_default;
  var stardust_browser_default = {
    version: "1.0.110",
    dbsdk: dbsdk_default2,
    clipboard: clipboard_default,
    cookies: cookies_default,
    excel: excel_default,
    Fetcher: fetcher_default,
    file: file_default,
    fullscreen: fullscreen_default,
    funcs: funcs_default,
    selector: selector_default,
    storage: storage_default,
    local: local2,
    session: session2,
    UIExecutor: ui_executor_default
  };
  return __toCommonJS(stardust_browser_exports);
})();
