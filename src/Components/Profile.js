import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Create from './Create';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";


export default function Profile(props) {
    // console.log(props);
    const [url, setUrl] = ('');
    // let { path, url } = useRouteMatch();

    return (
        <>
           
                <div className="jumbotron jumbotron-fluid bg bg-light border border-secondary">
                    <div className="container text-center">
                        <h1 className="display-5">Welcome!</h1>
                    </div>
                </div>

                <div className="container" id="profileContainer">
                <div className="row p-5">

                    <div className="col-sm-4" >
                        <div className="card text-center bg-light" id="profileCard">
                            <div className="card-body">
                                <h5 className="card-body">Create recipes</h5>
                                {/* <p className="card-text">Store your own rec.</p> */}
                                {/* <Link onClick={() =>props.goTo(url)} to={'/create'}>  */}
                                <a href="/create" className="btn btn-secondary text-light">Create</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4" >
                        <div className="card text-center bg-light" id="profileCard">
                            <div className="card-body">
                                <h5 className="card-body">Modify your recipes</h5>
                                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                                <a href="/modify" className="btn btn-secondary text-light">Modify</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4" >
                        <div className="card text-center bg-light" id="profileCard">
                            <div className="card-body">
                                <h5 className="card-body">View your recipes</h5>
                                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                                <a href="/view" className="btn btn-secondary text-light">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}