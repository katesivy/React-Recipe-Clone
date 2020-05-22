import React, { useState, useEffect, userLogin } from 'react';
import Profile from './Profile';
import { Link, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Login(props) {
    // const [userName, setUserName] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [info, setInfo] = useState('');
    const [loggedIn, setLoggedIn] = useState('');
    const [auth, setAuth] = useState({});
    const [storageData, setStorageData] = useState({});
    const [url, setUrl] = useState('');
    const history = useHistory();


    const userLogin = async (e) => {
        e.preventDefault();
        const info = {
            // userName: userName,
            email: email,
            password: password
        }
        // await axios.post('http://127.0.0.1:8000/api/login', info)
        await axios.post('https://recipe-final-project.uc.r.appspot.com/api/login', info)
            .then(response => {
                setInfo(response.data)
                console.log(response.data);
                let storageData = JSON.stringify(response.data);
                localStorage.setItem('auth', storageData);
                setLoggedIn(true);
                setAuth(response.data);
                setUrl(url);
                history.push('/profile');

            })
            .catch(error => {
                console.log(error)
            });
    }
    console.log(storageData);


    var userInfo = JSON.parse(localStorage.getItem("auth"));


    return (
        userInfo != null ?
            <>
                <div className="card text-center">
                    <div className="card-header">
                        <br></br>
                    </div>
                    <div className="card-body">
                    
                    </div>
                    <div className="card-footer text-muted">
                        <br></br>
                    </div>
                </div>
            </>
            :
            <>
                <div className="row bg bg-light p-5">
                    <div className="col-10 offset-1 ">
                        <form onSubmit={userLogin}>
                            <div className="form-group">
                                <label for="inlineFormInput">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" value={email}
                                    className="form-control" id="inlineFormInput" aria-describedby="emailHelp" placeholder="Enter email"></input>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" value={password} className="form-control " id="exampleInputPassword1" placeholder="Password"></input>
                            </div>
                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-secondary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>

            </>
    )
}

