import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Link,
    useHistory,
} from "react-router-dom";


function Navbar(props) {
    // console.log(props);
    const history = useHistory();
    const [url, setUrl] = useState(history.location.pathname.split('/recipes')[1]);
    const [loggedIn, setLoggedIn] = useState('');
    const [input, setInput] = useState('');
    const [matchedId, setMatchedId] = useState({});


    const userLogout = (e) => {
        e.preventDefault();
        var auth = JSON.parse(localStorage.getItem("auth"));
        const logOut = {
            'user': auth.user,
        };
        const config = {
            headers: {
                'Authorization': 'Bearer ' + auth.token,
                'Accept': 'application/json'
            }
        }
        axios.post('https://recipe-final-project.uc.r.appspot.com/api/logout', logOut, config)
            // axios.post('http://127.0.0.1:8000/api/logout', logOut, config)
            .then(response => {
                console.log(response.data);
                setUrl(url);
                history.push('/');
            })
            .catch(error => {
                console.log(error)
            });
        setLoggedIn(false);
        localStorage.removeItem("auth");
    }

    var userInfo = JSON.parse(localStorage.getItem("auth"));

    const navOptions =
        userInfo == null ?
            <>
           
                <span className="navbar-text text-left d-inline-flex  flex-lg-fill flex-sm-fill mr-5">
                    <Link className="a:hover  d-inline-flex" id="link" onClick={() => setUrl(url)} to={'/login'}>Login</Link>
                </span>
                
                <span className=" navbar-text text-content-right d-inline-flex flex-lg-fill flex-sm-fill ml-5">
                    <Link className="a:hover  d-inline-flex" id="link" onChange={() => setUrl(url)} to={'/register'}>Register</Link>
                </span>
                
            </>
            :
            <span className=" navbar-text text-content-right flex-lg-fill mr-sm-2 flex-sm-fill">
                <form onSubmit={userLogout}>
                    <button type="submit" className="btn btn-white a:hover" id="link">Logout</button>
                </form>
            </span>

    var recipes = JSON.parse(localStorage.getItem("recipes"));

    const checkSearch = (e) => {
        e.preventDefault();
        console.log(input);

        recipes.map((item, index) => {
            if (input.toString().toLowerCase() === item.title.toLowerCase()) {
                console.log('match');
                console.log(item);
                console.log(item.id);
                // setMatchedId(item.id);
                props.storeId(item.id);
                history.push('/recipe');
                // console.log(matchedId);
            }
        })
    }


    return (
        <>
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light sticky-top bg bg-white">
                    <a className="navbar-brand p-2" href="/">
                        <img src="./Images/logo.png" className="card-img-top img-fluid mx-auto" id="logo" alt="..." /></a>
                </nav>
            </div>

            <div className="row text-right mb-2 flex-sm-fill  sticky-top bg bg-white p-3  ">

                <nav className="navbar text-justify-center flex-sm-fill flex-md-fill flex-lg-fill navbar-expand-lg navbar-light " id="navbar">

                    <div className="col-lg-3   text-justify-left ">
                        <form onSubmit={checkSearch} className="form-inline ">
                            <input onChange={(e) => setInput(e.target.value)}
                                className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                            </input>
                            <button
                                className="btn  my-2 my-sm-0 bg bg-light text-secondary" type="submit" id="searchBtn">Search</button>
                        </form>
                    </div>

                    <div className="col-lg-2   text-left">
                        <Link className="a:hover text-left  " id="link" onClick={() => setUrl(url)} to={'/all'}>View All Recipes</Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="col-lg-2 text-left">
                        <div className="collapse navbar-collapse text-left " id="navbarNavDropdown ">
                            <ul className="navbar-nav  flex-lg-fill">
                                <div className="nav-item dropdown flex-sm-fill flex-lg-fill">
                                    <a className="nav-link dropdown-toggle text-right" id="link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Recipe Categories
                             </a>
                                    <div className="dropdown-menu dropdown-menu-lg-right dropdown-menu-sm-center text-center" aria-labelledby="navbarDropdownMenuLink " id="link">
                                        {props.optionsArray.map((item, index) => {
                                            return (
                                                <Link className="a:hover" key={index} id="link" onClick={() => props.goTo(item.url)} to={'/recipes' + item.url}>
                                                    <li>{item.type}</li>
                                                </Link>
                                            )
                                        })
                                        }
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2   text-justify-center">
                        <ul className="navbar-nav flex-sm-fill flex-md-fill flex-lg-fill ">
                            <li className="nav-item flex-sm-fill">
                                <Link className="a:hover text-justify-center mr-3 " id="link" onClick={() => setUrl(url)} to={'/profile'}>My Profile</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-3 text-center ">
                        {navOptions}
                    </div>

                </nav>
            </div>

        </>

    );
}
export default Navbar;