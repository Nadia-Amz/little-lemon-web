import React from "react";
import ImageHeader from "../images/ImageHeader.jpg";
import salade from "../images/salade.jpg";
import brushetta from "../images/brushetta.jpg";
import lemonDessert from "../images/lemonDessert.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
    return (
        <section>
           <section className="text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant,</p>
                    <p>focused on traditional recipes served with a modern twist.</p>
                <button type="submit">Reserve a table</button>
                <img className="headerImage" src={ImageHeader} alt=""></img>
            </section>
           <section className="specials">
            <p>This weeek specials !</p>
            <button type="submit">Online Menu</button></section>
            <section className="menu">
                <card className="card1">
            <img src={salade} alt=""></img>
            <h2>Greek Salad </h2>
            <h3>$12.99</h3>
            <p>The famous greek salad of crispy lettuce, 
                peppers, olives and our Chicago style feta cheese, 
                garnished with crunchy garlic and rosemary croutons. </p>
                <a href="#order">Order a delivery</a>
                <FontAwesomeIcon className="icon1" icon={faBicycle} />
                </card>
                <card className="card2">
                <img src={brushetta} alt=""></img>
            <h2>Brushetta</h2>
            <h3>$7.99</h3>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. 
                Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations.
                 In Italy,a brustolina grill is frequently used to create bruschetta. </p>
                <a href="#order">Order a delivery</a>
                <FontAwesomeIcon className="icon2" icon={faBicycle} />
                </card>
                <card className="card3">
                <img src={lemonDessert} alt=""></img>
            <h2>Lemon dessert</h2>
            <h3>$5.00</h3>
            <p>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. 
                Aliquam sed cursus. </p>
                <a href="#order">Order a delivery</a>
                <FontAwesomeIcon className="icon3"icon={faBicycle} />
                </card>
            </section>
        </section>
    );
};

export default Main;
