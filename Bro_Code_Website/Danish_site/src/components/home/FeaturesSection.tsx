"use client";

import { useState } from "react";
import Image from "next/image";
import FeatureTabs from "./FeatureTabs";

// Feature tab names
const featureTabs = [
  "Lead Management",
  "Property Management",
  "Partners",
  "Operations",
  "Mobile Apps",
  "Dashboards",
];

type FeatureContent = {
  [key: string]: {
    title: string;
    description: string;
    image: string;
    link: string;
  };
};

// Feature content based on the selected tab
const featureContent: FeatureContent = {
  "Lead Management": {
    title: "Lead Management",
    description:
      "Our lead management module streamlines the process of capturing, tracking and converting potential customers. With automated lead capture from multiple sources, real-time status updates and smart follow-up reminders no opportunity is missed. Customizable lead scoring helps prioritize high value prospects, improving conversion rates.",
    image: "/accounting-feature.png",
    link: "#",
  },
  "Property Management": {
    title: "Property Management",
    description:
      "With the Property Management module, you can easily track the status of all properties in your portfolio, add new properties with all their details, and assign a responsible  for each property. You can create tasks related to a property, assign them to relevant contacts from your list, and monitor task statuses and deadlines effortlessly.",
    image: "/accounting-feature.png",
    link: "#",
  },
  "Partners": {
    title: "Partners",
    description:
      "With the Prop 360° application, you can add new partners and vendors to your system. Associate them with your customer or property portfolio, assign tasks to your partners and vendors, and manage workflows efficiently.",
    image: "/accounting-feature.png",
    link: "#",
  },
  "Operations": {
    title: "Operations",
    description:
      "Through your application, you can assign tasks to individuals or vendors, track task statuses, and manage your daily schedule seamlessly. Keep an eye on your workload using personal or corporate calendars and stay organized effortlessly.",
    image: "/accounting-feature.png",
    link: "#",
  },
  "Mobile Apps": {
    title: "Stay Connected Anywhere",
    description:
      "Access your property management tools on the go with our mobile apps for iOS and Android.",
    image: "/accounting-feature.png",
    link: "#",
  },
  "Dashboards": {
    title: "Dashboards",
    description:
      "With the Dashboard and Reporting module, you can track your lead types, property types, and monitor lead-to-customer conversion rates. Leverage these insights to optimize your marketing strategy and drive better results.",
    image: "/accounting-feature.png",
    link: "#",
  },
};

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState(featureTabs[0]);

  return (
    <section className="relative px-6 md:px-12 pt-16 md:pt-24" id="features-section">
      <div className="container mx-auto px-0 md:px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-center text-[44px] font-bold font-button text-black">
          Every <span className="text-primary">Feature</span>. All In One{" "}
          <span className="text-primary">Platform</span>.
        </h2>

        {/* Feature Tabs */}
        <FeatureTabs featureTabs={featureTabs} activeTab={activeTab} onSelectTab={setActiveTab} />

        {/* Feature Content */}
        <div className="mt-5 bg-backgroundHero rounded-2xl shadow-md flex flex-col md:flex-row items-center">
          {/* Left: Text Content */}
          <div className="md:w-1/2 space-y-4 text-left pt-6 px-4 sm:px-6 md:pl-16">
            <h3 className="font-button text-featureTitle font-bold text-black">
              {featureContent[activeTab].title}
            </h3>
            <p className="font-button text-body text-black opacity-50 text-base capitalize">
              {featureContent[activeTab].description}
            </p>
           
          </div>

          {/* Right: Feature Image */}
          <div className="relative md:w-1/2 flex justify-center mt-10 md:mt-0 md:pr-16 md:pt-16">
            <Image
              src={featureContent[activeTab].image}
              alt={featureContent[activeTab].title}
              width={500}
              height={300}
              className="w-full max-w-[500px] lg:max-w-[650px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
