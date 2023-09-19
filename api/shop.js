const express = require("express");
const bcrypt = require("bcrypt");
const shop = require("../db/models/shop");
const saltRounds = 10;

const router = express.Router();



router.get("/", async (req, res) =>{
  res.send("Hello")
})

router.post("/", async (req, res) => {
  const shop_details = req.body;
  console.log(shop_details);
  const hashed_password = await bcrypt.hash(shop_details.password, saltRounds);
  shop_details.password = hashed_password;
  
  const response = await shop.create(shop_details);

  if (!response || !response?._id) {
    return res.status(500).json({ error: response?.errors?.message });
  }
  return res.status(200).send({message: "success"})
})

module.exports = router;
