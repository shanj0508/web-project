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
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = ".skin * {\n    box-sizing: border-box;\n    margin: 0px;\n    padding: 0px;\n  }\n  .skin *::before,\n  .skin *::after {\n    box-sizing: border-box;\n  }\n  .skin {\n    background: #fee433;\n    min-height: 50vh;\n    position: relative;\n  }\n  .eye {\n    border: 3px solid #010100;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    margin-left: -32px; /*\u5C45\u4E2D*/\n    border-radius: 50%;\n    background: #2e2e2e;\n  }\n  /* \u773C\u767D\uFF1A\u53EF\u4EE5\u7528\u4F2A\u5143\u7D20\u505A\uFF0C\u4E5F\u53EF\u4EE5\u52A0\u4E00\u4E2A\u5143\u7D20\u53BB\u505A */\n  .eye::before {\n    content: \"\";\n    display: block;\n    border: 3px solid #000000;\n    width: 30px;\n    height: 30px;\n    background: #fff;\n    border-radius: 50%;\n    position: relative;\n    left: 4px;\n    top: 2px;\n  }\n  /*\u4EA4\u96C6\u9009\u62E9\u5668\uFF1A .eye.left \u4E2D\u95F4\u6CA1\u6709\u7A7A\u683C */\n  .eye.left {\n    transform: translateX(-100px);\n  }\n  .eye.right {\n    transform: translateX(100px);\n  }\n  \n  .nose {\n    width: 20px;\n    height: 6px;\n    position: relative;\n    left: 50%;\n    top: 145px;\n    margin-left: -10px;\n    border-radius: 10px 10px 0px 0px; /*\u5DE6\u4E0A\u548C\u53F3\u4E0A\u5206\u522B10px,\u53F3\u4E0B\u548C\u5DE6\u4E0B\u5206\u522B0px*/\n    background: black;\n    z-index: 10;\n  }\n  @keyframes wave {\n    0% {\n      transform: rotate(0deg);\n    }\n    33% {\n      transform: rotate(5deg);\n    }\n    66% {\n      transform: rotate(-5deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n  .nose:hover {\n    transform-origin: center bottom;\n    /* transform-origin: 50% 100%; \u8BBE\u7F6Ewave\u6447\u52A8\u7684\u539F\u70B9\uFF1Atransform-origin: 50% 100%  \u8868\u793A \u5DE6\u53F3\u6643\u52A8\u4EE5y\u8F74\u4E3A\u539F\u70B9\uFF0C\u4E0A\u4E0B\u6643\u52A8\u4EE5\u4E0B\u9876\u70B9\u4E3A\u539F\u70B9*/\n    animation: wave 300ms infinite linear;\n  }\n  .san {\n    border: 10px solid red;\n    border-color: black transparent transparent transparent;\n    width: 0px;\n    height: 0px;\n    position: absolute;\n    bottom: -20px;\n    /* right: -1px; \u5982\u679Cyuan\u91CC\u9762\u5199\u4E86border 1px  \u5C31\u4F1A\u5DEE\u8FD91\u50CF\u7D20\u6CA1\u5BF9\u9F50*/\n    /* right: -2px; */\n    /* left: 50%;\n    top: 200px;\n    margin-left: -5px; */\n  }\n  .mouth {\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    top: 270px;\n    margin: -100px;\n  }\n  .mouth .up {\n    position: relative;\n    top: -20px;\n    z-index: 1;\n  }\n  .mouth .up .lip {\n    border: 3px solid black;\n    width: 100px;\n    height: 30px;\n    border-top-color: transparent;\n    position: relative;\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n    background: #fee433; /*\u4E0D\u8BBE\u7F6E\u80CC\u666F\u989C\u8272\uFF0C\u9ED8\u8BA4\u80CC\u666F\u989C\u8272\u662F\u900F\u660E\u7684\uFF0C\u8FD9\u6837\u540E\u9762\u7684\u820C\u5934\u90E8\u5206\u989C\u8272\u4F1A\u900F\u4E0A\u6765\uFF0C\u56E0\u6B64\u9700\u8981\u8BBE\u7F6E\u80CC\u666F\u989C\u8272\uFF0C\u9632\u6B62\u4E0B\u9762\u7684\u989C\u8272\u900F\u4E0A\u6765*/\n  }\n  .mouth .up .lip.left {\n    border-radius: 0 0 0 50px;\n    border-right-color: transparent;\n    transform: rotate(-15deg) translateX(-53px);\n  }\n  .mouth .up .lip::before {\n    content: \"\"; /*\u5FC5\u987B\u5199\uFF0C\u5426\u5219\u770B\u4E0D\u5230\u4F2A\u5143\u7D20*/\n    display: block; /*\u4F2A\u5143\u7D20\u9ED8\u8BA4\u663E\u793A\u4E3A\u884C\u5185\u5143\u7D20*/\n    width: 7px;\n    height: 30px;\n    background: #fee433;\n    position: absolute;\n    bottom: 0px;\n  }\n  \n  .mouth .up .lip.left::before {\n    right: -6px;\n  }\n  .mouth .up .lip::after {\n    content: \"\"; /*\u5FC5\u987B\u5199\uFF0C\u5426\u5219\u770B\u4E0D\u5230\u4F2A\u5143\u7D20*/\n    display: block; /*\u4F2A\u5143\u7D20\u9ED8\u8BA4\u663E\u793A\u4E3A\u884C\u5185\u5143\u7D20*/\n    width: 100px;\n    height: 7px;\n    background: #fee433;\n    position: absolute;\n    left: 0px;\n    top: -7px;\n  }\n  \n  .mouth .up .lip.right {\n    border-radius: 0 0 50px 0;\n    border-left-color: transparent;\n    transform: rotate(15deg) translateX(53px);\n  }\n  .mouth .up .lip.right::before {\n    left: -6px;\n  }\n  .mouth .down {\n    height: 180px;\n    position: absolute;\n    top: 5px;\n    width: 100%;\n    overflow: hidden; /*\u8D85\u51FA\u90E8\u5206\u9690\u85CF*/\n  }\n  .mouth .down .inner {\n    border: 3px solid black;\n    width: 150px;\n    height: 1000px;\n    border-radius: 75px / 300px; /*\u820C\u5934\u7684\u5F62\u72B6*/\n    background: #990513;\n    position: absolute;\n    bottom: 0px;\n    left: 50%;\n    margin-left: -75px;\n    overflow: hidden;\n  }\n  \n  .mouth .down .inner .outer {\n    width: 200px;\n    height: 300px;\n    background: #fc4a62;\n    border-radius: 100px;\n    position: absolute;\n    bottom: -155px;\n    left: 50%;\n    margin-left: -100px;\n  }\n  \n  .face {\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    background: #fc0d1c;\n    border-radius: 50%;\n    position: absolute;\n    top: 200px;\n    left: 50%;\n    margin-left: -44px;\n  }\n  .face > img {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n  }\n  .face.left {\n    transform: translateX(-180px);\n  }\n  .face.left > img {\n    transform: rotateY(180deg);\n    transform-origin: 0 0;\n  }\n  \n  .face.right {\n    transform: translateX(180px);\n  }";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  n: 0,
  time: 100,
  id: undefined,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2")
  },
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  events: {
    //hashTable
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        //如果这个key是player的自身属性，而不是继承来的属性，执行下面的内容
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    console.log(_css.default.substr(0, player.n));
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
    /*scrollHeight可滚动高度 */
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"css.js"}],"C:/Users/Shanj/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53967" + '/');

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
},{}]},{},["C:/Users/Shanj/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=test.e98b79dd.js.map