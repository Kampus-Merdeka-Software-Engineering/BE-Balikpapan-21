CREATE DATABASE IF NOT EXISTS test_app;

CREATE TABLE IF NOT EXISTS shipment (
  id INT AUTO_INCREMENT PRIMARY KEY,
  origin VARCHAR(255) NOT NULL,
  destination VARCHAR(255) NOT NULL,
  status VARCHAR(255) NOT NULL,
  createdAt DATE
);

INSERT INTO `shipment` ( `origin`, `destination`, `status`) VALUES ('JAKARTA', 'DEPOK', 'DITERIMA');