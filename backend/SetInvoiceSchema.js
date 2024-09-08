const mongoose = require("mongoose")

const SetInvoiceSchema = new mongoose.Schema({

    setinvoiceno:[String]

})



let SetInvoiceModel = mongoose.model("setinvoice",SetInvoiceSchema)
module.exports=SetInvoiceModel