import React, { useState, useEffect } from 'react';
import './App.css';

import Home from './Components/Home';
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SubCategory from './Components/SubCategory';
import Login from './Components/Login';
import Register from './Components/Register';
import CreateRecipeForm from './Components/CreateRecipeForm';
import axios from 'axios';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";


function App() {
  const history = useHistory();
  // console.log(history);
  const [recipes, setRecipes] = useState([]);
  const [ingredientsList, setIngredientsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState(history.location.pathname.split('/recipes')[1]);
  //  console.log(url);

  useEffect(() => {
    const fetchData = async () => {
       await axios.get('http://127.0.0.1:8000/api/recipes')
        .then(response => {
          console.log(response.data.data);
          setRecipes(response.data.data);
          setIsLoading(false);
        })
        .catch(error => {
          console.log(error)
        });
      }
      fetchData();
    }, []);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/ingredients')
      .then(response => {
        // console.log(response.data.data);
        setIngredientsList(response.data.data);
      })
      .catch(error => {
        console.log(error)
      });
    // console.log(ingredientsList);
  }, []);

  // console.log(recipes);
  const optionsArray = [{
    type: 'Meal Type',
    image: './Images/panini.jpeg',
    subtypes: ['breakfast', 'lunch', 'dinner', 'dessert'],
    url: '/mealtype',
  }, {
    type: 'Main Ingredient',
    image: './Images/chowder.jpeg',
    subtypes: ['chicken', 'broccoli', 'rice', 'eggs'],
    url: '/mainingredient'
  }, {
    type: 'Diet',
    image: './Images/pizza.jpeg',
    subtypes: ['gluten free', 'keto', 'vegetarian', 'dairy free'],
    url: '/diet'
  }, {
    type: 'Cooking Method',
    image: './Images/poundcake.jpeg',
    subtypes: ['quick prep', 'slow cooker', 'instant pot', 'one dish'],
    url: '/cookingmethod'
  }]

  return (

    <Switch>
      <Route path="/profile">
        <Navbar optionsArray={optionsArray} setUrl={setUrl} goTo={setUrl} />
        <Profile />
        {/* <CreateRecipeForm optionsArray={optionsArray} recipes={recipes} ingredientsList={ingredientsList} /> */}
       
      </Route>

      <Route path="/login">
        <Navbar optionsArray={optionsArray} setUrl={setUrl} goTo={setUrl} />
        <Login />
        
      </Route>

      <Route path="/register">
        <Navbar optionsArray={optionsArray} setUrl={setUrl} goTo={setUrl} />
        <Register />
       
      </Route>


      <Route path="/recipes/:url">
        <Navbar optionsArray={optionsArray} setUrl={setUrl} />
        <SubCategory url={url} options={optionsArray} recipes={recipes} goTo={setUrl} ingredientsList={ingredientsList} />
       
      </Route>

      <Route path="/">
        <Navbar optionsArray={optionsArray} setUrl={setUrl} goTo={setUrl} />
        <Home optionsArray={optionsArray} setUrl={setUrl} />
       
      </Route>


    </Switch>
  );
}

function Wrapper() {
  return (
    <Router>
      <App />
     <Footer />
    </Router>
  )
}
export default Wrapper;
