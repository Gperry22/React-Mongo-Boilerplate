//All routes lead to the controllers file
//require your models and export your functions

const db = require('../models');

module.exports = {
	findAll: (req, res) => {
		db.Sweets
			.find({})
			.then((sweets) => {
				res.json(sweets);
			})
			.catch((err) => {
				res.json(err);
			});
	},

	createSweet: (req,res) => {
		db.Sweets
		.create(req.body)
		.then(sweet => res.json(sweet))
		.catch(err => res.json(err))
	}
};
