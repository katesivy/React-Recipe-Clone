import React, { useState, useEffect } from 'react';
import {
    Link,
} from "react-router-dom";

export default function RecipeDisplay(props) {
    console.log(props);
    console.log(props.recipeId);
    const [url, setUrl] = useState('');

    var lsId = props.recipeId != 0 ? props.recipeId : JSON.parse(localStorage.getItem("id"))
    // lsId = lsId ? lsId : 0;

    var lsRecipes = JSON.parse(localStorage.getItem("recipes"));
    // lsRecipes = lsRecipes ? lsRecipes : 0;

    const clickedRecipe = lsRecipes.find(item => item.id == lsId);
    console.log(clickedRecipe);

    // var userInfo = JSON.parse(localStorage.getItem("auth"));
    // const storageId = userInfo.user.id;
    // console.log(storageId);
    // const userRecipes = props.recipes.filter(item => item.user_id == 1);
    // console.log(userRecipes);
    const modifyButton = clickedRecipe.user_id != 1 ?
        <>
            <Link className="btn btn-secondary" onClick={() => setUrl(url)} to={"/modify"}>Edit</Link>
        </>
        :
        null

    const recipeInfo = () => {
        return (
            <>

                <div className="card mb-3" >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={`/Images/${clickedRecipe.image}`} className="card-img" alt="recipe pic"></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{clickedRecipe.title}</h5>
                                <p className="font-weight-bold text-left">Ingredients:</p>
                                {clickedRecipe.ingredients.map((ingredient) =>
                                    <li className="text-left">{ingredient.pivot.quantity} {ingredient.ingredient}  </li>
                                )}
                                <br></br>
                                <p className="card-text font-weight-bold">Directions</p>
                                {clickedRecipe.directions.map((direction) =>
                                    <li className="text-left">{direction.direction}</li>
                                )}
                                <br></br>
                                <p className="card-text font-weight-bold text-left">Servings:</p>
                                <p className="text-left">{clickedRecipe.servings}</p>
                                <p className="card-text font-weight-bold text-left">Cooking Time:</p>
                                <p className="text-left"> {clickedRecipe.cooking_time} minutes</p>
                                <p className="card-text"><small className="text-muted">Tags</small></p>
                                {clickedRecipe.tags.map((tag) =>
                                    <li className="text-left text-muted"><small className="text-muted">{tag.category}</small></li>
                                )}
                                {modifyButton}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    };


    return (
        <div className="row bg bg-secondary content-justify-center p-3">
            {lsId == 0 ? null : recipeInfo()}
        </div>

    );

}