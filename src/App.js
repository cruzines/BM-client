import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';
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
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './components/Footer';
import CarouselFront from './components/Carousel';
import LiveAuction from './components/LiveAuction';
import './App.css';

//SIGNUP
function App() {

  const [user, setUser] = useState (null);

  const [myError, setError] = useState(null);
  /* const [fetchingUser, setFetchingUser] = useState(true)
 */
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
    //console.log('hello')
    e.preventDefault()
    try {
      let newUser = {
      email: e.target.email.value,
      password: e.target.password.value
        }
        console.log (e.target)
        let response = await axios.post(`${API_URL}/signin`, newUser, {withCredentials: true})
        setUser(response.data)
      
      }
    catch(err){
      //console.log(err)
      setError(err.response.data)
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

//LOGOUT
const handleLogout = async () => {
  await axios.post(`${API_URL}/logout`, {}, {withCredentials: true})
  setUser(null)
}

/* if (fetchingUser) {
  return <p>Loading user info. . . </p>
} */

  return (
    <div>
    <ButtonAppBar onLogout={handleLogout} user={user} openSI={handleOpenSI} handleCloseSI={handleCloseSI} open={handleOpen} handleClose={handleClose}/>
    <SignUpDialog open={open} handleClose={handleClose} />
    <SignInDialog openSI={openSI} handleCloseSI={handleCloseSI} onSignIn={handleSignIn}/>
    <CarouselFront />

    <Routes>
      <Route path="/signin" element={<SignIn myError={myError} onSignIn={handleSignIn} />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/sellform" element={<AddArt btnSubmit={handleSubmit}/>}   />
      <Route path="/" element={<ArtListing art={art}/>} />
      <Route path="/auctiondetail/:artId" element={<ArtDetail />} />
      <Route path='*' element={<PageNotFound />} />
      <Route path='/live' element={<LiveAuction />} />
    </Routes>
    <Footer />
  </div>
  );
}

export default App;




