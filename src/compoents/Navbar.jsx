import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    // <div style={{
    //     padding:"30px",
    //     display:"flex",
    //     gap:"20px",
    //     fontSize:"20px",
    //     border:"1px solid black"
       
    // }}>
    //     
    //   
    // </div>

    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="white"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography variant="h6" 
        component="div"sx={{ flexGrow: 1 }}>
        <Link to="/">Counter</Link>
        
      
        </Typography>
        <Typography variant="h6" 
        color='white'
        component="div"sx={{ flexGrow: 1 }}>
  
        <Link to="/TodoApp" underline='none'>Todo</Link>
      
        </Typography>

      </Toolbar>
    </AppBar>
  </Box>

  )
}

export default Navbar