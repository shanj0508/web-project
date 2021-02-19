import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';


ReactDOM.render(
    <App/>,    //等价于App()
    document.getElementById('root')
);

// let n = 0;
// const App = () => React.createElement("div", null, [
//     n,
//     React.createElement(
//         "button",
//         {
//             onClick: () => {
//                 n += 1;
//                 console.log(n); //这一句是精髓
//                 ReactDOM.render(App(), document.querySelector("#root")); // 为什么还是不能重新渲染
//             }
//         },
//         "+1"
//     )
// ]);
//
// ReactDOM.render(App(), document.querySelector("#root"));





