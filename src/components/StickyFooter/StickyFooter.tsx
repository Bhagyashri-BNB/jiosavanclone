import { Typography, useTheme } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import FavoriteIcon from '@mui/icons-material/Favorite'
import Divider from '@mui/material/Divider';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Grid from '@mui/material/Grid';
export const StickyFooter = () => {
    const theme = useTheme();
    const Icons = [
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
               height="80px"
               sx={{
                 backgroundColor: theme.status.navbar,
                //  display: 'flex',
                //  justifyContent: 'left',
                 flex: 1,
                //  paddingLeft: '1px', // Add left padding here to avoid overlapping of button on SideBar
               }}   
            >
                <Divider />
                <Grid >
                    <Grid item xs={2}>
                    <Typography sx={{ mt: 0 }}>Songs</Typography>
                    </Grid>
                    <Grid item xs={10} justifyContent="center" alignItems="center">
                    {Icons.map((Icon, index) => {
                    return <Icon key={index} sx={{ mt: 0, marginLeft:'2px'}} />
                    })}
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
