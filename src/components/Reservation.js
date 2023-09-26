import React, {useState} from "react";
import Header from "./Header";
import Nav from "./Nav";
import restaurant from "../images/restaurant.jpg";
import FormGroup  from '@mui/material/FormGroup';
import Checkbox  from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Footer from "./Footer";


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
  const handleSubmit = (event) => {
    event.preventDefault();
  };

    return (
        <section className="Form">
            <Header/>
            <Nav/>
            <Footer/>
            <div className="hero">
            <img className="restaurant" src= {restaurant} alt=""></img>
            </div>
            <form className="formGroup" onSubmit={handleSubmit}>
                <h1>Reserve a table</h1>
                <h2>Seating options :</h2>
              <FormGroup>
                <FormControlLabel required control={<Checkbox />} label="Standard" /> 
                <FormControlLabel required control={<Checkbox />} label="Outdoor" /> 
                </FormGroup>
                <div>
      <label htmlFor="occasionDropdown">Occasion :</label>
      <select
        id="occasionDropdown"
        value={selectedOccasion}
        onChange={handleOccasionChange}
      >
        <option value="">-- Select --</option>
        <option value="birthday">Birthday</option>
        <option value="engagement">Engagement</option>
        <option value="anniversary">Anniversary</option>
        </select>

        <label htmlFor="partysizeDropdown">Party size :</label>
      <select
        id="partysizeDropdown"
        value={selectedPartysize}
        onChange={handlePartysizeChange}
      >
        <option value="">-- Select --</option>
        <option value="2people">2 people</option>
        <option value="4people">4 people</option>
        <option value="6people">6 people</option>

      </select>
        </div>


        <div>
      <label htmlFor="year">Year:</label>
      <select id="year" value={selectedYear} onChange={handleYearChange}>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>

      <label htmlFor="month">Month:</label>
      <select id="month" value={selectedMonth} onChange={handleMonthChange}>
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>

      </select>

      <label htmlFor="day">Day:</label>
      <select id="day" value={selectedDay} onChange={handleDayChange}>
        <option value="01">Monday</option>
        <option value="02">Tuesday</option>
        <option value="03">Wednesday</option>
        <option value="04">Thursday</option>
        <option value="05">Friday</option>
        <option value="06">Saturday</option>
        <option value="07">Sunday</option>

      </select>
      </div>

        <div>
      <label htmlFor="hour">Hour:</label>
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

      <label htmlFor="minute">Minute:</label>
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
    <button type="submit">Submit</button>
    </form>
        </section>
    );

}; export default Reservation;