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
import ButtonAppBar from './components/ButtonAppBar'
import PageNotFound from './components/404notFound'
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './components/Footer';
import CarouselFront from './components/Carousel';
import 'bootstrap'



//SIGNUP
function App() {

  const [user, setUser] = useState (null);

  const [myError, setError] = useState(null);
  /* const [fetchingUser, setFetchingUser] = useState(true) */

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

  const handleSignIn = async (e) => {
    console.log('hello')
    e.preventDefault()
    try {
      let newUser = {
      email: e.target.email.value,
      password: e.target.password.value
        }
        console.log (e.target)
        let response = await axios.post(`${API_URL}/signin`, newUser, {withCredentials: true})
        setUser(response.data)
        /* handleCloseSI(); */
      }
    catch(err){
      console.log(err)
      //setError(err.response.data)
    }
  }
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
/* if (fetchingUser) {
  return <p>Loading user info. . . </p>
} */
  return (
    <div>
      <ButtonAppBar openSI={handleOpenSI} handleCloseSI={handleCloseSI} open={handleOpen} handleClose={handleClose}/>
      
      {/* <Button variant="contained" color="primary" onClick={handleOpen}>Sign up</Button> */}
      <SignUpDialog open={open} handleClose={handleClose} />
     {/*  <Button variant="contained" color="primary" onClick={handleOpenSI}>Log in</Button> */}
      <SignInDialog openSI={openSI} handleCloseSI={handleCloseSI} onSignIn={handleSignIn}/>
     
    {/*  <MyNav onLogout={handleLogout} user={user} /> */}
    <CarouselFront />
      <Routes>
        <Route path="/signin" element={<SignIn myError={myError} onSignIn={handleSignIn} />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/sellform" element={<AddArt btnSubmit={handleSubmit}/>}   />
        <Route path="/" element={<ArtListing art={art}/>} />
        <Route path="/auctiondetail/:artId" element={<ArtDetail />} />
        <Route path='*' element={<PageNotFound />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;




