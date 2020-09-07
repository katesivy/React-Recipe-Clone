import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

export default function AllRecipes(props) {
    const adminRecipes = props.recipes.filter(item => item.user_id == 1);

    var userInfo = true ? JSON.parse(localStorage.getItem("auth")) : 0;
    console.log({ userInfo });
    var storageId = userInfo ? userInfo.user.id : 0;
    console.log({ storageId });
    const allRecipes = userInfo ? props.recipes.filter(item => item.user_id == 1 || item.user_id == storageId) : adminRecipes;
    console.log({ allRecipes });



    const mappedRecipes = allRecipes.map((item, index) => {
        console.log(item.image)
        const recipeImage =
             item.image ?
                <img src={`/Images/${item.image}`} className="card-img-bottom img-fluid  mx-auto d-block" id="recipePic" alt="click on title or scroll down for recipe"></img>
                :
                <div></div>;
                
        return (

            <div className="col-sm-12 bg bg-secondary col-lg-4 p-3 " key={index}>
                <div className=" text-left" id="allrecipes">
                    <div className="card-header bg bg-light  text-center text-wrap overflow-auto m-3 " id="recipeView" >

                        <Link onClick={() => props.storeId(item.id)} to={'/recipe'}>
                            <h4 className="text-center p-2" id="link"> {item.title}</h4>
                        </Link>
                        {recipeImage}

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


                    </div>

                </div>
            </div>

        )


    });


    return (
        <>


            {/* <div className="row bg content-justify-center bg bg-secondary  p-3" >
        </div> */}
            <div className="row bg content-justify-center bg bg-secondary  p-3" >
                {mappedRecipes}
            </div>
            {/* <div className="row bg content-justify-center bg bg-secondary  p-3" >
        </div> */}
        </>

    );
}