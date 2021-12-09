import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import axios from "axios";
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ModalDialog from "./components/ModalDialog";
import ArtListing from "./components/ArtListing";
import {API_URL} from './config'
import ArtDetail from "./components/ArtDetail";
import AddArt from "./components/AddArt";

function App() {

  const [art, setArt] = useState([])

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

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
      <div className="Auth">
      <Button variant="contained" color="primary" onClick={handleOpen}>Signup</Button>
      <ModalDialog open={open} handleClose={handleClose} />
      </div>
    {/*  <MyNav onLogout={handleLogout} user={user} /> */}
    
    <h1>hello people :)</h1>
      <Routes>


   <Route path="/sellform" element={<AddArt btnSubmit={handleSubmit}/>}   />
   <Route path="/" element={<ArtListing art={art}/>} />
   <Route path="/auctiondetail/:artId" element={<ArtDetail />} />
      </Routes>
    </div>
  );
}

export default App;