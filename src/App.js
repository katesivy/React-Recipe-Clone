import React, { useState, useEffect } from 'react';
import './App.css';

import Home from './Components/Home';
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SubCategory from './Components/SubCategory';
import Login from './Components/Login';
import Register from './Components/Register';
import UserRecipes from './Components/UserRecipes';
import AllRecipes from './Components/AllRecipes';
import RecipeDisplay from './Components/RecipeDisplay';
import RecipeForm from './Components/RecipeForm';
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

   const apiLink =   "https://recipe-final-project.uc.r.appspot.com/api";
  //  const apiLink =  "http://127.0.0.1:8000/api";
 
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(apiLink + '/recipes')
        .then(response => {
          console.log(response.data.data);
          setRecipes(response.data.data);
          window.localStorage.setItem("recipes", JSON.stringify(response.data.data));
          setIsLoading(false);
        })
        .catch(error => {
          console.log(error)
          // window.location.reload(false);
        });
    }
    fetchData();
  }, []);

  useEffect(() => {
    axios.get(apiLink + '/ingredients')
      .then(response => {
        setIngredientsList(response.data.data);
      })
      .catch(error => {
        console.log(error)
      });
      // window.location.reload(false);
    // console.log(ingredientsList);
  }, []);

  useEffect(() => {
    axios.get(apiLink + '/tags')
      .then(response => {
        // console.log(response.data.data);
        setTagsList(response.data.data);
      })
      .catch(error => {
        console.log(error)
      });
      // window.location.reload(false);
  }, []);

  function storeId(recipeId) {
    setRecipeId(recipeId);
    localStorage.setItem("id", JSON.stringify(recipeId))
  };

  const optionsArray = [{
    type: 'Meal Type',
    image: '/pizza.jpeg',
    subtypes: ['breakfast', 'lunch', 'dinner', 'dessert'],
    url: '/mealtype',
  }, {
    type: 'Main Ingredient',
    image: '/cake.jpeg',
    subtypes: ['chicken', 'broccoli', 'rice', 'eggs', 'cheese', 'chocolate', 'beef', 'potatoes', 'beans', 'tomatoes', 'corn', 'peaches'],
    url: '/mainingredient'
  }, {
    type: 'Diet',
    image: '/chowder.jpeg',
    subtypes: ['gluten free', 'keto', 'vegetarian', 'dairy free'],
    url: '/diet'
  }, {
    type: 'Cooking Method',
    image: '/tourtiere.jpeg',
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
          <RecipeForm recipes={recipes} ingredientsList={ingredientsList} tagsList={tagsList} />
        </Route>

        <Route path="/modify">
          <Profile />
          <RecipeForm recipes={recipes} ingredientsList={ingredientsList} tagsList={tagsList} />
        </Route>

        {/* <Route path="/delete">
          <Profile />
          <UserRecipes recipes={recipes} storeId={storeId}  />
        </Route> */}

        <Route path="/view">
          <Profile />
          <UserRecipes recipes={recipes} storeId={storeId}  />
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
