import React from "react";
import ImageHeader from "../images/ImageHeader.jpg";
import salade from "../images/salade.jpg";
import brushetta from "../images/brushetta.jpg";
import lemonDessert from "../images/lemonDessert.jpg";
import lolita from "../images/lolita.jpg";
import carlos from "../images/carlos.jpg";
import karim from "../images/karim.jpg";
import chef  from "../images/chef B.jpg";
import Mario from "../images/Mario and Adrian b.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const Main = () => {
    return (
        <main>
           <section className="text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.</p>
                <button type="submit">Reserve a table</button>
            </section>
            <img className="headerImage" src={ImageHeader} alt=""></img>
           <section className="specials">
            <p>This weeek specials !</p>
            <button type="submit">Online Menu</button></section>
            <section className="menu">
                <article className="card1">
            <img src={salade} alt=""></img>
            <h2>Greek Salad </h2>
            <h3>$12.99</h3>
            <p>The famous greek salad of crispy lettuce, 
                peppers, olives and our Chicago style feta cheese, 
                garnished with crunchy garlic and rosemary croutons. </p>
                <a href="#order">Order a delivery</a>
                <FontAwesomeIcon className="icon1" icon={faBicycle} />
                </article>
                <article className="card2">
                <img src={brushetta} alt=""></img>
            <h2>Brushetta</h2>
            <h3>$7.99</h3>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. 
                Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations.
                 In Italy,a brustolina grill is frequently used to create bruschetta. </p>
                <a href="#order">Order a delivery</a>
                <FontAwesomeIcon className="icon2" icon={faBicycle} />
                </article>
                <article className="card3">
                <img src={lemonDessert} alt=""></img>
            <h2>Lemon dessert</h2>
            <h3>$5</h3>
            <p>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. 
                Aliquam sed cursus. </p>
                <a href="#order">Order a delivery</a>
                <FontAwesomeIcon className="icon3"icon={faBicycle} />
                </article>
            </section>
            <section className="rating">
                <section className="pers1">
                    <section className="stars">
                <FontAwesomeIcon className="star1" icon={faStar} /> 
                <FontAwesomeIcon className="star1-2" icon={faStar} /> 
                <FontAwesomeIcon className="star1-3" icon={faStar} /> 
                <FontAwesomeIcon className="star1-4" icon={faStar} /> 
                <FontAwesomeIcon className="star1-5" icon={faStar} /> 
                </section>
               <img src={lolita} alt=""></img>
                <h3>Lolita</h3>
                </section>
                <section className="pers2">
                    <section className="stars2">
                <FontAwesomeIcon className="star2" icon={faStar} />
                <FontAwesomeIcon className="star2-2" icon={faStar} /> 
                <FontAwesomeIcon className="star2-3" icon={faStar} /> 
                <FontAwesomeIcon className="star2-4" icon={faStar} /> 
                <FontAwesomeIcon className="star2-5" icon={faStar} /> 
                </section>
                <img src={carlos} alt=""></img>
                <h3>Carlos</h3>
                </section>
                <section className="pers3">
                    <section className="stars3">
                <FontAwesomeIcon className="star3" icon={faStar} /> 
                <FontAwesomeIcon className="star3-2" icon={faStar} /> 
                <FontAwesomeIcon className="star3-3" icon={faStar} /> 
                <FontAwesomeIcon className="star3-4" icon={faStar} /> 
                <FontAwesomeIcon className="star3-5" icon={faStar} /> 
                </section>
                <img src={karim} alt=""></img>
                <h3>karim</h3>
                </section>
            </section>
            <section className="description">
                <article className="describe">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, 
                    focused on traditional recipes served with a modern twist.</p>
                    </article>
                    <article className="photos">
                    <img src={chef} alt=""></img>
                    <img className="mario" src={Mario} alt=""></img>
                    </article>
            </section>
        </main>
    );
};

export default Main;
