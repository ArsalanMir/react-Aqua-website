import ProductList from "../components/ProductList";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <div>
      <Hero />

      {/* Why Choose Us Section */}
      <section className="container mx-auto p-6 text-center">
        <h2 className="text-4xl font-bold text-blue-600">Why Choose Aqua Life?</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">High-Quality Filtration</h3>
            <p className="mt-2 text-gray-700">Advanced purification technology to ensure clean water.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Affordable Pricing</h3>
            <p className="mt-2 text-gray-700">Top-tier purification at reasonable prices.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Customer Support</h3>
            <p className="mt-2 text-gray-700">24/7 assistance for all your water purification needs.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <ProductList limit={4} />
    </div>
  );
};

export default Home;
