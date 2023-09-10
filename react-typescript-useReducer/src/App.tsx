import Counter from "./Components/Counter";
import { CounterProvider, initialState } from "./Context/CounterContext";

import "./App.css";

const App = () => {
	return (
		<CounterProvider count={initialState.count} text={initialState.text}>
			<Counter>{(num: number) => <>Current Count : {num}</>}</Counter>
		</CounterProvider>
	);
};

export default App;
