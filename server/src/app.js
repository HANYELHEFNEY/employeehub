
// The Express app: middleware + routes. No listen() here, so it is easy to test and reuse.
const express = require('express');
const cors = require('cors');

const logger = require('./middleware/logger');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
const departmentRoutes = require('./routes/departmentRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
 
const app = express();
//app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
const allowedOrigins = (process.env.CLIENT_URL || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim());
 
app.use(cors({ origin: allowedOrigins }));


app.use(express.json());
app.use(logger);
 
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/departments', departmentRoutes);
app.use('/api/employees', employeeRoutes);
 
// Always last: unknown routes, then errors
app.use(notFound);
app.use(errorHandler);
 
module.exports = app;
