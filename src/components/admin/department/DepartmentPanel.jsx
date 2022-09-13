import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import {TabPanel,TabList,TabContext} from '@mui/lab';
import DepartmentInfo from './DepartmentInfo';
import AddDepartment from './AddDepartment';

const DepartmentPanel = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);}
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="Doctors work page">
            <Tab label="Department List" value="1" />
            <Tab label="Add Department" value="2" />
            
          </TabList>
        </Box>
        <TabPanel value="1">{<DepartmentInfo/>}</TabPanel> 
        <TabPanel value="2">{<AddDepartment/>}</TabPanel>
       
      </TabContext>
     </Box>
     
  )
}

export default DepartmentPanel
