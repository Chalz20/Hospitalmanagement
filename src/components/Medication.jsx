import React from 'react';
import Form from "react-bootstrap/Form";

const Medication = () => {

    const Add =() =>{ 
          
    }
    return (  
     <div className='container'>
        <h5 className='muted'>Fill the information:</h5>
        <div className='row'>
            <div className='col-lg-3'>
                  <Form.Select aria-label="Medicine">
                     <option>--Select Name--</option>
                     <option value="1">Paracetamol</option>
                     <option value="2">Aspirin</option>
                  </Form.Select>
                </div>

                <div className='col-lg-3'>
                  <Form.Control controlId="" type="text" placeholder="Type"/>
                </div>
                
                <div className='col-lg-2'>
                  <Form.Control controlId="" type="number" placeholder="Amount"/>
                </div>

                <div className='col-lg-2'>
                  <Form.Control controlId="" type="time" placeholder="Time"/>
                </div>

                <div className='col-lg-2'>
                   <button className='btn btn-primary' onClick={Add}>Add</button>
                </div>
        </div>

    </div>
    );
}
 
export default Medication;