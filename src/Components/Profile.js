import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
{/* <div className="dropdown-menu dropdown-menu-lg-right dropdown-menu-sm-center text-center"  */}

export default function Profile(props) {

    const [url, setUrl] = useState('');
    // window.location.reload(false);

    function goToCreate() {
        localStorage.removeItem('id');
        setUrl(url)
    }

    var userInfo = JSON.parse(localStorage.getItem("auth"));


    return (
        userInfo != null ?

            <>
                <div className="jumbotron jumbotron-fluid bg bg-light border border-secondary">
                    <div className="container text-center">
                        <h1 className="display-5">Welcome, {userInfo.user.name}!</h1>
                    </div>
                </div>

                <div className="container bg bg-secondary  border border-secondary" id="profileContainer">

                    <div className="row  m-5 bg bg-light border border-secondary">
                        
                        <div className="col-sm-4 mt-2 border border-light" >
                       
                            <div className="card text-center bg bg-light border border-light " id="profileCard">
                                <div className="card-body  ">
                                    <h5 className="card-body">Create recipes</h5>
                                    <Link className="btn btn-secondary" id="btn1" onClick={goToCreate} to={"/create"}>
                                        Create
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-sm-4"> 
                        <img src="./Images/smallesttart.jpeg" className="card-img-top img-fluid mx-auto" id="logo" alt="..." />
                        </div>


                        <div className="col-sm-4 mt-2 " >
                            <div className="card text-center bg bg-light  border border-light" id="profileCard">
                                <div className="card-body ">
                                    <h5 className="card-body ">View your recipes</h5>
                                    <Link className="btn btn-secondary" id="btn1" onClick={() => setUrl(url)} to={"/view"}>
                                        View
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