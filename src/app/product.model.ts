export interface Product {
  id?: number;
  images?: string;
  name: string;
  detail: string;
  price: number;
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
  username: string;
  // email: string;
  message: string;
}
export interface FilterDTO {
  pageNumber: number;
  pageSize: number;
  search?: string;
}
