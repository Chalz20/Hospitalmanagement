import React from 'react';
import Form from "react-bootstrap/Form";

const Complain = () => {
    return (  
        <div className='container'>
            <div className='row'>
                 <h5 className='text-muted'>Main complain:</h5>
                  <div className='col-lg-7'>
                     <Form.Group controlId="firstname">
                      <Form.Control as="textarea" rows={1} placeholder="Explain here..."/>
                     </Form.Group>
                   </div>
     
                 <div className='col-lg-2'>
                   <Form.Control controlId="" placeholder="Duration.."/>
                 </div>
    
                 <div className='col-lg-2'>
                    <button className='btn btn-primary'>Add</button>
                 </div>
           </div>

           <div className='row mt-5'>
              <h5 className='text-muted'>History Of present illness:</h5>
              <div className='col-lg-3'>
                 <Form.Control controlId="" placeholder="Complain.."/>
              </div>

              <div className='col-lg-3'>
                 <Form.Control controlId="" placeholder="Duration.."/>
              </div>

              <div className='col-lg-3'>
                 <Form.Control controlId="" placeholder="Onset.."/>
              </div>

              <div className='col-lg-3'>
                 <Form.Control controlId="" placeholder="Periodicity.."/>
              </div>
           </div>

           <div className='row mt-3'>
              <div className='col-lg-3'>
                 <Form.Control controlId="" placeholder="Aggravating factor.."/>
              </div>
  
              <div className='col-lg-3'>
                 <Form.Control controlId="" placeholder="Relieving factor.."/>
              </div>
  
              <div className='col-lg-3'>
                 <Form.Control controlId="" placeholder="Associated with.."/>
              </div>
           </div>

           <div className='row mt-5'>
             <div className='col-lg-4'>
               <h5 className='text-muted'>Type Of patient case:</h5>
               <Form.Select aria-label="Lab tests">
                     <option>--Select case--</option>
                     <option value="1">New case</option>
                     <option value="2">---</option>
                </Form.Select>
             </div>

             <div className='col-lg-4'>
               <h5 className='text-muted'>Course Injuries :</h5>
               <Form.Select aria-label="Lab tests">
                     <option>--Select--</option>
                     <option value="1">None</option>
                     <option value="2">---</option>
                </Form.Select>
             </div>

             <div className='col-lg-4'>
               <h5 className='text-muted'>To Come Again:</h5>
               <Form.Select aria-label="Lab tests">
                     <option>--Select--</option>
                     <option value="1">---</option>
                     <option value="2">---</option>
                </Form.Select>
             </div>
           </div>

           <div className='row mt-5'>
             <div className='col-lg-12'>
                <h5 className='text-muted'>Review of other symptoms:</h5>
                <Form.Group controlId="firstname">
                  <Form.Control as="textarea" rows={3} placeholder="Explain here..."/>
                </Form.Group>
             </div>
            </div>

            <div className='row mt-4'> 
             <div className='col-lg-12'>
                <h5 className='text-muted'>Past Medical History:</h5>
                <Form.Group controlId="firstname">
                  <Form.Control as="textarea" rows={3} placeholder="Explain here..."/>
                </Form.Group>
             </div>
           </div>
           

          <div className='row mt-4'>
           <div className='col-lg-12'>
                <h5 className='text-muted'>Gynocological history:</h5>
                <Form.Group controlId="firstname">
                  <Form.Control as="textarea" rows={3} placeholder="Explain here..."/>
                </Form.Group>
             </div>
          </div>  

           <div className='row mt-4 mb-3'>
             <div className='col-lg-12'>
                <h5 className='text-muted'>Family and social history:</h5>
                <Form.Group controlId="firstname">
                  <Form.Control as="textarea" rows={3} placeholder="Explain here..."/>
                </Form.Group>
             </div>

             

           </div>

            </div>
    
    );
}
 
export default Complain;