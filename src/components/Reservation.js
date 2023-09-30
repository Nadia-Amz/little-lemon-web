import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import restaurant from "../images/restaurant.jpg";
import '../components/css/Style.css';


const Reservation = () => {

  const [selectedOccasion, setSelectedOccasion] = useState('birthday');
  const [selectedPartysize, setSelectedPartysize] = useState('2people');
  const [selectedYear, setSelectedYear] = useState('2023');
  const [selectedMonth, setSelectedMonth] = useState('1');
  const [selectedDay, setSelectedDay] = useState('01');
  const [selectedHour, setSelectedHour] = useState('14');
  const [selectedMinute, setSelectedMinute] = useState('00');

  const handleOccasionChange = (event) => {
    setSelectedOccasion(event.target.value);
  };

  const handlePartysizeChange = (event) => {
    setSelectedPartysize(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const handleHourChange = (event) => {
    setSelectedHour(event.target.value);
  };

  const handleMinuteChange = (event) => {
    setSelectedMinute(event.target.value);
  };

  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if every input field is filled out
    if (standardChecked || outdoorChecked) {
      console.log("ACCEPTED");
      navigateToConfirmationpage();
    } else {
      setErrorMessage("Oops! The form is uncompleted");
          // alert("The form is uncompleted");
          // console.log("The form is uncompleted");
    }

  };
  
  const [standardChecked, setStandardChecked] = useState(false);
  const [outdoorChecked, setOutdoorChecked] = useState(false);

  const handleStandardChange = () => {
    setStandardChecked(!standardChecked);
    if (outdoorChecked) {
      setOutdoorChecked(!outdoorChecked);
    }
  };

  const handleOutdoorChange = () => {
    setOutdoorChecked(!outdoorChecked);
    if (standardChecked) {
      setStandardChecked(!standardChecked);
    }
  };
  
  const navigate = useNavigate();
  const navigateToConfirmationpage =() =>{
    navigate('/confirmationpage');
  };

  return (
    <section className="Form">
      <div>
        <img className="restaurant" src={restaurant} alt=""></img>
      </div>
      <form className="formgroup" >
        <div className="border">
          <h1>Reserve a table</h1>
          {errorMessage && <div className="error"> {errorMessage} </div>}

          <div className="options">
            <label className="labels">Seating options :</label>
            <div className="optioncheckbox">
              <div className="standardcheck">
                <input
                  type="checkbox"
                  id="standardCheckbox"
                  checked={standardChecked}
                  onChange={handleStandardChange}
                />
                <label className="labels" htmlFor="standardCheckbox">Standard</label>
              </div>
              <div className="outdoorcheck">
                <input
                  type="checkbox"
                  id="outdoorCheckbox"
                  checked={outdoorChecked}
                  onChange={handleOutdoorChange}
                />
                <label className="labels" htmlFor="outdoorCheckbox">Outdoor</label>
              </div>
            </div>
          </div>
          <div className="Occasion">
            <label className="labels" htmlFor="occasionDropdown">Occasion :</label>
            <select
              id="occasionDropdown"
              value={selectedOccasion}
              onChange={handleOccasionChange}
            >

              <option value="birthday">Birthday</option>
              <option value="engagement">Engagement</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </div>
          <div className="Party">
            <label className="labels" htmlFor="partysizeDropdown">Party size :</label>
            <select
              id="partysizeDropdown"
              value={selectedPartysize}
              onChange={handlePartysizeChange}
            >

              <option value="2people">2 people</option>
              <option value="4people">4 people</option>
              <option value="6people">6 people</option>

            </select>
          </div>


          <div className="date">
            <label className="labels" htmlFor="year">Date :</label>
            <div className="dropdowndate">
              <select id="year" value={selectedYear} onChange={handleYearChange}>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>

              <select id="month" value={selectedMonth} onChange={handleMonthChange}>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>

              </select>

              <select id="day" value={selectedDay} onChange={handleDayChange}>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
            </div>
          </div>

          <div className="hour">
            <label className="labels" htmlFor="hour">Hour :</label>
            <div className="dropdownhour">
              <select id="hour" value={selectedHour} onChange={handleHourChange}>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
              </select>

              <select id="minute" value={selectedMinute} onChange={handleMinuteChange}>
                <option value="00">00</option>
                <option value="01">05</option>
                <option value="02">10</option>
                <option value="03">15</option>
                <option value="04">20</option>
                <option value="05">25</option>
                <option value="06">30</option>
                <option value="07">35</option>
                <option value="08">40</option>
                <option value="09">45</option>
                <option value="10">50</option>
                <option value="11">55</option>
              </select>
            </div>
          </div>
          <div className="buttonS">
            <button className="buttonR" type="submit" onClick={handleSubmit} >Submit</button>
            

           
          </div>
        </div>
      </form>
    </section>
  );

}; export default Reservation;