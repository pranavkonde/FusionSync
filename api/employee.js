const express = require("express");
const employee = require("../db/models/employee");

const router = express.Router();

//to get particular employee details
router.get("/", async (req, res) => {
  var empId = req.query.data;
  console.log(empId);
  if (!empId) return res.status(500).json({ message: "Internal Server Error" });

  var emp_details = await employee.findOne({ _id: empId });

  if (!emp_details || !emp_details._id) {
    return res.status(400).json({ message: "No Employee Found!" });
  }

  return res.status(200).json({ message: "Success", data: emp_details });
});

//to add new employee
router.post("/", async (req, res) => {
  var emp_details = req.body;
  // console.log(emp_details);
  emp_details.empId = Math.floor(1000 + Math.random() * 9000);
  emp_details.role = "Employee";
  var response = await employee.create(emp_details);

  if (!response?._id) {
    return res
      .status(400)
      .json({ message: "Error in registering new Employee!" });
  }

  return res.status(200).json({ message: "Employee regitered successfully!!" });
});

module.exports = router;
