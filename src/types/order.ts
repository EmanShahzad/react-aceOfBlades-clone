import { CheckoutState } from "./checkout";
import { CartState } from "./cart";
export interface OrderState {
  id: string;
  checkoutInfo: CheckoutState;
  cartInfo: CartState;
  shipping: string;
  userId: string;
}
