const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({ path: "../.env" });

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});

const connectDB = async () => {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
};

module.exports = {con, connectDB};
