import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Confirmation from "../components/Confirmation";


const Confirmationpage = () => {

    return (
        <>
        <div className="confirmation">
            <div className="header">
                <Header />
                <Nav />
            </div>
            <Confirmation />
            <Testimonials />
            <Footer />
        </div>
        </>
    );
};
export default Confirmationpage;