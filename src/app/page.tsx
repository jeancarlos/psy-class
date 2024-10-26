'use client'
import { useState } from 'react';
import { Tabs, Tab, Typography, Box, Grid } from '@mui/material';

const TabPanel = (props: any) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, pt: 10 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (_:any, value: number) => {
    setValue(value);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh' }}
    >
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Introdução" />
            <Tab label="Aula 1" />
            <Tab label="Aula 2" />
            <Tab label="Aula 3" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        <iframe width="1024" height="576" src="https://www.youtube.com/embed/5y7j0lRQbAI" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <iframe width="1024" height="576" src="https://www.youtube.com/embed/niXm6oYQArU" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <iframe width="1024" height="576" src="https://www.youtube.com/embed/mCWL-k3JE20"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </TabPanel>
        <TabPanel value={value} index={3}>
        <iframe width="1024" height="576" src="https://www.youtube.com/embed/Mo5c1jFU_ds" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </TabPanel>
      </Box>
    </Grid>
  );
}