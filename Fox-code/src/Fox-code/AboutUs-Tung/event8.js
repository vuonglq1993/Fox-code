import React from "react";
import { useState, useEffect } from "react";
import './Form.css';

const Form = () => {
    const [formData, setFormData] = useState({
      fullName: "",
      companyName: "",
      foundUs: "",
      helpWith: "",
      email: "",
      phone: "",
      projectInfo: "",
      agree: false,
      captchaInput: "",
    });

    const [errors, setErrors] = useState({
      email: "",
      phone: "",
      captcha: ""
    });
  
    const [captcha, setCaptcha] = useState({
      num1: 0,
      num2: 0,
    });
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    useEffect(() => {
      generateCaptcha();
    }, []);
  
    const generateCaptcha = () => {
      const num1 = Math.floor(Math.random() * 50) + 1;
      const num2 = Math.floor(Math.random() * 50) + 1;
      setCaptcha({ num1, num2 });
    };
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
      setErrors({
        ...errors,
        [name]: ""
      });
    };
  
    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };

    const validatePhone = (phone) => {
      const re = /^\+?\d{10,14}$/;
      return re.test(phone);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let valid = true;
      const captchaAnswer = captcha.num1 + captcha.num2;

      if (!validateEmail(formData.email)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Invalid email format",
        }));
        valid = false;
      }

      if (!validatePhone(formData.phone)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phone: "Invalid phone number format",
        }));
        valid = false;
      }

      if (parseInt(formData.captchaInput) !== captchaAnswer) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          captcha: "Captcha không đúng!",
        }));
        generateCaptcha();
        valid = false;
      }

      if (valid) {
        console.log(formData);
        setShowSuccessPopup(true);
      }
    };

    const handleClosePopup = () => {
      setShowSuccessPopup(false);
    }

    return (
      <div className="row justify-content-center event8">
        <div id='event8form' className="col-10">
          <form onSubmit={handleSubmit} className="form-container">
            <div className="Customerinformation">
              <p>
                <strong>Hi! My name is</strong>
              </p>
              <input
                type="text"
                name="fullName"
                placeholder="Type your full name"
                value={formData.fullName}
                onChange={handleChange}
              />
              <p>
                <strong>and I work in</strong>
              </p>
              <input
                type="text"
                name="companyName"
                placeholder="Type a company name"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
            <div className="luachon">
              <p>
                <strong>I found Fox Code using</strong>
              </p>
              <div className="cacluachon">
                {["Google search", "Instagram", "Facebook", "Other Social"].map(
                  (option) => (
                    <label key={option}>
                      <input
                        className="hidden"
                        type="radio"
                        name="foundUs"
                        value={option}
                        checked={formData.foundUs === option}
                        onChange={handleChange}
                      />
                      {option}
                    </label>
                  )
                )}
              </div>
            </div>
            <div className="luachon">
              <p>
                <strong>I'm looking for help with:</strong>
              </p>
              <div className="cacluachon">
                {["Staff Augmentation", "Development", "UX/UI", "Other"].map(
                  (option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        name="helpWith"
                        value={option}
                        checked={formData.helpWith === option}
                        onChange={handleChange}
                      />
                      {option}
                    </label>
                  )
                )}
              </div>
            </div>
            <div className="CustomerEmail">
              <p>
                <strong>Feel free to email me at</strong>
              </p>
              <input
                type="email"
                name="email"
                placeholder="Type your contact email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="CustomerPhone">
              <p>
                <strong>Or call me on</strong>
              </p>
              <select>
                <option value="+84">🇻🇳+84</option>
                <option value="+62">🇮🇩+62</option>
                <option value="+60">🇲🇾+60</option>
                <option value="+66">🇹🇭+66</option>
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <div className="error">{errors.phone}</div>}
            </div>
            <div className="CustomerProject">
              <p>
                <strong>Here is more information about the project:</strong>
              </p>
              <input
                name="projectInfo"
                placeholder="Type your project details"
                value={formData.projectInfo}
                onChange={handleChange}
              ></input>
            </div>
            <hr />
            <div className="endform">
              <div className="checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                  />
                  I agree with the <a href="/privacy-policy">Privacy policy</a>
                </label>
              </div>
              <div className="captcha">
                <label>
                  Captcha: What is {captcha.num1} + {captcha.num2}?
                  <input
                    type="text"
                    name="captchaInput"
                    value={formData.captchaInput}
                    onChange={handleChange}
                  />
                </label>
                {errors.captcha && <div className="error">{errors.captcha}</div>}
              </div>
              <button
                type="submit"
                className="button"
              >
                <span className="message">Send</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="inbutton bi bi-arrow-up-right-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
                  />
                </svg>
              </button>
            </div>
          </form>
          {showSuccessPopup && (
            <div className="popup">
              <div className="popup-content">
                <div className='popup-overlay'>
                <span className="close" onClick={handleClosePopup}>&times;</span>
                <h2>Gửi yêu cầu thành công</h2>
                <button onClick={handleClosePopup}>Đóng</button>
              </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}

export default Form;