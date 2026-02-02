import Link from 'next/link'
import { Wrench, Snowflake, Zap, Settings, Phone, CheckCircle } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "AC Repair",
      description: "Fast and reliable repair services for all AC makes and models. Our certified technicians diagnose and fix issues quickly.",
      features: [
        "24/7 Emergency Service",
        "Same-Day Repairs Available",
        "All Brands & Models",
        "Upfront Pricing",
        "90-Day Warranty"
      ],
      color: "blue"
    },
    {
      icon: <Snowflake className="w-12 h-12" />,
      title: "AC Installation",
      description: "Professional installation of new energy-efficient AC systems. We help you choose the right system for your home.",
      features: [
        "Free In-Home Consultation",
        "Energy-Efficient Options",
        "Proper Sizing & Load Calculation",
        "Professional Installation",
        "Manufacturer Warranties"
      ],
      color: "cyan"
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "AC Maintenance",
      description: "Regular maintenance plans to keep your AC running efficiently and prevent costly breakdowns.",
      features: [
        "Seasonal Tune-Ups",
        "Filter Replacement",
        "System Cleaning",
        "Performance Testing",
        "Priority Service"
      ],
      color: "green"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Commercial Refrigeration",
      description: "Expert commercial refrigeration services for restaurants, stores, and businesses across Central Florida.",
      features: [
        "Walk-in Coolers & Freezers",
        "Display Cases",
        "Ice Machines",
        "Preventive Maintenance",
        "24/7 Commercial Support"
      ],
      color: "purple"
    }
  ]

  const maintenancePlans = [
    {
      name: "Basic Plan",
      price: "$99",
      frequency: "per visit",
      features: [
        "Annual System Inspection",
        "Filter Replacement",
        "Thermostat Check",
        "Basic Cleaning"
      ]
    },
    {
      name: "Premium Plan",
      price: "$179",
      frequency: "per visit",
      popular: true,
      features: [
        "Bi-Annual Inspections",
        "Priority Scheduling",
        "15% Off Repairs",
        "Filter Replacement",
        "Full System Cleaning",
        "Refrigerant Level Check"
      ]
    },
    {
      name: "Commercial Plan",
      price: "Custom",
      frequency: "pricing",
      features: [
        "Customized Schedule",
        "Multiple Units",
        "24/7 Priority Support",
        "Detailed Reporting",
        "Dedicated Account Manager"
      ]
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Professional AC Solutions for Every Need
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition"
              >
                <div className={`text-${service.color}-600 mb-4`}>
                  {service.icon}
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Quality service you can trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍🔧</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Certified Technicians</h3>
              <p className="text-gray-600">
                All our technicians are EPA certified and undergo continuous training
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Response</h3>
              <p className="text-gray-600">
                Same-day service available for emergency repairs
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💯</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">
                We stand behind our work with comprehensive warranties
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Maintenance Plans
            </h2>
            <p className="text-xl text-gray-600">
              Keep your AC running smoothly with regular maintenance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenancePlans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-blue-600 relative' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-blue-600 mb-1">
                    {plan.price}
                  </div>
                  <p className="text-gray-600">{plan.frequency}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="tel:4074891834"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Areas
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Proudly serving Orlando and Central Florida
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              'Orlando', 'Winter Park', 'Kissimmee', 'Altamonte Springs',
              'Lake Mary', 'Sanford', 'Oviedo', 'Apopka',
              'Maitland', 'Longwood', 'Casselberry', 'Winter Springs'
            ].map((city, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Schedule Service?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:4074891867"
              className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-full text-lg inline-flex items-center justify-center gap-2 transition"
            >
              <Phone size={24} />
              407-489-1864
            </a>
            <a 
              href="tel:4074891864"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition"
            >
              Request Service Online
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
