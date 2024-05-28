import React from "react";
import logoFooter from "../images/logoFooter.jpg";
import "../components/css/Style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img className="logo2" src={logoFooter} alt=""></img>
      </div>

      <section className="about">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#menu">Menu</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#reservation">Reservation</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#orderonline">Order Online</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </section>

      <section className="about">
        <ul>
          <li>
            <a href="#address">Address</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#phonenumber">Phone Number</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#email">Email</a>
          </li>
        </ul>
      </section>

      <section className="about">
        <ul>
          <li>
            {" "}
            <a href="#facebook">Facebook</a>{" "}
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <a href="#instagram">Instagram</a>{" "}
          </li>
        </ul>
      </section>
    </footer>
  );
};
export default Footer;
