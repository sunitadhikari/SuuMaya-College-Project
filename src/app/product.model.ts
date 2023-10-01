export interface Product {
  id?: number;
  images?: string;
  name?: string;
  details: string;
  price: number;
  address?: string;
  category?: string;
  date?: string;
  size: string;
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
  user_id?: number;
  username: string;
  // email: string;
  isAdmin?: boolean;
  message: string;
}
export interface FilterDTO {
  pageNumber: number;
  pageSize: number;
  search?: string;
}
