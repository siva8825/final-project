const mongoose = require("mongoose")

const StudentCashinSchema = new mongoose.Schema({

    selectstudent:[String],
    paidamount:[String],
    paymenttype:[String],
    currentbalance:[String],
    remainingamount:[String],
    comments:[String]

})



let StudentcashinModel = mongoose.model("studentcashin",StudentCashinSchema)
module.exports=StudentcashinModel

