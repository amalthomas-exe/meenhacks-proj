import React from 'react'

const HospitalCards = (props) => {
  return (
    <div>
        <div id="card">
            <div id="name-and-location">
                <div id="name">
                    {props.name}
                </div>
                <div id="location">
                <i class="fa-solid fa-location-crosshairs"></i>
                {props.location}
                </div>
            </div>
        </div>
    </div>
  )
}

export default HospitalCards