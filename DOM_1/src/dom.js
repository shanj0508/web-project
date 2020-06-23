window.dom = {
    create(string){
        const container = document.createElement("template")  //template中可以存放任何内容
        container.innerHTML = string.trim()  //trim() 去掉字符串中的空格，避免报错
      	return container.content.firstChild  //template要使用这个语法
       // return container.children[0]   //template不能使用这个来获取子元素
    },
    after(node,node2){
        //将node2插入node后面
        node.parentNode.insertBefore(node2,node.nextSibling)
    },
    before(node,node2){
        //将node插入node2前面
        node.parentNode.insertBefore(node2,node)
    },
    append(parent,node){
        parent.appendChild(node)
    },
    wrap(node,parent){ 
        //将parent元素包在node外面，作为父元素
        dom.before(node,parent)
        dom.append(parent,node)
    },
    remove(node){  
        //删除节点
        node.parentNode.removeChild(node)
        //删除节点后，可继续使用这个节点的引用，因此return该node
        return node
    },
    empty(node){
        //删除全部子节点
        // const childNodes = node.childNodes  可写为下一行这种新形式
        // const {childNodes}=node
        const array = []
        //将node的第一个子节点赋值给x
        let x = node.firstChild
       // 当x存在时，执行下面的内容
        while(x){
            //将node的第一个子元素删除，并将返回值（即被删除的元素）添加到array数组中
            array.push(dom.remove(node.firstChild))
             //将node的第一个子节点赋值给x
             //注意：当node的第一个子元素被删除后，node的长度是实时变化的，因此此时第二个子元素变成了第一个子元素
            x=node.firstChild
        }
        //删除节点后，可继续使用这个节点的引用，因此return该node
        return array
    },
    attr(node,name,value){   //重载
        if(arguments.length===3){
            //如果参数的长度为3，说明希望实现写属性的功能
            //将node节点的一个属性设置为对应的属性值
            node.setAttribute(name,value)
        }else if(arguments.length===2){
            //如果参数的长度为2，说明希望实现读属性的功能
            //读取节点的一个属性并返回属性值
            return node.getAttribute(name)
        }
    },
    text(node,string){  //适配
        if(arguments.length===2){
            if('innerText' in node){
                node.innerText = string //ie
            }else{
                node.textContent = string // firefox chrome
            }
        }else if(arguments.length===1){
            if('innerText' in node){
                return node.innerText
            }else{
                return node.textContent
            } 
        }

    },
    html(node,string){
        if(arguments.length===2){
            node.innerText=string

        }else if(arguments.length===1){
            return node.innerText
        }
    },
    style(node,name,value){
        if(arguments.length===3){
        //dom.style(test,'border','1px solid red')
            node.style[name]=value
        }else if(arguments.length===2){
            if(typeof name==='string'){
                //dom.style(test,'border')
                return node.style[name]
            }else if(name instanceof Object){ //如果name是object的实例
                // dom.style(test,{border:'1px solid red',color:"red"})
                const object = name
                //遍历object
                for (let key in object){
                    //key: border  color
                    //node.style.border = ...
                    //node.style.color = ...
                    //如果key是一个变量，不能用点语法，必须放在中括号内，.key则key表示字符串，而不是变量
                    node.style[key] = object[key]
                }

            }
        }

    },
    class:{
        add(node,className){
            node.classList.add(className)
        },
        remove(node,className){
            node.classList.remove(className)
        },
        has(node,className){
            return node.classList.contains(className)
        }
    },
    on(node,eventName,fn){
        node.addEventListener(eventName,fn)
    },
    off(node,eventName,fn){
        node.removeEventListener(eventName,fn)
    },
    find(selector,scope){
        //如果scope存在，则在scope中调用querySelectorAll，如果不存在，则在document中调用querySelectorAll
        return (scope||document).querySelectorAll(selector)      
    },
    parent(node){
        return node.parentNode
    },
    children(node){
        return node.children
    },
    siblings(node){
        //node.parentNode.children返回的是一个伪数组，将这个伪数组转换为数组，然后进行过滤，只要不等于传入的这个node,就放进数组中
        //将最后得到的数组返回
        //得到的就是除了自己以外的所有兄弟节点
        return Array.from(node.parentNode.children).filter(n=>n!==node)
    },
    next(node){
        let x = node.nextSibling
        while(x && x.nodeType===3){
            //如果x存在并且x的节点类型是文本节点，那么就继续找下一个
            x = x.nextSibling
        }
        //返回不是文本节点的节点
        return x
    },
    previous(node){
        let x = node.previousSibling
        while(x && x.nodeType===3){
            //如果x存在并且x的节点类型是文本节点，那么就继续找下一个
            x = x.previousSibling
        }
        //返回不是文本节点的节点
        return x

    },
    each(nodeList,fn){
        for(let i= 0 ;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }

    },
    index(node){
        //获取node节点的父节点的所有的children元素，赋值给list
        const list=dom.children(node.parentNode)
        //遍历list
        let i
        for(i = 0 ;i<list.length;i++){
            if(list[i]===node){
                break
            }
        }
        return i

    }



}
