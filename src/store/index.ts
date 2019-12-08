import Vuex, { StoreOptions } from "vuex";
import Vue from "vue";

import stocks from "./stocks";
import profile from "./profile";
import actions from "./actions";

import { IRootState } from "@/types";
Vue.use(Vuex);

const state: IRootState = {};

const store: StoreOptions<IRootState> = {
  state,
  actions,
  modules: { stocks, profile }
};

export default new Vuex.Store<IRootState>(store);
