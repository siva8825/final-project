const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userModel = require("./schema")
const employeeModel = require("./employeeSchema")
const AttendanceModel =require("./AttendanceSchema")
const CustomerModel=require("./CustomerSchema")
const VendorModel =require("./VendorSchema")
const IntertviewModel=require("./InterviewSchema")
const LeadsModel =require("./LeadsSchema")
const SignInModel =require("./Signin")
const multer =require("multer")

const app = express()
app.use(cors())
app.use(express.json())



mongoose.connect("mongodb://127.0.0.1:27017/Login").then(()=>{

  console.log("db is connected");
    
})

app.post("/register",(req,res)=>{
    SignInModel.create(req.body)
    .then(register=>res.json(register))
    .catch(err=>res.json(err))
})
app.post("/login",(req,res)=>{
    const {email,password}=req.body
    SignInModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
               res.json("success")
        }else{
              res.json("password is incorrect")
            }
    }else{
             res.json("No record existed")

           }
    })
})




//StudentList
app.post("/studentlist",(req , res)=>{
    userModel.create(req.body)
    .then(studentlist => res.json(studentlist))
    .catch(err => res.json(err))
})
app.get('/studentlist',(req,res)=>{
    userModel.find({})
    .then(studentlist => res.json(studentlist))
    .catch(err => res.json(err))
})
app.get('/getStudent/:id',(req,res)=>{
    const id = req.params.id
    userModel.findById({_id:id})
    .then(studentlist => res.json(studentlist))
    .catch(err => res.json(err))
})
app.put('/updatestudentlist/:id',(req,res)=>{
    userModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    .then(studentlist => res.json(studentlist))
    .catch(err => res.json(err))
    
})
app.delete('/deleteUser/:id', (req,res)=>{
    const id =req.params.id
    userModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})




//EmployeeList
app.post("/employeelist",(req , res)=>{
    employeeModel.create(req.body)
    .then(employeelist => res.json(employeelist))
    .catch(err => res.json(err))
})
app.get('/employeelist',(req,res)=>{
    employeeModel.find({})
    .then(employeelist => res.json(employeelist))
    .catch(err => res.json(err))
})
app.get('/getemployee/:id',(req,res)=>{
    const id = req.params.id
    employeeModel.findById({_id:id})
    .then(employeelist => res.json(employeelist))
    .catch(err => res.json(err))
})
app.put('/updateEmployee/:id',(req,res)=>{
    employeeModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    .then(employeelist => res.json(employeelist))
    .catch(err => res.json(err))
    
})
app.delete('/deleteEmployee/:id', (req,res)=>{
    const id =req.params.id
    employeeModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})






//AttendanceList
app.post("/attendancelist",(req , res)=>{
    AttendanceModel.create(req.body)
    .then(attendancelist => res.json(attendancelist))
    .catch(err => res.json(err))
})
app.get('/attendancelist',(req,res)=>{
    AttendanceModel.find({})
    .then(attendancelist => res.json(attendancelist))
    .catch(err => res.json(err))
})
app.get('/getattendance/:id',(req,res)=>{
    const id = req.params.id
    AttendanceModel.findById({_id:id})
    .then(attendancelist => res.json(attendancelist))
    .catch(err => res.json(err))
})
app.put('/updateAttendance/:id',(req,res)=>{
    AttendanceModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    .then(attendancelist => res.json(attendancelist))
    .catch(err => res.json(err))
    
})
app.delete('/deleteAttendance/:id', (req,res)=>{
    const id =req.params.id
    AttendanceModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})






//customerlist
app.post("/customerlist",(req , res)=>{
    CustomerModel.create(req.body)
    .then(customerlist => res.json(customerlist))
    .catch(err => res.json(err))
})
app.get('/customerlist',(req,res)=>{
    CustomerModel.find({})
    .then(customerlist => res.json(customerlist))
    .catch(err => res.json(err))
})
app.get('/getcustomer/:id',(req,res)=>{
    const id = req.params.id
    CustomerModel.findById({_id:id})
    .then(customerlist => res.json(customerlist))
    .catch(err => res.json(err))
})
app.put('/updateCustomer/:id',(req,res)=>{
    CustomerModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    .then(customerlist => res.json(customerlist))
    .catch(err => res.json(err))
    
})
app.delete('/deleteCustomer/:id', (req,res)=>{
    const id =req.params.id
    CustomerModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})






//Vendorlist
app.post("/vendorlist",(req , res)=>{
    VendorModel.create(req.body)
    .then(vendorlist => res.json(vendorlist))
    .catch(err => res.json(err))
})
app.get('/vendorlist',(req,res)=>{
    VendorModel.find({})
    .then(vendorlist => res.json(vendorlist))
    .catch(err => res.json(err))
})
app.get('/getvendor/:id',(req,res)=>{
    const id = req.params.id
    VendorModel.findById({_id:id})
    .then(vendorlist => res.json(vendorlist))
    .catch(err => res.json(err))
})
app.put('/updateVendor/:id',(req,res)=>{
    VendorModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    .then(vendorlist => res.json(vendorlist))
    .catch(err => res.json(err))
    
})
app.delete('/deleteVendor/:id', (req,res)=>{
    const id =req.params.id
    VendorModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})






//Interviewlist
app.post("/interviewlist",(req , res)=>{
    IntertviewModel.create(req.body)
    .then(interviewlist => res.json(interviewlist))
    .catch(err => res.json(err))
})
app.get('/interviewlist',(req,res)=>{
    IntertviewModel.find({})
    .then(interviewlist => res.json(interviewlist))
    .catch(err => res.json(err))
})
app.get('/getcandidate/:id',(req,res)=>{
    const id = req.params.id
    IntertviewModel.findById({_id:id})
    .then(interviewlist => res.json(interviewlist))
    .catch(err => res.json(err)) 
})
app.put('/updateCandidate/:id',(req,res)=>{
    IntertviewModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    .then(interviewlist => res.json(interviewlist))
    .catch(err => res.json(err))
})
app.delete('/deleteCandidate/:id', (req,res)=>{
    const id =req.params.id
    IntertviewModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})





//leadsList
app.post("/leadlist",(req , res)=>{
    LeadsModel.create(req.body)
    .then(leadlist => res.json(leadlist))
    .catch(err => res.json(err))
})
app.get('/leadlist',(req,res)=>{
    LeadsModel.find({})
    .then(leadlist => res.json(leadlist))
    .catch(err => res.json(err))
})
app.get('/getleads/:id',(req,res)=>{
    const id = req.params.id
    LeadsModel.findById({_id:id})
    .then(leadlist => res.json(leadlist))
    .catch(err => res.json(err))
})
app.put('/updateLeads/:id',(req,res)=>{
    LeadsModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    .then(leadlist => res.json(leadlist))
    .catch(err => res.json(err))
})
app.delete('/deleteLeads/:id', (req,res)=>{
    const id =req.params.id
    LeadsModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})





app.listen(3001,()=>{
    console.log("server is running");
})


