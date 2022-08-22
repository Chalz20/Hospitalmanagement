import React from 'react';
import Form from "react-bootstrap/Form";

const Investigation = () => {
    return ( 
        <div className='container'>
            <h5 className='text-muted'>Laboratory:</h5>
            <div className='row'>
                <div className='col-lg-10'>
                  <Form.Select aria-label="Lab tests">
                     <option>--Select lab test--</option>
                     <option value="1">Urinalysis</option>
                     <option value="2">Blood screening</option>
                  </Form.Select>
                </div>

                <div className='col-lg-2'>
                   <button className='btn btn-primary'>Add test</button>
                </div>
            </div>

            <div className='row mt-3'>
              <div className='col-lg-10'>  
                <h5 className='text-muted'>Comments for laboratory:</h5>
                <Form.Group controlId="firstname">
                  <Form.Control as="textarea" rows={3} placeholder="Explain here..."/>
                </Form.Group>
             </div> 
            </div>

            <h5 className='text-muted mt-4'>Radiology:</h5>
            <div className='row'>
                <div className='col-lg-10'>
                  <Form.Select aria-label="Radiology tests">
                     <option>--Select radiology test--</option>
                     <option value="1">X-Ray</option>
                     <option value="2">CT-Scan</option>
                  </Form.Select>
                </div>

                <div className='col-lg-2'>
                   <button className='btn btn-primary'>Add test</button>
                </div>
            </div>

            <div className='row mt-3'>
              <div className='col-lg-10'>  
                <h5 className='text-muted'>Comments for Radilogy:</h5>
                <Form.Group controlId="firstname">
                  <Form.Control as="textarea" rows={3} placeholder="Explain here..."/>
                </Form.Group>
             </div> 
            </div>

            <div className='row mt-4'>
              <div className='col-lg-10'>
                      <h5 className='text-muted'>Doctor's Investigation comments:</h5>
                       <Form.Group controlId="firstname">
                           <Form.Control as="textarea" rows={4} placeholder="Explain here..."/>
                        </Form.Group>
                </div>
            </div>

        </div>
     );
}
 
export default Investigation;