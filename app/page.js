"use client"; // Esta linha é obrigatória no Next.js 14+ para usar hooks como useState

import React, { useState } from 'react';
import { Phone, Clock, MapPin, Star, CheckCircle, Calendar, Snowflake, Wrench, ThermometerSun, Shield, Award, Users, Menu, X } from 'lucide-react';

export default function OrlandoACWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pedido de serviço enviado! Entraremos em contato em breve.');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const services = [
    {
      icon: <Snowflake className="w-12 h-12" />,
      title: "Instalação Residencial de A/C",
      price: "$1,499",
      description: "As principais marcas do mercado sem complicações e com garantia. Instalação no mesmo dia disponível.",
      features: ["Financiamento sem Juros*", "Serviço no Mesmo Dia", "Garantia Total", "Principais Marcas"]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Chamada de Serviço A/C",
      price: "$119",
      description: "Inspeção de A/C abrangente e meticulosa, examinando todos os componentes do sistema da sua casa.",
      features: ["Inspeção Completa", "Todos os Componentes Verificados", "Taxa Aplicada ao Reparo", "Técnicos Especialistas"]
    },
    {
      icon: <ThermometerSun className="w-12 h-12" />,
      title: "Serviço de Refrigeração",
      price: "$180",
      description: "Técnicos experientes para walk-in coolers e equipamentos de refrigeração comercial.",
      features: ["Sistemas Comerciais", "Manutenção Preventiva", "Serviço de Emergência", "Garantia Total"]
    }
  ];

  const reviews = [
    { name: "Michael R.", rating: 5, text: "Serviço excepcional! Instalaram minha nova unidade de AC no mesmo dia que liguei. Profissional e acessível." },
    { name: "Sarah L.", rating: 5, text: "Melhor empresa de AC em Orlando! Consertaram meu sistema rapidamente e o preço foi muito justo." },
    { name: "David K.", rating: 5, text: "Recomendo muito! O técnico era experiente e deixou meu AC funcionando perfeitamente." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Barra Superior */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Serviço de Emergência 24/7
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Atendendo Orlando e Flórida Central
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:4074891867" className="hover:text-blue-300 font-semibold">407-489-1867</a>
            <a href="tel:3219728005" className="hover:text-blue-300 font-semibold">321-972-8005</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Snowflake className="w-10 h-10 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Orlando Air Conditioning</h1>
                <p className="text-sm text-gray-600">Seu Conforto, Nossa Prioridade</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Serviços</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">Sobre</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contato</a>
              <a href="#book" className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition font-semibold">
                Agendar Agora
              </a>
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-gray-700">Home</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-gray-700">Serviços</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-gray-700">Sobre</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-700">Contato</a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="bg-yellow-500 text-blue-900 inline-block px-4 py-2 rounded-full font-bold mb-4 text-sm">
              ⭐ #1 AVALIADA EM ORLANDO
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Especialistas em Ar Condicionado em Orlando
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Serviços Rápidos, Confiáveis e Acessíveis de Instalação e Reparo de AC.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#book" className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition shadow-lg">
                Agende seu Serviço Agora
              </a>
              <a href="tel:4074891867" className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition shadow-lg flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Ligar Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600">Soluções Profissionais para Todas as Necessidades</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition border-t-4 border-blue-600">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <div className="text-4xl font-bold text-red-600 mb-4">{service.price}</div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-2">
                  <a href="tel:4074891867" className="block w-full bg-blue-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-blue-700 transition">
                    Ligar: 407-489-1867
                  </a>
                  <a href="#book" className="block w-full bg-gray-200 text-gray-800 py-3 rounded-lg text-center font-semibold hover:bg-gray-300 transition">
                    Agendar Online
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="book" className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Calendar className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4">Solicite seu Orçamento</h2>
              <p className="text-xl text-blue-200">Atendimento no Mesmo Dia Disponível</p>
            </div>

            <div className="bg-white rounded-lg p-8 text-gray-900">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="px-4 py-2 border rounded-lg"
                    placeholder="Nome Completo *"
                  />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="px-4 py-2 border rounded-lg"
                    placeholder="Telefone *"
                  />
                </div>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg mb-4"
                  placeholder="Email *"
                />
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg mb-4"
                >
                  <option value="">Selecione o Serviço...</option>
                  <option value="installation">Instalação AC - $1,499</option>
                  <option value="service">Chamada de Serviço - $119</option>
                  <option value="refrigeration">Refrigeração - $180</option>
                  <option value="emergency">Reparo de Emergência</option>
                </select>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg mb-6"
                  placeholder="Detalhes do problema..."
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-red-700"
                >
                  Solicitar Agendamento
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Orlando Air Conditioning. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
