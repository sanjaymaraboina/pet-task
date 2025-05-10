import React, { useState } from "react";
import "./Step2.css";

const Step2 = ({ formData, handleChange, nextStep, prevStep }) => {
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const isFormValid = () => {
    const { petType, petName, breed, gender, age, size, microchipNumber, vaccinated, spayedNeutered, healthIssues } = formData;
    return (
      petType?.trim() &&
      petName?.trim() &&
      breed?.trim() &&
      gender?.trim() &&
      age?.trim() &&
      size?.trim() &&
      microchipNumber?.trim() &&
      vaccinated?.trim() &&
      spayedNeutered?.trim() &&
      healthIssues?.trim()
    );
  };

  const handleNextClick = () => {
    setAttemptedSubmit(true);
    if (isFormValid()) nextStep();
  };

  const getError = (field) => attemptedSubmit && !formData[field]?.trim();

  return (
    <div className="form-step">
      <h3>Pet Information</h3>
      <div className="form-grid">
        <div className="form-group">
          <label>Pet Type</label>
          <input
            name="petType"
            placeholder="Select Here"
            value={formData.petType || ""}
            onChange={handleChange}
            className={getError("petType") ? "error" : ""}
          />
          {getError("petType") && (
            <small className="error-text">Pet type is required</small>
          )}
        </div>

        <div className="form-group">
          <label>Pet Name</label>
          <input
            name="petName"
            placeholder="Select Here"
            value={formData.petName || ""}
            onChange={handleChange}
            className={getError("petName") ? "error" : ""}
          />
          {getError("petName") && (
            <small className="error-text">Pet name is required</small>
          )}
        </div>

        <div className="form-group">
          <label>Breed</label>
          <input
            name="breed"
            placeholder="Select Here"
            value={formData.breed || ""}
            onChange={handleChange}
            className={getError("breed") ? "error" : ""}
          />
          {getError("breed") && (
            <small className="error-text">Breed is required</small>
          )}
        </div>

        <div className="form-group">
          <label>Gender</label>
          <input
            name="gender"
            placeholder="Select Here"
            value={formData.gender || ""}
            onChange={handleChange}
            className={getError("gender") ? "error" : ""}
          />
          {getError("gender") && (
            <small className="error-text">Gender is required</small>
          )}
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            name="age"
            placeholder="Enter Here"
            value={formData.age || ""}
            onChange={handleChange}
            className={getError("age") ? "error" : ""}
          />
          {getError("age") && (
            <small className="error-text">Age is required</small>
          )}
        </div>

        <div className="form-group">
          <label>Size</label>
          <input
            name="size"
            placeholder="Select Here"
            value={formData.size || ""}
            onChange={handleChange}
            className={getError("size") ? "error" : ""}
          />
          {getError("size") && (
            <small className="error-text">Size is required</small>
          )}
        </div>

        <div className="form-group">
          <label>Microchip Number</label>
          <input
            name="microchipNumber"
            placeholder="Enter Here"
            value={formData.microchipNumber || ""}
            onChange={handleChange}
            className={getError("microchipNumber") ? "error" : ""}
          />
          {getError("microchipNumber") && (
            <small className="error-text">Microchip number is required</small>
          )}
        </div>

        <div className="form-group">
          <label>Vaccinated</label>
          <input
            name="vaccinated"
            placeholder="Enter Here"
            value={formData.vaccinated || ""}
            onChange={handleChange}
            className={getError("vaccinated") ? "error" : ""}
          />
          {getError("vaccinated") && (
            <small className="error-text">Vaccinated status is required</small>
          )}
        </div>

        <div className="form-group">
          <label>Spayed/Neutered</label>
          <input
            name="spayedNeutered"
            placeholder="Select Here"
            value={formData.spayedNeutered || ""}
            onChange={handleChange}
            className={getError("spayedNeutered") ? "error" : ""}
          />
          {getError("spayedNeutered") && (
            <small className="error-text">Spayed/Neutered status is required</small>
          )}
        </div>

        <div className="form-group">
          <label>Health Issues or Special Needs</label>
          <input
            name="healthIssues"
            placeholder="Enter Here"
            value={formData.healthIssues || ""}
            onChange={handleChange}
            className={getError("healthIssues") ? "error" : ""}
          />
          {getError("healthIssues") && (
            <small className="error-text">Health issues or special needs are required</small>
          )}
        </div>
      </div>

      <div className="navigation-buttons">
        <button onClick={prevStep}>← Back</button>
        <button onClick={handleNextClick}>Continue →</button>
      </div>
    </div>
  );
};

export default Step2;
