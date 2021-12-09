import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import axios from "axios";
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import ModalDialog from "./components/ModalDialog";
import ResponsiveAppBar from './components/ResponsiveAppBar'
import PageNotFound from './components/404notFound'
import Landing from "./components/Landing";


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
      <ResponsiveAppBar/>
      <Button variant="contained" color="primary" onClick={handleOpen}>Signup</Button>
      <ModalDialog open={open} handleClose={handleClose} />
      </div>
    {/*  <MyNav onLogout={handleLogout} user={user} /> */}
      <Routes>
      {/* <Route  path="/signin" element={<SignIn myError={myError} onSignIn={handleSignIn} />}/>
      <Route  path="/signup" element={<SignUp />}/> */}
      <Route path='*' element={<PageNotFound />} />
      <Route path='/' element={<Landing />} />
      <Route path='/signIn' element={<SignIn />} />
      <Route path='/signUp' element={<SignUp />} />




   
      </Routes>
    </div>
  );
}

export default App;