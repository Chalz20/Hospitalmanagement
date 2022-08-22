import React from 'react';
import Form from "react-bootstrap/Form";

const Diagnosis = () => {
    return ( 
        <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                  <h5 className='text-muted'>Provisional Diagnosis:</h5>
                  <Form.Group controlId="firstname">
                      <Form.Control as="textarea" rows={3} placeholder="Explain here..."/>
                   </Form.Group>
              </div>
            </div>

            <div className='row mt-4'>
              <div className='col-lg-12'>
                  <h5 className='text-muted'>Differential Diagnosis:</h5>
                  <Form.Group controlId="firstname">
                      <Form.Control as="textarea" rows={3} placeholder="Explain here..."/>
                   </Form.Group>
              </div>
            </div>

            <div className='row mt-4'>
              <div className='col-lg-12'>
                  <h5 className='text-muted'>Final Diagnosis:</h5>
                  <Form.Group controlId="firstname">
                      <Form.Control as="textarea" rows={3} placeholder="Explain here..."/>
                   </Form.Group>
              </div>
            </div>

            <div className='row mt-4 mb-3'>
              <div className='col-lg-12'>
                  <h5 className='text-muted'>Doctor's Plan / Suggession:</h5>
                  <Form.Group controlId="firstname">
                      <Form.Control as="textarea" rows={3} placeholder="Explain here..."/>
                   </Form.Group>
              </div>
            </div>
            
        </div>
     );
}
 
export default Diagnosis;