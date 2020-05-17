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
                <nav className="navbar navbar-expand-lg navbar-light sticky-top">
                    <a className="navbar-brand p-2" href="/">
                        <img src="./Images/logo.png" className="card-img-top image-fluid" id="logo" alt="..." /></a>
                    {/* <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a> */}
                </nav>
            </div>

            <div className="row text-content-center mb-2 flex-sm-fill sticky-top bg bg-white p-3">
                <div className="col-lg-10 ml-3 mr-3 text-justify">
                    <nav className="navbar flex-sm-fill navbar-expand-lg navbar-light " id="navbar">
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn  my-2 my-sm-0" type="submit" id="searchBtn">Search</button>
                        </form>
                        {/* </nav>
                        </div>
                        <div className="col-lg-7"> */}
                        {/* <nav className="navbar flex-sm-fill navbar-expand-lg navbar-light " id="navbar"> */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav flex-sm-fill">
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
                       
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link flex-sm-fill" href="/profile">My Profile</a>
                            </li>
                        </ul>
                        
                        <span className="navbar-text text-content-right  mr-sm-2">
                            <a className="nav-link flex-sm-fill" href="/login">Login/Register</a>
                        </span>
                        </nav>
                        </div>
                   
                </div>
          
        </>

    )
}
export default Navbar;




