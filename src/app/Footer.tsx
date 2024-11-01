"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <Box p={3} pt={0} sx={{ mb: 6, maxWidth: 'calc(100vw - 46px)', display: "flex", justifyContent: "center" }}>
      <Box
        component="footer"
        className="footer"
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2} className="layerBottom">
          <Grid item sm={7} xs={12}>
            <Typography
              className="contactBox"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <Box
                className="subTitle contato"
                component="span"
                display="inline-flex"
              >
                <EmailIcon />
                <span>Contato</span>
              </Box>
              <Box
                className="subTitle email"
                component="span"
                display="inline-flex"
              >
                <span>treinamentopesquisaclimapsi@gmail.com</span>
              </Box>
            </Typography>
          </Grid>
          <Grid item sm={5} xs={12}>
            <Typography align="right" fontStyle="italic" fontSize="14px">
              Av. Pará, 1720- Bloco 2C <br />
              Universidade Federal de Uberlândia,
              <br />
              Campus Umuarama, Uberlândia- MG
              <br />
              38405-240
            </Typography>
          </Grid>
        </Grid>
        <svg className="bottomWave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#84CEC4" fillOpacity="1" d="M0,0L21.8,48C43.6,96,87,192,131,218.7C174.5,245,218,203,262,170.7C305.5,139,349,117,393,112C436.4,107,480,117,524,144C567.3,171,611,213,655,192C698.2,171,742,85,785,69.3C829.1,53,873,107,916,112C960,117,1004,75,1047,90.7C1090.9,107,1135,181,1178,218.7C1221.8,256,1265,256,1309,250.7C1352.7,245,1396,235,1418,229.3L1440,224L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
        </svg>
      </Box>
    </Box>
  );
}
