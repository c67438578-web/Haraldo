import './globals.css'
import Link from 'next/link'
import { Snowflake, Phone, MessageCircle, Clock } from 'lucide-react'
import Header from '../components/Header' // <--- Certifique-es que este caminho está certo

export const metadata = {
  title: 'Orlando AC Repair & Installation | Same Day Service 24/7',
  description: 'Professional air conditioning repair, installation, and maintenance in Orlando, FL. Same day service guaranteed. Licensed & Insured. Call (407) 489-1864.',
  keywords: ['AC Repair Orlando', 'HVAC Orlando', 'Air Conditioning Installation Orlando', 'Emergency AC Repair FL'],
  alternates: { canonical: 'https://orlandoaircond.com' },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "Orlando AC",
    "image": "https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/C79E6ABC-4BBF-44C8-91EF-EACB8E43CD3F.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Orange Ave",
      "addressLocality": "Orlando",
      "addressRegion": "FL",
      "postalCode": "32801",
      "addressCountry": "US"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 28.5383, "longitude": -81.3792 },
    "telephone": "+14074891864",
    "priceRange": "$$"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="antialiased font-sans text-gray-900 bg-white">
        
        {/* TOP BAR */}
        <div className="bg-blue-900 text-white py-2 text-xs md:text-sm">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-blue-300" />
              <span>24/7 Emergency Service Available</span>
            </div>
            <div className="flex gap-4 font-bold">
              <a href="tel:4074891867" className="hover:text-blue-300 transition flex items-center gap-1">
                <Phone size={14} /> 407-489-1864
              </a>
            </div>
          </div>
        </div>

        {/* CHAMADA DO MENU */}
        <Header />

        {children}

        {/* FOOTER */}
        <footer className="bg-gray-900 text-white pt-16 pb-8 text-center">
          <div className="container mx-auto px-4">
            <Snowflake className="w-10 h-10 text-blue-500 mx-auto mb-6" />
            <p className="text-gray-400 mb-4">&copy; {new Date().getFullYear()} Orlando AC. All rights reserved.</p>
          </div>
        </footer>

        {/* WHATSAPP */}
        <a href="https://wa.me/14074891864" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 flex items-center gap-2 group">
          <MessageCircle size={28} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold px-0 group-hover:px-2">Emergency Chat</span>
        </a>
      </body>
    </html>
  )
}
