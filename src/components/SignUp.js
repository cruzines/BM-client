import React, { useState } from "react";
import { makeStyles, TextField, Button } from "@material-ui/core";
import axios from "axios";
import { API_URL } from "../config";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const SignUp = ({ handleClose }) => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    //console.log(firstName, lastName, email, password)
    e.preventDefault();

    let newUser = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    await axios.post(`${API_URL}/signup`, newUser, { withCredentials: true });
    handleClose();
  };

  return (
    <form className={classes.root} onSubmit={handleSignUp}>
      <TextField
        label="First Name"
        variant="filled"
        required
        value={firstName}
        name="firstName"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={lastName}
        name="lastName"
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <Button type="submit" variant="contained" color="primary">
          Sign up
        </Button>
        <Button variant="contained" color="secondary" onClick={handleClose}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default SignUp;
