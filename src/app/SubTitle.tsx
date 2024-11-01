'use client'
import React from 'react';
import { Box, Typography } from '@mui/material';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

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
    <Typography variant="h3" component="h2" fontSize='18px' fontWeight={700} sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
      <Box className="subTitle subTitleIcon" component="span"><NewReleasesIcon /></Box>
      <span>{props.children}</span>
    </Typography>
  );
}