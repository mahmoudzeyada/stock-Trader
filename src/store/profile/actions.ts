import { ActionTree } from "vuex";
import { IRootState, IProfileState, IOrder } from "@/types";

const actions: ActionTree<IProfileState, IRootState> = {
  buyStocks({ commit }, order: IOrder) {
    commit("addOrder", order);
  },
  sellStocks({ commit }, order: IOrder) {
    commit("sellOrder", order);
  }
};

export default actions;
