import React, { useState } from "react";

function CustomerForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <>
      <div className="absolute inset-0 bg-gray-800/50 backdrop-blur-xl"></div>
      <form
        onSubmit={handleSubmit}
        className="relative w-full bg-white/30 backdrop-blur-2xl shadow-2xl border  p-12 overflow-hidden"
      >
        {/* Decorative glass elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-100/10 rounded-full blur-xl"></div>

        <h2 className="text-4xl text-gray-900 font-semibold text-center mb-12 relative z-10">
          Customer Form
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          {/* Left Section */}
          <div className="space-y-8">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-white/40 text-gray-800 rounded-2xl shadow-lg backdrop-blur-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/40 text-gray-800 rounded-2xl shadow-lg backdrop-blur-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                placeholder="Enter your last name"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-white/40 text-gray-800 rounded-2xl shadow-lg backdrop-blur-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-8">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-white/40 text-gray-800 rounded-2xl shadow-lg backdrop-blur-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-white/40 text-gray-800 rounded-2xl shadow-lg backdrop-blur-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                placeholder="Enter your address"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-white/40 text-gray-800 rounded-2xl shadow-lg backdrop-blur-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                placeholder="Enter your city"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-12 text-center relative z-10">
          <button
            type="submit"
            className="px-10 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-2xl shadow-2xl backdrop-blur-md transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default CustomerForm;
