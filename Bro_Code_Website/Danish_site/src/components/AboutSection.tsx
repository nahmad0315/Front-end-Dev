import React from "react";
import aboutImage from "@/assets/about-image.png";
import Image from 'next/image';

const AboutSection: React.FC = () => {
    return (
        <section className="relative px-6 md:px-12 py-16 md:py-24">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Left Side - Image with Background Effect */}
                <div className="relative md:w-1/2 flex justify-center">
                    {/* Main Image */}
                    <Image
                        src={aboutImage}
                        alt="About Prop 360°"
                        className="relative w-[90%] max-w-[550px] rounded-lg"
                    />
                </div>

                {/* Right Side - Text Content */}
                <div className="md:w-1/2 space-y-6 text-left">
                    <h2 className="text-[36px] md:text-[44px] font-bold font-heading text-black">
                        About <span className="text-primary">Prop 360°</span>
                    </h2>
                    <p className="font-body text-[16px] text-gray-600 leading-relaxed">
                        Prop 360° is a Property management platform  for real estate agents to manage the sales,  rental and property operational tasks. It includes features that assist with 
Property Listings & Portfolio Management,  Tenant & Lease Tracking, Maintenance & Task Management, Facilitates communication with tenants, landlords, and vendors through messages,
 reminders, and notifications, stores and organizes important property documents, such as lease agreements, contracts. Generates reports on various aspects of property management, such as conversion 
rates of sales funnel from lead to customer , tenant occupancy rates, and maintenance issues.

                    </p>
                    <p className="font-body text-[16px] text-gray-600 leading-relaxed">
                        This software helps streamline administrative tasks, improve efficiency, and keep properties running smoothly for real estate agents, property managers, and landlords.

                    </p>

                    {/* Buttons */}
                    <div className="flex space-x-4">
                        <button className="border border-primary text-primary w-button h-[55px] font-button text-button font-normal text-left hover:bg-primary hover:text-white transition px-9 py-3 text-center">
                            Contact Us
                        </button>
                        <button className="bg-primary border border-primary text-white px-9 py-3 w-button h-[55px] font-button text-button font-normal text-left hover:bg-primary hover:text-white transition text-center">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
