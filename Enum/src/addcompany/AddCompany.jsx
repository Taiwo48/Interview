import { useState } from "react";
import DetailsStep from "./Details";
import ShortDescriptionStep from "./ShortDescription";
import UsagePreferenceStep from "./UsagePreference";
import LogoStep from "./Logo";


export default function AddCompany() {
  const [form, setForm] = useState({
    companyName: "",
    industry: "",
    website: "",
    siteName: "",
    companySize: "",
    description: "",
    usagePreferences: [],
    logo: null,
    logoName: "",
  });

  const [activeStep, setActiveStep] = useState("Details");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const goToNextStep = () => {
    const steps = ["Details", "Short description", "Usage preference", "Logo"];
    const currentIndex = steps.indexOf(activeStep);
    if (currentIndex < steps.length - 1) {
      setActiveStep(steps[currentIndex + 1]);
    }
  };

  const togglePreference = (option) => {
    setForm((prev) => {
      const current = prev.usagePreferences || [];
      const updated = current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option];
      return { ...prev, usagePreferences: updated };
    });
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case "Details":
        return (
          <DetailsStep
            form={form}
            handleChange={handleChange}
            goToNextStep={goToNextStep}
          />
        );
      case "Short description":
        return (
          <ShortDescriptionStep
            form={form}
            handleChange={handleChange}
            goToNextStep={goToNextStep}
          />
        );
      case "Usage preference":
        return (
          <UsagePreferenceStep
            form={form}
            togglePreference={togglePreference}
            goToNextStep={goToNextStep}
          />
        );
      case "Logo":
        return <LogoStep form={form} setForm={setForm} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-gray-800">
      <main className="w-full flex-1 flex justify-center items-center">
        <div
          className="bg-[#F8FAFC] rounded-xl shadow-sm"
          style={{ width: "884px", height: "634px" }}
        >
          <div className="w-full h-full bg-white shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2">
            {/* Left side navigation */}
            <div className="p-6 sm:p-8 border-b md:border-b-0 md:border-r bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Add</h2>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">company</h2>
              <p className="text-gray-600 mb-6">
                Nice work, David. Just one more step — Now, let’s complete your
                setup with your organization’s info.
              </p>
              <ul className="space-y-2 text-gray-700">
                {["Details", "Short description", "Usage preference", "Logo"].map(
                  (step) => (
                    <li
                      key={step}
                      onClick={() => setActiveStep(step)}
                      className={`cursor-pointer px-3 py-1 border-l-4 ${
                        activeStep === step
                          ? "border-blue-600 text-blue-600 font-semibold bg-blue-50"
                          : "border-transparent hover:text-blue-500"
                      }`}
                    >
                      {step}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Right side content */}
            <div className="p-6 sm:p-8 h-[600px] overflow-y-auto">
              {renderStepContent()}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}