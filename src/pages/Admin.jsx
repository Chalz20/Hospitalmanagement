import React from 'react'
import { Link } from 'react-router-dom'
import StatusCard from '../components/status-card/StatusCard'

const Admin = () => {
  return (
    <div>
       <h4 className="page-header text-muted">Admin Dashboard</h4>
    <div className='container'>
        <div className='row mt-3'>
            <div className='col-lg-4'>
            <Link to='/admin/doctorpanel' className='text-decoration-none link-dark'>
             <StatusCard icon="bx bx-user-pin" count="Doctor" title="Works on Doctor"/>
            </Link>
            </div>
            <div className='col-lg-4'>
            <Link to='/admin/nursepanel' className='text-decoration-none link-dark'>
             <StatusCard icon="bx bx-user-pin" count="Nurse" title="Works on Nurse"/>
            </Link>
            </div>
            <div className='col-lg-4'>
            <Link to='/admin/departmentpanel' className='text-decoration-none link-dark'>
             <StatusCard icon="bx bx-user-pin" count="Department" title="Works on Department"/>
            </Link>
            </div>
            <div className='col-lg-4'>
            <Link to='/admin/pharmacistpanel' className='text-decoration-none link-dark'>
             <StatusCard icon="bx bx-user-pin" count="Pharmacist" title="Works on Pharmacist"/>
            </Link>
            </div>
            <div className='col-lg-4'>
            <Link to='/admin/wardpanel' className='text-decoration-none link-dark'>
             <StatusCard icon="bx bx-user-pin" count="Ward" title="Works on Ward"/>
            </Link>
            </div>
            <div className='col-lg-4'>
            <Link to='/admin/adminpatients' className='text-decoration-none link-dark'>
             <StatusCard icon="bx bx-user-pin" count="Patient List" title="Works on Patient"/>
            </Link>
            </div>
            <div className='col-lg-4'>
            <Link to='/admin/adminpatients' className='text-decoration-none link-dark'>
             <StatusCard icon="bx bx-user-pin" count="Lab Test" title="Works on Lab"/>
            </Link>
            </div>
            <div className='col-lg-4'>
            <Link to='/admin/adminpatients' className='text-decoration-none link-dark'>
             <StatusCard icon="bx bx-user-pin" count="Radiology Test" title="Works on Test"/>
            </Link>
            </div>
            <div className='col-lg-4'>
            <Link to='/admin/adminpatients' className='text-decoration-none link-dark'>
             <StatusCard icon="bx bx-user-pin" count="Surgey Details" title="Works on Surgey"/>
            </Link>
            </div>

        </div>

    </div>

    </div>
  )
}

export default Admin
