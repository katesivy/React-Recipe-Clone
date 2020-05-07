import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Recipe(props) {
    const [directions, setDirections] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/directions/' + props.id)
            .then(response => {
                setDirections(response.data)
                console.log(response)
            });
    }, [directions]
    );
    console.log(directions);
    const directionsMap = directions.map((direction, index) => {
        return (
            <li key={index}>{direction.direction} </li>      
        )
    });

    // axios call/set array for Ingredients
    const [ingredients, setIngredients] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/ingredients/' + props.id)
            .then(response => {
                setIngredients(response.data)
                console.log(response)
            });
    }, [ingredients]
    );
    console.log(ingredients);
    const ingredientsMap = ingredients.map((ingredient, index) => {
        return (
            <div key={index}>{ingredient.ingredient} </div>
              
        )
    });
    // axios call/set array for Tags
    const [tags, setTags] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/tags/' + props.id)
            .then(response => {
                setTags(response.data)
                console.log(response)
            });
    }, [tags]
    );
    console.log(tags);
    const tagsMap = tags.map((tag, index) => {
        return (
            <li key={index}>{tag.category} </li>
              
        )
    });

     // axios call/set array for Quantity
     const [recipe_ingredients, setRecipe_ingredients] = useState([]);
     useEffect(() => {
         axios.get('http://127.0.0.1:8000/api/recipe_ingredients/' + props.id)
             .then(response => {
                 setRecipe_ingredients(response.data)
                 console.log(response)
             });
     }, [recipe_ingredients]
     );
     console.log(recipe_ingredients);
     const recipe_ingredientsMap = recipe_ingredients.map((recipe_ingredient, index) => {
         return (
             <div key={index}>{recipe_ingredient.quantity} </div>
               
         )
     });
                        

// let quantityArray = {recipe_ingredientsMap};
// let ingredientsArray = {recipe_ingredientsMap};
// const combo = quantityArray.map((item, i) {
//     quantityArray[i]
//     ingredientsArray[i] == item
// });

    return (
        <div className="col-4 p-2">
            <div className="card "    >
                <div className="card-header text-center text-wrap overflow-auto" id="recipeCard" >
                    <h4 className="font-weight-bold">{props.title}</h4>
                    <div className="card-body text-left" >
                        <p className="card-text">
                            <img src={props.image} className="card-img" id="pic" alt="pic"></img>
                        </p>
                        
                         <p className="font-weight-bold">Ingredients:</p> 
                        {recipe_ingredientsMap}
                         <p> {ingredientsMap}</p>
                            {/* <p>{combo}</p> */}
                         <p className="font-weight-bold">Directions </p>
                         <p>{directionsMap}</p>
                        <p className="card-text font-weight-bold">
                            Servings: 
                        </p>
                        <p>{props.servings}</p>
                        <p className="card-text font-weight-bold">
                            Cooking Time: 
                        </p>
                        <p>
                        {props.cooking_time}
                        </p>
                        <p className="card-text font-weight-bold">
                            Tags: 
                        </p>
                        <p>
                        {tagsMap}
                        </p>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe;