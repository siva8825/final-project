const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    studentid:[String],
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
    qualification:[String],
    workexperience:[String],
    course:[String],
    totalamount:[String],
    remainingamount:[String],
    mentor:[String],
    dateofjoining:[String],
    studentstatus:[String],
    studentimage:[String],
    remarks:[String]

})



let userModel = mongoose.model("studentlist",userSchema)
module.exports=userModel

