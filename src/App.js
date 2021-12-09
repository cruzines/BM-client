import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import SignUpDialog from "./components/SignUpDialog";
import SignInDialog from './components/SignInDialog';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';


function App() {

//SIGNUP
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
   const handleClose = () => {
    setOpen(false);
  };
//SIGNIN
  const [openSI, setOpenSI] = useState(false);
  const handleOpenSI = () => {
    setOpenSI(true);
  };
  const handleCloseSI = () => {
    setOpenSI(false);
  };

  return (
    <div>
      <div className="Auth">
      <Button variant="contained" color="primary" onClick={handleOpenSI}>Sign in</Button>
      <SignInDialog openSI={openSI} handleCloseSI={handleCloseSI} />
      <Button variant="contained" color="primary" onClick={handleOpen}>Sign up</Button>
      <SignUpDialog open={open} handleClose={handleClose} />
      </div>
    {/*  <MyNav onLogout={handleLogout} user={user} /> */}
      <Routes>
        <Route  path="/signin" element={<SignIn />}/>
        <Route  path="/signup" element={<SignUp />}/>
      </Routes>
    </div>
  );
}

export default App;
