import React from "react";
import heroImage from "@/assets/hero-image.png";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-backgroundHero px-6 md:px-12 py-16 md:py-24 min-h-[600px] md:h-[600px] flex items-center overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center h-full">
        {/* Left Text Section */}
        <div className="text-left md:w-1/2 space-y-6">
          <h3 className="font-heading text-subtitle font-normal tracking-wider text-black uppercase text-decoration-custom">
            The All In-One Solution
          </h3>
          <h1 className="font-body text-title font-normal text-black leading-none">
            For Real Estate{" "}
            <span className="font-body text-boldTitle font-bold text-black">
              Professionals
            </span>
          </h1>
          <p className="font-body text-paragraph font-normal text-black/60">
            Grow your business and revenue by Efficiently Managing your
            Contacts, Properties and Operations.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="border border-primary text-primary w-button h-[55px] font-button text-button font-normal text-left hover:bg-primary hover:text-white transition px-9 py-3 text-center">
              Contact Us
            </button>
            <button className="bg-primary border border-primary text-white px-9 py-3 w-button h-[55px] font-button text-button font-normal text-left hover:bg-primary hover:text-white transition text-center">
              Watch Video
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative md:w-1/2 h-full flex items-center justify-end md:pr-10">
          <div className="relative w-full max-w-[500px] lg:max-w-[900px] pt-2.5">
            <Image
              src={heroImage}
              alt="Dashboard Preview"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
