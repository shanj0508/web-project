import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
//等价于
//import router from './router/index.ts'
import store from './store';
import Nav from '@/components/Nav.vue';

Vue.config.productionTip = false;
Vue.component('Nav', Nav);

new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app');
