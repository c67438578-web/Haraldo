"use client";

import React, { useState } from 'react';
import { 
  Phone, Clock, MapPin, Star, CheckCircle, 
  Calendar, Snowflake, Wrench, ThermometerSun, 
  Shield, Award, Users, Menu, X 
} from 'lucide-react';

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
    { name: "Michael R.", rating: 5, text: "Serviço excepcional! Instalaram minha nova unidade de AC no mesmo dia que liguei." },
    { name: "Sarah L.", rating: 5, text: "Melhor empresa de AC em Orlando! Preço justo e rápido." },
    { name: "David K.", rating: 5, text: "Recomendo muito! O técnico era experiente e resolveu tudo." }
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
              Orlando e Flórida Central
            </span>
          </div>
          <div className="flex items-center gap-4 font-bold text-yellow-400">
            <a href="tel:4074891867" className="hover:text-white transition">407-489-1867</a>
            <span className="text-white">|</span>
            <a href="tel:3219728005" className="hover:text-white transition">321-972-8005</a>
          </div>
        </div>
      </div>

      {/* Header / Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Snowflake className="w-10 h-10 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 leading-none">Orlando AC</h1>
                <p className="text-xs text-blue-600 font-bold tracking-widest uppercase">Refrigeration</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Serviços</a>
              <a href="#reviews" className="text-gray-700 hover:text-blue-600 font-medium">Avaliações</a>
              <a href="#book" className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition font-bold shadow-md">
                Agendar Agora
              </a>
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t pt-4">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-700">Serviços</a>
              <a href="#book" onClick={() => setIsMenuOpen(false)} className="bg-red-600 text-white p-3 rounded text-center font-bold">Agendar Agora</a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-blue-800 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="bg-yellow-500 text-blue-900 px-4 py-1 rounded-full font-black text-sm mb-6 inline-block">
              ⭐ #1 EM QUALIDADE EM ORLANDO
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              O Seu Ar Condicionado <br/> 
              <span className="text-blue-300">Gelando Hoje!</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Instalação, reparação e manutenção profissional para residências e empresas. 
              Atendimento rápido em toda a região.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#book" className="bg-red-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-red-700 transition transform hover:scale-105 shadow-2xl">
                Solicitar Orçamento Grátis
              </a>
              <a href="tel:4074891867" className="bg-white text-blue-900 px-10 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 transition shadow-xl flex items-center gap-3">
                <Phone className="w-6 h-6 text-red-600" />
                Ligar Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Nossos Serviços Especializados</h2>
            <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all border border-gray-100 group">
                <div className="p-8">
                  <div className="text-blue-600 mb-6 bg-blue-50 w-20 h-20 flex items-center justify-center rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">A partir de</span>
                    <span className="text-4xl font-black text-red-600">{service.price}</span>
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                  <ul className="space-y-4">
                    {service.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-gray-50 border-t">
                  <a href="#book" className="block w-full bg-blue-600 text-white py-4 rounded-xl text-center font-bold hover:bg-blue-700 transition">
                    Agendar este Serviço
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="book" className="py-20 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-blue-800 p-12 text-white flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-6">Pronto para agendar?</h2>
              <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                Preencha o formulário e a nossa equipa entrará em contacto em menos de 30 minutos (durante o horário comercial).
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-700 p-3 rounded-full"><Phone className="w-6 h-6"/></div>
                  <span className="text-xl font-bold">407-489-1867</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-700 p-3 rounded-full"><Award className="w-6 h-6"/></div>
                  <span className="text-lg">Licenciado e Segurado</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5 p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Seu Nome *"
                  />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Telefone *"
                  />
                </div>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Selecione o Serviço...</option>
                  <option value="installation">Instalação AC - $1,499</option>
                  <option value="service">Chamada de Serviço - $119</option>
                  <option value="refrigeration">Refrigeração Comercial - $180</option>
                </select>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-5 rounded-xl text-xl font-bold hover:bg-red-700 transition shadow-lg shadow-red-200"
                >
                  Enviar Pedido de Orçamento
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 border-t-8 border-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Snowflake className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-2">Orlando Air Conditioning & Refrigeration</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Orgulhosamente servindo a comunidade de Orlando e áreas vizinhas com honestidade e excelência técnica.
          </p>
          <div className="flex justify-center gap-8 mb-12">
            <Shield className="w-12 h-12 text-blue-400" />
            <Award className="w-12 h-12 text-yellow-500" />
            <Users className="w-12 h-12 text-green-400" />
          </div>
          <div className="border-t border-gray-800 pt-8 text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Orlando Air Conditioning. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
