import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);  //把store绑到Vue.prototype.$store=store

const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {}
});


export default store;