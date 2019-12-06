import { GetterTree } from "vuex";
import { IRootState, IProfileState, IStocks, IBayedStocks } from "@/types";

const getters: GetterTree<IProfileState, IRootState> = {
  getFunds: state => {
    return state.funds;
  },
  getOrders: (state, getters, rootState, rootGetters) => {
    return state.orders.map(
      (order): IBayedStocks => {
        const selectedOrder = rootGetters["stocks/getFullStocks"].find(
          (item: IStocks) => {
            return item.id === order.stockId;
          }
        );
        return {
          id: selectedOrder.id,
          name: selectedOrder.name,
          price: selectedOrder.price,
          quantity: order.quantity
        };
      }
    );
  }
};

export default getters;
