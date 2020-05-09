import React from "react";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light " id="navbar">
                <a className="navbar-brand p-2" href="#">What's Cookin'?</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">My Profile</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categories
                             </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Meal Type</a>
                                <a className="dropdown-item" href="#">Main Ingredient</a>
                                <a className="dropdown-item" href="#">Diet</a>
                                <a className="dropdown-item" href="#">Cooking Method</a>
                            </div>
                        </li>
                    </ul>
                    <span className="navbar-text text-right  mr-sm-2">

                    <a className="nav-link" href="#Login">Login/Register</a> 
                      </span>
                </div>
            </nav>
        </>

    )
}
export default Navbar;




