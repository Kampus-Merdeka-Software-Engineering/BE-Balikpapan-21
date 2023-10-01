const shipmentService = require('../services/shipmentService');

async function getAllShipment(req, res) {
  try {
    const shipment = await shipmentService.getAllShipment();
    res.status(200).json({
      message: "Successfully fetched all shipment",
      data: shipment
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


async function createShipment(req, res) {
  try {
    const shipmentId = await shipmentService.createShipment(req.body);
    res.status(201).json({ shipmentId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getShipmentById(req, res) {
  const { shipmentId } = req.params;
  try {
    const shipment = await shipmentService.getShipmentById(shipmentId);
    if (!shipment) {
      return res.status(404).json({ error: 'shipment not found' });
    }
    res.status(200).json({
      message: "Successfully fetched shipment",
      data: shipment
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function updateShipmentById(req, res) {
  const { shipmentId } = req.params;
  try {
    const shipment = await shipmentService.getShipmentById(shipmentId);
    if (!shipment) {
      return res.status(404).json({ error: 'shipment not found' });
    }


    if (req.body.origin && req.body.origin !== user.origin) { 
      user.origin = req.body.origin;
    }
    
    if (req.body.destination && req.body.destination !== user.destination) {
      user.destination = req.body.destination;
    }
    
    if (req.body.status && req.body.status !== user.status) {
      user.status = req.body.status;
    }

    await shipmentService.updateShipmentById(shipmentId, user);
    res.status(200).json({
      message: "Successfully update shipment",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function deleteShipmentById(req, res) {
  const { shipmentId } = req.params;
  try {
    const shipment = await shipmentService.deleteShipmentById(shipmentId);
    if (!shipment) {
      return res.status(404).json({ error: 'Shipment not found' });
    }
    const deleted = await shipmentService.deleteShipmentById(shipmentId);
    res.status(200).json({
      message: "Successfully delete shipment",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getAllShipment,
  createShipment,
  getShipmentById,
  updateShipmentById,
  deleteShipmentById
};