import React from 'react'
import { Box, Typography } from '@mui/material'
import { Divider, useTheme } from "@mui/material";
export const Footer = () => {
    const theme = useTheme();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
  {/* your page content */}
  <Box
    position="fixed"
    bottom="0"
    width="100%"
    height="30px"
    sx={{
      backgroundColor: theme.status.navbar,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Typography sx={{ mt: 2 }}>©2023 Saavn Media Limited All rights reserved.</Typography>
  </Box>
</div>
  )
}
