const $siteList = $(".siteList");
const $lastLi = $siteList.find("li.last");
const x = localStorage.getItem("x");
const xObject = JSON.parse(x); //把字符串重新变成对象
const hashMap = xObject || [
  //   xObject||[]  表示:如果 xObject存在，就使用 xObject的值，如果不存在，就用[]里面的默认值作为初始值
  {
    logo: "A",
    url: "https://www.acfun.cn",
  },
  {
    logo: "B",
    url: "https://www.bilibili.com",
  },
];
const simplifyUrl = (url) => {
  return url
    .replace("https://", "")
    .replace("http://", "")
    .replace("www.", "")
    .replace(/\/.*/, ""); //  replace(/\/.*/, "")   删除/开头的内容
};
const render = () => {
  $siteList.find("li:not(.last)").remove(); //找到除了最后一个.last以外的所有的li,清空这些li
  hashMap.forEach((node, index) => {
    const $li = $(`<li>
    <div class="site">
      <div class="logo">
      ${node.logo}
      </div>
      <div class="link">${simplifyUrl(node.url)}</div>
      <div class="close">
      <svg class="icon">
        <use xlink:href="#icon-close"></use>
      </svg>
      </div>
    </div>
</li> `).insertBefore($lastLi);
    $li.on("click", () => {
      window.open(node.url); //通过 window.open实现a标签的点击跳转功能
    });
    // 删除功能
    $li.on("click", ".close", (e) => {
      e.stopPropagation(); /*阻止冒泡行为，点击x按钮，不会跳转超链接 ，阻止冒泡对a标签无效*/
      hashMap.splice(index, 1);
      render();
    });
  });
};
render();
$(".addButton").on("click", () => {
  let url = window.prompt("请问你要添加的网址是啥？");
  if (url.indexOf("http") !== 0) {
    url = "https://" + url;
  }
  hashMap.push({
    logo: simplifyUrl(url)[0].toUpperCase(), //.toUpperCase()将小写转为大写
    url: url,
  });
  //重新渲染页面
  render();
});
//关闭页面时，会将hashMap存入localStorage
window.onbeforeunload = () => {
  console.log("页面要关闭了");
  const String = JSON.stringify(hashMap); //JSON.stringify可以把一个对象变为字符串
  localStorage.setItem("x", String);
};

//添加键盘事件
$(document).on("keypress", (e) => {
  //   const key = e.key;   可以简写为下面形式：
  console.log(e.key);
  const { key } = e;
  for (let i = 0; i < hashMap.length; i++) {
    // console.log(hashMap[i].logo.toLowerCase);
    if (hashMap[i].logo.toLowerCase() === key) {
      //toLowerCase 转为小写
      window.open(hashMap[i].url);
    }
  }
});
