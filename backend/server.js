const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  const username = 'novaldytest';
  const password = 'test123';
  registerUser(username, password);
});