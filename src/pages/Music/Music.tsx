import { Container, Typography } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import  { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { useEffect } from 'react'
import SimplePaper from '../../components/Paper/SimplePaper'

const Music = () => {
    
  return(
  <>
      <Typography sx={{fontStyle: "bold",textAlign: 'left'}}>Trending New</Typography>
      <SimplePaper/>
    
    </>
  )
}

export default Music