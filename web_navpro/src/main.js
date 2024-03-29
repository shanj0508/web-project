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
// hashMap.splice(4,1)
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
                    <div class="more">
                        <svg class="icon">
                            <use xlink:href="#icon-more"></use>
                        </svg>
                    </div>
                    <div class="options">
                        <div class="modify">修改快捷方式</div>
                        <div class="remove">移除</div>
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
        $li.on('click','.more',(e)=>{   
            $(`.siteList > li:nth-child(${index+1})`).siblings().find('.options').hide()
            $($('.siteList > li .options')[index]).css('display', 'flex')

            $(document).one("click", function(){
                
                $(".options").hide();
            });
            // e.stopPropagation()
            // e.preventDefault()
            return false;     //等价于阻止事件冒泡和阻止默认事件
        })

        $li.on('click','.remove',(e)=>{
            e.stopPropagation()
            e.preventDefault()
            hashMap.splice(index,1)
            render()
        })
    })
}

render()
let imgError=(e)=>{
    //javascript:this.onerror='';this.src='${ico2}';
    e.onerror=''
    $(e).attr("src","images/imageDefault.jpg")
}
$('.addButton').on('click',()=>{

    $('.options').each((index,element)=>{
        // $(element).css('display', 'none')
        console.log($(element).css('display'));
        $(element).css('display')!=='none' ? $(element).css('display','none') : ''

    })
    setTimeout(()=>{
        let url=window.prompt('请输入要添加的网址？')
        if(url){
            //填写内容并“确定”
            var reg=/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
            if(!reg.test(url)){
                alert("小可爱，网址不正确哦");
            }else{
                let formatUrl = url.split('://')[0]+'://'+url.split('://')[1].split('/')[0]   //url格式化
                let ico1 = formatUrl+'/favicon.ico'
                let ico2 = formatUrl+'//favicon.ico'
                hashMap.push({
                    // logo:simplifyUrl(url)[0],
                    logo: `<img src="${ico1}" alt="" onerror="imgError(this)"/>`,
                    logoType:'text',
                    url:url
                })
                render()   
            }
        }
        else if(url === ""){
                //未填写但“确定”
                console.log('未填写但“确定”');
                return
        }
        else{
            //“取消”事件
            console.log('“取消”事件');
            return
        }
    })
})
window.onbeforeunload=()=>{
    const string=JSON.stringify(hashMap)
    localStorage.setItem('x',string)
}
// 监听键盘按下事件
$(document).on('keypress', keyPress)