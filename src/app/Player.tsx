'use client'
import React from 'react';
import { Box, Typography } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';

export default function Player(props: { videoUri: string, title: string, subTitle?: string }) {
  return (
    <>
      <Typography variant="h2" component="h1" fontSize="2rem" fontWeight={700} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        {props.subTitle && <Box className="subTitle" component="span">{props.subTitle} <StarsIcon /></Box>}
        {props.title}
      </Typography>
      <Box className="aspect-box" sx={{ mb: 6 }}>
        <iframe
          width="896"
          height="504"
          src={`https://www.youtube.com/embed/${props.videoUri}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
        ></iframe>
      </Box>
    </>
  );
}