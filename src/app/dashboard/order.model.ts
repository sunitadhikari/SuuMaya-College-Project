export interface Order {
  id?: number;
  username?: string;
  productName?: string;
  date?: string;
  address?: string;
  paymentMethod?: string;
  price?: number;
  quantity?: number;
  userId: number;
  size?: string;
  productId: number;
}
export interface Return {
  returnId: number;
  returnedDate: Date;
  productName: string;
  boughtBy: string;
  orderId: number;
  address: string;
  onTime: boolean;
}
