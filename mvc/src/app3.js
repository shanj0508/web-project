import "./app3.css";
import $ from "jquery";
//app3
const $square = $("#app3 .square");
$square.on("click", () => {
  $square.toggleClass("active"); //toggleClass 如果没有这个类就加上， 如果有就删掉
});
