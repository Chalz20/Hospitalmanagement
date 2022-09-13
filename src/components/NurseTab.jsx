import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import {TabPanel,TabList,TabContext} from '@mui/lab';
import Vitals from './Vitals';
import Consumables from './Consumables';
import Medication from './Medication';
import Notes from './Notes';



const NurseTab = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);}

    return ( 
     <Box sx={{ width: '100%', typography: '' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="Doctors work page" centered>
            <Tab label="Vitals" value="1" />
            <Tab label="Consumables" value="2" />
            <Tab label="Medication" value="3" />
            <Tab label="Additional notes" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">{<Vitals/>}</TabPanel> 
        <TabPanel value="2">{<Consumables/>}</TabPanel>
        <TabPanel value="3">{<Medication/>}</TabPanel>
        <TabPanel value="4">{<Notes/>}</TabPanel>
      </TabContext>
     </Box>
     );
}
 
export default NurseTab;