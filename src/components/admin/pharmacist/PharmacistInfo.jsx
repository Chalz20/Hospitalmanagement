import React from 'react'
import Form from "react-bootstrap/Form";
import {FaUserCheck,FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const PharmacistInfo = () => {
  return (
    <div className='container'>
        <div className='row m-auto'>
        <div className="col-sm-3 ">
        <Form.Group controlId="firstname" className="newpatient__search">
        <input type="text" placeholder='Search here...' />
            <i className='bx bx-search'></i>
        </Form.Group>
        </div>
        </div>
      <div className='container'>
        <div className='row m-auto mt-4'>
        <table className="table">
            <thead>
            <tr>
           
            <th>#</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Department</th>
            <th>Option</th>
          </tr>
            </thead>
          
         <tbody>
         <tr>
          
            <td>1</td>
            <td>JACKSON</td>
            <td>JUMA</td>
            <td>SHAYO</td>
            <td>Neurology</td>
             <td>
              <Link to=''>
              <box-icon name='edit' color='blue'></box-icon>
              </Link>
              <Link to=''>
              <box-icon type='solid' name='trash'color='red' className='text-danger'></box-icon>
              </Link>
            </td>
          </tr>
         </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

export default PharmacistInfo
