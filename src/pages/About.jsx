const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header Section with Background Image */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-grey-600 bg-opacity-70"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl px-4 text-center text-blue-100">
            Learn more about our journey and the team behind the magic
          </p>
        </div>
      </div>

      {/* Company Story Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Story
        </h2>
        <div className="prose prose-lg mx-auto">
          <p className="text-gray-600 mb-4 leading-relaxed">
            Founded in 2020, we started with a simple mission: to make product
            development accessible to everyone. What began as a small team of
            passionate developers has grown into a global community of
            innovators.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Today, we help thousands of teams build, launch, and grow their
            products with our intuitive tools and comprehensive platform. We
            believe in the power of collaboration and continuous improvement.
          </p>
        </div>
      </div>

      {/* Values Section with Cards */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-lg font-semibold text-center mb-2 text-gray-800">
                Innovation
              </h3>
              <p className="text-gray-600 text-sm text-center">
                Pushing boundaries and exploring new possibilities every day
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-center mb-2 text-gray-800">
                Teamwork
              </h3>
              <p className="text-gray-600 text-sm text-center">
                Collaborating across borders to achieve greatness together
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-lg font-semibold text-center mb-2 text-gray-800">
                Excellence
              </h3>
              <p className="text-gray-600 text-sm text-center">
                Delivering high-quality solutions that exceed expectations
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold text-center mb-2 text-gray-800">
                Growth
              </h3>
              <p className="text-gray-600 text-sm text-center">
                Continuous learning and improvement in everything we do
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Meet Our Team
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {/* Team Member 1 */}
            <div className="w-64 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">
                  John Smith
                </h3>
                <p className="text-sm text-blue-600 mb-3">CEO & Founder</p>
                <p className="text-sm text-gray-600">
                  10+ years in tech leadership
                </p>
                <div className="mt-4 flex justify-center space-x-3">
                  <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                    📧
                  </span>
                  <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                    🔗
                  </span>
                  <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                    🐦
                  </span>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="w-64 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">
                  Sarah Johnson
                </h3>
                <p className="text-sm text-blue-600 mb-3">CTO</p>
                <p className="text-sm text-gray-600">
                  Former tech lead at Google
                </p>
                <div className="mt-4 flex justify-center space-x-3">
                  <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                    📧
                  </span>
                  <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                    🔗
                  </span>
                  <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                    🐦
                  </span>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="w-64 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">
                  Mike Chen
                </h3>
                <p className="text-sm text-blue-600 mb-3">Product Lead</p>
                <p className="text-sm text-gray-600">
                  Product expert with 8+ years
                </p>
                <div className="mt-4 flex justify-center space-x-3">
                  <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                    📧
                  </span>
                  <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                    🔗
                  </span>
                  <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                    🐦
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Users Worldwide</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section with Form */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Get in Touch
        </h2>

        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <p className="text-gray-700 text-lg mb-4 italic leading-relaxed">
            "This platform has completely transformed how our team builds and
            launches products. The tools are intuitive and the support is
            amazing!"
          </p>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-full mr-3 flex items-center justify-center">
              <span className="text-blue-600 font-semibold">JD</span>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Jane Doe</p>
              <p className="text-sm text-blue-600">CEO, TechStart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
