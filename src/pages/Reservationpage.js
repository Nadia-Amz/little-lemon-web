import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Reservation from "../components/Reservation";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

const Reservationpage = ({ availableTimes, setAvailableTimes }) =>{
    return (
        <div className="reservation">
            <div className="header">
            <Header/>
            <Nav/>
            </div>
            <Reservation availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};
export default Reservationpage;