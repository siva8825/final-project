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



const AddEmployee = () => {

  const [values,setValues]=useState({
    employeeid:"",
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
    employeetype:"",
    qualification:"",
    workexperience:"",
    salary:"",
    dateofjoining:"",
    uploadphoto:"",
    staffdateofjoining:"",
    designation:"",
    annualsalary:"",
    dateofreleving:"",
    pannumber:"",
    isstaff:"",
    aadharnumber:"",
    accountnumber:"",
    remarks:""
})

const navigate = useNavigate()

  const handleChange =(e)=>{
    setValues({...values, [e.target.name]:[e.target.value]})
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/employeelist",values)
        .then(result => {
            alert("Employee Data Added Successfully")
          navigate("../employeelist")
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
    <Link  to='../employeelist' className="bigbtn text-center "><button className="btn5 "><FaUsers/>Employee List</button></Link>
    <Link className='bigbtn'><h3 className="reg m-0 ">Register Employee</h3></Link>
    <Link className='bigbtn'>   <p className='tex m-0'>Student Info > Add Employee</p></Link>
    </div>
    <hr className='hr' />
<br />

<form  onSubmit={handleSubmit}>
    <Row className='p-4'>
        <Col lg={6}>

        <div className="stuId">
            <p className='stu'>Employee Id: <span className='star'>*</span></p>
<Form.Control type="string" required placeholder=""  className='control2' name='employeeid' onChange={(e)=>handleChange(e)} />

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Last Name: <span className='star'>*</span></p>
<Form.Control type="text" required placeholder=""  className='control2' name='lastname' onChange={(e)=>handleChange(e)} />

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Mother Name: <span className='star'>*</span></p>
<Form.Control type="text" required placeholder=""  className='control2' name='mothername' onChange={(e)=>handleChange(e)} />

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Email Id: <span className='star'>*</span></p>
<Form.Control type="email" required placeholder=""  className='control2' name='emailid'  onChange={(e)=>handleChange(e)} />

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Contact Number: <span className='star'>*</span></p>
<Form.Control type="text" required placeholder=""  className='control2' name='contactnumber' onChange={(e)=>handleChange(e)} />

        </div>

        <div className="radiobox mt-5">
<p className='stu'>Gender: <span className='star'>*</span></p>

    <div className="downbox">
        <Form.Check type="radio" required inline aria-label="radio 1" label="Male" value='Male' name='gender' onChange={(e)=>handleChange(e)} />
        <Form.Check type="radio" required inline aria-label="radio 1" label="Female"  value='Female'  name='gender' onChange={(e)=>handleChange(e)} />
        <Form.Check type="radio" required inline aria-label="radio 1" label="Others" value='Others'  name='gender' onChange={(e)=>handleChange(e)} />
        </div>

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Qualification: <span className='star'>*</span></p>
<Form.Select type="text" placeholder=""  required className='control2' name='qualification' onChange={(e)=>handleChange(e)} >
<option>B.com</option>
<option>B.com.ca</option>
<option>BBA</option>
<option>B.Tech</option>
<option>BSC</option>
</Form.Select>

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Designation:</p>
            <Form.Control type="text"   className='control2' name='designation'  onChange={(e)=>handleChange(e)}/>

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Annual Salary:</p>
<Form.Control type="text" placeholder="0"  className='control2' name='annualsalary'  onChange={(e)=>handleChange(e)}/>

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Date Of Releving:</p>
<Form.Control  type="date" placeholder=""  className='control2' name='dateofreleving' onChange={(e)=>handleChange(e)}/>

        </div>

        
        <div className="stuId mt-5">
            <p className='stu'> Staff Date Of Joining:</p>
<Form.Control  type="date" placeholder=""  className='control2' name='staffdateofjoining' onChange={(e)=>handleChange(e)}/>

        </div>

        <div className="stuId mt-5">
            <p className='stu'>PAN Number: </p>
            <Form.Control type="text"   className='control2' name='pannumber'  onChange={(e)=>handleChange(e)}/>

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Employee Type: </p>
<Form.Select type="text" placeholder=""  className='control2' name='employeetype' onChange={(e)=>handleChange(e)} >
  <option>Select Employee Type</option>
<option>Full-Time</option>
<option>Part-time</option>

</Form.Select>

        </div>

        <div className="stuId mt-5">
        <p className='stu'>Remarks:</p>
        <InputGroup>
       <Form.Control as="textarea"  aria-label="With textarea" name='remarks' onChange={(e)=>handleChange(e)} />
      </InputGroup>
      </div>

    
          
        </Col>





        <Col lg={6}>
        <div className="stuId">
            <p className='stu'>First Name: <span className='star'>*</span></p>
<Form.Control type="text" placeholder=""  required className='control2' name='firstname' onChange={(e)=>handleChange(e)}/>

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Father Name: <span className='star'>*</span></p>
<Form.Control type="text" placeholder="" required  className='control2' name='fathername' onChange={(e)=>handleChange(e)} />

        </div>
        
        <div className="stuId mt-5">
            <p className='stu'>Date Of Birth: <span className='star'>*</span></p>
<Form.Control  type="date" placeholder="" required  className='control2' name='dateofbirth' onChange={(e)=>handleChange(e)}/>

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Address: <span className='star'>*</span></p>
<Form.Control type="text" placeholder="" required className='control2' name='address' onChange={(e)=>handleChange(e)}/>

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Alternate Number:</p>
<Form.Control type="text" placeholder=""  className='control2' name='alternatenumber' onChange={(e)=>handleChange(e)}/>

        </div>

        <div className="radiobox mt-5">
<p className='stu'>Martial Status: <span className='star'>*</span></p>

    <div className="downbox">
        <Form.Check type="radio" required inline aria-label="radio 1" label="Single" value='Single' name='martialstatus' onChange={(e)=>handleChange(e)} />
        <Form.Check type="radio" required inline aria-label="radio 1" label="Married" value='Married' name='martialstatus' onChange={(e)=>handleChange(e)} />
        </div>

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Work Experience: </p>
<Form.Control type="text" placeholder=""  className='control2' name='workexperience' onChange={(e)=>handleChange(e)}/>

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Salary:</p>
<Form.Control type="text" placeholder=""  className='control2' name='salary' onChange={(e)=>handleChange(e)} />

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Date Of Joining: </p>
<Form.Control  type="date" placeholder=""  className='control2' name='dateofjoining' onChange={(e)=>handleChange(e)}/>

        </div>




        <div className="radiobox " style={{marginTop:"57px"}}>
<p className='stu'>Is Staff: <span className='star'>*</span></p>

    <div className="downbox">
        <Form.Check type="radio" required inline aria-label="radio 1" label="Yes" name='isstaff' onChange={(e)=>handleChange(e)} />
        <Form.Check type="radio" required inline aria-label="radio 1" label="No" name='isstaff' onChange={(e)=>handleChange(e)} />
        </div>

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Aadhar Number: <span className='star'>*</span></p>
<Form.Control type="text" placeholder=""  required className='control2' name='aadharnumber' onChange={(e)=>handleChange(e)}/>

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Account Number: <span className='star'>*</span></p>
<Form.Control type="text" placeholder=""  required className='control2' name='accountnumber' onChange={(e)=>handleChange(e)}/>

        </div>

        
       
        <div className="stuId mt-5">
        <p className='stu'>Upload Photo: <span className='star'>*</span></p>
        <Form.Group controlId="formFileMultiple" required className="mb-3">
        <Form.Control type="file" multiple name='uploadphoto' onChange={(e)=>handleChange(e)} />
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

export default AddEmployee