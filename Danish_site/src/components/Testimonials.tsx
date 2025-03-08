import React from "react";
import bgImage from "@/assets/testimonial-bg.png";
import quoteIcon from "@/assets/quote-icon.png";
import Image from 'next/image';

const testimonials = [
  {
    text: "This software has completely transformed the way we manage our properties. From rent collection to maintenance requests, everything is automated and easy to track. The user-friendly interface makes it simple for both landlords and tenants. Highly recommended!",
    avatar: "client1",
    name: "Emily R., Property Manager",
  
  },
  {
    text: "I love how easy it is to collect rent and track payments. The automated reminders and online payment options have drastically reduced late payments. Plus, the financial reports make tax season a breeze!",
    avatar: "client2",
    name: "Emily R., Property Manager",
 
  },
  {
    text: "Managing multiple rental properties used to be overwhelming, but this platform has simplified everything. The mobile app is a game-changer, allowing me to handle tenant communication and maintenance requests on the go!",
    avatar: "client3",
    name: "Sarah L., Landlord",
    
  },
];

const Testimonials: React.FC = () => {
  return (
    <section
      className="relative mt-16 px-6 md:px-12 py-16 md:py-24 max-h-testimonial text-center bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="container mx-auto">
        {/* Section Title with Centered and Max Width */}
        <h2 className="text-[36px] md:text-[44px] font-bold font-heading text-white max-w-[800px] mx-auto">
          Here’s What People Are Saying About Prop 360° 
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center"
            >
              {/* Quote Icon */}
              <Image
                src={quoteIcon}
                alt="Quote Icon"
                className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-10 h-10"
              />

              {/* Testimonial Text */}
              <p className="mt-4 font-body text-testimonialText italic text-black">
                {testimonial.text}
              </p>

              {/* Client Avatar */}
              {/* <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                className="mt-6 w-16 h-16 rounded-full object-cover"
              /> */}

              {/* Client Name */}
              <p className="mt-4 font-body text-clientName font-bold text-black">
                {testimonial.name}
              </p>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
