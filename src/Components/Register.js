
import React, { useState, useEffect, userLogin } from 'react';
import { Link, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Register(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const [info, setInfo] = useState('');
    const [regInfo, setRegInfo] = useState('');  
    const [loggedIn, setLoggedIn] = useState(false);
    const [auth, setAuth] = useState({});
    // const [storageData, setStorageData] = useState({});
    const [info, setInfo] = useState('');
    const [url, setUrl] = useState('');
    const history = useHistory();
    

    const userRegister = async (e) => {
        e.preventDefault();
        const regInfo = {
            name: name,
            email: email,
            password: password,
            // confirmPassword: confirmPassword
        }
       await axios.post('https://recipe-final-project.uc.r.appspot.com/api/register', regInfo)
    //    await axios.post('http://127.0.0.1:8000/api/register', regInfo)
            .then(response => {
                setRegInfo(response.data)
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
            })
    }
    var userInfo = JSON.parse(localStorage.getItem("auth"));
    return (
        <>
        <div className="row ">
            <div className="col-4">
            </div>
            <div className="col-4">
            </div>
        </div>

        <div className="row bg bg-light p-5">
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
                    <div className="col-12 text-center">
                    <button type="submit" className="btn btn-secondary text-center">Register</button>
                    </div>
                </form>
            </div>
        </div>
</>
)
}