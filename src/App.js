import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import axios from "axios";
import ArtListing from "./components/ArtListing";
import {useState, useEffect} from 'react';
import {API_URL} from './config'
import AddArt from "./components/AddArt";
import MyNav from "./components/MyNav";

function App() {


  
  const [art, setArt] = useState([])

  useEffect(() => {

    const getData = async () => {
        let response  = await axios.get(`${API_URL}/art`)
        setArt(response.data)
  
    }

    getData()

}, [])

  
  return (
    <div>
      <MyNav />
       <AddArt /> 
      
    </div>
  );
}

export default App;