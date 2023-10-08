const express = require('express');
const shipmentController = require('../controllers/shipmentController');
const shipmentRoutes = express.Router();

shipmentRoutes.get('/', shipmentController.getShipment);
shipmentRoutes.get('/:shipmentId', shipmentController.getShipmentById);

module.exports = { shipmentRoutes };