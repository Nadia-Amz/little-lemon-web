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
        Fname: '',
        Lname: '',
        phone: '',
        email: '',
        comment:'',
    })

    const[errors , setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData, [name] : value,
        
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {}
            if(!formData.Fname.trim()){
                validationErrors.Fname = "Required"
            }
            if(!formData.Lname.trim()){
                validationErrors.Lname = "Required"
            }
            if(!formData.phone.trim()){
                validationErrors.phone = "Required"
            }
            if(!formData.email.trim()){
                validationErrors.email = "Required"
            }else if(!/\S+@\S+\.\S+/.test(formData.email)){
                validationErrors.email = "Email is not valid"
            }
            setErrors(validationErrors)

            if(Object.keys(validationErrors).length === 0){
            navigateToConfirmedpage();
            console.log("form submitted succefully");
        }
        }
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
                         <input type="text" name="Fname" placeholder="Enter your first name"  value={formData.Fname}
                            onChange={handleChange} ></input></div>
                            {errors.Fname && <span>{errors.Fname}</span>}
                         <div className="case">
                <label className="labelss">Last name :</label>
                         <input type="text" name="Lname" placeholder="Enter your last name" value={formData.Lname}
                        onChange={handleChange} ></input></div>
                         {errors.Lname && <span>{errors.Lname}</span>}
                         <div className="case">
                <label  className="labelss">Phone number :</label>
                        <input type="tel" name ="phone" placeholder="Enter your phone number"   value={formData.phone}
                            onChange={handleChange} ></input></div>
                        {errors.phone && <span>{errors.phone}</span>}
                        <div className="case">
                <label className="labelss">Email :</label>
                         <input type="email" name ="email" placeholder="example@gmail.com"  value={formData.email}
                            onChange={handleChange}></input></div>
                         {errors.email && <span>{errors.email}</span>}
                        </div>
                         <div className="case">
                <label className="labelss">Comment :</label>
                        <input className="Comments" name ="comment" type="text" placeholder="Your comment..."   value={formData.Comment}
                        onChange={handleChange} ></input></div>
                        <div className="buttonS">
                <button className="buttonR"type="submit" onClick={handleSubmit}>Confirm</button></div>
        </div>
        </div>
        </form>
    );

 }; export default Confirmation;
