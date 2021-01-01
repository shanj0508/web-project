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
var string = "\n.skin * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  .skin *::before,\n  .skin *::after {\n    box-sizing: border-box;\n  }\n  .skin {\n    background: #ffe600;\n    min-height: 100vh;\n    position: relative;\n  }\n  @keyframes blink {\n    0% {\n      height: 0;\n    }\n    90% {\n      height: 0;\n    }\n    92.5% {\n      height: 100%;\n    }\n    95% {\n      height: 0;\n    }\n    97.5% {\n      height: 100%;\n    }\n    100% {\n      height: 0;\n    }\n  }\n  @keyframes look-around {\n    0% {\n      transform: translate(0);\n    }\n    50% {\n      transform: translate(50%, 30%);\n    }\n  \n    100% {\n      transform: translate(0, 0);\n    }\n  }\n  .eye::after {\n    content: \"\";\n    position: absolute;\n    top: -5px;\n    left: -5px;\n    height: 0;\n    width: 70px;\n    border-radius: 0 0 50% 50% / 0 0 40% 40%;\n    background: #ffe600;\n    animation: blink 4s infinite ease-in;\n  }\n  .skin > .eye {\n    border: 3px solid #000000;\n    border-radius: 50%;\n    width: 66px;\n    height: 66px;\n    position: absolute;\n    top: 226px;\n    background: #2e2e2e;\n    left: 50%;\n    margin-left: -33px;\n  }\n  \n  .skin > .left {\n    transform: translateX(-120px);\n  }\n  .skin > .right {\n    transform: translateX(120px);\n  }\n  .skin > .eye > .white {\n    border: 2px solid black;\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    margin-left: 10px;\n    margin-top: 0;\n    background: #ffffff;\n    transform-origin: 50% 100%;\n    /* animation: eyeWave 0.25s infinite linear; */\n    animation: look-around 4s infinite;\n  }\n  \n  @keyframes eyeWave {\n    0% {\n      transform: rotate(0deg);\n    }\n    25% {\n      transform: rotate(5deg);\n    }\n    50% {\n      transform: rotate(0deg);\n    }\n    75% {\n      transform: rotate(-5deg);\n    }\n    100% {\n      transform: rotate(0deg);\n      transform-origin: 50% 100%;\n    }\n  }\n  @keyframes wave {\n    0% {\n      transform: rotate(0deg);\n      transform-origin: 50% 100%;\n    }\n    25% {\n      transform: rotate(15deg);\n      transform-origin: 50% 100%;\n    }\n    50% {\n      transform: rotate(0deg);\n      transform-origin: 50% 100%;\n    }\n    75% {\n      transform: rotate(-15deg);\n      transform-origin: 50% 100%;\n    }\n    100% {\n      transform: rotate(0deg);\n      transform-origin: 50% 100%;\n    }\n  }\n  .skin > .nose {\n    position: absolute;\n    width: 20px;\n    height: 8px;\n    top: 261px;\n    left: 50%;\n    margin-left: -10px;\n    z-index: 10;\n  }\n  \n  .skin > .nose:hover {\n    transform-origin: 50% 100%;\n    animation: wave 0.3s infinite linear;\n  }\n  .skin > .nose > .yuan {\n    position: absolute;\n    width: 20px;\n    height: 8px;\n    left: 50%;\n    margin-left: -10px;\n    border-radius: 50% / 50%;\n    background: black;\n  }\n  .skin > .nose > .san {\n    position: absolute;\n    border-color: black transparent transparent transparent;\n    border-top: 9px solid black;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    width: 0;\n    height: 0;\n    top: 5px;\n    left: 50%;\n    margin-left: -10px;\n  }\n  .skin > .face {\n    border: 3px solid black;\n    position: absolute;\n    width: 90px;\n    height: 90px;\n    left: 50%;\n    margin-left: -45px;\n    top: 340px;\n    border-radius: 50%;\n    background: #ff0000;\n  }\n  \n  .skin > .leftFace {\n    transform: translateX(-170px);\n  }\n  .skin > .rightFace {\n    transform: translateX(170px);\n  }\n\n  .skin > .mouth {\n    position: absolute;\n    width: 200px;\n    height: 200px;\n    top: 293px;\n    left: 50%;\n    margin-left: -100px;\n  }\n  .skin > .mouth > .up {\n    position: relative;\n    top: -5px;\n    z-index: 1;\n  }\n  .skin > .mouth > .up > .lips {\n    border: 3px solid black;\n    width: 86px;\n    height: 25px;\n    position: absolute;\n    left: 50%;\n    top: -4px;\n    background-color: #ffe600;\n  }\n  .skin > .mouth > .up > .left {\n    border-radius: 0 0 0 50px /0 0 0 30px;\n    border-color: transparent transparent transparent black;\n    transform: rotate(-22deg);\n    margin-left: -85px;\n  }\n  .skin > .mouth > .up > .left::before {\n    content: \"\";\n    display: block;\n    width: 6px;\n    height: 25px;\n    position: absolute;\n    top: -6px;\n    right: -4px;\n    background: #ffe600;\n  }\n  .skin > .mouth > .up > .left::after {\n    content: \"\";\n    display: block;\n    width: 86px;\n    height: 5px;\n    position: absolute;\n    top: -6px;\n    background: #ffe600;\n  }\n  .skin > .mouth > .up > .right {\n    border-radius: 0 0 50px 0 /0 0 30px 0;\n    border-color: transparent transparent black transparent;\n    transform: rotate(22deg);\n  }\n  .skin > .mouth > .up > .right::before {\n    content: \"\";\n    display: block;\n    width: 6px;\n    height: 25px;\n    position: absolute;\n    top: -6px;\n    left: -4px;\n    background: #ffe600;\n  }\n  .skin > .mouth > .up > .right::after {\n    content: \"\";\n    display: block;\n    width: 6px;\n    height: 25px;\n    position: absolute;\n    top: -16px;\n    left: 60px;\n    background: #ffe600;\n  }\n  .skin > .mouth > .down {\n    width: 300px;\n    height: 175px;\n    overflow: hidden;\n    position: absolute;\n    left: 50%;\n    margin-left: -150px;\n  }\n  .skin > .mouth > .down > .yuan1 {\n    border: 3px solid black;\n    width: 160px;\n    height: 800px;\n    position: absolute;\n    left: 50%;\n    margin-left: -80px;\n    border-radius: 100px/400px;\n    top: -633px;\n    background: #9b000a;\n    overflow: hidden;\n  }\n  .skin > .mouth > .down > .yuan1 > .yuan2 {\n    border: 3px solid #ff485f;\n    background: #ff485f;\n    width: 200px;\n    height: 300px;\n    position: absolute;\n    bottom: -162px;\n    left: 50%;\n    margin-left: -100px;\n    border-radius: 50%;\n  }\n  \n  \n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  n: 1,
  time: 100,
  id: undefined,
  ui: {
    outPutDiv: document.querySelector('#outPutDiv'),
    outPutStyle: document.querySelector('#outPutStyle'),
    btnPause: document.querySelector('#btnPause'),
    btnPlay: document.querySelector('#btnPlay'),
    btnSlow: document.querySelector('#btnSlow'),
    btnNormal: document.querySelector('#btnNormal'),
    btnFast: document.querySelector('#btnFast')
  },
  init: function init() {
    player.ui.outPutDiv.innerText = _css.default.substr(0, player.n);
    player.ui.outPutStyle.innerHTML = _css.default.substr(0, player.n);
    player.play();
    player.bindEvents();
  },
  events: {
    'btnPause': 'pauseContinue',
    'btnPlay': 'replay',
    'btnSlow': 'slow',
    'btnNormal': 'normal',
    'btnFast': 'fast'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        player.ui[key].onclick = player[value];
      }
    } // // 暂停 & 继续
    // player.ui.btnPause.onclick=player.pauseContinue
    // //重放
    // player.ui.btnPlay.onclick=player.replay
    // //慢速
    // player.ui.btnSlow.onclick=player.slow
    // //中速
    // player.ui.btnNormal.onclick=player.normal
    // //快速
    // player.ui.btnFast.onclick=player.fast

  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      player.pause();
      return;
    }

    player.ui.outPutDiv.innerText = _css.default.substr(0, player.n);
    player.ui.outPutStyle.innerHTML = _css.default.substr(0, player.n);
    player.ui.outPutDiv.scrollTop = outPutDiv.scrollHeight;
  },
  play: function play() {
    //定时器 
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id); //取消定时器

    player.id = undefined; //清空定时器id的值
  },
  replay: function replay() {
    // location.reload();
    player.n = 0;

    if (player.id === undefined) {
      player.play();
      btnPause.innerText = '暂停';
    }
  },
  pauseContinue: function pauseContinue() {
    if (btnPause.innerText === '暂停') {
      player.pause();
      btnPause.innerText = '继续';
    } else if (btnPause.innerText === '继续') {
      if (player.id === undefined) {
        player.play();
      }

      btnPause.innerText = '暂停';
    }
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
    btnPause.innerText = '暂停';
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
    btnPause.innerText = '暂停';
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
    btnPause.innerText = '暂停';
  }
}; //初始化

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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61337" + '/');

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
//# sourceMappingURL=/test.e98b79dd.js.map