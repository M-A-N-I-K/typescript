import { useState } from "react";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProductsList from "./Components/ProductsList";

function App() {
	const [viewCart, setViewCart] = useState<boolean>(false);
	const pageContent = viewCart ? <Cart /> : <ProductsList />;

	const content = (
		<>
			<Header viewCart={viewCart} setViewCart={setViewCart} />
			{pageContent}
			<Footer viewCart={viewCart} />
		</>
	);

	return content;
}

export default App;
