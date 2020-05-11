import React from "react";
import Navbar from './Navbar';



export default function SubCategoryMains() {

    return (
        <>
        <Navbar />
        <div className="row p-3" id="cardRow">
         <div className="col-lg-3 col-sm-12  offset 1">
                <div className="card" >
                    <img src="./Images/chksalad.jpeg" className="card-img-top" id="categoryPic" alt="category picture" />
                    <div className="card-body">
                        <h5 className="card-title">Chicken</h5>
                        <a href="/recipeList" className="btn btn-secondary">See more</a>
                    </div>
                </div>
            </div>
       
            <div className="col-lg-3 col-sm-12  offset 1">
                <div className="card" >
                    <img src="./Images/ribeye.jpeg" className="card-img-top" id="categoryPic" alt="category picture" />
                    <div className="card-body">
                        <h5 className="card-title">Beef</h5>
                        <a href="/recipeList" className="btn btn-secondary">See more</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-12  offset 1">
                <div className="card" >
                    <img src="./Images/rice.jpeg" className="card-img-top" id="categoryPic" alt="category picture" />
                    <div className="card-body">
                        <h5 className="card-title">Rice</h5>
                        <a href="/recipeList" className="btn btn-secondary">See more</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-12  offset 1">
                <div className="card" >
                    <img src="./Images/quiche.jpeg" className="card-img-top" id="categoryPic" alt="category picture" />
                    <div className="card-body">
                        <h5 className="card-title">Eggs</h5>
                        <a href="/recipeList" className="btn btn-secondary">See more</a>
                    </div>
                </div>
            </div>
            </div>
        </>
        )}