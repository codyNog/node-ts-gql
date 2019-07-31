import express from "express";
import moment from "moment";
import connection from "../../db/mysqlConnection";

const register = express.Router();

register.get("/", (req, res) => {
  res.send("register");
  console.log("register");
});

register.post("/", (req, res, next) => {
  const { user_name, email, password } = req.body;
  const createdAt = moment().format("YYYY-MM-DD HH:mm:ss");
  const emailExistsQuery =
    'SELECT * FROM users WHERE email = "' + email + '" LIMIT 1';
  const registerQuery =
    'INSERT INTO users (user_name, email, password, created_at) VALUES ("' +
    user_name +
    '", ' +
    '"' +
    email +
    '", ' +
    '"' +
    password +
    '", ' +
    '"' +
    createdAt +
    '")';
  connection.query(emailExistsQuery, (err, email) => {
    const emailExist = email.length;
    if (emailExist) {
      res.send("既に登録されているメールアドレスです");
    } else {
      connection.query(registerQuery, (err, rows) => {
        res.send("login");
      });
    }
  });
});

export default register;
