import React, { useState } from "react";
import EmailVerification from "./EmailVerification";
import BasicInfo from "./BasicInfo";

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
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("⚠️ Passwords do not match!");
      return;
    }
    setError("");
    setStep(2);
  };

  if (step === 2) {
    return <EmailVerification formData={formData} setStep={setStep} />;
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-gray-800">
      {/* TOP BAR */}
      <div className="w-full flex justify-end text-sm p-4 sm:p-6 md:p-10">
        <p>
          Already on Enum?{" "}
          <a href="#" className="font-semibold text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>

      {/* CENTERED SECTION */}
      <main className="w-full flex-1 flex justify-center items-center">
        <div
          className="bg-[#F8FAFC] rounded-xl shadow-sm"
          style={{ width: "884px", height: "634px" }}
        >
          <div className="w-full h-full bg-white shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2">
            
            {/* LEFT SIDE */}
            <div className="p-6 sm:p-8 border-b md:border-b-0 md:border-r bg-gray-50">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Let's meet</h1>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">you</h1>

              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Just a few details to get you started — including verifying your
                email — so we can personalize your setup.
              </p>

              <ul className="space-y-2 text-gray-700">
                <li
                  className={`cursor-pointer px-3 py-1 border-l-4 ${
                    step === 1
                      ? "border-blue-600 text-blue-600 font-semibold bg-blue-50"
                      : "border-transparent hover:text-blue-500"
                  }`}
                  onClick={() => setStep(1)}
                >
                  Basic info
                </li>

                <li
                  className={`cursor-pointer px-3 py-1 border-l-4 ${
                    step === 2
                      ? "border-blue-600 text-blue-600 font-semibold bg-blue-50"
                      : "border-transparent hover:text-blue-500"
                  }`}
                  onClick={() => setStep(2)}
                >
                  Email verification
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE */}
            <div className="p-6 sm:p-8 h-[600px] overflow-y-auto">
              <BasicInfo
                formData={formData}
                handleChange={handleChange}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                showConfirmPassword={showConfirmPassword}
                setShowConfirmPassword={setShowConfirmPassword}
                error={error}
                handleSubmit={handleSubmit}
              />
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default LetMeetYou;
