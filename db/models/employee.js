const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    emailId : {
        type : String,
        required : true,
        unique: true
    },
    password : {
        type: String,
        required: true,
    },
    fullName : {
        type : Number,
        required : true,
        unique: true
    },
    role :{
        type : String,
        required : true
    },
    dateOfJoining :{
        type : String,
        required : true
    },
    panCard: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    employeeCount: {
        type: Number,
        default: false,
        required: true,
    },
},
{
    timestamps : true
});

module.exports = mongoose.model('employee',employeeSchema);


