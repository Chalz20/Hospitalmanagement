import React from "react";
import StatusCard from "../components/status-card/StatusCard";
import { Link } from "react-router-dom";

const DoctorsWork =()=>{
  {/* 
    const work = {
    icon:"bx bx-user-pin",
    count:90,
    title:"Outpatient list"
   }
   */}

    return(
        <div>
            <h3>Doctors works</h3>
            
            <div className="container">
                <div className="row mt-3">
                   
                     <div className="col-lg-4">   
                      <Link to="/doctor/outpatients" className='text-decoration-none link-dark'> 
                         <StatusCard icon="bx bx-user-pin" count="Out-patients" title=" Works on outpatients"/>
                       </Link>
                     </div>
                    

                    <div className="col-lg-4">
                    <Link to="/doctor/Inpatients" className='text-decoration-none link-dark'>  
                        <StatusCard icon="bx bx-user-pin" count="In-patients" title=" Works on Inpatients"/>
                   </Link>
                    </div>

                    <div className="col-lg-4">
                    <Link to="/doctor/outpatients" className='text-decoration-none link-dark'>  
                        <StatusCard icon="bx bxs-calendar" count="My Appointments" title=" Manage appointments"/>
                   </Link>
                    </div>
                  {/*End of First row*/} 
                    </div>

                    <div className="row mt-3">
                        <div className="col-lg-4">
                        <Link to="/doctor/outpatients" className='text-decoration-none link-dark'> 
                            <StatusCard icon="bx bx-transfer" count="Patient transfer" title="Move patients"/>
                       </Link>
                        </div>

                        <div className="col-lg-4">
                        <Link to="/doctor/outpatients" className='text-decoration-none link-dark'> 
                            <StatusCard icon="bx bx-spreadsheet" count="Work Performance report" title="Evaluation report"/>
                        </Link>
                        </div>

                        <div className="col-lg-4">
                        <Link to="/doctor/outpatients" className='text-decoration-none link-dark'> 
                            <StatusCard icon="bx bx-cut" count="Surgery patient list" title="Schedueled surgeries"/>
                       </Link>
                        </div>
                  </div>

                  {/*End of second row */}
                  <div className="row mt-3">
                        <div className="col-lg-6">
                        <Link to="/doctor/outpatients" className='text-decoration-none link-dark'> 
                            <StatusCard icon="bx bxs-report" count="Surgery report" title="Surgery evaluation report"/>
                       </Link>
                        </div>

                        <div className="col-lg-6">
                        <Link to="/doctor/outpatients" className='text-decoration-none link-dark'> 
                            <StatusCard icon="bx bx-calendar" count="Surgery Appointments" title="Manage surgery appointments"/>
                        </Link>  
                        </div>
                  {/* 
                        <div className="col-lg-4">
                        <Link to="/doctor/outpatients" className='text-decoration-none link-dark'> 
                            <StatusCard icon="bx bx-cut" count="Surgery patient list" title="Schedueled surgeries"/>
                        </Link>
                        </div>
                    */}
                  </div>
                  
            </div>
        </div>

    )
}
export default DoctorsWork