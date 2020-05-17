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
console.log(props);
const [url, setUrl] = ('');
// let { path, url } = useRouteMatch();

    return (
        <>
        
            <div className="jumbotron jumbotron-fluid border border-secondary">
                <div className="container text-center">
                    <h1 className="display-5">Welcome!</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4" >
                    <div className="card text-center">
                        <div className="card-body" id="profileCard">
                            <h5 className="card-title">Create your own recipe</h5>
                            {/* <p className="card-text">Store your own rec.</p> */}
                            <br></br>
                            {/* <Link onClick={() =>props.goTo(url)} to={'/create'}>  */}
                            <a href="/create" className="btn btn-secondary text-light">Create
                            
                            </a>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
                <div className="col-sm-4" >
                    <div className="card" id="profileCard">
                        <div className="card-body">
                            <h5 className="card-title">Modify your recipes</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-secondary text-light">Modify</a>
                        </div>
                    </div>
                </div>
           
                <div className="col-sm-4" id="profileCard">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">View recipes</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="/view" className="btn btn-secondary text-light">View</a>
                        </div>
                    </div>
                </div>
                </div>

                <Switch>
                {/* <Route exact path={path}>
                </Route>   */}
                  {/* <Route path={`${path}`}> */}
                  {/* console.log({path}); */}
                
            </Switch>
        </>
    )
}