import React, { useState, useEffect } from 'react';


export default function RecipeDisplay(props) {
    console.log(props);
    console.log(props.recipeId);

    var lsId = props.recipeId != 0 ? props.recipeId : JSON.parse(localStorage.getItem("id"))
    lsId = lsId ? lsId : 0;
    
    var lsRecipes = JSON.parse(localStorage.getItem("recipes"));
    lsRecipes = lsRecipes ? lsRecipes : 0;

    const clickedRecipe = lsRecipes.find(item => item.id == lsId);
    console.log(clickedRecipe);

    const recipeInfo = () => {
        return (
            <>

                <div className="card mb-3" >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={clickedRecipe.image} className="card-img" alt="recipe pic"></img>
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
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    };


    return (
        <div className="row bg bg-secondary content-justify-center p-3">
            { lsId == 0 ? null : recipeInfo()}
        </div>

    );

}