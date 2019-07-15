import express from "express";

const user = express.Router();

user.get("/", (req, res) => {
  res.send("user");
});

user.get("/:userId", (req, res) => {
  res.send(req.params.userid);
});

export default user;
