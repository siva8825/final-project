const mongoose = require("mongoose")

const CustCashinSchema = new mongoose.Schema({

    selectcustomer:[String],
    paidamount:[String],
    paymenttype:[String],
    currentbalance:[String],
    remainingamount:[String],
    comments:[String]

})



let CustomercashinModel = mongoose.model("customercashin",CustCashinSchema)
module.exports=CustomercashinModel