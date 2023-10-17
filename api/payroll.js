const express = require("express");
const payroll = require("../db/models/payroll");
const PDFDocument = require('pdfkit');
const doc = new PDFDocument;
const router = express.Router();

router.post("/payroll", async (req, res) => {
    var payroll_details = req.body;
    var response = await payroll.create(payroll_details);
    
    if (!response?._id) {
      return res
        .status(400)
        .json({ message: "Error in !" });
    }
  
    return res.status(200).json({ message: "Payslip filled successfully!!" });
  });

  module.exports = router;