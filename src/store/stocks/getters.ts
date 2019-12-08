import { GetterTree } from "vuex";
import { IRootState, IStocksState } from "@/types";

const getters: GetterTree<IStocksState, IRootState> = {
  getFullStocks: state => {
    return state.stocks;
  },
  getError: state => {
    return state.error;
  }
};

export default getters;
