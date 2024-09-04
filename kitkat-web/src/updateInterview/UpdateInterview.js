import React, { useState, useEffect } from 'react'
import Sidenavbar from '../sidenavbar/Sidenavbar'
import {Container,Row,Col} from 'react-bootstrap'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FaUsers } from "react-icons/fa";


const UpdateInterview = () => {

  const [values,setValues]=useState({
    investigateddate:"",
    contactnumber:"",
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
const {id}=useParams()

useEffect(()=>{
    axios.get('http://localhost:3001/getcandidate/'+id)
    .then(res=>{
        setValues({...values, 
            investigateddate:res.data.investigateddate,
            contactnumber:res.data.contactnumber,
            emailid:res.data.emailid,
            location:res.data.location,
            qualification:res.data.qualification,
            scheduleddate:res.data.scheduleddate,
            Source:res.data.Source,
            intervieweename:res.data.intervieweename,
            yearofpassing:res.data.yearofpassing,
            followupdates:res.data.followupdates,
            jobrole:res.data.jobrole,
            uploadimage:res.data.uploadimage
        })

      
      
    })
    .catch(err => console.log(err))
    },[])

  
    const handleUpdate =(e)=>{
        e.preventDefault();
        axios.put('http://localhost:3001/updateCandidate/'+id,values)
    .then(res=>{
        alert('Data Updated Successfully')
        navigate('../interviewlist')})
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
    <Link className='bigbtn'><h3 className="reg m-0 ">Update Candidate</h3></Link>
    <Link className='bigbtn'>   <p className='tex m-0'>Intertview > Add Schedule</p></Link>
    </div>
    <hr className='hr' />
<br />

<form  onSubmit={handleUpdate}>
    <Row className='p-4'>
        <Col lg={6}>

    
        <div className="stuId ">
            <p className='stu'>Investigated Date: <span className='star'>*</span></p>
<Form.Control  type="date" placeholder="" required className='control2' name='investigateddate' value={values.investigateddate}  onChange={e =>setValues({...values,investigateddate:e.target.value})}/>

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Email Id: <span className='star'>*</span></p>
<Form.Control type="email" placeholder="" required  className='control2' name='emailid' value={values.emailid}  onChange={e =>setValues({...values,emailid:e.target.value})} />

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Qualification: <span className='star'>*</span></p>
<Form.Select type="text" placeholder=""  className='control2' name='qualification' value={values.qualification}  onChange={e =>setValues({...values,qualification:e.target.value})} >
<option>B.com</option>
<option>B.com.ca</option>
<option>BBA</option>
<option>B.Tech</option>
<option>BSC</option>
</Form.Select>

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Location: <span className='star'>*</span></p>
<Form.Control type="text" required placeholder=""  className='control2' name='location' value={values.location}  onChange={e =>setValues({...values,location:e.target.value})} />

        </div>

      
        <div className="stuId mt-5">
            <p className='stu'>Scheduled Date: <span className='star'>*</span></p>
<Form.Control  type="date" placeholder="" required className='control2' name='scheduleddate' value={values.scheduleddate}  onChange={e =>setValues({...values,scheduleddate:e.target.value})}/>

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Source: <span className='star'>*</span></p>
<Form.Control type="text" required placeholder=""  className='control2' name='Source' value={values.Source}  onChange={e =>setValues({...values,Source:e.target.value})} />

        </div>
  
          
        </Col>





        <Col lg={6}>
        <div className="stuId">
            <p className='stu'>Interviewee Name: <span className='star'>*</span></p>
<Form.Control type="text" placeholder=""  required className='control2' name='intervieweename' value={values.intervieweename}  onChange={e =>setValues({...values,intervieweename:e.target.value})}/>

        </div>

    
        
        <div className="stuId mt-5">
            <p className='stu'>Contact Number: <span className='star'>*</span></p>
<Form.Control type="number" placeholder="" required className='control2' name='contactnumber' value={values.contactnumber}  onChange={e =>setValues({...values,contactnumber:e.target.value})}/>
        </div>

        <div className="stuId mt-5">
            <p className='stu'>Year Of Passing:</p>
<Form.Control type="year" placeholder=""  className='control2' name='yearofpassing' value={values.yearofpassing}  onChange={e =>setValues({...values,yearofpassing:e.target.value})}/>
        </div>


        <div className="stuId mt-5">
            <p className='stu'>Follow Updates: <span className='star'>*</span></p>
<Form.Select type="text" placeholder=""  className='control2' name='followupdates' value={values.followupdates}  onChange={e =>setValues({...values,followupdates:e.target.value})} >
<option>Select Follow Updates</option>
<option>Interviewed</option>
<option>Not Interviewed</option>
<option>Call Back</option>
<option>No Response</option>
</Form.Select>

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Job Role: <span className='star'>*</span></p>
<Form.Control type="text" placeholder=""  required className='control2' name='jobrole' value={values.jobrole}  onChange={e =>setValues({...values,jobrole:e.target.value})}/>

        </div>


        <div className="stuId mt-5">
        <p className='stu'>Upload Image: <span className='star'>*</span></p>
        <Form.Group controlId="formFileMultiple" required className="mb-3">
        <Form.Control type="text" multiple name='uploadimage' value={values.uploadimage}  onChange={e =>setValues({...values,uploadimage:e.target.value})} />
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

export default UpdateInterview