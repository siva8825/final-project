import React from 'react'
import Sidenavbar from '../sidenavbar/Sidenavbar'
import {Container,Row,Col} from 'react-bootstrap'
import Navbar from '../navbar/Navbar'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { IoMdPersonAdd } from "react-icons/io";
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


const SetInvoice = () => {
const navigate =useNavigate()

    const [values,setValues]=useState({
        setinvoiceno:""
    })

    const handleChange =(e)=>{
        setValues({...values,[e.target.name]:[e.target.value]})
        }
        
   

        const handleSubmit=(e)=>{
            e.preventDefault()
            axios.post("http://localhost:3001/setinvoice")
            .then(result => {
            console.log(result)
            alert("Invoice ID Added Successfully")
            navigate("../addcustomer")
            })
            .catch(err => console.log(err))
        }
    
  return (
    <>
<Container fluid>
 <Row>
  <Col lg={2} className='p-1 sidemain'>
  <Sidenavbar/>
  </Col>
  <Col lg={10} className='main'>

  <div className="mainSpace">
 <Navbar/>
 </div>

<br />
<br />

<Container fluid className='Add ' >

    
<div className="firstbox mt-3">
    <Link  to='../addcustomer' className="bigbtn text-center "><button className="btn5 "><IoMdPersonAdd />Add Customer</button></Link>
    <Link className='bigbtn'><h3 className="reg m-0 ">Set Invoice ID</h3></Link>
    <div>
    <Link className='bigbtn'>   <p className='tex m-0 '>Master > Invoice No</p></Link>
    </div>
    </div>
    <hr className='hr' />
<br />
<form onSubmit={handleSubmit}>
<div className="invoice">

            <p className='stu'>Invoice ID: <span className='star'>*</span></p>
<Form.Control type="string" required placeholder=""  className='control2' name='setinvoiceno' value={values.setinvoiceno} onChange={handleChange} />

       
</div>
<div className="submitt mt-5 mb-5"><button className="btn5 ">Set ID</button></div>
</form>
</Container>


</Col>
</Row>
</Container>



    </>
  )
}

export default SetInvoice