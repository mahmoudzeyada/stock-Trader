import { MutationTree } from "vuex";
import { IStocksState, IStocks } from "@/types";

const mutations: MutationTree<IStocksState> = {
  stocksLoaded: (state, stocks: IStocks[]) => {
    state.stocks = stocks;
    state.error = false;
  },
  stocksFailed: state => {
    state.stocks = undefined;
    state.error = true;
  }
};

export default mutations;
