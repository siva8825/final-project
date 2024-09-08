import React, { useState } from 'react'
import'./AddStudent.css'
import { FaUsers } from "react-icons/fa";
import Sidenavbar from '../sidenavbar/Sidenavbar'
import {Container,Row,Col} from 'react-bootstrap'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {

const [values,setValues]=useState({
    studentid:"",
    firstname:"",
    lastname:"",
    fathername:"",
    mothername:"",
    dateofbirth:"",
    emailid:"",
    address:"",
    contactnumber:"",
    alternatenumber:"",
    gender:"",
    martialstatus:"",
    qualification:"",
    workexperience:"",
    course:"",
    totalamount:"",
    remainingamount:"",
    mentor:"",
    dateofjoining:"",
    studentstatus:"",
    studentimage:"",
    remarks:""
})

const navigate =useNavigate()

const handleChange =(e)=>{
setValues({...values, [e.target.name]:[e.target.value]})
}

const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3001/studentlist",values)
    .then(result => {
        alert("Student Data Added Successfully")
        navigate('../studentlists')
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
    <Link  to='../studentlists' className="bigbtn text-center "><button className="btn5 "><FaUsers/>Student List</button></Link>
    <Link className='bigbtn'><h3 className="reg m-0 ">Register Student</h3></Link>
    <Link className='bigbtn'>   <p className='tex m-0'>Student Info > Add Student</p></Link>
    </div>
    <hr className='hr' />
<br />

<form  onSubmit={handleSubmit}>
    <Row className='p-4'>
        <Col lg={6}>

        <div className="stuId">
            <p className='stu'>Student Id: <span className='star'>*</span></p>
<Form.Control type="string" required placeholder=""  className='control2' name='studentid' value={values.studentid} onChange={(e)=>handleChange(e)} />

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Last Name: <span className='star'>*</span></p>
<Form.Control type="text" required placeholder=""  className='control2' name='lastname' value={values.lastname} onChange={(e)=>handleChange(e)} />

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Mother Name: <span className='star'>*</span></p>
<Form.Control type="text" required placeholder=""  className='control2' name='mothername' value={values.mothername} onChange={(e)=>handleChange(e)} />

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Email Id: <span className='star'>*</span></p>
<Form.Control type="email" required placeholder=""  className='control2' name='emailid' value={values.emailid}  onChange={(e)=>handleChange(e)} />

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Contact Number: <span className='star'>*</span></p>
<Form.Control type="text" required placeholder=""  className='control2' name='contactnumber' value={values.contactnumber} onChange={(e)=>handleChange(e)} />

        </div>

        <div className="radiobox mt-5">
<p className='stu'>Gender: <span className='star'>*</span></p>

    <div className="downbox">
        <Form.Check type="radio"  inline aria-label="radio 1" label="Male" name='gender' value={values.gender} onChange={(e)=>handleChange(e)} />
        <Form.Check type="radio" inline aria-label="radio 1" label="Female" name='gender' value={values.gender} onChange={(e)=>handleChange(e)} />
        <Form.Check type="radio" inline aria-label="radio 1" label="Others" name='gender' value={values.gender} onChange={(e)=>handleChange(e)} />
        </div>

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Qualification: <span className='star'>*</span></p>
<Form.Select type="text" placeholder=""  className='control2' name='qualification' values={values.qualification} onChange={(e)=>handleChange(e)} >
<option>B.com</option>
<option>B.com.ca</option>
<option>BBA</option>
<option>B.Tech</option>
<option>BSC</option>
</Form.Select>

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Course: <span className='star'>*</span></p>
<Form.Select type="text" placeholder=""  className='control2' name='course' value={values.course} onChange={(e)=>handleChange(e)}>
<option>Select Course</option>
<option>Fullstack Development</option>
<option>Digital Marketing</option>
<option>Cyber Security</option>
<option>IOS Development</option>
<option>Application Development</option>
</Form.Select>

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Remaining Amount: <span className='star'>*</span></p>
<Form.Control type="text" placeholder="0"  className='control2' name='remainingamount' value={values.remainingamount} onChange={(e)=>handleChange(e)}/>

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Date Of Joining: <span className='star'>*</span></p>
<Form.Control  type="date" placeholder="" required className='control2' name='dateofjoining' value={values.dateofjoining} onChange={(e)=>handleChange(e)}/>

        </div>

        <div className="stuId mt-5">
        <p className='stu'>Student Image: <span className='star'>*</span></p>
        <Form.Group controlId="formFileMultiple" required className="mb-3">
        <Form.Control type="file" multiple name='studentimage' value={values.studentimage} onChange={(e)=>handleChange(e)} />
      </Form.Group>
      </div>
          
        </Col>





        <Col lg={6}>
        <div className="stuId">
            <p className='stu'>First Name: <span className='star'>*</span></p>
<Form.Control type="text" placeholder=""  required className='control2' name='firstname' value={values.firstname} onChange={(e)=>handleChange(e)}/>

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Father Name: <span className='star'>*</span></p>
<Form.Control type="text" placeholder="" required  className='control2' name='fathername' value={values.fathername} onChange={(e)=>handleChange(e)} />

        </div>
        
        <div className="stuId mt-5">
            <p className='stu'>Date Of Birth: <span className='star'>*</span></p>
<Form.Control  type="date" placeholder="" required  className='control2' name='dateofbirth' value={values.dateofbirth} onChange={(e)=>handleChange(e)}/>

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Address: <span className='star'>*</span></p>
<Form.Control type="text" placeholder="" required className='control2' name='address' value={values.address} onChange={(e)=>handleChange(e)}/>

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Alternate Number:</p>
<Form.Control type="text" placeholder="" required className='control2' name='alternatenumber' value={values.alternatenumber} onChange={(e)=>handleChange(e)}/>

        </div>

        <div className="radiobox mt-5">
<p className='stu'>Martial Status: <span className='star'>*</span></p>

    <div className="downbox">
        <Form.Check type="radio" inline aria-label="radio 1" label="Single" value={values.martialstatus} name='martialstatus' onChange={(e)=>handleChange(e)} />
        <Form.Check type="radio" inline aria-label="radio 1" label="Married" value={values.martialstatus} name='martialstatus' onChange={(e)=>handleChange(e)} />
        </div>

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Work Experience: </p>
<Form.Control type="text" placeholder=""  className='control2' name='workexperience' value={values.workexperience} onChange={(e)=>handleChange(e)}/>

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Total Amount: <span className='star'>*</span></p>
<Form.Control type="text" placeholder="" required className='control2' name='totalamount' value={values.totalamount} onChange={(e)=>handleChange(e)} />

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Mentor: <span className='star'>*</span></p>
<Form.Select type="text" placeholder="" required className='control2' name='mentor' onChange={(e)=>handleChange(e)} >
<option>Select Mentor</option>
<option>Sussendharan</option>
</Form.Select>

        </div>

        
        <div className="stuId mt-5">
            <p className='stu'>Student Status: <span className='star'>*</span></p>
<Form.Select type="text" placeholder="" required className='control2' name='studentstatus' onChange={(e)=>handleChange(e)} >
    <option>Select Student Status</option>
<option>Ongoing</option>
<option>Completed</option>
</Form.Select>

        </div>
        

        <div className="stuId mt-5">
        <p className='stu'>Remarks:</p>
        <InputGroup>
       <Form.Control as="textarea"  aria-label="With textarea" name='remarks' onChange={(e)=>handleChange(e)} />
      </InputGroup>
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

export default AddStudent

