import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Profile() {


    return (
        <>
            <div className="row" id="footer">
                <div className="col-12">
                    <br></br>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-10 offset-1">
                    <br></br>
                    <h2>Welcome!</h2>
                    <br></br>
                    <div className="row">
                        <div className="col-5 offset-1">
                            <div className="card">
                                <div className="card-body">
                                    See your saved recipes.
                                 </div>
                            </div>
                        </div>
                        <div className="col-5 offset-1">
                            <div className="card">
                                <div className="card-body">
                                    Create your own recipe.
                                 </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row" id="footer">
                <div className="col-12">
                    <br></br>
                </div>
            </div>
        </>
    )
}