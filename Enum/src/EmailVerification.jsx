import React, { useState } from "react";
import EmailVerification from "./EmailVerification";

const LetMeetYou = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    password: "",
    confirmPassword: "",
  });

  const [step, setStep] = useState("form"); // form | verify

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Move to verification step
    setStep("verify");
  };

  return (
    <>
      {step === "form" ? (
        <form onSubmit={handleSubmit} className="p-6">
          <h1 className="text-2xl font-bold mb-4">Let's meet you</h1>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className="border p-2 w-full mb-3"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="border p-2 w-full mb-3"
          />
          <input
            type="email"
            name="workEmail"
            placeholder="Work email"
            value={formData.workEmail}
            onChange={handleChange}
            className="border p-2 w-full mb-3"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border p-2 w-full mb-3"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border p-2 w-full mb-3"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Next
          </button>
        </form>
      ) : (
        <EmailVerification email={formData.workEmail} />
      )}
    </>
  );
};

export default LetMeetYou;
