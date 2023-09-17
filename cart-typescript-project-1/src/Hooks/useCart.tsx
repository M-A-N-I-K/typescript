import { useContext } from "react";
import CartContext from "../Context/CartProvider";
import { useCartContextType } from "../Context/CartProvider";

const useCart = (): useCartContextType => {
	return useContext(CartContext);
};

export default useCart;
