import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Link,
    useHistory,
} from "react-router-dom";


function Navbar(props) {
    // const [url, setUrl] = useState('');
    const history = useHistory();
    const [url, setUrl] = useState(history.location.pathname.split('/recipes')[1]);
    return (
        <>
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light sticky-top" >
                    <a className="navbar-brand p-2" href="/">
                        <img src="./Images/logo.png" className="card-img-top" id="logo" alt="..." /></a>
                    {/* <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a> */}
                </nav>
            </div>

            <div className="row text-content-right sticky-top bg bg-white p-2">
                <div className="col-lg-12 ml-3 mr-3 content-justify">
                    <nav className="navbar navbar-expand-lg navbar-light " id="navbar">
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-secondary bg bg-secondary my-2 my-sm-0" type="submit" id="searchBtn">Search</button>
                        </form>
                       
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Recipe Categories
                             </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        {props.optionsArray.map((item, index) => {
                                            return (
                                                <Link onClick={() => props.goTo(item.url)} to={'/recipes' + item.url}>
                                                    <a className="dropdown-item"> {item.type} </a>
                                                </Link>
                                            )
                                        })
                                        }
                                    </div>
                                </li>
                            </ul>
                        </div>
                       
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/profile">My Profile</a>
                            </li>
                        </ul>
                        
                        <span className="navbar-text text-content-right  mr-sm-2">
                            <a className="nav-link" href="/login">Login/Register</a>
                        </span>
                    </nav>
                </div>
            </div>
        </>

    )
}
export default Navbar;




