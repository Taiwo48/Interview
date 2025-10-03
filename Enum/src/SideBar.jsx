import React, { useState } from "react";
import LetMeetYou from "./let-meet-you";
import AddCompany from "./add-company";  
import InviteYourTeam from "./InviteYourTeam";

import Logo from "./assets/Enum_Logo_White 1.png";

const Sidebar = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Let’s meet you",
      description: "With your name and work email",
      component: <LetMeetYou />,
    },
    {
      id: 2,
      title: "Add company",
      description: "Create your space on Enum",
      component: <AddCompany />,   // ⬅️ use AddCompany component
    },
    {
      id: 3,
      title: "Invite your team",
      description: "Start collaborating with your team",
      component: <InviteYourTeam/>,
    },
  ];

  const activeComponent = steps.find((step) => step.id === activeStep)?.component;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white p-6">
        <img src={Logo} alt="Logo" className="w-20 h-5 mb-6" />

        {/* Steps */}
        <div className="relative">
          {steps.map((step, index) => {
            const isActive = activeStep === step.id;

            return (
              <div
                key={step.id}
                className="relative flex items-start mb-8 cursor-pointer"
                onClick={() => setActiveStep(step.id)}
              >
                {/* Step indicator */}
                <div className="flex flex-col items-center mr-4">
                  <div
                    className={`w-6 h-6 flex items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                      isActive
                        ? "bg-white border-white text-blue-600"
                        : "border-white text-white"
                    }`}
                  >
                    {isActive && (
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    )}
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="w-px h-8 bg-white"></div>
                  )}
                </div>

                {/* Step text */}
                <div>
                  <h3
                    className={`font-semibold ${
                      isActive ? "text-white" : "text-gray-200"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-200">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 bg-gray-50">{activeComponent}</div>
    </div>
  );
};

export default Sidebar;
