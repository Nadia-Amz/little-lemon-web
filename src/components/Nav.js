import React, {useState} from "react";
import '../components/css/Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Link } from 'react-router-dom';

const Nav = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    // const [showNav, setShowNav] = useState(false)

    // const toggleNavItems = () => {
    //  setShowNav(!showNav)
    // }

    // const removeNav = () => {
    //     setShowNav(false)
    // }

    return (
        <nav className={`navigation ${isNavOpen ? 'open' : ''}`}>
            {/* <FontAwesomeIcon className="bars" icon={faBars} onClick={toggleNavItems}/> */}
            <button className="bars" onClick={() => setIsNavOpen(!isNavOpen)}>
            <FontAwesomeIcon icon={faBars} />
            </button>
            {isNavOpen&&(
        <div className="navElements" >
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
            </div>
            )}
        </nav>
    );
};
export default Nav;
