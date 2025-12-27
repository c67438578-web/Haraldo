'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Snowflake, Wrench, ThermometerSun, CheckCircle, Calendar } from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const services = [
    {
      icon: <Snowflake className="w-12 h-12" />,
      title: "Residential A/C Installation",
      price: "$1,499",
      description: "Major brands with full warranty. Same day installation available.",
      features: ["No Interest Financing*", "Same Day Service", "Full Warranty"]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "A/C Service Call",
      price: "$119",
      description: "Comprehensive inspection of all components.",
      features: ["Expert Technicians", "Fee Toward Repair", "Detailed Report"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="bg-yellow-500 text-blue-900 inline-block px-4 py-1 rounded-full font-bold mb-4 text-xs">
              ⭐ #1 RATED IN ORLANDO
            </div>
            <h2 className="text-5xl font-bold mb-6">Orlando's Trusted Air Conditioning Experts</h2>
            <p className="text-xl mb-8 opacity-90">Fast, Reliable, and Affordable AC Services.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition shadow-lg">
                Schedule Now
              </Link>
              <a href="tel:4074891867" className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2">
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <div className="text-3xl font-bold text-red-600 mb-4">{service.price}</div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
