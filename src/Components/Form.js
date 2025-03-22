import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email) {
      setError("Email is required!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format!");
      return;
    }

    try {
      const response = await axios.post("https://test.ezworks.ai/api", { email });

      if (response.status === 200) {
        setMessage("Form Submitted");
      }
    } catch (err) {
      if (err.response && err.response.status === 422) {
        setError("Emails from @ez.works are not allowed!");
      } else {
        setError("An error occurred. Try again.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="email-input"
      />
      <button type="submit" className="submit-btn">Contact Me</button>
      {error && <p className="error-msg">{error}</p>}
      {message && <p className="success-msg">{message}</p>}
    </form>
  );
};

export default Form;
