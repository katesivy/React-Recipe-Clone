import React, { useState, useEffect } from 'react';
import './App.css';
//  import ReactDOM from 'react-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
// library.add(fab, faCheckSquare, faCoffee)
import Home from './Components/Home';
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';
// import Login from './Components/Login';
import Footer from './Components/Footer';
import RecipeList from './Components/RecipeList';
import SubCategory from './Components/SubCategory';
import OptionsPage from './Components/OptionsPage';
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
    type: 'meal type',
    image: './Images/panini.jpeg',
    subtypes: ['breakfast', 'lunch', 'dinner', 'dessert'],
    url: '/mealtype'
  }, {
    type: 'main ingredient',
    image: './Images/chowder.jpeg',
    subtypes: ['chicken', 'beef', 'rice', 'eggs'],
    url: '/mainingredient'
  }, {
    type: 'diet',
    image: './Images/pizza.jpeg',
    subtypes: ['gluten free', 'keto', 'vegetarian', 'dairy free'],
    url: '/diet'
  }, {
    type: 'cooking method',
    image: './Images/poundcake.jpeg',
    subtypes: ['quick prep', 'slow cooker', 'instant pot', 'one dish'],
    url: '/cookingmethod'
  }]
  
  return (

    <Switch>
      <Route path="/profile">
        <Profile />
      </Route>

      <Route path="/recipes/1">
        <RecipeList options={optionsArray}  recipes={recipes} />
      </Route>

      <Route path="/recipes/:url">
        <SubCategory url={url} options={optionsArray} recipes={recipes} />
      </Route>

      <Route path="/">

        {/* <Login /> */}
        <Home optionsArray={optionsArray} setUrl={setUrl} />

      </Route>
    </Switch>
  );
}

function Wrapper() {
  return (
    <Router>
      <Navbar />
      <App />
      <Footer />
    </Router>
  )
}
export default Wrapper;
