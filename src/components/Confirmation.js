import React, { useState } from "react";
import restaurant from "../images/restaurant.jpg";
import {useNavigate} from 'react-router-dom';
import '../components/css/Style.css';


const Confirmation = () => {
    const navigate = useNavigate();
    const navigateToConfirmedpage =() =>{
    navigate('/confirmedpage');
  };

    const[formData, setFormData] = useState({
        name: '',
        Lname: '',
        phone: '',
        email: '',
        Comment:'',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
          Lname: value,
        });
      };

    // const handleSubmit = (e) => {
    // e.preventDefault();
    // };

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
                         <input type="text" name="name" placeholder="Enter your first name" onChange={handleChange} required></input></div>
                         <div className="case">
                <label className="labelss">Last name :</label>
                         <input type="text" name="Lname" placeholder="Enter your last name" onChange={handleChange} required></input></div>
                         <div className="case">
                <label  className="labelss">Phone number :</label>
                        <input type="tel" name ="phone" placeholder="Enter your phone number" required></input></div>
                        <div className="case">
                <label className="labelss">Email :</label>
                         <input type="email" name ="email" placeholder="example@gmail.com" required></input></div>
                         <div className="case">
                <label className="labelss">Comment :</label>
                        <input className="Comments" name ="comment" type="text" placeholder="Your comment..."></input></div>
                        <div className="buttonS">
                <button className="buttonR"type="submit" onClick={navigateToConfirmedpage}>Confirm</button></div>
        </div>
        </div>
        </div>
        </form>
    );
};
export default Confirmation;
