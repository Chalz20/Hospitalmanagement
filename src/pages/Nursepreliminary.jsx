import React from 'react'
import Form from "react-bootstrap/Form";

import { useParams } from "react-router";
import {FaUserCheck,FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom';
//import './account.css'

const Nursepreliminary = () => {
  return (
    <div className='container'>
        <div className='row m-auto'>
        <h3 className="text-muted ">Patient Details.</h3><hr></hr>
                <div className="col-sm-3">
                         <p className="mb-0 text-muted">Patient Type.:</p>
                            <Form.Group controlId="gender">
                                <Form.Select>
                                   <option className="text-muted">Select ..</option>
                                   <option value={"no1"}>In-patients</option>
                                   <option value={"no2"}>Out-Patients </option>
                                </Form.Select>
                            </Form.Group>
                        </div>  
                        <div className="col-sm-3">
                        <p className="mb-0 text-muted">Patients Number:</p>
                        <Form.Group controlId="firstname">
                           <Form.Control type="text" placeholder="" disabled/>
                        </Form.Group>
                      </div>
                        <div className="col-sm-3 ">
                    <p className="mb-0 text-muted">Patients Search:</p>
                    <Form.Group controlId="firstname" className="newpatient__search">
                    <input type="text" placeholder='Search here...' />
                        <i className='bx bx-search'></i>
                    </Form.Group>
                    </div>
                    <div className="col-sm-3">
                         <p className="mb-0 text-muted">Doctor.:</p>
                            <Form.Group controlId="gender">
                                <Form.Select>
                                   
                                   <option value={"no1"}>ALL</option>
                                 
                                </Form.Select>
                            </Form.Group>
                        </div>  

        </div>

        
      <div className='container'>
        <div className=' d-flex mt-4  justify-content-start'>
        <button className="btn btn-primary mx-2">New Patient(2)</button> 
        <button className="btn btn-primary mx-2">Nurse Seen(0)</button> 
        <button className="btn btn-primary mx-4">Doctor Seen(0)</button> 
        <button className="btn btn-primary mr-4">Visit Complete(0)</button> 
        </div>
      
      </div>


      <div className='container'>
        <div className='row m-auto mt-4'>
        <table className="table">
            <thead>
            <tr>
             
            <th>S/N</th>
            <th>Visit No.</th>
            <th>Date & Time</th>
            <th>Department/Clinic</th>
            <th>Reg No.</th>
            <th>Patient Name</th>
            <th>Age</th>
            <th>Status</th>
            <th>Visit Complete Date time</th>
            <th>Remarks</th>
            <th>Acknowledge</th>
           
          </tr>
            </thead>
          
         <tbody>
         <tr>
           
            <td>1</td>
            <td>111</td>
            <td>17/08/2022</td>
            <td>GENERAL OPD</td>
            <td>116</td>
            <td>Mr.Ally</td>
            <td>23Y/M</td>
            <td>Billed</td>
            <td></td>
            <td></td>
           
            <td><Link to='/nurse/preliminary/vitals' className='text-decoration-none link-dark'>Acknowledge</Link></td>
          
            
   
          </tr>
        

         
         </tbody>
        
         

        </table>

        </div>

      </div>


    </div>
  )
}

export default Nursepreliminary
