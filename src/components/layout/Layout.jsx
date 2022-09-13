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
import Reception from '../../pages/ReceptionDashboard'
import Nursepreliminary from '../../pages/Nursepreliminary'
import VitalSign from '../../pages/VitalSign/VitalSign'
import Account from '../../pages/Account/Account'
import Outpatient from '../../pages/Outpatient'
import Moniter from '../../pages/Moniter'
import Admin from '../../pages/Admin'
import DoctorPanel from '../../components/admin/DoctorPanel'
import Login from '../../pages/Login/Login'
import WardPanel from '../admin/ward/WardPanel'
import PharmacistPanel from '../admin/pharmacist/PharmacistPanel'
import NursePanel from '../admin/nurse/NursePanel'
import DepartmentPanel from '../admin/department/DepartmentPanel'
//import useFetch from '../../hooks/useFetch'


//const URL= "https://192.168.185.33:5002/Drug/GetDrugs"



const Layout = () => {



  return (
    <Router>
      <Switch>

      
        <Route exact path={"/login"} 
            render={props=>(
              <Login {...props} loggedInStatus ={props.loggedInStatus}/>
            )}
            />
            <Route render={(props) => (
                <div className={`layout`}>
                    <Sidebar {...props}/>
                    <div className="layout__content">
                        <TopNav/>
                        <div className="layout__content-main">
                          

                          {/*Admin*/}
                         <Route exact path="/admin" component={()=><Admin/>} /> 
                         <Route exact path="/admin/doctorpanel" component={()=><DoctorPanel/>} />
                         <Route exact path ="/admin/wardpanel" component={()=><WardPanel/>}/>
                         <Route exact path ="/admin/pharmacistpanel" component={()=><PharmacistPanel/>}/>
                         <Route exact path ="/admin/nursepanel" component={()=><NursePanel/>}/>
                         <Route exact path ="/admin/departmentpanel" component={()=><DepartmentPanel/>}/>
                        
                          

                          {/*Billing*/}
                          <Route exact path="/accounts" component={()=><Account/>} />

                          {/*Dashboard*/}
                          <Route exact path="/dashboard" component={()=><Dashboard/>} />
                          
                          {/*Patients*/}
                          <Route exact path="/patients"component={()=><Patients/>}/>          
                          <Route path="/patients/new_patient"  component={()=><NewPatient/>}/> 

                         {/*Reception*/}
                          <Route exact path="/reception" component={()=><Reception/>}/>
                          <Route path="/reception/new_patient"  component={()=><NewPatient/>}/>
                          <Route path="/reception/visit"  component={()=><Outpatient/>}/> 
                          
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
                          <Route exact path="/nurse" component={()=><Nurse/>}/>
                          <Route exact path="/nurse/preliminary" component={()=><Nursepreliminary/>}/>
                          <Route exact path="/nurse/preliminary/vitals" component={()=><VitalSign/>}/>
                          <Route exact path="/nurse/moniter" component={()=><DoctorInpatients/>}/>
                          <Route  path="/nurse/moniter/:patientID" component={()=><Moniter/>}/>


                
                         
                          
                        </div>
                    </div>
                </div>
            )}/>
            </Switch>
    </Router>
  )
}

export default Layout
