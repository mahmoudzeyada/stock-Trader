import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home.vue";
import Stock from "../pages/StockPage/index.vue";
import Portfolio from "../pages/Portfolio.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/stock", component: Stock },
  { path: "/portfolio", component: Portfolio }
];

const router = new VueRouter({ routes, mode: "history" });

export default router;
