import React from "react";
import '../components/css/Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return (
        <nav className="navigation">
            <FontAwesomeIcon className="bars" icon={faBars} />
        
            <ul>
                <li><a href="#home">Home</a> 
                </li>
            </ul>

            <ul>
                <li> <a href="#about">About</a>
                </li>
            </ul>

            <ul>
                <li>  <a href="#menu">Menu</a>
                </li>
            </ul>

            <ul>
                <li> <a href="#reservation">Reservation</a>
                </li>
            </ul>

            <ul>
                <li><a href="#orderonline">Order Online</a>
                </li>
            </ul>
            
            <ul>
                <li> <a href="#login">Login</a>
                </li>
            </ul>

        </nav>
    );
};
export default Nav;
