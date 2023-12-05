const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/cars', controller.getAllCars);
router.get('/cars/:id', controller.getCarById);
router.get('/cars/sort', controller.sortCars);
router.get('/cars/search', controller.searchCars);

module.exports = router;

