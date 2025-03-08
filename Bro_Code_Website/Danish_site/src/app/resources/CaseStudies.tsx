const CaseStudies = () => {
  return (
    <section
      id="case-studies"
      className="bg-blue-50 py-16 px-6 md:px-12 lg:px-20 rounded-lg shadow-md"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Real Estate Case Studies
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Explore real-world examples of successful real estate investments and
          developments.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <a
            href="#case-studies"
            className="text-xl font-semibold text-blue-600 hover:underline"
          >
            Successful Property Flips
          </a>
          <p className="text-gray-600 mt-2">
            Learn how investors turned underperforming properties into
            profitable assets.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <a
            href="#case-studies"
            className="text-xl font-semibold text-blue-600 hover:underline"
          >
            Rental Income Strategies
          </a>
          <p className="text-gray-600 mt-2">
            Discover how landlords maximize rental yields with strategic
            investments.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <a
            href="#case-studies"
            className="text-xl font-semibold text-blue-600 hover:underline"
          >
            Smart Urban Development
          </a>
          <p className="text-gray-600 mt-2">
            Explore how cities are transforming with innovative real estate
            projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
