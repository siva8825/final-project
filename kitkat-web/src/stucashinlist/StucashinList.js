import React from 'react'
import Sidenavbar from '../sidenavbar/Sidenavbar'
import {Container,Row,Col} from 'react-bootstrap'
import Navbar from '../navbar/Navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { IoMdPersonAdd } from "react-icons/io";
import Form from 'react-bootstrap/Form';

const StucashinList = () => {
    const [data,setData] = useState([])

useEffect(()=>{
axios.get('http://localhost:3001/studentcashin')
.then(result=>setData(result.data))
.catch(err => console.log(err))
},[])



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

<Container fluid className='Add' id='add2'>

    
<div className="firstbox mt-3">
    <Link  to='../studentCashin' className="bigbtn text-center "><button className="btn5 "><IoMdPersonAdd />Create</button></Link>
    <Link className='bigbtn'><h3 className="reg m-0 ">Manage Student Cash In</h3></Link>
    <div>
   <Link className='text-black' > <Form.Check type="radio" inline aria-label="radio 1" label="Student" name='cashin' /></Link>
   <Link className='text-black' to='../custcashinlist'><Form.Check type="radio" inline aria-label="radio 1" label="Customer" name='cashin' /></Link>
    </div>
    </div>
    <hr className='hr' />
<br />

<table className='table '>
            <thead className='text-center'>
                <tr>
                    <th>Name</th>
                    <th>Receipt Type</th>
                    <th>Payment Type</th>
                    <th>Paying Amount</th>
                    <th>Balance Amount</th>
                    <th>Action</th>
                </tr>
            </thead>


<tbody className='text-center'>

{

data.map((datas)=>{ 
    return <tr className=''>
        <td>{datas.selectstudent}</td>
        <td>Cash In</td>
        <td>Cash</td>
        <td>{datas.paidamount}</td>
        <td>{datas.remainingamount}</td>
       
        
      
      

        <td>
            <Link  to={`../updatestucashin/${datas._id}`} className='btn btn-success'>Update</Link>
            <button className='btn btn-danger' onClick={(e)=>handleDelete(datas._id)}>Delete</button>
        </td>
    </tr>
})

}


</tbody>
        


</table>
            



</Container>

    </Col>
</Row> 
</Container>   
    </>
  )


  function handleDelete(id){
    const confirm= window.confirm("Do you like to delete?")
    if(confirm){
      axios.delete('http://localhost:3001/deletestudentcashin/'+id)
      .then(res =>{
          alert("Record deleted")
          window.location.reload()
      })
      
    }
  
  }


}

export default StucashinList