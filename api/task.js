const express = require("express");
const shop = require("../db/models/shop");
const employee = require("../db/models/employee");
const task = require("../db/models/task");
const saltRounds = 10;


// create task
router.post("/task", async (req, res) => {
    var task_details = req.body;
    var response = await task.create(task_details);
    if (!response || !response?._id) {
      return res.status(500).json({ message: "Error in registering shop!" });
    }
    return res.status(200).send({ message: "success" });
  });