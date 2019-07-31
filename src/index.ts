import express from "express";
import router from "./router/index";
import bodyParser from "body-parser";
import session from "express-session";

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

const sessionConfig = {
  secret: "keyboad cat",
  resave: false,
  saveUninitialized: true
};

app.use(session(sessionConfig));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", router);

const port = 5000;

app.listen(port, () => {
  //a
  console.log(`http://localhost:${port}`);
});
