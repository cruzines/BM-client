import './App.css';
import * as React from "react";
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
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './components/Footer';
import CarouselFront from './components/Carousel';
import 'bootstrap'



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
  //console.log(event.target.price.value)

  console.log(event.target.myImage.files[0])
	let formData = new FormData()
	formData.append('imageUrl', event.target.myImage.files[0])
	
	let imgResponse = await axios.post(`${API_URL}/upload`, formData)

  let newArt = {
    artist: event.target.artist.value,
    title: event.target.title.value,
    year: event.target.year.value,
    image: imgResponse.data.image,
    price: event.target.price.value
    
  }
  
  let response = await axios.post(`${API_URL}/sellform`, newArt)
  setArt([response.data, ...art])
}

  return (
    <div>
      <ResponsiveAppBar/>
   <CarouselFront />
      {/*
      <div className="Auth">
      <Button variant="contained" color="primary" onClick={handleOpen}>Sign up</Button>
      <SignUpDialog open={open} handleClose={handleClose} />
      <Button variant="contained" color="primary" onClick={handleOpenSI}>Log in</Button>
      <SignInDialog openSI={openSI} handleCloseSI={handleCloseSI} />
     
      </div> */}
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
      <Footer />
    </div>
  );
}

export default App;




