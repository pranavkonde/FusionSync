const express = require("express");
const db = require("./db");
const app = express();
db.init();
app.listen(4000, () => {
    console.log("server started at 4000");
  });
  