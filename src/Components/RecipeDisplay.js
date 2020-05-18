import React, { useState, useEffect } from 'react';


export default function RecipeDisplay(props) {
    console.log(props);
    console.log(props.id);
    
    // const [id, setId] = useState(JSON.parse(localStorage.getItem("id")));

    // function storeId(props) {
    //     setId(props)
    //     localStorage.setItem("id", JSON.stringify(props))
    // }
    
    const clickedRecipe = props.recipes.filter(item => item.id == props.id);
    console.log(clickedRecipe);


    const recipeInfo = clickedRecipe.map(item => {
        return (
            <>
            {/* storeId(); */}

                <div className="card mb-3" >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={item.image} className="card-img" alt="recipe pic"></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="font-weight-bold text-left">Ingredients:</p>
                                {item.ingredients.map((ingredient) =>
                                    <li className="text-left">{ingredient.pivot.quantity} {ingredient.ingredient}  </li>
                                )}
                                <br></br>
                                <p className="card-text font-weight-bold">Directions</p>
                                {item.directions.map((direction) =>
                                    <li className="text-left">{direction.direction}</li>
                                )}
                                <br></br>
                                <p className="card-text font-weight-bold text-left">Servings:</p>
                                <p className="text-left">{item.servings}</p>
                                <p className="card-text font-weight-bold text-left">Cooking Time:</p>
                                <p className="text-left"> {item.cooking_time} minutes</p>
                                <p className="card-text"><small className="text-muted">Tags</small></p>  
                                {item.tags.map((tag) =>
                                    <li className="text-left text-muted"><small className="text-muted">{tag.category}</small></li>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    });


    return (
        <div className="row bg bg-secondary content-justify-center p-3">
            {recipeInfo}
        </div>

    );

}