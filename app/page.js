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
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        
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
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Same Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No Interest Financing*</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl font-bold">
            🚨 AC Emergency? We're Available 24/7! Call: <a href="tel:4074891867" className="underline hover:text-yellow-300">407-489-1867</a>
          </p>
        </div>
      </div>

      {/* Services Section */}
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
                <div className="space-y-2">
                  <a href="tel:4074891867" className="block w-full bg-blue-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-blue-700 transition">
                    Call 407-489-1867
                  </a>
                  <a href="#book" className="block w-full bg-gray-200 text-gray-800 py-3 rounded-lg text-center font-semibold hover:bg-gray-300 transition">
                    Book Online
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">Orlando's Most Trusted AC Company</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Shield className="w-10 h-10" />, title: "Licensed & Insured", desc: "Fully certified for your peace of mind" },
              { icon: <Clock className="w-10 h-10" />, title: "24/7 Service", desc: "Emergency repairs day and night" },
              { icon: <Award className="w-10 h-10" />, title: "Expert Technicians", desc: "Years of professional experience" },
              { icon: <Users className="w-10 h-10" />, title: "100% Satisfaction", desc: "Quality service guaranteed" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <div className="flex justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-xl text-gray-600">5.0 Stars - 500+ Happy Customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{r.text}"</p>
                <p className="font-semibold text-gray-900">- {r.name}</p>
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
              <p className="text-xl text-blue-200">Same Day Service Available</p>
            </div>

            <div className="bg-white rounded-lg p-8 text-gray-900">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="px-4 py-2 border rounded-lg"
                  placeholder="Full Name *"
                />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="px-4 py-2 border rounded-lg"
                  placeholder="Phone *"
                />
              </div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg mb-4"
                placeholder="Email *"
              />
              <select
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg mb-4"
              >
                <option value="">Select Service...</option>
                <option value="installation">AC Installation - $1,499</option>
                <option value="service">Service Call - $119</option>
                <option value="refrigeration">Refrigeration - $180</option>
                <option value="emergency">Emergency Repair</option>
              </select>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="4"
                className="w-full px-4 py-2 border rounded-lg mb-6"
                placeholder="Details..."
              ></textarea>
              <button
                onClick={handleSubmit}
                className="w-full bg-red-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-red-700"
              >
                Request Appointment
              </button>
              <p className="text-center text-sm text-gray-600 mt-4">
                Or call: <a href="tel:4074891867" className="text-blue-600 font-semibold">407-489-1867</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Snowflake className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-bold">Orlando AC</h3>
              </div>
              <p className="text-gray-400">Trusted air conditioning experts serving Orlando and Central Florida.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>AC Installation</li>
                <li>AC Repair</li>
                <li>Maintenance</li>
                <li>Refrigeration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Orlando, FL</li>
                <li><a href="tel:4074891867">407-489-1867</a></li>
                <li><a href="tel:3219728005">321-972-8005</a></li>
                <li>24/7 Emergency</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Orlando Air Conditioning. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <a
        href="tel:4074891867"
        className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-2xl hover:bg-red-700 z-50 flex items-center gap-2"
      >
        <Phone className="w-6 h-6" />
        <span className="font-semibold hidden md:inline">Call Now</span>
      </a>
    </div>
  );
}
