const express = require('express');
const shipmentController = require('../controllers/shipmentController');
const shipmentRoutes = express.Router();

shipmentRoutes.get('/', shipmentController.getAllShipment);

shipmentRoutes.post('/', shipmentController.createShipment);

shipmentRoutes.get('/:shipmentId', shipmentController.getShipmentById);

shipmentRoutes.put('/:shipmentId', shipmentController.updateShipmentById);

shipmentRoutes.delete('/:shipmentId', shipmentController.deleteShipmentById);

module.exports = { shipmentRoutes };