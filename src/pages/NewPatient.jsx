import React from "react";
import Form from "react-bootstrap/Form";

import {FaUserCheck} from 'react-icons/fa'

const NewPatient =() =>{
    return(
        
            <div className="m-3 bg-light shadow p-3">
               <div className="header mx-2 mb-3">
                  <h3 className="mb-1">New Patient Registration.</h3><hr></hr>
               </div>

               <div className="body">
               
                <Form>
                 <h5 className=" px-1">Basic information</h5>
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
                    </div>
                    
                    <h5 className=" mt-3">Additional information</h5>
                    
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

                    <div className="row m-auto mt-2">
                      <div className="col-lg-4 mb-1">
                         <p className="mb-0 text-muted">Bloodgroup:</p>
                            <Form.Group controlId="gender">
                                <Form.Control type="text" placeholder="bloodgroup"/>
                            </Form.Group>
                        </div>  
                    </div>

                    <div className="row m-auto mt-3 ">
                       <div className="col-lg-8">
                          <button className="btn btn-primary"><span className="p-1">< FaUserCheck/></span>Register Patient</button>                         
                        </div> 
                        
                    </div>
                    </div>
                </Form> 
               
               </div>
            </div>
      
      
    )
}

export default NewPatient;