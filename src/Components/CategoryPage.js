import React from "react";
import Navbar from './Navbar';



export default function CategoryPage() {

    return (
        <>
        <Navbar />
        <div className="row p-3" id="cardRow">

            <div className="col-lg-3 col-sm-12  offset 1">
                <div className="card" >
                    <img src="./Images/panini.jpeg" className="card-img-top" id="categoryPic" alt="category picture" />
                    <div className="card-body">
                        <h5 className="card-title">Meal Type</h5>
                        <a href="/type" className="btn btn-secondary">See more</a>
                    </div>
                </div>
            </div>
        
            <div className="col-lg-3 col-sm-12  offset 1">
                <div className="card" >
                    <img src="./Images/chowder.jpeg" className="card-img-top" id="categoryPic" alt="category picture" />
                    <div className="card-body">
                        <h5 className="card-title">Main Ingredient</h5>
                        <a href="/mains" className="btn btn-secondary">See more</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-12  offset 1">
                <div className="card" >
                    <img src="./Images/pizza.jpeg" className="card-img-top" id="categoryPic" alt="category picture" />
                    <div className="card-body">
                        <h5 className="card-title">Diet</h5>
                        <a href="/diet" className="btn btn-secondary">See more</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-12  offset 1">
                <div className="card" >
                    <img src="./Images/poundcake.jpeg" className="card-img-top" id="categoryPic" alt="category picture" />
                    <div className="card-body">
                        <h5 className="card-title">Cooking Method</h5>
                        <a href="/method" className="btn btn-secondary">See more</a>
                    </div>
                </div>
            </div>
     </div>
        </>
    )
}