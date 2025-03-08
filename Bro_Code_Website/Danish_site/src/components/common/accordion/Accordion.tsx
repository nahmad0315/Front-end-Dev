"use client";

import React, { useState } from "react";
import arrowDown from "@/assets/expand-icon.png";
import Image from 'next/image';

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 md:p-6 transition-all">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Question Text */}
        <span className="font-body text-lg font-semibold text-black">
          {question}
        </span>

        {/* Arrow Icon */}
        <Image
          src={arrowDown}
          alt="Toggle"
          className={`w-[46px] h-[46px] transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"
            }`}
        />
      </button>

      {/* Answer Section (Expanded) */}
      {isOpen && (
        <div className="mt-4 text-gray-600 font-body text-[16px] leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export default Accordion;
