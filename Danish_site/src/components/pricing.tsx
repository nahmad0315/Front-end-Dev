import React from "react";

const pricingPlans = [
  {
    title: "Basic",
    properties: "Up to 100 Properties",
    contacts: "Up to 100 Contacts",
    price: "30€ / month",
  },
  {
    title: "Gold",
    properties: "Up to 250 Properties",
    contacts: "Up to 250 Contacts",
    price: "50€ / month",
  },
  {
    title: "Premium",
    properties: "Up to 500 Properties",
    contacts: "Up to 500 Contacts",
    price: "90€ / month",
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="relative px-6 md:px-12 pt-16 md:pt-24 text-center" id="pricing-section">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-[36px] md:text-[44px] font-bold font-heading text-black">
          Choose Your <span className="text-primary">Plan</span>.
        </h2>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="p-8 border border-gray-200 rounded-xl shadow-md transition duration-300 hover:shadow-lg"
            >
              {/* Plan Title */}
              <h3 className="text-[24px] font-bold text-black">{plan.title}</h3>

              {/* Properties & Contacts */}
              <p className="mt-4 text-[16px] text-gray-600">{plan.properties}</p>
              <p className="text-[16px] text-gray-600">{plan.contacts}</p>

              {/* Plan Price */}
              <p className="mt-6 text-[28px] font-bold text-primary">{plan.price}</p>

              {/* Subscribe Button */}
              <button className="mt-6 bg-primary text-white px-6 py-3 rounded-lg text-[16px] font-medium hover:bg-opacity-90 transition">
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
