import React from "react";
import ImageHeader from "../images/ImageHeader.jpg";

const Main = () => {
    return (
        <section className="main">
            <section className="text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant,
                    focused on traditional recipes served with a modern twist.</p>
                <button type="submit">Reserve a table</button>
            </section>

            <img className="headerImage" src={ImageHeader} alt=""></img>

        </section>
    );
};

export default Main;
