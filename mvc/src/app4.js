import "./app4.css";
import $ from "jquery";
//app4
const $circle = $("#app4 .circle");
$circle
  .on("mouseenter", () => {
    $circle.addClass("active");
  })
  .on("mouseleave", () => {
    $circle.removeClass("active");
  });
