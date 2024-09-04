import React, { useState } from 'react'
import "./Navbar.css"
import { FaBars } from "react-icons/fa6";
import Form from 'react-bootstrap/Form';
import { LuMail } from "react-icons/lu";
import { MdOutlineCropFree } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {

    const [profileDrop,setProfileDrop]=useState(false)

  return (
    <>

<div className="navbar">

<div className="bars"><FaBars  className='bars'/></div>

<div className="section2">

<Form.Control type="text" placeholder="search..."  className='select2'/>
<LuMail className='ic' />
<MdOutlineCropFree className='ic'/>


<div className="ab" onClick={()=>{
    setProfileDrop(!profileDrop)
}}>A</div>
<div id="pro" className={profileDrop?"profileDropOpen":""}>
    <p>Profile</p>
    <p className='mt-1 mb-1'>Logout</p>
</div>

</div>


</div>



    </>
  )
}

export default Navbar