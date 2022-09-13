import React from 'react'
import Form from "react-bootstrap/Form";
import {FaUserCheck,FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom';


const DepartmentInfo = () => {
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
                <th>Department Name</th>
                <th>Department Categorty</th>
                <th>Department Description</th>
                <th>Option</th>
              </tr>
                </thead>
              
             <tbody>
             <tr>
              
                <td>1</td>
                <td>NEUROLOGY</td>
                <td>OPD</td>
                <td>a doctor who specializes in neurology is called neurologist. The neurologist treats disorders that affect the brain,spinal cord and nerves</td>
                
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

export default DepartmentInfo
