import React from 'react'
import { Link } from 'react-router-dom'
import StatusCard from '../components/status-card/StatusCard'

const Laboratory = () => {
  return (
    <div>
        <h3>Laboratory works</h3>

        <div className="container">
                <div className="row mt-3">
                   
                     <div className="col-lg-4">   
                       <Link to="/doctor/outpatients" className='text-decoration-none link-dark'> 
                         <StatusCard icon="bx bx-user-pin" count="In-patients list" title="List of pending inpatients"/>
                       </Link>
                     </div>
                    

                    <div className="col-lg-4">
                      <Link to="/doctor/Inpatients" className='text-decoration-none link-dark'>  
                        <StatusCard icon="bx bxs-user-pin" count="Out-patient list" title="List of pending outpatients"/>
                      </Link>
                    </div>

                    <div className="col-lg-4">
                      <Link to="/doctor/outpatients" className='text-decoration-none link-dark'>  
                        <StatusCard icon="bx bx-folder" count="Previous lab results" title=" View previous lab results"/>
                      </Link>
                    </div>
                   </div>
                   {/*End of First row*/} 

                    <div className="row mt-3">
                        <div className="col-lg-4">
                          <Link to="/doctor/outpatients" className='text-decoration-none link-dark'> 
                            <StatusCard icon="bx bx-spreadsheet" count="Lab Reports" title="Detailed report for lab"/>
                          </Link>
                        </div>

                        <div className="col-lg-4">
                          <Link to="/doctor/outpatients" className='text-decoration-none link-dark'> 
                             <StatusCard icon="bx bx-test-tube" count="Collect specimen" title="Specimen collection"/>
                          </Link>
                        </div>

                        <div className="col-lg-4">
                           <Link to="/doctor/outpatients" className='text-decoration-none link-dark'> 
                              <StatusCard icon="bx bxs-flask" count="Receive specimen" title="view received specimen"/>
                           </Link>
                        </div>
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

export default Laboratory
