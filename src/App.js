import React from 'react';
import './App.css';
// import ReactDOM from 'react-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
// library.add(fab, faCheckSquare, faCoffee)
import Home from './Components/Home';
import Profile from './Components/Profile';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Footer from './Components/Footer';
import CategoryPage from './Components/CategoryPage';
import SubCategoryType from './Components/SubCategoryType';
import SubCategoryMains from './Components/SubCategoryMains';
import SubCategoryDiet from './Components/SubCategoryDiet';
import SubCategoryMethod from './Components/SubCategoryMethod';
import RecipeList from './Components/RecipeList';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/categories">
            <CategoryPage />
          </Route>

          <Route path="/type">
            <SubCategoryType />
          </Route>
          <Route path="/mains">
            <SubCategoryMains />
          </Route>
          <Route path="/diet">
            <SubCategoryDiet />
          </Route>
          <Route path="/method">
            <SubCategoryMethod />
          </Route>
          <Route path="/recipeList">
            <RecipeList />
          </Route>

          <Route path="/">
            <Navbar />
            <Home />
            <Main />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Category() {

  let { categoryId } = useParams();

  return (
    <div>
      <h3>{categoryId}</h3>
    </div>
  );
}