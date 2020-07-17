import "./assets/x.css";
import png from "./assets/1.png";
console.log("111");
console.log(png);

const div = document.getElementById("app");
console.log(div);
div.innerHTML = `
    <img src="./assets/1.png" />
`;
const button = document.createElement("button");
button.innerHTML = "懒加载";
button.onclick = () => {
  const promise = import("./lazy");
  promise.then(
    (module) => {
      console.log(module);
      const fn = module.default;
      fn();
    },
    () => {
      console.log("模块加载错误");
    }
  );
};
div.appendChild(button);
