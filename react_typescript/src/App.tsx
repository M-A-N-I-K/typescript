import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";
import { useState } from "react";

const App = () => {
	const [count, setCount] = useState<number>(1);

	return (
		<>
			<Heading title={"Hello"} />
			<Section title={"Different Title"}>This is my Section</Section>
			<Counter setCount={setCount}>Count is {count}</Counter>
		</>
	);
};

export default App;
