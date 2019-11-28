import React, { useState } from "react";


export default function Registration() {
  const [showFormData, setShowFormData] = useState(false);

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [middleName, setMiddleName] = useState(null);
  const [nationality, setNationality] = useState(null);
  const [email, setEmail] = useState(null);
  const [mobileNumber, setMobileNumber] = useState(null);
  const [formSelect, setFormSelect] = useState(null);

  const displayFormData = e => {
    e.preventDefault();

    if (
      firstName &&
      lastName &&
      middleName &&
      nationality &&
      email &&
      mobileNumber &&
      formSelect
    ) {
      setShowFormData(true);
    } else {
      return alert("Something is missed!!!")
    }
  };
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <form className="input-wrapper">
          <label className="input-name">
            First name
            <input
              onChange={event => setFirstName(event.target.value)}
              className="forms-input"
              type="text"
              placeholder="First name"
            />
          </label>
          <label className="input-name">
            Last name
            <input
              onChange={event => setLastName(event.target.value)}
              className="forms-input"
              type="text"
              placeholder="Last name"
            />
          </label>
          <label className="input-name">
            Middle name
            <input
              onChange={event => setMiddleName(event.target.value)}
              className="forms-input"
              type="text"
              placeholder="Middle name"
            />
          </label>
          <label className="input-name">
            Nationality
            <input
              onChange={event => setNationality(event.target.value)}
              className="forms-input"
              type="text"
              placeholder="Nationality"
            />
          </label>
          <label className="input-name">
            E-mail
            <input
              onChange={event => setEmail(event.target.value)}
              className="forms-input"
              type="email"
              placeholder="Email"
            />
          </label>
          <label className="input-name">
            Mobile number
            <input
              onChange={event => setMobileNumber(event.target.value)}
              className="forms-input"
              type="number"
              placeholder="Mobile number"
            />
          </label>
          <label className="input-name">
            Where to travel
            <select
              onChange={event => setFormSelect(event.target.value)}
              className="forms-select"
            >
              <option selected disabled>
                Where to travel?
              </option>
              <option>Scandinavia</option>
              <option>Canada</option>
              <option>Russia</option>
              <option>Greenland</option>
              <option>Antarctica</option>
              <option>Australia</option>
            </select>
          </label>
          <button onClick={displayFormData} type="button" className="forms-btn">
            Submit
          </button>
        </form>
      </div>
      {showFormData && (
        <div className="result-wrapper">
          <p className="result">{firstName}</p>
          <p className="result">{lastName}</p>
          <p className="result">{middleName}</p>
          <p className="result">{nationality}</p>
          <p className="result">{email}</p>
          <p className="result">{mobileNumber}</p>
          <p className="result">{formSelect}</p>
        </div>
      )}
    </div>
  );
}
