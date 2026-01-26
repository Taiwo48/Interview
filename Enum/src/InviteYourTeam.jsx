import { useState } from "react";
import Dashboard from "./dashboard-page";

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
    <div className="min-h-screen bg-gray-50 px-8 font-sans">
      {/* TOP BAR */}
      <div className="flex justify-end pt-6">
        <a href="#" className="text-sm text-gray-600 hover:underline">
          Already on Enum?
        </a>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* LEFT TEXT */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            Invite your team
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-sm">
            Want help managing things? Invite teammates now or add them anytime later.
          </p>
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
                    className="text-gray-400 hover:text-red-500"
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
      <div className="max-w-6xl mx-auto mt-12 flex items-center justify-between">
        <label className="flex items-start gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1"
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
          className={`px-6 py-2 rounded-md text-sm font-semibold ${
            agreed
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}