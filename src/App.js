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
import Footer from './components/Footer';
import CarouselFront from './components/Carousel';
import LiveAuction from './components/LiveAuction';
import Profile from './components/Profile';
import { useNavigate } from "react-router";
import CalendarOutside from "./components/Calendar";
import ClosedAuctions from "./components/ClosedAuctions";
import Chatbot from "./components/Chatbot";
import './App.css';

//SIGNUP
function App() {
  const navigate = useNavigate()
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
        handleCloseSI();      
      }
    catch(err){
      console.log(err.response.data)
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

//console.log(user)
const handleSubmit = async (event) => {
  event.preventDefault()
  //console.log(event.target.price.value)
  
  console.log(event.target.myImage.files[0])
	let formData = new FormData()
	formData.append('imageUrl', event.target.myImage.files[0])
	
	let imgResponse = await axios.post(`${API_URL}/upload`, formData)
  let userId = user._id
  //console.log(user._id) 
  let newArt = {
    artist: event.target.artist.value,
    title: event.target.title.value,
    year: event.target.year.value,
    image: imgResponse.data.image,
    price: event.target.price.value,
    days: event.target.days.value,
    user: userId

  }
  
  let response = await axios.post(`${API_URL}/sellform`, newArt)
  setArt([response.data, ...art])
  navigate('/')
}

//LOGOUT
const handleLogout = async () => {
  await axios.post(`${API_URL}/logout`, {}, {withCredentials: true})
  setUser(null)
}

/* if (fetchingUser) {
  return <p>Loading user info. . . </p>
} */
//console.log(myError)



  return (
    <div>
    <ButtonAppBar onLogout={handleLogout} user={user} openSI={handleOpenSI} handleCloseSI={handleCloseSI} open={handleOpen} handleClose={handleClose}/>
    <SignUpDialog open={open} handleClose={handleClose} />
    <SignInDialog openSI={openSI} handleCloseSI={handleCloseSI} onSignIn={handleSignIn} myError={myError}/>
    <Chatbot />

    <Routes>
      <Route path="/signin" element={<SignIn myError={myError} onSignIn={handleSignIn} />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/sellform" element={<AddArt btnSubmit={handleSubmit} user={user} />}   />
      <Route path="/" element={<ArtListing art={art}/>} />
      <Route path="/auctiondetail/:artId" element={<ArtDetail user={user} />}/>
      <Route path='/live' element={<LiveAuction />} />
      <Route path='*' element={<PageNotFound />}/>
      <Route path='/user' element={<Profile user={user}/>} />
      <Route path='/furureauctions' element={<CalendarOutside />}  />
      <Route path='/closedauctions' element={<ClosedAuctions />} />
    </Routes>
    <Footer />
  </div>
  );
}

export default App;




