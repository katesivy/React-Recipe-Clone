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
    var userInfo = JSON.parse(localStorage.getItem("auth"));
    var storageId = userInfo.user.id;
    const lsRecipes = JSON.parse(localStorage.getItem("recipes"));
    console.log(lsRecipes);
    const userRecipes = lsRecipes.filter(item => item.user_id == storageId);
    
    const displayedRecipes = userRecipes.map((item, index) => {
        return (
          
            <>
                <div className="col-sm-12 col-lg-4 " key={index}>
                    <div className=" text-left  p-3" id="allrecipes">
                        <div className="card-header text-center text-wrap overflow-auto m-3 " id="recipeView" >
                            <Link onClick={() => props.storeId(item.id)} to={'/create'} id="link">
                                <h4 className="  p-2"> {item.title}</h4>
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
                            <img src={item.image} className="card-img-bottom img-fluid  mx-auto d-block" id="recipePic" alt="pic"></img>

                        </div>
                    </div>
                </div>
            </>
        )
    });


    return (
        <>
            <div className="row bg content-justify-center p-3">
                <div className="col-sm-12 col-lg-12 text-center bg bg-light ">
                <br></br>
                    <h5>click a recipe to update</h5>
                    <br></br>
                </div>
            </div>
            <div className="row bg content-justify-center p-3" >
                {displayedRecipes}
            </div>
        </>

    );
}