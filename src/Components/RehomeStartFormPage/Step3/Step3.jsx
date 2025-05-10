import React, { useState } from "react";
import "../Step2/Step2.css";

const Step3 = ({ formData, handleChange, nextStep, prevStep }) => {
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const isFormValid = () => {
    const {
      petType, petName, breed, gender, age, size,
      microchipNumber, vaccinated, spayedNeutered,
      healthIssues, behaviorIssues
    } = formData;
  
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
      healthIssues?.trim() &&
      behaviorIssues?.trim()
    );
  };
  

  const handleNextClick = () => {
    setAttemptedSubmit(true);
    if (isFormValid()) nextStep();
  };

  const getError = (field) => attemptedSubmit && !formData[field]?.trim();

  return (
    <div className="form-step">
      <h3>Behavior and Lifestyle</h3>
      <div className="form-grid">
        <div className="form-group">
          <label>Temperament</label>
          <input
            name="temperament"
            placeholder="Select Here"
            value={formData.temperament || ""}
            onChange={handleChange}
            className={getError("temperament") ? "error" : ""}
          />
          {getError("temperament") && (
            <small className="error-text">Temperament is required</small>
          )}
        </div>

        <div className="form-group">
          <label>Activity Level</label>
          <input
            name="activityLevel"
            placeholder="Select Here"
            value={formData.activityLevel || ""}
            onChange={handleChange}
            className={getError("activityLevel") ? "error" : ""}
          />
          {getError("activityLevel") && (
            <small className="error-text">Activity level is required</small>
          )}
        </div>

        <div className="form-group">
          <label>Good with Kids</label>
          <input
            name="goodWithKids"
            placeholder="Select Here"
            value={formData.goodWithKids || ""}
            onChange={handleChange}
            className={getError("goodWithKids") ? "error" : ""}
          />
          {getError("goodWithKids") && (
            <small className="error-text">This field is required</small>
          )}
        </div>

        <div className="form-group">
          <label>Good with Other Pets</label>
          <input
            name="goodWithPets"
            placeholder="Select Here"
            value={formData.goodWithPets || ""}
            onChange={handleChange}
            className={getError("goodWithPets") ? "error" : ""}
          />
          {getError("goodWithPets") && (
            <small className="error-text">This field is required</small>
          )}
        </div>

        <div className="form-group">
          <label>House Trained</label>
          <input
            name="houseTrained"
            placeholder="Enter Here"
            value={formData.houseTrained || ""}
            onChange={handleChange}
            className={getError("houseTrained") ? "error" : ""}
          />
          {getError("houseTrained") && (
            <small className="error-text">House training info required</small>
          )}
        </div>

        <div className="form-group">
          <label>Potty Trained</label>
          <input
            name="pottyTrained"
            placeholder="Select Here"
            value={formData.pottyTrained || ""}
            onChange={handleChange}
            className={getError("pottyTrained") ? "error" : ""}
          />
          {getError("pottyTrained") && (
            <small className="error-text">Potty training info required</small>
          )}
        </div>

        <div className="form-group">
  <label>Any Behavior Issues</label>
  <input
    name="behaviorIssues"
    placeholder="Enter Here"
    value={formData.behaviorIssues || ""}
    onChange={handleChange}
    className={getError("behaviorIssues") ? "error" : ""}
  />
  {getError("behaviorIssues") && (
    <small className="error-text">Behavior issues are required</small>
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

export default Step3;
