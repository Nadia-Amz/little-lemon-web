import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Confirmed from "../components/Confirmed";


const Confirmedpage = () =>{
    return (
        <div className="confirmed">
            <div className="header">
            <Header/>
            <Nav/>
            </div>
            <Confirmed/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};
export default Confirmedpage;