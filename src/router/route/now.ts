import express from "express";
import moment from "moment";

const now = express.Router();

const time = moment();

const returnTime = () => {
  return moment();
};

now.get("/", (req, res) => {
  res.send(returnTime());
});

export default now;
