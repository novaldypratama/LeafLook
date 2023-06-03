//const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { con } = require("../middleware/database");

async function register(req, res) {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    con.query(
      `SELECT * FROM user WHERE username = ?`,
      [username],
      async (error, result) => {
        if (error) {
          console.log(error);
        } else {
          if (result.length > 0) {
            return res.send("The username is already in use");
          }
        }
        //let hashedPassword = await bcrypt.hash(password, 8);

        con.query(
          `INSERT INTO user SET ?`,
          { username: username, password},
          (error, result) => {
            console.log(result);
            if (error) {
              console.log(error);
            } else {
              return res.status(200).send("Account created successfully");
            }
          }
        );
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    con.query(
      "SELECT * FROM user WHERE username = ?",
      [username],
      async (err, results) => {
        if (password == results[0]?.password) {
          res.status(200).send(username);
        } else {
          res.status(401).send("Username or Password is incorrect");
        }
      }
    );
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  register,
  login,
};
