const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-6xl mx-auto px-4 -mt-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Card */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-3xl">📧</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Our team is here to help</p>
            <a href="mailto:support@company.com" className="text-blue-600 hover:text-blue-800 font-semibold">
              support@company.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-3xl">📞</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Mon-Fri from 8am to 6pm</p>
            <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800 font-semibold">
              +1 (234) 567-890
            </a>
          </div>

          {/* Office Card */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-3xl">📍</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-4">Come say hello at our office</p>
            <p className="text-blue-600 font-semibold">123 Business St, CA 94105</p>
          </div>
        </div>
      </div>

      {/* Contact Form and Map Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows="5"
                  placeholder="Tell us more about your inquiry..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Location</h2>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl mb-2 block">🗺️</span>
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">123 Business Street, San Francisco, CA 94105</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Business Hours</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-gray-800 font-semibold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-gray-800 font-semibold">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-gray-800 font-semibold">Closed</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">24/7 Support</span>
                  <span className="text-blue-600 font-semibold">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Quick Answers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">❓ How quickly do you respond?</h3>
              <p className="text-gray-600">We typically respond within 24 hours during business days.</p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">❓ Do you offer phone support?</h3>
              <p className="text-gray-600">Yes! Phone support is available for Pro and Enterprise plans.</p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">❓ Where are you located?</h3>
              <p className="text-gray-600">Our headquarters is in San Francisco, with remote teams worldwide.</p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">❓ Do you have live chat?</h3>
              <p className="text-gray-600">Live chat is available for Enterprise customers during business hours.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Connect With Us</h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {/* Twitter */}
          <a href="#" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center w-32">
            <div className="text-4xl mb-2">🐦</div>
            <span className="text-sm text-gray-600">Twitter</span>
          </a>

          {/* LinkedIn */}
          <a href="#" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center w-32">
            <div className="text-4xl mb-2">💼</div>
            <span className="text-sm text-gray-600">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a href="#" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center w-32">
            <div className="text-4xl mb-2">🐙</div>
            <span className="text-sm text-gray-600">GitHub</span>
          </a>

          {/* Discord */}
          <a href="#" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center w-32">
            <div className="text-4xl mb-2">💬</div>
            <span className="text-sm text-gray-600">Discord</span>
          </a>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8">Subscribe to our newsletter for product updates and insights</p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>

      {/* Testimonial */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <p className="text-gray-700 text-lg mb-4 italic leading-relaxed">
            "The support team was incredibly helpful in getting us set up. They went above and beyond to answer all our questions!"
          </p>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-full mr-3 flex items-center justify-center">
              <span className="text-blue-600 font-semibold">AR</span>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Alex Rivera</p>
              <p className="text-sm text-blue-600">Startup Founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;