import './globals.css'
import Link from 'next/link'
import { Snowflake, Phone, MessageCircle, Clock } from 'lucide-react'

export const metadata = {
  title: 'Orlando AC Repair & Installation | Same Day Service 24/7',
  description: 'Professional air conditioning repair, installation, and maintenance in Orlando, FL. Same day service guaranteed. Licensed & Insured. Call (407) 489-1867.',
  keywords: ['AC Repair Orlando', 'HVAC Orlando', 'Air Conditioning Installation Orlando', 'Emergency AC Repair FL'],
  alternates: {
    canonical: 'https://www.orlandocooling.com', // Substitua pelo seu domínio futuro
  },
}

export default function RootLayout({ children }) {
  // JSON-LD para SEO Local (HVAC Business)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "Orlando AC",
    "image": "https://www.orlandocooling.com/logo.png", // Atualize após o deploy
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Orange Ave",
      "addressLocality": "Orlando",
      "addressRegion": "FL",
      "postalCode": "32801",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.5383,
      "longitude": -81.3792
    },
    "telephone": "+14074891867",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$$"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-sans text-gray-900 bg-white">
        
        {/* TOP BAR INFORMATIVA */}
        <div className="bg-blue-900 text-white py-2 text-xs md:text-sm">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-blue-300" />
              <span>24/7 Emergency Service Available</span>
            </div>
            <div className="flex gap-4 font-bold">
              <a href="tel:4074891867" className="hover:text-blue-300 transition flex items-center gap-1">
                <Phone size={14} /> 407-489-1867
              </a>
              <a href="tel:3219728005" className="hidden sm:flex hover:text-blue-300 transition items-center gap-1">
                <Phone size={14} /> 321-972-8005
              </a>
            </div>
          </div>
        </div>

        {/* HEADER / NAVIGATION */}
        <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                <Snowflake className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-black tracking-tight text-gray-900">ORLANDO <span className="text-blue-600">AC</span></h1>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold leading-none">Cooling & Heating</p>
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition">HOME</Link>
              <Link href="/services" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition">SERVICES</Link>
              <Link href="/about" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition">ABOUT</Link>
              <Link href="/contact" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition">CONTACT</Link>
              <Link href="/contact" className="bg-red-600 text-white px-6 py-2.5 rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-200 font-bold text-sm">
                BOOK ONLINE
              </Link>
            </nav>

            {/* Mobile Menu Icon (Placeholder para funcionalidade futura) */}
            <button className="md:hidden p-2 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </header>

        {/* CONTEÚDO DA PÁGINA */}
        {children}

        {/* FOOTER */}
        <footer className="bg-gray-900 text-white pt-16 pb-8">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <Snowflake className="w-10 h-10 text-blue-500" />
            </div>
            <p className="text-gray-400 mb-4 max-w-md mx-auto">
              Trusted HVAC experts in Central Florida. License #CAC057552. Providing comfort to Orlando homes since 1997.
            </p>
            <div className="border-t border-gray-800 pt-8 mt-8">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Orlando Air Conditioning. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* WHATSAPP FLOATING BUTTON */}
        <a 
          href="https://wa.me/14074891867" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 z-50 flex items-center gap-2 group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap px-0 group-hover:px-2">
            Emergency Chat
          </span>
        </a>

      </body>
    </html>
  )
}
