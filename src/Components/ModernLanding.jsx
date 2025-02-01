import React from "react";

const ModernLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">MyBrand</span>
            </div>
            <div className="hidden md:flex space-x-10">
              <a href="#features" className="text-gray-700 hover:text-blue-600">
                Features
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600">
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-blue-600"
              >
                Testimonials
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </a>
            </div>
            <div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">
            Build Your Dream Project with Us
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We provide the best tools and services to help you grow your
            business and achieve your goals.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Easy to Use
              </h3>
              <p className="text-gray-600">
                Our platform is designed to be user-friendly, so you can focus
                on what matters most.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Powerful Tools
              </h3>
              <p className="text-gray-600">
                Access advanced tools to streamline your workflow and boost
                productivity.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Our team is always here to help you with any questions or
                issues.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "This platform has completely transformed the way we do
                business. Highly recommended!"
              </p>
              <p className="text-blue-900 font-bold">- John Doe</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "The support team is amazing. They helped us solve our issues in
                no time."
              </p>
              <p className="text-blue-900 font-bold">- Jane Smith</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MyBrand</h3>
              <p className="text-gray-300">
                Empowering businesses with innovative solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-300 hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-300 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-300 hover:text-white"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-300">Email: support@mybrand.com</p>
              <p className="text-gray-300">Phone: +123 456 7890</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernLanding;
