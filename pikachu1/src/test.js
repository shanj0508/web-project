import string from './css.js'


const player={
    n : 1,
    time :100,
    id:undefined,
    ui:{
        outPutDiv:document.querySelector('#outPutDiv'),
        outPutStyle:document.querySelector('#outPutStyle'),
        btnPause:document.querySelector('#btnPause'),
        btnPlay:document.querySelector('#btnPlay'),
        btnSlow:document.querySelector('#btnSlow'),
        btnNormal:document.querySelector('#btnNormal'),
        btnFast:document.querySelector('#btnFast')
    },
    init:()=>{
        player.ui.outPutDiv.innerText=string.substr(0,player.n)
        player.ui.outPutStyle.innerHTML=string.substr(0,player.n)
        player.play()  
        player.bindEvents()
    },
    events:{
        'btnPause':'pauseContinue',
        'btnPlay':'replay',
        'btnSlow':'slow',
        'btnNormal':'normal',
        'btnFast':'fast'
    },
    bindEvents:()=>{
        for(let key in player.events){
            if(player.events.hasOwnProperty(key)){
                const value=player.events[key]
                player.ui[key].onclick=player[value]
            }
           
        }
        // // 暂停 & 继续
        // player.ui.btnPause.onclick=player.pauseContinue
        // //重放
        // player.ui.btnPlay.onclick=player.replay
        // //慢速
        // player.ui.btnSlow.onclick=player.slow
        // //中速
        // player.ui.btnNormal.onclick=player.normal
        // //快速
        // player.ui.btnFast.onclick=player.fast

    },
    run:()=>{
        player.n+=1
        if(player.n>string.length){
            player.pause()
            return
        }
        player.ui.outPutDiv.innerText=string.substr(0,player.n)
        player.ui.outPutStyle.innerHTML=string.substr(0,player.n)
        player.ui.outPutDiv.scrollTop = outPutDiv.scrollHeight
       
    },
    play:()=>{//定时器 
        player.id=setInterval(player.run,player.time)
    },
    pause:()=>{
        window.clearInterval(player.id)   //取消定时器
        player.id=undefined   //清空定时器id的值
    },
    replay:()=>{
        // location.reload();
        player.n=0;
        if(player.id===undefined){
            player.play() 
            btnPause.innerText='暂停'
        }
    },
    pauseContinue:()=>{
        if(btnPause.innerText==='暂停'){
            player.pause()
            btnPause.innerText='继续'
        }else if(btnPause.innerText==='继续'){
            if(player.id===undefined){
                player.play() 
            }
            btnPause.innerText='暂停'
        }
    },
    slow:()=>{
        player.pause()
        player.time=300
        player.play() 
        btnPause.innerText='暂停'
    },
    normal:()=>{
        player.pause()
        player.time=100
        player.play() 
        btnPause.innerText='暂停'
    },
    fast:()=>{
        player.pause()
        player.time=0
        player.play() 
        btnPause.innerText='暂停'
    }

}

//初始化
player.init()










