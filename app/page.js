'use client'

import React, { useState } from 'react';
import { Phone, Clock, MapPin, Star, CheckCircle, Calendar, Snowflake, Wrench, ThermometerSun, Shield, Award, Users, Menu, X } from 'lucide-react';

export default function OrlandoACWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Service request submitted! We will contact you shortly.');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const services = [
    {
      icon: <Snowflake className="w-12 h-12" />,
      title: "Residential A/C Installation",
      price: "$1,499",
      description: "Most major market brands with no hassle or gimmick with warranty. Same day installation available.",
      features: ["No Interest Financing*", "Same Day Service", "Full Warranty", "Major Brands"]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "A/C Service Call",
      price: "$119",
      description: "Comprehensive and meticulous AC inspection, examining all components of your home's air conditioning system.",
      features: ["Thorough Inspection", "All Components Checked", "Fee Goes Toward Repair", "Expert Technicians"]
    },
    {
      icon: <ThermometerSun className="w-12 h-12" />,
      title: "Refrigeration Service",
      price: "$180",
      description: "Experienced technicians for walk-in coolers and refrigeration equipment.",
      features: ["Commercial Systems", "Preventative Maintenance", "Emergency Service", "Full Warranty"]
    }
  ];

  const reviews = [
    { name: "Michael R.", rating: 5, text: "Outstanding service! They installed my new AC unit the same day I called. Professional and affordable." },
    { name: "Sarah L.", rating: 5, text: "Best AC company in Orlando! Fixed my system quickly and the price was very reasonable." },
    { name: "David K.", rating: 5, text: "Highly recommend! Their technician was knowledgeable and got my AC running perfectly." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              24/7 Emergency Service
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Serving Orlando & Central Florida
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:4074891867" className="hover:text-blue-300 font-semibold">407-489-1867</a>
            <a href="tel:3219728005" className="hover:text-blue-300 font-semibold">321-972-8005</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Snowflake className="w-10 h-10 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Orlando Air Conditioning</h1>
                <p className="text-sm text-gray-600">Your Comfort, Our Priority</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
              <a href="#book" className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition font-semibold">
                Book Now
              </a>
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-gray-700">Home</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-gray-700">Services</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-gray-700">About</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-700">Contact</a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="bg-yellow-500 text-blue-900 inline-block px-4 py-2 rounded-full font-bold mb-4 text-sm">
              ⭐ #1 RATED IN ORLANDO
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Orlando's Trusted Air Conditioning Experts
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Fast, Reliable, and Affordable AC Installation & Repair Services
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#book" className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition shadow-lg">
                Schedule Service Now
              </a>
              <a href="tel:4074891867" className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition shadow-lg flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Professional AC Solutions for Every Need</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition border-t-4 border-blue-600">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <div className="text-4xl font-bold text-red-600 mb-4">{service.price}</div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Calendar className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4">Schedule Your Service Today</h2>
            </div>

            <div className="bg-white rounded-lg p-8 text-gray-900">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg mb-4"
                placeholder="Full Name *"
              />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg mb-4"
                placeholder="Phone *"
              />
              <button
                onClick={handleSubmit}
                className="w-full bg-red-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-red-700"
              >
                Request Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Orlando Air Conditioning. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
