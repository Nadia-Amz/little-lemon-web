import React from "react";
import '../components/css/Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navigation">
            <FontAwesomeIcon className="bars" icon={faBars} />
        
            <ul>
                <li><Link to="/home">Home</Link> 
                </li>
            </ul>

            <ul>
                <li> <Link to="/about">About</Link>
                </li>
            </ul>

            <ul>
                <li>  <Link to="/menu">Menu</Link>
                </li>
            </ul>

            <ul>
                <li> <Link to="/reservationpage">Reservation</Link>
                </li>
            </ul>

            <ul>
                <li><Link to="/orderOnline">Order Online</Link>
                </li>
            </ul>
            
            <ul>
                <li> <Link to="/login">Login</Link>
                </li>
            </ul>

        </nav>
    );
};
export default Nav;
