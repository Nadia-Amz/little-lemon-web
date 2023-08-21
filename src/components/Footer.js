import React from "react";
import logo from "../images/logo.jpg";
import '../components/css/Style.css';

const Footer = () => {
    return (
        <section className="footer">
            <img className="logo2" src={logo} alt=""></img>
            <section className="about">

                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#menu">Menu</a>
                <a href="#reservation">Reservation</a>
                <a href="#orderonline">Order Online</a>
                <a href="#login">Login</a>

            </section>
            <section className="about1">

                <a href="#address">Address</a>

                <a href="#phonenumber">Phone Number</a>

                <a href="#email">Email</a>

            </section>
            <section className="about2">
                                <a href="#facebook">Facebook</a>
                           
                                            <a href="#instagram">Instagram</a>

            </section>
        </section>

    );
};
export default Footer;
