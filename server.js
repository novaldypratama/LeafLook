const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const bodyParserMiddleware = require('./middleware/bodyParser');
const corsMiddleware = require('./middleware/cors');
const diseaseRoutes = require('./routes/diseaseRoutes');
const { connectToDatabase } = require('./db');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParserMiddleware);
app.use(corsMiddleware);

// Routes
app.use('/auth', authRoutes);
app.use('/api/disease', diseaseRoutes);

// Start the server
// Your server configuration code goes here

connectToDatabase();