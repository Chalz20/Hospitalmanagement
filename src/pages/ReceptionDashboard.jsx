import React from 'react';
import 'boxicons'; 
import {FaUserFriends} from 'react-icons/fa'
import {HiDocumentReport} from 'react-icons/hi'
import {GiTestTubes} from 'react-icons/gi'
import { Link } from 'react-router-dom';
import StatusCard from '../components/status-card/StatusCard';


const  Reception = () => {
  return (

    <div>
    <h3 className="page-header">Reception Dashboard</h3>
    <div className='container'>
        <div className='row mt-3'>
            <div className='col-lg-4'>
              <Link to='/receptiondashboard/patients' className='text-decoration-none link-dark'>
               <StatusCard icon="bx bx-user-pin" count="View Patient" title="Total Patients"/>
              </Link>
            </div>

            <div className='col-lg-4'>
              <Link to='/patients/new_patient' className='text-decoration-none link-dark'>
               <StatusCard icon="bx bx-user-plus" count="Register Patients" title="Create a new patient file"/>
              </Link>
            </div>

            <div className='col-lg-4'>
               <Link to='/receptiondashboard/visit' className='text-decoration-none link-dark'>
                <StatusCard icon="bx bx-user-pin" count="Out-Patients Visit" title="Works on Out-Patient"/>
               </Link>
            </div>

        </div>

    </div>




</div>
  )
}

export default Reception
