import React from 'react'
import Form from "react-bootstrap/Form";

import { useParams } from "react-router";
import {FaUserCheck,FaSearch} from 'react-icons/fa'
import './account.css'

const Account = () => {
  return (
    <div className='container'>
        <div className='row m-auto'>
        <h3 className="text-muted ">Patient Details.</h3><hr></hr>
                <div className="col-sm-3">
                         <p className="mb-0 text-muted">Registration No.:</p>
                            <Form.Group controlId="gender">
                                <Form.Select>
                                   <option className="text-muted">Choose Reg.No ..</option>
                                   <option value={"no1"}>100</option>
                                   <option value={"no2"}>102 </option>
                                </Form.Select>
                            </Form.Group>
                        </div>  
                        <div className="col-sm-3">
                        <p className="mb-0 text-muted">Registration Number:</p>
                        <Form.Group controlId="firstname">
                           <Form.Control type="text" placeholder="" disabled/>
                        </Form.Group>
                      </div>
                        <div className="col-sm-3 ">
                    <p className="mb-0 text-muted">Registration Search:</p>
                    <Form.Group controlId="firstname" className="newpatient__search">
                    <input type="text" placeholder='Search here...' />
                        <i className='bx bx-search'></i>
                    </Form.Group>
                    </div>
                    <div className="col-sm-3">
                         <p className="mb-0 text-muted">Visit No.:</p>
                            <Form.Group controlId="gender">
                                <Form.Select>
                                   
                                   <option value={"no1"}>200 Radiology</option>
                                 
                                </Form.Select>
                            </Form.Group>
                        </div>  

        </div>

        
      <div className='container'>
        <div className=' d-flex mt-4  justify-content-between'>
        <p className="mb-0 text-muted">PHARAJ ALLY:</p>
        <p className="mb-0 text-muted"><b>Payer:</b>PRIVATE CASH,<b>Sponsor:</b>PRIVATE CASH</p>
        
        </div>
        <div className=' d-flex mt-2 justify-content-between'>
        <p className="mb-0 text-muted">Male,30 Years, <b>Mobile No.</b>:0745864320</p>
        <div className="col-sm-3">
    
        <Form.Group controlId="firstname">
                <Form.Control type="text" placeholder="Referral"/>
            </Form.Group>
       </div>  
        </div>
      </div>


      <div className='container'>
        <div className='row m-auto mt-4'>
        <table className="table">
            <thead>
            <tr>
             <th> <input type="checkbox" id="services" name="services" value="services"/></th>
            <th>ServiceName</th>
            <th>Doctor</th>
            <th>Amount</th>
            <th>Discount</th>
            <th>Unit</th>
            <th>New Amount</th>
            <th>Co-pay</th>
            <th>Company Amount</th>
            <th>Patient Amt</th>
            <th>Recieve Amount</th>
            <th>Status</th>
          </tr>
            </thead>
          
         <tbody>
         <tr>
          <td><input type="checkbox" id="services" name="services" value="services"/></td> 
            <td>CONSULTATION</td>
            <td>GENERAL OPD</td>
            <td>10000</td>
            <td>0.00</td>
            <td>1</td>
            <td>10000</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>10000</td>
            <td>10000</td>
            <td>PAID</td>
          </tr>
          <tr>
          <td><input type="checkbox" id="services" name="services" value="services"/></td> 
            <td>FOLDER CHARGES</td>
            <td></td>
            <td>5000</td>
            <td>0.00</td>
            <td>1</td>
            <td>5000</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>5000</td>
            <td>5000</td>
            <td>PAID</td>
          </tr>

          <tr>
          <td></td> 
            <td></td>
            <td>Total</td>
            <td>15000</td>
            <td>0.00</td>
            <td>2</td>
            <td>15000</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>15000</td>
            <td>15000</td>
            <td></td>
          </tr>
         </tbody>
        
         

        </table>

        </div>

      </div>


      <div className='container'>
        <div className='row mt-5'>
            <div className='col-sm-3'>
            <Form.Group>
            <label>Total Amt.</label>  <Form.Control type="text" placeholder='15000' disabled/>
            </Form.Group>
            </div>

            <div className='col-sm-3'>
            <Form.Group>
            <label>Patient Payable.</label>  <Form.Control type="text" placeholder='15000' />
            </Form.Group>
            </div>
            <div className='col-sm-3'>
            <Form.Group>
            <label>Received Amt.</label>  <Form.Control type="text" placeholder='15000' />
            </Form.Group>
            </div>
        </div>
        <div className="row m-auto mt-3 ">
            <div className="col-lg-4">
                <button className="btn btn-primary mr-4"><span className="p-1">< FaUserCheck/></span>Confirm Payment</button>  
                                        
            </div> 
                        
         </div>
      </div>
    </div>
  )
}

export default Account
