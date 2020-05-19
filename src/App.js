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
  const [recipes, setRecipes] = useState([]);
  const [ingredientsList, setIngredientsList] = useState([]);
  const [tagsList, setTagsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState(history.location.pathname.split('/recipes')[1]);
  const [recipeId, setRecipeId] = useState(0);
  // const [userInfo, setUserInfo] = useState({});

  // axios
  useEffect(() => {
    const fetchData = async () => {
      await axios.get('http://127.0.0.1:8000/api/recipes')
        .then(response => {
          console.log(response.data.data);
          setRecipes(response.data.data);
          window.localStorage.setItem("recipes", JSON.stringify(response.data.data));
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
        setIngredientsList(response.data.data);
        // window.localStorage.setItem("ingredients", JSON.stringify(response.data.data));
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
        // window.localStorage.setItem("tags", JSON.stringify(response.data.data));
      })
      .catch(error => {
        console.log(error)
      });

  }, []);

  function storeId(recipeId) {
    setRecipeId(recipeId);
    localStorage.setItem("id", JSON.stringify(recipeId))
  };

  // function storeUserInfo(userInfo) {
  //   setUserInfo(userInfo);
  //   localStorage.setItem("user", JSON.stringify(userInfo))
  // };

  const optionsArray = [{
    type: 'Meal Type',
    image: './Images/pizza.jpeg',
    subtypes: ['breakfast', 'lunch', 'dinner', 'dessert'],
    url: '/mealtype',
  }, {
    type: 'Main Ingredient',
    image: './Images/cake.jpeg',
    subtypes: ['chicken', 'broccoli', 'rice', 'eggs', 'cheese', 'chocolate', 'beef', 'potatoes', 'beans', 'tomatoes', 'corn', 'peaches'],
    url: '/mainingredient'
  }, {
    type: 'Diet',
    image: './Images/chowder.jpeg',
    subtypes: ['gluten free', 'keto', 'vegetarian', 'dairy free'],
    url: '/diet'
  }, {
    type: 'Cooking Method',
    image: './Images/tourtiere.jpeg',
    subtypes: ['quick prep', 'slow cooker', 'instant pot', 'one dish'],
    url: '/cookingmethod'
  }]

  return (
    <>
      <Navbar optionsArray={optionsArray} setUrl={setUrl} goTo={setUrl} />
      <Switch>
        <Route path="/profile">
          <Profile setUrl={setUrl} recipes={recipes} setUrl={setUrl} ingredientsList={ingredientsList} tagsList={tagsList} />
        </Route>

        <Route path="/create">
          <Profile />
          <Create recipes={recipes} ingredientsList={ingredientsList} tagsList={tagsList} />
        </Route>

        <Route path="/view">
          <Profile />
          <View recipes={recipes} setUrl={setUrl}  />
        </Route>

        <Route path="/recipe">
          <RecipeDisplay recipes={recipes} recipeId={recipeId} />
        </Route>

        <Route path="/all">
          <AllRecipes recipes={recipes} storeId={storeId} />
        </Route>

        <Route path="/register">
          <Register setUrl={setUrl}/>
        </Route>
      
        <Route path="/login">
          <Login setUrl={setUrl} />
        </Route>


        <Route path="/recipes/:url">
          <SubCategory url={url} options={optionsArray} recipes={recipes} goTo={setUrl} ingredientsList={ingredientsList} storeId={storeId}/>
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
