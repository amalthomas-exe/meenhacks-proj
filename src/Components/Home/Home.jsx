import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import HospitalCards from '../HospitalCards/HospitalCards';
import "./Home.css"

const Home = () => {

  const [city, setCity] = useState("");
  const [availableHospitals, setAvailableHospitals] = useState([]);

  const updateCity = (e) => {
    setCity(e.target.value);
    console.log(city)
  }

  const searchHospitals = async () => {
    const response = await fetch("https://33ac-117-250-228-82.ngrok-free.app/gethospitals", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        city: city
      })
    });
    const json = await response.json();
    console.log(json.hospitals);
    setAvailableHospitals(json.hospitals)

  }
  return (
    <div>
      <section id="home">
        <div id="contents">
          <div id="title">
            <div id="title-text">
              Find available hospitals nearby
            </div>
          </div>
          <div id="search-box-div">
            <input type="text" id="search-box" name={city} onChange={updateCity} placeholder="Enter city name" />
            <div id="search-btn" onClick={searchHospitals}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
        {(availableHospitals.length==0)?"":<div id="search-results">
          <div id="results-title">
            Availabe hospitals
          </div>
          <div id="results-cards">
            {
              availableHospitals.map((hospital) => {
                return <Link  id="card-link" to={`/details/${hospital._id}`}>
                  <HospitalCards hospital={hospital} key={hospital._id} />
                </Link>
              }
              )
            }
          </div>
        </div>}
      </section>
    </div>
  )
}

export default Home