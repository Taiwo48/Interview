import React, { useState } from "react";
import EmailVerification from "./email-verification";

const LetMeetYou = () => {
  const [step, setStep] = useState(1); // step 1 = basic info, step 2 = verification

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form submitted:", formData);
    setStep(2); // move to verification step
  };

  // 🔹 Render step based on state
  if (step === 2) {
    return <EmailVerification formData={formData} />;
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Top navigation link */}
      <div className="w-full flex justify-end text-sm p-4 sm:p-6 md:p-10">
        <p>
          Already on Enum?{" "}
          <a href="#" className="font-semibold text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col lg:flex-row items-start justify-center gap-12 px-4 sm:px-6 md:px-10">
        {/* Left Column */}
        <div className="w-full max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's meet you
          </h1>
          <p className="text-gray-600 mb-8 text-sm md:text-base">
            Just a few details to get you started — including verifying your
            email — so we can personalize your setup and unlock the right tools
            for you.
          </p>

          {/* Stepper */}
          <nav className="hidden md:block space-y-4">
            <a
              href="#"
              className="flex items-center p-3 border-l-4 border-blue-600"
            >
              <span className="font-semibold text-blue-600">Basic info</span>
            </a>
            <a
              href="#"
              className="flex items-center p-3 border-l-4 border-transparent text-gray-500"
            >
              <span>Email verification</span>
            </a>
          </nav>
        </div>

        {/* Right Column: Form Card */}
        <div className="w-full max-w-lg bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-lg md:text-xl font-semibold mb-6">Basic info</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Work Email */}
              <div>
                <label
                  htmlFor="workEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Work email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="workEmail"
                  id="workEmail"
                  placeholder="e.g name@company.com"
                  value={formData.workEmail}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password<span className="text-red-500">*</span>
                </label>
                <div className="relative mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 px-3 text-sm text-gray-500 hover:text-blue-600"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm password<span className="text-red-500">*</span>
                </label>
                <div className="relative mt-1">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Enter password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute inset-y-0 right-0 px-3 text-sm text-gray-500 hover:text-blue-600"
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Next Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-6 rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>

      {/* Progress Bar */}
      <div className="w-full max-w-lg mx-auto px-4 pt-8 mb-8">
        <div className="bg-gray-200 rounded-full h-1.5 w-full">
          <div
            className="bg-blue-600 h-1.5 rounded-full"
            style={{ width: "50%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LetMeetYou;
