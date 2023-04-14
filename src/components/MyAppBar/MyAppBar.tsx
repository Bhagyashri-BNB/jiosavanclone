import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function MyAppBar() {
  return (
    <AppBar position="static">
      <Toolbar style={{ overflowX: 'auto' }}>
        <Typography variant="h6">My App Title</Typography>
        {/* Add more toolbar items here */}
      </Toolbar>
    </AppBar>
  );
}
export default MyAppBar;
