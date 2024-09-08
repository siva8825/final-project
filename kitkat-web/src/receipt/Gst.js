import React, { useState, useRef, useEffect } from 'react'
import Sidenavbar from '../sidenavbar/Sidenavbar'
import {Container,Row,Col} from 'react-bootstrap'
import Navbar from '../navbar/Navbar'
import kitkatlogo from '../images/kitkat logo.jpg'
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import './Gst.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import converter from 'number-to-words'
import { useReactToPrint } from 'react-to-print';
const Gst = () => {

    const [subtotal,setSubtotal] = useState()
    const [total,setTotal] = useState("")
    const [igst,setIgst] = useState("0.00.INR")
    const [cgst,setCgst] = useState("0.00.INR")
    const [sgst,setSgst] = useState("0.00.INR")

    const printRef = useRef()
    const numtowords = converter.toWords(Number(total)).toUpperCase()
    const newRow =  {desc:"",qty:"",unitprice:"",price:"0.00"}

    const currentDate = new Date()
    const options = {year:"numeric",month:"2-digit",day:"2-digit"}
  const formattedDate = currentDate.toLocaleDateString("en-GB",options)
    const [data,setData] = useState([])
    
    const [state,setState] = useState("")
    const handleStatechange = (e)=>{
        const getState = data.filter((v,i)=> v.clientname === e.target.value)
        setState(getState[0]?.state)
        console.log(getState);
        
      }
    const [gstcontent,setGstcontent] = useState([{
      desc:"",qty:"",unitprice:"",price:0.00+"INR."
    }])
    console.log(gstcontent);
    const handleAddrow = ()=>{
        setGstcontent([...gstcontent,newRow])
  }
  const handleDeleterow = (index)=>{
    const deleteRow = gstcontent.filter((v,i)=> i !== index)
    setGstcontent([...deleteRow])
  }

  const handleChange = (e,i)=>{
    console.log(i);
       const {value} = e.target
       const newdata = [...gstcontent] || []
       newdata[i][e.target.name] = value
       newdata[i].price = newdata[i].qty*newdata[i].unitprice
       let total = 0;
       newdata.map((v,i)=>(total += v.price))
       const igstcalc = ((total)/100)*18
       const cgstcalc = ((total)/100)*9
       const sgstcalc = ((total)/100)*9
       setCgst(cgstcalc)
       setSgst(sgstcalc)
       setSubtotal(total)
       setTotal(total+igstcalc)
       setGstcontent(newdata)
       setIgst(igstcalc)  
     
   }

 console.log(gstcontent);

 const handlePrint=useReactToPrint({
   content:()=> printRef.current
 }) 


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


<Container fluid className='Add p-2 px-4'>

<Row>
<div className="invoicebox">

<div className="inovice1">
<p className='m-0 inName'>INVOICE</p>
<p className="m-0 insubname">KITKAT SOFTWARE TECHNOLOGIES</p>
<p className="address">No: 70/77 , 1st Floor, Krishna complex,<br />
PN Palayam Coimbatore-641037 <br />
Phone No : 7010816299 , 04224957272.</p>
</div>
<div className="invoice2">
<img src={kitkatlogo} alt="" width={270} />
</div>
</div>

</Row>
<Row>
    <div className="secrow">

<div className="side1">

<p className='m-0 insub'>Invoice To</p>
<Form.Select type="text" placeholder="Select client" className='cont' name='selectclient' onChange={handleStatechange}    >
<option>Select Client</option>
{
    data.map((datas)=>{
        return<option>{datas.clientname}</option>
       
    })

    
}
</Form.Select>
<p>{state}</p>
<p className='insub m-0 mt-3'>GSTIN/UIN</p>
</div>


<div className="side2">

<div className="otherin bg-success text-white"><p className='m-0 insub'>Date</p><p className='m-0 insub'>Invoice No</p><p className='m-0 insub'>GSTIN</p></div>
<div className="otherin2 "><p className='m-0'>{formattedDate}</p> <p className='m-0'>33BIQPA2943B1ZQ</p></div>

</div>

    </div>
</Row>


<Row className='mt-3'>

<div>
        <table className='container-fluid table-bordered border-dark text-center'>
        <thead>
            <tr style={{height:"50px"}} className='bg-success text-white border border-dark'><th>S.NO</th>
            <th>DESCRIPTION</th>
            <th>QTY</th>
            <th>UNIT PRICE(INR)</th>
            <th>PRICE(INR)</th>
            <th>ACTION</th>
            </tr>
         </thead> 
         <tbody id='tab_row'>
          {gstcontent.map((v,i)=>(<tr key={i}>
            <td className='text-center'>{i+1}</td>

            <td className='text-center'><input className='text-center' name="desc" type="text" value={v.desc} onChange={e=> handleChange(e,i)}/></td>

            <td className='text-center'><input className='text-center' name="qty" type="number"  value={v.qty} onChange={e=> handleChange(e,i)} /></td>

            <td className='text-center'><input className='text-center' name="unitprice" type="number" value={v.unitprice} onChange={e=> handleChange(e,i)}/></td>

            <td className='text-center'><input className='text-center' name="price"  type="number" value={v.price} onChange={e=> handleChange(e,i)}  readOnly/></td>

            <td className='text-center'>{ gstcontent.length-1 === i ? <FontAwesomeIcon onClick={handleAddrow} icon={faPlusCircle}/> : <FontAwesomeIcon onClick={()=>handleDeleterow(i)} icon={faTrash}/>}</td>
          </tr>))}
        </tbody>
        <tfoot id='tab_foot'>
          <tr>
          <th></th><th></th><th></th><th className='text-center'>Sub Total</th><td style={{color:"red"}} className='text-center'><input className='text-center' type="number"  style={{color:"red"}} value={subtotal}/></td></tr>
          {state === "Tamil Nadu" && <tr>
            <th></th><th></th><th></th><th className='text-center'>CGST 9%</th><td style={{color:"red"}} className='text-center'><input className='text-center'  type="number" value={cgst} /></td></tr>}

            {state === "Tamil Nadu" && <tr>
              <th></th><th></th><th></th><th className='text-center'>SGST 9%</th><td style={{color:"red"}} className='text-center'><input className='text-center'  type="number" value={sgst} /></td></tr>}

            { state === "" && 
            <tr>
              <th></th><th></th><th></th><th className='text-center'>IGST</th><td style={{color:"red"}} className='text-center'><input className='text-center'  type="number" value={igst} /></td></tr>
            }
            <tr>
            <th></th><th></th><th></th><th className='text-center' >TOTAL</th><td style={{color:"red"}} className='text-center'>
            <input className='text-center' value={total} type="number" style={{color:"red"}}/></td></tr>
          </tfoot>   
        </table>
       </div>
</Row>

<div><p><strong>Total (In Words) :</strong>{numtowords ? numtowords : "ZERO"}</p></div>
    <div className='container-fluid'>
      <div className='row'>
      <div className='col-md-6'>
        <h2>Bank Account Details</h2>
        <table>
          <tr><th>Name</th><td>:</td><td>Kitkat Software Technologies</td></tr>
          <tr><th>Bank</th><td>:</td><td>Federal Bank</td></tr>
          <tr><th>Account No</th><td>:</td><td>19829200003697</td></tr>
          <tr><th>IFSC Code</th><td>:</td><td>FDRL0001982</td></tr>
          <tr><th>Branch</th><td>:</td><td>FDRL0001982</td></tr>
        </table>
      </div>
      <div className='col-md-6'>
        <span className='float-end'>
          <button className='btn btn-success text-white'>Save</button>&nbsp;&nbsp;
          <button className='btn btn-danger text-white' onClick={handlePrint}>Print</button>
        </span>
      </div>
      </div>
      <h2 className='text-center text-success'>THANK YOU FOR YOU BUSINESS!</h2>
    </div>










</Container>

</Col>
</Row>
</Container>
    
    </>
  )
}

export default Gst