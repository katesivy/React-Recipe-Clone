import React, { useState, useEffect } from 'react';


export default function Recipe(props) {

    const directionsMap = props.directions.map((direction, index) => {
        return (
            <li key={index}>{direction.direction} </li>
        )
    });

    const ingredientsMap = props.ingredients.map((ingredient, index) => {
        return (
            <li key={index}>{ingredient.ingredient} {ingredient.pivot.quantity}  </li>
        )
    });

    const tagsMap = props.tags.map((tag, index) => {
        return (
            <li key={index}>{tag.category} </li>
        )
    });


    return (
        <div className="col-4 p-2">
            <div className="card ">
                <div className="card-header text-center text-wrap overflow-auto" id="recipeCard" >
                    <h4 className="font-weight-bold">{props.title}</h4>
                    <div className="card-body text-left" >
                        <p className="card-text">
                            <img src={props.image} className="card-img" id="pic" alt="pic"></img>
                        </p>
                        <p className="font-weight-bold">Ingredients:</p>
                        <p> {ingredientsMap}</p>
                        <p className="font-weight-bold">Directions: </p>
                        <p>{directionsMap}</p>
                        <p className="card-text font-weight-bold">Servings:
                        </p>
                        <p>{props.servings}</p>
                        <p className="card-text font-weight-bold">Cooking Time:
                      </p>
                        {props.cooking_time}
                        <p className="card-text font-weight-bold">Tags:
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

