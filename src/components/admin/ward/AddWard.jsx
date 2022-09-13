import React from 'react'
import { useState } from "react";
import Form from "react-bootstrap/Form";
import {FaUserCheck} from 'react-icons/fa'
import { Link } from "react-router-dom";

const AddWard = () => {

   const [wardName,setWardName]=useState("")
   const [wardNo,setWardNo]=useState("")
   const [wardCategory,setWardCategory]=useState("")
   const [capacity,setCapacity]=useState("")
   const [location,setLocation]=useState("")
  
 

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
      const ward = {wardName,wardNo,wardCategory,capacity,location}
      console.log(ward)
      //post(URL,employee)
     }

  return (
    <div className="m-3 bg-light shadow p-3">
    <div className="container">
    <div className="row m-auto">
    <div className="col-lg-4 mb-4">
       <p className="mb-0 text-muted">Ward Name:</p>
       <Form.Group controlId="wardname">
          <Form.Control type="text" placeholder="Enter Ward name" value={wardName} onChange={(e)=>(setWardName(e.target.value))}/>
       </Form.Group>
     </div>
     <div className="col-lg-4 mb-4">
       <p className="mb-0 text-muted">Ward Number:</p>
       <Form.Group controlId="ward number">
          <Form.Control type="text" placeholder="Enter ward number" value={wardNo} onChange={(e)=>(setWardNo(e.target.value))}/>
       </Form.Group>
     </div>
     <div className="col-lg-4 mb-1">
        <p className="mb-0 text-muted">Ward Categorty:</p>
        <Form.Group controlId="ward">
        <Form.Select value={wardCategory} onChange={(e)=>(setWardCategory(e.target.value))}>
        <option className="text-muted">Choose Categorty ..</option>
        <option value={"male"}>Radiology</option>
        <option value={"female"}>Neurology</option>
        </Form.Select>
        </Form.Group>
      </div> 
      
      <div className="col-lg-4 mb-4">
       <p className="mb-0 text-muted">Bed Capacity:</p>
       <Form.Group controlId="location">
          <Form.Control type="number" placeholder="Enter capacity" value={capacity} onChange={(e)=>(setCapacity(e.target.value))}/>
       </Form.Group>
     </div>
     <div className="col-lg-4 mb-4">
       <p className="mb-0 text-muted">Location:</p>
       <Form.Group controlId="location">
          <Form.Control type="text" placeholder="Enter Location" value={location} onChange={(e)=>(setLocation(e.target.value))}/>
       </Form.Group>
     </div>

     <div className="col-lg-4 mb-4">
      
     </div>
                

     </div>

     <div className="row m-auto mt-3 ">
        <div className="col-lg-4">
        <Link to=''>
        <button className="btn btn-primary mr-4" onClick={handleSubmit}><span className="p-1">< FaUserCheck/></span>Add Ward</button> 
        </Link>
          
                                  
        </div> 
        
    </div>
     </div>
     </div>
  )
}

export default AddWard
