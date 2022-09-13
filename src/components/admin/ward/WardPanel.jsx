import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import {TabPanel,TabList,TabContext} from '@mui/lab';
import AddWard from './AddWard'
import WordList from './WordList'

const WardPanel = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);}
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <TabList onChange={handleChange} aria-label="Doctors work page">
          <Tab label="Ward List" value="1" />
          <Tab label="Add Ward" value="2" />
        
          
        </TabList>
      </Box>
      <TabPanel value="1">{<WordList/>}</TabPanel> 
      <TabPanel value="2">{<AddWard/>}</TabPanel>
     
    </TabContext>
   </Box>
  )
}

export default WardPanel
