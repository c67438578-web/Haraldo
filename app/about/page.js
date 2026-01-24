import Link from 'next/link'
import { Phone, Award, Users, Clock, Heart, Shield, Target, Zap } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { number: "15+", label: "Years in Business" },
    { number: "10,000+", label: "Happy Customers" },
    { number: "24/7", label: "Emergency Service" },
    { number: "100%", label: "Satisfaction Rate" }
  ]

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer First",
      description: "We put your comfort and satisfaction at the center of everything we do. Your trust is our most valuable asset."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "Honest pricing, transparent communication, and ethical practices. We do what's right, not what's profitable."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for perfection in every job, from the smallest repair to the largest installation."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "We stay ahead with the latest technology and techniques to provide you the best solutions."
    }
  ]

  const team = [
    {
      name: "John Martinez",
      role: "Founder & Master Technician",
      bio: "With over 20 years of experience, John started Orlando Air Conditioning to provide honest, quality service to Central Florida."
    },
    {
      name: "Sarah Chen",
      role: "Operations Manager",
      bio: "Sarah ensures every customer receives exceptional service and that our team operates at peak efficiency."
    },
    {
      name: "Mike Rodriguez",
      role: "Lead HVAC Technician",
      bio: "EPA certified with 15 years of experience, Mike leads our technical team with expertise and dedication."
    },
    {
      name: "Lisa Thompson",
      role: "Customer Service Director",
      bio: "Lisa makes sure every customer interaction is positive, from the first call to job completion."
    }
  ]

  const certifications = [
    "EPA Section 608 Certified",
    "NATE Certified Technicians",
    "Licensed & Insured",
    "BBB Accredited Business",
    "ACCA Member",
    "Energy Star Partner"
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Orlando Air Conditioning
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Your trusted partner for comfort solutions since 2008. Dedicated to keeping Orlando cool with quality service and honest pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Founded in 2008, Orlando Air Conditioning was born from a simple belief: every family and business in Central Florida deserves reliable, affordable air conditioning service delivered with honesty and integrity.
                </p>
                <p>
                  What started as a one-truck operation has grown into Orlando's most trusted HVAC company, serving over 10,000 satisfied customers. But despite our growth, our commitment remains the same—treating every customer like family and every home like our own.
                </p>
                <p>
                  We're not just about fixing air conditioners. We're about building relationships, earning trust, and being there when you need us most—whether it's the hottest day of summer or the middle of the night.
                </p>
                <p>
                  Today, we're proud to be Orlando's #1 rated HVAC company, but we never forget where we came from or the values that got us here.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🏆</div>
                <p className="text-2xl font-bold text-gray-800">
                  #1 Rated in Orlando
                </p>
                <p className="text-gray-600 mt-2">
                  Trusted by thousands of families
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your comfort
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Us
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Always Available
                    </h3>
                    <p className="text-gray-600">
                      24/7 emergency service means we're here when you need us most. Day or night, weekend or holiday.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Certified Experts
                    </h3>
                    <p className="text-gray-600">
                      All technicians are EPA and NATE certified with ongoing training in the latest HVAC technology.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Family Owned
                    </h3>
                    <p className="text-gray-600">
                      As a local, family-owned business, we treat every customer like part of our extended family.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      100% Satisfaction
                    </h3>
                    <p className="text-gray-600">
                      We stand behind our work with comprehensive warranties and a satisfaction guarantee.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Certifications & Memberships
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <Award className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-blue-200">
                  <h4 className="font-bold text-gray-900 mb-4">Community Involvement</h4>
                  <p className="text-gray-600 mb-4">
                    We're proud to give back to the Orlando community through:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Local school sponsorships</li>
                    <li>• Free AC services for seniors in need</li>
                    <li>• Youth sports team support</li>
                    <li>• Habitat for Humanity partnerships</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who trust us with their comfort
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:407-489-1864"
              className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-full text-lg inline-flex items-center justify-center gap-2 transition"
            >
              <Phone size={24} />
              407-489-1867
            </a>
            <Link 
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
