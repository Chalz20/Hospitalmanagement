import React from "react";
import { GridComponent, ColumnsDirective, ColumnDirective, Filter, Inject, VirtualScroll, Sort } from '@syncfusion/ej2-react-grids';

const Table = () => {
    return ( 
        <div>{ 
            <GridComponent>
                <ColumnsDirective>
                  <ColumnDirective field='Employees' headerText='Employee Name' width='230' />
                </ColumnsDirective>
            </GridComponent>}
        </div>
     );
}
 
export default Table;

