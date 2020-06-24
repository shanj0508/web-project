// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"jquery.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

window.jQuery = function (selectorOrArray) {
  //jQuery可以接收一个选择器或者数组
  var elements; //通过重载，判断selectorOrArray是选择器还是数组，分别赋值elements

  if (typeof selectorOrArray === "string") {
    //如果selectorOrArray是选择器，则elements是返回的一些元素
    elements = document.querySelectorAll(selectorOrArray);
  } else if (selectorOrArray instanceof Array) {
    //如果selectorOrArray是数组，则elements就是这个数组
    elements = selectorOrArray;
  } //api可以操作elements


  return {
    //简写步骤2、将const api ={} 替换为return {}  同时省略最后的return api  直接将该对象return
    //闭包：函数访问外部变量
    // addClass中访问了外部的elements变量
    addClass: function addClass(className) {
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add(className);
      }

      return this; //返回的是api,因为addClass函数调用时是通过api.addClass调用的，因此this就是api,可以直接return this
      //简写步骤3、当直接return对象时，不给对象命名，则这里只能写return this ，不能写return api，当函数调用时，this指向调用它的api
    },
    find: function find(selector) {
      var array = [];

      for (var i = 0; i < elements.length; i++) {
        //jQuery('.test1').find('.child')
        //jQuery(选择器)先查找返回了一些元素elements
        //调用find(选择器)时，先遍历jQuery返回的elements
        //在每个element[i]下面通过querySelectorAll(selector)查找符合的元素
        //由于querySelectorAll返回的是一组伪数组，因此需要 Array.from()将返回的伪数组转为真正的数组，并赋值给elements2
        var elements2 = Array.from(elements[i].querySelectorAll(selector)); //通过array.concat将elements2与array连接起来，形成新的array

        array = array.concat(elements2);
      } //return array    //如果这里是return array ，则后面的 . 无法继续链式操作
      //const newApi = jQuery(array)   //通过jQuery构造一个新的newApi 并返回
      //return newApi     //如果直接return api/this 那么每次得到新的元素都会污染之前的api,所以必须得到新的对象newApi,避免和原来的api相互污染，影响原先的函数调用


      array.oldApi = this; //this==> 当前api===>旧的 api

      return jQuery(array); //上面两句可以合并简写为这一句。
      //返回一个新的api对象，来操作array,我们给jQuery()的参数传什么，jQuery就会返回一个对象用来操作什么
    },
    each: function each(fn) {
      //遍历当前的所有元素
      for (var i = 0; i < elements.length; i++) {
        fn.call(null, elements[i], i);
      }

      return this; //this就是api对象
    },
    parent: function parent() {
      //获取每个元素的父元素
      var array = [];
      this.each(function (node) {
        if (array.indexOf(node.parentNode) === -1) {
          //array.indexOf(node.parentNode) === -1 表示node.parentNode不在array数组中
          //如果没有则添加，去重复
          array.push(node.parentNode);
        }
      });
      return jQuery(array); //返回一个可操作array数组的jQuery对象
    },
    children: function children() {
      //获取每个元素的子元素
      var array = [];
      this.each(function (node) {
        array.push.apply(array, _toConsumableArray(node.children)); //展开操作符...的作用是，把node.children里面的内容拆开，依次放入array中，得到一个平铺的数组
      });
      return jQuery(array); //返回一个可操作array数组的jQuery对象
    },
    siblings: function siblings() {
      //获取每个元素的兄弟节点
      var array = [];
      this.each(function (node) {
        array.push.apply(array, _toConsumableArray(Array.from(node.parentNode.children).filter(function (n) {
          return n !== node;
        })));
      });
      return jQuery(array); //返回一个可操作array数组的jQuery对象
    },
    index: function index() {
      //获取每个元素的位置
      var array = [];
      this.each(function (node) {
        var list = node.parentNode.children;
        var i;

        for (i = 0; i < list.length; i++) {
          if (list[i] === node) {
            break;
          }
        }

        array.push(i);
      });
      return jQuery(array); //返回一个可操作array数组的jQuery对象
    },
    next: function next() {
      //获取每个元素的下一个兄弟元素
      var array = [];
      this.each(function (node) {
        var x = node.nextSibling;

        while (x && x.nodeType === 3) {
          //如果x存在并且x的节点类型是文本节点，那么就继续找下一个
          x = x.nextSibling;
        }

        array.push(x);
      });
      return jQuery(array); //返回一个可操作array数组的jQuery对象
    },
    prev: function prev() {
      //获取每个元素的下一个兄弟元素
      var array = [];
      this.each(function (node) {
        var x = node.previousSibling;

        while (x && x.nodeType === 3) {
          //如果x存在并且x的节点类型是文本节点，那么就继续找下一个
          x = x.previousSibling;
        }

        array.push(x);
      });
      return jQuery(array); //返回一个可操作array数组的jQuery对象
    },
    print: function print() {
      //打印出当前的elements
      console.log(elements);
    },
    oldApi: selectorOrArray.oldApi,
    //将array中的oldApi赋值给api对象，这样在end()中才能使用这个oldApi
    end: function end() {
      return this.oldApi; //this===> 新的api
    }
  }; // return api   //这里的api不能改为this，因为jQuery函数调用是通过window.jQuery调用的，this => window,不是api
  //简写步骤1、这里return api 可以省略，直接在对象声明时return
};
},{}],"C:/Users/Shanj/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59072" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Shanj/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","jquery.js"], null)
//# sourceMappingURL=/jquery.7a6e0748.js.map