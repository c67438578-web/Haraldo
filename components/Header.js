'use client' // Isso permite que o botão funcione

import { useState } from 'react'
import Link from 'next/link'
import { Snowflake, Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo - Exatamente como o seu */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Snowflake className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-gray-900">ORLANDO <span className="text-blue-600">AC</span></h1>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold leading-none">Cooling & Heating</p>
          </div>
        </Link>
        
        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition">HOME</Link>
          <Link href="/services" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition">SERVICES</Link>
          <Link href="/about" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition">ABOUT</Link>
          <Link href="/contact" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition">CONTACT</Link>
          <Link href="/contact" className="bg-red-600 text-white px-6 py-2.5 rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-200 font-bold text-sm">
            BOOK ONLINE
          </Link>
        </nav>

        {/* BOTÃO MOBILE - Agora com a lógica de clique */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 text-gray-600 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ABA DO MENU MOBILE - Isso é o que abre e fecha */}
      <div className={`${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden md:hidden bg-white border-t border-gray-100 transition-all duration-300 ease-in-out`}>
        <div className="flex flex-col p-6 space-y-4 font-bold text-gray-700">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-blue-600">HOME</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-blue-600">SERVICES</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-600">ABOUT</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600">CONTACT</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-red-600 text-white p-3 rounded-lg text-center">
            BOOK ONLINE
          </Link>
        </div>
      </div>
    </header>
  )
}
