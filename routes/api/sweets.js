//requiring in my controllers file for Sweets
const router = require('express').Router();
const sweetsController = require('../../controllers/sweetsController');

module.exports = router;

// /api/sweets/
router.route('/').get(sweetsController.findAll);
