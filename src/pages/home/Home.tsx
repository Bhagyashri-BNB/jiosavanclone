import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, useTheme } from "@mui/material";
import { images } from "../../utils/constants/images"
import Sidebar from "../Sidebar/Sidebar"
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab"
import AddIcon from '@mui/icons-material/Add';
import Music from '../Music/Music';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { Footer } from '../../components/Footer/Footer';
import "./navbar.css"


const drawerWidth = 220;
const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));
export default function ButtonAppBar() {
    const theme = useTheme();
    return (
        <Box
            // sx={{ flexGrow: 1 }}
            sx={{ 
                display: "flex",
                // flexGrow: 1
                 }}>
            <CssBaseline />
            <AppBar
                elevation={0}
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    background: theme.status.navbar,
                    
                }}
            >
                <Toolbar >
                    <img src={images.logo} alt="logo" width="149px" height="42px"></img>
                    <LightTooltip title="Music">
                    <Typography  sx={{ marginLeft: "13px", color: "black", fontFamily: "jiosaavn" }} className="clickable-text">Music</Typography>
                    </LightTooltip>
                     <LightTooltip title="Shows & Podcast">
                     <Typography sx={{ marginLeft: "15px", color: "black" }} className="clickable-text">Podcast</Typography>
                    </LightTooltip>
                    <Typography sx={{ marginLeft: "20px", width: "90px", color: "black" }} className="clickable-text">Go Pro</Typography>
                    <TextField
                        label="Search"
                        InputProps={{
                            endAdornment: <SearchIcon sx={{ color: 'grey' }} />
                          }}
                          sx={{ marginLeft: '210px', width: '350px' }}
                    />  
                    {/* <SearchIcon sx={{color: "grey" }}></SearchIcon>  */}
                    <Typography sx={{ marginLeft: "230px", width: "150px", color: "black" }} className="clickable-text">Music Language</Typography>
                    <LightTooltip title="Login">
                    <PrimaryButton sx={{ marginLeft: "10px", color: "black" }} className="clickable-text">Login</PrimaryButton>
                    </LightTooltip>
                    <LightTooltip title="SignUp">
                    <PrimaryButton sx={{ marginLeft: "10px", color: "black", width: "140px" }} className="clickable-text">Sign Up</PrimaryButton>
                    </LightTooltip>
                </Toolbar>
                <Divider />
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
            >
                <Toolbar />
                <Divider />
                <Box sx={{ overflow: "auto",  maxWidth: '100%' ,fontWeight: 500 }}>
                    <Sidebar text="BROWSE" />
                    <Sidebar text="New Release" />
                    <Sidebar text="Top Charts" />
                    <Sidebar text="Top Plalist" />
                    <Sidebar text="Podcast" />
                    <Sidebar text="Top Artist" />
                    <Sidebar text="Radio" />
                    <Sidebar text="LIBRARY" />
                    <Sidebar text="History" />
                    <Sidebar text="Songs" />
                    <Sidebar text="Albums" />
                    <Sidebar text="Podcast" />
                    <Sidebar text="Artist" />

                    <Fab variant="extended" sx={{
                        borderColor: "#2bc5b4",
                        background: theme.status.navbar,
                        color: "#2bc5b4"
                    }}>
                        <AddIcon sx={{ mr: 1 }} />
                        New Playlist
                    </Fab>
                </Box>
            </Drawer>
            
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Music />
                <Footer />

            </Box>
        </Box>
    );
}