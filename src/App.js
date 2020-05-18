import React, { useState, useEffect } from 'react';
import './App.css';

import Home from './Components/Home';
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SubCategory from './Components/SubCategory';
import Login from './Components/Login';
import Register from './Components/Register';
import Create from './Components/Create';
import View from './Components/View';
import AllRecipes from './Components/AllRecipes';
import RecipeDisplay from './Components/RecipeDisplay';
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
  const [tagsList, setTagsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState(history.location.pathname.split('/recipes')[1]);
  const [id, setId] = useState('');
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

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/tags')
      .then(response => {
        // console.log(response.data.data);
        setTagsList(response.data.data);
      })
      .catch(error => {
        console.log(error)
      });

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
    subtypes: ['chicken', 'broccoli', 'rice', 'eggs', 'cheese', 'chocolate', 'beef', 'potatoes', 'beans', 'tomatoes', 'corn', 'peaches'],
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
    <>
      <Navbar optionsArray={optionsArray} setUrl={setUrl} goTo={setUrl} setId={setId} />
      <Switch>
        <Route path="/profile">
          <Profile setUrl={setUrl} recipes={recipes} goTo={setUrl} ingredientsList={ingredientsList} tagsList={tagsList} />
        </Route>

        <Route path="/create">
          <Profile />
          <Create recipes={recipes} ingredientsList={ingredientsList} tagsList={tagsList} />
        </Route>

        <Route path="/view">
          <Profile setId={setId} />
          <View recipes={recipes} setUrl={setUrl} goTo={setUrl} setId={setId} />
        </Route>

        <Route path="/recipe">
          <RecipeDisplay recipes={recipes} id={id} />
        </Route>

        <Route path="/all">
          <AllRecipes recipes={recipes} setId={setId} />
        </Route>


        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>


        <Route path="/recipes/:url">
          <SubCategory url={url} options={optionsArray} recipes={recipes} goTo={setUrl} ingredientsList={ingredientsList} setId={setId} />
        </Route>

        <Route exact path="/">
          <Home optionsArray={optionsArray} setUrl={setUrl} />
        </Route>

      </Switch>
      <Footer />
    </>
  );
}

function Wrapper() {
  return (
    <Router>
      <App />
    </Router>
  )
}
export default Wrapper;
