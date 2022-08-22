import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import {TabPanel,TabList,TabContext} from '@mui/lab';
import Investigation from './Investigation';
import Examination from './Examination';
import Diagnosis from './Diagnosis';
import Complain from './Complain'
import Treatment from './Treatment';
import Remarks from './Remarks';



const DocTab = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);}

    return ( 
     <Box sx={{ width: '100%', typography: '' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="Doctors work page" centered>
            <Tab label="Complaints" value="1" />
            <Tab label="Physical Examination" value="2" />
            <Tab label="Diagnosis" value="3" />
            <Tab label="Investigation" value="4" />
            <Tab label="Treatment" value="5" />
            <Tab label="Remarks" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">{<Complain/>}</TabPanel> 
        <TabPanel value="2">{<Examination/>}</TabPanel>
        <TabPanel value="3">{<Diagnosis/>}</TabPanel>
        <TabPanel value="4">{<Investigation/>}</TabPanel>
        <TabPanel value="5">{<Treatment/>}</TabPanel>
        <TabPanel value="6">{<Remarks/>}</TabPanel>
      </TabContext>
     </Box>
     );
}
 
export default DocTab;