import React, { useState } from "react";
import '../components/css/Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Nav = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className="navigation">

                <div className={`navElements ${isMobileMenuOpen ? 'mobile-menu' : ''}`} >
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
                <div className="bars" onClick={toggleMobileMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </nav>
        </>
    );
};
export default Nav;
