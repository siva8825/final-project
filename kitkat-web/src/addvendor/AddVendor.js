import React, { useState } from 'react'
import { FaUsers } from "react-icons/fa";
import Sidenavbar from '../sidenavbar/Sidenavbar'
import {Container,Row,Col} from 'react-bootstrap'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const AddVendor = () => {

  const [values,setValues]=useState({
    vendorname:"",
    contactnumber:"",
    address:"",
    paidamount:"",
    comments:"",
    vendortype:"",
    emailid:"",
    currentbalance:"",
    remainingamount:""
})


const navigate = useNavigate()

  const handleChange =(e)=>{
    setValues({...values, [e.target.name]:[e.target.value]})
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/vendorlist",values)
        .then(result => {
            alert("Vendor Data Added Successfully")
          navigate("../vendorlist")
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
    <Link  to='../vendorlist' className="bigbtn text-center "><button className="btn5 "><FaUsers/>Vendor List</button></Link>
    <Link className='bigbtn'><h3 className="reg m-0 ">Register Vendor</h3></Link>
    <Link className='bigbtn'>   <p className='tex m-0'>Vendor > Add Vendor</p></Link>
    </div>
    <hr className='hr' />
<br />

<form  onSubmit={handleSubmit}>
    <Row className='p-4'>
        <Col lg={6}>

    

        <div className="stuId ">
            <p className='stu'>Vendor Name: <span className='star'>*</span></p>
<Form.Control type="text" required placeholder=""  className='control2' name='vendorname' onChange={(e)=>handleChange(e)} />

        </div>

      

        <div className="stuId mt-5">
            <p className='stu'>Contact Number: <span className='star'>*</span></p>
<Form.Control type="number" required placeholder=""  className='control2' name='contactnumber' onChange={(e)=>handleChange(e)} />

        </div>

      
        <div className="stuId mt-5">
            <p className='stu'>Address:</p>
            <Form.Control type="text"   className='control2' name='address'  onChange={(e)=>handleChange(e)}/>

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Paid Amount:</p>
<Form.Control type="number" placeholder="0"  className='control2' name='paidamount'  onChange={(e)=>handleChange(e)}/>

        </div>


        <div className="stuId mt-5">
        <p className='stu'>Comments:</p>
        <InputGroup>
       <Form.Control as="textarea"  aria-label="With textarea" name='comments' onChange={(e)=>handleChange(e)} />
      </InputGroup>
      </div>

    
          
        </Col>





        <Col lg={6}>
        <div className="stuId">
            <p className='stu'>Vendor Type: <span className='star'>*</span></p>
<Form.Control type="text" placeholder=""  required className='control2' name='vendortype' onChange={(e)=>handleChange(e)}/>

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Email Id: <span className='star'>*</span></p>
<Form.Control type="email" placeholder="" required  className='control2' name='emailid' onChange={(e)=>handleChange(e)} />

        </div>
        
        <div className="stuId mt-5">
            <p className='stu'>Current Balance: <span className='star'>*</span></p>
<Form.Control type="number" placeholder="" required className='control2' name='currentbalance' onChange={(e)=>handleChange(e)}/>
        </div>

        <div className="stuId mt-5">
            <p className='stu'>Remaining Amount:</p>
<Form.Control type="text" placeholder=""  className='control2' name='remainingamount' onChange={(e)=>handleChange(e)}/>
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

export default AddVendor