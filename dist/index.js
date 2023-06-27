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
    clipboard: () => clipboard_default,
    cookies: () => cookies_default,
    dbsdk: () => dbsdk_default2,
    default: () => stardust_browser_default,
    excel: () => excel_default,
    file: () => file_default,
    fullscreen: () => fullscreen_default,
    funcs: () => funcs_default,
    selector: () => selector_default,
    storage: () => storage_default
  });

  // dbsdk/api/common.js
  var createCommon = (req = request) => {
    const uploadFile = (data) => {
      return req({
        url: "/common/upload_file",
        method: "post",
        data
      });
    };
    const getSetting = async (params) => {
      return req({
        url: "/common/get_setting",
        method: "get",
        params
      });
    };
    const updateSetting = async (data) => {
      return req({
        url: "/common/update_setting",
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
      uploadFile,
      getSetting,
      updateSetting,
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
  var writeText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return;
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
  var getText = async () => {
    try {
      return await navigator.clipboard.readText();
    } catch {
      return null;
    }
  };
  var clipboard_default = {
    writeText,
    getText
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
  function export_table_to_excel(selector) {
    var theTable = typeof selector === "string" ? document.querySelector(selector) : selector;
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
  var select = async (accept, multiple = false) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = accept;
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
  var isXPath = (selector) => /^(\/\/|\.\.)/.test(selector.trim());
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
  var img2Base64 = (selector) => {
    const img = typeof selector === "string" ? $one(selector) : selector;
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
  var xfind = (selector, root, all = false) => {
    const iterator = document.evaluate(selector, root || document);
    if (!all)
      return iterator.iterateNext();
    const nodes = [];
    let n;
    while (n = iterator.iterateNext()) {
      nodes.push(n);
    }
    return nodes;
  };
  var qs = Element.prototype.querySelector;
  var qsa = Element.prototype.querySelectorAll;
  var sdqs = ShadowRoot.prototype.querySelector;
  var sdqsa = ShadowRoot.prototype.querySelectorAll;
  Element.prototype.$one = function(selector) {
    const root = this.shadowRoot || this;
    const finder = this.shadowRoot ? sdqs : qs;
    const [first, ...others] = selector.split(" >> ");
    let node = isXPath(first) ? xfind(first, root) : finder.call(root, first);
    if (others.length) {
      node = node.$one(others.join(" >> "));
    }
    return node;
  };
  Element.prototype.$all = function(selector) {
    const root = this.shadowRoot || this;
    const finder = this.shadowRoot ? sdqsa : qsa;
    return [...finder.call(root, selector)];
  };
  Element.prototype._text = function(value) {
    if (value) {
      this.textContent = value;
    } else {
      return this.textContent.trim();
    }
  };
  window.$one = document.$one = function(selector) {
    return Element.prototype.$one.call(document.documentElement, selector);
  };
  window.$all = document.$all = function(selector) {
    return Element.prototype.$all.call(document.documentElement, selector);
  };
  var $one2 = window.$one;
  var $all = window.$all;
  var selector_default = {
    $one: $one2,
    $all
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
  var stardust_browser_default = {
    version: "1.0.23",
    dbsdk: dbsdk_default2,
    clipboard: clipboard_default,
    cookies: cookies_default,
    excel: excel_default,
    file: file_default,
    fullscreen: fullscreen_default,
    funcs: funcs_default,
    selector: selector_default,
    storage: storage_default
  };
  return __toCommonJS(stardust_browser_exports);
})();
