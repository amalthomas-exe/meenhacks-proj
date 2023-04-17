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
        const response = await fetch("https://93cb-117-250-228-82.ngrok-free.app/addhospital",{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(details)
        });
        const json = await response.json();
        console.log(json);
        alert("Hospital added successfully");
        setDetails({name:"", address:"", city:"", pincode:"", email:"", phone:"", website:"", genbeds:"", icubeds:"", neobeds:""});
    }

    return(
        <div className='wrapper'>
        <form>
            <label>Name</label>
            <input name="name"  onChange={updateDetails}/>

            <label>Address</label>
            <textarea name="address" onChange={updateDetails}/>

            <label>City</label>
            <input name="city" onChange={updateDetails}/>

            <label>Pin Code</label>
            <input name="pincode" onChange={updateDetails}/>

            <label>Email</label>
            <input name="email" onChange={updateDetails}/>

            <label>Phone</label>
            <input name="phone" onChange={updateDetails}/>

            <label>Website</label>
            <input name="website" onChange={updateDetails}/>

            <label>Gen Beds</label>
            <input name="genbeds" onChange={updateDetails}/>

            <label>ICU beds</label>
            <input name="icubeds" onChange={updateDetails}/>

            <label>Neo Beds</label>
            <input name="neobeds" onChange={updateDetails}/>
            
            <input type="submit" className="submitButton" onClick={submitDetails} />
      </form>
      </div>
    );
}

export default Form;