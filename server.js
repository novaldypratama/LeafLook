const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser'); 

const authRoutes = require('./routes/auth');
// const diseaseRoutes = require('./routes/diseaseRoutes');

const connectDB = require('./middleware/db');
const errorHandler = require('./middleware/errorHandler');
// const { connectToDatabase } = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

// Middleware
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/auth', authRoutes);
// app.use('/api/disease', diseaseRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
  });

// Your server configuration code goes here
// connectToDatabase();