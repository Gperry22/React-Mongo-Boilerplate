import React from 'react';

const App = (props) => {
	const fruits = props.items.fruits;
	const sweets = props.items.sweets;
	const allItems = [ ...fruits, ...sweets ];
	console.log(allItems);

	return allItems.map((item) => {
		return (
			<div>
				<img key={item.id} alt={item.item} src={item.image} />
				<h5 className="">
					{item.item} {item.quantity}
				</h5>
			</div>
		);
	});
};

export default App;
