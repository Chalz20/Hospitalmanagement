import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import {TabPanel,TabList,TabContext} from '@mui/lab';
import AddDoctor from './AddDoctor'
import DoctorInfo from './DoctorInfo'


const DoctorPanel = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);}
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="Doctors work page">
            <Tab label="DoctorList" value="1" />
            <Tab label="Add Doctor" value="2" />
            
          </TabList>
        </Box>
        <TabPanel value="1">{<DoctorInfo/>}</TabPanel> 
        <TabPanel value="2">{<AddDoctor/>}</TabPanel>
       
      </TabContext>
     </Box>
     
  )
}

export default DoctorPanel
