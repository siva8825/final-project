import React, { useState, useEffect } from 'react'
import { FaUsers } from "react-icons/fa";
import Sidenavbar from '../sidenavbar/Sidenavbar'
import {Container,Row,Col} from 'react-bootstrap'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';




const UpdateAttendance = () => {

    const {id}=useParams()
const navigate = useNavigate()

  const [values,setValues]=useState({
    selectemployee:"",
    permission:"",
    indate:"",
    outdate:"",
    comments:"",
    workstatus:"",
    leave:"",
    intime:"",
    outtime:""
})

const [data,setData] = useState([])

useEffect(()=>{
axios.get('http://localhost:3001/employeelist')
.then(result=>setData(result.data))
.catch(err => console.log(err))
},[])

useEffect(()=>{
    axios.get('http://localhost:3001/getattendance/'+id)
    .then(res=>{
        setValues({...values, 
            selectemployee:res.data.selectemployee,
            permission:res.data.permission,
            indate:res.data.indate,
            outdate:res.data.outdate,
            comments:res.data.comments,
            workstatus:res.data.workstatus,
            leave:res.data.leave,
            intime:res.data.intime,
            outtime:res.data.outtime,
           
        })

      
      
    })
    .catch(err => console.log(err))
    },[])

  
    const handleUpdate =(e)=>{
        e.preventDefault();
        axios.put('http://localhost:3001/updateAttendance/'+id,values)
    .then(res=>{
        alert('Data Updated Successfully')
        navigate('../attendancelist')})
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
    <Link  to='../attendancelist' className="bigbtn text-center "><button className="btn5 "><FaUsers/>Attendance List</button></Link>
    <Link className='bigbtn'><h3 className="reg m-0 ">Update Employee Attendance</h3></Link>
    <Link className='bigbtn'>   <p className='tex m-0'>Attendance > Add Attendance</p></Link>
    </div>
    <hr className='hr' />
<br />

<form  onSubmit={handleUpdate}>
    <Row className='p-4'>
        <Col lg={6}>


        <div className="stuId ">
            <p className='stu'>Select Employee: <span className='star'>*</span></p>
<Form.Select type="text" placeholder="" required className='control2' name='selectemployee' value={values.selectemployee}  onChange={e =>setValues({...values,selectemployee:e.target.value})}>
<option >Select an employee</option>
{
    data.map((datas)=>{
        return<option>{datas.firstname}</option>
    })
}
</Form.Select>

        </div>



        <div className="radiobox mt-5"  >
<p className='stu'>Permission: <span className='star'>*</span></p>

    <div className="downbox">
        <Form.Check type="radio" required inline aria-label="radio 1" label="Yes" name='permission' value={values.permission}  onChange={e =>setValues({...values,permission:e.target.value})}/>
        <Form.Check type="radio" required inline aria-label="radio 1" label="No" name='permission' value={values.permission}  onChange={e =>setValues({...values,permission:e.target.value})}/>
        </div>

        </div>


        <div className="stuId mt-5">
            <p className='stu'>In-Date:</p>
<Form.Control  type="date" placeholder=""  className='control2' name='indate' value={values.indate}  onChange={e =>setValues({...values,indate:e.target.value})}/>

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Out-Date:</p>
<Form.Control  type="date" placeholder=""  className='control2' name='outdate' value={values.outdate}  onChange={e =>setValues({...values,outdate:e.target.value})}/>

        </div>

    

        <div className="stuId mt-5">
        <p className='stu'>Comments:</p>
        <InputGroup>
       <Form.Control as="textarea"  aria-label="With textarea" name='comments' value={values.comments}  onChange={e =>setValues({...values,comments:e.target.value})}/>
      </InputGroup>
      </div>

    
          
        </Col>





        <Col lg={6}>

        <div className="stuId ">
            <p className='stu'>Work Status: </p>
<Form.Select type="text" placeholder=""  className='control2' name='workstatus' value={values.workstatus}  onChange={e =>setValues({...values,workstatus:e.target.value})} >
  <option>Select status </option>
<option>Full-Time</option>
<option>Part-time</option>

</Form.Select>
</div>

<div className="radiobox mt-5"  >
<p className='stu'>Leave: <span className='star'>*</span></p>

    <div className="downbox">
        <Form.Check type="radio" required inline aria-label="radio 1" label="Yes" name='leave' value={values.leave}  onChange={e =>setValues({...values,leave:e.target.value})}/>
        <Form.Check type="radio" required inline aria-label="radio 1" label="No" name='leave' value={values.leave}  onChange={e =>setValues({...values,leave:e.target.value})}/>
        </div>

        </div>


        <div className="stuId mt-5">
            <p className='stu'>In-Time:</p>
<Form.Control  type="time" placeholder=""  className='control2' name='intime' value={values.intime}  onChange={e =>setValues({...values,intime:e.target.value})}/>

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Out-Time:</p>
<Form.Control  type="time" placeholder=""  className='control2' name='outtime' value={values.outtime}  onChange={e =>setValues({...values,outtime:e.target.value})}/>

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

export default UpdateAttendance