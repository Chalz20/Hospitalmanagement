import React from 'react';
import Form from "react-bootstrap/Form";


const Notes = () => {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <Form.Group controlId="firstname">
                       <Form.Control as="textarea" rows={3} placeholder="Additional notes..."/>
                     </Form.Group>
                </div>
            </div>

        </div>
     );
}
 
export default Notes;