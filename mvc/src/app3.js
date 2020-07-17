import "./app3.css";
import $ from "jquery";
//app3
const $square = $("#app3 .square");
const localKey = "app3-active";
//yes-激活 no undefined -未激活   默认是undefined
const active = localStorage.getItem(localKey) === "yes";
// if (active) {
//   $square.addClass("active");
// } else {
//   $square.removeClass("active");
// }
//上面的if-else简写为下面的形式：
$square.toggleClass("active", active); //如果第二个参数active是true  就加'active'类，否则不加

$square.on("click", () => {
  if ($square.hasClass("active")) {
    $square.removeClass("active");
    localStorage.setItem(localKey, "no");
  } else {
    $square.addClass("active");
    localStorage.setItem(localKey, "yes");
  }
  // $square.toggleClass("active"); //toggleClass 如果没有这个类就加上， 如果有就删掉
});
