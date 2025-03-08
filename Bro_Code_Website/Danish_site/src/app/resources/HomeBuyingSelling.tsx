const HomeBuying = () => {
  return (
    <section
      id="home-buying"
      className="bg-blue-50 py-16 px-6 md:px-12 lg:px-20 rounded-lg shadow-md"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Home Buying Guide
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Get expert tips and insights to make informed decisions when
          purchasing a home.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <a
            href="#home-buying"
            className="text-xl font-semibold text-blue-600 hover:underline"
          >
            Choosing the Right Property
          </a>
          <p className="text-gray-600 mt-2">
            Learn how to select a home that fits your needs, lifestyle, and
            budget.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <a
            href="#home-buying"
            className="text-xl font-semibold text-blue-600 hover:underline"
          >
            Financing & Mortgages
          </a>
          <p className="text-gray-600 mt-2">
            Explore mortgage options, loan types, and financial planning tips.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <a
            href="#home-buying"
            className="text-xl font-semibold text-blue-600 hover:underline"
          >
            Home Inspection Checklist
          </a>
          <p className="text-gray-600 mt-2">
            Ensure your dream home meets all quality and safety standards before
            purchase.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeBuying;
