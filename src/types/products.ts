export interface ProductState {
  id: string;
  name: string;
  price: number;
  isOnSale: boolean;
  newPrice?: number;
  stock: number;
  categoryId: string;
  specifications: string[];
  images: string[];
}
