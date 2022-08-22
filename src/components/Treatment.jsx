import React from 'react';
import Form from "react-bootstrap/Form";

const Treatment = () => {
    return (  
        <div className='container'>
          <h5 className='text-muted'>Pharmacy:</h5>
          <div className='row'>
                <div className='col-lg-7'>
                  <Form.Select aria-label="Lab tests">
                     <option>--Select Drug--</option>
                     <option value="1">Paracetamol</option>
                     <option value="2">Aspirin</option>
                  </Form.Select>
                </div>

                <div className='col-lg-2'>
                  <Form.Control controlId="" placeholder="Dosage.."/>
                </div>

                <div className='col-lg-2'>
                   <button className='btn btn-primary'>Add drug</button>
                </div>
            </div>

            <h5 className='text-muted mt-4'>Procedure:</h5>
            <div className='row'>
                <div className='col-lg-10'>
                  <Form.Select aria-label="Lab tests">
                     <option>--Select procedure--</option>
                     <option value="1">Urinalysis</option>
                     <option value="2">Blood screening</option>
                  </Form.Select>
                </div>

                <div className='col-lg-2'>
                   <button className='btn btn-primary'>Add procedure</button>
                </div>
            </div>

            <div className='row mt-3'>
              <div className='col-lg-10'>  
                <h5 className='text-muted'>Procedure comments:</h5>
                <Form.Group controlId="firstname">
                  <Form.Control as="textarea" rows={3} placeholder="Explain here..."/>
                </Form.Group>
              </div> 
            </div>

           <h5 className='text-muted mt-4'>Surgery:</h5>
           <div className='row'>
                <div className='col-lg-10'>
                  <Form.Select aria-label="Lab tests">
                     <option>--Select surgery--</option>
                     <option value="1">Urinalysis</option>
                     <option value="2">Blood screening</option>
                  </Form.Select>
                </div>

                <div className='col-lg-2'>
                   <button className='btn btn-primary'>Add surgery</button>
                </div>
            </div>
          
            <div className='row mt-3'>
              <div className='col-lg-10'>  
                <h5 className='text-muted'>Surgery comments:</h5>
                <Form.Group controlId="firstname">
                  <Form.Control as="textarea" rows={3} placeholder="Explain here..."/>
                </Form.Group>
              </div> 
            </div>

        </div>
    );
}
 
export default Treatment;