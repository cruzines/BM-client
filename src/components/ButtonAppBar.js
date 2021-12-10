import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//import {useContext} from 'react';
//import {UserContext} from '../context/app.context'
//import { Link } from 'react-router-dom'

function ButtonAppBar(props) {

  /* const {user} = useContext(UserContext) */
  console.log(props)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          <Button onClick={props.openSI} color="secondary">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;