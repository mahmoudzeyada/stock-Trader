import { IProfileState, IOrder } from "@/types";
import { MutationTree } from "vuex";

const mutations: MutationTree<IProfileState> = {
  addOrder(state, order: IOrder): void {
    const orderItem = state.orders.find((item): boolean => {
      return item.stockId === order.stockId;
    });
    if (orderItem) {
      orderItem.quantity += order.quantity;
      state.funds -= orderItem.quantity * (order.stockPrice as number);
      return;
    }
    state.orders.push({ stockId: order.stockId, quantity: order.quantity });
    state.funds -= order.quantity * (order.stockPrice as number);
    return;
  },
  sellOrder(state, order: IOrder): void {
    const selectedStock = state.orders.find(
      item => item.stockId === order.stockId
    );

    if (selectedStock) {
      if (selectedStock.quantity > order.quantity) {
        selectedStock.quantity -= order.quantity;
      } else {
        state.orders.splice(state.orders.indexOf(selectedStock), 1);
      }
      state.funds += selectedStock.quantity * (order.stockPrice as number);
    }
  }
};

export default mutations;
