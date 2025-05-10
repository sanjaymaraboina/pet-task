import React, { useState } from "react";
import "./Step1.css";

const Step1 = ({ formData, handleChange, nextStep }) => {
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const isFormValid = () => {
    const { fullName, phone, email, address, termsAgreed } = formData;
    return (
      fullName.trim() &&
      phone.trim() &&
      email.trim() &&
      address.trim() &&
      termsAgreed
    );
  };

  return (
    <div className="form-step">
      <h3>Owner Information</h3>
      <div className="form-grid">
        <div className="form-group">
          <label>Full Name</label>
          <input
            name="fullName"
            placeholder="Enter Here"
            value={formData.fullName}
            onChange={handleChange}
            className={
              attemptedSubmit && !formData.fullName.trim() ? "error" : ""
            }
          />
          {attemptedSubmit && !formData.fullName.trim() && (
            <small className="error-text">Full Name is required</small>
          )}
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            name="phone"
            placeholder="Enter Here"
            value={formData.phone}
            onChange={handleChange}
            className={attemptedSubmit && !formData.phone.trim() ? "error" : ""}
          />
          {attemptedSubmit && !formData.phone.trim() && (
            <small className="error-text">Phone number is required</small>
          )}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            placeholder="Enter Here"
            value={formData.email}
            onChange={handleChange}
            className={attemptedSubmit && !formData.email.trim() ? "error" : ""}
          />
          {attemptedSubmit && !formData.email.trim() && (
            <small className="error-text">Email is required</small>
          )}
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            name="address"
            placeholder="Enter Here"
            value={formData.address}
            onChange={handleChange}
            className={
              attemptedSubmit && !formData.address.trim() ? "error" : ""
            }
          />
          {attemptedSubmit && !formData.address.trim() && (
            <small className="error-text">Address is required</small>
          )}
        </div>
      </div>

      <label className="checkbox">
        <div id="check" >
          <div>
            {" "}
            <input
              type="checkbox"
              name="termsAgreed"
              checked={formData.termsAgreed}
              onChange={handleChange}
              style={{marginTop:"8px"}}
            />
          </div>
          
          <div>
          <p>I agree to the terms and Privacy Policy</p>
          
        </div>
       
        </div>
        {attemptedSubmit && !formData.termsAgreed && (
          <p className="error-text" style={{paddingLeft:"15px"}}>You must agree to the terms</p>
        )}
        <div id="error">
          <p>
            &#9654;&nbsp;&nbsp;&nbsp;Lorem, ipsum dolor sit amet consectetur
            adipisicing elit
          </p>
          <br />
          <p>
            &#9654;&nbsp;&nbsp;&nbsp;Lorem, ipsum dolor sit amet consectetur
            adipisicing elit
          </p>
          <br />
          <p>
            &#9654;&nbsp;&nbsp;&nbsp;Lorem, ipsum dolor sit amet consectetur
            adipisicing elit
          </p>
          <br />
          <p>
            &#9654;&nbsp;&nbsp;&nbsp;Lorem, ipsum dolor sit amet consectetur
            adipisicing elit
          </p>
          <br />
        </div>
      </label>

      <div className="button-container">
        <button
          className={`next-btn ${isFormValid() ? "enabled" : ""}`}
          onClick={() => {
            setAttemptedSubmit(true);
            if (isFormValid()) nextStep();
          }}
        >
          Continue →
        </button>
      </div>
    </div>
  );
};

export default Step1;
