const mongoose = require("mongoose")

const signInSchema = new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }

})



let SignInModel = mongoose.model("register",signInSchema)
module.exports=SignInModel

