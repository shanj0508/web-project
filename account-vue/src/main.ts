import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
//等价于
//import router from './router/index.ts'
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';


Vue.config.productionTip = false;
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);
//2、严重依赖window

new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app');
