import * as React from "react";
import Typography from "@mui/material/Typography";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useTheme } from "@mui/material";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Grid } from "@mui/material";

interface props{
    text: string
}

const SidebarItem: React.FC<props> = ({text}) => {
  const theme = useTheme();

  
  return (
    <>
      <Grid
        container
        padding={0.5}
        sx={{
            cursor:"pointer",
          backgroundColor: theme.status.navbar
         
        }}
      >
        <Grid
          item
          xs={2}
        //   sx={{
        //     marginLeft: "1rem",
        //     color: active === true ? "white" : "black",
        //   }}
        >
          {text=== "Users" && (
            <PersonOutlineOutlinedIcon sx={{ marginTop: "0.5rem", fontFamily: "Poppins" }} />
          )}
          {text === "Roles" && (
            <MilitaryTechOutlinedIcon sx={{ marginTop: "0.5rem", fontFamily: "Poppins" }} />
          )}
          {text === "Companies" && (
            <BusinessOutlinedIcon sx={{ marginTop: "0.5rem" , fontFamily: "Poppins"}} />
          )}
          {text === "Wholesalers" && (
            <GroupAddOutlinedIcon sx={{ marginTop: "0.5rem", fontFamily: "Poppins" }} />
          )}
        </Grid>
        <Grid item xs={3}>
          <Typography
            sx={{
            //   color: active === true ? "white" : "black",
              marginTop: "0.5rem",
              width: "90px"
            }}
          >
            {text}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          {/* <ArrowForwardIosIcon
            fontSize="small"
            sx={{
              position: "relative",
              left: "5rem",
              top: "0.6rem",
            //   color: active === true ? "white" : theme.palette.primary.main,
            }}
          /> */}
        </Grid>
      </Grid>
    </>
  );
};

export default SidebarItem;

