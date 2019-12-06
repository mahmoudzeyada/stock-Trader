import { ActionTree } from "vuex";
import axios from "axios";
import { IStocksState, IRootState, IStocks } from "@/types";

const actions: ActionTree<IStocksState, IRootState> = {
  fetchStocks: async ({ commit }) => {
    try {
      const res = await axios.get("http://localhost:3000/stocks");
      console.log(res);
      commit("stocksLoaded", res && res.data);
    } catch (e) {
      commit("stocksError");
    }
  }
};

export default actions;
