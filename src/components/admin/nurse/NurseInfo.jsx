import React from 'react'
import Form from "react-bootstrap/Form";

import useFetch from '../../../hooks/useFetch';

import { GridComponent, ColumnsDirective ,ColumnDirective } from '@syncfusion/ej2-react-grids';

const NurseInfo = () => {

  const { data } = useFetch('https://10.42.0.1:5002/Employee/GetEmployees')
  console.log(data)
  return (
    <div className='container=fluid'>
        <div className='row m-auto'>
        
             
                        <div className="col-sm-3 ">
                  
                    <Form.Group controlId="firstname" className="newpatient__search">
                    <input type="text" placeholder='Search here...' />
                        <i className='bx bx-search'></i>
                    </Form.Group>
                    </div>
        </div>
      <div className='container'>
        <div className='row m-0 mt-4'>
       {/* <table className="table">
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
          {data.map((item)=>(
            <>
               <td>{item.emloyeeeId}</td>
               <td>{item.firstname}</td>
               <td>{item.midname}</td>
               <td>{item.lastname}</td>
               <td>{item.phone}</td>
            </>  
          ))}
            
          
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
         */}

         <GridComponent dataSource={data}>
               <ColumnsDirective>
                          <ColumnDirective field='employeeId' headerText='ID' width={70} />
                          <ColumnDirective field='firstname' headerText='Firstname'width={100}/>
                          <ColumnDirective field='middlename' headerText='MiddleName' width={100} />
                          <ColumnDirective field='surname' headerText='Lastname'  width={100}/>
                          <ColumnDirective field='gender' headerText='Sex' width={80} />
                          <ColumnDirective field='dateOfBirth' headerText='DOB'width={100} />
                          <ColumnDirective field='email' headerText='email' width={100}/>
                          <ColumnDirective field='role' headerText='Role' width={100} />
                          <ColumnDirective field='ssn' headerText='SSN' width={100}/>
                          <ColumnDirective field='dateOfRegistration' headerText='Registered'  />
                          <ColumnDirective field='phoneNumber' headerText='Phone'width={100} />
                          <ColumnDirective field='qualification' headerText='Qualification'width={100} />
                          <ColumnDirective field='department' headerText='Department'width={100} />
                          <ColumnDirective field='address' headerText='Address'width={100} />
                   </ColumnsDirective>
         </GridComponent>
        </div>

      </div>


     
    </div>
  )
}

export default NurseInfo
