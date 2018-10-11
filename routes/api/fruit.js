//requiring in my controllers file for Fruits
const router = 'express'.Router();
const fruitController = require('../../controllers/fruitController');

module.exports = router;

// /api/fruit/
router.route('/').get(fruitController.findAll);

// /api/fruit/:data  route to create fruit
router.route('/:data').post(fruitController.createFruit);