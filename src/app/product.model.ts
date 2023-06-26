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
  small?: string;
  medium?: string;
  large?: string;
  extraLarge?: string;
}
export interface Category {
  id?: number;
  name: string;
  parentCategory?: string;
}
