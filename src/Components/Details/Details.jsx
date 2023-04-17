import React, { useEffect, useState } from 'react'
import "./Details.css"

const Details = () => {
    const key = window.location.pathname.split("/").pop();
    const [hospital, setHospital] = useState({});
    useEffect(() => {
        const fetchHospital = async () => {
            const response = await fetch("https://4040-117-250-228-82.ngrok-free.app/gethospitalinfo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "id": key
                }),
            });

            const data = await response.json();
            console.log(data);
            setHospital(data.hosp_info);
        };
        fetchHospital();
    }, [])
    return (
        <div id='info-card-div'>
            <div id="info-card">
                <div id="name-and-address">
                    <div id="hosp-name">{hospital.name}</div>
                    <div id="address">
                        <div id="location">
                            {hospital.address}
                        </div>
                    </div>
                </div>
                <div id="contact-details">
                    {(hospital.email==="")?"":<div id="email-div" className='hosp-info'>
                        <i class="fa-solid fa-envelope icon"></i>
                    <a href={`mailto:${hospital.email}`}>{hospital.email}</a>
                    </div>}
                    {(hospital.website==="")?"":<div id="web-div" className='hosp-info'>
                        <i  class="fa-solid fa-globe icon"></i>
                        <a href={hospital.website}>{hospital.website}</a>
                    </div>}
                    <div id="phone-div" className='hosp-info'>
                        <i class="fa-solid fa-phone icon"></i>
                        <a href={`tel:${hospital.phone}`}>{hospital.phone}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details