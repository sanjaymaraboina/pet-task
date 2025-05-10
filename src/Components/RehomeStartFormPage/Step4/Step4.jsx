import React, { useState } from "react";

const Step4 = ({ formData, handleChange, nextStep, prevStep }) => {
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const isFormValid = () => {
    const { rehomeReason, availableFrom, provideSupplies } = formData;
    return (
      rehomeReason?.trim() &&
      availableFrom?.trim() &&
      provideSupplies?.trim()
    );
  };

  const handleNextClick = () => {
    setAttemptedSubmit(true);
    if (isFormValid()) nextStep();
  };

  const getError = (field) => attemptedSubmit && !formData[field]?.trim();

  return (
    <div className="form-step">
      <h3>Reason for Rehoming</h3>
      <div className="form-grid">
        <div className="form-group">
          <label>Explanation of why the pet is being Rehomed</label>
          <input
            name="rehomeReason"
            placeholder="Enter Here"
            value={formData.rehomeReason || ""}
            onChange={handleChange}
            className={getError("rehomeReason") ? "error" : ""}
          />
          {getError("rehomeReason") && (
            <small className="error-text">Rehoming reason is required</small>
          )}
        </div>

        <div className="form-group">
          <label>Available From</label>
          <input
            name="availableFrom"
            placeholder="Select Here"
            value={formData.availableFrom || ""}
            onChange={handleChange}
            className={getError("availableFrom") ? "error" : ""}
          />
          {getError("availableFrom") && (
            <small className="error-text">Availability date is required</small>
          )}
        </div>

        <div className="form-group">
          <label>Can You Provide Pet Supplies?</label>
          <input
            name="provideSupplies"
            placeholder="Select Here"
            value={formData.provideSupplies || ""}
            onChange={handleChange}
            className={getError("provideSupplies") ? "error" : ""}
          />
          {getError("provideSupplies") && (
            <small className="error-text">Pet supplies info is required</small>
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

export default Step4;
