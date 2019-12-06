import { IProfileState, IRootState } from "@/types";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import { Module } from "vuex";

const state: IProfileState = {
  funds: 1000,
  orders: []
};

const namespaced: boolean = true;

const profile: Module<IProfileState, IRootState> = {
  state,
  namespaced,
  actions,
  mutations,
  getters
};

export default profile;
