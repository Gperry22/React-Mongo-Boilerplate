//All routes lead to the controllers file
//require your models and export your functions

const db = require('../models');

module.exports = {
	findAll: (req, res) => {
		db.Fruit
			.find({})
			.then((fruits) => {
				res.json(fruits);
			})
			.catch((err) => {
				res.json(err);
			});
	}
};
