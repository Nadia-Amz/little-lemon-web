import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

const Home = () => {

    return (
        <>
        <div className="home">
            <div className="header">
                <Header />
                <Nav />
            </div>
            <Main />
            <Testimonials />
            <Footer />
        </div>
        </>
    );
};
export default Home;