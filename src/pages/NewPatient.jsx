import React from "react";
import Form from "react-bootstrap/Form";
import './newpatient.css'
import { useParams } from "react-router";
import {FaUserCheck} from 'react-icons/fa'

import { Link } from "react-router-dom";

const NewPatient =() =>{
   const {patients} =useParams();
    
    return(
        
            <div className="m-3 bg-light shadow p-3">
               <div className="header mx-2 mb-3">
                  <h3 className="text-muted ">Patient Registration.</h3><hr></hr>
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
                      <div className="col-lg-4 mb-4">
                        <p className="mb-0 text-muted">Reg Date:</p>
                        <Form.Group controlId="DoB">
                        <Form.Control type="date" placeholder="Date of Birth"/>
                        </Form.Group>
                      </div>

                     </div>

                  </div>

                 <h5 className="text-muted px-1">Personal information</h5>
                 <hr/>
                 <div className="container">
                    <div className="row m-auto">
                      <div className="col-lg-4 mb-1">
                        <p className="mb-0 text-muted">First Name:</p>
                        <Form.Group controlId="firstname">
                           <Form.Control type="text" placeholder="Enter First Name"/>
                        </Form.Group>
                      </div> 

                      <div className="col-lg-4 mb-1">
                        <p className="mb-0 text-muted">Middle Name:</p>
                        <Form.Group controlId="middlename">
                           <Form.Control type="text" placeholder="Enter Middle Name"/>
                        </Form.Group>
                      </div>  

                      <div className="col-lg-4 mb-1">
                        <p className="mb-0 text-muted">Last Name:</p>
                        <Form.Group controlId="lastname">
                           <Form.Control type="text" placeholder="Enter Last Name"/>
                        </Form.Group>
                      </div>   
                    </div>
                
                    <div className="row m-auto mt-2">
                       <div className="col-lg-4 mb-1">
                         <p className="mb-0 text-muted">Phone Number:</p>
                            <Form.Group controlId="phone">
                               <Form.Control type="text" placeholder="Enter mobile number"/>
                            </Form.Group>
                        </div>

                        <div className="col-lg-4 mb-1">
                         <p className="mb-0 text-muted">Date Of Birth:</p>
                            <Form.Group controlId="DoB">
                               <Form.Control type="date" placeholder="Date of Birth"/>
                            </Form.Group>
                        </div>

                        <div className="col-lg-4 mb-1">
                         <p className="mb-0 text-muted">Age:</p>
                            <Form.Group controlId="age">
                               <Form.Control type="number" placeholder="Enter your age"/>
                            </Form.Group>
                        </div>   
                    </div>

                    <div className="row m-auto mt-2">
                      <div className="col-lg-4 mb-1">
                         <p className="mb-0 text-muted">Gender:</p>
                            <Form.Group controlId="gender">
                                <Form.Select>
                                   <option className="text-muted">Choose gender ..</option>
                                   <option value={"male"}>Male</option>
                                   <option value={"female"}>Female</option>
                                </Form.Select>
                            </Form.Group>
                        </div>  
                        <div className="col-lg-4 mb-1">
                         <p className="mb-0 text-muted">Citizen:</p>
                            <Form.Group controlId="citizen">
                               <Form.Control type="text" placeholder="Enter Citizen"/>
                            </Form.Group>
                        </div>
                        <div className="col-lg-4 mb-1">
                         <p className="mb-0 text-muted">Religion:</p>
                            <Form.Group controlId="religion">
                                <Form.Select>
                                   <option className="text-muted">Choose Religion ..</option>
                                   <option value={"christrian"}>Christian</option>
                                   <option value={"muslim"}>Muslim</option>
                                   <option value={" nonreligion"}> Nonreligion</option>
                                </Form.Select>
                            </Form.Group>
                        </div> 
                        <div className="col-lg-4 mb-1">
                         <p className="mb-0 text-muted">Marital Status:</p>
                            <Form.Group controlId="marital">
                                <Form.Select>
                                   <option className="text-muted">Choose Marital ..</option>
                                   <option value={"married"}>Married</option>
                                   <option value={"single"}>Single</option>
                                   <option value={" divorced"}> Divorced</option>
                                   <option value={"widowed"}> Widowed</option>
                                </Form.Select>
                            </Form.Group>
                        </div> 
                    </div>
                    
                    
                    <h5 className="text-muted px-1 mt-3">Additional information</h5>
                    <hr/>
                    <div className="row m-auto">
                       <div className="col-lg-4 mb-1">
                         <p className="mb-0 text-muted">Email:</p>
                            <Form.Group controlId="email">
                               <Form.Control type="email" placeholder="Enter email"/>
                            </Form.Group>
                        </div>

                        <div className="col-lg-4 mb-1">
                          <p className="mb-0 text-muted">Occupation:</p>
                            <Form.Group controlId="occupation">
                               <Form.Control type="text" placeholder="Enter occupation"/>
                            </Form.Group>
                        </div>

                        <div className="col-lg-4 mb-1">
                         <p className="mb-0 text-muted">Region:</p>
                            <Form.Group controlId="region">
                               <Form.Control type="text" placeholder="Enter region"/>
                            </Form.Group>
                        </div>    
                    </div>

                    <div className="row m-auto mt-2">
                       <div className="col-lg-4 mb-1">
                          <p className="mb-0 text-muted">District:</p>
                            <Form.Group controlId="district">
                               <Form.Control type="text" placeholder="Enter district"/>
                            </Form.Group>
                        </div>

                        <div className="col-lg-4 mb-1">
                         <p className="mb-0 text-muted">City/Town:</p>
                            <Form.Group controlId="city">
                               <Form.Control type="text" placeholder="Enter city or town"/>
                            </Form.Group>
                        </div>

                        <div className="col-lg-4 mb-1">
                         <p className="mb-0 text-muted">Street:</p>
                            <Form.Group controlId="street">
                               <Form.Control type="text" placeholder="Enter street"/>
                            </Form.Group>
                        </div>  
                    </div>
                    <h5 className="text-muted px-1 mt-3">Next of Kin</h5>
                    <hr/>
                    <div className="row m-auto mt-2">
                       <div className="col-lg-4 mb-1">
                         <p className="mb-0 text-muted">Next of Kin Name:</p>
                            <Form.Group controlId="phone">
                               <Form.Control type="text" placeholder="Enter Next of Kin Name"/>
                            </Form.Group>
                        </div>

                        <div className="col-lg-4 mb-1">
                         <p className="mb-0 text-muted">Relation:</p>
                            <Form.Group controlId="gender">
                                <Form.Select>
                                   <option className="text-muted">Choose Relation ..</option>
                                   <option value={"sister"}>Sister</option>
                                   <option value={"mother"}>Mother</option>
                                   <option value={" father"}> Father</option>
                                </Form.Select>
                            </Form.Group>
                        </div> 
                        <div className="col-lg-4 mb-1">
                         <p className="mb-0 text-muted">Phone Number:</p>
                            <Form.Group controlId="phone">
                               <Form.Control type="text" placeholder="Enter mobile number"/>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row m-auto mt-2">
                       <div className="col-lg-4 mb-1">
                         <p className="mb-0 text-muted">Adrress:</p>
                            <Form.Group controlId="address">
                               <Form.Control type="text" placeholder="Enter Address"/>
                            </Form.Group>
                        </div>

                        <div className="col-lg-4 mb-1">
                         <p className="mb-0 text-muted">Country:</p>
                            <Form.Group controlId="country">
                               <Form.Control type="text" placeholder="Enter Country"/>
                            </Form.Group>
                        </div>
                        <div className="col-lg-4 mb-1">
                         <p className="mb-0 text-muted">City:</p>
                            <Form.Group controlId="city">
                               <Form.Control type="text" placeholder="Enter City"/>
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
                        <div className="col-lg-4 mb-1">
                         <p className="mb-0 text-muted">Amount:</p>
                            <Form.Group controlId="amount">
                               <Form.Control type="text" placeholder="Display Amount" disabled/>
                            </Form.Group>
                        </div>
                        <div className="col-lg-4 mb-1">
                         <p className="mb-0 text-muted">Status:</p>
                            <Form.Group controlId="status">
                                <Form.Select>
                                   <option className="text-muted">Status..</option>
                                   <option value={"cash"}>Pending</option>
                                   <option value={"insured"}>Paid</option>
                                   
                                </Form.Select>
                            </Form.Group>
                        </div>
                    </div>


                  

                    <div className="row m-auto mt-3 ">
                       <div className="col-lg-4">
                        <Link to='/receptiondashboard/outpatients'>
                        <button className="btn btn-primary mr-4"><span className="p-1">< FaUserCheck/></span>Register Patient</button> 
                        </Link>
                          
                                                 
                        </div> 
                        
                    </div>
                    </div>
                </Form> 
                   
               </div>
            </div>
      
      
    )
}

export default NewPatient;