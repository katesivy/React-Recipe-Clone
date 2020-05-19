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
    console.log(storageId);
    
    // const userId = props.recipes.map(item => {
    //     return (
    //         <h1>{item.user_id}</h1>
    //     )
    // });

    console.log(props);
    const userRecipes = props.recipes.filter(item => item.user_id == storageId);
    console.log(userRecipes);

    const displayedRecipes = userRecipes.map((item, index) => {
        return (
        //    Link to view recipe as full page
                <div className="col-sm-12 col-lg-4 " key={index}>
                    <div className=" text-left  p-3" id="recipe">
                        <div className="card-header text-center text-wrap overflow-auto m-3 " id="recipeView" >
                        {/* <Link onClick={() => props.setId(item.id)} to={'/recipe'}> */}
                            <h4 className=" border border-secondary p-2"> {item.title}</h4>
                            {/* </Link> */}
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
           
        )


    });


    return (
  
        <div className="row bg content-justify-center p-3" >
            {displayedRecipes}
        </div>
       
    );
}