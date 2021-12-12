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

const SignIn = (props) => {
 const {onSignIn, handleCloseSI} = props

  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className={classes.root} onSubmit={onSignIn}>
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        name="email"
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        name="password"
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
