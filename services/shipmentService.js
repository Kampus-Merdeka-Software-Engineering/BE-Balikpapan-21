const pool = require('../config/database');

async function getAllShipment() {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query('SELECT * FROM shipment');
    return rows;
  } finally {
    connection.release();
  }
}


async function createShipment(shipment) {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(
      'INSERT INTO shipment (origin, destination, status) VALUES (?, ?, ?)',
      [shipment.origin, shipment.destination, shipment.status]
    );
    return rows.insertId;
  } finally {
    connection.release();
  }
}

async function getShipmentById(shipmentId) {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query('SELECT * FROM shipment WHERE id = ?', [
      shipmentId,
    ]);
    return rows[0];
  } finally {
    connection.release();
  }
}

async function updateShipmentById(shipmentId, updatedShipment) {
  const connection = await pool.getConnection();
  try {
    await connection.query(
      'UPDATE shipment SET origin = ?, destination = ?, status = ? WHERE id = ?',
      [updatedShipment.origin, updatedShipment.destination, updatedShipment.status, shipmentId]
    );
    return true;
  } finally {
    connection.release();
  }
}

async function deleteShipmentById(shipmentId) {
  const connection = await pool.getConnection();
  try {
    await connection.query('DELETE FROM shipment WHERE id = ?', [shipmentId]);
    return true;
  } finally {
    connection.release();
  }
}

module.exports = {
  getAllShipment,
  createShipment,
  getShipmentById,
  updateShipmentById,
  deleteShipmentById
};