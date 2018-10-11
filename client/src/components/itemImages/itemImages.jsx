import React from 'react';
import { Button } from 'reactstrap';

const itemImages = (props) => {

	return (props.items.allItemsForSale.map((item) => {
		return (
			<div className="col-md-4" key={item._id}>
				<h5 className="text-center ">
					 {item.item} 
				</h5>
				<h5 className="text-center ">
					 Available: {item.quantity}
				</h5>
				<img className="imgPic marginSpace"  alt={item.item} src={item.image} />
				<Button color="primary" size="lg" onClick={event => props.handleClick(item._id,item.quantity,item.type, event)}>+</Button>
				<Button color="danger" size="lg" onClick={event => props.handleMinusClick(item._id,item.quantity,item.type, event)}>-</Button>
			</div>
		);
	}))
};

export default itemImages;


