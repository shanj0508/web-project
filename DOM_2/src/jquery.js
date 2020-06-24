window.$ = window.jQuery = function (selectorOrArray) {
  //jQuery可以接收一个选择器或者数组
  let elements;
  //通过重载，判断selectorOrArray是选择器还是数组，分别赋值elements
  if (typeof selectorOrArray === "string") {
    //如果selectorOrArray是选择器，则elements是返回的一些元素
    elements = document.querySelectorAll(selectorOrArray);
  } else if (selectorOrArray instanceof Array) {
    //如果selectorOrArray是数组，则elements就是这个数组
    elements = selectorOrArray;
  }
  //api可以操作elements
  return {
    //简写步骤2、将const api ={} 替换为return {}  同时省略最后的return api  直接将该对象return
    //闭包：函数访问外部变量
    // addClass中访问了外部的elements变量
    addClass(className) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(className);
      }
      return this; //返回的是api,因为addClass函数调用时是通过api.addClass调用的，因此this就是api,可以直接return this
      //简写步骤3、当直接return对象时，不给对象命名，则这里只能写return this ，不能写return api，当函数调用时，this指向调用它的api
    },
    find(selector) {
      let array = [];
      for (let i = 0; i < elements.length; i++) {
        //jQuery('.test1').find('.child')
        //jQuery(选择器)先查找返回了一些元素elements
        //调用find(选择器)时，先遍历jQuery返回的elements
        //在每个element[i]下面通过querySelectorAll(selector)查找符合的元素
        //由于querySelectorAll返回的是一组伪数组，因此需要 Array.from()将返回的伪数组转为真正的数组，并赋值给elements2
        const elements2 = Array.from(elements[i].querySelectorAll(selector));
        //通过array.concat将elements2与array连接起来，形成新的array
        array = array.concat(elements2);
      }
      //return array    //如果这里是return array ，则后面的 . 无法继续链式操作
      //const newApi = jQuery(array)   //通过jQuery构造一个新的newApi 并返回
      //return newApi     //如果直接return api/this 那么每次得到新的元素都会污染之前的api,所以必须得到新的对象newApi,避免和原来的api相互污染，影响原先的函数调用
      array.oldApi = this; //this==> 当前api===>旧的 api
      return jQuery(array); //上面两句可以合并简写为这一句。
      //返回一个新的api对象，来操作array,我们给jQuery()的参数传什么，jQuery就会返回一个对象用来操作什么
    },

    each(fn) {
      //遍历当前的所有元素
      for (let i = 0; i < elements.length; i++) {
        fn.call(null, elements[i], i);
      }
      return this; //this就是api对象
    },
    parent() {
      //获取每个元素的父元素
      const array = [];
      this.each((node) => {
        if (array.indexOf(node.parentNode) === -1) {
          //array.indexOf(node.parentNode) === -1 表示node.parentNode不在array数组中
          //如果没有则添加，去重复
          array.push(node.parentNode);
        }
      });
      return jQuery(array); //返回一个可操作array数组的jQuery对象
    },
    children() {
      //获取每个元素的子元素
      const array = [];
      this.each((node) => {
        array.push(...node.children); //展开操作符...的作用是，把node.children里面的内容拆开，依次放入array中，得到一个平铺的数组
      });
      return jQuery(array); //返回一个可操作array数组的jQuery对象
    },
    siblings() {
      //获取每个元素的兄弟节点
      const array = [];
      this.each((node) => {
        array.push(
          ...Array.from(node.parentNode.children).filter((n) => n !== node)
        );
      });
      return jQuery(array); //返回一个可操作array数组的jQuery对象
    },
    index() {
      //获取每个元素的位置
      const array = [];
      this.each((node) => {
        let list = node.parentNode.children;
        let i;
        for (i = 0; i < list.length; i++) {
          if (list[i] === node) {
            break;
          }
        }
        array.push(i);
      });
      return jQuery(array); //返回一个可操作array数组的jQuery对象
    },
    next() {
      //获取每个元素的下一个兄弟元素
      const array = [];
      this.each((node) => {
        let x = node.nextSibling;
        while (x && x.nodeType === 3) {
          //如果x存在并且x的节点类型是文本节点，那么就继续找下一个
          x = x.nextSibling;
        }
        array.push(x);
      });
      return jQuery(array); //返回一个可操作array数组的jQuery对象
    },
    prev() {
      //获取每个元素的下一个兄弟元素
      const array = [];
      this.each((node) => {
        let x = node.previousSibling;
        while (x && x.nodeType === 3) {
          //如果x存在并且x的节点类型是文本节点，那么就继续找下一个
          x = x.previousSibling;
        }
        array.push(x);
      });
      return jQuery(array); //返回一个可操作array数组的jQuery对象
    },
    print() {
      //打印出当前的elements
      console.log(elements);
    },
    oldApi: selectorOrArray.oldApi, //将array中的oldApi赋值给api对象，这样在end()中才能使用这个oldApi

    end() {
      return this.oldApi; //this===> 新的api
    },
  };
  // return api   //这里的api不能改为this，因为jQuery函数调用是通过window.jQuery调用的，this => window,不是api
  //简写步骤1、这里return api 可以省略，直接在对象声明时return
};
