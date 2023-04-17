import React from 'react'
import './HospitalCards.css'

const HospitalCards = (props) => {
  return (
    <div>
        <div id="card">
            <div id="name-and-location">
                <div id="name">
                    {props.hospital.name}
                </div>
                <div id="location">
                <i id="location-icon" class="fa-solid fa-location-dot"></i>
                {props.hospital.address}
                </div>
            </div>
            <div id="hosp-info">
              <div className="beds-info">
                <div className="beds-name">General Ward Beds:</div>
                <div className="beds-count">{props.hospital.general_beds}</div>
              </div>
              <div className="beds-info">
                <div className="beds-name">ICU Beds:</div>
                <div className="beds-count">{props.hospital.icu_beds}</div>
              </div>
              <div className="beds-info">
                <div className="beds-name">Neonatal Beds:</div>
                <div className="beds-count">{props.hospital.neo_beds}</div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HospitalCards