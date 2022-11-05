export interface IProducts {
  id?: number;
  name: string;
  amount: string;
}

export interface IUser {
  id?: number; 
  username: string,
  classe: string,
  level: number,
  password?: string,
}

export interface IOrders {
  id?: number;
  userId: string;
  productsId?: number;
  productsIds?: number[];
}

export interface ILogin {
  username: string,
  password?: string,
}