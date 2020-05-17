import React, { useState, useEffect } from 'react';
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


export default function View(props) {
    const [url, setUrl] = ('');

    const userId = props.recipes.map(item => {
        return (
            <h1>{item.user_id}</h1>
        )
    });

    console.log(props);
    const userRecipes = props.recipes.filter(item => item.user_id == 4);
    console.log(userRecipes);

    const displayedRecipes = userRecipes.map((item, index) => {
        return (
            <>

                <div className="col-sm-12 col-lg-5  d-flex" key={index}>
                    <div className="card text-left" id="recipe">
                        <div className="card-header text-center text-wrap overflow-auto m-3" id="recipeCard" >
                            <h4 className=""> {item.title}</h4>
                            <img src={item.image} className="card-img-top" id="recipePic" alt="pic"></img>
                            <p className="font-weight-bold text-left">Ingredients:</p>
                            {item.ingredients.map((ingredient, key) =>
                                <li className="text-left">{ingredient.pivot.quantity} {ingredient.ingredient}  </li>
                            )}
                            <br></br>
                            <p className="font-weight-bold text-left">Directions: </p>
                            {item.directions.map((direction, key) =>
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
            </>
        )


    });


    return (
        <div className="row bg bg-secondary content-justify-center p-3">
            {displayedRecipes}
        </div>

    );
}