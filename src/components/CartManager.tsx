import React, {
  ReactNode,
  SetStateAction,
  useState,
  createContext,
} from "react";

interface CartProps {
  productQuantity: number;
  setProductQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export const CartContext = createContext<CartProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  let [productQuantity, setProductQuantity] = useState<number>(1);
  return (
    <CartContext.Provider value={{ productQuantity, setProductQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
