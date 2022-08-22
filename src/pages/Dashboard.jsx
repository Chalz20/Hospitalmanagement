import React from 'react'
import './dashboard.css';
import 'boxicons';
import {FaUserFriends} from 'react-icons/fa'



const Dashboard = () => {

  return (
    <div>
        <h2 className="page-header">Dashboard</h2>
          <div className="featured">
        <div className="featuredItem">
        <span className="featuredTitle">Doctor</span>
        <div className="featuredContainer">
          <span className="featuredTotal">50</span>
          <span className="featuredRate">
            <  FaUserFriends className='featuredIcon negative' />
          </span>
        </div>
        <span className="featuredSub">Total Doctor</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Nurse</span>
        <div className="featuredContainer">
          <span className="featuredTotal">100</span>
          <span className="featuredRate">
            <  FaUserFriends className='featuredIcon negative' />
          </span>
        </div>
        <span className="featuredSub">Total Nurse</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">In Patients</span>
        <div className="featuredContainer">
          <span className="featuredTotal">200</span>
          <span className="featuredRate">
            <  FaUserFriends className='featuredIcon negative' />
          </span>
        </div>
        <span className="featuredSub">Total In Patient</span>
      </div>
      
    </div>
    <div className="featured">
        <div className="featuredItem">
        <span className="featuredTitle">Out Patients</span>
        <div className="featuredContainer">
          <span className="featuredTotal">100</span>
          <span className="featuredRate">
            <  FaUserFriends className='featuredIcon negative' />
          </span>
        </div>
        <span className="featuredSub">Total Out Patients</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Receptions</span>
        <div className="featuredContainer">
          <span className="featuredTotal">20</span>
          <span className="featuredRate">
            <  FaUserFriends className='featuredIcon negative' />
          </span>
        </div>
        <span className="featuredSub">Total Receptions</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Employee</span>
        <div className="featuredContainer">
          <span className="featuredTotal">50</span>
          <span className="featuredRate">
            <  FaUserFriends className='featuredIcon negative' />
          </span>
        </div>
        <span className="featuredSub">Total Employee</span>
      </div>
      
    </div>


    </div>
  )
}

export default Dashboard