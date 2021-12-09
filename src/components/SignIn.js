import React, { useState } from 'react';
import { makeStyles, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const SignIn = ({ handleCloseSI }) => {
  const classes = useStyles();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = e => {
    e.preventDefault();
    handleCloseSI();
  };

  return (
    <form className={classes.root} onSubmit={handleSignIn}>
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div>
        <Button variant="contained" onClick={handleCloseSI}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Sign in
        </Button>
      </div>
    </form>
  );
};

export default SignIn;