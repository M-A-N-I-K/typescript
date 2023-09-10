import { ReactNode } from "react";
import { useCounter, useText } from "../Context/CounterContext";

interface ChildrenType {
	children: (num: number) => ReactNode;
}

const counter = ({ children }: ChildrenType) => {
	const { count, increment, decrement } = useCounter();
	const { text, handleTextInput } = useText();
	return (
		<>
			<h1>{children(count)}</h1>
			<div>
				<button onClick={increment}>+</button>
				<button onClick={decrement}>-</button>
			</div>
			<input type="text" onChange={handleTextInput} />
			<h2>{text}</h2>
		</>
	);
};

export default counter;
