import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import { Module } from "vuex";
import { IRootState, IStocksState } from "@/types";

const namespaced: boolean = true;

const state: IStocksState = {
  stocks: [],
  error: true
};

const stocks: Module<IStocksState, IRootState> = {
  namespaced,
  state,
  mutations,
  getters,
  actions
};

export default stocks;
