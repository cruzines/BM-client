import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import axios from "axios";


function App() {

  
  return (
    <div>
    {/*  <MyNav onLogout={handleLogout} user={user} /> */}
    <h1>hello people :)</h1>
     {/*  <Routes>
        <Route  path="/signin" element={<SignIn myError={myError} onSignIn={handleSignIn} />}/>
        <Route  path="/signup" element={<SignUp />}/>
      </Routes> */}
    </div>
  );
}

export default App;