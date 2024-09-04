import React, { useState } from 'react'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email,setEmail]=useState('')
    const[password,setPasaword]=useState('')
    const navigate = useNavigate()
    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email, password})
        .then(result =>{console.log(result)
  
  if(result.data==="success"){
    alert("login successfull")
    navigate("../dashboard")
  }else{
    alert("Password is Incorrect")
  }
        })
        .catch(err=>console.log(err))
    }
    
      return (
        <>
    
        <div className="d-flex justify-content-center align-items-center  vh-100 bgc  ">
    
    <div className="log p-3 rounded ">
      <p className="h2 mb-3 in">Login</p>
      <form onSubmit={handleSubmit}>
    

    
    <div className="mb-3 mt-3">
      <label htmlFor="email"><strong>Email</strong></label>
      <input type="email" placeholder='Enter Email' autoComplete='off' name='email' required className='form-control rounded-0' 
     onChange={(e)=>setEmail(e.target.value)}
      />
    </div>
    
    <div className="mb-3 mt-3">
      <label htmlFor="password"><strong>Password</strong></label>
      <input type="password" placeholder='Enter Password' name='password' className='form-control rounded-0'
       onChange={(e)=>setPasaword(e.target.value)}
      />
    </div>
    
    <button type='submit' className='btn btn-primary w-100 rounded-0'>Login</button>
    <p className='cre m-0 mt-2 mb-2'> Create an account</p>
    <Link to="../register" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none '>Sign Up</Link>
      </form>
    </div>
    
    </div>
    
  
  
   </>
    )
  
}

export default Login