const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const mongoose = require('mongoose');

// Route files
const bootcamps = require('./routes/bootcamps');

// Load env var
dotenv.config({ path: './config/config.env' });

//Connect to DB
connectDB();

const app = express();

app.use(express.json());

app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () =>
  console.log(`Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Handle unhandle promis rejections
process.on('unhandledRejection', (err, promis) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
