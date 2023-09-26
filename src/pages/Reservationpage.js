import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Reservation from "../components/Reservation";
import Footer from "../components/Footer";

const Reservationpage = () =>{
    return (
        <div className="reservation">
            <div className="header">
            <Header/>
            <Nav/>
            </div>
            <Reservation/>
            <Footer/>
        </div>
    );
};
export default Reservationpage;