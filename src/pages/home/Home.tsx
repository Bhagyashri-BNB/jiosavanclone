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
import { useMediaQuery } from '@material-ui/core';
import Grid from '@mui/material/Grid';

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
    const matches = useMediaQuery('(min-width:600px)');
    return (
        <Box
            display="flex"
            justifyContent="center">
            <CssBaseline />
            <AppBar
                elevation={0}
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    background: theme.status.navbar,

                }}
            >
                <Toolbar>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item xs={12} sm="auto">
                            <img src={images.logo} alt="logo" width="149px" height="42px"></img>
                        </Grid>
                        <Grid item xs={12} sm="auto">
                            <LightTooltip title="Music">
                                <Typography sx={{ color: "black", fontFamily: "jiosaavn" }} className="clickable-text">Music</Typography>
                            </LightTooltip>
                        </Grid>
                        <Grid item xs={12} sm="auto">
                            <LightTooltip title="Shows & Podcast">
                                <Typography sx={{ color: "black" }} className="clickable-text">Podcast</Typography>
                            </LightTooltip>
                        </Grid>
                        <Grid item xs={12} sm="auto">
                            <Typography sx={{ width: "90px", color: "black" }} className="clickable-text">Go Pro</Typography>
                        </Grid>
                        <Grid item xs={12} sm>
                            <TextField
                                label="Search"
                                InputProps={{
                                    endAdornment: <SearchIcon sx={{ color: 'grey' }} />
                                }}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm="auto">
                            <Typography sx={{ width: "150px", color: "black" }} className="clickable-text">Music Language</Typography>
                        </Grid>
                        <Grid item xs={12} sm="auto">
                            <LightTooltip title="Login">
                                <PrimaryButton sx={{ color: "black" }} className="clickable-text">Login</PrimaryButton>
                            </LightTooltip>
                        </Grid>
                        <Grid item xs={12} sm="auto">
                            <LightTooltip title="SignUp">
                                <PrimaryButton sx={{ color: "black", width: "140px" }} className="clickable-text">Sign Up</PrimaryButton>
                            </LightTooltip>
                        </Grid>
                    </Grid>
                    <Divider />
                </Toolbar>
            </AppBar>
            {/* <Drawer
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
                
                <Box sx={{ overflow: "scroll",  maxWidth: '100%' ,fontWeight: 500 }}>
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

            </Box> */}
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
                <Grid container  direction="column" sx={{  maxWidth: '100%', maxHeight:'100%'}}>
                    <Grid item>
                        <Sidebar text="BROWSE" />
                    </Grid>
                    <Grid item>
                        <Sidebar text="New Release" />
                    </Grid>
                    <Grid item>
                        <Sidebar text="Top Charts" />
                    </Grid>
                    <Grid item>
                        <Sidebar text="Top Plalist" />
                    </Grid>
                    <Grid item>
                        <Sidebar text="Podcast" />
                    </Grid>
                    <Grid item>
                        <Sidebar text="Top Artist" />
                    </Grid>
                    <Grid item>
                        <Sidebar text="Radio" />
                    </Grid>
                    <Grid item>
                        <Sidebar text="LIBRARY" />
                    </Grid>
                    <Grid item>
                        <Sidebar text="History" />
                    </Grid>
                    <Grid item>
                        <Sidebar text="Songs" />
                    </Grid>
                    <Grid item>
                        <Sidebar text="Albums" />
                    </Grid>
                    <Grid item>
                        <Sidebar text="Podcast" />
                    </Grid>
                    {/* <Grid item>
                        <Sidebar text="Artist" />
                    </Grid> */}

                    <Grid item sx={{ mt: 'auto' }}>
                        <Fab variant="extended" sx={{
                            borderColor: "#2bc5b4",
                            background: theme.status.navbar,
                            color: "#2bc5b4"
                        }}>
                            <AddIcon sx={{ mr: 1 }} />
                            New Playlist
                        </Fab>
                    </Grid>
                </Grid>
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Grid container direction="column" spacing={3}>
                    <Grid item>
                        <Music />
                    </Grid>
                    <Grid item>
                        <Footer />
                    </Grid>
                </Grid>
            </Box>

        </Box>
    );
}