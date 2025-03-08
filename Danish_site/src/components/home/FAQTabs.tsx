"use client";

import { useState } from "react";

type FAQTabsProps = {
  faqTypes: string[];
};

const FAQTabs = ({ faqTypes }: FAQTabsProps) => {
  const [activeTab, setActiveTab] = useState("Basic");

  return (
    <div className="relative max-w-[800px] mx-auto flex flex-wrap justify-center mt-8">
      {/* Faded Underline - Full Width Behind Tabs */}
      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-white/30 rounded-full"></div>

      {faqTypes.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`relative flex-1 py-4 text-lg font-button text-center transition-all text-white ${
            activeTab === tab ? "font-bold" : "font-normal"
          }`}
          style={{ width: "100%", fontSize: "22px" }}
        >
          {tab}
          {activeTab === tab && (
            <div
              style={{ bottom: "-0.5px" }}
              className="absolute left-1/2 transform -translate-x-1/2 w-[100%] h-[4px] bg-white rounded-full"
            ></div>
          )}
        </button>
      ))}
    </div>
  );
};

export default FAQTabs;
