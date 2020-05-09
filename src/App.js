import React from 'react';
import './App.css';
// import ReactDOM from 'react-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
// library.add(fab, faCheckSquare, faCoffee)
import Main from './Components/Main';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Jumbotron from './Components/Jumbotron';
// import Carousel from './Components/Carousel';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Login />
    {/* <Carousel /> */}
    <Jumbotron />
    <Home />
     <Main />
    <Footer />
    </div>
  );
}

export default App;
