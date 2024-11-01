'use client'
import React from 'react';
import { Box, Typography } from '@mui/material';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

export default function SubTitle(props: { children: React.ReactNode }) {
  return (
    <Typography variant="h3" component="h2" fontSize='18px' fontWeight={700} sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
      <Box className="subTitle subTitleIcon" component="span"><NewReleasesIcon /></Box>
      <span>{props.children}</span>
    </Typography>
  );
}