import {
	useCallback,
	useEffect,
	useState,
	useMemo,
	MouseEvent,
	KeyboardEvent,
	useRef,
} from "react";

interface User {
	id: number;
	username: string;
}

const App = () => {
	const [count, setCount] = useState<number>(0);
	const [users, setUsers] = useState<User[] | null>(null);

	const inputRef = useRef<HTMLInputElement>(null);
	console.log(inputRef?.current);
	console.log(inputRef?.current?.value);

	useEffect(() => {
		console.log("Mounting");
		console.log("Users", users);
		return () => console.log("Unmounting");
	}, [users]);

	type fibFunc = (n: number) => number;

	const fib: fibFunc = (n) => {
		if (n < 2) return n;
		return fib(n - 1) + fib(n - 2);
	};
	const myNum: number = 37;

	const addTwo = useCallback(
		(e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
			setCount((prev) => prev + 2);
		},
		[]
	);

	const result = useMemo<number>(() => fib(myNum), [myNum]);

	return (
		<div className="app">
			<h1>{count}</h1>
			<button onClick={addTwo}>+</button>
			<h2>{result}</h2>
			<input ref={inputRef} type="text" />
		</div>
	);
};

export default App;
