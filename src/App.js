import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import SignUpDialog from "./components/SignUpDialog";
import SignInDialog from './components/SignInDialog';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ArtListing from "./components/ArtListing";
import {API_URL} from './config'
import ArtDetail from "./components/ArtDetail";
import AddArt from "./components/AddArt";
import ResponsiveAppBar from './components/ResponsiveAppBar'
import PageNotFound from './components/404notFound'
import Landing from "./components/Landing";

//SIGNUP
function App() {

  const [art, setArt] = useState([])
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

  //ART
  useEffect(() => {

    const getData = async () => {
        let response  = await axios.get(`${API_URL}/art`)
        setArt(response.data)
    }
    getData()
}, [])

const handleSubmit = async (event) => {
  event.preventDefault()
  console.log(event.target.year.value)
  let newArt = {
    artist: event.target.artist.value,
    title: event.target.title.value,
    year: event.target.year.value,
    image: event.target.image.value,
    price: event.target.price.value
    
  }
  
  let response = await axios.post(`${API_URL}/sellform`, newArt)
  setArt([response.data, ...art])
}

  return (
    <div>
      <ResponsiveAppBar/>
      <div className="Auth">
      <Button variant="contained" color="primary" onClick={handleOpen}>Sign up</Button>
      <SignUpDialog open={open} handleClose={handleClose} />
      <Button variant="contained" color="primary" onClick={handleOpenSI}>Log in</Button>
      <SignInDialog openSI={openSI} handleCloseSI={handleCloseSI} />
      </div>
    {/*  <MyNav onLogout={handleLogout} user={user} /> */}
      <Routes>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/sellform" element={<AddArt btnSubmit={handleSubmit}/>}   />
        <Route path="/" element={<ArtListing art={art}/>} />
        <Route path="/auctiondetail/:artId" element={<ArtDetail />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/' element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;




