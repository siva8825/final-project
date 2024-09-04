import React from 'react'
import Sidenavbar from '../sidenavbar/Sidenavbar'
import {Container,Row,Col} from 'react-bootstrap'
import Navbar from '../navbar/Navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { IoMdPersonAdd } from "react-icons/io";

const CustomerList = () => {
    const [data,setData] = useState([])

useEffect(()=>{
axios.get('http://localhost:3001/customerlist')
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
    <Link  to='../addcustomer' className="bigbtn text-center "><button className="btn5 "><IoMdPersonAdd />Add Customer</button></Link>
    <Link className='bigbtn'><h3 className="reg m-0 ">Customer List</h3></Link>
    <Link className='bigbtn'>   <p className='tex m-0 '>Customer > Customer List</p></Link>
    </div>
    <hr className='hr' />
<br />

<table className='table '>
            <thead className='text-center'>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Date</th>
                    <th>State</th>
                    <th>Contact</th>
                    <th>Invoice</th>
                    <th>GST IN</th>
                    <th>Action</th>
                </tr>
            </thead>


<tbody className='text-center'>

{

data.map((datas)=>{
    return <tr className=''>
        <td>{datas.clientname}</td>
        <td>{datas.address}</td>
        <td>{datas.date}</td>
        <td>{datas.state}</td>
        <td>{datas.contactnumber}</td>
        <td>{datas.invoiceno}</td>
        <td>{datas.gstin}</td>
      

        <td>
            <Link  to={`../updateCustomer/${datas._id}`} className='btn btn-success'>Update</Link>
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
      axios.delete('http://localhost:3001/deleteCustomer/'+id)
      .then(res =>{
          alert("Record deleted")
          window.location.reload()
      })
      
    }
  
  }


}

export default CustomerList