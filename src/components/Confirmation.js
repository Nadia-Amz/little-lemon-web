import React from "react";
import restaurant from "../images/restaurant.jpg";
import {useNavigate} from 'react-router-dom';
import '../components/css/Style.css';


const Confirmation = () => {
    const navigate = useNavigate();
  const navigateToConfirmedpage =() =>{
    navigate('/confirmedpage');
  };

    return(
        <form className="form">
            <div>
                <img className="restaurant" src={restaurant} alt=""></img>
            </div>

        <div className="confirmaionForm">
            <div className="border">
                <h1>Confirmation </h1>
                <div className="inputs">
                    <div className="case">
                <label className="labelss">First name :</label>
                         <input type="text" placeholder="Enter your first name"></input></div>
                         <div className="case">
                <label className="labelss">Last name :</label>
                         <input type="text" placeholder="Enter your last name" ></input></div>
                         <div className="case">
                <label  className="labelss">Phone number :</label>
                        <input type="text" placeholder="Enter your phone number"></input></div>
                        <div className="case">
                <label className="labelss">Email :</label>
                         <input type="text" placeholder="Enter your email address"></input></div>
                         <div className="case">
                <label className="labelss">Comment :</label>
                        <input className="Comments" type="text" placeholder="Your comment..."></input></div>
                        <div className="buttonS">
                <button className="buttonR"type="submit" onClick={navigateToConfirmedpage}>Confirm</button></div>
        </div>
        </div>
        </div>
        </form>
    );
};
export default Confirmation;
