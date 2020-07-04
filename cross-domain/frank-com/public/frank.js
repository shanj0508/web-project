//cors
// const request = new XMLHttpRequest();
// request.open("GET", "http://localhost:9999/friends.json");
// request.onreadystatechange = () => {
//   if (request.readyState === 4 && request.status === 200) {
//     console.log(request.response);
//   }
// };
// request.send();
//jsonp
// const random = "frankJSONPCallbackName" + Math.random();
// console.log(random);
// window[random] = (data) => {
//   console.log(data);
// };
// const script = document.createElement("script");
// script.src = `http://localhost:9999/friends.js?functionName=${random}`;
// script.onload = () => {
//   script.remove(); //执行完成后删除script标签，避免多次执行生成重复的script标签
// };
// document.body.appendChild(script);
//封装版本
function jsonp(url) {
  return new Promise((resolve, reject) => {
    const random = "frankJSONPCallbackName" + Math.random();
    console.log(random);
    window[random] = (data) => {
      resolve(data); //成功时调用resolve
    };
    const script = document.createElement("script");
    script.src = `${url}?callback=${random}`; //默认functionName是callback
    script.onload = () => {
      script.remove(); //执行完成后删除script标签，避免多次执行生成重复的script标签
    };
    script.onerror = () => {
      reject(); //失败时调用reject
    };
    document.body.appendChild(script);
  });
}
jsonp("http://localhost:9999/friends.js").then((data) => {
  console.log(data);
});
