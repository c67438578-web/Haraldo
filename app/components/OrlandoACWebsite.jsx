'use client';

import { useState } from 'react';
import { 
  Phone, Clock, MapPin, CheckCircle, Calendar, Snowflake, Wrench, ThermometerSun, Menu, X 
} from 'lucide-react';

export default function OrlandoACWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Service request submitted! We will contact you shortly.');
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  const services = [
    {
      icon: <Snowflake className="w-12 h-12 text-blue-600" />,
      title: "Residential A/C Installation",
      price: "$1,499",
      description: "Most major market brands with no hassle or gimmick with warranty. Same day installation available.",
      features: ["No Interest Financing*", "Same Day Service", "Full Warranty", "Major Brands"]
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: "A/C Service Call",
      price: "$119",
      description: "Comprehensive AC inspection, examining all components of your home's air conditioning system.",
      features: ["Thorough Inspection", "All Components Checked", "Fee Goes Toward Repair", "Expert Technicians"]
    },
    {
      icon: <ThermometerSun className="w-12 h-12 text-blue-600" />,
      title: "Refrigeration Service",
      price: "$180",
      description: "Experienced technicians for walk-in coolers and refrigeration equipment.",
      features: ["Commercial Systems", "Preventative Maintenance", "Emergency Service", "Full Warranty"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />24/7 Emergency Service</span>
            <span className="hidden sm:flex items-center gap-1"><MapPin className="w-4 h-4" />Serving Orlando & Central Florida</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:4074891867" className="hover:text-blue-300 font-semibold">407-489-1867</a>
            <a href="tel:3219728005" className="hover:text-blue-300 font-semibold">321-972-8005</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Snowflake className="w-10 h-10 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Orlando Air Conditioning</h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
            <a href="#book" className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 font-semibold transition">Book Now</a>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-3 px-4 pb-4">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-gray-700">Services</a>
            <a href="#book" onClick={() => setIsMenuOpen(false)} className="text-gray-700">Book Now</a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">Orlando's Trusted Air Conditioning Experts</h2>
        <p className="text-xl md:text-2xl mb-8">Fast, Reliable, and Affordable AC Installation & Repair Services</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="#book" className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition">Schedule Service</a>
          <a href="tel:4074891867" className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition flex items-center gap-2"><Phone className="w-5 h-5" />Call Now</a>
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
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <div className="text-4xl font-bold text-red-600 mb-4">{service.price}</div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500" />{f}
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
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <Calendar className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Schedule Your Service</h2>
          </div>

          <form className="bg-white text-gray-900 rounded-lg p-8 space-y-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name *" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
            <input type="tel" placeholder="Phone *" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
            <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
              <option value="">Select Service</option>
              <option value="installation">Residential A/C Installation</option>
              <option value="service">A/C Service Call</option>
              <option value="refrigeration">Refrigeration Service</option>
            </select>
            <textarea placeholder="Message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-2 border rounded-lg" rows={4}></textarea>
            <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition">Request Appointment</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 text-center">
        <p>&copy; 2025 Orlando Air Conditioning. All rights reserved.</p>
      </footer>
    </div>
  );
}
