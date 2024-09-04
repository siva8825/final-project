import React, { useState, useEffect } from 'react'
import Sidenavbar from '../sidenavbar/Sidenavbar'
import {Container,Row,Col} from 'react-bootstrap'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GiMoneyStack } from "react-icons/gi";
import { useParams } from 'react-router-dom';


const UpdateCustomer = () => {

  const [values,setValues]=useState({
   clientname:"",
   contactnumber:"",
   address:"",
   gstin:"",
    date:"",
    state:"",
    invoiceno:""
})



const navigate = useNavigate()
const {id}=useParams()


useEffect(()=>{
    axios.get('http://localhost:3001/getcustomer/'+id)
    .then(res=>{
        setValues({...values, 
            clientname:res.data.clientname,
            contactnumber:res.data.contactnumber,
            address:res.data.address,
            gstin:res.data.gstin,
            date:res.data.date,
            state:res.data.state,
            invoiceno:res.data.invoiceno,
        })

      
      
    })
    .catch(err => console.log(err))
    },[])

  
    const handleUpdate =(e)=>{
        e.preventDefault();
        axios.put('http://localhost:3001/updateCustomer/'+id,values)
    .then(res=>{
        alert('Data Updated Successfully')
        navigate('../customerlist')})
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
    <Link className="bigbtn text-center "><button className="btn5 "><GiMoneyStack/>GST Invoice</button></Link>
    <Link className='bigbtn'><h3 className="reg m-0 ">Update Customer</h3></Link>
    <Link className='bigbtn'>   <p className='tex m-0'>Customer > Add Customer</p></Link>
    </div>
    <hr className='hr' />
<br />

<form  onSubmit={handleUpdate}>
    <Row className='p-4'>
        <Col lg={6}>

        <div className="stuId ">
            <p className='stu'>Client Name: <span className='star'>*</span></p>
<Form.Control type="text" required placeholder=""  className='control2' name='clientname' value={values.clientname}  onChange={e =>setValues({...values,clientname:e.target.value})} />

        </div>



        <div className="stuId mt-5">
            <p className='stu'>Contact Number: <span className='star'>*</span></p>
<Form.Control type="number" required placeholder=""  className='control2' name='contactnumber' value={values.contactnumber}  onChange={e =>setValues({...values,contactnumber:e.target.value})} />

        </div>

      

       
        <div className="stuId mt-5 ">
            <p className='stu'>State: </p>
<Form.Select type="text" placeholder=""  className='control2' name='state' value={values.state}  onChange={e =>setValues({...values,state:e.target.value})} >
  <option>Select state </option>
<option>Tamilnadu</option>
<option>Kerala</option>
<option>Karnataka</option>
<option>Aandhra</option>
</Form.Select>
</div>
    
<div className="stuId mt-5">
            <p className='stu'>GST In: <span className='star'>*</span></p>
<Form.Control type="string" required placeholder=""  className='control2' name='gstin' value={values.gstin}  onChange={e =>setValues({...values,gstin:e.target.value})} />

        </div>
      

    
          
        </Col>





        <Col lg={6}>

        <div className="stuId ">
            <p className='stu'>Address: <span className='star'>*</span></p>
<Form.Control type="string" required placeholder=""  className='control2' name='address' value={values.address}  onChange={e =>setValues({...values,address:e.target.value})} />

        </div>

<div className="stuId mt-5">
            <p className='stu'>Date:</p>
<Form.Control  type="date" placeholder=""  className='control2' name='date' value={values.date}  onChange={e =>setValues({...values,date:e.target.value})}/>

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Invoice No: <span className='star'>*</span></p>
<Form.Control type="string" required placeholder=""  className='control2' name='invoiceno' value={values.invoiceno}  onChange={e =>setValues({...values,invoiceno:e.target.value})} />

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

export default UpdateCustomer