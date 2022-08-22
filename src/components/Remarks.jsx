import React from 'react';
import Form from "react-bootstrap/Form";

const Remarks = () => {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>
                   <h5 className='text-muted'>Patient Type:</h5>
                   <Form.Select aria-label="Patient type">
                     <option>--Patient type--</option>
                     <option value="1">Outpatient</option>
                     <option value="2">In-patient</option>
                   </Form.Select>
                </div>

                <div className='col-lg-8'>
                   <h5 className='text-muted'>Others:</h5>
                   <Form.Select aria-label="Patient type">
                     <option>----</option>
                     <option value="1">Outpatient</option>
                     <option value="2">In-patient</option>
                   </Form.Select>
                </div>

            </div>


            <div className='row mt-4'>
                <div className='col-lg-12'>
                <h5 className='text-muted'>Remarks:</h5>
                  <Form.Group controlId="firstname">
                      <Form.Control as="textarea" rows={3} placeholder="Explain here..."/>
                   </Form.Group>
                </div>

            </div>

        </div>
     );
}
 
export default Remarks;