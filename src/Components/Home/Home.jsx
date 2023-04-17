import React, { useState } from 'react'
import HospitalCards from '../HospitalCards/HospitalCards';
import "./Home.css"

const Home = () => {

  const [city, setCity] = useState("");
  const [availableHospitals, setAvailableHospitals] = useState([]);

  const updateCity = (e) => {
    setCity(e.target.value);
    console.log(city)
  }

  const  searchHospitals = async ()=>{
    const response = await fetch("https://93cb-117-250-228-82.ngrok-free.app/gethospitals",{
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify({
        city:city
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
          <div id="search-results">
          <div id="results-title">
            Availabe hospitals
          </div>
          <div id="results-cards">
            {
              availableHospitals.map((hospital)=>{
                return <HospitalCards key={hospital._id} hospital={hospital} />
              }
              )
            }
          </div>
          </div>
      </section>
    </div>
  )
}

export default Home