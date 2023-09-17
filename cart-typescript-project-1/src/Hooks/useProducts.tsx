import { useContext } from "react";
import ProductsContext from "../Context/ProductsProvider";
import { useProductContextType } from "../Context/ProductsProvider";

const useProducts = (): useProductContextType => {
	return useContext(ProductsContext);
};

export default useProducts;
