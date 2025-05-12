// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-3xl p-10">
        
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-3 tracking-wide">
            Complaint Management System
          </h1>
          <p className="text-gray-600 text-lg">
            Seamlessly manage and resolve customer issues with ease
          </p>
        </header>

        {/* Login Buttons */}
        <div className="flex justify-center gap-8 mb-10">
          <Link to="/login/customer">
            <button className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
              Customer Login
            </button>
          </Link>
          <Link to="/login/agent">
            <button className="px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-green-700 transition duration-300">
              Service Agent Login
            </button>
          </Link>
        </div>

{/* Features Section */}
<div className="grid md:grid-cols-3 gap-8 mt-10">
  {/* Easy Registration */}
  <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
    <img
      src="https://images.unsplash.com/photo-1581090700227-1e8e8fba0283?auto=format&fit=crop&w=800&q=80"
      alt="Easy Registration"
      className="w-full h-40 object-cover"
    />
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold text-blue-700 mb-2">Easy Registration</h3>
      <p className="text-gray-600">Log your complaints quickly with a user-friendly form.</p>
    </div>
  </div>

  {/* Live Status Tracking */}
  <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
    <img
      src="https://images.unsplash.com/photo-1607435096932-719edc5e2290?auto=format&fit=crop&w=800&q=80"
      alt="Live Tracking"
      className="w-full h-40 object-cover"
    />
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold text-yellow-700 mb-2">Live Status Tracking</h3>
      <p className="text-gray-600">Track your complaint status in real-time with ease.</p>
    </div>
  </div>

  {/* Quick Resolutions */}
  <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
    <img
      src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80"
      alt="Quick Resolutions"
      className="w-full h-40 object-cover"
    />
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold text-green-700 mb-2">Quick Resolutions</h3>
      <p className="text-gray-600">Our support team ensures swift and efficient solutions.</p>
    </div>
  </div>
</div>



        {/* Footer */}
        <footer className="text-center text-gray-400 text-sm mt-12">
          © 2025 Complaint Management System. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
