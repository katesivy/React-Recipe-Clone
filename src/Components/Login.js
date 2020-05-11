import React, { useState, userLogin } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [info, setInfo] = useState('');

    const userLogin = (e) => {
        e.preventDefault();
        const info = {
            email: email,
            password: password
        }
        axios.post('http://127.0.0.1:8000/api/login', info)
            .then(response => {
                setInfo(response.data)
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })


        console.log(info)
    }

    return (
        <div>
            <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <form onSubmit={userLogin}>
                        <div className="form-group" id="Login">
                            <label for="exampleInputEmail1">Email address</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" value={email}
                                className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" value={password} className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Login;