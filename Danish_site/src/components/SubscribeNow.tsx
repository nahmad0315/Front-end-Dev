import React from "react";

const SubscribeNow: React.FC = () => {
  return (
    <section className="px-6 md:px-12 py-16 text-center">
      <div className="container mx-auto max-w-[900px]">
        {/* Title */}
        <h2 className="text-[32px] md:text-[40px] font-bold font-button text-black">
          Discover <span className="text-primary"> More </span> About   <span className="text-primary">Prop 360° </span>
        </h2>
        <p className="text-gray-600 text-lg mt-2">
          Get in touch with us for a product demo!
        </p>

        {/* Form Fields */}
        <form className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full md:w-1/4 px-4 py-3 bg-gray-100 text-lg text-black focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full md:w-1/4 px-4 py-3 bg-gray-100 text-lg text-black focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full md:w-1/4 px-4 py-3 bg-gray-100 text-lg text-black focus:outline-none"
          />
          <button
            type="submit"
            className="w-full md:w-auto bg-primary text-white px-6 py-3 text-lg font-bold hover:bg-primary-dark transition"
          >
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeNow;
