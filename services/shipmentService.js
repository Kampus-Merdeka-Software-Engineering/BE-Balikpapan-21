const { prisma } = require('../config/prisma');

async function getShipment() {
  try {
    const shipment = await prisma.shipment.findMany();
    return shipment;
  } catch (error) {
    console.log(error);
  }
}

async function getShipmentById(shipmentId) {
  try {
    const shipment = await prisma.shipment.findUnique({
      where: {
        id: Number(shipmentId)
      }
    })
    return shipment
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getShipment,
  getShipmentById
};