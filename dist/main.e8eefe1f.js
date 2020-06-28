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
})({"epB2":[function(require,module,exports) {
var $siteList = $(".siteList");
var $lastLi = $siteList.find("li.last");
var x = localStorage.getItem("x");
var xObject = JSON.parse(x); //把字符串重新变成对象

var hashMap = xObject || [//   xObject||[]  表示:如果 xObject存在，就使用 xObject的值，如果不存在，就用[]里面的默认值作为初始值
{
  logo: "A",
  url: "https://www.acfun.cn"
}, {
  logo: "B",
  url: "https://www.bilibili.com"
}];

var simplifyUrl = function simplifyUrl(url) {
  return url.replace("https://", "").replace("http://", "").replace("www.", "").replace(/\/.*/, ""); //  replace(/\/.*/, "")   删除/开头的内容
};

var render = function render() {
  $siteList.find("li:not(.last)").remove(); //找到除了最后一个.last以外的所有的li,清空这些li

  hashMap.forEach(function (node, index) {
    var $li = $("<li>\n    <div class=\"site\">\n      <div class=\"logo\">\n      ".concat(node.logo, "\n      </div>\n      <div class=\"link\">").concat(simplifyUrl(node.url), "</div>\n      <div class=\"close\">\n      <svg class=\"icon\">\n        <use xlink:href=\"#icon-close\"></use>\n      </svg>\n      </div>\n    </div>\n</li> ")).insertBefore($lastLi);
    $li.on("click", function () {
      window.open(node.url); //通过 window.open实现a标签的点击跳转功能
    }); // 删除功能

    $li.on("click", ".close", function (e) {
      e.stopPropagation();
      /*阻止冒泡行为，点击x按钮，不会跳转超链接 ，阻止冒泡对a标签无效*/

      hashMap.splice(index, 1);
      render();
    });
  });
};

render();
$(".addButton").on("click", function () {
  var url = window.prompt("请问你要添加的网址是啥？");

  if (url.indexOf("http") !== 0) {
    url = "https://" + url;
  }

  hashMap.push({
    logo: simplifyUrl(url)[0].toUpperCase(),
    //.toUpperCase()将小写转为大写
    url: url
  }); //重新渲染页面

  render();
}); //关闭页面时，会将hashMap存入localStorage

window.onbeforeunload = function () {
  console.log("页面要关闭了");
  var String = JSON.stringify(hashMap); //JSON.stringify可以把一个对象变为字符串

  localStorage.setItem("x", String);
}; //添加键盘事件


$(document).on("keypress", function (e) {
  //   const key = e.key;   可以简写为下面形式：
  console.log(e.key);
  var key = e.key;

  for (var i = 0; i < hashMap.length; i++) {
    // console.log(hashMap[i].logo.toLowerCase);
    if (hashMap[i].logo.toLowerCase() === key) {
      //toLowerCase 转为小写
      window.open(hashMap[i].url);
    }
  }
});
},{}]},{},["epB2"], null)
//# sourceMappingURL=https://shanj0508.monster/web-project/nav/dist/main.e8eefe1f.js.map