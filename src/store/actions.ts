import axios from "axios";
import { ActionTree } from "vuex";
import { IRootState } from "@/types";

const actions: ActionTree<IRootState, IRootState> = {
  loadStocks({ commit }) {
    axios.get("http://127.0.0.1:3000/data").then(res => {
      if (Object.keys(res.data).length !== 0) {
        commit("profile/savePortfolio", res.data);
      }
    });
  }
};

export default actions;
