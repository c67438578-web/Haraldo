'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      setStatus('error')
      return
    }

    setStatus('sending')

    // Simular envio (substitua com Supabase depois)
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', phone: '', email: '', serviceType: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            We're here to help! Reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h2>
            
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />

              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Service Type</option>
                <option value="ac-repair">AC Repair</option>
                <option value="ac-installation">AC Installation</option>
                <option value="maintenance">Maintenance Plan</option>
                <option value="commercial">Commercial Refrigeration</option>
                <option value="emergency">Emergency Service</option>
              </select>

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
              />

              <button
                onClick={handleSubmit}
                disabled={status === 'sending'}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send size={20} />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  ✅ Message sent successfully!
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  ❌ Please fill in all required fields.
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-lg">407-489-1834</p>
                    <p className="text-sm text-gray-600">Sales & Service</p>
                    <p className="font-semibold text-gray-800 text-lg mt-2">321-972-8005</p>
                    <p className="text-sm text-gray-600">Emergency 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email:</p>
                    <a href="mailto:contac@rapidproservices.com" className="text-blue-600 hover:underline">
                      contac@rapidproservices.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Address:</p>
                    <p className="text-gray-600">
                      478 E. Altamonte Dr 108-715<br />
                      Altamonte Springs, FL 32701
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 text-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">Emergency Only</span>
                </div>
                <div className="border-t border-blue-400 pt-2 mt-4">
                  <p className="text-center font-bold">🚨 24/7 Emergency Service Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
