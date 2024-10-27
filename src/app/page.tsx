'use client'
import React, { useState } from 'react';
import { Tabs, Tab, Typography, Box, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { teal, grey } from '@mui/material/colors';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

const TabPanel = (props: { children: React.ReactNode, value: number, index: number}) => {
  const { children, value, index} = props;
  return (
    <div
      className={`tabPanel ${value === index? 'slideIn' :'slideOut'}`}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3, pt: 4 }}>{children}</Box>
      )}
    </div>
  );
};

export default function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (_:unknown, value: number) => {
    setValue(value);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: teal[300],
      },
      secondary: {
        main: grey[900],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <Grid
      container
      spacing={0}
      direction="column"
      sx={{ minHeight: '100vh', overflow: 'hidden', pb: 7 }}
      component="div"
    >
      <Box component="div">
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 3, pb: 4}}>
          <Tabs
            className='tabs'
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            value={value}
            onChange={handleChange}
            sx={{ maxWidth: '100vw' }}
          >
            <Tab label="Bem vindos" />
            <Tab label="Introdução" />
            <Tab label="Modulo 1" />
            <Tab label="Modulo 2" />
            <Tab label="Modulo 3" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Typography variant="h2" component="h1" align="center" fontSize="2.50rem" fontWeight={700} sx={{ mb: 2 }} >
            Bem-vindos ao nossos vídeos sobre Pesquisa de Clima Organizacional! 
          </Typography>
          <span className="aspect-box">
            <img alt="" src="./organizacional.png" />
          </span>
          <Grid container spacing={2}>
            <Grid item md={12} sx={{ m: 2, mt: 5, mr: 0}}>
              <Typography variant="body2" align="justify">
              Bem-vindo ao nosso curso sobre Pesquisa de Clima Organizacional!<br /><br />

              Neste curso, você irá explorar as ferramentas e técnicas essenciais para avaliar e entender o ambiente de trabalho em qualquer organização.<br /><br />

              A pesquisa de clima organizacional é crucial para identificar áreas de melhoria, promover a satisfação dos colaboradores e aumentar a produtividade.
              Prepare-se para adquirir conhecimentos práticos e teóricos que vão transformar a forma como você percebe e gerencia a cultura organizacional.
              Vamos começar essa jornada juntos e aprender a transformar ambientes de trabalho em espaços de excelência e colaboração!
              </Typography>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="h2" component="h1" align="center" fontSize="2.50rem" fontWeight={700} sx={{ mb: 2 }}>
            Introdução ao treinamento
          </Typography>
          <span className="aspect-box">
            <iframe width="896" height="504" src="https://www.youtube.com/embed/5y7j0lRQbAI" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </span>
          <Grid container spacing={2} sx={{ mt: 5, mb: 2 }}>
            <Grid item md={6}>
              <Typography variant="body2" align="justify">
                O clima organizacional refere-se às percepções compartilhadas dos membros de uma organização sobre o ambiente de trabalho, influenciadas por fatores como comunicação, liderança e práticas de gestão.
                Um clima positivo promove satisfação, motivação e produtividade, enquanto um clima negativo pode levar ao desengajamento e rotatividade.<br/><br/>
                A pesquisa de clima organizacional é essencial para entender essas percepções e seu impacto no comportamento dos colaboradores e no desempenho da empresa.
                A pesquisa utiliza ferramentas como a Escala de Clima Organizacional (ECO) e tem evoluído ao longo do tempo, destacando sua relevância na gestão de pessoas.
                É importante diferenciar essa pesquisa da pesquisa de satisfação, tema que será abordado nas aulas futuras.
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography variant="h3" component="h2" fontSize='23px' align="center" fontWeight={700} sx={{ mb: 3 }}>
                <NewReleasesIcon sx={{ fontSize: '19px' }}/> O que você vai aprender hoje:
              </Typography>
              <Typography variant="body2" component="ul" align="justify" sx={{ mr: 0 }}>
                <li>O conceito de clima organizacional e como ele reflete as percepções dos colaboradores.</li>
                <li>Os fatores que moldam esse clima, como comunicação interna, liderança e práticas de gestão.</li>
                <li>Qual a diferença entre uma pesquisa de clima organizacional e uma pesquisa de satisfação.</li>
                <li>A importância das pesquisas de clima para identificar áreas de melhoria e otimização do desempenho organizacional.</li>
                <li>Os objetivos da pesquisa de clima organizacional.</li>
              </Typography>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="h2" component="h1" align="center" fontSize="2.75rem" fontWeight={700} sx={{ mb: 2 }}>
            Pesquisa de satisfação ou pesquisa de clima
          </Typography>
          <span className="aspect-box">
            <iframe width="896" height="504" src="https://www.youtube.com/embed/niXm6oYQArU" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </span>
          <Grid container spacing={2} sx={{ mt: 5, mb: 2 }}>
            <Grid item md={7}>
              <Typography variant="body2" align="justify">
              Neste módulo, abordaremos o planejamento da pesquisa de clima nas organizações, começando pela definição dos objetivos específicos da pesquisa. Os objetivos incluem identificar a diferença entre pesquisa de clima organizacional e de satisfação, escolher instrumentos validados, apresentar dimensões a serem avaliadas, divulgar e aplicar a pesquisa.
              <br/><br />
              Focaremos na escala ECO (Escala de Clima Organizacional), por ser válida e fidedigna, assegurando dados confiáveis por meio de testes psicométricos, sendo uma ferramenta multidimensional que avalia aspectos como liderança, comunicação e relacionamento entre colegas.
            </Typography>
            </Grid>
            <Grid item md={5}>
              <Typography variant="h3" component="h2" fontSize='23px' align="center" fontWeight={700} sx={{ mb: 3 }}>
                <NewReleasesIcon sx={{ fontSize: '19px' }}/> O que você vai aprender hoje:
              </Typography>
              <Typography variant="body2" component="ul" align="justify" sx={{ mr: 0 }}>
                <li>Meios de divulgação da pesquisa.</li>
                <li>Conscientização dos funcionários.</li>
                <li>Incentivo à participação.</li>
                <li>Importância da garantia do anonimato.</li>
              </Typography>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Typography variant="h2" component="h1" align="center" fontSize="2.50rem" fontWeight={700} sx={{ mb: 2 }}>
            O que é uma pesquisa de clima organizacional
          </Typography>
          <span className="aspect-box">
          <iframe width="896" height="504" src="https://www.youtube.com/embed/mCWL-k3JE20"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </span>
          <Grid container spacing={2} sx={{ mt: 5, mb: 2 }}>
            <Grid item md={7}>
              <Typography variant="body2" align="justify">
              A conscientização dos funcionários é crucial para o sucesso da pesquisa de clima organizacional. É fundamental que os colaboradores entendam a importância da pesquisa e seus benefícios, já que ela serve como uma ferramenta para melhorar o ambiente de trabalho. Quanto mais sinceras forem as respostas, mais precisos serão os resultados, por isso é essencial incentivar a participação de todos.
              <br/><br/>
              Um maior número de respostas oferece um retrato mais fiel do clima organizacional, permitindo à empresa identificar problemas e áreas de melhoria. Uma participação ampla resulta em um cenário mais realista, o que facilita a implementação de ações eficazes. Por fim, garantir o anonimato dos respondentes é fundamental para que se sintam à vontade para responder honestamente. 
              <br/><br/>
              O próximo módulo abordará a análise e interpretação dos resultados da pesquisa. Agradecemos a atenção de todos!
            </Typography>
            </Grid>
            <Grid item md={5}>
              <Typography variant="h3" component="h2" fontSize='23px' align="center" fontWeight={700} sx={{ mb: 3 }}>
                <NewReleasesIcon sx={{ fontSize: '19px' }}/> O que você vai aprender hoje:
              </Typography>
              <Typography variant="body2" component="ul" align="justify" sx={{ mr: 0 }}>
                <li>Meios de divulgação da pesquisa</li>
                <li>Conscientização dos funcionários.</li>
                <li>Incentivo à participação.</li>
                <li>Importância da garantia do anonimato.</li>
              </Typography>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Typography variant="h2" component="h1" align="center" fontSize="2.50rem" fontWeight={700} sx={{ mb: 2 }}>
            Objetivos da Pesquisa de Clima
          </Typography>
          <span className="aspect-box">
          <iframe width="896" height="504" src="https://www.youtube.com/embed/Mo5c1jFU_ds" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </span>
          <Grid container spacing={2} sx={{ mt: 5, mb: 2 }}>
            <Grid item md={7}>
              <Typography variant="body2" align="justify">
              Após a nossa jornada em aprender sobre o que é clima organizacional e a sua importância nas primeiras aulas, e também, sobre como planejar a nossa pesquisa no módulo 2, e como aplicar esta pesquisa no módulo 3, chegamos ao último módulo.
              <br/><br/>
              No módulo 4 abordaremos sobre a análise e interpretação dos resultados da pesquisa de clima organizacional, culminando na elaboração de um relatório de devolutiva após coletar e análise dos dados através do questionário ECO, pois é fundamental realizar uma análise de forma simples e sistemática.
            </Typography>
            </Grid>
            <Grid item md={5}>
              <Typography variant="h3" component="h2" fontSize='23px' align="center" fontWeight={700} sx={{ mb: 3 }}>
                <NewReleasesIcon sx={{ fontSize: '19px' }}/> O que você vai aprender hoje:
              </Typography>
              <Typography variant="body2" component="ul" align="justify" sx={{ mr: 0 }}>
                <li>Como realizar a análise dos dados.</li>
                <li>Interpretação dos resultados obtidos.</li>
                <li>Processo de produção de relatório.</li>
                <li>Análise de dados.</li>
              </Typography>
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
    </Grid>
    </ThemeProvider>
  );
}