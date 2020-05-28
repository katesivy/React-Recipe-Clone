import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    Link,
} from "react-router-dom";

export default function AllRecipes(props) {
    const adminRecipes = props.recipes.filter(item => item.user_id == 1);
    console.log(adminRecipes);
    const mappedRecipes = adminRecipes.map((item, index) => {
        return (

            <div className="col-sm-12 bg bg-light col-lg-4 p-3" key={index}>
                <div className=" text-left" id="allrecipes">
                    <div className="card-header  text-center text-wrap overflow-auto m-3 " id="recipeView" >

                        <Link onClick={() => props.storeId(item.id)} to={'/recipe'}>
                            <h4 className="text-center p-2" id="link"> {item.title}</h4>
                        </Link>

                            <br></br>
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
                        <img src={`/Images/${item.image}`} className="card-img-bottom img-fluid  mx-auto d-block" id="recipePic" alt="pic"></img>

                    </div>

                </div>
            </div>

        )


    });


    return (

        <div className="row bg content-justify-center bg bg-secondary  p-3" >
            {mappedRecipes}
        </div>

    );
}