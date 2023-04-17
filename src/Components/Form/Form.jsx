import './form.css'

const Form = () => {
    return(
        <div className='wrapper'>
        <form>
            <label>Name</label>
            <input name="name"  />

            <label>Address</label>
            <input name="address" />

            <label>City</label>
            <input name="city"/>

            <label>Email</label>
            <input name="email"/>

            <label>Phone</label>
            <input name="phone"/>

            <label>Website</label>
            <input name="website"/>

            <label>Gen Beds</label>
            <input name="genbeds"/>

            <label>ICU beds</label>
            <input name="icubeds"/>

            <label>Neo Beds</label>
            <input name="neobeds"/>
            
            <input type="submit" className="submitButton" />
      </form>
      </div>
    );
}

export default Form;