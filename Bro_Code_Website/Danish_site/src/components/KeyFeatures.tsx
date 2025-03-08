import React from "react";
import contactIcon from "@/assets/contact.png";
import propertyIcon from "@/assets/property.png";
import operationIcon from "@/assets/operations.png";
import Image from 'next/image';

const keyFeatures = [
  {
    icon: contactIcon,
    title: "Manage Your Contacts In 360°",
  },
  {
    icon: propertyIcon,
    title: "Manage Your Properties In 360°",
  },
  {
    icon: operationIcon,
    title: "Manage Your Operation In 360°",
  },
];

const KeyFeatures: React.FC = () => {
  return (
    <section className="relative px-6 md:px-12 pt-16 md:pt-24 text-center">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-[36px] md:text-[44px] font-bold font-heading text-black">
          Our Key <span className="text-primary">Features</span>.
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Feature Icon */}
              <div className="w-146 h-146 flex justify-center items-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  className="w-[146px] h-[146px] object-contain"
                />
              </div>
              {/* Feature Title */}
              <p className="mt-6 font-button text-featureTitle font-normal text-black text-center tracking-tight">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
