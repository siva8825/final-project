const mongoose = require("mongoose")

const AttendanceSchema = new mongoose.Schema({

    selectemployee:[String],
    permission:[String],
    indate:[String],
    outdate:[String],
    comments:[String],
    workstatus:[String],
    leave:[String],
    intime:[String],
    outtime:[String]


})



const AttendanceModel = mongoose.model("attendancelist",AttendanceSchema)
module.exports=AttendanceModel
