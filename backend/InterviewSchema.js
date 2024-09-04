const mongoose = require("mongoose")

const InterviewSchema = new mongoose.Schema({

    investigateddate:[String],
    contactnumber:[String],
    emailid:[String],
    location:[String],
    qualification:[String],
    scheduleddate:[String],
    emailid:[String],
    Source:[String],
    intervieweename:[String],
    yearofpassing:[String],
    followupdates:[String],
    jobrole:[String],
    uploadimage:[String],


})



const InterviewModel = mongoose.model("interviewlist",InterviewSchema)
module.exports=InterviewModel