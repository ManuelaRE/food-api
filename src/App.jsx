import React from 'react';
import './App.css';
import firebase, { provider } from "./firebase";
import {useState, useEffect} from 'react';

import Routes from './containers/Routes';
import Nav from './components/Nav';


const App = () => {

  // SET USER AN AUTENTIFICATE USING GMAIL
  const [user, setUser] = useState(null);

  const signIn = () => {
    firebase.auth().signInWithRedirect(provider);
  };

  const signOut = () => {
    firebase
      .auth().signOut().then(() => {
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

  // API CALLS
  const API_KEY = `${process.env.REACT_APP_API_KEY}`;

  const [recipes, setRecipes] = useState([]);

  const cleanRecipeData = (recipe) => {
    const cleanedRecipe = {
      id: recipe.id,
      name: recipe.title,
      image: recipe.image,
      calories: recipe.nutrition.nutrients[0].amount,
    };
    return cleanedRecipe;
  }


  const grabRecipes = () => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&maxCalories=350&sort=random&number=1`)
    .then((res) => res.json())
    .then((res) => {
      const cleanRecipes = res.results.map(cleanRecipeData);
      console.log(cleanRecipes);
      setRecipes(cleanRecipes);
    })
    .catch((err) => {
      console.log(err);
    });
  };


  useEffect(() => {
    grabRecipes();
  }, [])

  return (
  
    <>
    <Nav 
      user={user}
      signIn={signIn}
      signOut={signOut}
    />
    <Routes user={user} recipes={recipes} />
    </>
  )
}

export default App;
