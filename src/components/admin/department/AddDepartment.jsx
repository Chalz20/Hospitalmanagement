import * as React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import {FaUserCheck} from 'react-icons/fa'
import { Link } from "react-router-dom";

const AddDepartment = () => {
   const [depname,setDepname]=useState("")
   const [depcategory,setDepcategory]=useState("")
   const [depdescription,setDepdescription]=useState("")
  
 

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
      const department = {depname,depcategory,depdescription}
      console.log(department)
      //post(URL,employee)
     }
    return (
        <div className="m-3 bg-light shadow p-3">
        <div className="container">
        <div className="row m-auto">
        <div className="col-lg-4 mb-4">
           <p className="mb-0 text-muted">Department Name:</p>
           <Form.Group controlId="departmentname">
              <Form.Control type="text" placeholder="Enter Department name" value={depname} 
              onChange={(e)=>(setDepname(e.target.value))}/>
           </Form.Group>
         </div>
         <div className="col-lg-4 mb-4">
           <p className="mb-0 text-muted">Department Category:</p>
           <Form.Group controlId="Category">
              <Form.Control type="text" placeholder="Enter Category" value={depcategory}
              onChange={(e)=>(setDepcategory(e.target.value))}/>
           </Form.Group>
         </div>
         <div className="col-lg-4 mb-4">
           <p className="mb-0 text-muted">Department Description:</p>
           <Form.Group controlId="Description">
              <Form.Control type="text" placeholder="Enter Description" value={depdescription}
              onChange={(e)=>(setDepdescription(e.target.value))}
              />
           </Form.Group>
         </div>
        
                     
    
         </div>
    
         <div className="row m-auto mt-3 ">
            <div className="col-lg-4">  
            <button className="btn btn-primary mr-4" onClick={handleSubmit}><span className="p-1">< FaUserCheck/></span>Add Department</button> 
            
              
                                      
            </div> 
            
        </div>
         </div>
         </div>
      )
}

export default AddDepartment
