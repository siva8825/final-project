import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Dashboard from './dashboard/Dashboard'
import AddStudent from './addstudent/AddStudent';
import AddEmployee from './addemployee/AddEmployee';
import StudentList from './studentlists/StudentList';
import UpdateStudent from './updatestudentlist/UpdateStudent';
import EmployeeList from './employeelist/EmployeeList';
import AddAttendance from './addattendance/AddAttendance';
import AttendanceList from './attendancelist/AttendanceList';
import AddCustomer from './addcustomer/AddCustomer';
import CustomerList from './customerlist/CustomerList';
import AddVendor from './addvendor/AddVendor';
import VendorList from './vendorlist/VendorList';
import AddInterview from './addinterview/AddInterview';
import InterviewList from './interviewlist/InterviewList';
import AddLeads from './addleads/AddLeads';
import LeadsList from './leadslist/LeadsList';
import UpdateEmployee from './updateEmployee/UpdateEmployee';
import UpdateAttendance from './updateAttendance/UpdateAttendance';
import UpdateCustomer from './updateCustomer/UpdateCustomer';
import UpdateVendor from './updateVendor/UpdateVendor';
import UpdateInterview from './updateInterview/UpdateInterview';
import UpdateLeads from './updateLeads/UpdateLeads';
import Login from './login/Login';
import Register from './register/Register';
import ManageReports from './reports/ManageReports';
import Gst from './receipt/Gst';
import NonGst from './reacipt2/NonGst';
import StudentCashin from './studentCashin/StudentCashin';
import CustomerCashin from './customerCashin/CustomerCashin';
import StucashinList from './stucashinlist/StucashinList';
import UpdatestuCashin from './updatestucashin/UpdatestuCashin';
import CustcashinList from './custcashinlist/CustcashinList';
import UpdateCusCashin from './updatecuscashin/UpdateCusCashin';
import CashOut from './cashout/CashOut';
import SetInvoice from './setinvoiceno/SetInvoice';


function App() {
  return (
  <>

<Routes>
<Route path='/' element={<Login/>}/>
<Route path='register' element={<Register/>}/>
<Route path='dashboard' element={<Dashboard/>}/>
<Route path="addstudent" element={<AddStudent/>}/>
<Route path='addemployee' element={<AddEmployee/>}/>
<Route path='studentlists' element={<StudentList/>}/>
<Route path='updatestudent/:id' element={<UpdateStudent/>}/>
<Route path='employeelist' element={<EmployeeList/>}/>
<Route path='addattendance' element={<AddAttendance/>}/>
<Route path='attendancelist' element={<AttendanceList/>}/>
<Route path='addcustomer' element={<AddCustomer/>}/>
<Route path='customerlist' element={<CustomerList/>}/>
<Route path='addvendor' element={<AddVendor/>}/>
<Route path='vendorlist' element={<VendorList/>}/>
<Route path='addinterview' element={<AddInterview/>}/>
<Route path='interviewlist' element={<InterviewList/>}/>
<Route path='addleads' element={<AddLeads/>}/>
<Route path='leadslist' element={<LeadsList/>}/>
<Route path='updateemployee/:id' element={<UpdateEmployee/>}/>
<Route path='updateattendance/:id' element={<UpdateAttendance/>}/>
<Route path='updatecustomer/:id' element={<UpdateCustomer/>}/>
<Route path='updatevendor/:id' element={<UpdateVendor/>}/>
<Route path='updateinterview/:id' element={<UpdateInterview/>}/>
<Route path='updateleads/:id' element={<UpdateLeads/>}/>
<Route path='reports' element={<ManageReports/>}/>
<Route path='billing' element={<Gst/>}/>
<Route path='billing2' element={<NonGst/>}/>
<Route path='studentcashin' element={<StudentCashin/>}/>
<Route path='customercashin' element={<CustomerCashin/>}/>
<Route path='stucashinlist' element={<StucashinList/>}/>
<Route path='updatestucashin/:id' element={<UpdatestuCashin/>}/>
<Route path='custcashinlist' element={<CustcashinList/>}/>
<Route path='updatecuscashin/:id' element={<UpdateCusCashin/>}/>
<Route path='cashout' element={<CashOut/>}/>
<Route path='setinvoiceno' element={<SetInvoice/>}/>

</Routes>

  </>
  );
}

export default App;
