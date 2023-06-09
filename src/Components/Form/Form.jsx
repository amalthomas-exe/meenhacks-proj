import './form.css'
import { useState } from 'react';

const Form = () => {
    const [details, setDetails] = useState({name:"", address:"", city:"", pincode:"", email:"", phone:"", website:"", genbeds:"", icubeds:"", neobeds:""});

    const updateDetails = (e) => {
        setDetails({...details, [e.target.name]:e.target.value});
        console.log(details);
    }

    const submitDetails = async (e) => {
        e.preventDefault();
        const response = await fetch("https://66af-2401-4900-22d5-5550-bb1a-16f-a4a-5176.ngrok-free.app/addhospital",{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(details)
        });
        const json = await response.json();
        console.log(json);
        setDetails({name:"", address:"", city:"", pincode:"", email:"", phone:"", website:"", genbeds:"", icubeds:"", neobeds:""});
        alert("Hospital added successfully");
    }

    return(
        <div className='wrapper'>
        <form name='form'>
            <label>Name</label>
            <input name="name" value={details.name}  onChange={updateDetails}/>

            <label>Address</label>
            <textarea name="address" value={details.address} onChange={updateDetails}/>

            <label>City</label>
            <input name="city" value={details.city} onChange={updateDetails} />

            <label>Pin Code</label>
            <input name="pincode" value={details.pincode} onChange={updateDetails}/>

            <label>Email</label>
            <input name="email" value={details.email} onChange={updateDetails}/>

            <label>Phone</label>
            <input name="phone" value={details.phone} onChange={updateDetails}/>

            <label>Website</label>
            <input name="website" value={details.website} onChange={updateDetails}/>

            <label>General Beds</label>
            <input name="genbeds" onChange={updateDetails}/>

            <label>ICU beds</label>
            <input name="icubeds" value={details.icubeds} onChange={updateDetails}/>

            <label>Neonatal Beds</label>
            <input name="neobeds" onChange={updateDetails}/>
            
            <input type="submit" className="submitButton" onClick={submitDetails} />
      </form>
      </div>
    );
}

export default Form;