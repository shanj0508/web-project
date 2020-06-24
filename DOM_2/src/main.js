// const api = jQuery('.test') //不返回元素，返回的是api对象
// api.addClass('red')   //因为 obj.fn(p1) ===>obj.fn.call(obj,p1) obj就是this  所以这里的this就是api
//     .addClass('blue') //遍历所有获取的元素，添加.red  api.addClass('red')的返回值是api   这就是链式操作

// const x1 = jQuery('.test1').find('.child')
// console.log(x1)
// console.log(`x1：${x1}`)

// const api1 = jQuery('.test1')   //api1是通过test1返回的一些操作，用来操作test1
// const api2 = api1.find('.child').addClass('red')  //api2是通过查找child返回的一些操作，用来操作child
//                                                 // find里面的array.oldApi = this  this指向api1
// const oldApi = api2.end().addClass('blue')   //当api2.end()时，end()的return this.oldApi  这里的this是api2 所以end()执行后，返回的是api1,也就是上一个旧的api

// jQuery('.test1').find('.child').addClass('red').end().addClass('blue')
// const x = jQuery(".test1").find(".child");
// x.each((div) => console.log(div));

// jQuery(".test1")
//   .find(".child")
//   .each((div) => console.log(div));

const x = jQuery(".test1").find(".child");
x.prev().print();
