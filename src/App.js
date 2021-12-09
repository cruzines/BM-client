import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import axios from "axios";
import ArtListing from "./components/ArtListing";
import {useState, useEffect} from 'react';
import {API_URL} from './config'
import AddArt from "./components/AddArt";

function App() {


  {/*
  const [art, setArt] = useState([])

  useEffect(() => {

    const getData = async () => {
        let response  = await axios.get(`${API_URL}/art`)
        setArt(response.data)
  
    }

    getData()

}, [])


const handleSubmit = async (event, id) => {
  event.preventDefault()
  let newSale = {
    artist: event.target.artist.value,
    title: event.target.title.value,
    year: event.targuet.year.value,
    image: event.target.image.value,
    price: event.targuet.image.value
  }
  console.log(newSale)
  let response = await axios.post(`${API_URL}/sellform/${id}`, newSale)
  setArt([response.data, ...art])
}


*/}
  
  return (
    <div>
      {/* <AddArt /> 
      <ArtListing /> 
    <MyNav onLogout={handleLogout} user={user} /> */}
    <h1>hello people :</h1>
{/*
      <Routes>
      <Route path="/add-form" element={<AddArt btnSubmit={handleSubmit}/> } />
      </Routes> 
*/}
    </div>
  );
}

export default App;