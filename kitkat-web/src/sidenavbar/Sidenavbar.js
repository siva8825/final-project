import React, { useState } from 'react'
import kitkatlogo from '../images/kitkat logo.jpg'
import './Sidenavbar.css'
import { FaUser } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaReceipt } from "react-icons/fa6";
import { BsCalendar2MinusFill } from "react-icons/bs";
import { BsBarChartFill } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa6";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { MdOutlineMoneyOffCsred } from "react-icons/md";
import { FaIdCardClip } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidenavbar = () => {

const [drop,setDrop] = useState(false)
const [attenDrop,setAttenDrop]=useState(false)
const [customerDrop,setCustomerDrop]=useState(false)
const [vendorDrop,setVendorDrop]=useState(false)
const [leadsDrop,setLeadsDrop]=useState(false)
const [receiptDrop,setReceiptDrop]=useState(false)
const [interviewDrop,setInterviewDrop]=useState(false)
const [reportDrop,setReportdrop]=useState(false)
const [billDrop,setBillDrop]=useState(false)
const [masterDrop,setMasterDrop]=useState(false)



  return (
    <>


    
     <div className="sidebar px-2">
      <div className="logo">
        <img src={kitkatlogo} alt=""   className='img'/>
        </div>
<hr />
       <div className="navitems ">
        
<div className="a">A<p className='round'></p></div>
<div className="a2"><p className='admin pt-1 m-0'>ADMIN</p></div>

        </div> 
<hr />

<div className="student" onClick={()=>{
setDrop(!drop)
}}>
<FaUser  className='user'/>
<p className="info m-0">Student Info</p>
<FaChevronDown  className='chevron'/>
</div>
<hr />
<div id="drop" className={drop ? "dropOpen" : ""}>
  

<Link  to="../addstudent" className="student3">
<FaPlusCircle  className='user'/>
<p className="info m-0">Add Student</p>
</Link>
<hr />

<Link to='../addemployee' className="student3">
<FaPlusCircle  className='user'/>
<p className="info m-0">Add Employee</p>
</Link>
<hr />

<Link to='../studentlists' className="student3">
<FaList  className='user'/>
<p className="info m-0">Student List</p>
</Link>
<hr />

<Link to="../employeelist" className="student3">
<FaList  className='user'/>
<p className="info m-0">Employee List</p>
</Link>
<hr />

</div>




<div className="student" onClick={()=>{
  setAttenDrop(!attenDrop)
}}>
<FaRegCalendarAlt  className='user'/>
<p className="info m-0">Attendence</p>
<FaChevronDown  className='chevron'/>
</div>
<hr />
<div id="drop2" className={attenDrop ? "attenDropOpen" : ""}>
  
<Link to='../addattendance' className="student3">
<FaPlusCircle  className='user'/>
<p className="info m-0">Add Attendence</p>
</Link>
<hr />

<Link to='../attendancelist'  className="student3">
<FaPlusCircle  className='user'/>
<p className="info m-0">View Attendence</p>
</Link>
<hr />
</div>



<div className="student" onClick={()=>{
setCustomerDrop(!customerDrop)
}}>
<FaUser  className='user'/>
<p className="info m-0">Customer</p>
<FaChevronDown  className='chevron'/>
</div>
<hr />

<div id='drop3' className={customerDrop ?"customerDropOpen":""}>

<Link to='../addcustomer' className="student3">
<FaPlusCircle  className='user'/>
<p className="info m-0">Add Customer</p>
</Link>
<hr />

<Link to='../customerlist' className="student3">
<FaList  className='user'/>
<p className="info m-0">Customer List</p>
</Link>
<hr />


</div>





<div className="student" onClick={()=>{
  setVendorDrop(!vendorDrop)
}} >
<FaUser  className='user'/>
<p className="info m-0">Vender</p>
<FaChevronDown  className='chevron'/>
</div>
<hr />

<div id='drop4' className={vendorDrop?"vendorDropOpen":""}>
<Link to='../addvendor' className="student3">
<FaPlusCircle  className='user'/>
<p className="info m-0">Add Vendor</p>
</Link>
<hr />

<Link to='../vendorlist' className="student3">
<FaList  className='user'/>
<p className="info m-0">Manage Vendor</p>
</Link>
<hr />
</div>





<div className="student" onClick={()=>{
  setLeadsDrop(!leadsDrop)
}}>
<FaUser  className='user'/>
<p className="info m-0">Leads</p>
<FaChevronDown  className='chevron'/>
</div>
<hr />

<div id='drop5' className={leadsDrop?"leadsDropOpen":""}>

<Link to='../addleads' className="student3">
<FaPlusCircle  className='user'/>
<p className="info m-0">Add Leads</p>
</Link>
<hr />

<Link to='../leadslist' className="student3">
<FaList  className='user'/>
<p className="info m-0">Manage Leads</p>
</Link>
<hr />

<div className="student3">
<FaList  className='user'/>
<p className="info m-0">Rescheduled List</p>
</div>
<hr />

</div>





<div className="student" onClick={()=>{
  setReceiptDrop(!receiptDrop)
}}>
<FaReceipt  className='user'/>
<p className="info m-0">Receipt</p>
<FaChevronDown  className='chevron'/>
</div>
<hr />

<div id='drop6' className={receiptDrop?"receiptDropOpen":""}>

<Link to='../studentCashin' className="student3">
<FaList  className='user'/>
<p className="info m-0">Cash-In</p>
</Link>
<hr />

<Link to='../cashout' className="student3">
<FaList  className='user'/>
<p className="info m-0">Cash-Out</p>
</Link>
<hr />

</div>





<div className="student" onClick={()=>{
  setInterviewDrop(!interviewDrop)
}}>
<BsCalendar2MinusFill  className='user'/>
<p className="info m-0">Interview</p>
<FaChevronDown  className='chevron'/>
</div>
<hr />

<div id='drop7' className={interviewDrop?"interviewDropOpen":""}>

<Link to='../addinterview' className="student3">
<FaPlusCircle  className='user'/>
<p className="info m-0">Add Schedule</p>
</Link>
<hr />

<Link to='../interviewlist' className="student3">
<FaList  className='user'/>
<p className="info m-0">Schedule List</p>
</Link>
<hr />

</div>




<div className="student" onClick={()=>{
  setReportdrop(!reportDrop)
}}>
<BsBarChartFill  className='user'/>
<p className="info m-0">Reports</p>
<FaChevronDown  className='chevron'/>
</div>
<hr />
<div id='drop8' className={reportDrop?"reportDropOpen":""}>
<Link to='../reports' className="student3">
<FaList  className='user'/>
<p className="info m-0">Manage reports</p>
</Link>
<hr />
</div>

<div className="student" onClick={()=>{
  setBillDrop(!billDrop)
}}>
<FaMoneyBill  className='user'/>
<p className="info m-0">Billing</p>
<FaChevronDown  className='chevron'/>
</div>
<hr />

<div id='drop9' className={billDrop?"billDropOpen":""}>

<Link to='../billing' className="student3">
<MdAttachMoney  className='user'/>
<p className="info m-0">GST</p>
</Link>
<hr />

<Link to='../billing2'  className="student3">
<MdOutlineMoneyOffCsred  className='user'/>
<p className="info m-0">Non-GST</p>
</Link>
<hr />

</div>



<div className="student" onClick={()=>{
  setMasterDrop(!masterDrop)
}}>
<BsFillBagCheckFill  className='user'/>
<p className="info m-0">Masters</p>
<FaChevronDown  className='chevron'/>
</div>
<hr />
<div id='drop10' className={masterDrop?"masterDropOpen":""}>

<Link to='../setinvoiceno' className="student3">
<FaIdCardClip  className='user'/>
<p className="info m-0">Invoice No</p>
</Link>
<hr />

<div className="student3">
<FaIdCardClip  className='user'/>
<p className="info m-0">Student Id</p>
</div>
<hr />

<div className="student3">
<FaIdCardClip  className='user'/>
<p className="info m-0">Employee Id</p>
</div>
<hr />

<div className="student3">
<FaBookReader  className='user'/>
<p className="info m-0">Create Staff</p>
</div>
<hr />

<div className="student3">
<FaBookReader  className='user'/>
<p className="info m-0">Course Fees</p>
</div>
<hr />

<div className="student3">
<FaBookReader  className='user'/>
<p className="info m-0">Admins</p>
</div>
<hr />


</div>

<div className="student2">
<MdLogout  className='user'/>
<p className="info m-0">Logout</p>
</div>
<hr />
</div> 
 
    </>
  )
}

export default Sidenavbar