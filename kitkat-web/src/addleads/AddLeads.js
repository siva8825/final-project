import React, { useState, useEffect } from 'react'
import { FaUsers } from "react-icons/fa";
import Sidenavbar from '../sidenavbar/Sidenavbar'
import {Container,Row,Col} from 'react-bootstrap'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const AddLeads = () => {

  const [values,setValues]=useState({
    date:"",
    contactnumber:"",
    qualification:"",
    Source:"",
    name:"",
    yearofpassing:"",
    followupdates:"",
    assignedto:"",
    Course:"",
    detailessent:"",
    location:""
  
})


const navigate = useNavigate()

const [data,setData] = useState([])

useEffect(()=>{
axios.get('http://localhost:3001/employeelist')
.then(result=>setData(result.data))
.catch(err => console.log(err))
},[])

  const handleChange =(e)=>{
    setValues({...values, [e.target.name]:[e.target.value]})
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/leadlist",values)
        .then(result => {
            alert("Lead Added Successfully")
          navigate("../leadslist")
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
    <Link  to='../leadslist' className="bigbtn text-center "><button className="btn5 "><FaUsers/>Leads List</button></Link>
    <Link className='bigbtn'><h3 className="reg m-0 ">Register Leads</h3></Link>
    <Link className='bigbtn'>   <p className='tex m-0'>Leads > Add Leads</p></Link>
    </div>
    <hr className='hr' />
<br />

<form  onSubmit={handleSubmit}>
    <Row className='p-4'>
        <Col lg={6}>

    
        <div className="stuId ">
            <p className='stu'> Date: <span className='star'>*</span></p>
<Form.Control  type="date" placeholder="" required className='control2' name='date' onChange={(e)=>handleChange(e)}/>

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
            <p className='stu'>Contact Number: <span className='star'>*</span></p>
<Form.Control type="number" placeholder="" required className='control2' name='contactnumber' onChange={(e)=>handleChange(e)}/>
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



        <div className="stuId mt-5 ">
            <p className='stu'>Assigned To: <span className='star'>*</span></p>
<Form.Select type="text" placeholder="" value=""  required className='control2' name='assignedto' onChange={(e)=>handleChange(e)} >
<option >Choose a staff member</option>
{
    data.map((datas)=>{
        return<option>{datas.firstname}</option>
    })
}
</Form.Select>

        </div>


     
        <div className="stuId mt-5">
            <p className='stu'>Source: <span className='star'>*</span></p>
<Form.Select type="text" placeholder=""  className='control2' name='Source' onChange={(e)=>handleChange(e)} >
<option>Select Source</option>
<option>Facebook</option>
<option>Instagram</option>
<option>Refferal</option>
<option>Ads</option>
</Form.Select>

        </div>
  
          
        </Col>





        <Col lg={6}>
        <div className="stuId">
            <p className='stu'> Name: <span className='star'>*</span></p>
<Form.Control type="text" placeholder=""  required className='control2' name='name' onChange={(e)=>handleChange(e)}/>

        </div>

    
      

        <div className="stuId mt-5">
            <p className='stu'>Year Of Passing:</p>
<Form.Control type="year" placeholder=""  className='control2' name='yearofpassing' onChange={(e)=>handleChange(e)}/>
        </div>


        <div className="stuId mt-5">
            <p className='stu'>Location: <span className='star'>*</span></p>
<Form.Control type="text" placeholder="" required className='control2' name='location' onChange={(e)=>handleChange(e)}/>
        </div>
     

        <div className="stuId mt-5">
            <p className='stu'>Detailes Sent: <span className='star'>*</span></p>
<Form.Select type="text" placeholder=""  className='control2' name='detailessent' onChange={(e)=>handleChange(e)} >
<option>Select Detailes Sent Option</option>
<option>Yes</option>
<option>No</option>
</Form.Select>

        </div>
      


        <div className="stuId mt-5">
            <p className='stu'>Course: <span className='star'>*</span></p>
<Form.Select type="text" placeholder=""  className='control2' name='Course'  onChange={(e)=>handleChange(e)}>
<option>Select Course</option>
<option>Fullstack Development</option>
<option>Digital Marketing</option>
<option>Cyber Security</option>
<option>IOS Development</option>
<option>Application Development</option>
</Form.Select>

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

export default AddLeads