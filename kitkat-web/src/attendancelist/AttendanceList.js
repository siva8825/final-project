import React from 'react'
import Sidenavbar from '../sidenavbar/Sidenavbar'
import {Container,Row,Col} from 'react-bootstrap'
import Navbar from '../navbar/Navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { IoMdPersonAdd } from "react-icons/io";

const AttendanceList = () => {
    const [data,setData] = useState([])

useEffect(()=>{
axios.get('http://localhost:3001/attendancelist')
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
    <Link  to='../addattendance' className="bigbtn text-center "><button className="btn5 "><IoMdPersonAdd />Add Attendance</button></Link>
    <Link className='bigbtn'><h3 className="reg m-0 ">Attendance List</h3></Link>
    <Link className='bigbtn'><p className='tex m-0 '>Attendance > Attendance List</p></Link>
    </div>
    <hr className='hr' />
<br />

<table className='table '>
            <thead className='text-center'>
                <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Permission</th>
                    <th>Leave</th>
                    <th>On-Time</th>
                    <th>Out-Time</th>
                    <th>Action</th>
                </tr>
            </thead>


<tbody className='text-center'>

{

data.map((datas)=>{
    return <tr className=''>
        <td>{datas.selectemployee}</td>
        <td>{datas.workstatus}</td>
        <td>{datas.permission}</td>
        <td>{datas.leave}</td>
        <td>{datas.intime}</td>
        <td>{datas.outtime}</td>
      

        <td>
            <Link  to={`../updateAttendance/${datas._id}`} className='btn btn-success'>Update</Link>
            <button className='btn btn-danger'  onClick={(e)=>handleDelete(datas._id)}>Delete</button>
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
      axios.delete('http://localhost:3001/deleteAttendance/'+id)
      .then(res =>{
          alert("Record deleted")
          window.location.reload()
      })
      
    }
  
  }


}

export default AttendanceList