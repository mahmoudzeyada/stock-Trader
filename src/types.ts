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
  id: number;
  name: string;
  price: number;
  quantity: number;
}
