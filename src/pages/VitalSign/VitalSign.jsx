import React from 'react'
import Form from "react-bootstrap/Form";
import './vitalsign.css'
import { Link} from 'react-router-dom'
import {FaUserPlus,FaUserCheck,FaUserTimes} from 'react-icons/fa'

const VitalSign = () => {
  return (
    <div>
      

    <div className="m-3 bg-light shadow p-3">
       <div className="container">
          
          <div className='float-end'>
                <span className='mx-2'>Reg No.: <b>100</b></span>
                <span className='mx-2'>Name:<b>PHARAJ</b></span>
                <span className='mx-2'>Age/Gender:<b>23Y/M</b></span>
        </div>
        <h5 className="text-muted ">Patients Visit</h5>
       </div>
       <div className='d-inline-flex'>
        <p>     
        </p>        
       </div>
       <hr></hr>
       <div className="body">
       <div className='container mb-4 '>
           <div className='float-end'>
            <Link to=''>
            <button className="btn btn-primary mx-2"><span className="p-1"><FaUserCheck/></span>Save</button>   
            </Link>
            <Link>
            <button className="btn btn-danger  "><span className="p-1"><FaUserTimes/></span>Cancel</button>    
            </Link>
          </div>
          <h5>Vital Sign</h5>
         </div>
         <hr />
         <div className='container'>
            <div className='row mb-5'>
            <div className="col-sm-4">
            <p className="mb-0 text-muted">Systolic B.P:</p>
            <Form.Group controlId="firstname">
                <Form.Control type="text" placeholder=""/>
            </Form.Group>
            </div>
            <div className="col-sm-4">
            <p className="mb-0 text-muted">Diastolic B.P:</p>
            <Form.Group controlId="firstname">
                <Form.Control type="text" placeholder=""/>
            </Form.Group>
            </div>
            <div className="col-sm-4">
            <p className="mb-0 text-muted">Temperature(0C)</p>
            <Form.Group controlId="firstname">
                <Form.Control type="text" placeholder=""/>
            </Form.Group>
            </div>

            <div className="col-sm-4">
            <p className="mb-0 text-muted">Weight(Kg)</p>
            <Form.Group controlId="firstname">
                <Form.Control type="text" placeholder=""/>
            </Form.Group>
            </div>

            <div className="col-sm-4">
            <p className="mb-0 text-muted">Height(cm)</p>
            <Form.Group controlId="firstname">
                <Form.Control type="text" placeholder=""/>
            </Form.Group>
            </div>
            <div className="col-sm-4">
            <p className="mb-0 text-muted">BMI(kg/m2)</p>
            <Form.Group controlId="firstname">
                <Form.Control type="text" placeholder=""/>
            </Form.Group>
            </div>

            <div className="col-sm-4">
            <p className="mb-0 text-muted">Respiratory Rate(/Min)</p>
            <Form.Group controlId="firstname">
                <Form.Control type="text" placeholder=""/>
            </Form.Group>
            </div>

            <div className="col-sm-4">
            <p className="mb-0 text-muted">Heart Rate(BPM)</p>
            <Form.Group controlId="firstname">
                <Form.Control type="text" placeholder=""/>
            </Form.Group>
            </div>

            <div className="col-sm-4">
            <p className="mb-0 text-muted">Urine Output:</p>
            <Form.Group controlId="firstname">
                <Form.Control type="text" placeholder=""/>
            </Form.Group>
            </div>

            <div className="col-sm-4">
            <p className="mb-0 text-muted">Blood Sugar(F):</p>
            <Form.Group controlId="firstname">
                <Form.Control type="text" placeholder=""/>
            </Form.Group>
            </div>

            <div className="col-sm-4">
            <p className="mb-0 text-muted">Blood Sugar(R)</p>
            <Form.Group controlId="firstname">
                <Form.Control type="text" placeholder=""/>
            </Form.Group>
            </div>

            <div className="col-sm-4">
            <p className="mb-0 text-muted">SPO2</p>
            <Form.Group controlId="firstname">
                <Form.Control type="text" placeholder=""/>
            </Form.Group>
            </div>

            <div className="col-sm-4">
            <p className="mb-0 text-muted">AVPU:</p>
            <Form.Group controlId="D1">
            <Form.Select>
                <option className="text-muted">Select ..</option>
               
                
            </Form.Select>
        </Form.Group>
            </div>

            <div className="col-sm-4">
            <p className="mb-0 text-muted">Trauma:</p>
            <Form.Group controlId="D1">
            <Form.Select>
                <option className="text-muted">Select ..</option>  
            </Form.Select>
        </Form.Group>
            </div>

            <div className="col-sm-4">
            <p className="mb-0 text-muted">Mobility:</p>
            <Form.Group controlId="D1">
            <Form.Select>
                <option className="text-muted">Select ..</option>
               
                
            </Form.Select>
        </Form.Group>
            </div>
            <div className="col-sm-12">
            <p className="mb-0 text-muted">Comments:</p>
            <Form.Group controlId="firstname">
                <Form.Control type="text" placeholder=""/>
            </Form.Group>
            </div>

            


            </div>
            <div className='row'>
                <h6 className='text-muted'>Current Vitals</h6>
            <table className="table">
            <thead>
            <tr> 
            <th>S/N</th>
            <th>Visit Type.</th>
            <th>Date & Time</th>
            <th>SBP</th>
            <th>DBP</th>
            <th>Temp</th>
            <th>RR</th>
            <th>Urine OP</th>
            <th>BS(F)</th>
            <th>BS(R)</th>
            <th>SPO2</th>
            <th>AVPU</th>
            <th>Trauma</th>
            <th>Mobility</th>
           
          </tr>
            </thead>
          
         <tbody>
         <tr>
           
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
           <td></td>
         
          
            
   
          </tr>
        

         
         </tbody>
        
         

        </table>

            </div>

         </div>
           
       </div>
    </div>
 </div>  
  )
}

export default VitalSign