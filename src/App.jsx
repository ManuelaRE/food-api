import React from 'react';
import './App.css';
import firebase, { provider } from "./firebase";
import {useState, useEffect} from 'react';

import Routes from './containers/Routes';


const App = () => {
  const [user, setUser] = useState(null);

  const signIn = () => {
    firebase.auth().signInWithRedirect(provider);
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  useEffect(() => { 
    getUser();
  })

  return (
    <>
    <Routes 
      user={user} 
      signIn={signIn}
      signOut={signOut}
    />
    </>
  )
}

export default App;
