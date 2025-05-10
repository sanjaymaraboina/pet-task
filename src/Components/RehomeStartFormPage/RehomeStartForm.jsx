import React, { useState } from "react";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";
import Step5 from "./Step5/Step5";
import Step6 from "./Step6/Step6";
import "./RehomeStartForm.css";

const RehomeStartForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    termsAgreed: false,
    temperament: "",
    activityLevel: "",
    goodWithKids: "",
    goodWithPets: "",
    houseTrained: "",
    pottyTrained: "",
    behaviorIssues: "",
    rehomeReason: "",
    availableFrom: "",
    provideSupplies: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div>
      <div className="form-head">
        <p>&#x2190; Add Rehomed a pet</p>
      </div>
      <div className="form-container">
        <div className="step-progress">
          {[1, 2, 3, 4, 5, 6].map((s) => (
            <React.Fragment key={s}>
              <div className="step-wrapper">
                {step === s && (
                  <span className="dog-icon">
                    <img
                      src="https://freeimghost.net/images/2025/05/09/image-135.png"
                      alt="icon"
                    />
                  </span>
                )}{" "}
                <div className={`step-circle ${step >= s ? "active" : ""}`}>
                  {s}
                </div>
              </div>
              {s < 6 && (
                <div className={`step-line ${step > s ? "active" : ""}`}></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {step === 1 && (
          <Step1
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        )}
        {step === 2 && (
          <Step2
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 3 && (
          <Step3
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 4 && (
          <Step4
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 5 && (
          <Step5
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 6 && (
          <Step6
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
      </div>
    </div>
  );
};

export default RehomeStartForm;
