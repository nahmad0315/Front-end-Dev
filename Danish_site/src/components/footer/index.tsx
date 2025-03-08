import React from "react";
import Image from "next/image";
import phoneIcon from "@/assets/phone.png";
import emailIcon from "@/assets/message.png";
import locationIcon from "@/assets/location.png";
import paymentIcons from "@/assets/payments.svg";
import bgImage from "@/assets/masked.png"; // ✅ Ensure correct import

const FooterComponent: React.FC = () => {
  return (
    <footer
      className="relative bg-primary text-white px-6 md:px-12 py-16 md:py-24 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bgImage})` }} // ✅ Use direct URL
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-logo font-bold">Prop 360°</h2>
          <p className="mt-4 text-gray-200 text-sm">
            Eleftheriou Venizelou 212, Kalithea, Athens Greece Vasiliou Roufou
            142, Psila Alonia, Patra
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-bold">Navigation</h3>
          <ul className="mt-4 space-y-2 text-gray-200 text-sm">
            <li>Home</li>
            <li>Features</li>
            <li>Portfolio</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-lg font-bold">Get Help</h3>
          <ul className="mt-4 space-y-2 text-gray-200 text-sm">
            <li>Policy</li>
            <li>Simple Contract</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-gray-200 text-sm">
            <li className="flex items-center space-x-2">
              <Image
                src={phoneIcon}
                alt="Phone icon"
                width={16}
                height={16}
                className="object-contain"
              />
              <span>+30 697 0349999</span>
            </li>
            <li className="flex items-center space-x-2">
              <Image
                src={emailIcon}
                alt="Email icon"
                width={16}
                height={16}
                className="object-contain"
              />
              <span>kostas@prop360.pro</span>
            </li>
            <li className="flex items-center space-x-2">
              <Image
                src={locationIcon}
                alt="Location icon"
                width={16}
                height={16}
                className="object-contain"
              />
              <span>Eleftheriou Venizelou 212, Kalithea, Athens Greece</span>
            </li>
          </ul>

          {/* Payment Icons */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold">Accepted Payments</h4>
            <img
              src={paymentIcons.src}
              alt="Accepted Payments"
              className="mt-2 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-12 text-center text-gray-300 text-sm border-t border-gray-400 pt-4">
        Copyright © 2025 <span className="font-bold">Prop 360</span>. All Rights
        Reserved
      </div>
    </footer>
  );
};

export default FooterComponent;
