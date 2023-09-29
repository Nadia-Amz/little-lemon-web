import React from "react";
import restaurant from "../images/restaurant.jpg";
import '../components/css/Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom';


const Confirmed = () => {
    const navigate = useNavigate();
    const navigateToHome =() =>{
      navigate('/Home');
    };
    return (
        <div className="LastStep">
            <div>
                <img className="restaurant" src={restaurant} alt=""></img>
            </div>
            <div className="Box">
            <div className="iconCheck">
            <FontAwesomeIcon className="ICON" icon={faCircleCheck} /></div>
            <div className="Infos">
            <h1>Table reserved !</h1>
            <h3>An email sent to ******@gmail.com</h3>
            </div>
            <div className="butoonS">
            <button className="buttonR" type="submit" onClick={navigateToHome}>Done</button>
            </div>
            </div>
        </div>
    );
};
export default Confirmed;
