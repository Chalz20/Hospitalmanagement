import React from 'react'
import StatusCard from '../components/status-card/StatusCard'
import { Link } from 'react-router-dom'

const Phamarcy = () => {
  return (
    <div>
      <h3>Phamarcy works</h3>

      <div className='container'>
             <div className="row mt-3">
                   
                     <div className="col-lg-6">   
                      <Link to="/doctor/outpatients" className='text-decoration-none link-dark'> 
                         <StatusCard icon="bx bx-user-pin" count="Patient List" title=" List of pending patients"/>
                       </Link>
                     </div>

               </div>
                  
      </div>
    </div>
  )
}

export default Phamarcy
