const PropertyManagement = () => {
  return (
    <section
      id="property-management"
      className="bg-blue-50 py-16 px-6 md:px-12 lg:px-20 rounded-lg shadow-md"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Property Management & Best Practices
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Optimize your property management with expert insights and strategies.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <a
            href="#property-management"
            className="text-xl font-semibold text-blue-600 hover:underline"
          >
            Tenant Management
          </a>
          <p className="text-gray-600 mt-2">
            Learn how to handle tenant relations, leasing agreements, and rent
            collection.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <a
            href="#property-management"
            className="text-xl font-semibold text-blue-600 hover:underline"
          >
            Maintenance & Upkeep
          </a>
          <p className="text-gray-600 mt-2">
            Discover best practices for maintaining and improving property
            value.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <a
            href="#property-management"
            className="text-xl font-semibold text-blue-600 hover:underline"
          >
            Financial Planning
          </a>
          <p className="text-gray-600 mt-2">
            Understand budgeting, expense tracking, and maximizing rental
            income.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PropertyManagement;
