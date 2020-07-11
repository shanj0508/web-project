import "./app2.css";
import $ from "jquery";
//app2
const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");
$tabBar.on("click", "li", (e) => {
  console.log(e.target); //获取当前点击的元素
  console.log(e.currentTarget); //获取当前点击的元素
  const $li = $(e.currentTarget);
  $li.addClass("selected").siblings().removeClass("selected");
  const index = $li.index(); //获取当前元素的排行
  console.log(index);
  //找到$tabContent的子元素们，在子元素们中找到第index个子元素，设置css为显示，并且将其兄弟元素css设置为隐藏
  //方法一：.css   不推荐
  //   $tabContent
  //     .children()
  //     .eq(index)
  //     .css({ display: "block" })
  //     .siblings()
  //     .css({ display: "none" });
  //方法二：.show() .hide()  不推荐
  //   $tabContent.children().eq(index).show().siblings().hide();
  //基于“样式与功能分离”的思想，上面两种方法直接操作css，因此不推荐，js应该只操作js,不操作css
  //方法三： .addClass  .removeClass  推荐   同时在css文件中写.active的样式
  $tabContent
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
});
$tabBar.children().eq(0).trigger("click"); //找到$tabBar的子元素们，在子元素们中找到第一个子元素，并触发click事件。即默认点击第一个tab页签
