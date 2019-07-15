import express from "express";

const room = express.Router();

room.get("/", (req, res) => {
  res.send("room");
});

room.get("/:roomId", (req, res) => {
  res.send(req.params.roomId);
});

export default room;
