import React from 'react';
import NurseTab from '../components/NurseTab';
import PatientDetails from './PatientDetails';
import { useParams } from 'react-router';

const Moniter = () => {

  const { patientID } = useParams();
    
   return (
        <div className='bg-light shadow'>
          <h5>{patientID}</h5>
          <PatientDetails/>
          <NurseTab/>
        </div>
     );
}
 
export default Moniter;