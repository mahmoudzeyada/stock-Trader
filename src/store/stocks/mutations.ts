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
  },
  randomizeStocks: state => {
    if (state.stocks) {
      state.stocks.forEach(stock => {
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
      });
    }
  }
};

export default mutations;
