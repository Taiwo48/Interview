import React, { useState } from "react";
import EmailVerification from "./EmailVerification";

const LetMeetYou = () => {
  const [step, setStep] = useState(1);

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
    setStep(2);
  };

  if (step === 2) {
    return <EmailVerification formData={formData} setStep={setStep} />;
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-gray-800">

      {/* top login section */}
      <div className="w-full flex justify-end text-sm p-4 sm:p-6 md:p-10">
        <p>
          Already on Enum?{" "}
          <a href="#" className="font-semibold text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>

      {/* CENTERED CONTAINER */}
      <main className="w-full flex-1 flex justify-center items-center">
        <div
          className="bg-[#F8FAFC] rounded-xl shadow-sm"
          style={{
            width: "884px",
            height: "634px",
            gap: "20px",
            opacity: 1,
          }}
        >
          {/* inner spacing */}
          <div className="w-full h-full flex flex-col lg:flex-row items-start justify-center gap-12 px-8 py-10">

            {/* LEFT */}
            <div className="w-full max-w-md">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Let's meet 
              </h1>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                 you
              </h1>
              <p className="text-gray-600 mb-8 text-sm md:text-base">
                Just a few details to get you started — including verifying your
                email — so we can personalize your setup and unlock the right
                tools for you.
              </p>

              <nav className="hidden md:block space-y-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className={`flex items-center p-3 border-l-4 ${
                    step === 1
                      ? "border-blue-600 text-blue-600 font-semibold"
                      : "border-transparent text-gray-500 hover:text-blue-600"
                  }`}
                >
                  <span>Basic info</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className={`flex items-center p-3 border-l-4 ${
                    step === 2
                      ? "border-blue-600 text-blue-600 font-semibold"
                      : "border-transparent text-gray-500 hover:text-blue-600"
                  }`}
                >
                  <span>Email verification</span>
                </button>
              </nav>
            </div>

            {/* RIGHT FORM */}
            <div className="w-full max-w-lg bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
              <h2 className="text-lg md:text-xl font-semibold mb-6">
                Basic info
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="space-y-5">

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      First name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter first name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Last name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Enter last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Work email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="workEmail"
                      placeholder="e.g name@company.com"
                      value={formData.workEmail}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Password<span className="text-red-500">*</span>
                    </label>
                    <div className="relative mt-1">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
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

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Confirm password<span className="text-red-500">*</span>
                    </label>
                    <div className="relative mt-1">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
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

                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      className="text-blue-600 font-bold text-lg hover:underline mr-2"
                    >
                      Next
                    </button>
                  </div>

                </div>
              </form>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default LetMeetYou;
