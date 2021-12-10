import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import SignIn from './SignIn';

const SignInDialog = ({ openSI, handleCloseSI, onSignIn }) => {
  return (
    <Dialog open={openSI} onClose={handleCloseSI}>
      <SignIn handleCloseSI={handleCloseSI} onSignIn={onSignIn} />
    </Dialog>
  );
};

export default SignInDialog;