import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (

        <div>
            <nav>
                <div className="logo">Movies Club</div>
                <ul className="navbar-links">
                    <li><Link to="./">Home</Link></li>
                    <li><Link to="./news">News</Link></li>
                    <li><Link to="./movies">Movies</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar;
