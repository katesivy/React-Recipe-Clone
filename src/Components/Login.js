import React, { useState, useEffect, userLogin } from 'react';
import Profile from './Profile';
import { Link, Switch } from 'react-router-dom';
import axios from 'axios';

export default function Login(props) {
    const [name, setName] = useState('');
    // const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    const [info, setInfo] = useState('');
    // const [regInfo, setRegInfo] = useState('');
    const [activeTab, setActiveTab] = useState('');
    const [loggedIn, setLoggedIn] = useState('');
    const [auth, setAuth] = useState({});
    const [storageData, setStorageData] = useState({});


     const userLogin = async (e) =>  {
        e.preventDefault();
        const info = {
            // userName: userName,
            email: email,
            password: password
        }
       await axios.post('http://127.0.0.1:8000/api/login', info)
            .then(response => {
                setInfo(response.data)
                console.log(response.data);
                let storageData = JSON.stringify(response.data);
                localStorage.setItem('userInfo', storageData);
                setLoggedIn(true);
                setAuth(response.data);
                
            })
            .catch(error => {
                console.log(error)
            });
    }
    console.log(storageData);
    
    const userLogout = (e) => {
        e.preventDefault();
        const logOut = {
            headers: {Authorization: "Bearer" + auth.token }
        }
        axios.post('http://127.0.0.1:8000/api/logout', logOut)
            .then(response => {
                // setInfo(response.data)
                console.log(response.data);
            })
            .catch(error => {
                console.log(error)
            });

        setLoggedIn(false);
        localStorage.clear();
       
    }

    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    
    
    return (
        userInfo != null ? 
        <>
            <div className="row text-light">
                <div className="col-4">
                </div>
                <div className="col-2  p-3 " id="btn">
                    <ul className="nav nav-pills nav-fill" >
                    <button type="button" className="btn btn-light text-light" id="btn1">
                            <a className={activeTab === "login" ? "active" : ''} href="/login"
                                onClick={() => setActiveTab('login')}>Login</a>
                       </button>
                    </ul>
                </div>
                <div className="col-2  p-3" id="btn">
                <ul className="nav nav-pills nav-fill" >
                        <button type="button" className="btn btn-light text-light" id="btn1" >
                            <a className={activeTab === "register" ? "active" : ''} href="/register"
                                onClick={() => setActiveTab('register')}>Register</a>
                        </button>
                        </ul>
                </div>
                <div className="col-4">
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
            :
            <>
            <div className="row">
                <div className="col-10 offset-1">
                    <form onSubmit={userLogin}>
                        {activeTab === 'login'}
                        <div className="form-group" id="Login">
                            <label class="sr-only" for="inlineFormInput">User Name</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" value={email}
                                className="form-control" id="inlineFormInput" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" value={password} className="form-control " id="exampleInputPassword1" placeholder="Password"></input>
                        </div>
                        {/* <Link onClick={() => props.setUrl(props.url)} to={'/profile'} >  */}
                        <button type="submit" className="btn btn-secondary">Login</button>
                        {/* </Link> */}
                    </form>
                </div>
            </div>
          
            </>
    )
}

