const mongoose = require("mongoose")

const LeadsSchema = new mongoose.Schema({

    date:[String],
    contactnumber:[String],
    qualification:[String],
    Source:[String],
    name:[String],
    yearofpassing:[String],
    followupdates:[String],
    assignedto:[String],
    Course:[String],
    detailessent:[String],
    location:[String]

})



const LeadsModel = mongoose.model("leadlist",LeadsSchema)
module.exports=LeadsModel

