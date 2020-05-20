import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Profile(props) {

    const [url, setUrl] = useState('');

    var userInfo = JSON.parse(localStorage.getItem("auth"));


    return (
        userInfo != null ?

            <>
                <div className="jumbotron jumbotron-fluid bg bg-light border border-secondary">
                    <div className="container text-center">
                        <h1 className="display-5">Welcome, {userInfo.user.name}!</h1>
                    </div>
                </div>

                <div className="container" id="profileContainer">
                    <div className="row p-5">

                        <div className="col-sm-4" >
                            <div className="card text-center bg-light" id="profileCard">
                                <div className="card-body mb-3">
                                    <h5 className="card-body">Create recipes</h5>
                                    <Link onClick={() => setUrl(url)} to={"/create"}>
                                    <button className="btn btn-secondary">Create</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4" >
                            <div className="card text-center bg-light" id="profileCard">
                                <div className="card-body mb-3">
                                    <h5 className="card-body">Modify your recipes</h5>
                                    <Link onClick={() => setUrl(url)} to={"/modify"}>
                                    <button className="btn btn-secondary">Modify</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4" >
                            <div className="card text-center bg-light" id="profileCard">
                                <div className="card-body mb-3">
                                    <h5 className="card-body">View your recipes</h5>
                                    <Link onClick={() => setUrl(url)} to={"/view"}>
                                    <button className="btn btn-secondary">View</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>


            :
            <>
                <div className="card text-center">
                    <div className="card-header">
                        <br></br>
                    </div>
                    <div className="card-body">

                        <h5 className="card-title">Please sign in</h5>
                        <Link onClick={() => props.setUrl(props.url)} to={"/login"}>
                            <button type="submit" className="btn btn-secondary">Login</button>
                        </Link>
                    </div>
                    <div className="card-footer text-muted">
                        <br></br>
                    </div>
                </div>


            </>
    )
}