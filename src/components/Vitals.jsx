import React from 'react';
import Form from "react-bootstrap/Form";

const Vitals = () => {
    return ( 
        <div className='container px-5'>
            <div className='row'>
                <div className='col-lg-5'>
                    <h5 className='text-muted'>Blood Pressure:</h5>
                  <Form.Group controlId="firstname">
                      <Form.Control type='number' placeholder="...mm/Hg"/>
                   </Form.Group>
                </div>
            </div>

            <div className='row mt-4'>
                <div className='col-lg-5'>
                    <h5 className='text-muted'>Pulse/Heartrate:</h5>
                  <Form.Group controlId="firstname">
                      <Form.Control type='number' placeholder="...beats/min"/>
                   </Form.Group>
                </div>
            </div>

            <div className='row mt-4'>
                <div className='col-lg-5'>
                    <h5 className='text-muted'>Temperature:</h5>
                  <Form.Group controlId="firstname">
                      <Form.Control type='number' placeholder="...degree Celcius"/>
                   </Form.Group>
                </div>
            </div>

            <div className='row mt-4'>
                <div className='col-lg-5'>
                    <h5 className='text-muted'>Blood Oxygen Saturation:</h5>
                  <Form.Group controlId="firstname">
                      <Form.Control type='number' placeholder="... %"/>
                   </Form.Group>
                </div>
            </div>

            <div className='row mt-4 mb-3'>
                <div className='col-lg-5'>
                    <h5 className='text-muted'>Respiratory rate:</h5>
                  <Form.Group controlId="firstname">
                      <Form.Control type='number' placeholder="...breaths/min"/>
                   </Form.Group>
                </div>
            </div>

        </div>
     );
}
 
export default Vitals;