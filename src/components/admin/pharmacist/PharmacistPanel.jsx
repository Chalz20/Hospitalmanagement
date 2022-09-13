import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import {TabPanel,TabList,TabContext} from '@mui/lab';
import Pharmacist from './Pharmacist';
import PharmacistInfo from './PharmacistInfo';

const PharmacistPanel = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);}
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="Doctors work page">
            <Tab label="Pharmacist List" value="1" />
            <Tab label="Add Pharmacist" value="2" />
            
          </TabList>
        </Box>
        <TabPanel value="1">{<PharmacistInfo/>}</TabPanel> 
        <TabPanel value="2">{<Pharmacist/>}</TabPanel>
       
      </TabContext>
     </Box>
     
  )
}

export default PharmacistPanel
