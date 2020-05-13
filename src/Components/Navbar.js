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
            <nav className="navbar navbar-light bg-light">

                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>

                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
            <a className="navbar-brand p-2" href="/">
                <img src="./Images/logo.png" className="card-img-top" id="categoryPic" alt="..." /></a>
            <nav className="navbar navbar-expand-lg navbar-light " id="navbar">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <a className="nav-link" href="/profile">My Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/categories">Categories</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categories
                             </a>

                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                {console.log(props.optionsArray)}
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
                    <span className="navbar-text text-content-right  mr-sm-2">

                        <a className="nav-link" href="#Login">Login/Register</a>
                    </span>
                </div>
            </nav>
        </>

    )
}
export default Navbar;




