import React, { useState, useEffect } from 'react';
import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Signup() {

  function changePopup() {
    //port.postMessage("false");
    window.location.href="login.html";
  }

  return (
    <div style={styles.main}>
      <p style={styles.signupHeader}>Sign Up</p>
      <div style={styles.accountInput}>
        <Textfield
          id="username"
          label="Username"
          size="small"
          InputLabelProps={{
            style: {
              fontSize: 15
            }
          }}
          inputProps={{
            style: {
              fontSize: 15
            }
          }}
        />
      </div>
      <div style={styles.passwordInput}>
        <Textfield
          id="password"
          label="Password"
          InputLabelProps={{
            style: {
              fontSize: 15
            }
          }}
          inputProps={{
            style: {
              fontSize: 15
            }
          }}
        />
      </div>
      <div style={styles.signupButton}>
        <Button variant="outlined" size="small">Sign Up</Button>
      </div>
      <div>
        <p style={styles.backToLogin}><a href="login.html" onClick={() => changePopup()}>Back to login</a></p>
      </div>
    </div>
  )
}

function signUp() {
  chrome.browserAction.setPopup({popup: 'popup.html'});
}

const styles = {
  main: {
    width: '250px',
    height: '250px',
  },
  backToLogin: {
    position: 'absolute',
    left: '98px',
    top: '170px',
    fontSize: '8.5px',
  },
  signupHeader: {
    position: 'absolute',
    left: '95px',
    top: '5px',
    fontFamily: 'Roboto',
    fontSize: '20px'
  },
  accountInput: {
    position: 'absolute',
    left: '50px',
    top: '70px',
  },
  passwordInput: {
    position: 'absolute',
    left: '50px',
    top: '120px',
  },
  signupButton: {
    position: 'absolute',
    left: '90px',
    top: '210px'
  }
}

export default Signup;