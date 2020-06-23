// document.createElement('div')
// let div1 = window.dom.create('div')
// console.log(div1)
// const div = dom.create("<div>new div</div>")
// console.log(div)

// const div3 = dom.create('<div id="parent"></div>')
// dom.wrap(test,div3)
// const nodes = dom.empty(window.empty)
// console.log(nodes)
// dom.remove(test)
// //写属性
// dom.attr(test,'title','xxx')
// //读属性
// const title = dom.attr(test,'title')
// console.log(`title:${title}`)

// //写文本
// dom.text(test,'你好，这是新的内容')
// //读文本
// const text = dom.text(test)
// console.log(`text:${text}`)
// //写html
// dom.html(test,'你好，这是新的内容')
// //读html
// const html = dom.html(test)
// console.log(`html:${html}`)
// dom.style(test,{border:'1px solid red',color:"red"})
// console.log(dom.style(test,'border'))
// dom.style(test,'border','1px solid black')

// dom.class.add(test,"red")
// dom.class.add(test,"blue")
// dom.class.remove(test,"blue")
// console.log(dom.class.has(test,"red"))

// const fn = ()=>{
//     console.log('点击了')
// }
// dom.on(test,'click',fn)
// dom.off(test,'click',fn)
// const testDiv = dom.find('#test')[0]
// console.log(testDiv)
// console.log(dom.find('.red',testDiv)[0])

// console.log(dom.parent(test))
// console.log(dom.children(test))
// console.log(dom.siblings(dom.find('.red')[0]))

// console.log(dom.next(dom.find('.red')[0]))
// console.log(dom.previous(dom.find('.red')[0]))
// const t = dom.find('#test')[0]
// dom.each(dom.children(t),(n)=>dom.style(n,"color","red"))
console.log(dom.index(test))
