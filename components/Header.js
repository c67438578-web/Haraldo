'use client' // <--- ISSO É O QUE FAZ O CLIQUE FUNCIONAR

import { useState } from 'react'
import { Menu, X, Snowflake } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false) // A lógica de abrir/fechar

  return (
    <header className="relative z-[100] bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Sua Logo */}
        <Link href="/" className="flex items-center gap-2">
           <div className="bg-blue-600 p-1 rounded"><Snowflake className="text-white" /></div>
           <span className="font-black text-gray-900">ORLANDO AC</span>
        </Link>

        {/* BOTÃO QUE VAI FUNCIONAR AGORA */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-600">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* O MENU QUE VAI APARECER AO CLICAR */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl z-[100] flex flex-col p-6 gap-4 font-bold border-t">
            <Link href="/" onClick={() => setIsOpen(false)}>HOME</Link>
            <Link href="/services" onClick={() => setIsOpen(false)}>SERVICES</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-red-600 text-white p-3 rounded text-center">BOOK ONLINE</Link>
          </div>
        )}
      </div>
    </header>
  )
}
