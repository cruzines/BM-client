import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import SignUpDialog from "./components/SignUpDialog";
import SignInDialog from "./components/SignInDialog";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ArtListing from "./components/ArtListing";
import { API_URL } from "./config";
import ArtDetail from "./components/ArtDetail";
import AddArt from "./components/AddArt";
import ButtonAppBar from "./components/ButtonAppBar";
import PageNotFound from "./components/404notFound";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import { useNavigate } from "react-router";
import CalendarOutside from "./components/Calendar";
import ClosedAuctions from "./components/ClosedAuctions";
import Chatbot from "./components/Chatbot";
import ComingSoon from "./components/ComingSoon";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Press from "./components/Press";
import ArtAdded from "./components/ArtAdded";
import ArtBidded from "./components/ArtBidded";
import EditArt from "./components/EditArt";
import PrivateAuction from "./components/PrivateAuction";
import "./App.css";


//SIGNUP
function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [myError, setError] = useState(null);
  const [fetchingUser, setFetchingUser] = useState(true);

  const [art, setArt] = useState([]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const getData = async () => {
      // -----------------------------------------------
      // we make the user requst here to know if the user is logged in or not
      try {
        let userResponse = await axios.get(`${API_URL}/user`, {
          withCredentials: true,
        });
        setUser(userResponse.data);
        setFetchingUser(false);
      } catch (err) {
        // the request will fail if the user is not logged in
        setFetchingUser(false);
      }
      // -----------------------------------------------
    };

    getData();
  }, []);
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
    e.preventDefault();
    try {
      let newUser = {
        email: e.target.email.value,
        password: e.target.password.value,
      };
      console.log(e.target);
      let response = await axios.post(`${API_URL}/signin`, newUser, {
        withCredentials: true,
      });
      setUser(response.data);
      handleCloseSI();
    } catch (err) {
      console.log(err.response.data);
      setError(err.response.data);
    }
  };

  //ART
  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(`${API_URL}/art`);
      setArt(response.data);
    };
    getData();
  }, []);

  //console.log(user)
  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log(event.target.price.value)

    console.log(event.target.myImage.files[0]);
    let formData = new FormData();
    formData.append("imageUrl", event.target.myImage.files[0]);

    let imgResponse = await axios.post(`${API_URL}/upload`, formData);
    let userId = user._id;
    //console.log(user._id)
    let newArt = {
      artist: event.target.artist.value,
      title: event.target.title.value,
      year: event.target.year.value,
      image: imgResponse.data.image,
      price: event.target.price.value,
      days: event.target.days.value,
      user: userId,
    };

    let response = await axios.post(`${API_URL}/sellform`, newArt);
    setArt([response.data, ...art]);
    navigate("/");
  };

  const handleEdit = async (event, id) => {
    event.preventDefault();

    //console.log(event.target.myImage.files[0])
    let formData1 = new FormData();
    formData1.append("imageUrl", event.target.myImage.files[0]);

    let imgResponse = await axios.post(`${API_URL}/upload`, formData1);
    console.log(imgResponse);
    let editedArt = {
      artist: event.target.artist.value,
      title: event.target.title.value,
      year: event.target.year.value,
      image: imgResponse.data.image,
      price: event.target.price.value,
      days: event.target.days.value,
    };
    //console.log(editedArt, id)
    let response = await axios.patch(
      `${API_URL}/user/added/edit/${id}`,
      editedArt,
      { withCredentials: true }
    );

    console.log(response.data);

    let updatedArt = art.map((elem) => {
      if (elem._id == id) {
        elem.artist = response.data.artist;
        elem.title = response.data.title;
        elem.year = response.data.year;
        elem.image = response.data.image;
        elem.price = response.data.price;
        elem.days = response.data.days;
      }
      return elem;
    });

    setArt(updatedArt);
    navigate("/user");
  };

  const handleDelete = async (id) => {
    console.log(id);
    await axios.delete(`${API_URL}/art/${id}`);

    let filteredArt = art.filter((elem) => {
      return elem._id !== id;
    });

    setArt(filteredArt);
    navigate("/user");
  };

  //LOGOUT
  const handleLogout = async () => {
    await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
    setUser(null);
  };

  if (fetchingUser) {
    return <p>Loading user info. . . </p>;
  }
  //console.log(myError)

  return (
    <div>
      <ButtonAppBar
        onLogout={handleLogout}
        user={user}
        openSI={handleOpenSI}
        handleCloseSI={handleCloseSI}
        open={handleOpen}
        handleClose={handleClose}
      />
      <SignUpDialog open={open} handleClose={handleClose} />
      <SignInDialog
        openSI={openSI}
        handleCloseSI={handleCloseSI}
        onSignIn={handleSignIn}
        myError={myError}
      />
      <Chatbot />

      <Routes>
        <Route
          path="/signin"
          element={<SignIn myError={myError} onSignIn={handleSignIn} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/sellform"
          element={<AddArt btnSubmit={handleSubmit} user={user} />}
        />
        <Route path="/" element={<ArtListing art={art} />} />
        <Route
          path="/auctiondetail/:artId"
          element={<ArtDetail user={user} />}
        />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/user" element={<Profile user={user} />} />
        <Route path="/futureauctions" element={<CalendarOutside />} />
        <Route path="/closedauctions" element={<ClosedAuctions />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/theteam" element={<Team />} />
        <Route path="/press" element={<Press />} />
        <Route path="/user" element={<Profile user={user} />} />
        <Route
          path="/user/added/:user"
          element={<ArtAdded user={user} art={art} btnDelete={handleDelete} />}
        />
        <Route path="/user/bid" element={<ArtBidded user={user} art={art} />} />

        <Route
          path="/user/added/edit/:artId"
          element={<EditArt btnEdit={handleEdit} user={user} art={art} />}
        />
        <Route path="/privateauction" element={<PrivateAuction />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
