import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import './layout.css'



import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import TopNav from '../topnav/TopNav'



import Patients from '../../pages/Patients'
import Dashboard from '../../pages/Dashboard'
import NewPatient from '../../pages/NewPatient'
import Emergency from '../../pages/Emergency'
import DoctorsWork from '../../pages/DoctorsWork'
import DoctorOutpatients from '../../pages/DoctorOutpatients'
import DoctorInpatients from '../../pages/DoctorInpatients'
import Laboratory from '../../pages/Laboratory'
import Phamarcy from '../../pages/Phamarcy'
import Nurse from '../../pages/Nurse'
import SinglePatient from '../../pages/SinglePatient'





const Layout = () => {
  return (

  
    <Router>
            <Route render={(props) => (
                <div className={`layout`}>
                    <Sidebar {...props}/>
                    <div className="layout__content">
                        <TopNav/>
                        <div className="layout__content-main">
                          <Switch>
                            {/*Dashboard*/}
                          <Route exact path="/dashboard" component={()=><Dashboard/>} />
                          
                          {/*Patients*/}
                          <Route exact path="/patients"component={()=><Patients/>}/>          
                          <Route path="/patients/new_patient"  component={()=><NewPatient/>}/> 
                          
                          {/*Emergency*/}
                          <Route path="/emergency" component={()=><Emergency/>}/>
                         
                          {/*Doctors*/}
                          <Route exact path="/doctor" component={()=><DoctorsWork/>}/>
                          <Route exact path="/doctor/outpatients" component={()=><DoctorOutpatients/>}/>
                          <Route path="/doctor/outpatients/:patientID" component={()=><SinglePatient/>}/>
                          <Route path="/doctor/Inpatients" component={()=><DoctorInpatients/>}/>
                          
                          {/*Laboratory*/}
                          <Route path="/laboratory" component={()=><Laboratory/>}/>
                          
                          {/*Pharmacy*/}
                          <Route path="/phamarcy" component={()=><Phamarcy/>}/>
                          
                          {/*Nurse*/}
                          <Route path="/nurse" component={()=><Nurse/>}/>
                          
                
                         
                          </Switch>
                       
                      
                        </div>
                    </div>
                </div>
            )}/>
        </Router>
  )
}

export default Layout
