import React from 'react';
import './App.css';
// import ReactDOM from 'react-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
// library.add(fab, faCheckSquare, faCoffee)
import Home from './Components/Home';
import Profile from './Components/Profile';
// import Categories from './Components/Categories';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Footer from './Components/Footer';
import CategoryPage from './Components/CategoryPage';
import SubCategory from './Components/SubCategory';


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
            <CategoryType />
          </Route>
          <Route path="/mains">
            <CategoryMains />
          </Route>
          <Route path="/diet">
            <CategoryDiet />
          </Route>
          <Route path="/method">
            <CategoryMethod />
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


  


function CategoryType() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Meal Type</h2>
      {/* <ul>
        <li>
          <Link to={`${url}/type`}>Meal Type</Link>
        </li>
      </ul> */}
      <Switch>
        <Route path={`${path}/:type`}>
          <SubCategoryType />
        </Route>
      </Switch>
    </div>
  );
}

function CategoryMains() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Main Ingredient</h2>
      {/* <ul>
        <li>
          <Link to={`${url}/mains`}>Main Ingredient</Link>
        </li>
      </ul> */}
      <Switch>
        <Route path={`${path}/:mains`}>
          <SubCategoryMains />
        </Route>
      </Switch>
    </div>
  );
}

function CategoryDiet() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      {/* <h2>Diet</h2>
      <ul>
        <li>
          <Link to={`${url}/diet`}>Diet</Link>
        </li>
      </ul> */}
      <Switch>
        <Route path={`${path}/:diet`}>
          <SubCategoryDiet />
        </Route>
      </Switch>
    </div>
  );
}

function CategoryMethod() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Cooking Method</h2>
      {/* <ul>
        <li>
          <Link to={`${url}/method`}>Cooking Method</Link>
        </li> */}
      {/* </ul> */}
      <Switch>
        <Route path={`${path}/:method`}>
          <SubCategoryMethod />
        </Route>
      </Switch>
    </div>
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

function SubCategoryType() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Sub-Categories</h2>
      <ul>
        <li>
          <Link to={`${url}/breakfast`}>Breakfast</Link>
        </li>
        <li>
          <Link to={`${url}/lunch`}>Lunch</Link>
        </li>
        <li>
          <Link to={`${url}/dinner`}>Dinner</Link>
        </li>
        <li>
          <Link to={`${url}/dessert`}>Dessert</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/:categoryId`}>
          <SubCategoryType />
        </Route>
      </Switch>
    </div>
  );
}
function SubCategoryMains() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Sub-Categories</h2>
      <ul>
        <li>
          <Link to={`${url}/chicken`}>Chicken</Link>
        </li>
        <li>
          <Link to={`${url}/beef`}>Beef</Link>
        </li>
        <li>
          <Link to={`${url}/rice`}>Rice</Link>
        </li>
        <li>
          <Link to={`${url}/eggs`}>Eggs</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/:categoryId`}>
          <Category />
        </Route>
      </Switch>
    </div>
  );
}
function SubCategoryMethod() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Sub-Categories</h2>
      <ul>
        <li>
          <Link to={`${url}/instant`}>Instant Pot</Link>
        </li>
        <li>
          <Link to={`${url}/slowcooker`}>Slow Cooker</Link>
        </li>
        <li>
          <Link to={`${url}/quick`}>Quick Prep</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/:categoryId`}>
          <Category />
        </Route>
      </Switch>
    </div>
  );
}
function SubCategoryDiet() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Sub-Categories</h2>
      <ul>
        <li>
          <Link to={`${url}/gf`}>Gluten Free</Link>
        </li>
        <li>
          <Link to={`${url}/keto`}>Keto</Link>
        </li>
        <li>
          <Link to={`${url}/vegetarian`}>Vegetarian</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/:categoryId`}>
          <Category />
        </Route>
      </Switch>
    </div>
  );
}







