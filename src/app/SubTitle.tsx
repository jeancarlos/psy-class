'use client'
import React, { useState } from 'react';
import { Typography } from '@mui/material';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import zIndex from '@mui/material/styles/zIndex';

export default function SubTitle(props: { children: React.ReactNode }) {
  const sx = {
    fontSize: '35px',
    color: '#84CEC4',
    position: 'absolute',
    top: '-6px',
    left: '0',
    zIndex: 2
  }
  const sx2 = {
    top: '-9px',
    position: 'absolute',
    color: '#000',
    fontSize: '41px',
    left: '0',
    zIndex: 1
  }
  return (
    <Typography variant="h3" component="h2" fontSize='23px' fontWeight={700} sx={{ mb: 3 }}>
      <span style={{position: "relative", display: 'block', width: '40px', height: '40px', marginRight: '10px', float: 'left'}}>
        <NewReleasesIcon sx={sx}/><NewReleasesIcon sx={{ ...sx, ...sx2 }}/>
      </span> {props.children}
    </Typography>
  );
}