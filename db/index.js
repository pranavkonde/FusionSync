const mongoose = require("mongoose");
require("dotenv").config();
const uri = `mongodb+srv://pranavkonde2020:${process.env.PASSWORD}@cluster0.xo1sq1c.mongodb.net/?retryWrites=true&w=majority`;
const username = "TeamMessaging";
const init = () => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("db is live");
    })
    .catch((err) => {
      console.log(err);
      console.log("Internal server error");
    });
};

module.exports.init = init;
