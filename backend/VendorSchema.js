const mongoose = require("mongoose")

const VendorSchema = new mongoose.Schema({

    vendorname:[String],
    contactnumber:[String],
    address:[String],
    paidamount:[String],
    comments:[String],
    vendortype:[String],
    emailid:[String],
    currentbalance:[String],
    remainingamount:[String]



})



const VendorModel = mongoose.model("vendorlist",VendorSchema)
module.exports=VendorModel

