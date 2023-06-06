const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const authRoutes = require("./routes/auth");
const { connectDB } = require("./middleware/database");
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/auth", authRoutes);

app.use(errorHandler);

// con.end(function () {
//   console.log("connection closed");
// });

app.listen(8081, () => {
  console.log("listening");
});
module.exports = app;
