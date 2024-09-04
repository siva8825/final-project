import React, { useState } from 'react'
import './Register.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

const [username,setUserName]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const navigate=useNavigate('')

const submit =(e)=>{
     e.preventDefault()
     axios.post('http://localhost:3001/register',{username,email,password})
     .then(result=>{console.log(result)
        alert("Registered Successfully")
        navigate('/')
     })
     .catch(err=>console.log(err))
}




  return (
   <>
   
   {/* <div className="d-flex justify-content-center align-items-center  vh-100 bgc  ">
     <div className="log p-3 rounded ">
     <p className="h2 mb-3 in text-center">Register</p>
    <Form onSubmit={submit}>
     <FloatingLabel controlId="floatingInput"label="Username" className="mb-4 mt-4">
        <Form.Control type="text" placeholder="Username" name='username' onChange={(e)=>setUserName(e.target.value)}/>
      </FloatingLabel>

     <FloatingLabel controlId="floatingEmail"label="Email" className="mb-4 mt-4">
        <Form.Control type="email" placeholder="Email" name='email' onChange={(e)=>setEmail(e.target.value)} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Password" >
        <Form.Control type="password" placeholder="Password" name='password' onChange={(e)=>setPassword(e.target.value)}/>
      </FloatingLabel>

<div className="pass mt-4">
      <Link><p className='text-center m-0'>Forget password ?</p></Link>
      <Link to='/'> <p className="text-center m-0 ">Already have an account</p></Link>
      </div>

      <Link className="bigbtn  text-center mt-4 ">
  <button className="btn2 " type="submit" >
     Register
  </button>
</Link>

</Form>

     </div>
      </div>
    */}
   
   <div className="d-flex justify-content-center align-items-center  vh-100 bgc  ">

<div className="log p-3 rounded ">
  <p className="h2 mb-3 in">REGISTER</p>
  <form onSubmit={submit}>

  <div className="mb-3">
  <label htmlFor="email"><strong>UserName</strong></label>
  <input type="text" placeholder='Enter Name' autoComplete='off' name='username' className='form-control rounded-0' 
 onChange={(e)=>setUserName(e.target.value)}
  />
</div>


<div className="mb-3">
  <label htmlFor="email"><strong>Email</strong></label>
  <input type="email" placeholder='Enter Email' autoComplete='off' name='email' className='form-control rounded-0' 
 onChange={(e)=>setEmail(e.target.value)}
  />
</div>

<div className="mb-3">
  <label htmlFor="password"><strong>Password</strong></label>
  <input type="password" placeholder='Enter Password' name='password' className='form-control rounded-0'
   onChange={(e)=>setPassword(e.target.value)}
  />
</div>

<button type='submit' className='btn btn-primary w-100 rounded-0'>Register</button>
<p className='m-0 mt-2 mb-2'>Already have an acount</p>
<Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none '>Login</Link>
  </form>
</div>

</div>


   
   </>
  )
}

export default Register