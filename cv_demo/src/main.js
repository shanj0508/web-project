console.log('hi');

let html = document.querySelector('#html');   //通过CSS选择器找到demo元素  demo=>html
let style = document.querySelector('#style');  //通过CSS选择器找到style元素
let string = `
/* 你好，我叫Jean
 * 接下来我要展示我的前端功底
 * 首先我要准备一个div 
 */
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来我会把div变成一个八卦图
 * 注意看好了
 * 首先把div变成一个圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/**
 * 八卦是阴阳形成的
 * 一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*给八卦图加上灵珠和魔丸*/
#div1::before{
    width: 100px;
    height: 100px;
    top:0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom:0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}

`;      //加注释是为了让style中的样式生效
//#div1::before  #div1::after  在div1前后加上伪元素
let string2 = "";
//string = string.replace(/\n/g,"<br>");  //用正则表达式匹配所有的回车，替换为"<br>"  有BUG，每次"<br>"的<会被打印到页面中

/*
replace() 方法返回一个由一个字符串或正则表达式替换后的新字符串。原字符串不会改变。
语法：
str.replace(regexp|substr, newSubStr|function)
    regexp：正则表达式
    substr：被替换的字符串，仅第一个匹配到的字符串会被替换
    newSubStr：用于替换掉第一个参数在原字符串中的匹配部分的字符串

*/
//console.log(string.length);
let n = 0;   //计数器,从0开始可以作为数组的下标使用，n=-1，这样下面的递归里面，n可以从0开始

//demo.innerHTML=string.substring(0,n);  //设置demo里面的内容  上面let n = -1后，这句可以注释掉不要，下面的递归里面可以表示n = 0 的情况
//console.log(demo.innerHTML);
/*
substring() 方法返回一个字符串在开始索引到结束索引之间的一个子字符串。
语法：
str.substring(indexStart[, indexEnd]) 
    indexStart：需要截取的第一个字符的索引，该索引位置的字符作为返回的字符串的首字母。
    indexEnd：结束的索引值，该索引对应的字符不包含在截取的字符串内。
*/


//定时器设置 n 自动递增

//方法一：setTimeout
// setTimeout(()=>{
//     n=n+1;
//     demo.innerHTML=n;
// },3000)      //setTimeout设置三秒，表示三秒后执行一次，但只执行一次

//方法二：setInterval
// setInterval(() => {
//     n=n+1;
//     demo.innerHTML=n;
// }, 3000);   //setInterval设置3秒，表示每三秒执行一次

//方法三：递归的setTimeout达到setInterval的效果
//将每秒执行的内容封装成一个函数
//好处：通过if语句进行条件判断，可以随时停止
let step=()=>{
    setTimeout(()=>{
        // console.log(n);
        // console.log(demo.innerHTML);
       
        //判断字符串的第n个是否是回车
        // if(string[n]==="\n"){
        //     //如果是回车，直接加上"<br>"
        //     string2 += "<br>"; 
        // }else{
        //     //如果不是回车就直接照搬
        //     string2 += string[n];  //通过定义一个string2来替换innerHTML方法。
        // }

        //将上面的if-else语句优化为问号冒号表达式
        // string2 +=string[n]==="\n"? "<br>":string[n]; 
               
        //判断字符串的第n个是否是回车和空格
        if(string[n]==="\n"){
            //如果是回车，直接加上"<br>"
            string2 += "<br>"; 
        }else if(string[n]===" "){
            //如果是空格，直接加上"&nbsp;"
            string2 += "&nbsp;"; 
        }else{
            //如果不是回车和空格，就直接照搬
            string2 += string[n];  //通过定义一个string2来替换innerHTML方法。
        }
    
        // demo.innerHTML=string.substring(0,n);   //使用innerHTML每次"<br>"未输入完整时，< 都会在页面中显示一下，因此不使用substring方法
        html.innerHTML=string2;    //使用另一个字符串替换的方法，可以随时更改字符串的内容
        window.scrollTo(0,99999);  //设置浏览器窗口滚动条滚动到最下方
        html.scrollTo(0,99999);  //设置div的滚动条滚动到最下方
        style.innerHTML=string.substring(0,n); 
        //console.log(string2);
        if(n<string.length-1){
            //如果n不是最后一个，就继续
            n=n+1; 
            step() 
        }  
    },50)   
}
step()
