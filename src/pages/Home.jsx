const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Home Page</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover a suite of powerful, intuitive tools that help teams of all sizes 
          efficiently build, successfully launch, and sustainably grow modern, 
          high-impact products.
        </p>
        
        {/* Buttons */}
        <div className="mt-8 space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300">
            Get Started
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-6 py-3 rounded-lg border border-gray-300 shadow-sm transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Fast Development</h3>
            <p className="text-gray-600 leading-relaxed">
              Build products faster with our intuitive tools and streamlined workflows.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Analytics Dashboard</h3>
            <p className="text-gray-600 leading-relaxed">
              Track your growth with comprehensive analytics and insights.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Team Collaboration</h3>
            <p className="text-gray-600 leading-relaxed">
              Work together seamlessly with real-time collaboration features.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Customer Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white p-8 rounded-xl shadow-md italic">
          <p className="text-gray-700 text-lg mb-4">
            "This platform has completely transformed how our team builds and launches products. 
            The tools are intuitive and the support is amazing!"
          </p>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
            <div>
              <p className="font-semibold">Jane Doe</p>
              <p className="text-sm text-gray-500">CEO, TechStart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;