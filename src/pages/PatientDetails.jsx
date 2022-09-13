import React from 'react';

const PatientDetails = () => {
    return (  
        <div className='text-white p-4 mb-2 d-flex' style={{backgroundColor:"#349eff"}}>
           <h5 className='mx-3'>Name:<span className='mx-1 fw-bolder'>Aminaaa</span></h5>
           <h5 className='mx-3'>ID:<span className='mx-1 fw-bolder'>23232</span></h5>
           <h5 className='mx-3'>Age:<span className='mx-1 fw-bolder'>23</span></h5>
           <h5 className='mx-3'>Gender:<span className='mx-1 fw-bolder'>Female</span></h5>
        </div>
    );
}
 
export default PatientDetails;