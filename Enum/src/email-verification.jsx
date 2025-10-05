import React, { useState, useEffect } from "react";

const EmailVerification = ({ formData, setStep }) => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(116); // 01:56

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 5) {
        document.getElementById(`code-${index + 1}`).focus();
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col lg:flex-row px-4 sm:px-6 md:px-10 py-10">
      {/* Left Column */}
      <div className="w-full max-w-md mb-10 lg:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Let's meet you
        </h1>
        <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
          Just a few details to get you started — including verifying your email — so we can personalize your setup and unlock the right tools for you.
        </p>

        {/* Stepper */}
        <nav className="space-y-4 text-sm">
          <button
            type="button"
            onClick={() => setStep(1)}
            className="flex items-center p-3 border-l-4 border-transparent text-black hover:text-blue-600"
          >
            <span>Basic info</span>
          </button>
          <div className="flex items-center p-3 border-l-4 border-blue-600">
            <span className="text-blue-600 font-semibold">Email verification</span>
          </div>
        </nav>
      </div>

      {/* Right Column */}
      <div className="w-full max-w-lg bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-xl font-bold text-black mb-4">Email verification</h2>
        <p className="text-sm text-black mb-6">
          Enter the code we sent to <span className="font-medium">{formData.workEmail}</span> to verify your email.
        </p>

        {/* Code Inputs */}
        <div className="flex justify-between gap-2 mb-4">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-12 h-12 text-center text-lg border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          ))}
        </div>

        {/* Timer */}
        <div className="text-sm text-blue-600 font-medium text-center mb-6">
          {formatTime(timer)}
        </div>

        {/* Troubleshooting Tips */}
        <div className="text-sm text-black mb-6">
          <p className="font-bold mb-2">Didn't receive the email?</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Check spam or promotions.</li>
            <li>Confirm your email is correct.</li>
            <li>Email may be auto-filled incorrectly.</li>
            <li>Company filters blocked email.</li>
          </ol>
        </div>

        {/* Re-enter Email */}
        <div className="text-sm text-blue-600 hover:underline text-center">
          <a href="#">Re-enter your email address</a>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;