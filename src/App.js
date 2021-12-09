import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import axios from "axios";
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import ModalDialog from "./components/ModalDialog";


function App() {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="Auth">
      <Button variant="contained" color="primary" onClick={handleOpen}>Signup</Button>
      <ModalDialog open={open} handleClose={handleClose} />
      </div>
    {/*  <MyNav onLogout={handleLogout} user={user} /> */}
    <h1>hello people :)</h1>
      <Routes>
   
      </Routes>
    </div>
  );
}

export default App;