'use client' 

import { useState } from 'react'
import Link from 'next/link'
import { Snowflake, Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 z-[999] border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <Snowflake className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black text-gray-900">ORLANDO <span className="text-blue-600">AC</span></h1>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-bold text-sm text-gray-600">
          <Link href="/">HOME</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT</Link>
          <Link href="/contact" className="bg-red-600 text-white px-6 py-2 rounded-lg shadow-md">BOOK ONLINE</Link>
        </nav>

        {/* BOTÃO QUE ABRE O MENU */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-600 outline-none border rounded">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* A ABA QUE ABRE NO MOBILE */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white border-t absolute w-full left-0 shadow-2xl`}>
        <div className="flex flex-col p-6 gap-6 font-bold text-gray-800">
          <Link href="/" onClick={() => setIsOpen(false)}>HOME</Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>SERVICES</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-red-600 text-white p-4 rounded-lg text-center">BOOK ONLINE</Link>
        </div>
      </div>
    </header>
  )
}
