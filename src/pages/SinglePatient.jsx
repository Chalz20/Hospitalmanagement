import React from "react";
import DocTab from "../components/Tab";
import PatientDetails from "./PatientDetails";
//import {Box,Tab} from '@mui/material';


const SinglePatient =() =>{
    return(

        <div className="bg-light shadow ">
            <PatientDetails/>
            <DocTab/>
        </div>
    )
}
export default SinglePatient