"use client";

type FeatureTabsProps = {
  featureTabs: string[];
  activeTab: string;
  onSelectTab: (tab: string) => void;
};

const FeatureTabs = ({ featureTabs, activeTab, onSelectTab }: FeatureTabsProps) => {
  return (
    <div className="relative mt-8 border-b border-tabInactive">
      {/* Scrollable Tabs */}
      <div className="relative w-full overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400">
        <div
          className="flex justify-center w-max mx-auto space-x-4 px-4"
          role="tablist"
        >
          {featureTabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => onSelectTab(tab)}
              className={`relative px-6 py-4 text-lg font-button text-center transition-all flex-shrink-0 outline-none 
                ${activeTab === tab ? "text-black font-bold border-b-2 border-primary" : "text-gray-500 font-normal"}
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureTabs;
