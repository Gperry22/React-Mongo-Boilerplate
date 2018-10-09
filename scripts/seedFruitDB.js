const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

// This file empties the Fruits collection and inserts the Fruits below
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reactBoilerplate');

const itemSeed = [
	{
		item: 'Apples',
		quantity: '31',
		image: './images/apple.jpg'
	},
	{
		item: 'Bananas',
		quantity: '34',
		image: './images/banana.jpg'
	},
	{
		item: 'Oranges',
		quantity: '18',
		image: './images/orange.jpg'
	},
	{
		item: 'Strawberries',
		quantity: '105',
		image: './images/strawberries.jpg'
	},
	{
		item: 'Watermelons',
		quantity: '21',
		image: './images/watermelon.jpg'
	}
];

db.Fruit
	.deleteMany({})
	.then(() => db.Fruit.collection.insertMany(itemSeed))
	.then((data) => {
		console.log(data.insertedIds.length + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
