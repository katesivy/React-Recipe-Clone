import React, { useState } from 'react';
import {
    Link, useHistory
} from "react-router-dom";
import axios from 'axios';

export default function RecipeDisplay(props) {
    const [info, setInfo] = useState('');
    const [url, setUrl] = useState('');
    const history = useHistory();
    // console.log(props);
    // console.log(props.recipeId);

    var lsId = props.recipeId != 0 ? props.recipeId : JSON.parse(localStorage.getItem("id"))
    lsId = lsId ? lsId : 0;

    var lsRecipes = JSON.parse(localStorage.getItem("recipes"));
    lsRecipes = lsRecipes ? lsRecipes : 0;

    const clickedRecipe = lsRecipes.find(item => item.id == lsId);

    const deleteRecipe = (e) => {
        e.preventDefault();

        const info = {
            title: clickedRecipe.title,
            ingredient: clickedRecipe.ingredients,
            direction: clickedRecipe.directions,
            servings: clickedRecipe.servings,
            cooking_time: clickedRecipe.cooking_time,
            image: clickedRecipe.image,
            tags: clickedRecipe.tags,
            recipe_id: clickedRecipe.id
        }
        // axios.post("http://127.0.0.1:8000/api/deleteRecipe", info)
            axios.post("https://recipe-final-project.uc.r.appspot.com/api/deleteRecipe", info)
            .then(response => {
                setInfo(response.data)
                console.log(response.data);
                var newRecipes = lsRecipes.filter(item => item.id != clickedRecipe.id);
                localStorage.setItem("recipes", JSON.stringify(newRecipes));
                history.push('/view');
            })
            .catch(error => {
                console.log(error)
            });
    }

    const deleteButton = clickedRecipe.user_id != 1 ?
        <>
            <Link className="btn btn-secondary" onClick={deleteRecipe}>Delete</Link>
        </>
        :
        null

    const modifyButton = clickedRecipe.user_id != 1 ?
        <>
            <Link className="btn btn-secondary" onClick={() => setUrl(url)} to={"/modify"}>Edit</Link>
        </>
        :
        null

    const clickedRecipeImage = clickedRecipe.image ?
        <>
            <div className="col-md-4">
                <img src={`/Images/${clickedRecipe.image}`} className="card-img" alt="recipe pic"></img>
            </div>
        </>
        :
        <div className=" p-1 m-1">
           
        </div>

    const recipeInfo = () => {
        return (
            <>

                <div className="card mb-3" >
                    <div className="row no-gutters">
                        {clickedRecipeImage}
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
                                {modifyButton} {deleteButton}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    };


    return (
        <div className="row bg bg-secondary content-justify-center m-1 p-3">
            {lsId == 0 ? null : recipeInfo()}
        </div>

    );

}