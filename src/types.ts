export interface IStocks {
  id: number;
  name: string;
  price: number;
}

export interface IStocksState {
  stocks?: IStocks[];
  error: boolean;
}

export interface IRootState {}

export interface ITypeWarning {
  "has-error": boolean;
  "has-success": boolean;
}
export interface IOrder {
  stockId: number;
  quantity: number;
  stockPrice?: number;
}
export interface IProfileState {
  funds: number;
  orders: IOrder[];
}
export interface IBayedStocks {
  stockId: number;
  name: string;
  price: number;
  quantity: number;
}

type Tmode = "buy" | "sell";

export interface IModePayload {
  mode: Tmode;
  oldQuantity?: number;
  stockPrice?: number;
}
