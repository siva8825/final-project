import React from 'react'
import Sidenavbar from '../sidenavbar/Sidenavbar'
import {Container,Row,Col} from 'react-bootstrap'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom';
import { FaUsers } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import './ManageReports.css'

const ManageReports = () => {
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
    <Link className="bigbtn text-center "><button className="btn5 "><FaUsers/>Create</button></Link>
    <Link className='bigbtn'><h3 className="reg m-0 ">Manage Reports</h3></Link>
    <Link className='bigbtn'>   <p className='tex m-0'>Reports > Manage Reports</p></Link>
    </div>
    <hr className='hr' />
<br />

<Container fluid>
    <Row>
        <Col>
<div className="box1">
    <div className="inbox">

   <p className='m-0 amo'> Total Amount By Student</p>

<span className='p-2 bg-primary'><FaDatabase className='dat'/></span>
    </div>
    <p className='m-0'>Rs.10000</p>
</div>

        </Col>

        <Col>
        <div className="box1">
    <div className="inbox">

   <p className='m-0 amo'> Total Amount By Customer</p>

<span className='p-2 bg-primary'><FaDatabase className='dat'/></span>
    </div>
    <p className='m-0'>Rs.10000</p>
</div>
        
        </Col>

        <Col>
        <div className="box1">
    <div className="inbox">

   <p className='m-0 amo'> Total Amount By Cashin</p>

<span className='p-2 bg-primary'><FaDatabase className='dat'/></span>
    </div>
    <p className='m-0'>Rs.10000</p>
</div>
        
        </Col>

        <Col>
        <div className="box1">
    <div className="inbox">

   <p className='m-0 amo'> Total Amount By Cashout</p>

<span className='p-2 bg-primary'><FaDatabase className='dat'/></span>
    </div>
    <p className='m-0'>Rs.10000</p>
</div>
        
        </Col>
    </Row>
</Container>



</Container>

    </Col>
    </Row>
    </Container>
    </>
  )
}

export default ManageReports