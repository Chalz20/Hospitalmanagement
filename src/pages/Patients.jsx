import React from 'react'
import { Link } from 'react-router-dom'
import {FaUserPlus} from 'react-icons/fa'


const Patients = () => {
  return (
    <div>
      

            <div className="m-3 bg-light shadow p-3">
               <div className="header mx-2">
                  <h3 className="text-muted ">Patients</h3><hr></hr>
               </div>

               <div className="body">
                 <Link to={"/patients/new_patient"}>
                   <button className="btn btn-primary float-end"><span className="p-1"><FaUserPlus/></span>Add new patient</button>    
                 </Link>
                
                 {/*Table for patients*/}
                  <div>
                     <p>List of available patients</p>
                  </div>
                  
                   
               </div>
            </div>
         </div>  

      
  )
}

export default Patients