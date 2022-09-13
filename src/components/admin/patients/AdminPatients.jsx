import React from 'react'
import Form from "react-bootstrap/Form";

const AdminPatients = () => {
  return (
    <div className="m-3 bg-light shadow p-3">
    <div className="header mx-2">
       <h3 className="text-muted ">Patients</h3><hr></hr>
    </div>

    <div className="body">
       <div className='container justify-content-between'>
       
        <div className="col-sm-3 float-md-end">
        
         <Form.Group controlId="firstname" className="newpatient__search">
         <input type="text" placeholder='Search here...' />
             <i className='bx bx-search'></i>
         </Form.Group>
         </div>
         <div className='col-sm-3'>
        <p>List of available patients</p>
        </div>
       </div>

       <div className='container'>

       </div>
    
        
    </div>
 </div>
  )
}

export default AdminPatients