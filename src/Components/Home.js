import React from "react";

export default function Home() {
    return (
        <>
            <div className="jumbotron jumbotron-fluid" id="jumbContainer">
                <div className="container" >
                    <img src="https://images.unsplash.com/photo-1457666134378-6b77915bd5f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="card-img-top" id="jumbotron" alt="..." ></img>
                </div>
            </div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Let's make some food!</h1>
                    <p className="lead">~find a recipe by category or ingredient or create your own~</p>
                </div>
            </div>

            <div className="row p-3" id="cardRow">

                <div className="col-lg-3 col-sm-12  offset 1">
                    <div className="card" >
                        <img src="./Images/D99F0BD2-DC13-4FEB-BDD0-512EC7265DF0_1_105_c.jpeg" className="card-img-top" id="categoryPic" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Breakfast</h5>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <a href="#" className="btn btn-secondary">See more</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12 offset 1">
                    <div className="card" >
                        <img src="./Images/5795EBC2-F6D7-461D-97B9-DB4E2742E481_1_105_c.jpeg" className="card-img-top" id="categoryPic" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Lunch</h5>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <a href="#" className="btn btn-secondary">See more</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-12   offset 1">
                    <div className="card" >
                        <img src="./Images/B2CF99A0-8E58-43A9-89B6-FBB80177639C.jpeg" className="card-img-top" id="categoryPic" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dinner</h5>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <a href="#" className="btn btn-secondary">See more</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-12 offset 1">
                    <div className="card" >
                        <img src="./Images/828B9AD6-6CF0-45A0-A536-F455566D79F9_1_105_c.jpeg" className="card-img-top" id="categoryPic" alt="picture of cake" />
                        <div className="card-body">
                            <h5 className="card-title">Dessert</h5>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <a href="#" className="btn btn-secondary">See more</a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

}