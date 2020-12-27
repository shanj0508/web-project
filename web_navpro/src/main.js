const $siteList=$('.siteList')
const $lastLi= $siteList.find('li.last')
const x = localStorage.getItem('x')
const xObject=JSON.parse(x)
const hashMap=xObject ||[
    {logo:'<img src="./images/yqq.jpg" alt="" />',logoType:'image',url:'https://www.yuque.com/'},
    {logo:'<img src="./images/github.jpg" alt="" />',logoType:'image',url:'https://github.com/'},
    {logo:'<img src="./images/xdml.png" alt="" />',logoType:'image',url:'https://xiedaimala.com/'}
]
const simplifyUrl=(url)=>{
    return url.replace('https://','')
    .replace('http://','')
    .replace('www.','')
    .replace('.com','')
    .replace(/\/.*/,'')   //删除以/开头的内容
}

keyPress = (e)=>{
    console.log(e.key)
    const {key}=e    // 等价于 const key = e.key
    for(let i=0;i<hashMap.length;i++){
        if(simplifyUrl(hashMap[i].url)[0].toLowerCase()===key){
            let url = hashMap[i].url.substr(0,8).toLowerCase() == "https://" ? hashMap[i].url : "https://" + hashMap[i].url;
            window.open(url); //window.open() 中的url必须是以'http://'或'https://'开头，才可以跳转外部链接，否则默认从本地目录找
        }
    }

}

const render=()=>{
    $siteList.find('li:not(.last)').remove()
    hashMap.forEach((node,index)=>{
        const $li = $(`<li>
        <a href="${node.url}">
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
        </a>
    </li>`).insertBefore($lastLi)
    $('input').on('focus',(e)=>{
        $(document).off('keypress')
    })
    $('input').on('blur',(e)=>{
        $(document).on('keypress', keyPress)
    })
    $li.on('click','.close',(e)=>{
        // e.stopPropagation()
        e.preventDefault()
        hashMap.splice(index,1)
        // hashMap.splice(13,1)
        // const string=JSON.stringify(hashMap)
        // localStorage.setItem('x',string)
        render()
    })
    })
}

render()
$('.addButton')
.on('click',()=>{
    let url=window.prompt('请问你要添加的网址是啥？')
    if(url === null){
        return
    }
    let ico1 = url+'/favicon.ico'
    let ico2 = url+'//favicon.ico'
    hashMap.push({
        // logo:simplifyUrl(url)[0],
        logo: `<img src="${ico1}" alt="" onerror="javascript:this.src='${ico2}';"/>`,
        logoType:'text',
        url:url
    })
    render()   
})
window.onbeforeunload=()=>{
    const string=JSON.stringify(hashMap)
    localStorage.setItem('x',string)
}
// 监听键盘按下事件
$(document).on('keypress', keyPress)