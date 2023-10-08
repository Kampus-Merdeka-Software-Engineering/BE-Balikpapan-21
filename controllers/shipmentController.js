const shipmentService = require('../services/shipmentService');

async function getShipment(req, res) {
  try {
    const shipment = await shipmentService.getShipment();
    res.status(200).json({
      message: "Successfully fetched all shipment",
      data: shipment
    });
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
      message: "Successfully fetched shipment by ID",
      data: shipment
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getShipment,
  getShipmentById
};