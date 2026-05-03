const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Choose the perfect plan for your team. All plans include a 14-day free trial.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto px-4 -mt-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Basic</h3>
              <p className="text-gray-600 mb-6">For small teams just getting started</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-800">$19</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <span className="text-blue-600 mr-2">✓</span>
                  Up to 5 team members
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-blue-600 mr-2">✓</span>
                  Basic analytics
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-blue-600 mr-2">✓</span>
                  24/7 email support
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="text-gray-400 mr-2">✗</span>
                  Advanced features
                </li>
              </ul>
              <button className="w-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition duration-300">
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Pro Plan - Popular */}
          <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow overflow-hidden transform scale-105 border-2 border-blue-600">
            <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">
              MOST POPULAR
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Pro</h3>
              <p className="text-gray-600 mb-6">For growing teams with more needs</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-800">$49</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <span className="text-blue-600 mr-2">✓</span>
                  Up to 20 team members
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-blue-600 mr-2">✓</span>
                  Advanced analytics
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-blue-600 mr-2">✓</span>
                  Priority support
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-blue-600 mr-2">✓</span>
                  Custom integrations
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg">
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">For large organizations</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-800">$99</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <span className="text-blue-600 mr-2">✓</span>
                  Unlimited team members
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-blue-600 mr-2">✓</span>
                  Enterprise analytics
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-blue-600 mr-2">✓</span>
                  24/7 phone support
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-blue-600 mr-2">✓</span>
                  Custom development
                </li>
              </ul>
              <button className="w-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Money-back guarantee */}
        <p className="text-center text-gray-600 mt-8">
          All plans come with a 30-day money-back guarantee. No questions asked.
        </p>
      </div>

      {/* Feature Comparison Table */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Compare Features</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-4 px-6 text-left text-gray-800 font-semibold">Feature</th>
                  <th className="py-4 px-6 text-center text-gray-800 font-semibold">Basic</th>
                  <th className="py-4 px-6 text-center text-gray-800 font-semibold bg-blue-50">Pro</th>
                  <th className="py-4 px-6 text-center text-gray-800 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-600">Team members</td>
                  <td className="py-4 px-6 text-center text-gray-600">5 max</td>
                  <td className="py-4 px-6 text-center text-gray-600 bg-blue-50">20 max</td>
                  <td className="py-4 px-6 text-center text-gray-600">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-600">Storage</td>
                  <td className="py-4 px-6 text-center text-gray-600">10GB</td>
                  <td className="py-4 px-6 text-center text-gray-600 bg-blue-50">100GB</td>
                  <td className="py-4 px-6 text-center text-gray-600">1TB</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-600">Analytics</td>
                  <td className="py-4 px-6 text-center text-gray-600">Basic</td>
                  <td className="py-4 px-6 text-center text-gray-600 bg-blue-50">Advanced</td>
                  <td className="py-4 px-6 text-center text-gray-600">Enterprise</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-600">Support</td>
                  <td className="py-4 px-6 text-center text-gray-600">Email</td>
                  <td className="py-4 px-6 text-center text-gray-600 bg-blue-50">Priority</td>
                  <td className="py-4 px-6 text-center text-gray-600">24/7 Phone</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-600">Custom integrations</td>
                  <td className="py-4 px-6 text-center text-gray-600">-</td>
                  <td className="py-4 px-6 text-center text-gray-600 bg-blue-50">✓</td>
                  <td className="py-4 px-6 text-center text-gray-600">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          {/* FAQ 1 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Can I change plans later?</h3>
            <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
          </div>
          
          {/* FAQ 2 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Is there a long-term contract?</h3>
            <p className="text-gray-600">No, all our plans are month-to-month. You can cancel anytime with no penalties.</p>
          </div>
          
          {/* FAQ 3 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">What payment methods do you accept?</h3>
            <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for enterprise plans.</p>
          </div>
          
          {/* FAQ 4 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you offer discounts for non-profits?</h3>
            <p className="text-gray-600">Yes! We offer special pricing for non-profit organizations. Please contact our sales team for more information.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of teams building better products with our platform.</p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg">
            Start Your Free Trial
          </button>
          <p className="text-sm text-blue-200 mt-4">No credit card required</p>
        </div>
      </div>

      {/* Testimonial */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <p className="text-gray-700 text-lg mb-4 italic leading-relaxed">
            "The Pro plan has been perfect for our growing team. The advanced analytics and priority support have made a huge difference in our workflow."
          </p>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-full mr-3 flex items-center justify-center">
              <span className="text-blue-600 font-semibold">MC</span>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Mark Chen</p>
              <p className="text-sm text-blue-600">Product Manager, TechCorp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;