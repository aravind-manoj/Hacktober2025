// components/FaqItem.tsx

"use client"; // Keep the client directive

import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline'; // Keep the icon import

interface FaqItemProps {
  question: string;
  answer: string;
  // Handler now passes the question text to update the green box
  onQuestionClick: (questionText: string) => void; 
  isActive: boolean;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, onQuestionClick, isActive }) => {
  
  // Style calculation based on isActive state
  let headerBgColor, headerTextColor;
  
  if (isActive) {
    // HIGHLIGHTED STYLE: Orange background and white text
    headerBgColor = 'bg-orange-600';
    headerTextColor = 'text-white';
  } else {
    // DEFAULT STYLE: Deep purple background
    headerBgColor = 'bg-[#460D50]';
    headerTextColor = 'text-gray-200';
  }

  // Handle click: update parent state
  const handleClick = () => {
    // Send the question text up to the parent for the green box update and highlighting
    onQuestionClick(question); 
  };

  return (
    <div className="mb-3">
      {/* FAQ Question Header */}
      <button
        className={`flex justify-between items-center w-full p-4 rounded-lg shadow-lg transition-all duration-300 font-semibold 
                    ${headerBgColor} ${headerTextColor} 
                    ${isActive ? 'ring-2 ring-white' : 'hover:opacity-90'}`}
        onClick={handleClick}
      >
        <span className="text-lg">{question}</span>
        {/* Chevron Icon - now static, just for the look */}
        <ChevronDownIcon
          className="w-6 h-6" // No rotation or dynamic classes
        />
      </button>

      {/* Answer content DIV is completely removed */}
    </div>
  );
};

export default FaqItem;