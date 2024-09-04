import React, { useState } from 'react'
import Sidenavbar from '../sidenavbar/Sidenavbar'
import {Container,Row,Col} from 'react-bootstrap'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GiMoneyStack } from "react-icons/gi";


const AddCustomer = () => {

  const [values,setValues]=useState({
   clientname:"",
   contactnumber:"",
   address:"",
   gstin:"",
    date:"",
    state:"",
    invoiceno:""
})



const navigate = useNavigate()

  const handleChange =(e)=>{
    setValues({...values, [e.target.name]:[e.target.value]})
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/customerlist",values)
        .then(result => {
            alert("Customer Added Successfully")
          navigate("../customerlist")
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

<Container fluid className='Add'>

<div className="firstbox mt-3">
    <Link className="bigbtn text-center "><button className="btn5 "><GiMoneyStack/>GST Invoice</button></Link>
    <Link className='bigbtn'><h3 className="reg m-0 ">Register Customer</h3></Link>
    <Link className='bigbtn'>   <p className='tex m-0'>Customer > Add Customer</p></Link>
    </div>
    <hr className='hr' />
<br />

<form  onSubmit={handleSubmit}>
    <Row className='p-4'>
        <Col lg={6}>

        <div className="stuId ">
            <p className='stu'>Client Name: <span className='star'>*</span></p>
<Form.Control type="text" required placeholder=""  className='control2' name='clientname' onChange={(e)=>handleChange(e)} />

        </div>



        <div className="stuId mt-5">
            <p className='stu'>Contact Number: <span className='star'>*</span></p>
<Form.Control type="number" required placeholder=""  className='control2' name='contactnumber' onChange={(e)=>handleChange(e)} />

        </div>

      

       
        <div className="stuId mt-5 ">
            <p className='stu'>State: </p>
<Form.Select type="text" placeholder=""  className='control2' name='state' onChange={(e)=>handleChange(e)} >
  <option>Select state </option>
<option>Tamilnadu</option>
<option>Kerala</option>
<option>Karnataka</option>
<option>Aandhra</option>
</Form.Select>
</div>
    
<div className="stuId mt-5">
            <p className='stu'>GST In: <span className='star'>*</span></p>
<Form.Control type="string" required placeholder=""  className='control2' name='gstin' onChange={(e)=>handleChange(e)} />

        </div>
      

    
          
        </Col>





        <Col lg={6}>

        <div className="stuId ">
            <p className='stu'>Address: <span className='star'>*</span></p>
<Form.Control type="string" required placeholder=""  className='control2' name='address' onChange={(e)=>handleChange(e)} />

        </div>

<div className="stuId mt-5">
            <p className='stu'>Date:</p>
<Form.Control  type="date" placeholder=""  className='control2' name='date' onChange={(e)=>handleChange(e)}/>

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Invoice No: <span className='star'>*</span></p>
<Form.Control type="string" required placeholder=""  className='control2' name='invoiceno' onChange={(e)=>handleChange(e)} />

        </div>


      
        </Col>
        
    </Row>
    <div className="submitt mt-5 mb-5"><button className="btn5 ">Submit</button></div>
    </form>
    
</Container>





</Col>
</Row>
</Container>
    
    </>
  )
}

export default AddCustomer