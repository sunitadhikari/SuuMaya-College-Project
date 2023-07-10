export interface Product {
  id?: number;
  // images: S3Object[];
  name: string;
  detail: string;
  price: string;
  category: string;
  date?: string;
  size: string;
  createdTime?: string;
  updatedTime?: string;
  seller?: string;
  available?: boolean;
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
