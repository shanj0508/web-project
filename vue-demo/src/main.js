console.log(window.Vue);
const Vue = window.Vue;
Vue.config.productionTip = false;
import Demo from "./Demo.vue";

new Vue({
  components: { Demo },
  data: { n: 0 },
  template: `
  <div>
    <Demo :message="n"/>
  </div>`,
}).$mount("#app");
