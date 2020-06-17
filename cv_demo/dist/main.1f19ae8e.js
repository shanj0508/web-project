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
})({"main.js":[function(require,module,exports) {
console.log('hi');
var html = document.querySelector('#html'); //通过CSS选择器找到demo元素  demo=>html

var style = document.querySelector('#style'); //通过CSS选择器找到style元素

var string = "\n/* \u4F60\u597D\uFF0C\u6211\u53EBJean\n * \u63A5\u4E0B\u6765\u6211\u8981\u5C55\u793A\u6211\u7684\u524D\u7AEF\u529F\u5E95\n * \u9996\u5148\u6211\u8981\u51C6\u5907\u4E00\u4E2Adiv \n */\n#div1{\n    border: 1px solid red;\n    width: 200px;\n    height: 200px;\n}\n/*\u63A5\u4E0B\u6765\u6211\u4F1A\u628Adiv\u53D8\u6210\u4E00\u4E2A\u516B\u5366\u56FE\n * \u6CE8\u610F\u770B\u597D\u4E86\n * \u9996\u5148\u628Adiv\u53D8\u6210\u4E00\u4E2A\u5706\n*/\n#div1{\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0,0,0,0.5);\n    border: none;\n}\n/**\n * \u516B\u5366\u662F\u9634\u9633\u5F62\u6210\u7684\n * \u4E00\u9ED1\u4E00\u767D\n*/\n#div1{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/*\u7ED9\u516B\u5366\u56FE\u52A0\u4E0A\u7075\u73E0\u548C\u9B54\u4E38*/\n#div1::before{\n    width: 100px;\n    height: 100px;\n    top:0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: #000;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n#div1::after{\n    width: 100px;\n    height: 100px;\n    bottom:0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: #fff;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n}\n\n"; //加注释是为了让style中的样式生效
//#div1::before  #div1::after  在div1前后加上伪元素

var string2 = ""; //string = string.replace(/\n/g,"<br>");  //用正则表达式匹配所有的回车，替换为"<br>"  有BUG，每次"<br>"的<会被打印到页面中

/*
replace() 方法返回一个由一个字符串或正则表达式替换后的新字符串。原字符串不会改变。
语法：
str.replace(regexp|substr, newSubStr|function)
    regexp：正则表达式
    substr：被替换的字符串，仅第一个匹配到的字符串会被替换
    newSubStr：用于替换掉第一个参数在原字符串中的匹配部分的字符串

*/
//console.log(string.length);

var n = 0; //计数器,从0开始可以作为数组的下标使用，n=-1，这样下面的递归里面，n可以从0开始
//demo.innerHTML=string.substring(0,n);  //设置demo里面的内容  上面let n = -1后，这句可以注释掉不要，下面的递归里面可以表示n = 0 的情况
//console.log(demo.innerHTML);

/*
substring() 方法返回一个字符串在开始索引到结束索引之间的一个子字符串。
语法：
str.substring(indexStart[, indexEnd]) 
    indexStart：需要截取的第一个字符的索引，该索引位置的字符作为返回的字符串的首字母。
    indexEnd：结束的索引值，该索引对应的字符不包含在截取的字符串内。
*/
//定时器设置 n 自动递增
//方法一：setTimeout
// setTimeout(()=>{
//     n=n+1;
//     demo.innerHTML=n;
// },3000)      //setTimeout设置三秒，表示三秒后执行一次，但只执行一次
//方法二：setInterval
// setInterval(() => {
//     n=n+1;
//     demo.innerHTML=n;
// }, 3000);   //setInterval设置3秒，表示每三秒执行一次
//方法三：递归的setTimeout达到setInterval的效果
//将每秒执行的内容封装成一个函数
//好处：通过if语句进行条件判断，可以随时停止

var step = function step() {
  setTimeout(function () {
    // console.log(n);
    // console.log(demo.innerHTML);
    //判断字符串的第n个是否是回车
    // if(string[n]==="\n"){
    //     //如果是回车，直接加上"<br>"
    //     string2 += "<br>"; 
    // }else{
    //     //如果不是回车就直接照搬
    //     string2 += string[n];  //通过定义一个string2来替换innerHTML方法。
    // }
    //将上面的if-else语句优化为问号冒号表达式
    // string2 +=string[n]==="\n"? "<br>":string[n]; 
    //判断字符串的第n个是否是回车和空格
    if (string[n] === "\n") {
      //如果是回车，直接加上"<br>"
      string2 += "<br>";
    } else if (string[n] === " ") {
      //如果是空格，直接加上"&nbsp;"
      string2 += "&nbsp;";
    } else {
      //如果不是回车和空格，就直接照搬
      string2 += string[n]; //通过定义一个string2来替换innerHTML方法。
    } // demo.innerHTML=string.substring(0,n);   //使用innerHTML每次"<br>"未输入完整时，< 都会在页面中显示一下，因此不使用substring方法


    html.innerHTML = string2; //使用另一个字符串替换的方法，可以随时更改字符串的内容

    window.scrollTo(0, 99999); //设置浏览器窗口滚动条滚动到最下方

    html.scrollTo(0, 99999); //设置div的滚动条滚动到最下方

    style.innerHTML = string.substring(0, n); //console.log(string2);

    if (n < string.length - 1) {
      //如果n不是最后一个，就继续
      n = n + 1;
      step();
    }
  }, 50);
};

step();
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54114" + '/');

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
},{}]},{},["C:/Users/Shanj/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map