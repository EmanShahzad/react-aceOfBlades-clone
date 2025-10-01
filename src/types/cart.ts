export interface CartProps {
  productQuantity: number;
  productId: string;
}
export interface CartState {
  products: CartProps[];
  cartSubtotal: number;
}
