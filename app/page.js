'use client'

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Phone, MapPin, Clock, Star, CheckCircle, Wrench, Wind, Shield, Award, ChevronRight, Users, ThumbsUp, Zap, Mail, TrendingUp, BadgeCheck, Sparkles } from 'lucide-react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const trackEvent = (eventName) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: eventName });
    }
  };

  const services = [
    { icon: <Wind className="w-12 h-12" />, title: "Indoor Air Quality Solutions", desc: "Clean air isn't a luxury - it's essential for your health and comfort at home." },
    { icon: <Wrench className="w-12 h-12" />, title: "Complete AC Service", desc: "We service all makes, models, and types of residential and commercial cooling systems." },
    { icon: <Shield className="w-12 h-12" />, title: "Free Replacement Estimates", desc: "Get your no-obligation quote today - call us at (407) 489-1834" }
  ];

  const reviews = [
    { name: "Sarah Mitchell", text: "Always professional and reliable. I've used this company multiple times for both my home and rental properties - consistently excellent experience." },
    { name: "James Rodriguez", text: "Recently switched from another company and tried Altamonte AC. The difference was incredible. The service was by far the most thorough I've experienced." },
    { name: "Emily Chen", text: "We replaced an outdated system and I'm extremely satisfied with the entire process. The technicians are true professionals and completely trustworthy." }
  ];

  const brands = ["Lennox", "Trane", "American Standard", "Rheem", "York", "Carrier", "Bryant", "Ruud", "Goodman", "Daikin", "Honeywell", "Bosch"];

  const stats = [
    { number: "28+", label: "Years of Excellence", icon: <Award className="w-8 h-8" /> },
    { number: "15,000+", label: "Happy Customers", icon: <Users className="w-8 h-8" /> },
    { number: "98%", label: "Customer Satisfaction", icon: <ThumbsUp className="w-8 h-8" /> },
    { number: "24/7", label: "Emergency Service", icon: <Clock className="w-8 h-8" /> }
  ];

  const whyChooseUs = [
    { icon: <BadgeCheck className="w-10 h-10" />, title: "Licensed & Insured", desc: "Fully certified HVAC professionals you can trust" },
    { icon: <Zap className="w-10 h-10" />, title: "Same-Day Service Available", desc: "Fast response times when you need us most" },
    { icon: <TrendingUp className="w-10 h-10" />, title: "Competitive Pricing", desc: "Premium AC services at affordable rates" },
    { icon: <Sparkles className="w-10 h-10" />, title: "Satisfaction Guaranteed", desc: "100% quality guarantee on every job we complete" }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    trackEvent('newsletter_signup');
    alert(`Thank you! We'll send HVAC tips and exclusive offers to ${email}`);
    setEmail('');
  };

  return (
    <>
      <Head>
        <title>Expert AC Repair & Installation Altamonte Springs, FL | #1 Rated</title>
        <meta name="description" content="Top-rated AC repair, installation & maintenance in Altamonte Springs, FL. 28+ years of trusted HVAC service. Same-day appointments available. Call (407) 489-1834" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Expert AC Repair & Installation Altamonte Springs, FL | #1 Rated" />
        <meta property="og:description" content="28+ years providing professional HVAC services in Altamonte Springs, FL. Same-day service available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://orlandoaircond.com" />
      </Head>

      <main className="min-h-screen bg-white overflow-hidden">
        {/* Floating CTA Button */}
        <div
          className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${showFloatingCTA ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
          role="button"
          aria-label="Call Altamonte AC"
        >
          <a
            href="tel:4074891864"
            onClick={() => trackEvent('phone_click')}
            className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="w-5 h-5 animate-pulse" />
            <span className="font-bold">Call Now</span>
          </a>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                animation: 'pulse 4s ease-in-out infinite'
              }}
            ></div>
          </div>

          <div className={`relative max-w-7xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg hover:shadow-yellow-500/50 transition-shadow">
                <Sparkles className="w-4 h-4" />
                Professional Air Conditioning
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                #1 Rated AC Experts in <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">Altamonte Springs</span>
              </h1>
              <p className="text-2xl text-blue-100 mb-4 font-semibold">Schedule Today for SAME DAY Service!</p>
              <p className="text-lg text-blue-200 mb-8 leading-relaxed">
                Altamonte AC is your trusted HVAC partner in Altamonte Springs, FL. For over 28 years, we've delivered exceptional AC repair, installation, and maintenance services while building lasting relationships with our customers through unmatched quality and reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-red-500/50 flex items-center justify-center gap-2"
                >
                  Get Started
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:4074891834"
                  onClick={() => trackEvent('phone_click')}
                  className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-xl text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  (407) 489-1834
                </a>
                <a
                  href="#services"
                  className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all text-center"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center transform hover:scale-110 transition-all duration-300">
                  <div className="flex justify-center mb-3 text-yellow-400">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-blue-100 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area Banner */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-8 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Serving ALL of Altamonte Springs & Seminole County</h2>
            <p className="text-gray-600">
              Professional residential and commercial HVAC solutions. From energy efficiency to indoor air quality, we deliver exceptional results every time.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Why Choose Altamonte AC?</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg">The trusted choice for Altamonte Springs homeowners since 1997</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-blue-600 mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-black text-gray-900 mb-4">Professional & Reliable HVAC Services</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  Call us at <strong className="text-blue-600 text-xl">(407) 489-1834</strong> anytime. We answer 24/7 to schedule service for your comfort and peace of mind.
                </p>
                <a href="#about" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/50">
                  Learn More About Us
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
              <div className="grid gap-6">
                {services.map((service, index) => (
                  <div key={index} className="group bg-white p-6 rounded-xl border-l-4 border-blue-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-x-2">
                    <div className="flex items-start space-x-4">
                      <div className="text-blue-600 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">{service.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-3">{service.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)'
              }}
            ></div>
          </div>
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mb-6 shadow-2xl">
              <Mail className="w-10 h-10 text-gray-900" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Stay Cool with Expert Tips & Exclusive Offers</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Get valuable HVAC maintenance tips, seasonal promotions, and expert advice delivered straight to your inbox. Plus, receive a special discount on your next service!
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-yellow-400 shadow-xl"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-xl hover:shadow-yellow-500/50 whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </div>
              <p className="text-blue-200 text-sm mt-4">
                🔒 We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-center text-3xl font-bold text-gray-900 mb-4">We Service All Major Brands</h3>
            <p className="text-center text-gray-600 mb-12">Trusted by Altamonte Springs homeowners for over 28 years</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {brands.map((brand, i) => (
                <div key={i} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-sm hover:shadow-xl flex items-center justify-center border-2 border-gray-100 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
                  <span className="text-gray-700 font-bold text-center">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">What Our Customers Say</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg">See why Altamonte Springs residents trust us for all their AC needs</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 shadow hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                  <p className="text-gray-600 mb-4">"{review.text}"</p>
                  <p className="text-gray-900 font-bold">{review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
