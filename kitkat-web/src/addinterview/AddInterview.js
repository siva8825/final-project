import React, { useState } from 'react'
import { FaUsers } from "react-icons/fa";
import Sidenavbar from '../sidenavbar/Sidenavbar'
import {Container,Row,Col} from 'react-bootstrap'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const AddInterview = () => {

  const [values,setValues]=useState({
    investigateddate:"",
    contactnumber:"",
    email:"",
    location:"",
    qualification:"",
    scheduleddate:"",
    emailid:"",
    Source:"",
    intervieweename:"",
    yearofpassing:"",
    followupdates:"",
    jobrole:"",
    uploadimage:"",
})


const navigate = useNavigate()

  const handleChange =(e)=>{
    setValues({...values, [e.target.name]:[e.target.value]})
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/interviewlist",values)
        .then(result => {
            alert("Scheduled Successfully")
          navigate("../interviewlist")
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
    <Link  to='../interviewlist' className="bigbtn text-center "><button className="btn5 "><FaUsers/>Interview List</button></Link>
    <Link className='bigbtn'><h3 className="reg m-0 ">Register Candidate</h3></Link>
    <Link className='bigbtn'>   <p className='tex m-0'>Intertview > Add Schedule</p></Link>
    </div>
    <hr className='hr' />
<br />

<form  onSubmit={handleSubmit}>
    <Row className='p-4'>
        <Col lg={6}>

    
        <div className="stuId ">
            <p className='stu'>Investigated Date: <span className='star'>*</span></p>
<Form.Control  type="date" placeholder="" required className='control2' name='investigateddate' onChange={(e)=>handleChange(e)}/>

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Email Id: <span className='star'>*</span></p>
<Form.Control type="email" placeholder="" required  className='control2' name='email' onChange={(e)=>handleChange(e)} />

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Qualification: <span className='star'>*</span></p>
<Form.Select type="text" placeholder=""  className='control2' name='qualification' onChange={(e)=>handleChange(e)} >
<option>B.com</option>
<option>B.com.ca</option>
<option>BBA</option>
<option>B.Tech</option>
<option>BSC</option>
</Form.Select>

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Location: <span className='star'>*</span></p>
<Form.Control type="text" required placeholder=""  className='control2' name='location' onChange={(e)=>handleChange(e)} />

        </div>

      
        <div className="stuId mt-5">
            <p className='stu'>Scheduled Date: <span className='star'>*</span></p>
<Form.Control  type="date" placeholder="" required className='control2' name='scheduleddate' onChange={(e)=>handleChange(e)}/>

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Source: <span className='star'>*</span></p>
<Form.Control type="text" required placeholder=""  className='control2' name='Source' onChange={(e)=>handleChange(e)} />

        </div>
  
          
        </Col>





        <Col lg={6}>
        <div className="stuId">
            <p className='stu'>Interviewee Name: <span className='star'>*</span></p>
<Form.Control type="text" placeholder=""  required className='control2' name='intervieweename' onChange={(e)=>handleChange(e)}/>

        </div>

    
        
        <div className="stuId mt-5">
            <p className='stu'>Contact Number: <span className='star'>*</span></p>
<Form.Control type="number" placeholder="" required className='control2' name='contactnumber' onChange={(e)=>handleChange(e)}/>
        </div>

        <div className="stuId mt-5">
            <p className='stu'>Year Of Passing:</p>
<Form.Control type="year" placeholder=""  className='control2' name='yearofpassing' onChange={(e)=>handleChange(e)}/>
        </div>


        <div className="stuId mt-5">
            <p className='stu'>Follow Updates: <span className='star'>*</span></p>
<Form.Select type="text" placeholder=""  className='control2' name='followupdates' onChange={(e)=>handleChange(e)} >
<option>Select Follow Updates</option>
<option>Interviewed</option>
<option>Not Interviewed</option>
<option>Call Back</option>
<option>No Response</option>
</Form.Select>

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Job Role: <span className='star'>*</span></p>
<Form.Control type="text" placeholder=""  required className='control2' name='jobrole' onChange={(e)=>handleChange(e)}/>

        </div>


        <div className="stuId mt-5">
        <p className='stu'>Upload Image: <span className='star'>*</span></p>
        <Form.Group controlId="formFileMultiple" required className="mb-3">
        <Form.Control type="file" multiple name='uploadimage' onChange={(e)=>handleChange(e)} />
      </Form.Group>
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

export default AddInterview