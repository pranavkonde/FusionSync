const express = require("express");
const bcrypt = require("bcrypt");
const shop = require("../db/models/shop");
const employee = require("../db/models/employee");
const saltRounds = 10;

var router = express.Router();

router.get("/", async (req, res) => {
  res.send("Hello");
});

//get All employees data
router.get("/employeedata", async (req, res) => {
  var allEmpDetails = await employee.find({});
  if (!allEmpDetails) {
    return res.status(500).json({ message: "Error in fetching employees!" });
  }
  allEmpDetails.map((emp_details) => {
    delete emp_details.password;
  });
  return res.status(200).json(allEmpDetails);
});

//register owner/admin
router.post("/register", async (req, res) => {
  var shop_details = req.body;
  // console.log(shop_details);
  var hashed_password = await bcrypt.hash(shop_details.password, saltRounds);
  shop_details.password = hashed_password;

  var response = await shop.create(shop_details);

  if (!response || !response?._id) {
    return res.status(500).json({ message: "Error in registering shop!" });
  }

  var empResponse = await employee.create({
    shopId: response._id,
    empId: Math.floor(1000 + Math.random() * 9000),
    emailId: response.emailId,
    fullName: response.ownerName,
    role: "Owner",
  });

  if (!empResponse || !empResponse?._id) {
    return res
      .status(500)
      .json({ message: "Error in registering as employee!" });
  }

  return res.status(200).send({ message: "success" });
});

//login as employee or admin/owner
router.post("/login", async (req, res) => {
  var login_details = req.body;
  var details = null;
  login_details.type === "owner"
    ? (details = await shop.findOne({ emailId: login_details.emailId }))
    : (details = await employee.findOne({ emailId: login_details.emailId }));

  var flag = await bcrypt.compare(login_details.password, details.password);
  if (flag) {
    return res.status(200).json({
      message: "Login Success!",
      data: { shopId: shop_details._id, shopName: shop_details.shopName },
    });
  } else {
    return res.status(400).json({ message: "Login Failed!" });
  }
});

module.exports = router;
