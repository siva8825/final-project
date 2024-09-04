const mongoose = require("mongoose")

const CustomerSchema = new mongoose.Schema({


    clientname:[String],
    contactnumber:[String],
    address:[String],
    gstin:[String],
     date:[String],
     state:[String],
     invoiceno:[String]

})



const CustomerModel = mongoose.model("customerlist",CustomerSchema)
module.exports=CustomerModel
