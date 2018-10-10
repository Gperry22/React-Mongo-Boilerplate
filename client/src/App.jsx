import React, { Component } from 'react';
import './App.css';
import API from './utils';
import ItemImages from './components/itemImages';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sweets: [],
			fruits: []
		};
	}

	componentDidMount() {
		this.getFruits();
		this.getSweets();
	}

	getFruits = () => {
		API.getFruit()
			.then((res) => {
				this.setState({ fruits: res.data });
			})
			.catch((err) => console.log(err));
	};

	getSweets = () => {
		API.getSweets()
			.then((res) => {
				this.setState({ sweets: res.data });
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div className="container ">
				<div>
					<h1 className="text-center">Gabe's Supersweets</h1>
				</div>
				<div className="col-md-9">
					<ItemImages items={this.state} />
				</div>
				<div>
					<h1 className="text-center">Cart</h1>
				</div>
			</div>
		);
	}
}

export default App;
