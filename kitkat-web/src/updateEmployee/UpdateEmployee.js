import React, { useState, useEffect} from 'react'
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



const UpdateEmployee = () => {

    const {id}=useParams()
  const navigate = useNavigate()
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
  


 useEffect(()=>{
    axios.get('http://localhost:3001/getemployee/'+id)
    .then(res=>{
        setValues({...values, 
            employeeid:res.data.employeeid,
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
            salary:res.data.salary,
            uploadphoto:res.data.uploadphoto,
            staffdateofjoining:res.data.staffdateofjoining,
            dateofjoining:res.data.dateofjoining,
            designation:res.data.designation,
            annualsalary:res.data.annualsalary,
            dateofreleving:res.data.dateofreleving,
            pannumber:res.data.pannumber,
            isstaff:res.data.isstaff,
            aadharnumber:res.data.aadharnumber,
            accountnumber:res.data.accountnumber,
            remarks:res.data.remarks,
        })
    })
    .catch(err => console.log(err))
    },[])

  
    const handleUpdate =(e)=>{
        e.preventDefault();
        axios.put('http://localhost:3001/updateEmployee/'+id,values)
    .then(res=>{
        alert('Data Updated Successfully')
        navigate('../employeelist')})
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
    <Link className='bigbtn'><h3 className="reg m-0 ">Update Employee</h3></Link>
    <Link className='bigbtn'>   <p className='tex m-0'>Student Info > Add Employee</p></Link>
    </div>
    <hr className='hr' />
<br />

<form  onSubmit={handleUpdate}>
    <Row className='p-4'>
        <Col lg={6}>

        <div className="stuId">
            <p className='stu'>Employee Id: <span className='star'>*</span></p>
<Form.Control type="string" required placeholder=""  className='control2' name='employeeid' value={values.employeeid}  onChange={e =>setValues({...values,employeeid:e.target.value})} />

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Last Name: <span className='star'>*</span></p>
<Form.Control type="text" required placeholder=""  className='control2' name='lastname' value={values.lastname}  onChange={e =>setValues({...values,lastname:e.target.value})}  />

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Mother Name: <span className='star'>*</span></p>
<Form.Control type="text" required placeholder=""  className='control2' name='mothername' value={values.mothername}  onChange={e =>setValues({...values,mothername:e.target.value})}  />

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Email Id: <span className='star'>*</span></p>
<Form.Control type="email" required placeholder=""  className='control2' name='emailid' value={values.emailid}  onChange={e =>setValues({...values,emailid:e.target.value})}  />

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Contact Number: <span className='star'>*</span></p>
<Form.Control type="text" required placeholder=""  className='control2' name='contactnumber' value={values.contactnumber}  onChange={e =>setValues({...values,contactnumber:e.target.value})}  />

        </div>

        <div className="radiobox mt-5">
<p className='stu'>Gender: <span className='star'>*</span></p>

    <div className="downbox">
        <Form.Check type="radio" required inline aria-label="radio 1" label="Male" value='Male' name='gender' value={values.gender}  onChange={e =>setValues({...values,gender:e.target.value})}  />
        <Form.Check type="radio" required inline aria-label="radio 1" label="Female" value='Female' name='gender' value={values.gender}  onChange={e =>setValues({...values,gender:e.target.value})}  />
        <Form.Check type="radio" required inline aria-label="radio 1" label="Others" value='Others' name='gender' value={values.gender}  onChange={e =>setValues({...values,gender:e.target.value})}  />
        </div>

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Qualification: <span className='star'>*</span></p>
<Form.Select type="text" placeholder=""  required className='control2' name='qualification' value={values.qualification}  onChange={e =>setValues({...values,qualification:e.target.value})}  >
<option>B.com</option>
<option>B.com.ca</option>
<option>BBA</option>
<option>B.Tech</option>
<option>BSC</option>
</Form.Select>

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Designation:</p>
            <Form.Control type="text"   className='control2' name='designation' value={values.designation}  onChange={e =>setValues({...values,designation:e.target.value})} />

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Annual Salary:</p>
<Form.Control type="text" placeholder="0"  className='control2' name='annualsalary' value={values.annualsalary}  onChange={e =>setValues({...values,annualsalary:e.target.value})} />

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Date Of Releving:</p>
<Form.Control  type="date" placeholder=""  className='control2' name='dateofreleving' value={values.dateofreleving}  onChange={e =>setValues({...values,dateofreleving:e.target.value})} />

        </div>

        
        <div className="stuId mt-5">
            <p className='stu'> Staff Date Of Joining:</p>
<Form.Control  type="date" placeholder=""  className='control2' name='staffdateofjoining'value={values.staffdateofjoining}  onChange={e =>setValues({...values,staffdateofjoining:e.target.value})} />

        </div>

        <div className="stuId mt-5">
            <p className='stu'>PAN Number: </p>
            <Form.Control type="text"   className='control2' name='pannumber' value={values.pannumber}  onChange={e =>setValues({...values,pannumber:e.target.value})} />

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Employee Type: </p>
<Form.Select type="text" placeholder=""  className='control2' name='employeetype' value={values.employeetype}  onChange={e =>setValues({...values,employeetype:e.target.value})}  >
  <option>Select Employee Type</option>
<option>Full-Time</option>
<option>Part-time</option>

</Form.Select>

        </div>

        <div className="stuId mt-5">
        <p className='stu'>Remarks:</p>
        <InputGroup>
       <Form.Control as="textarea"  aria-label="With textarea" name='remarks' value={values.remarks}  onChange={e =>setValues({...values,remarks:e.target.value})}  />
      </InputGroup>
      </div>

    
          
        </Col>





        <Col lg={6}>
        <div className="stuId">
            <p className='stu'>First Name: <span className='star'>*</span></p>
<Form.Control type="text" placeholder=""  required className='control2' name='firstname' value={values.firstname}  onChange={e =>setValues({...values,firstname:e.target.value})} />

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Father Name: <span className='star'>*</span></p>
<Form.Control type="text" placeholder="" required  className='control2' name='fathername' value={values.fathername}  onChange={e =>setValues({...values,fathername:e.target.value})}  />

        </div>
        
        <div className="stuId mt-5">
            <p className='stu'>Date Of Birth: <span className='star'>*</span></p>
<Form.Control  type="date" placeholder="" required  className='control2' name='dateofbirth' value={values.dateofbirth}  onChange={e =>setValues({...values,dateofbirth:e.target.value})} />

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Address: <span className='star'>*</span></p>
<Form.Control type="text" placeholder="" required className='control2' name='address' value={values.address}  onChange={e =>setValues({...values,address:e.target.value})} />

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Alternate Number:</p>
<Form.Control type="text" placeholder=""  className='control2' name='alternatenumber' value={values.alternatenumber}  onChange={e =>setValues({...values,alternatenumber:e.target.value})} />

        </div>

        <div className="radiobox mt-5">
<p className='stu'>Martial Status: <span className='star'>*</span></p>

    <div className="downbox">
        <Form.Check type="radio" required inline aria-label="radio 1" label="Single" name='martialstatus' value={values.martialstatus}  onChange={e =>setValues({...values,martialstatus:e.target.value})}  />
        <Form.Check type="radio" required inline aria-label="radio 1" label="Married" name='martialstatus' value={values.martialstatus}  onChange={e =>setValues({...values,martialstatus:e.target.value})}  />
        </div>

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Work Experience: </p>
<Form.Control type="text" placeholder=""  className='control2' name='workexperience' value={values.workexperience}  onChange={e =>setValues({...values,workexperience:e.target.value})} />

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Salary:</p>
<Form.Control type="text" placeholder=""  className='control2' name='salary' value={values.salary}  onChange={e =>setValues({...values,salary:e.target.value})}  />

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Date Of Joining: </p>
<Form.Control  type="date" placeholder=""  className='control2' name='dateofjoining' value={values.dateofjoining}  onChange={e =>setValues({...values,dateofjoining:e.target.value})} />

        </div>




        <div className="radiobox " style={{marginTop:"57px"}}>
<p className='stu'>Is Staff: <span className='star'>*</span></p>

    <div className="downbox">
        <Form.Check type="radio" required inline aria-label="radio 1" label="Yes" name='isstaff' value={values.isstaff}  onChange={e =>setValues({...values,isstaff:e.target.value})}  />
        <Form.Check type="radio" required inline aria-label="radio 1" label="No" name='isstaff' value={values.isstaff}  onChange={e =>setValues({...values,isstaff:e.target.value})}  />
        </div>

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Aadhar Number: <span className='star'>*</span></p>
<Form.Control type="text" placeholder=""  required className='control2' name='aadharnumber' value={values.aadharnumber}  onChange={e =>setValues({...values,aadharnumber:e.target.value})} />

        </div>


        <div className="stuId mt-5">
            <p className='stu'>Account Number: <span className='star'>*</span></p>
<Form.Control type="text" placeholder=""  required className='control2' name='accountnumber' value={values.accountnumber}  onChange={e =>setValues({...values,accountnumber:e.target.value})} />

        </div>

        
       
        <div className="stuId mt-5">
        <p className='stu'>Upload Photo: <span className='star'>*</span></p>
        <Form.Group controlId="formFileMultiple" required className="mb-3">
        <Form.Control type="text" multiple name='uploadphoto' value={values.uploadphoto}  onChange={e =>setValues({...values,uploadphoto:e.target.value})}  />
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

export default UpdateEmployee