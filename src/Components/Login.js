import React, { useState, useEffect, userLogin } from 'react';
import axios from 'axios';

export default function Login() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    const [info, setInfo] = useState('');
    // const [regInfo, setRegInfo] = useState('');
    const [activeTab, setActiveTab] = useState('');
    const [loggedIn, setLoggedIn] = useState('');



    const userLogin = (e) => {
        e.preventDefault();
        const info = {
            username: username,
            // email: email,
            password: password
        }
        axios.post('http://127.0.0.1:8000/api/login', info)
            .then(response => {
                setInfo(response.data)
                console.log(response.data);
            })
            .catch(error => {
                console.log(error)
            });

        setLoggedIn(true);
    }
    const userLogout = (e) => {
        e.preventDefault();
        const info = {
            username: username,
            // email: email,
            password: password
        }
        axios.post('http://127.0.0.1:8000/api/login', info)
            .then(response => {
                setInfo(response.data.data)
                console.log(response.data.data);
            })
            .catch(error => {
                console.log(error)
            });

        setLoggedIn(false);
    }

    console.log(info)

    return (
        <>
            <div className="row ">
                <div className="col-4">
                </div>
                <div className="col-2  p-3 bg bg-light text-dark border border-dark">
                    <ul className="nav nav-pills nav-fill ">
                        <li className="nav-item ">
                            <a className={activeTab === "login" ? "active" : ''} href="/login"
                                onClick={() => setActiveTab('login')}>Login</a>
                        </li>
                    </ul>
                </div>
                <div className="col-2  p-3 bg bg-light text-dark border border-dark">
                    <ul className="nav nav-pills nav-fill ">
                        <li className="nav-item ">
                            <a className={activeTab === "register" ? "active" : ''} href="/register"
                                onClick={() => setActiveTab('register')}>Register</a>
                        </li>
                    </ul>
                </div>
                <div className="col-4">
                </div>
            </div>


            <div className="row">
                <div className="col-10 offset-1">
                    <form onSubmit={userLogin}>
                        {activeTab === 'login'}
                        <div className="form-group" id="Login">
                        <label class="sr-only" for="inlineFormInput">Username</label>
                            <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" value={username}
                                className="form-control" id="inlineFormInput" aria-describedby="usernameHelp" placeholder="Enter Username"></input>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" value={password} className="form-control " id="exampleInputPassword1" placeholder="Password"></input>
                        </div>
                        <button type="submit" className="btn btn-secondary">Login</button>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-10 offset-1">
                <form onSubmit={userLogout}>
                    <button type="submit" className="btn btn-secondary">Logout</button>
                    </form>
                </div>
            </div>
        </>
    )
}


