import { useState } from "react";
import Dashboard from "./Dashboard";

export default function InviteYourTeam() {
  const [emailList, setEmailList] = useState([]);
  const [emailInput, setEmailInput] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleAddEmail = () => {
    const newEmails = emailInput
      .split(",")
      .map((email) => email.trim())
      .filter((email) => email.length > 0 && !emailList.includes(email));

    if (newEmails.length > 0) {
      setEmailList([...emailList, ...newEmails]);
      setEmailInput("");
    }
  };

  const handleRemoveEmail = (emailToRemove) => {
    setEmailList(emailList.filter((email) => email !== emailToRemove));
  };

  const handleContinue = () => {
    if (agreed) {
      setShowDashboard(true);
    }
  };

  if (showDashboard) {
    return <Dashboard />;
  }

  return (
<div className="min-h-screen bg-white flex justify-center pt-12">
      <div
        className="bg-gray-50 px-8 rounded-xl shadow-lg space-y-6"
        style={{
          width: "867px",
          height: "318px",
          gap: "20px",
          transform: "rotate(0deg)",
          opacity: 1,
        }}
      >
        {/* ARROW ICON */}
        <div className="pt-6">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        {/* TOP BAR */}
        <div className="flex justify-end pt-6">
          <a href="#" className="text-sm text-gray-600 hover:underline">
            Already on Enum? <span className="text-blue-600 hover:underline">Log in</span>
          </a>
        </div>

        {/* MAIN CONTENT */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT TEXT */}
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">Invite your</h1>
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">team</h1>
            <p className="text-gray-600 leading-relaxed max-w-sm">
              Want help managing things? Invite teammates now or add them anytime later.
            </p>

            {emailList.length > 0 && (
              <div className="mt-6 inline-flex items-center border border-blue-600 text-blue-600 text-sm font-medium px-4 py-2 rounded-md transition-all">
                <span className="mr-2 inline-block w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                {emailList.length} Invite{emailList.length > 1 ? "s" : ""} sent
              </div>
            )}
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white border border-gray-200 rounded-xl shadow p-6">
            <label className="block text-sm text-gray-700 mb-2">Email</label>
            <div className="relative">
              <div className="flex flex-wrap gap-2 items-center border border-gray-300 rounded-md px-3 py-2 min-h-[52px]">
                {emailList.map((email) => (
                  <div
                    key={email}
                    className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    <span className="mr-2">{email}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveEmail(email)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      ×
                    </button>
                  </div>
                ))}

                <input
                  type="text"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === ",") {
                      e.preventDefault();
                      handleAddEmail();
                    }
                  }}
                  placeholder="Enter emails, separated by commas"
                  className="flex-grow border-none focus:outline-none text-sm placeholder-gray-400"
                />
              </div>

              <button
                type="button"
                onClick={handleAddEmail}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-blue-600 hover:underline"
              >
                Invite
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-8 flex items-center justify-between">
          <label className="flex items-start gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-[2px]"
            />
            <span>
              I agree to{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </span>
          </label>

          <button
            type="button"
            onClick={handleContinue}
            disabled={!agreed}
            className={`px-6 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
              agreed
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}