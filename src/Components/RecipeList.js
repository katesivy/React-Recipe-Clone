import React, { useState, useEffect } from 'react';
import RecipeDisplay from './RecipeDisplay';

import {
  BrowserRouter as Router,
  useHistory,
  Link
} from "react-router-dom";



export default function RecipeList(props) {
  console.log(props);
  const history = useHistory();
  const [url, setUrl] = useState(history.location.pathname.split('/recipes')[1]);
  console.log(url);
  const [id, setId] = useState('');

  const filteredRecipes = [];
  props.recipes.map((item) => {
    for (let i = 0; i < item.tags.length; i++) {
      // console.log(item.tags[i].category, props.subtype);
      if (item.tags[i].category == props.subtype) {
        // console.log(item);
        filteredRecipes.push(item);
      }
    }
  });

  console.log(filteredRecipes);

  const renderedRecipes = filteredRecipes.map((item, index) => {
    return (

      <div className="col-sm-12 col-lg-6  d-flex" key={index}>
        <div className="card text-left" id="recipe">
          <div className="card-header text-center text-wrap overflow-auto m-3" id="recipeCard" >
          <Link onClick={() => props.storeId(item.id)} to={'/recipe'}>
              <h4 className="" id="link"> {item.title}</h4>
            </Link>
            <img src={`/Images/${item.image}`} className="card-img-top" id="recipePic" alt="pic"></img>
            <p className="font-weight-bold text-left">Ingredients:</p>
            {item.ingredients.map((ingredient) =>
              <li className="text-left">{ingredient.pivot.quantity} {ingredient.ingredient}  </li>
            )}
            <br></br>
            <p className="font-weight-bold text-left">Directions: </p>
            {item.directions.map((direction) =>
              <li className="text-left">{direction.direction}</li>
            )}
            <br></br>
            <p className="card-text font-weight-bold text-left">Servings:</p>
            <p className="text-left">{item.servings}</p>
            <p className="card-text font-weight-bold text-left">Cooking Time:</p>
            <p className="text-left"> {item.cooking_time} minutes</p>

          </div>
        </div>

      </div>

    )


  });


  return (
    <>
      <div className="row bg bg-secondary content-justify-center p-3">
        {renderedRecipes}
      </div>

      {console.log({ filteredRecipes })}

    </>
  );
}