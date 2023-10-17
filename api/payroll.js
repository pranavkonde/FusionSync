const express = require("express");
const shop = require("../db/models/shop");
const employee = require("../db/models/employee");
const task = require("../db/models/task");
const payroll = require("../db/models/payroll");
const saltRounds = 10;


// create payroll
router.post("/payroll", async (req, res) => {
    var payroll_details = req.body;
    var response = await payroll.create(payroll_details);
    if (!response || !response?._id) {
      return res.status(500).json({ message: "Error in creating payroll!" });
    }
    return res.status(200).send({ message: "success" });
  });