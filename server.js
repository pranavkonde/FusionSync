const express = require("express");
const db = require("./db");
const Shop = require("./api/shop");
const bodyParser = require("body-parser")

const app = express();
db.init();

app.use(express.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.use("/", Shop);

app.listen(4000, () => {
    console.log("server started at 4000");
  });
