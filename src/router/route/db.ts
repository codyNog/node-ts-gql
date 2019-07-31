import express from "express";
import moment from "moment";
import connection from "../../db/mysqlConnection";

const db = express.Router();

db.get("/", (req, res) => {
  const query =
    "SELECT *, DATE_FORMAT(created_at, '%Y年%m月%d日 %k時%i分%s秒') AS created_at FROM boards";
  connection.query(query, (err, rows) => {
    console.log(rows);
    res.send(rows);
  });
});

db.post("/", (req, res, next) => {
  const { title } = req.body;
  const createdAt = moment().format("YYYY-MM-DD HH:mm:ss");
  const query =
    'INSERT INTO boards (title, created_at) VALUES ("' +
    title +
    '", ' +
    '"' +
    createdAt +
    '")';
  connection.query(query, (err, rows) => {
    res.redirect("/");
  });
});

db.post("/", (req, res) => {});

export default db;
