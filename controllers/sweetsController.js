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
	}
};
