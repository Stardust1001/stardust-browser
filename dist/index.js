var StardustBrowser = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
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
    const getSettings = async (params) => {
      return req({
        url: "/common/get_settings",
        method: "get",
        params
      });
    };
    const updateSettings = async (data) => {
      return req({
        url: "/common/update_settings",
        method: "post",
        data
      });
    };
    const callSql = async (data) => {
      return req({
        url: "/common/call_sql",
        method: "post",
        data
      });
    };
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
    } catch {
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
    } catch {
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
      return document.cookie.split("; ").map((e) => e.split("=")).reduce((dict, [k, v]) => ({ ...dict, [k]: v }));
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
    const { header, data, filename = "table" } = options;
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
      this.base = {
        bubbles: true,
        cancelable: true,
        view: window,
        ...config?.base
      };
    }
    keyboard(name, options = {}) {
      let { key, code } = options;
      if (key && !code) {
        code = key.charCodeAt(0);
      }
      if (code && !key) {
        key = String.fromCharCode(code);
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
      });
    }
    mouse(name, options, target) {
      const rect = target?.getBoundingClientRect() || {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
      const cx = rect.x + rect.width / 2;
      const cy = rect.y + rect.height / 2;
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
      });
    }
    wheel(options = {}) {
      return new WheelEvent({
        ...this.base,
        deltaX: 0,
        deltaY: 0,
        deltaZ: 0,
        deltaMode: 0,
        ...options
      });
    }
    focus(options = {}) {
      return new FocusEvent({
        ...this.base,
        relatedTarget: null,
        ...options
      });
    }
    input(text, options = {}) {
      return new InputEvent({
        ...this.base,
        data: text,
        isComposing: false,
        ...options
      });
    }
    composition(text, options = {}) {
      return new CompositionEvent({
        ...this.base,
        data: text,
        ...options
      });
    }
    touch(name, options, target) {
      const rect = target?.getBoundingClientRect() || {
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
      return new TouchEvent({
        ...this.base,
        type: name,
        changedTouches: [point],
        targetTouches: [point],
        touches: [point],
        ...options
      });
    }
  };
  var UIExecutor = class {
    constructor(config = {}) {
      this.config = {
        interval: 20,
        slow: 0,
        ...config
      };
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
    async waitFor(selector2, options = {}) {
      options = {
        visible: true,
        interval: this.config.interval,
        ...options
      };
      let node;
      while (true) {
        node = typeof selector2 === "string" ? $one(selector2) : selector2;
        if (node) {
          if (!options.visible || node.getBoundingClientRect().width) {
            break;
          }
        }
        await this.sleep(options.interval);
      }
      return node;
    }
    waitOr(selectors, options = {}) {
      return Promise.any(selectors.map((s) => this.waitFor(selector, options)));
    }
    async waitForURL(url, options = {}) {
      options = {
        interval: this.config.interval,
        ...options
      };
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
        await this.sleep(options.interval);
      }
    }
    async waitForFunction(func, options = {}) {
      options = {
        interval: this.config.interval,
        ...options
      };
      while (true) {
        try {
          if (func(this))
            break;
        } catch {
        }
        await this.sleep(options.interval);
      }
    }
    async waitForNext(title = "\u4E0B\u4E00\u6B65", options = {}) {
      const mask = document.createElement("div");
      mask.id = "webot-mask";
      mask.style.cssText += this._maskStyle + (options.maskStyle || "");
      await this.waitFor("body");
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
    }
    async report(title, percent, options = {}, isDone = false) {
      if (typeof title === "function") {
        title = await title(this);
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
        await this.waitFor("body");
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
    }
    sleep(ms) {
      return StardustJs.funcs.sleep(ms);
    }
    async blur(node, options = {}) {
      node = await this.waitFor(node, options);
      node.blur();
    }
    async box(node, options = {}) {
      node = await this.waitFor(node, options);
      return node.getBoundingClientRect();
    }
    async clear(node, options = {}) {
      node = await this.waitFor(node, options);
      node.value = "";
    }
    async click(node, options = {}) {
      node = await this.waitFor(node, options);
      node.dispatchEvent(this.generator.mouse("click", options, node));
    }
    async dblclick(node, options = {}) {
      options = {
        clickInterval: this.config.interval,
        ...options
      };
      node = await this.waitFor(node, options);
      node.dispatchEvent(this.generator.mouse("click", options, node));
      await this.sleep(options.clickInterval);
      node.dispatchEvent(this.generator.mouse("click", options, node));
    }
    async keyboard(node, name, options = {}) {
      node = await this.waitFor(node, options);
      node.dispatchEvent(this.generator.keyboard(name, options));
    }
    async eval(func, args = {}) {
      if (typeof func === "function") {
        return func(this, args);
      }
      return window.eval(func);
    }
    async evalOn(node, func, options = {}) {
      node = await this.waitFor(node, options);
      if (typeof func === "function") {
        return func(node);
      }
      return window.eval(func);
    }
    async evalOnAll(node, func, options = {}) {
      await this.waitFor(node, options);
      const nodes = await $all(node);
      if (typeof func === "function") {
        return func(nodes);
      }
      return window.eval(func);
    }
    async set(node, attr, value, bySetter = false, options = {}) {
      if (typeof value === "function") {
        value = await this.eval(value, options);
      }
      node = await this.waitFor(node, options);
      if (bySetter) {
        node.setAttribute(attr, value);
      } else {
        node[attr] = value;
      }
    }
    async fill(node, text, options = {}) {
      options = {
        fillInterval: 10,
        ...options
      };
      node = await this.waitFor(node, options);
      this.focus(node);
      this.clear(node);
      for (let key of text) {
        await this.sleep(options.fillInterval);
        this.keydown(node, key);
        this.keyup(node, key);
        node.value += key;
      }
    }
    async focus(node, options = {}) {
      node = await this.waitFor(node, options);
      node.focus();
      node.dispatchEvent(this.generator.focus());
    }
    async hover(node, options = {}) {
      node = await this.waitFor(node, options);
      node.dispatchEvent(this.generator.mouse("move", options, node));
    }
    async press(node, keys, options = {}) {
      options = {
        pressInterval: this.config.interval,
        ...options
      };
      keys = Array.isArray(keys) ? keys : [keys];
      node = await this.waitFor(node, options);
      for (let key of keys) {
        this.keydown(node, key, options);
        await this.sleep(options.pressInterval);
        this.keyup(node, key, options);
        await this.sleep(options.pressInterval);
      }
    }
    async select(node, value, options = {}) {
      node = await this.waitFor(node, options);
      node.value = value;
      this.change(node, options);
    }
    async check(node, value, options = {}) {
      node = await this.waitFor(node, options);
      node.checked = value;
      this.change(node, options);
    }
    async jump(func, options = {}) {
      const url = await this.eval(func, options);
      location.href = url;
    }
    async mouse(node, name, options = {}) {
      node = await this.waitFor(node, options);
      node.dispatchEvent(this.generator.mouse(name, options, node));
    }
    async keyboard(method, node, keys, options = {}) {
      options = {
        keyboardInterval: this.config.interval,
        ...options
      };
      node = await this.waitFor(node, options);
      for (let key of keys) {
        this["key" + method](node, key, options);
        await this.sleep(options.keyboardInterval);
      }
    }
    enter(node, options = {}) {
      this.press(node, "Enter", options);
    }
    async view(node, options = {}) {
      node = await this.waitFor(node, options);
      node.scrollIntoViewIfNeeded();
    }
    async attr(node, name, options = {}) {
      node = await this.waitFor(node, options);
      return node.getAttribute(name, options);
    }
    async call(node, method, options = {}) {
      node = await this.waitFor(node, options);
      return node[method](options);
    }
    async html(node, options = {}) {
      node = await this.waitFor(node, options);
      return node.innerHTML;
    }
    async text(node, options = {}) {
      node = await this.waitFor(node, options);
      return node.innerText;
    }
    async content(node, options = {}) {
      node = await this.waitFor(node, options);
      return node.textContent;
    }
    async if(func, operations, ...props) {
      this._isInIf = true;
      const ok = await this.eval(func, ...props);
      if (ok) {
        if (typeof operations === "function") {
          operations = await operations(this, ...props);
        }
        await this.execute(operations, ...props);
      }
    }
    async elseIf(func, operations, ...props) {
      const ok = await this.eval(func, ...props);
      if (ok) {
        if (typeof operations === "function") {
          operations = await operations(this, ...props);
        }
        await this.execute(operations, ...props);
      }
    }
    async else(operations, ...props) {
      if (this._isInIf) {
        if (typeof operations === "function") {
          operations = await operations(this, ...props);
        }
        await this.execute(operations, ...props);
      }
      this._isInIf = false;
    }
    async switch(value, cases, ...props) {
      if (typeof value === "function") {
        value = await value(this, ...props);
      }
      for (let [caseValue, operations] of cases) {
        if (typeof caseValue === "function") {
          caseValue = await caseValue(this, ...props);
        }
        caseValue = Array.isArray(caseValue) ? caseValue : [caseValue];
        if (caseValue.includes(value)) {
          await this.execute(operations, ...props);
          return;
        }
      }
      const last = cases[cases.length - 1];
      if (last[0] === "default") {
        await this.execute(last[1], ...props);
      }
    }
    async promiseAll(operations) {
      if (typeof operations === "function") {
        operations = await operations(this);
      }
      return Promise.all(operations.map((ele) => {
        return this[ele[0]](...ele.slice(1)).catch((err) => {
          console.error(err);
        });
      }));
    }
    async promiseRace(operations) {
      if (typeof operations === "function") {
        operations = await operations(this);
      }
      return Promise.race(operations.map((ele) => {
        return this[ele[0]](...ele.slice(1)).catch((err) => {
          console.error(err);
        });
      }));
    }
    async promiseAny(operations) {
      if (typeof operations === "function") {
        operations = await operations(this);
      }
      return Promise.any(operations.map((ele) => {
        return this[ele[0]](...ele.slice(1)).catch((err) => {
          console.error(err);
        });
      }));
    }
    async for(func, operations, ...props) {
      let items = func;
      if (typeof func === "function") {
        items = await func(this, ...props);
      }
      if (typeof items === "number") {
        items = Array.from({ length: items }).map((_, i) => i);
      }
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        let ops = operations;
        if (typeof operations === "function") {
          ops = await operations(this, item, i, ...props);
        }
        await this.execute(ops, [item, i], ...props);
      }
    }
    async while(func, operations, options = {}) {
      let i = 0;
      while (true) {
        const ok = await this.eval(func, options);
        if (!ok)
          break;
        let ops = operations;
        if (typeof operations === "function") {
          ops = await operations(this, i++);
        }
        await this.execute(ops);
      }
    }
    async dynamic(func) {
      const operations = await this.eval(func);
      await this.execute(operations);
    }
    func(func, ...props) {
      return this.eval(func, ...props);
    }
    async prompt(node, options = {}) {
      options = {
        placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
        ...options
      };
      node = await this.waitFor(node, options);
      const value = window.prompt(options.placeholder);
      this.fill(node, value, options);
    }
    async keydown(node, key, options = {}) {
      node = await this.waitFor(node, options);
      this.keyboard(node, "keydown", { key, ...options });
    }
    async keyup(node, key, options = {}) {
      node = await this.waitFor(node, options);
      this.keyboard(node, "keyup", { key, ...options });
    }
    async prompt(node, options = {}) {
      options = {
        placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
        ...options
      };
      node = await this.waitFor(node);
      const text = window.prompt(options.placeholder);
      await this.fill(node, text, options);
    }
    async fillOcr(node, imgSelector, options = {}) {
      options = {
        ...options
      };
      node = await this.waitFor(node, options);
      const { ocrCaptchaUrl } = options;
      if (ocrCaptchaUrl) {
        const base64 = StardustBrowser.funcs.img2Base64(imgSelector);
        const data = await fetch(ocrCaptchaUrl, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ file: base64 })
        }).then((res) => res.json());
        return this.fill(node, data.text, options);
      }
      return this.prompt(node, options);
    }
    async save(data, saveTo, key, options = {}) {
      if (typeof data === "function") {
        data = await data(this);
      }
      if (typeof saveTo === "object") {
        StardustJs.highdict.set(saveTo, key, data);
        return saveTo;
      }
      throw "\u4E0D\u652F\u6301\u7684 saveTo \u7C7B\u578B";
    }
    async pick(func, name) {
      this.data[name] = await this.eval(func);
      return this.data[name];
    }
    async pickList(optionsOrFunc, ...props) {
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
            const value = n.$one(field.selector)?._text();
            item[field.prop] = field.type === "number" ? parseFloat(value) : value;
          });
          return item;
        });
      } else {
        list = await this.eval(optionsOrFunc);
      }
      if (props.length) {
        return this.save(list, ...props);
      }
      return list;
    }
    async exportTable(options = {}) {
      options = {
        report: true,
        isElementUI: false,
        type: "excel",
        log: console.log,
        withInput: true,
        ...options
      };
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
      selectors = {
        ...selectors,
        ...options.selectors
      };
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
      const setFirst = async () => {
        if (options.setFirst)
          return options.setFirst();
        const first = $one(selectors.first);
        if (["INPUT", "TEXTAREA"].includes(first)) {
          await this.fill(first, "1");
          await this.enter(first);
        } else {
          await this.click(first);
        }
      };
      const setNext = async () => {
        if (options.setNext)
          return options.setNext();
        await this.click($one(selectors.next));
      };
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
      const setSize = async () => {
        if (options.setSize)
          return options.setSize();
        if (selectors.sizer) {
          const node = $one(selectors.sizer);
          if (node.nodeName === "SELECT") {
            await this.select(node, $one(selectors.pageSize).value);
            return;
          } else {
            await this.click(selectors.sizer);
          }
        }
        await this.click(selectors.pageSize);
      };
      const waitLoading = async () => {
        if (options.waitLoading)
          return options.waitLoading();
        await this.waitFor(selectors.loading);
        await this.waitForFunction(() => !$one(selectors.loading)?._rect()?.width);
      };
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
        if (options.getPageCount)
          return options.getPageCount();
        return ($one(selectors.pageCount || selectors.last)?._text() || 1) * 1;
      };
      options.report && this.report("\u51C6\u5907\u83B7\u53D6\u6570\u636E...");
      options.log("\u5F53\u524D\u9875 " + getRows().length + " \u6761\u6570\u636E\uFF0C\u6BCF\u9875\u9650\u5236 " + getCurrentSize() + " \u6761");
      if (getRows().length && getCurrentSize() !== getSettingSize()) {
        options.report && this.report("\u8BBE\u7F6E\u6BCF\u9875\u6761\u6570: " + getSettingSize());
        options.log("\u8BBE\u7F6E\u6BCF\u9875\u6761\u6570: " + getSettingSize());
        await setSize();
        options.log("\u8BBE\u7F6E\u6BCF\u9875\u6761\u6570\u540E\u7B49\u5F85\u52A0\u8F7D");
        await waitLoading();
      }
      options.log("\u83B7\u53D6\u8868\u5934");
      let header = getHeader();
      options.log("\u8868\u5934: ", header);
      const data = [];
      let pageCount = 0;
      let page = 0;
      if (options.report) {
        pageCount = getPageCount();
        this.report("\u603B\u5171 " + pageCount + " \u9875");
        options.log("\u603B\u5171 " + pageCount + " \u9875");
      }
      if (!isFirst()) {
        options.log("\u4E0D\u662F\u7B2C\u4E00\u9875\uFF0C\u5E94\u8BBE\u7F6E\u7B2C\u4E00\u9875");
        await setFirst();
        options.log("\u8BBE\u7F6E\u7B2C\u4E00\u9875\u540E\u7B49\u5F85\u52A0\u8F7D");
        await waitLoading();
      }
      while (true) {
        if (options.report) {
          page++;
          options.log(`\u5DF2\u83B7\u53D6\u7B2C ${page} / ${pageCount} \u9875 ` + page / pageCount * 100 + "%");
          this.report(`\u5DF2\u83B7\u53D6\u7B2C ${page} / ${pageCount} \u9875`, page / pageCount * 100);
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
        await setNext();
        options.log("\u8BBE\u7F6E\u4E0B\u4E00\u9875\u540E\u7B49\u5F85\u52A0\u8F7D");
        await waitLoading();
      }
      options.log("\u51C6\u5907\u5BFC\u51FA", header, data);
      if (data.length && header.length > data[0].length) {
        header = header.slice(0, data[0].length);
      }
      options.beforeExport?.({ header, data });
      let method;
      if (options.type === "excel") {
        method = "export2Excel";
      } else if (options.type === "csv") {
        method = "export2Csv";
      } else {
        const error = "\u672A\u77E5\u7684\u5BFC\u51FA\u6A21\u5F0F: " + options.type;
        options.log(error);
        throw error;
      }
      StardustBrowser.excel[method]({
        header,
        data,
        filename: options.filename || "\u5BFC\u51FA"
      });
      if (options.report) {
        options.log("\u6B63\u5728\u5BFC\u51FA excel ...");
        this.report("\u6B63\u5728\u5BFC\u51FA excel ...");
        this.sleep(1e3).then(() => {
          options.log("\u5DF2\u5B8C\u6210\u5BFC\u51FA");
          this.report("\u5DF2\u5B8C\u6210\u5BFC\u51FA", 100, {}, true);
        });
      }
      return { header, data };
    }
    title(title, options = {}) {
      options = {
        resetable: false,
        ...options
      };
      document.title = title;
      if (!options.resetable) {
        Object.defineProperty(document, "title", {
          get: () => title,
          set: () => true
        });
      }
    }
    async comment(message, options, ...props) {
      if (typeof message === "function") {
        message = await message(this, ...props);
      }
      console.log(message);
    }
    async fetch(urlOrList, options, transformer, ...props) {
      if (typeof urlOrList === "function") {
        urlOrList = await urlOrList(this);
      }
      const isArray = Array.isArray(urlOrList);
      urlOrList = isArray ? urlOrList : [[urlOrList, options]];
      const list = await Promise.all(urlOrList.map(async (ele, index) => {
        const url = ele[0];
        const op = { ...options, ...ele[1] };
        const { type = "json" } = op;
        let data = await fetch(url, op).then((res) => res[type]());
        transformer = op.transformer || transformer;
        if (transformer) {
          data = await transformer(data, ele, index);
        }
        return data;
      }));
      const result = isArray ? list : list[0];
      if (props.length) {
        return this.save(result, ...props);
      }
      return result;
    }
    async assert(func, message) {
      const ok = await this.eval(func);
      if (ok) {
        return this.comment("\u65AD\u8A00\u5931\u8D25: " + message);
      }
      return funcs.sleep(Number.MAX_SAFE_INTEGER);
    }
    async change(node, options = {}) {
      node = await this.waitFor(node, options);
      this.custom(node, "change", options);
    }
    custom(node, name, options = {}) {
      node = typeof node === "string" ? $one(node) : node;
      node.dispatchEvent(new Event(name, {
        bubbles: true,
        cancelable: true,
        view: window,
        ...options
      }));
    }
    async execute(operations, options = {}) {
      for (let i = 0, len = operations.length; i < len; i++) {
        if (this.config.slow && i) {
          await this.sleep(this.config.slow);
        }
        const [command, ...props] = operations[i];
        await this[command](...props);
      }
    }
  };
  UIExecutor.EventGenerator = EventGenerator;
  var ui_executor_default = UIExecutor;

  // fetcher.js
  var Fetcher = class {
    constructor(baseUrl = "", headers = {}, options = {}) {
      this._baseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
      this._headers = {
        "content-type": "application/json",
        ...headers
      };
      this._options = options;
    }
    baseUrl(baseUrl) {
      this._baseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
    }
    headers(headers = {}, replace = false) {
      if (replace)
        this._headers = { ...headers };
      else
        Object.assign(this._headers, headers);
    }
    options(options = {}, replace = false) {
      if (replace)
        this._options = { ...options };
      else
        Object.assign(this._options, options);
    }
    fetch(url, options = {}) {
      options = { ...this._options, ...options };
      let {
        type = "json",
        method = "GET",
        headers = {},
        retries = 0,
        ...others
      } = options;
      headers = { ...this._headers, ...headers };
      if (headers["content-type"]?.toLowerCase().startsWith("application/json")) {
        if (others.body && typeof others.body) {
          others.body = JSON.stringify(others.body);
        }
      }
      if (url) {
        url = this._baseUrl + (url.startsWith("/") ? url : "/" + url);
      }
      if (others.params) {
        others.params = {
          ...StardustJs.funcs.decodeQuery(url),
          ...others.params
        };
        const search = StardustJs.funcs.encodeQuery(others.params);
        url = url.split("?")[0] + "?" + search;
      }
      return fetch(url, { ...others, headers, method }).then((res) => res[type]()).catch(() => {
        if (retries)
          return this.fetch(url, {
            ...options,
            retries: retries - 1
          });
      });
    }
    async queryAll(size, func, onProgress, options = {}) {
      const { limit = 10, report = true, title = "" } = options;
      const executor = report ? new ui_executor_default() : null;
      let count = 0;
      const [total, all] = await func(1, size);
      count = all.length;
      const percent = (count / total * 100).toFixed(2) * 1;
      if (report)
        executor.report(title + " \u6293\u53D6\u5230 " + count + "\u6761\u6570\u636E\uFF0C\u5DF2\u5B8C\u6210 " + percent + "%", percent);
      onProgress?.(percent, all);
      if (total > size) {
        const results = await StardustJs.promises.schedule(async (i) => {
          const [_, rows] = await func(i + 2, size);
          count += rows.length;
          const percent2 = (count / total * 100).toFixed(2) * 1;
          if (report)
            executor.report(title + " \u6293\u53D6\u5230 " + count + " \u6761\u6570\u636E\uFF0C\u5DF2\u5B8C\u6210 " + percent2 + "%", percent2);
          onProgress?.(percent2, rows);
          return rows;
        }, Math.ceil(total / size) - 1, limit);
        results.forEach((r) => all.push(...r));
      }
      return all;
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
  var select = async (accept, multiple = false, dir = false) => {
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
  };
  var toType = async (file, type = "text") => {
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
  };
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
  var funcs_default = {
    isWindows,
    isXPath,
    calcPixel,
    img2Base64,
    unzoom
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
      if (/^\d+$/.test(others[0])) {
        nodes = [nodes[others[0] * 1]];
        others = others.slice(1);
      } else if (others[0] === "<visible>") {
        nodes = nodes.filter((n) => n?._rect()?.width);
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
        } catch {
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
    version: "1.0.100",
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
