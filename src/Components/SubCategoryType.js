import React from "react";
import Navbar from './Navbar';
// import Main from './Main';




export default function SubCategoryType(props) {

    // const recipesType = recipes.map((recipe, index) => {
    //     return (
    //         <RecipeType key={index}
                        
    //     )
    // });
    return (
        <>
        <Navbar />
        {/* <Main /> */}
        <div className="row p-3" id="cardRow">
         <div className="col-lg-3 col-sm-12  offset 1">
                <div className="card" >
                    <img src="./Images/oatmeal.jpeg" className="card-img-top" id="categoryPic" alt="category picture" />
                    <div className="card-body">
                        <h5 className="card-title">Breakfast</h5>
                        <a href="/recipeList" className="btn btn-secondary">See more</a>
                    </div>
                </div>
            </div>
       
            <div className="col-lg-3 col-sm-12  offset 1">
                <div className="card" >
                    <img src="./Images/sandwich.jpeg" className="card-img-top" id="categoryPic" alt="category picture" />
                    <div className="card-body">
                        <h5 className="card-title">Lunch</h5>
                        <a href="/recipeList" className="btn btn-secondary">See more</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-12  offset 1">
                <div className="card" >
                    <img src="./Images/pizza.jpeg" className="card-img-top" id="categoryPic" alt="category picture" />
                    <div className="card-body">
                        <h5 className="card-title">Dinner</h5>
                        <a href="/recipeList" className="btn btn-secondary">See more</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-12  offset 1">
                <div className="card" >
                    <img src="./Images/cake.jpeg" className="card-img-top" id="categoryPic" alt="category picture" />
                    <div className="card-body">
                        <h5 className="card-title">Dessert</h5>
                        <a href="/recipeList" className="btn btn-secondary">See more</a>
                    </div>
                </div>
            </div>
            </div>
        </>
        )}