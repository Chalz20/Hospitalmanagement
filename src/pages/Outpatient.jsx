<<<<<<< HEAD
import React from 'react'
import { Link} from 'react-router-dom'
import {FaUserPlus,FaUserCheck,FaUserTimes} from 'react-icons/fa'
import { Form } from 'react-bootstrap'
import { MdOutlineAddBox } from "react-icons/md";
import { AiOutlineClose,AiOutlineCheck } from "react-icons/ai";

const Outpatient = () => {
  return (
    <div className='container'>
      

    <div className="m-3 bg-light shadow p-3">
       <div className="header mx-2">
          <h5 className="text-muted ">Out-Patients Visit</h5><hr></hr>
       </div>

       <div className="body">
         <div className='container  '>
           <div className='float-end'>
            <Link to=''>
            <button className="btn btn-primary mx-2"><span className="p-1"><FaUserCheck/></span>Save</button>   
            </Link>
            <Link>
            <button className="btn btn-danger  "><span className="p-1"><FaUserTimes/></span>Cancel</button>    
            </Link>
          </div>
          <p>Add Patients Visit</p>
         </div>
          
        
        <div className='container'>
            <div className='row mt-5'>
            <div className="col-sm-3">
                         <p className="mb-0 text-muted">Visit Type:</p>
                            <Form.Group controlId="gender">
                                <Form.Select>
                                   <option className="text-muted">Select ..</option>
                                   <option value={"no1"}>General visit</option>
                                   <option value={"no2"}>Mental Health</option>
                                   <option value={"no3"}>Day Surgery Visit</option>
                                   <option value={"no4"}>102 </option>
                                </Form.Select>
                            </Form.Group>
                        </div>  
                        <div className="col-sm-3">
                        <p className="mb-0 text-muted">Description:</p>
                        <Form.Group controlId="firstname">
                           <Form.Control type="text" placeholder=""/>
                        </Form.Group>
                      </div>
                      <div className="col-sm-3">
                         <p className="mb-0 text-muted">Clinic/Department:</p>
                            <Form.Group controlId="gender">
                                <Form.Select>
                                   <option className="text-muted">Select ..</option>
                                   <option value={"no1"}>GENERAL OPD</option>
                                  
                                </Form.Select>
                            </Form.Group>
                        </div>  
                        <div className="col-sm-3">
                         <p className="mb-0 text-muted">Doctor/Nurse:</p>
                            <Form.Group controlId="gender">
                                <Form.Select>
                                   <option className="text-muted">Select ..</option>
                                   <option value={"no1"}>Dr.PHARAJ</option>
                                   <option value={"no2"}>Dr. ALLY</option>
                                   <option value={"no3"}>Mr.AUGUSTINE</option>
                                   <option value={"no4"}>Miss. REGINA </option>
                                </Form.Select>
                            </Form.Group>
                        </div>  

                        <div className='container'>
                            <div className='row mt-3 mb-0'>
                                <p className='text-muted'><h5>Today's Visit</h5></p>
                             
                            </div>
                            <div className='row m-auto mt-2'>
                            <table className="table">
                                <thead>
                                <tr>
                                <th> S/N</th>
                                <th>Visit No.</th>
                                <th>Patient Name</th>
                                <th>Clinic/Department</th>
                                <th>Doctor/Nurse Name</th>
                                <th>Status</th>
                            </tr>
                                </thead>
                            
                            <tbody>
                            <tr>                      
                                <td>1</td>
                                <td>121</td>
                                <td>8/16//2022</td>
                                <td>GENERAL OPD</td>
                                <td>Dr. PHARAJ</td>
                                <td><AiOutlineClose/></td>
                            </tr>
                           
                           
                            </tbody>
                    
                            </table>

                            </div>
                           
                            <div className='row mt-2 mb-3'>
                                <p  className='text-muted'><h5><MdOutlineAddBox/>Previous Visits</h5></p>

                            </div>
                            <div className='row m-auto mt-2'>
                            <table className="table">
                                <thead>
                                <tr>
                                <th> S/N</th>
                                <th>Visit No.</th>
                                <th>Patient Name</th>
                                <th>Clinic/Department</th>
                                <th>Doctor/Nurse Name</th>
                                <th>Status</th>
                            </tr>
                                </thead>
                            
                            <tbody>
                            <tr>                      
                                <td>1</td>
                                <td>119</td>
                                <td>7/16//2022</td>
                                <td>GENERAL OPD</td>
                                <td>Dr. PHARAJ</td>
                                <td><AiOutlineCheck/></td>
                            </tr>
                            <tr>                      
                                <td>2</td>
                                <td>120</td>
                                <td>7/16//2022</td>
                                <td>GENERAL OPD</td>
                                <td>Dr. PHARAJ</td>
                                <td><AiOutlineCheck/></td>
                            </tr>
                            
                           
                           
                            </tbody>
                    
                            </table>

                            </div>
                            <hr/>
                        </div>
            </div>


        </div>
         
          
           
       </div>
    </div>
 </div>  
  )
}

=======
import React from 'react'
import { Link} from 'react-router-dom'
import {FaUserPlus,FaUserCheck,FaUserTimes} from 'react-icons/fa'
import { Form } from 'react-bootstrap'
import { MdOutlineAddBox } from "react-icons/md";
import { AiOutlineClose,AiOutlineCheck } from "react-icons/ai";

const Outpatient = () => {
  return (
    <div className='container'>
      

    <div className="m-3 bg-light shadow p-3">
       <div className="header mx-2">
          <h5 className="text-muted ">Out-Patients Visit</h5><hr></hr>
       </div>

       <div className="body">
         <div className='container  '>
           <div className='float-end'>
            <Link to=''>
            <button className="btn btn-primary mx-2"><span className="p-1"><FaUserCheck/></span>Save</button>   
            </Link>
            <Link>
            <button className="btn btn-danger  "><span className="p-1"><FaUserTimes/></span>Cancel</button>    
            </Link>
          </div>
          <p>Add Patients Visit</p>
         </div>
          
        
        <div className='container'>
            <div className='row mt-5'>
            <div className="col-sm-3">
                         <p className="mb-0 text-muted">Visit Type:</p>
                            <Form.Group controlId="gender">
                                <Form.Select>
                                   <option className="text-muted">Select ..</option>
                                   <option value={"no1"}>General visit</option>
                                   <option value={"no2"}>Mental Health</option>
                                   <option value={"no3"}>Day Surgery Visit</option>
                                   <option value={"no4"}>102 </option>
                                </Form.Select>
                            </Form.Group>
                        </div>  
                        <div className="col-sm-3">
                        <p className="mb-0 text-muted">Description:</p>
                        <Form.Group controlId="firstname">
                           <Form.Control type="text" placeholder=""/>
                        </Form.Group>
                      </div>
                      <div className="col-sm-3">
                         <p className="mb-0 text-muted">Clinic/Department:</p>
                            <Form.Group controlId="gender">
                                <Form.Select>
                                   <option className="text-muted">Select ..</option>
                                   <option value={"no1"}>GENERAL OPD</option>
                                  
                                </Form.Select>
                            </Form.Group>
                        </div>  
                        <div className="col-sm-3">
                         <p className="mb-0 text-muted">Doctor/Nurse:</p>
                            <Form.Group controlId="gender">
                                <Form.Select>
                                   <option className="text-muted">Select ..</option>
                                   <option value={"no1"}>Dr.PHARAJ</option>
                                   <option value={"no2"}>Dr. ALLY</option>
                                   <option value={"no3"}>Mr.AUGUSTINE</option>
                                   <option value={"no4"}>Miss. REGINA </option>
                                </Form.Select>
                            </Form.Group>
                        </div>  

                        <div className='container'>
                            <div className='row mt-3 mb-0'>
                                <p className='text-muted'><h5>Today's Visit</h5></p>
                             
                            </div>
                            <div className='row m-auto mt-2'>
                            <table className="table">
                                <thead>
                                <tr>
                                <th> S/N</th>
                                <th>Visit No.</th>
                                <th>Patient Name</th>
                                <th>Clinic/Department</th>
                                <th>Doctor/Nurse Name</th>
                                <th>Status</th>
                            </tr>
                                </thead>
                            
                            <tbody>
                            <tr>                      
                                <td>1</td>
                                <td>121</td>
                                <td>8/16//2022</td>
                                <td>GENERAL OPD</td>
                                <td>Dr. PHARAJ</td>
                                <td><AiOutlineClose/></td>
                            </tr>
                           
                           
                            </tbody>
                    
                            </table>

                            </div>
                           
                            <div className='row mt-2 mb-3'>
                                <p  className='text-muted'><h5><MdOutlineAddBox/>Previous Visits</h5></p>

                            </div>
                            <div className='row m-auto mt-2'>
                            <table className="table">
                                <thead>
                                <tr>
                                <th> S/N</th>
                                <th>Visit No.</th>
                                <th>Patient Name</th>
                                <th>Clinic/Department</th>
                                <th>Doctor/Nurse Name</th>
                                <th>Status</th>
                            </tr>
                                </thead>
                            
                            <tbody>
                            <tr>                      
                                <td>1</td>
                                <td>119</td>
                                <td>7/16//2022</td>
                                <td>GENERAL OPD</td>
                                <td>Dr. PHARAJ</td>
                                <td><AiOutlineCheck/></td>
                            </tr>
                            <tr>                      
                                <td>2</td>
                                <td>120</td>
                                <td>7/16//2022</td>
                                <td>GENERAL OPD</td>
                                <td>Dr. PHARAJ</td>
                                <td><AiOutlineCheck/></td>
                            </tr>
                            
                           
                           
                            </tbody>
                    
                            </table>

                            </div>
                            <hr/>
                        </div>
            </div>


        </div>
         
          
           
       </div>
    </div>
 </div>  
  )
}

>>>>>>> 016681bbe142406d38a7f64615dc7b665df59305
export default Outpatient