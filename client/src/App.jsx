import React, { Component } from 'react';
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
			<div>
				<h1 className="">Hello</h1>
				<ItemImages items={this.state} />
			</div>
		);
	}
}

export default App;
