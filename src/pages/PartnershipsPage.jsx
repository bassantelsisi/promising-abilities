// src/pages/PartnershipsPage.jsx
import React from 'react';

function PartnershipsPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-teal-800 mb-6">Our Partnerships</h1>
      
      <div className="mb-8">
        <p className="text-lg mb-4">
          At Promising Abilities, we believe in the power of collaboration. We partner with organizations 
          that share our vision of creating opportunities and support for individuals with diverse abilities.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-teal-700 mb-3">Current Partners</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Local Educational Institutions</li>
            <li>Community Support Organizations</li>
            <li>Employment Agencies</li>
            <li>Healthcare Providers</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-teal-700 mb-3">Partnership Benefits</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Collaborative program development</li>
            <li>Shared resources and expertise</li>
            <li>Increased community impact</li>
            <li>Access to wider networks</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 bg-teal-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-teal-700 mb-3">Become a Partner</h2>
        <p className="mb-4">
          We're always looking to expand our network of partners. If your organization is interested
          in partnering with Promising Abilities, please get in touch with us.
        </p>
        <button className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition-colors">
          Contact Us About Partnerships
        </button>
      </div>
    </div>
  );
}

export default PartnershipsPage;