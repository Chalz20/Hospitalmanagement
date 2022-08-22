import React from "react";

const DoctorOutpatient =()=>{
    return(
        <div>
           <div className="m-3 bg-light shadow p-3">
               <div className="header mx-2">
                  <h3 className="">OutPatients List</h3><hr></hr>
               </div>

               <div className="body">
                 
                
                 {/*Table for patients*/}
                  <div>
                     <p>List of available patients</p>
                  </div>
                  
                   
               </div>
            </div>
        </div>
    )
}

export default DoctorOutpatient;