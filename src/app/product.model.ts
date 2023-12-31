export interface Product {
  id?: number;
  image: string | null;
  name?: string;
  details: string;
  price: number;
  address?: string;
  category?: string;
  date?: string;
  size?: string;
  createdTime?: string;
  updatedTime?: string;
  seller?: string;
  available?: boolean;
  searchValue?: string;
}
export interface Category {
  id?: number;
  name: string;
  parentCategory?: string;
}
export interface Feedback {
  name?: string;
  userId?: number;
  username?: string;
  // email: string;
  isAdmin?: boolean;
  message: string;
  orderId?: number;
  date?: string;
}
export interface FilterDTO {
  pageNumber: number;
  pageSize: number;
  search?: string;
}
