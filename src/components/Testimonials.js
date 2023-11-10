import React from "react";
import Mario from "../images/Mario and Adrian b.jpg";
import chef from "../images/chef B.jpg";



const Testimonials = () => {

    return (
    <>
        <section className="description">
            <article className="describe">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant,
                    focused on traditional recipes served with a modern twist.</p>
            </article>
            <article className="photos">
                <img className="chef" src={chef} alt=""></img>
                <img className="mario" src={Mario} alt=""></img>
            </article>
        </section>
    </>    
    );
};
export default Testimonials;