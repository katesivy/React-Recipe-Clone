import React, { useState, useEffect } from 'react';
import './App.css';

import Home from './Components/Home';
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SubCategory from './Components/SubCategory';
import Login from './Components/Login';
import Register from './Components/Register';
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
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState(history.location.pathname.split('/recipes')[1]);
  // console.log(url);
  useEffect(() => {

    const fetchData = async () => {
      const result = await axios.get('http://127.0.0.1:8000/api/recipes');
      setRecipes(result.data.data);
      console.log(result.data.data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  // console.log(recipes);
  const optionsArray = [{
    type: 'Meal Type',
    image: './Images/panini.jpeg',
    subtypes: ['breakfast', 'lunch', 'dinner', 'dessert'],
    subtypeImage: ['/Image/eggs.png', '/Image/poptarts.png', '/Image/pizza.png',
      '/Image/ribeye.png'],
    url: '/mealtype',
  }, {
    type: 'Main Ingredient',
    image: './Images/chowder.jpeg',
    subtypes: ['chicken', 'beef', 'rice', 'eggs'],
    subtypeImage: ['/Image/eggs.png', '/Image/poptarts.png', '/Image/pizza.png',
      '/Image/ribeye.png'],
    url: '/mainingredient'
  }, {
    type: 'Diet',
    image: './Images/pizza.jpeg',
    subtypes: ['gluten free', 'keto', 'vegetarian', 'dairy free'],
    subtypeImage: ['/Image/eggs.png', '/Image/poptarts.png', '/Image/pizza.png',
      '/Image/ribeye.png'],
    url: '/diet'
  }, {
    type: 'Cooking Method',
    image: './Images/poundcake.jpeg',
    subtypes: ['quick prep', 'slow cooker', 'instant pot', 'one dish'],
    subtypeImage: ['/Image/eggs.png', '/Image/poptarts.png', '/Image/pizza.png',
      '/Image/ribeye.png'],
    url: '/cookingmethod'
  }]

  return (

    <Switch>
      <Route path="/profile">
        <Navbar optionsArray={optionsArray} setUrl={setUrl} goTo={setUrl} />
        <Profile />
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
        <SubCategory url={url} options={optionsArray} recipes={recipes} goTo={setUrl} />
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
