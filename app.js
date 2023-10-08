require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
const { logger } = require('./middleware/logger');
const { shipmentRoutes } = require('./routes/shipmentRoutes');
const { contactUsRoutes } = require('./routes/contactUsRoutes');
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger)

const apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.use('/shipment', shipmentRoutes);
apiRouter.use('/contact-us', contactUsRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});


app.listen(PORT, () => console.log('Server ready on port:', PORT));