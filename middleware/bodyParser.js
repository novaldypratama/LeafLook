const express = require('express');

function bodyParserMiddleware(req, res, next) {
  express.json()(req, res, (error) => {
    if (error) {
      return res.status(400).json({ error: 'Invalid JSON payload' });
    }
    next();
  });
}

module.exports = bodyParserMiddleware;
