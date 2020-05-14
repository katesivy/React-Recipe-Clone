import React, { useState, useEffect } from 'react';



export default function RecipeList(props) {
   console.log(props);

  const filteredRecipes = [];
  props.recipes.map((item) => {
    for (let i = 0; i < item.tags.length; i++) {
      // console.log(item.tags[i].category, props.subtype);
      if (item.tags[i].category == props.subtype) {
        // console.log(item);
        filteredRecipes.push(item);
      }
    }
  });
  
  console.log(filteredRecipes);

  const renderedRecipes = filteredRecipes.map((item, index) => {
    // item.directions.map((direction, index) => {
    return (
      <div className="row" key={index}>
      {/* {console.log(item.directions)} */}
        <div className="col-4 p-2">
          <div className="card ">
            <div className="card-header text-center text-wrap overflow-auto" id="recipeCard" >
              <h4 className="font-weight-bold"> {item.title}</h4>
              <img src={item.image} className="card-img" id="pic" alt="pic"></img>
              <p className="font-weight-bold">Ingredients:</p>
                              {item.ingredients.map((ingredient, key)=>   
                               <p>{ingredient.ingredient} </p>    
                               )}               
              <p className="font-weight-bold">Directions: </p>
              {item.directions.map((direction, key)=>   
                               <p>{direction.direction} </p>    
                               )} 
                        

              <p className="card-text font-weight-bold">Servings:</p>
              <p>{item.servings}</p>
              <p className="card-text font-weight-bold">Cooking Time:</p>
              <p> {item.cooking_time} minutes</p>
              
            </div>
          </div>
        </div>
      </div>
    )
    // });
  });


  return (
    renderedRecipes

  );
}