import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import restaurant from "../images/restaurant.jpg";
import '../components/css/Style.css';

function Reservation({ availableTimes, setAvailableTimes }) {

  const [selectedOccasion, setSelectedOccasion] = useState('birthday');
  const [selectedPartysize, setSelectedPartysize] = useState('2people');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedHour, setSelectedHour] = useState('');

  const handleOccasionChange = (event) => {
    setSelectedOccasion(event.target.value);
  };

  const handlePartysizeChange = (event) => {
    setSelectedPartysize(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setAvailableTimes({type : 'SELECT_DATE' , newDate : event.target.value});
    
  };


  const handleHourChange = (event) => {
    setSelectedHour(event.target.value);

  };

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (standardChecked || outdoorChecked) {
      console.log("ACCEPTED");
      setAvailableTimes({type : 'RESERVE_HOUR', date: selectedDate, hour: selectedHour});
      navigateToConfirmationpage();
    } else {
      setErrorMessage("Oops! The form is uncompleted");

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
  const navigateToConfirmationpage = () => {
    navigate('/confirmationpage');
  };

  return (
    <section className="Form">
      <div>
        <img className="restaurant" src={restaurant} alt=""></img>
      </div>
      <form className="formgroup" >
        <div className="border">
          <h1 data-testid="reserve-table">Reserve a table</h1>
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
              <input
                type="date"
                id="datePicker"
                name="datePicker"
                value={selectedDate}
                onChange={handleDateChange}
              />

            </div>
          </div>

          <div className="hour">
            <label className="labels" htmlFor="hour">Time :</label>
            <div className="dropdownhour">
              <select id="hour" onChange={handleHourChange}>
                <option value="Select an hour">--Select an hour--</option>
                    {availableTimes.map((hour) => (
                      <option key={hour} value={hour}>
                        {hour}
                      </option>
                    ))
                  }

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