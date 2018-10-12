import React from 'react';
import { Button } from 'reactstrap';

const itemImages = (props) => {

	return (props.items.allItemsForSale.map((item) => {
		return (
			<div className="col-md-5" key={item._id}>
				<h5 className="text-center ">
					 {item.item} 
				</h5>
				<h5 className="text-center ">
					 Available: {item.quantity}
				</h5>
				<img className="imgPic marginSpace marginLeft"  alt={item.item} src={item.image} />
				<Button className="btn-space" color="primary" size="lg" onClick={event => props.handleClick(item._id,item.quantity,item.type, event)}>Add</Button>
				<Button className="btn-space" color="warning" size="lg" onClick={event => props.handleMinusClick(item._id,item.quantity,item.type, event)}>Subtract</Button>
				<Button className="btn-space" color="danger" size="lg" onClick={event => props.handleDeleteClick(item._id, item.type, event)}>Delete</Button>
			</div>
		);
	}))
};

export default itemImages;


