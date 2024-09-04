import React from 'react'
import './StudentList.css'
import Sidenavbar from '../sidenavbar/Sidenavbar'
import {Container,Row,Col} from 'react-bootstrap'
import Navbar from '../navbar/Navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { IoMdPersonAdd } from "react-icons/io";

const StudentList = () => {
    const [data,setData] = useState([])

useEffect(()=>{
axios.get('http://localhost:3001/studentlist')
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

<Container fluid className='Add ' id='add2'>

<div className="firstbox mt-3">
    <Link  to='../addstudent' className="bigbtn text-center "><button className="btn5 "><IoMdPersonAdd />Add Student</button></Link>
    <Link className='bigbtn'><h3 className="reg m-0 ">Students List</h3></Link>
    <Link className='bigbtn'>   <p className='tex m-0 '>Student Info > Students List</p></Link>
    </div>
    <hr className='hr' />
<br />


<table className='table bg-white '>
            <thead className='text-center'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>DOJ</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>


<tbody className='text-center'>

{

data.map((d,i)=>{
    return <tr className='' key={i}>
        <td>{d.studentid}</td>
        <td>{d.firstname}</td>
        <td>{d.emailid}</td>
        <td>{d.course}</td>
        <td>{d.dateofjoining}</td>
        <td>{d.studentstatus}</td>
        <td>
            <Link  to={`../updatestudent/${d._id}`} className='btn btn-success'>Update</Link>
            <button className='btn btn-danger' onClick={(e)=>handleDelete(d._id)}>Delete</button>
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
      axios.delete('http://localhost:3001/deleteUser/'+id)
      .then(res =>{
          alert("Record deleted")
          window.location.reload()
      })
      
    }
  
  }
}

export default StudentList