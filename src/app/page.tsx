'use client'
import React, { useState } from 'react';
import { Montserrat } from 'next/font/google'
import { Tabs, Tab, Typography, Box, Grid, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { teal, grey } from '@mui/material/colors';
import ChecklistIcon from '@mui/icons-material/Checklist';
import PersonIcon from '@mui/icons-material/Person';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import SubTitle from './SubTitle';
import Player from './Player';
import Footer from './Footer';

const montserrat = Montserrat({
  weight: ['500', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

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
    typography: {
      fontFamily: [
        montserrat.style.fontFamily,
        '-apple-system',
        'Roboto',
        '"Helvetica Neue"',
        '"Segoe UI"',
        'Arial',
        'sans-serif',
      ].join(','),
      fontWeightRegular: 500,
      fontWeightBold: 800,
    },
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
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 3, pb: 4, position: 'relative'}}>
          <PersonIcon className='tabIcon' />
          <ShowChartIcon className='tabIcon2'/>
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
            <Tab label="Modulo 0" />
            <Tab label="Modulo 1" />
            <Tab label="Modulo 2" />
            <Tab label="Modulo 3" />
            <Tab label="Modulo 4" />
            <Tab label="Avaliação" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Typography variant="h2" component="h1" align="center" fontSize="2.50rem" fontWeight={700} sx={{ mb: 4 }} >
          Bem-vindo ao nosso curso sobre Pesquisa de Clima Organizacional!
          </Typography>
          <Grid container spacing={2} mb={3}>
            <Grid item md={6} xs={12} style={{ marginBottom: '32px'}}>
              <Box className="aspect-box" sx={{ transform: 'rotate(-4deg) scale(.95)'}}>
                <img alt="" src="./organizacional.png" />
              </Box>
            </Grid>
            <Grid item md={6} xs={12} style={{ paddingLeft: '32px', paddingRight: '16px' }}>
              <Typography variant="body2" align="justify">
              Neste curso, você irá explorar as ferramentas e técnicas essenciais para avaliar e entender o ambiente de trabalho em qualquer organização.<br /><br />

              A pesquisa de clima organizacional é crucial para identificar áreas de melhoria, promover a satisfação dos colaboradores e aumentar a produtividade.
              Prepare-se para adquirir conhecimentos práticos e teóricos que vão transformar a forma como você percebe e gerencia a cultura organizacional.
              Vamos começar essa jornada juntos e aprender a transformar ambientes de trabalho em espaços de excelência e colaboração!
              </Typography>
            </Grid>
          </Grid>
          <Grid  container spacing={2} mb={3}>
            <Grid item sm={3} xs={6}>
              <Box className="photo-box" mb={2}>
                <img alt="Alexia" src="./1.jpeg" />
              </Box>
              <Typography align="center">Alexia</Typography>
              <img className="waveLine" src="./wave.png" />
            </Grid>
            <Grid item sm={3} xs={6}>
              <Box className="photo-box" mb={2}>
                <img alt="Gabriele" src="./2.jpeg" />
              </Box>
              <Typography align="center">Gabriele</Typography>
              <img className="waveLine" src="./wave.png" />
            </Grid>
            <Grid item sm={3} xs={6}>
              <Box className="photo-box" mb={2}>
                <img alt="Giovana" src="./3.jpeg" />
              </Box>
              <Typography align="center">Giovana</Typography>
              <img className="waveLine" src="./wave.png" />
            </Grid>
            <Grid item sm={3} xs={6}>
              <Box className="photo-box" mb={2}>
                <img alt="Iza" src="./4.jpeg" />
              </Box>
              <Typography align="center">Iza</Typography>
              <img className="waveLine" src="./wave.png" />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Player subTitle="Introdução" title="Objetivos do Curso" videoUri="5y7j0lRQbAI" />
          <Grid container spacing={4} sx={{ mt: 5, mb: 2, mr: 0, pl: 2, pr: 2  }}>
            <Grid item md={6} xs={12}>
              <Typography align="justify" variant="body2">
                Como objetivo do curso, buscaremos explorar as ferramentas e técnicas essenciais para avaliar
                e entender o ambiente de trabalho, em qualquer organização através da pesquisa de clima,
                que é crucial para identificar áreas de melhoria, promover a satisfação dos colaboradores e aumentar a produtividade.
              </Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography align="justify" variant="body2">
                Nossos objetivos serão te ensinar a identificar a diferença entre pesquisa de clima organizacional e de satisfação,
                definir os objetivos da pesquisa de clima, escolher instrumentos validados e compatíveis com a necessidade da empresa,
                apresentar as dimensões a serem avaliadas, a melhor forma de divulgar e aplicar a pesquisa, e como realizar é analisar os resultados obtidos. 
              </Typography>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <Player subTitle="Aula 1" title="O que é pesquisa de Clima Organizacional" videoUri="niXm6oYQArU" />
        <Player subTitle="Aula 2" title="Pesquisa de satisfação ou Pesquisa de Clima" videoUri="3FbkxUZ_DQ0" />
        <Player subTitle="Aula 3" title="Objetivo da pesquisa de Clima Organizacional" videoUri="h_rXB3D2fgg" />
          <Grid container spacing={3} sx={{ mt: 5, mb: 2, mr: 0, pl: 2, pr: 2  }}>
          <Grid item md={6} xs={12}>
              <Typography variant="body2" align="justify">
                O clima organizacional refere-se às percepções compartilhadas dos membros de uma organização sobre o ambiente de trabalho, influenciadas por fatores como comunicação, liderança e práticas de gestão.
                Um clima positivo promove satisfação, motivação e produtividade, enquanto um clima negativo pode levar ao desengajamento e rotatividade.<br/><br/>
                A pesquisa de clima organizacional é essencial para entender essas percepções e seu impacto no comportamento dos colaboradores e no desempenho da empresa.
                A pesquisa utiliza ferramentas como a Escala de Clima Organizacional (ECO) e tem evoluído ao longo do tempo, destacando sua relevância na gestão de pessoas.
                É importante diferenciar essa pesquisa da pesquisa de satisfação, tema que será abordado nas aulas futuras. 
              </Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <SubTitle>O que você vai aprender nesse modulo:</SubTitle>
              <Typography variant="body2" component="ul" align="justify" sx={{ mr: 0 }}>
                <li>O conceito de clima organizacional e como ele reflete as percepções dos colaboradores;</li>
                <li>Os fatores que moldam esse clima, como comunicação interna, liderança e práticas de gestão;</li>
                <li>Qual a diferença entre uma pesquisa de clima organizacional e uma pesquisa de satisfação;</li>
                <li>A importância das pesquisas de clima para identificar áreas de melhoria e otimização do desempenho organizacional;</li>
                <li>Os objetivos da pesquisa de clima organizacional.</li>
              </Typography>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Player subTitle="Aula 1" title="Planejamento da pesquisa de Clima Organizacional" videoUri="sVzpAiQqerY" />
          <Player subTitle="Aula 2" title="Etapas da pesquisa de Clima Organizacional" videoUri="GhNxevWiGWw" />
          <Grid container spacing={3} sx={{ mt: 5, mb: 2, mr: 0, pl: 2, pr: 2  }}>
            <Grid item md={7} xs={12}>
              <Typography variant="body2" align="justify">
              Neste módulo, abordaremos o planejamento da pesquisa de clima nas organizações, começando pela definição dos objetivos específicos da pesquisa.
              Os objetivos incluem identificar a diferença entre pesquisa de clima organizacional e de satisfação, escolher instrumentos validados, apresentar
              dimensões a serem avaliadas, divulgar e aplicar a pesquisa. 
              <br/><br/>
              Focaremos na escala ECO (Escala de Clima Organizacional), por ser validada e fidedigna, assegurando dados confiáveis por meio de testes psicométricos,
              sendo uma ferramenta multidimensional que avalia aspectos como liderança, comunicação e relacionamento entre colegas. 
            </Typography>
            </Grid>
            <Grid item md={5} xs={12}>
              <SubTitle>O que você vai aprender nesse modulo:</SubTitle>
              <Typography variant="body2" component="ul" align="justify" sx={{ mr: 0 }}>
                <li>Como planejar uma pesquisa de clima;</li>
                <li>Definir objetivos específicos da pesquisa;</li>
                <li>Escolha do instrumento adequado;</li>
                <li>Identificação de dimensões;</li>
                <li>Como divulgar, aplicar e analisar os resultados;</li>
              </Typography>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Player subTitle="Aula 1" title="Aplicação da Pesquisa de Clima Organizacional" videoUri="7EuBiJTQk10" />
          <Grid container spacing={3} sx={{ mt: 5, mb: 2, mr: 0, pl: 2, pr: 2  }}>
            <Grid item md={7} xs={12}>
              <Typography variant="body2" align="justify">
              A conscientização dos funcionários é crucial para o sucesso da pesquisa de clima organizacional. É fundamental que os colaboradores entendam a importância da pesquisa e seus benefícios, já que ela serve como uma ferramenta para melhorar o ambiente de trabalho.
              Quanto mais sinceras forem as respostas, mais precisos serão os resultados, por isso e essencial incentivar a participação de todos.
              <br/><br/>
              Um maior número de respostas oferece um retrato mais fiel do clima organizacional, permitindo à empresa identificar problemas e áreas de melhoria. Uma participação ampla resulta em um cenário mais realista, o que facilita a implementação de ações eficazes.
              Por fim, garantir o anonimato dos respondentes é fundamental para que se sintam à vontade para responder honestamente.
              <br/><br/>
              O próximo módulo abordará a análise e interpretação dos resultados da pesquisa.</Typography>
            </Grid>
            <Grid item md={5} xs={12}>
              <SubTitle>O que você vai aprender nesse modulo:</SubTitle>
              <Typography variant="body2" component="ul" align="justify" sx={{ mr: 0 }}>
                <li>Meios de divulgação da pesquisa;</li>
                <li>Conscientização dos funcionários.</li>
                <li>Incentivo a participação</li>
                <li>Importância da garantia do anonimato.</li>
              </Typography>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Player subTitle="Aula 1" title="Análise e interpretação de resultados" videoUri="Y7W_fACzupI" />
          <Player subTitle="Aula 2" title="Elaboração do Relatório" videoUri="aaipVIVF-pg" />
          <Grid container  spacing={3} sx={{ mt: 5, mb: 2, mr: 0, pl: 2, pr: 2  }}>
            <Grid item md={7} xs={12}>
              <Typography variant="body2" align="justify">
              Após a nossa jornada em aprender sobre o que é clima organizacional e a sua importância nas primeiras aulas, e também, sobre como planejar a nossa pesquisa no módulo 2, e como aplicar esta pesquisa no módulo 3, chegamos ao último módulo.
              <br/><br/>
              No módulo 4 abordaremos sobre a análise e interpretação dos resultados da pesquisa de clima organizacional, culminando na elaboração de um relatório de devolutiva após coletar e análise dos dados através do questionário ECO, pois é fundamental realizar uma análise de forma simples e sistemática.
              </Typography>
            </Grid>
            <Grid item md={5} xs={12}>
              <SubTitle>O que você vai aprender nesse modulo:</SubTitle>
              <Typography variant="body2" component="ul" align="justify" sx={{ mr: 0 }}>
                <li>Como realizar a análise dos dados.</li>
                <li>Interpretação dos resultados obtidos.</li>
                <li>Processo de produção de relatório.</li>
                <li>Análise de dados.</li>
              </Typography>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <Typography variant="h2" component="h1" align="center" fontSize="2.50rem" fontWeight={700} sx={{ mb: 8 }}>
            Avaliação do Treinamento sobre Pesquisa de Clima Organizacional.
          </Typography>
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              tabIndex={-1}
              startIcon={<ChecklistIcon />}
              size="large"
              href="https://docs.google.com/forms/d/e/1FAIpQLScwfeS0yqMGc3fQqRLpI27_xEJfrQ9rofAURv940sSbsMG3-Q/viewform"
            >
              Preencher Avaliação
            </Button>
          </Box>
          <Grid container spacing={4} sx={{ mt: 4, mb: 3, pl: 2, pr: 2 }}>
            <Grid item sm={6} xs={12}>
              <Typography variant="body2" align="justify">
                Agora que você completou as aulas do nosso treinamento sobre Pesquisa de Clima Organizacional, chegou o momento de realizar a Avaliação.
                Esta avaliação tem como objetivo entender sua experiência, identificar áreas de melhoria e garantir que os conteúdos apresentados atendam às suas expectativas e necessidades.
              </Typography>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Typography variant="body2" align="justify">
                As respostas do formulário são coletadas de forma anônima, garantindo o total sigilo dos participantes.
                Agradecemos imensamente por sua participação! Sua colaboração é essencial para o sucesso do nosso curso.
                Muito obrigado por dedicar seu tempo e percorrer conosco nesta jornada.
              </Typography>
            </Grid>
          </Grid>
        </TabPanel>
        <Footer />
      </Box>
    </Grid>
    </ThemeProvider>
  );
}