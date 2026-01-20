'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Snowflake, Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <Snowflake className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-gray-900 uppercase">ORLANDO <span className="text-blue-600">AC</span></h1>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold leading-none">Cooling & Heating</p>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 font-bold text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition">HOME</Link>
          <Link href="/services" className="hover:text-blue-600 transition">SERVICES</Link>
          <Link href="/about" className="hover:text-blue-600 transition">ABOUT</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">CONTACT</Link>
          <Link href="/contact" className="bg-red-600 text-white px-6 py-2.5 rounded-lg hover:bg-red-700 transition-all shadow-lg font-bold">
            BOOK ONLINE
          </Link>
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-600">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-2xl z-50">
          <div className="flex flex-col p-6 space-y-4 font-bold text-gray-700">
            <Link href="/" onClick={() => setIsOpen(false)}>HOME</Link>
            <Link href="/services" onClick={() => setIsOpen(false)}>SERVICES</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-red-600 text-white p-4 rounded-lg text-center font-bold">
              BOOK ONLINE
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
