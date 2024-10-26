'use client'
import React, { useState } from 'react';
import { Tabs, Tab, Typography, Box, Grid } from '@mui/material';

const TabPanel = (props: { children: React.ReactNode, value: number, index: number}) => {
  const { children, value, index} = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

  const handleChange = (_:unknown, value: number) => {
    setValue(value);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', overflow: 'hidden' }}
    >
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Tabs
            className='tabs'
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            value={value}
            onChange={handleChange}
            sx={{ maxWidth: '100vw' }}
          >
            <Tab label="Bem vindo" />
            <Tab label="Introdução" />
            <Tab label="Aula 1" />
            <Tab label="Aula 2" />
            <Tab label="Aula 3" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}><span className="aspect-box intro">
          <Box className="boxIntro" sx={{ p: 3, maxWidth: 'calc(100% - 50px)', textAlign: 'justify' }}>
          Bem-vindo ao nosso curso sobre Pesquisa de Clima Organizacional!<br /><br />

          Neste curso, você irá explorar as ferramentas e técnicas essenciais para avaliar e entender o ambiente de trabalho em qualquer organização.<br /><br />

          A pesquisa de clima organizacional é crucial para identificar áreas de melhoria, promover a satisfação dos colaboradores e aumentar a produtividade.
          Prepare-se para adquirir conhecimentos práticos e teóricos que vão transformar a forma como você percebe e gerencia a cultura organizacional.
          Vamos começar essa jornada juntos e aprender a transformar ambientes de trabalho em espaços de excelência e colaboração!
          </Box></span></TabPanel>
        <TabPanel value={value} index={1}><span className="aspect-box">
        <iframe width="896" height="504" src="https://www.youtube.com/embed/5y7j0lRQbAI" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </span></TabPanel>
        <TabPanel value={value} index={2}><span className="aspect-box">
        <iframe width="896" height="504" src="https://www.youtube.com/embed/niXm6oYQArU" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </span></TabPanel>
        <TabPanel value={value} index={3}><span className="aspect-box">
        <iframe width="896" height="504" src="https://www.youtube.com/embed/mCWL-k3JE20"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </span></TabPanel>
        <TabPanel value={value} index={4}><span className="aspect-box">
        <iframe width="896" height="504" src="https://www.youtube.com/embed/Mo5c1jFU_ds" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </span></TabPanel>
      </Box>
    </Grid>
  );
}