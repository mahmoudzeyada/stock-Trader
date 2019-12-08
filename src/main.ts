import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.filter("currency", (value: number) => {
  return "$" + value.toLocaleString();
});
new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
