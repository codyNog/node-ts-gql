import express from "express";
import user from "./route/user";
import room from "./route/room";
import gql from "./graphql/index";

const router = express();

router.use("/user", user);
router.use("/room", room);
router.use("/graphql", gql);

export default router;
