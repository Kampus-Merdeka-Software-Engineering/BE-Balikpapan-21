const contactUsService = require('../services/contactUsService');

async function createdContactUs(req, res) {
    try {
      const contactUsId = await contactUsService.createdContactUs(req.body);
      res.status(201).json({ contactUsId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

module.exports = {
  createdContactUs,
};