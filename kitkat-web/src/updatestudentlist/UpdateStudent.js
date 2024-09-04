import React, { useState,useEffect } from 'react'
import { FaUsers } from "react-icons/fa";
import Sidenavbar from '../sidenavbar/Sidenavbar'
import {Container,Row,Col} from 'react-bootstrap'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UpdateStudent = () => {

    const {id}=useParams()
  const navigate = useNavigate()
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
    remarks:""})
  


 useEffect(()=>{
    axios.get('http://localhost:3001/getStudent/'+id)
    .then(res=>{
        setValues({...values, 
            studentid:res.data.studentid,
            firstname:res.data.firstname,
            lastname:res.data.lastname,
            fathername:res.data.fathername,
            mothername:res.data.mothername,
            dateofbirth:res.data.dateofbirth,
            emailid:res.data.emailid,
            address:res.data.address,
            contactnumber:res.data.contactnumber,
            alternatenumber:res.data.alternatenumber,
            gender:res.data.gender,
            martialstatus:res.data.martialstatus,
            qualification:res.data.qualification,
            remainingamount:res.data.remainingamount,
            remarks:res.data.remarks,
            workexperience:res.data.workexperience,
            course:res.data.course,
            studentimage:res.data.studentimage,
            studentstatus:res.data.studentstatus,
            dateofjoining:res.data.dateofjoining,
            mentor:res.data.mentor,
            totalamount:res.data.totalamount,
        
        })

      
      
    })
    .catch(err => console.log(err))
    },[])

  
    const handleUpdate =(e)=>{
        e.preventDefault();
        axios.put('http://localhost:3001/updatestudentlist/'+id,values)
    .then(res=>{
        alert('Data Updated Successfully')
        navigate('../studentlists')})
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
    
    {/* <div className="add"></div> */}
    <Container fluid className='Add'>
    
       
       <div className="firstbox mt-3">
        <Link  to='../studentlists' className="bigbtn string-center "><button className="btn5 "><FaUsers/>Student List</button></Link>
        <Link className='bigbtn'><h3 className="reg m-0 ">Update Student</h3></Link>
        <Link className='bigbtn'>   <p className='tex m-0'>Student Info > Update Student</p></Link>
        </div>
        <hr className='hr' />
    <br />
    
    <form onSubmit={handleUpdate}>
        <Row className='p-4'>
            <Col lg={6}>
    
            <div className="stuId">
                <p className='stu'>Student Id: <span className='star'>*</span></p>
    <Form.Control type="number" required placeholder=""  className='control2' name='studentid' value={values.studentid}  onChange={e =>setValues({...values,studentid:e.target.value})} />
    
            </div>
    
          <div className="stuId mt-5">
                <p className='stu'>Last Name: <span className='star'>*</span></p>
    <Form.Control type="text" required placeholder=""  className='control2' name='lastname' value={values.lastname}  onChange={e =>setValues({...values,lastname:e.target.value})}/>
    
            </div>
    
             <div className="stuId mt-5">
                <p className='stu'>Mother Name: <span className='star'>*</span></p>
    <Form.Control type="text" required placeholder=""  className='control2' name='mothername' value={values.mothername} onChange={e =>setValues({...values,mothername:e.target.value})}/>
    
            </div>
    
    
             <div className="stuId mt-5">
                <p className='stu'>Email Id: <span className='star'>*</span></p>
    <Form.Control type="text" required placeholder=""  className='control2' name='emailid'  value={values.emailid} onChange={e =>setValues({...values,emailid:e.target.value})}/>
    
            </div>
    
            <div className="stuId mt-5">
                <p className='stu'>Contact Number: <span className='star'>*</span></p>
    <Form.Control type="number" required placeholder=""  className='control2' name='contactnumber' value={values.contactnumber} onChange={e =>setValues({...values,contactnumber:e.target.value})}/>
    
            </div>
    
             <div className="radiobox mt-5">
    <p className='stu'>Gender: <span className='star'>*</span></p>
    
        <div className="downbox">
            <Form.Check type="radio"  inline aria-label="radio 1" label="Male" name='gender' value={values.gender} onChange={e =>setValues({...values,gender:e.target.value})}/>
            <Form.Check type="radio" inline aria-label="radio 1" label="Female" name='gender' value={values.gender} onChange={e =>setValues({...values,gender:e.target.value})}/>
            <Form.Check type="radio" inline aria-label="radio 1" label="Others" name='gender'  value={values.gender} onChange={e =>setValues({...values,gender:e.target.value})}/>
            </div>
    
            </div>
    
    
           <div className="stuId mt-5">
                <p className='stu'>Qualification: <span className='star'>*</span></p>
    <Form.Select type="text" placeholder=""  className='control2' name='qualification' value={values.qualification} onChange={e =>setValues({...values,qualification:e.target.value})}>
    <option>B.com</option>
    <option>B.com.ca</option>
    <option>BBA</option>
    <option>B.Tech</option>
    <option>BSC</option>
    </Form.Select>
    
            </div>
    
    
             <div className="stuId mt-5">
                <p className='stu'>Course: <span className='star'>*</span></p>
    <Form.Select type="text" placeholder=""  className='control2' name='course'  value={values.course} onChange={e =>setValues({...values,course:e.target.value})}>
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
    <Form.Control type="text" placeholder=""  className='control2' name='remainingamount' value={values.remainingamount} onChange={e =>setValues({...values,remainingamount:e.target.value})}/>
    
            </div>
    
            <div className="stuId mt-5">
                <p className='stu'>Date Of Joining: <span className='star'>*</span></p>
    <Form.Control  type="date" placeholder="" required className='control2' name='dateofjoining' value={values.dateofjoining} onChange={e =>setValues({...values,dateofjoining:e.target.value})}/>
    
            </div>
    
            <div className="stuId mt-5">
            <p className='stu'>Student Image: <span className='star'>*</span></p>
            <Form.Group controlId="formFileMultiple" required className="mb-3">
            <Form.Control type="text" multiple name='studentimage' value={values.studentimage} onChange={e =>setValues({...values,studentimage:e.target.value})}/>
          </Form.Group>
          </div>
              
            </Col>
    
    
    
    
    
            <Col lg={6}>
            <div className="stuId">
                <p className='stu'>First Name: <span className='star'>*</span></p>
    <Form.Control type="text" placeholder=""  required className='control2' name='firstname' value={values.firstname} onChange={e =>setValues({...values,firstname:e.target.value})}/>
    
            </div>
    
            <div className="stuId mt-5">
                <p className='stu'>Father Name: <span className='star'>*</span></p>
    <Form.Control type="text" placeholder="" required  className='control2' name='fathername'  value={values.fathername} onChange={e =>setValues({...values,fathername:e.target.value})}/>
    
            </div>
            
            <div className="stuId mt-5">
                <p className='stu'>Date Of Birth: <span className='star'>*</span></p>
    <Form.Control  type="date" placeholder="" required  className='control2' name='dateofbirth' value={values.dateofbirth} onChange={e =>setValues({...values,dateofbirth:e.target.value})}/>
    
            </div>


           <div className="stuId mt-5" >
           <p className='stu'>Address: <span className='star'>*</span></p>
           <Form.Control type="text" placeholder="" required className='control2' name='address' value={values.address} onChange={e =>setValues({...values,address:e.target.value})}/>
           </div>


    
            <div className="stuId mt-5">
                <p className='stu'>Alternate Number:</p>
    <Form.Control type="number" placeholder="" required className='control2' name='alternatenumber' value={values.alternatenumber} onChange={e =>setValues({...values,alternatenumber:e.target.value})}/>
    
            </div>
    
            <div className="radiobox mt-5">
    <p className='stu'>Martial Status: <span className='star'>*</span></p>
    
        <div className="downbox">
            <Form.Check type="radio" inline aria-label="radio 1" label="Single" name='martialstatus' value={values.martialstatus} onChange={e =>setValues({...values,martialstatus:e.target.value})} />
            <Form.Check type="radio" inline aria-label="radio 1" label="Married" name='martialstatus'value={values.martialstatus}  onChange={e =>setValues({...values,martialstatus:e.target.value})}/>
            </div>
    
            </div>
    
            <div className="stuId mt-5">
                <p className='stu'>Work Experience: </p>
    <Form.Control type="number" placeholder=""  className='control2' name='workexperience' value={values.workexperience} onChange={e =>setValues({...values,workexperience:e.target.value})}/>
    
            </div>
    
            <div className="stuId mt-5">
                <p className='stu'>Total Amount: <span className='star'>*</span></p>
    <Form.Control type="text" placeholder="" required className='control2' name='totalamount'  value={values.totalamount} onChange={e =>setValues({...values,totalamount:e.target.value})}/>
    
            </div>
    
            <div className="stuId mt-5">
                <p className='stu'>Mentor: <span className='star'>*</span></p>
    <Form.Select type="text" placeholder="" required className='control2' name='mentor' value={values.mentor} onChange={e =>setValues({...values,mentor:e.target.value})}>
    <option>Select Mentor</option>
    <option>Sussendharan</option>
    </Form.Select>
    
            </div>
    
            
            <div className="stuId mt-5">
                <p className='stu'>Student Status: <span className='star'>*</span></p>
    <Form.Select type="text" placeholder="" required className='control2' name='studentstatus'value={values.studentstatus} onChange={e =>setValues({...values,studentstatus:e.target.value})}>
        <option>Select Student Status</option>
    <option>Ongoing</option>
    <option>Completed</option>
    </Form.Select>
    
            </div>
            
    
       
          <div className="stuId mt-5">
        <p className='stu'>Remarks:</p>
        <InputGroup>
       <Form.Control as="textarea"  aria-label="With textarea" name='remarks' value={values.remarks} onChange={e =>setValues({...values,remarks:e.target.value})} />
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
    
    export default UpdateStudent
    

