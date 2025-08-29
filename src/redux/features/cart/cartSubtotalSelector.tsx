import { RootState } from "../../store";

export const cartSubtotal = (state: RootState) => {
  return state.cart.reduce((acc, item) => {
    const product = state.products.find((p) => p.id === item.productId);
    return product ? acc + product.price * item.productQuantity : acc;
  }, 0);
};
