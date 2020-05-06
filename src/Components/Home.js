import React from "react";
// import Images from "/Images";

function Home() {
    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Let's make some food!</h1>
                    <p className="lead">~find a recipe by category or ingredient or create your own~</p>
                </div>
            </div>

<div className="row p-3">
            <div className="col-lg-3 col-sm-12   offset 1">
            <div className="card" >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Category</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-12  offset 1">
            <div className="card" >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Category</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-12 offset 1">
            <div className="card" >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Category</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-12 offset 1">
            <div className="card" >
                <img src="/828B9AD6-6CF0-45A0-A536-F455566D79F9_1_105_c.jpeg" className="card-img-top" alt="picture of cake" />
                <div className="card-body">
                    <h5 className="card-title">Desserts</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>

            {/* <ul className="list-group">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Morbi leo risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul> */}

</div>
        </>

    );

}

export default Home;