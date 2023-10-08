const express = require('express');
const contactUsController = require('../controllers/contactUsController');
const contactUsRoutes = express.Router();

contactUsRoutes.post('/', contactUsController.createdContactUs);

module.exports = { contactUsRoutes };

