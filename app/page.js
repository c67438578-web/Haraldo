'use client'

import React, { useState } from 'react';
import { Phone, MapPin, Clock, Star, CheckCircle, Wrench, Wind, Shield, Award, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    { icon: <Wind className="w-12 h-12" />, title: "Indoor Air Quality", desc: "Breathing well is something we tend to take for granted, but for many clean air is essential." },
    { icon: <Wrench className="w-12 h-12" />, title: "A/C Service", desc: "We service all makes, models, styles, and ages of A/C units." },
    { icon: <Shield className="w-12 h-12" />, title: "Replacement Estimate", desc: "For more information, contact Orlando AC at (407) 489-1867." }
  ];

  const reviews = [
    { name: "Sarah Mitchell", text: "They are always very professional. I have used this company multiple times for my personal property and my rental and have always had a good experience." },
    { name: "James Rodriguez", text: "Recently switched companies and decided to give Orlando AC a try. The difference was night and day. The service was by far the most comprehensive." },
    { name: "Emily Chen", text: "We replaced an old system and I'm very pleased with the whole process. The technicians are professional and reliable." }
  ];

  const brands = ["Lennox", "Trane", "American Standard", "Rheem", "York", "Carrier", "Bryant", "Ruud", "Goodman", "Daikin", "Honeywell", "Bosch"];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
              $0 Down financing for 60 months, with approved credit
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Our Service Is Your Comfort!
            </h2>
            <p className="text-2xl text-blue-100 mb-4 font-semibold">
              Schedule Now for SAME DAY Service!
            </p>
            <p className="text-lg text-blue-200 mb-8 leading-relaxed">
              Orlando AC is an HVAC company founded on the satisfaction and loyalty of our customers. Over 28 years of service, we've built relationships by exceeding expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-bold text-lg transition text-center">
                Contact Us
              </Link>
              <a href="tel:407-489-1867" className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded font-bold text-lg transition text-center">
                Call Now
              </a>
              <Link href="/services" className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded font-bold text-lg transition text-center">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Banner */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Serving ALL of Orlando and Central Florida</h3>
          <p className="text-gray-600">
            Professional residential and commercial temperature control. From efficiency to indoor air quality, we deliver results.
          </p>
        </div>
      </div>

      {/* Trusted Service Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Trusted and Reliable Service</h3>
              <div className="h-1 w-20 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Call us at <strong>(407) 489-1867</strong> any time. We answer 24/7 to provide scheduling for your comfort.
              </p>
              <Link href="/about" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-bold transition">
                Learn More About Us
              </Link>
            </div>
            <div className="grid gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600 hover:shadow-md transition">
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-600">{service.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>
                      <p className="text-gray-600 mb-3">{service.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-center text-xl font-bold text-gray-900 mb-8">We Service All Major Brands</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {brands.map((brand, i) => (
              <div key={i} className="bg-white p-4 rounded shadow-sm flex items-center justify-center border border-gray-100">
                <span className="text-gray-500 font-bold">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <div className="flex justify-center space-x-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-700 mb-6 italic">"{review.text}"</p>
                <p className="font-bold text-gray-900">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Professional, Reliable And Fast</h2>
              <p className="text-blue-100 text-lg mb-6">
                Serving Orlando families since 1997 with top-notch HVAC products and services.
              </p>
              <Link href="/contact" className="inline-block bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded font-bold transition">
                Request Service
              </Link>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 italic">License #CAC057552</h3>
              <div className="grid grid-cols-1 gap-3">
                {['24/7 Emergency Support', 'Licensed & Insured', 'Same Day Service', 'Free Estimates'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="text-yellow-500 w-5 h-5" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
