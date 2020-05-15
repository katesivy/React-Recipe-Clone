
import React, { useState, useEffect, userLogin } from 'react';
import axios from 'axios';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const [info, setInfo] = useState('');
    const [regInfo, setRegInfo] = useState('');
    const [activeTab, setActiveTab] = useState('register');
    const [loggedIn, setLoggedIn] = useState(false);


    const userRegister = (e) => {
        e.preventDefault();
        const regInfo = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }
        axios.post('http://127.0.0.1:8000/api/register', regInfo)
            .then(response => {
                setRegInfo(response.data.data)
                console.log(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

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
                <form onSubmit={userRegister}>
                    <div className="form-group" id="Register">
                        <label for="exampleInputEmail1">Name</label>
                        <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name}
                            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"></input>
                    </div>

                    <div className="form-group" id="Email">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" value={email}
                            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" value={password} className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                    </div>
                    {/* <div className="form-group">
                        <label for="exampleInputPassword2">Confirm Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" name="confirmPassword" value={confirmPassword} className="form-control" id="exampleInputPassword2" placeholder="Confirm Password"></input>
                    </div> */}
                    <button type="submit" className="btn btn-secondary">Register</button>
                </form>
            </div>
        </div>
</>
)
}