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

const UpdateCusCashin = () => {

    const {id}=useParams()
    const navigate = useNavigate()

    const [data,setData] = useState([])

  useEffect(()=>{
  axios.get('http://localhost:3001/customerlist')
  .then(result=>setData(result.data))
  .catch(err => console.log(err))
  },[])


    const [values,setValues]=useState({
        selectcustomer:"",
        paidamount:"",
        paymenttype:"",
        currentbalance:"",
        remainingamount:"",
        comments:""
    })

    useEffect(()=>{
        axios.get('http://localhost:3001/getcustomercashin/'+id)
        .then(res=>{
            setValues({...values, 
                selectcustomer:res.data.selectcustomer,
                paidamount:res.data.paidamount,
                paymenttype:res.data.paymenttype,
                currentbalance:res.data.currentbalance,
                remainingamount:res.data.remainingamount,
                comments:res.data.comments,
               
            })
    
          
          
        })
        .catch(err => console.log(err))
        },[id])
    
      
        const handleUpdate =(e)=>{
            e.preventDefault();
            axios.put('http://localhost:3001/updatecashincust/'+id,values)
        .then(res=>{
            alert('Data Updated Successfully')
            navigate('../custcashinlist')})
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
    <Link  to='../stucashinlist' className="bigbtn text-center "><button className="btn5 "><FaUsers/>Cash In</button></Link>
    <Link className='bigbtn'><h3 className="reg m-0 ">Update Customer CashIn</h3></Link>
    <Link className='bigbtn'>   <p className='tex m-0 '>Cash In > Update Customer Cashin</p></Link>
    </div>
    <hr className='hr' />
<br />


<form onSubmit={handleUpdate}>

<Row className='p-4'>
        <Col lg={6}>

        <div className="stuId">
            <p className='stu'>Student Name: <span className='star'>*</span></p>
           <Form.Select  type="select" name='selectcustomer'  value={values.selectcustomer}  onChange={e =>setValues({...values,selectstudent:e.target.value})}>
<option>Select Customer</option>
{
    data.map((datas)=>{
        return<option>{datas.clientname}</option>
    })
}
</Form.Select>
        </div>

        <div className="stuId mt-5">
            <p className='stu'>Paid Amount: <span className='star'>*</span></p>
<Form.Control type="number" required placeholder=""  className='control2' name='paidamount'  value={values.paidamount} onChange={e =>setValues({...values,paidamount:e.target.value})}/>

        </div>

        <div className="radiobox mt-5"  >
<p className='stu'>Payment Type: <span className='star'>*</span></p>

    <div className="downbox">
        <Form.Check type="radio" required inline aria-label="radio 1" label="Cash" name='paymenttype'   value={values.paymenttype} onChange={e =>setValues({...values,paymenttype:e.target.value})}/>
        <Form.Check type="radio" required inline aria-label="radio 1" label="Gpay" name='paymenttype'   value={values.paymenttype} onChange={e =>setValues({...values,paymenttype:e.target.value})}/>
        <Form.Check type="radio" required inline aria-label="radio 1" label="Bank" name='paymenttype'   value={values.paymenttype} onChange={e =>setValues({...values,paymenttype:e.target.value})}/>
        </div>

        </div>


</Col>



<Col lg={6}>
        <div className="stuId">
            <p className='stu'>Current Balance: <span className='star'>*</span></p>
<Form.Control type="number" placeholder=""  required className='control2' name='currentbalance'  value={values.currentbalance} onChange={e =>setValues({...values,currentbalance:e.target.value})}/>

        </div>

        <div className="stuId mt-5">
            <p className='stu'>Remaining Amount: <span className='star'>*</span></p>
<Form.Control type="number" placeholder="" required  className='control2' name='remainingamount'   value={values.remainingamount} onChange={e =>setValues({...values,remainingamount:e.target.value})}/>

        </div>

        <div className="stuId mt-5">
        <p className='stu'>Comments:</p>
        <InputGroup>
       <Form.Control as="textarea"  aria-label="With textarea" name='comments'  value={values.comments} onChange={e =>setValues({...values,comments:e.target.value})}/>
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

export default UpdateCusCashin