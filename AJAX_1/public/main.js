// //请求main.js
// const request = new XMLHttpRequest(); //1、创建XMLHttpRequest对象
// request.open("GET", "/main.js"); //2、调用对象的open方法 XMLHttpRequest.open() 方法初始化一个请求。该方法要从JavaScript代码使用，Request.open(method, url);
// request.XMLHttpRequest = () => {
//   //3、监听对象的onload和onerror事件
//   //   console.log(request.response);
//   //创建script标签
//   const script = document.createElement("script");
//   //填写script内容
//   script.innerHTML = request.response;
//   //将script插入页面的head部分
//   document.body.appendChild(script);
//   // console.log("成功了");
// };
// request.onerror = () => {
//   console.log("失败了");
// };
// request.send(); //4、调用对象的send方法

//请求下一页
let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest(); //1、创建XMLHttpRequest对象
  request.open("GET", `/page${n + 1}.json`); //2、调用对象的open方法 XMLHttpRequest.open() 方法初始化一个请求。该方法要从JavaScript代码使用，Request.open(method, url);
  request.onreadystatechange = () => {
    //3、监听对象的onreadystatechange事件
    if (request.readyState === 4) {
      //request.readyState === 4 表示下载完成，但不能判断返回的状态是成功2xx还是失败4xx
      if (request.status >= 200 && request.status < 300) {
        //request.status的值就是返回的状态码，可以通过状态码判断成功和失败
        console.log(request.response); //返回响应  字符串格式
        const array = JSON.parse(request.response);
        array.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item.id;
          xxx.appendChild(li);
        });
        n += 1;
      } else {
        alert("加载CSS失败了");
      }
    }
  };
  request.send(); //4、调用对象的send方法, readyState = 2
};

//请求JSON: onreadystatechange事件
getJSON.onclick = () => {
  const request = new XMLHttpRequest(); //1、创建XMLHttpRequest对象
  request.open("GET", "/5.json"); //2、调用对象的open方法 XMLHttpRequest.open() 方法初始化一个请求。该方法要从JavaScript代码使用，Request.open(method, url);
  request.onreadystatechange = () => {
    //3、监听对象的onreadystatechange事件
    if (request.readyState === 4) {
      //request.readyState === 4 表示下载完成，但不能判断返回的状态是成功2xx还是失败4xx
      if (request.status >= 200 && request.status < 300) {
        //request.status的值就是返回的状态码，可以通过状态码判断成功和失败
        console.log(request.response); //返回响应  字符串格式
        const object = JSON.parse(request.response); //JSON.parse()可以把符合JSON语法的字符串转换为对应的对象或者其他内容
        console.log(object); //对象格式
        myName.textContent = object.name; //将object.name的值显示到页面的id=myName的span标签中
      } else {
        alert("加载CSS失败了");
      }
    }
  };
  request.send(); //4、调用对象的send方法, readyState = 2
};

//请求XML: onreadystatechange事件
getXML.onclick = () => {
  const request = new XMLHttpRequest(); //1、创建XMLHttpRequest对象
  request.open("GET", "/4.xml"); //2、调用对象的open方法 XMLHttpRequest.open() 方法初始化一个请求。该方法要从JavaScript代码使用，Request.open(method, url);
  request.onreadystatechange = () => {
    //3、监听对象的onreadystatechange事件
    if (request.readyState === 4) {
      //request.readyState === 4 表示下载完成，但不能判断返回的状态是成功2xx还是失败4xx
      if (request.status >= 200 && request.status < 300) {
        //request.status的值就是返回的状态码，可以通过状态码判断成功和失败
        console.log(request.response); //返回响应
        console.log(request.responseXML); //以dom对象的格式返回XML文件的响应
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent; //获取warning标签的文本内容，getElementsByTagName返回的是一个数组，因此要用下标定位到单个元素上
        console.log(text.trim()); //trim() 去掉空格
      } else {
        alert("加载CSS失败了");
      }
    }
  };
  request.send(); //4、调用对象的send方法, readyState = 2
};

//请求HTML
getHTML.onclick = () => {
  const request = new XMLHttpRequest(); //1、创建XMLHttpRequest对象
  request.open("GET", "/3.html"); //2、调用对象的open方法 XMLHttpRequest.open() 方法初始化一个请求。该方法要从JavaScript代码使用，Request.open(method, url);
  request.onload = () => {
    //3、监听对象的onload和onerror事件
    console.log(request.response);
    //创建style标签
    const div = document.createElement("div");
    //填写style内容
    div.innerHTML = request.response;
    //将style插入页面的head部分
    document.body.appendChild(div);
    // console.log("成功了");
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send(); //4、调用对象的send方法
};

//请求JS
getJS.onclick = () => {
  const request = new XMLHttpRequest(); //1、创建XMLHttpRequest对象
  request.open("GET", "/2.js"); //2、调用对象的open方法 XMLHttpRequest.open() 方法初始化一个请求。该方法要从JavaScript代码使用，Request.open(method, url);
  request.onload = () => {
    //3、监听对象的onload和onerror事件
    console.log(request.response);
    //创建script标签
    const script = document.createElement("script");
    //填写script内容
    script.innerHTML = request.response;
    //将script插入页面的head部分
    document.body.appendChild(script);
    // console.log("成功了");
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send(); //4、调用对象的send方法
};

// //请求CSS
// getCSS.onclick = () => {
//   const request = new XMLHttpRequest(); //1、创建XMLHttpRequest对象
//   request.open("GET", "/style.css"); //2、调用对象的open方法 XMLHttpRequest.open() 方法初始化一个请求。该方法要从JavaScript代码使用，Request.open(method, url);
//   request.onload = () => {
//     //3、监听对象的onload和onerror事件
//     console.log(request.response);
//     //创建style标签
//     const style = document.createElement("style");
//     //填写style内容
//     style.innerHTML = request.response;
//     //将style插入页面的head部分
//     document.head.appendChild(style);
//     // console.log("成功了");
//   };
//   request.onerror = () => {
//     console.log("失败了");
//   };
//   request.send(); //4、调用对象的send方法
// };

//请求CSS: onreadystatechange事件
getCSS.onclick = () => {
  const request = new XMLHttpRequest(); //1、创建XMLHttpRequest对象
  request.open("GET", "/style.css"); //2、调用对象的open方法 XMLHttpRequest.open() 方法初始化一个请求。该方法要从JavaScript代码使用，Request.open(method, url);
  request.onreadystatechange = () => {
    //3、监听对象的onreadystatechange事件
    console.log(request.readyState);
    if (request.readyState === 4) {
      //request.readyState === 4 表示下载完成，但不能判断返回的状态是成功2xx还是失败4xx
      console.log("下载完成了");
      if (request.status >= 200 && request.status < 300) {
        //request.status的值就是返回的状态码，可以通过状态码判断成功和失败
        //创建style标签
        const style = document.createElement("style");
        //填写style内容
        style.innerHTML = request.response;
        //将style插入页面的head部分
        document.head.appendChild(style);
        // console.log("成功了");
      } else {
        alert("加载CSS失败了");
      }
    }
  };
  request.send(); //4、调用对象的send方法, readyState = 2
};
