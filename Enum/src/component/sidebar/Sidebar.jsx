import React, { useState } from "react";
import LetMeetYou from "../letmeetyou/LetMeetYou";
import AddCompany from "../addcompany/AddCompany";
import InviteYourTeam from "../inviteyourteam/InviteYourTeam";

import Logo from "../../assets/Enum_Logo_White 1.png";

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
      component: <AddCompany />,
    },
    {
      id: 3,
      title: "Invite your team",
      description: "Start collaborating with your team",
      component: <InviteYourTeam />,
    },
  ];

  const activeComponent = steps.find((step) => step.id === activeStep)?.component;

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      
      
      <div className="w-full md:w-64 bg-blue-600 text-white p-4 sm:p-6 md:p-6 flex flex-col h-screen sticky top-0">
      
        <div className="mb-8 md:mb-12 flex justify-center md:justify-start">
          <img src={Logo} alt="Logo" className="w-20 h-5" />
        </div>

        
        <div className="space-y-4 overflow-y-auto flex-1">
          {steps.map((step, index) => {
            const isActive = activeStep === step.id;

            return (
              <div
                key={step.id}
                className="flex gap-4 cursor-pointer items-start"
                onClick={() => setActiveStep(step.id)}
              >
                
                <div className="flex flex-col items-center">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isActive
                        ? "bg-white border-white"
                        : "border-white bg-blue-600"
                    }`}
                  >
                    {isActive && (
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    )}
                  </div>

                  
                  {index !== steps.length - 1 && (
                    <div className="w-px h-12 bg-white mt-1"></div>
                  )}
                </div>

                
                <div className="flex-1">
                  <p
                    className={`font-semibold text-sm sm:text-base ${
                      isActive ? "text-white" : "text-white/90"
                    }`}
                  >
                    {step.title}
                  </p>
                  <p className="text-xs sm:text-sm text-white/80">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      
      <div className="flex-1 p-4 sm:p-6 md:p-10 bg-gray-50 flex flex-col">
        
        <div className="flex-1 overflow-y-auto">{activeComponent}</div>

      </div>
    </div>
  );
};

export default Sidebar;
