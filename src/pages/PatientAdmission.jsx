import React from 'react'
import Form from "react-bootstrap/Form";

import { useParams } from "react-router";
import {FaUserCheck} from 'react-icons/fa'
import './newpatient.css'
import { Link } from "react-router-dom";

const PatientAdmission = () => {
  return (
    <div className="m-3 bg-light shadow p-3">
    <div className="header mx-2 mb-3">
       <h3 className="text-muted ">Admission New Patient.</h3><hr></hr>
    </div>

    <div className="body">
     <Form>
       <div className="container">
          <div className="row m-auto">
          <div className="col-lg-4 mb-4">
             <p className="mb-0 text-muted">Registration Number:</p>
             <Form.Group controlId="firstname">
                <Form.Control type="text" placeholder="112" disabled/>
             </Form.Group>
           </div>
       <div className="col-lg-4 mb-4 ">
       <p className="mb-0 text-muted">Registration Search:</p>
       <Form.Group controlId="firstname" className="newpatient__search">
       <input type="text" placeholder='Search here...' />
           <i className='bx bx-search'></i>
        </Form.Group>
         
         
       </div>
          

          </div>

       </div>

      <h5 className="text-muted px-1">Admission Details</h5>
      <hr/>
      <div className="container">
         <div className="row m-auto">
         <div className="col-lg-4 mb-4">
             <p className="mb-0 text-muted">Admission Date:</p>
             <Form.Group controlId="DoB">
             <Form.Control type="date" placeholder="Date of Birth"/>
             </Form.Group>
           </div>

           <div className="col-lg-4 mb-1">
              <p className="mb-0 text-muted">Ward:</p>
                 <Form.Group controlId="ward">
                     <Form.Select>
                        <option className="text-muted">Choose Ward ..</option>
                        <option value={"male"}>Ward1</option>
                        <option value={"female"}>Ward2</option>
                     </Form.Select>
                 </Form.Group>
             </div>

             <div className="col-lg-4 mb-1">
              <p className="mb-0 text-muted">Visit Type:</p>
                 <Form.Group controlId="type">
                     <Form.Select>
                        <option className="text-muted">Admission Visit ..</option>
                        <option value={"male"}>Unknown</option>
                        <option value={"female"}>Unknown</option>
                     </Form.Select>
                 </Form.Group>
             </div>
         </div>
     
         <div className="row m-auto mt-2">
         <div className="col-lg-4 mb-1">
              <p className="mb-0 text-muted">Bed Category:</p>
                 <Form.Group controlId="floor">
                     <Form.Select>
                        <option className="text-muted">Choose Category ..</option>
                        <option value={"male"}>Hospital (Base)</option>
                        <option value={"female"}>Hospital (Base)</option>
                     </Form.Select>
                 </Form.Group>
             </div>

             <div className="col-lg-4 mb-1">
              <p className="mb-0 text-muted">Bed No:</p>
                 <Form.Group controlId="">
                     <Form.Select>
                        <option className="text-muted">Choose Bed No ..</option>
                        <option value={"male"}>11</option>
                        <option value={"female"}>12</option>
                     </Form.Select>
                 </Form.Group>
             </div>

             <div className="col-lg-4 mb-1">
              <p className="mb-0 text-muted">Clinic/Department:</p>
                 <Form.Group controlId="gender">
                     <Form.Select>
                        <option className="text-muted">Select ..</option>
                        <option value={"male"}></option>
                        <option value={"female"}></option>
                     </Form.Select>
                 </Form.Group>
             </div>   
         </div>

         <div className="row m-auto mt-2">
           <div className="col-lg-4 mb-1">
              <p className="mb-0 text-muted">Admitting Doctor:</p>
                 <Form.Group controlId="gender">
                     <Form.Select>
                        <option className="text-muted">Choose select ..</option>
                        <option value={"male"}>Male</option>
                        <option value={"female"}>Female</option>
                     </Form.Select>
                 </Form.Group>
             </div>  
             
             
            
         </div>
         
         <h5 className="text-muted px-1 mt-3">Payer Information</h5>
         <hr/>
         <div className="row m-auto mt-2">
         <div className="col-lg-4 mb-1">
              <p className="mb-0 text-muted">Payer:</p>
                 <Form.Group controlId="gender">
                     <Form.Select>
                        <option className="text-muted">Choose Payer ..</option>
                        <option value={"cash"}>PRIVATE CASH</option>
                        <option value={"insured"}>PRIVATE/COMPANY INSURED</option>
                        
                     </Form.Select>
                 </Form.Group>
             </div>
         
            
         </div>


       

         <div className="row m-auto mt-3 ">
            <div className="col-lg-4">
             <Link to='/receptiondashboard/outpatients'>
             <button className="btn btn-primary mr-4"><span className="p-1">< FaUserCheck/></span>Admit Patient</button> 
             </Link>
               
                                      
             </div> 
             
         </div>
         </div>
     </Form> 
        
    </div>
 </div>
  )
}

export default PatientAdmission