import './globals.css'
import Link from 'next/link'
import { Snowflake } from 'lucide-react'

export const metadata = {
  title: 'Orlando Air Conditioning | AC Repair & Installation',
  description: 'Professional AC installation and repair services in Orlando, FL. Same day service. Call 407-489-1867',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* TOP BAR FIXA */}
        <div className="bg-blue-900 text-white py-2 text-sm">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <span>24/7 Emergency Service</span>
            <div className="flex gap-4 font-semibold">
              <a href="tel:4074891867">407-489-1867</a>
              <a href="tel:3219728005" className="hidden sm:inline">321-972-8005</a>
            </div>
          </div>
        </div>

        {/* HEADER / NAV (Funciona em todas as páginas) */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Snowflake className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900 leading-tight">Orlando AC</h1>
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
              <Link href="/contact" className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition font-semibold text-sm">
                Book Now
              </Link>
            </nav>
          </div>
        </header>

        {children}

        {/* FOOTER */}
        <footer className="bg-gray-900 text-white py-8 text-center mt-12">
          <p>&copy; 2025 Orlando Air Conditioning. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
