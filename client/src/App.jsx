import React, { Component } from 'react';
import './App.css';
import API from './utils';
import ItemImages from './components/itemImages';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fruits: [],
			sweets: [],	
			allItemsForSale: []
		};
	}

	componentDidMount() {
		this.getFruits();		
	}

	getFruits = () => {
		API.getFruit()
			.then((res) => {
				this.setState({ fruits: res.data });
				this.getSweets();
			})
			.catch((err) => console.log(err));
	};

	getSweets = () => {
		const fruitsState = this.state.fruits
		API.getSweets()
			.then((res) => {
				this.setState({ sweets: res.data,
				allItemsForSale: [...fruitsState,...res.data] });
			})
			.catch((err) => console.log(err));
	};



	addToCart = (id, event) => {
		event.preventDefault();
		alert(id)

	}

	render() {
		return (
			<div className="container ">
				<div>
					<h1 className="text-center">Gabe's Supersweets</h1>
				</div>
				<div className="col-md-9">
					<ItemImages
					items={this.state}
					handleClick={this.addToCart}
					 />
				</div>
				<div>
					<h1 className="text-center">Cart</h1>
				</div>
			</div>
		);
	}
}

export default App;
