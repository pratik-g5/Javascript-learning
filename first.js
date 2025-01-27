
import React, { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      {/* Accordion Header */}
      <button
        className="flex items-center justify-between w-full px-4 py-2 text-lg font-semibold bg-gray-200 rounded-lg focus:outline-none"
        onClick={toggleAccordion}
      >
        <span>{isOpen ? "Collapse" : "Expand"} Section</span>
        <svg
          className={w-5 h-5 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Accordion Content */}
      <div
        className={mt-2 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40" : "max-h-0"
        }}
      >
        <div className="px-4 py-2 bg-gray-100 rounded-lg">
          <p className="text-gray-700">
            This is the content inside the accordion. You can add any React
            components or HTML here, such as lists, paragraphs, or even images!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;