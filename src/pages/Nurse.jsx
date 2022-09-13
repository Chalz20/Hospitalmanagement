import React from "react";
import { Link } from "react-router-dom";
import StatusCard from "../components/status-card/StatusCard";

const Nurse =() =>{
    return(
        <div>
            <h3>Nurses works</h3>

            <div className="container">
                <div className="row mt-3">
                   
                     <div className="col-lg-4">   
                       <Link to="/doctor/outpatients" className='text-decoration-none link-dark'> 
                         <StatusCard icon="bx bx-user-plus" count="Admit patient" title="Allocate patient to a ward"/>
                       </Link>
                     </div>
                    

                    <div className="col-lg-4">
                      <Link to="/doctor/Inpatients" className='text-decoration-none link-dark'>  
                        <StatusCard icon="bx bx-user-pin" count="In-patient list" title="List of Inpatients"/>
                      </Link>
                    </div>

                    <div className="col-lg-4">
                      <Link to="/doctor/outpatients" className='text-decoration-none link-dark'>  
                        <StatusCard icon="bx bx-band-aid" count="Ward pharmaceuticals" title=" Manage drugs and equipment"/>
                      </Link>
                    </div>
                   </div>
                   {/*End of First row*/} 

                    <div className="row mt-3">
                        <div className="col-lg-6">
                          <Link to="/nurse/preliminary" className='text-decoration-none link-dark'> 
                            <StatusCard icon="bx bxs-thermometer" count="Preliminary tests" title="Record test on outpatient"/>
                          </Link>
                        </div>

                        <div className="col-lg-6">
                          <Link to="/nurse/moniter" className='text-decoration-none link-dark'> 
                             <StatusCard icon="bx bxs-capsule" count="Moniter Inpatient" title="Record services on patient"/>
                          </Link>
                        </div>
                     {/*
                        <div className="col-lg-4">
                           <Link to="/doctor/outpatients" className='text-decoration-none link-dark'> 
                              <StatusCard icon="bx bxs-flask" count="Receive specimen" title="view received specimen"/>
                           </Link>
                        </div>
                      */}  
                  </div>

                  {/*End of second row */}
                  { /* 
                  <div className="row mt-3">
                        <div className="col-lg-4">
                           <Link to="/doctor/outpatients" className='text-decoration-none link-dark'> 
                              <StatusCard icon="bx bxs-report" count="Surgery report" title="Surgery evaluation report"/>
                           </Link>
                        </div>

                        <div className="col-lg-4">
                          <Link to="/doctor/outpatients" className='text-decoration-none link-dark'> 
                              <StatusCard icon="bx bx-calendar" count="Surgery Appointments" title="Manage surgery appointments"/>
                           </Link>  
                        </div>

                        <div className="col-lg-4">
                           <Link to="/doctor/outpatients" className='text-decoration-none link-dark'> 
                             <StatusCard icon="bx bx-cut" count="Surgery patient list" title="Schedueled surgeries"/>
                           </Link>
                        </div>
                    
                  </div>
                 */} 
            </div>
        </div>
    )
}
export default Nurse;