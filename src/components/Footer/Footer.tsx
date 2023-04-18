import React from 'react'
import { Box, Typography } from '@mui/material'
import { Divider, useTheme } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useState } from 'react';
export const Footer = () => {
    const Icons=[
        FacebookIcon,
        TwitterIcon,
        YouTubeIcon,
        InstagramIcon,
        LinkedInIcon
    ]
    
    const colors = ['#3B5998','#1DA1F2', '#FF0000', '#FF0000', '#0077B5'];
      const theme = useTheme();
    return (
      <div style={{ display: 'flex', flexDirection: 'column',  }}>
        
    <Box
      // position="fixed"
      bottom="0"
      width="100%"
      height="30px"
      sx={{
        backgroundColor: theme.status.navbar,
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'left',
        marginBottom: '60px'
      }}
    >
      <Typography sx={{ mt: 1 }}>©2023 Saavn Media Limited All rights reserved.</Typography>
      <Typography sx={{ mt: 1, marginLeft: "350px" }}>Follow us</Typography>
      {Icons.map((Icon, index) => {
              return <Icon key={index}  sx={{mt:1 , marginLeft:'4px',color: colors[index]}}/>;
            })}
      
    </Box>
    
      </div>

    )
  }
