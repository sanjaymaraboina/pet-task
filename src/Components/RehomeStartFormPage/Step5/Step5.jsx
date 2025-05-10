import React, { useState } from "react";

const Step5 = ({ formData, handleChange, nextStep, prevStep }) => {
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const isFormValid = () => {
    const { favoriteActivities, dietaryPreferences, otherInfo } = formData;
    return (
      favoriteActivities?.trim() &&
      dietaryPreferences?.trim() &&
      otherInfo?.trim()
    );
  };

  const handleNextClick = () => {
    setAttemptedSubmit(true);
    if (isFormValid()) nextStep();
  };

  const getError = (field) => attemptedSubmit && !formData[field]?.trim();

  return (
    <div className="form-step">
      <h3>Additional Details</h3>
      <div className="form-grid">
        <div className="form-group">
          <label>Favorite Activities and Toys</label>
          <input
            name="favoriteActivities"
            placeholder="Enter Here"
            value={formData.favoriteActivities || ""}
            onChange={handleChange}
            className={getError("favoriteActivities") ? "error" : ""}
          />
          {getError("favoriteActivities") && (
            <small className="error-text">Favorite activities are required</small>
          )}
        </div>

        <div className="form-group">
          <label>Dietary Preferences or Restrictions</label>
          <input
            name="dietaryPreferences"
            placeholder="Enter Here"
            value={formData.dietaryPreferences || ""}
            onChange={handleChange}
            className={getError("dietaryPreferences") ? "error" : ""}
          />
          {getError("dietaryPreferences") && (
            <small className="error-text">Dietary preferences are required</small>
          )}
        </div>

        <div className="form-group full-width">
          <label>Any Other Information That Would Help in Rehoming</label>
          <input
            name="otherInfo"
            placeholder="Enter Here"
            value={formData.otherInfo || ""}
            onChange={handleChange}
            className={getError("otherInfo") ? "error" : ""}
          />
          {getError("otherInfo") && (
            <small className="error-text">Other information is required</small>
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

export default Step5;
