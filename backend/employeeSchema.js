const mongoose = require("mongoose")



const employeeSchema = new mongoose.Schema({
    employeeid:[String],
    firstname:[String],
    lastname:[String],
    fathername:[String],
    mothername:[String],
    dateofbirth:[String],
    emailid:[String],
    address:[String],
    contactnumber:[String],
    alternatenumber:[String],
    gender:[String],
    martialstatus:[String],
    employeetype:[String],
    qualification:[String],
    workexperience:[String],
    salary:[String],
    dateofjoining:[String],
    uploadphoto:[String],
    staffdateofjoining:[String],
    designation:[String],
    annualsalary:[String],
    dateofreleving:[String],
    pannumber:[String],
    isstaff:[String],
    aadharnumber:[String],
    accountnumber:[String],
    remarks:[String]
})

const employeeModel = mongoose.model("employeelist",employeeSchema)
module.exports=employeeModel