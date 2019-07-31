import mysql from "mysql";

const dbConfig = {
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "bulletin_board"
};

const connection = mysql.createConnection(dbConfig);

export default connection;
