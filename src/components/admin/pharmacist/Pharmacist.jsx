import * as React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import {FaUserCheck} from 'react-icons/fa'
import { Link } from "react-router-dom";


const URL='https://10.42.0.1:5002'


const Pharmacist = () => {

   const [firstname,setFirstname]=useState("")
   const [midname,setMidname]=useState("")
   const [lastname,setLastname]=useState("")
   const [password,setPassword]=useState("")
   const [email,setEmail]=useState("")
   const [address,setAddress]=useState("")
   const [dept,setDept]=useState("")
   const [phone,setPhone]=useState("")
   const [dob,setDob]=useState("")
   const [ssn,setSsn]=useState("")
   const [qualification,setQualification]=useState("")
   const [gender,setGender]=useState("")

   const post = async (url,data) =>{
      await fetch(url, {
       method: 'POST',
       body: JSON.stringify(data),
       headers: {
         'Content-type': 'application/json;',
       },
       
     })}

     const handleSubmit = (e)=>{
      e.preventDefault()
      const employee = {firstname,midname,lastname,email,password,address,phone,dept,qualification,gender,dob}
      console.log(employee)
      //post(URL,employee)
     }
   
    

  return (
    <div className="m-3 bg-light shadow p-3">
    <div className="container">
    <div className="row m-auto">
    <div className="col-lg-4 mb-4">
       <p className="mb-0 text-muted">First Name:</p>
    
       <Form.Group controlId="firstname">
          <Form.Control type="text" placeholder="Enter firstname" value={firstname} 
             onChange={(e)=>(setFirstname(e.target.value))}/>
       </Form.Group>
     </div>
     <div className="col-lg-4 mb-4">
       <p className="mb-0 text-muted">Middle Name:</p>
       <Form.Group controlId="firstname">
          <Form.Control type="text" placeholder="Enter middlename" value={midname} 
          onChange={(e)=>(setMidname(e.target.value))}/>
       </Form.Group>
     </div>
     <div className="col-lg-4 mb-4">
       <p className="mb-0 text-muted">SurName:</p>
       <Form.Group controlId="firstname">
          <Form.Control type="text" placeholder="Enter lastname" value={lastname} 
          onChange={(e)=>(setLastname(e.target.value))}/>
       </Form.Group>
     </div>
     <div className="col-lg-4 mb-4">
       <p className="mb-0 text-muted">Pharmacist Email:</p>
       <Form.Group controlId="firstname">
          <Form.Control type="email" placeholder="Enter Email" value={email} 
          onChange={(e)=>(setEmail(e.target.value))}/>
       </Form.Group>
     </div>
     <div className="col-lg-4 mb-1">
         <p className="mb-0 text-muted">Gender:</p>
            <Form.Group controlId="gender">
            <Form.Select onChange={(e)=> (setGender(e.target.value))}>
               <option className="text-muted">Choose gender ..</option>
               <option value={"1"}>Male</option>
               <option value={"2"}>Female</option>
            </Form.Select>  
            </Form.Group>
      </div> 
      <div className="col-lg-4 mb-4">
       <p className="mb-0 text-muted">SSN:</p>
       <Form.Group controlId="ssn">
          <Form.Control type="text" placeholder="Enter SSN" value={ssn} 
          onChange={(e)=>(setSsn(e.target.value))}/>
       </Form.Group>
     </div>
     <div className="col-lg-4 mb-4">
       <p className="mb-0 text-muted">Pharmacist Password:</p>
       <Form.Group controlId="firstname">
          <Form.Control type="password" placeholder="Enter Password" value={password} 
          onChange={(e)=>(setPassword(e.target.value))}/>
       </Form.Group>
     </div>

     <div className="col-lg-4 mb-4">
       <p className="mb-0 text-muted">Pharmacist Address:</p>
       <Form.Group controlId="firstname">
          <Form.Control type="text" placeholder="Enter Adress" value={address} 
          onChange={(e)=>(setAddress(e.target.value))}/>
       </Form.Group>
     </div>
     <div className="col-lg-4 mb-4">
       <p className="mb-0 text-muted">Date of Birth:</p>
       <Form.Group controlId="DOB">
          <Form.Control type="date" placeholder="Date of Birth" value={dob} 
          onChange={(e)=>(setDob(e.target.value))}/>
       </Form.Group>
     </div>

     <div className="col-lg-4 mb-4">
       <p className="mb-0 text-muted">Phone Number:</p>
       <Form.Group controlId="firstname">
          <Form.Control type="text" placeholder="Enter phone number" value={phone} 
          onChange={(e)=>(setPhone(e.target.value))}/>
       </Form.Group>
     </div>
     <div className="col-lg-4 mb-1">
      <p className="mb-0 text-muted">Department:</p>
         <Form.Group controlId="gender">
         <Form.Select onChange={(e)=> (setDept(e.target.value))}>
            <option className="text-muted">Choose Department ..</option>
            <option value={"1"}>Radiology</option>
            <option value={"2"}>Neurology</option>
         </Form.Select>  
         </Form.Group>
   </div> 

      <div className="col-lg-4 mb-4">
       <p className="mb-0 text-muted">Pharmacist Profile:</p>
       <Form.Group controlId="pharmacist">
       <Form.Select onChange={(e)=> (setQualification(e.target.value))}>
               <option className="text-muted">Choose profile ..</option>
               <option value={"9"}>Pharmacist</option>
             
            </Form.Select>
       </Form.Group>
     </div>                 

     </div>

     <div className="row m-auto mt-3 ">
        <div className="col-lg-4">
        <Link to=''>
        <button className="btn btn-primary mr-4" onClick={handleSubmit}><span className="p-1">< FaUserCheck/></span>Register Pharmacist</button> 
        </Link>
          
                             
        </div> 
          
    </div>
     </div>
     </div>
  )
}

export default Pharmacist
