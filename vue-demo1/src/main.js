// import Demo from './Demo.vue'

console.log(window.Vue)
const Vue=window.Vue
Vue.config.productionTip = false

new Vue({
  data(){
    return{
      n:0,
      array:[1,2,3,4,5,6]
    }
  },
  template:`
    <div class="red">
    {{ n }}
    <button @click="add">+1</button>
    </div>
    `,
methods:{
  add(){
    this.n+=1
  }
}
}).$mount('#app')