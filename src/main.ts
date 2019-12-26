import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import { getShopInfo, getShopLocation } from "./api/common";
import ApolloClient from "apollo-boost";

const client = new ApolloClient();

client
  .query({
    query: getShopLocation,
    variables: {
      province: "四川省",
      city: "成都市"
    }
  })
  .then(data => console.log("----------query data", data))
  .catch(err => console.log("-----------err", err));

console.log("---------------", getShopInfo);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
