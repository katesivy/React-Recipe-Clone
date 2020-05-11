import React, { useState, useEffect } from 'react';



export default function RecipeList(props) {
  console.log(props);
  const recipeTypes = props.options.find(item => item.url == props.url).subtypes;
  console.log(recipeTypes);
  let recipesArray = [];
  // recipe.tags[index].category
  const filteredRecipes =
    props.recipes.filter((recipe, index) => {
      recipe.tags.map((tag) => {
        recipeTypes.map((item) => {
          if (tag.category == item) {
            recipesArray.push(recipe);
            console.log(tag.category, item);
            return (

              recipe
            )
          }
        }
        )
      })
    })
  console.log(recipesArray);
  const mappedRecipes = recipesArray.map((item, index) => {
    return (

      <h1>{item.title}</h1>
      // <div className="col-4 p-2">
      //   <div className="card ">
      //     <div className="card-header text-center text-wrap overflow-auto" id="recipeCard" >
      //       <h4 className="font-weight-bold">{item.title}</h4>
      //       <div className="card-body text-left" >
      //         <p className="card-text">
      //           <img src={item.image} className="card-img" id="pic" alt="pic"></img>
      //         </p>
      //         <p className="font-weight-bold">Ingredients:</p>
      //         <p> {item.ingredients}</p>
      //         <p className="font-weight-bold">Directions: </p>
      //         <p>{item.directions}</p>
      //         <p className="card-text font-weight-bold">Servings:
      //     </p>
      //         <p>{item.servings}</p>
      //         <p className="card-text font-weight-bold">Cooking Time:
      //   </p>
      //         {item.cooking_time}
      //         <p className="card-text font-weight-bold">Tags:
      //       </p>
      //         <p>
      //           {item.tags}
      //         </p>
      //       </div>
      //     </div>
      //   </div>
      // </div>
     
    )
});

return (
  mappedRecipes


)
}
// finish options array on app.js
// make new recipes
// format recipe
// change link