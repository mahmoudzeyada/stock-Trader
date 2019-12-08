import { ActionTree } from "vuex";
import { IRootState, IProfileState, IOrder } from "@/types";

const actions: ActionTree<IProfileState, IRootState> = {
  sellStocks({ commit }, order: IOrder) {
    commit("sellOrder", order);
  }
};

export default actions;
