import { ActionTree } from "vuex";
import axios from "axios";
import { IStocksState, IRootState, IStocks, IOrder } from "@/types";

const actions: ActionTree<IStocksState, IRootState> = {
  fetchStocks: async ({ commit }) => {
    try {
      const res = await axios.get("http://localhost:3000/stocks");
      commit("stocksLoaded", res && res.data);
    } catch (e) {
      commit("stocksError");
    }
  },
  buyStocks({ commit }, order: IOrder) {
    commit("profile/addOrder", order, { root: true });
  },
  randomizeStocks({ commit }) {
    commit("randomizeStocks");
  }
};

export default actions;
