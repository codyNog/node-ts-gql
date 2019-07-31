import express from "express";
import user from "./route/user";
import room from "./route/room";
import gql from "./graphql/index";
import db from "./route/db";
import register from "./route/resister";

const router = express();

router.use("/", db);
router.use("/user", user);
router.use("/room", room);
router.use("/register", register);
router.use("/graphql", gql);

export default router;
