import React from "react";
import { GridComponent, ColumnsDirective, ColumnDirective, Filter, Inject, VirtualScroll, Sort } from '@syncfusion/ej2-react-grids';
import data from "../dummy.json"
//import { Link } from "react-router-dom";

const DoctorOutpatient =()=>{
    return(
        <div>
           <div className="m-2 bg-light shadow p-3">
               <div className="header mx-2">
                  <h3 className="">OutPatients List</h3><hr></hr>
               </div>

               <div className="body">
                 {/*Table for patients*/}
                 <GridComponent dataSource={data}>
                     <ColumnsDirective>
                          <ColumnDirective field='Patient ID' headerText='PID' width={80} />
                          <ColumnDirective field='First Name' headerText='First name' textAlign="Left" />
                          <ColumnDirective field='Middle Name' headerText='MiddleName'  />
                          <ColumnDirective field='Last Name' headerText='Last Name'  />
                          <ColumnDirective field='Gender' headerText='Sex'  />
                          <ColumnDirective field='Age' headerText='Age' width={80} />
                          <ColumnDirective field='Sponsor' headerText='Sponsor' />
                          <ColumnDirective field='Residence' headerText='Residence'  />
                          <ColumnDirective field='Street' headerText='Street' />
                          <ColumnDirective field='Date Registered' headerText='Registered'  />
                          <ColumnDirective field='Phone' headerText='Phone' />
                       </ColumnsDirective>
                 </GridComponent>
                   
               </div>
            </div>
        </div>
    )
}

export default DoctorOutpatient;