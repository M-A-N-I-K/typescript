import Counter from "./Components/Counter";
import "./App.css";

const App = () => {
	return (
		<>
			<Counter>{(num: number) => <>Current Count : {num}</>}</Counter>
		</>
	);
};

export default App;
