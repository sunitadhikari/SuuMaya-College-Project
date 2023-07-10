export interface Order {
  id: number;
  username: string;
  productName: string;
  date: string;
  address: string;
  paymentMethod: string;
  price: string;
}
export interface Return {
  id: number;
  username: string;
  productName: string;
  date: string;
  address: string;
  onTime: boolean;
}
