import {
	CartItemType,
	ReducerAction,
	ReducerActionType,
} from "../Context/CartProvider";
import { ReactElement, ChangeEvent, memo } from "react";

type PropsType = {
	item: CartItemType;
	dispatch: React.Dispatch<ReducerAction>;
	REDUCER_ACTIONS: ReducerActionType;
};

const CartLineItem = ({
	item,
	dispatch,
	REDUCER_ACTIONS,
}: PropsType): ReactElement => {
	const img: string = new URL(`../Images/${item.sku}.jpg`, import.meta.url)
		.href;

	const lineTotal: number = item.price * item.qty;

	const highestQty: number = 20 > item.qty ? 20 : item.qty;

	const optionValues: number[] = [...Array(highestQty).keys()].map(
		(i) => i + 1
	);

	const optionElements: ReactElement[] = optionValues.map((val) => {
		return (
			<option key={`opt${val}`} value={val}>
				{val}
			</option>
		);
	});

	const onChangeQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
		dispatch({
			type: REDUCER_ACTIONS.QUANTITY,
			payload: { ...item, qty: Number(e.target.value) },
		});
	};

	const onRemoveFromCart = () =>
		dispatch({
			type: REDUCER_ACTIONS.REMOVE,
			payload: item,
		});

	const content = (
		<li className="cart__item">
			<img src={img} alt={item.name} className="cart__img" />
			<div aria-label="Item Name">{item.name}</div>
			<div aria-label="Price per Item">
				{new Intl.NumberFormat("en-US", {
					style: "currency",
					currency: "USD",
				}).format(item.price)}{" "}
			</div>
			<label htmlFor="itemQty" className="offscreen">
				Item Quantity
			</label>
			<select
				name="itemQty"
				id="itemQty"
				className="cart__select"
				value={item.qty}
				aria-label="Item Quantity"
				onChange={onChangeQuantity}
			>
				{optionElements}
			</select>
			<div className="cart__item-subtotal" aria-label="Line Item Subtotal">
				{new Intl.NumberFormat("en-US", {
					style: "currency",
					currency: "USD",
				}).format(lineTotal)}
			</div>
			<button
				className="cart__button"
				aria-label="Remove Item from Cart"
				title="remove item from cart"
				onClick={onRemoveFromCart}
			>
				❌
			</button>
		</li>
	);

	return content;
};

function areItemsEqual(
	{ item: prevItem }: PropsType,
	{ item: nextItem }: PropsType
) {
	return Object.keys(prevItem).every((key) => {
		return (
			prevItem[key as keyof CartItemType] ===
			nextItem[key as keyof CartItemType]
		);
	});
}

const MemoizedCartItem = memo<typeof CartLineItem>(CartLineItem, areItemsEqual);

export default MemoizedCartItem;
