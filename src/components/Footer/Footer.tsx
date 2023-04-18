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
import Grid from '@mui/material/Grid';
export const Footer = () => {
    const Icons=[
        FacebookIcon,
        TwitterIcon,
        YouTubeIcon,
        InstagramIcon,
        LinkedInIcon
    ]
    const footerMenu=[
      'Top Artists',
      'Top Actors',
      'Browsw',
      'Devotional Songs',
      'Language',
      'Artist Originals',
      'Comapany'
    ]

    const topartist=[
      'Neha Kakkar',
      'Arijit Singh',
     ' Badshah',
      'Atif Aslam',
      'Justin Bieber',
     ' Himesh Reshammiya',
     ' Lata Mangeshkar',
     ' Diljit Dosanjh',
     ' Ed Sheeran',
      'Shreya Goshal',
     ' Sanam Puri',
      'Armaan Malik'
    ]

    const topactors=[
      'Salman Khan',
      'Allu Arjun',
      'Sunny Leone',
      'Amitabh Bachchan',
      'Varun Dhawan'
    ]

    const browse=[
      'New Releases',
      'Featured Playlists',
     ' Weekly Top Songs',
      'Top Artists',
     ' Top Charts',
      'Top Radios'
    ]

    const devotionalsongs=[
      'Krishna Bhajan',
      'Mahamrityunjaya Mantra',
      'Deva Shree Ganesha',
      'Hanuman Chalisa',
      'Gayatri Mantra',
      'Mata Ke Bhajan',
      'Durga Chalisa',
      'Maiya Yashoda',
      'Bhakti Geet'
    ]

    const language=[
      'Hindi Songs',
      'Punjabi Songs',
      'Bhojpuri Songs',
      'Tamil Songs',
      'Telugu Songs',
      'Kannada Songs',
      'Gujarati Songs',
      'Marathi Songs',
      'Odia Songs',
      'Rajasthani Songs',
      'Haryanvi Songs',
      'Assamese Songs',
      'Malayalam Songs',
      'Bengali Songs'
    ]

    const artistoriginals=[
      'Zaeden - Dooriyan',
      'Raghav - Sufi',
      'SIXK - Dansa',
      'Siri - My Jam',
      'Lost Stories, "Mai Ni Meriye"'

    ]

    const comapany=[
      'About Us',
      'Culture',
      'Blog',
      'Jobs',
      'Press',
      'Advertise',
      'Terms & Privacy',
      'Help & Support',
      'Grievances',
      'JioSaavn Artist Insights',
      'JioSaavn YourCast'
    ]
    const colors = ['#3B5998','#1DA1F2', '#FF0000', '#FF0000', '#0077B5'];
      const theme = useTheme();
    return (
      <div style={{ display: 'flex', flexDirection: 'column',  }}>
        <Box
         sx={{
          display: { xs: "block", md: "flex" },
          marginLeft: { xs: "1rem", md: "1rem" },
          marginRight: { xs: "0rem", md: "1rem" },
          marginTop: "1rem",
          marginBottom: "2rem"}}
          >
          {footerMenu.map((menu,index)=>{
              return(
                <React.Fragment key={index}>
                      <Box sx={{ flex:1 , gap: 4   }}>
                        
                        <Typography sx={{fontWeight: 'bold', fontFamily:'Lato,sans-serif', fontSize: '10px'}}>{menu}</Typography>
                        {menu === 'Top Artists' &&
                          topartist.map((tartist,index)=>{
                            return(
                              <Typography key={index} sx={{fontFamily:'Lato,sans-serif', fontSize: '10px'}}>{tartist}</Typography>
                            )
                          })
                        }
                        {menu === 'Top Actors' &&
                          topactors.map((tactors,index)=>{
                            return(
                              <Typography key={index} sx={{fontFamily:'Lato,sans-serif', fontSize: '10px'}}>{tactors}</Typography>
                            )
                          })
                        }
                        {menu === 'Browsw' &&
                          browse.map((browse,index)=>{
                            return(
                              <Typography key={index} sx={{fontFamily:'Lato,sans-serif', fontSize: '10px'}}>{browse}</Typography>
                            )
                          })
                        }
                        {menu === 'Devotional Songs' &&
                          devotionalsongs.map((ds,index)=>{
                            return(
                              <Typography key={index} sx={{fontFamily:'Lato,sans-serif', fontSize: '10px'}}>{ds}</Typography>
                            )
                          })
                        }
                        {menu === 'Language' &&
                          language.map((la,index)=>{
                            return(
                              <Typography key={index} sx={{fontFamily:'Lato,sans-serif', fontSize: '10px'}}>{la}</Typography>
                            )
                          })
                        }
                        {menu === 'Artist Originals' &&
                          artistoriginals.map((ao,index)=>{
                            return(
                              <Typography key={index} sx={{fontFamily:'Lato,sans-serif', fontSize: '10px'}}>{ao}</Typography>
                            )
                          })
                        }
                         {menu === 'Comapany' &&
                          comapany.map((ca,index)=>{
                            return(
                              <Typography key={index} sx={{fontFamily:'Lato,sans-serif', fontSize: '10px'}}>{ca}</Typography>
                            )
                          })
                        }
                        
                      </Box>
                </React.Fragment>
              )
          })}
        </Box>
        <Divider />
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
