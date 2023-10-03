export interface Order {
  element?: string[];
  id?: number;
  username?: string;
  productName?: string;
  date?: string;
  address?: string;
  paymentMethod?: string;
  price?: number;
  quantity?: number;
  userId?: number;
  size?: string;
  orderId?: number;
  productId?: number;
  transactionId?: string;
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
