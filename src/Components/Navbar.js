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

    const userLogout = (e) => {
        e.preventDefault();
        var auth = JSON.parse(localStorage.getItem("auth"));
        const logOut = {
            'user':auth.user,
        };
        const config = {
            headers: { 
                'Authorization': 'Bearer ' + auth.token,
                'Accept': 'application/json'
            }
        }
        axios.post(props.apiLink + '/logout', logOut, config)
            .then(response => {
                console.log(response.data);
                setUrl(url);
                history.push('/');
            })
            .catch(error => {
                console.log(error)
            });
        setLoggedIn(false);
        localStorage.clear();
    }

    var userInfo = JSON.parse(localStorage.getItem("auth"));

    const navOptions =
        userInfo == null ?
            <>
                <span className="navbar-text text-content-right  mr-sm-2 flex-sm-fill">
                    <Link className="a:hover text-justify-center " id="link" onClick={() => setUrl(url)} to={'/login'}>Login</Link>
                </span>
                <span className="navbar-text text-content-right  mr-sm-2 flex-sm-fill">
                    <Link className="a:hover text-justify-center " id="link" onChange={() => setUrl(url)} to={'/register'}>Register</Link>
                </span>
            </>
            :
            <span className="navbar-text text-content-right  mr-sm-2 flex-sm-fill">

                {/* <Link className="a:hover text-justify-center " id="link" onClick={() => setUrl(url)} to={'/'}>Logout</Link> */}
                <form onSubmit={userLogout}>
                        <button type="submit" className="btn btn-white a:hover" id="link">Logout</button>
                    </form> 
            </span>

    return (
        <>
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light sticky-top">
                    <a className="navbar-brand p-2" href="/">
                        <img src="./Images/logo.png" className="card-img-top img-fluid mx-auto" id="logo" alt="..." /></a>
                </nav>
            </div>

            <div className="row text-right mb-2 flex-sm-fill  sticky-top bg bg-white p-3 ml-5">
                <div className="col-lg-12 ml-5  text-justify-right">
                    {/* <nav className="navbar flex-sm-fill navbar-expand-lg navbar-light " id="navbar"> */}
                    {/* <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn  my-2 my-sm-0 bg bg-light border border-secondary text-secondary" type="submit" id="searchBtn">Search</button>
                        </form> */}
                    {/* </nav> */}
                </div>
                <div className="col-lg-8">
                    <nav className="navbar  flex-sm-fill flex-md-fill flex-lg-fill navbar-expand-lg navbar-light " id="navbar">

                        <Link className="a:hover text-justify-center " id="link" onClick={() => setUrl(url)} to={'/all'}>View All Recipes</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav  flex-sm-fill">
                                <li className="nav-item dropdown flex-sm-fill">
                                    <a className="nav-link dropdown-toggle" href="#" id="link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Recipe Categories
                             </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink text-center" id="link">
                                        {props.optionsArray.map((item, index) => {
                                            return (
                                                <Link className="a:hover" id="link" onClick={() => props.goTo(item.url)} to={'/recipes' + item.url}>
                                                    <li>{item.type}</li>
                                                </Link>
                                            )
                                        })
                                        }
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <ul className="navbar-nav flex-sm-fill">
                            <li className="nav-item flex-sm-fill">
                                <Link className="a:hover text-justify-center " id="link" onClick={() => setUrl(url)} to={'/profile'}>My Profile</Link>
                            </li>
                        </ul>
                        {navOptions}
                    </nav>
                </div>

            </div>

        </>

    )
}
export default Navbar;




