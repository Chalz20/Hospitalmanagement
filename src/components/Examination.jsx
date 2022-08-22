import React from 'react';
import Form from "react-bootstrap/Form";

const Examination = () => {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                      <h5 className='text-muted'>General Examination Observation:</h5>
                       <Form.Group controlId="firstname">
                           <Form.Control as="textarea" rows={4} placeholder="Explain here..."/>
                        </Form.Group>
                </div>
            </div>

            <div className='row mt-4'>
                <div className='col-lg-12'>
                      <h5 className='text-muted'>Systemic Examination Observation:</h5>
                       <Form.Group controlId="firstname">
                           <Form.Control as="textarea" rows={4} placeholder="Explain here..."/>
                        </Form.Group>
                </div>
            </div>

            <div className='row mt-4 mb-3'>
                <div className='col-lg-12'>
                      <h5 className='text-muted'>Local Examination:</h5>
                       <Form.Group controlId="firstname">
                           <Form.Control as="textarea" rows={4} placeholder="Explain here..."/>
                        </Form.Group>
                </div>
            </div>


        </div>
     );
}
 
export default Examination;