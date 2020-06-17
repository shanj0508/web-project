//获取屏幕div
const divScreen = document.querySelector('#screen')
//获取按钮元素
const btnCreateNumber = document.querySelector('#createNumber')
const btnCallNumber = document.querySelector('#callNumber')
const spanNewNumber=document.querySelector('#newNumber')
const spanQueue = document.querySelector('#queue')
//初始化号码
let n = 0
//定义数组，存放已经取的号码
let queue=[]
//点击【取号】时
btnCreateNumber.onclick=()=>{
    n+=1
    spanNewNumber.innerText=n //将号码显示在屏幕中
   // queue.push(n)  //将号码n存放进queue数组中
   queue.push.call(queue,n)
    // spanQueue.innerText = queue.toString()
    spanQueue.innerText = JSON.stringify(queue) 

}
//点击【叫号】时
btnCallNumber.onclick=()=>{
    if(queue.length===0){
        return
    }
    // const m = queue.shift()
    const m = queue.shift.call(queue)
    divScreen.innerText=`请${m}号顾客就餐`
    spanQueue.innerText=JSON.stringify(queue) 
}
