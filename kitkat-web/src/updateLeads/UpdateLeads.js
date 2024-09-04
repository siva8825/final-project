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


const UpdateLeads = () => {


    const [data,setData] = useState([])

    useEffect(()=>{
    axios.get('http://localhost:3001/employeelist')
    .then(result=>setData(result.data))
    .catch(err => console.log(err))
    },[])
    


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
const {id}=useParams()

useEffect(()=>{
    axios.get('http://localhost:3001/getleads/'+id)
    .then(res=>{
        setValues({...values, 
            date:res.data.date,
            contactnumber:res.data.contactnumber,
            name:res.data.name,
            qualification:res.data.qualification,
            Source:res.data.Source,
            assignedto:res.data.assignedto,
            yearofpassing:res.data.yearofpassing,
            followupdates:res.data.followupdates,
            Course:res.data.Course,
            detailessent:res.data.detailessent,
            location:res.data.location

        })

      
      
    })
    .catch(err => console.log(err))
    },[])

  
    const handleUpdate =(e)=>{
        e.preventDefault();
        axios.put('http://localhost:3001/updateLeads/'+id,values)
    .then(res=>{
        alert('Data Updated Successfully')
        navigate('../leadslist')})
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
    <Link className='bigbtn'><h3 className="reg m-0 ">Update Leads</h3></Link>
    <Link className='bigbtn'>   <p className='tex m-0'>Leads > Add Leads</p></Link>
    </div>
    <hr className='hr' />
<br />

<form  onSubmit={handleUpdate}>
    <Row className='p-4'>
        <Col lg={6}>

    
        <div className="stuId ">
            <p className='stu'> Date: <span className='star'>*</span></p>
<Form.Control  type="date" placeholder="" required className='control2' name='date' value={values.date}  onChange={e =>setValues({...values,date:e.target.value})}/>

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
            <p className='stu'>Contact Number: <span className='star'>*</span></p>
<Form.Control type="number" placeholder="" required className='control2' name='contactnumber' value={values.contactnumber}  onChange={e =>setValues({...values,contactnumber:e.target.value})}/>
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



        <div className="stuId mt-5 ">
            <p className='stu'>Assigned To: <span className='star'>*</span></p>
<Form.Select type="text" placeholder=""   required className='control2' name='assignedto' value={values.assignedto}  onChange={e =>setValues({...values,assignedto:e.target.value})} >
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
<Form.Select type="text" placeholder=""  className='control2' name='Source' value={values.Source}  onChange={e =>setValues({...values,Source:e.target.value})} >
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
<Form.Control type="text" placeholder=""  required className='control2' name='name' value={values.name}  onChange={e =>setValues({...values,name:e.target.value})}/>

        </div>

    
      

        <div className="stuId mt-5">
            <p className='stu'>Year Of Passing:</p>
<Form.Control type="year" placeholder=""  className='control2' name='yearofpassing' value={values.yearofpassing}  onChange={e =>setValues({...values,yearofpassing:e.target.value})}/>
        </div>


        <div className="stuId mt-5">
            <p className='stu'>Location: <span className='star'>*</span></p>
<Form.Control type="text" placeholder="" required className='control2' name='location' value={values.location}  onChange={e =>setValues({...values,location:e.target.value})}/>
        </div>
     

        <div className="stuId mt-5">
            <p className='stu'>Detailes Sent: <span className='star'>*</span></p>
<Form.Select type="text" placeholder=""  className='control2' name='detailessent' value={values.detailessent}  onChange={e =>setValues({...values,detailessent:e.target.value})} >
<option>Select Detailes Sent Option</option>
<option>Yes</option>
<option>No</option>
</Form.Select>

        </div>
      


        <div className="stuId mt-5">
            <p className='stu'>Course: <span className='star'>*</span></p>
<Form.Select type="text" placeholder=""  className='control2' name='Course'  value={values.Course}  onChange={e =>setValues({...values,Course:e.target.value})}>
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

export default UpdateLeads