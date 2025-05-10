import React from 'react';
import { Link } from 'react-router-dom';
import './Step6.css'
const Step6 = ({ formData, setFormData, prevStep }) => {
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files }));
  };

  return (
    <div className="form-step">
      <h3>Upload Images & Videos of Your Pet</h3>

      <div className="section">
        <p><strong>Upload Images of your pet:</strong></p>
        <div className="upload-grid">
          {[0, 1].map(i => (
            <label key={`img-${i}`} className="upload-box">
              <input
                type="file"
                name="petImages"
                accept="image/*"
                onChange={handleFileChange}
                hidden
              />
              <img src="https://freeimghost.net/images/2025/05/09/Vector.png" alt="upload icon" />
            </label>
          ))}
        </div>
      </div>

      <div className="section">
        <p><strong>Upload Videos of your pet : (Optional)</strong></p>
        <div className="upload-grid">
          {[0, 1].map(i => (
            <label key={`vid-${i}`} className="upload-box">
              <input
                type="file"
                name="petVideos"
                accept="video/*"
                onChange={handleFileChange}
                hidden
              />
              <img src="https://freeimghost.net/images/2025/05/09/Vector-1.png" alt="upload icon" />
            </label>
          ))}
        </div>
      </div>

      <div className="navigation-buttons">
        <button className="back-btn" onClick={prevStep}>← Back</button>
<Link to="/">
<button className="next-btn enabled" onClick={() => alert('Form submitted!')}>Finish</button>

</Link>
      </div>
    </div>
  );
};

export default Step6;
