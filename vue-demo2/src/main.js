import Vue from 'vue'
import App from './App.vue'
// 完整引入
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// 局部引入
// import { Button, message } from 'ant-design-vue';


Vue.config.productionTip = false
// 完整注册组件
 Vue.use(Antd);

//局部注册组件
// Vue.use(Button);
// Vue.prototype.$message = message;



new Vue({
  render: h => h(App),
}).$mount('#app')
