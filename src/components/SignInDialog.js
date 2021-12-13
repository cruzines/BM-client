import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import SignIn from './SignIn';

const SignInDialog = ({ openSI, handleCloseSI, onSignIn, myError}) => {
  return (
    <Dialog open={openSI} onClose={handleCloseSI}>
      <SignIn handleCloseSI={handleCloseSI} onSignIn={onSignIn} myError={myError} />
    </Dialog>
  );
};

export default SignInDialog;