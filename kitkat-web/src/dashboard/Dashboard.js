import React,{useState} from 'react'
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap'
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import Form from 'react-bootstrap/Form';
import Calendar from 'react-calendar'
import { Link } from 'react-router-dom';
import Sidenavbar from '../sidenavbar/Sidenavbar';
import Navbar from '../navbar/Navbar';
const Dashboard = () => {

  const [calDate, setCalDate] = useState(new Date())

  function onChange (calDate) {
    setCalDate(calDate)
}

  return (
    <>
    <Container fluid>
<Row>
  <Col lg={2} className='p-1 sidemain'>
 <Sidenavbar/>
  </Col>
  <Col lg={10} className='main'>
<Navbar/>
  <div className="mainSpace">
   
  </div>

  <br />
  <br />
<div className="firstmain">


  <div className="secondmain">

    <Link to='../employeelist' className="employee">
    <p className="emp m-0">Employees</p>
    <div className="use"><BiSolidUserRectangle className='usericon'/></div>
    </Link> 
    
    <Link to='../studentlists' className="employee">
    <p className="emp m-0">Students</p>
    <div className="use"><FaUsers className='usericon'/></div>
    </Link> 

    <Link to='../customerlist' className="employee">
    <p className="emp m-0">Clients</p>
    <div className="use"><MdOutlineSignalCellularAlt className='usericon'/></div>
    </Link> 

    <div className="employee">
    <p className="emp m-0">Invoices</p>
    <div className="use"><HiUsers className='usericon'/></div>
    </div> 
   </div>

 <br />
 <br />

<Container fluid>
  <Row>
    <Col lg={8}>
    <div className="thirdmain">

{/* <div className="number  ">
  <p className="num m-0 p-0">Number Of Students Per Course</p>
  <Form.Select size="sm" className='select'>
        <option>2024</option>
        <option>2023</option>
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
      </Form.Select>
</div> */}

<div className="number">
  <p className="num m-0 p-0">Number Of Students Per Course</p>
  <Form.Select size="sm"  className='select'>
        <option>2024</option>
        <option>2023</option>
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
      </Form.Select>
</div>


<p className='not text-center '>No Data Available</p>
</div>
    </Col>
    <Col lg={4}>
    <div className="forthmain ">
<div className="event mt-4">
  <p className="cal">Calender Events</p>
  <p className="goal">Important Goals Are Marked</p>
</div>


    <div className="result-calendar mt-2 cal2">
            <Calendar onChange={onChange} value={calDate} />
        </div>
    </div>
    </Col>
  </Row>
</Container>


</div>

  
  </Col>
</Row>





</Container>
    
    </>
  )
}

export default Dashboard