const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../db');

// Register route
router.post('/register', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Check if the user already exists
      const checkUserQuery = 'SELECT * FROM users WHERE username = $1';
      const checkUserValues = [username];
      const { rowCount } = await pool.query(checkUserQuery, checkUserValues);
      if (rowCount > 0) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Insert the new user into the database
      const createUserQuery = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *';
      const createUserValues = [username, hashedPassword];
      const { rows } = await pool.query(createUserQuery, createUserValues);
      const user = rows[0];
  
      // Return a success message
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
// Login route
router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Check if the user exists in the database
      const getUserQuery = 'SELECT * FROM users WHERE username = $1';
      const getUserValues = [username];
      const { rowCount, rows } = await pool.query(getUserQuery, getUserValues);
      const user = rows[0];
      if (rowCount === 0){
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      // Compare the provided password with the stored hash
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
          
      // Create a JWT token
      const token = jwt.sign({ userId: user.id }, 'your-secret-key');
          
      // Return the token
      res.json({ token });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
    });
    
module.exports = router;