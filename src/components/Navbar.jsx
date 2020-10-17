import React from 'react';
import { Link } from 'react-router-dom';
//import './styles/Navbar.css';
// import Home from './Home';
// import News from './News';
// import Movies from './Movies';

const Navbar = () => {
    return (
        <div className="header-area">
            <header class="header-top">
                <a class="navbar-image" href="/">
                    <div class="logo-image">
                        <img src="img" class="img" />
                    </div>
                </a>
            <h1 className="navbar-logo">Movies Club<i className="fab fa-react"></i></h1>
            <ul>
                <li><Link to="./">Home</Link></li>
                <li><Link to="./news">News</Link></li>
                <li><Link to="./movies">Movies</Link></li>
            </ul>
            </header>
        </div>
    )
}
export default Navbar;
