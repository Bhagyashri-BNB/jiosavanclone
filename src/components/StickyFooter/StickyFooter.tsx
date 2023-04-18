import { Typography, useTheme } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import FavoriteIcon from '@mui/icons-material/Favorite'
import Divider from '@mui/material/Divider';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export const StickyFooter = () => {
    const theme=useTheme();
    const Icons=[
        SkipPreviousIcon,
        PlayArrowIcon,
        SkipNextIcon
        
    ]
  return (
    <div>
        
        <Box
      position="fixed"
      bottom="0"
      width="100%"
      height="60px"
      sx={{
        backgroundColor: theme.status.navbar,
        display: 'flex',
        justifyContent: 'left',
        // alignItems: 'left',
        paddingLeft:'10px', // Add left padding here to avoid overlapping of button on SideBar
        // alignItems:"center"
      }}
    >        
    <BottomNavigation
        showLabels
    >
<Divider />
    <Typography sx={{mt:1 , marginLeft:"20px"}}>Songs</Typography>
  {/* <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} /> */}
      {Icons.map((Icon, index)=>{
        return <Icon key={index} sx={{mt:1, alignItems: "left"}}/>
        })}
</BottomNavigation>
    </Box>
    </div>
  )
}
