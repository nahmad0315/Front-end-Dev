const MarketTrends = () => {
  return (
    <section
      id="market-trends"
      className="bg-blue-50 py-16 px-6 md:px-12 lg:px-20 rounded-lg shadow-md"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Market Insights & Trends
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Stay updated with the latest real estate market trends, pricing
          changes, and investment opportunities.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <a
            href="#market-trends"
            className="text-xl font-semibold text-blue-600 hover:underline"
          >
            Price Fluctuations
          </a>
          <p className="text-gray-600 mt-2">
            Track the latest price movements in different real estate markets.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <a
            href="#market-trends"
            className="text-xl font-semibold text-blue-600 hover:underline"
          >
            Demand & Supply
          </a>
          <p className="text-gray-600 mt-2">
            Analyze the balance between property demand and available listings.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <a
            href="#market-trends"
            className="text-xl font-semibold text-blue-600 hover:underline"
          >
            Mortgage Rates
          </a>
          <p className="text-gray-600 mt-2">
            Stay informed about mortgage interest rate changes and financing
            trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketTrends;
