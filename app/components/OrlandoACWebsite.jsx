"use client";

import React, { useState } from "react";
import {
  Phone,
  Clock,
  MapPin,
  CheckCircle,
  Snowflake,
  Wrench,
  ThermometerSun,
  Shield,
  Award,
  Users,
  Menu,
  X,
} from "lucide-react";

export default function OrlandoACWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pedido de serviço enviado! Entraremos em contato em breve.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  };

  const services = [
    {
      icon: <Snowflake className="w-12 h-12" />,
      title: "Instalação Residencial de A/C",
      price: "$1,499",
      description:
        "As principais marcas do mercado sem complicações e com garantia. Instalação no mesmo dia disponível.",
      features: [
        "Financiamento sem Juros*",
        "Serviço no Mesmo Dia",
        "Garantia Total",
        "Principais Marcas",
      ],
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Chamada de Serviço A/C",
      price: "$119",
      description:
        "Inspeção de A/C abrangente e meticulosa, examinando todos os componentes do sistema da sua casa.",
      features: [
        "Inspeção Completa",
        "Todos os Componentes Verificados",
        "Taxa Aplicada ao Reparo",
        "Técnicos Especialistas",
      ],
    },
    {
      icon: <ThermometerSun className="w-12 h-12" />,
      title: "Serviço de Refrigeração",
      price: "$180",
      description:
        "Técnicos experientes para walk-in coolers e equipamentos de refrigeração comercial.",
      features: [
        "Sistemas Comerciais",
        "Manutenção Preventiva",
        "Serviço de Emergência",
        "Garantia Total",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
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
          <div className="font-bold text-yellow-400">
            <a href="tel:4074891867">407-489-1867</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Snowflake className="w-10 h-10 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold">Orlando AC</h1>
              <p className="text-xs text-blue-600 font-bold uppercase">
                Refrigeration
              </p>
            </div>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-extrabold mb-4">
            O Seu Ar Condicionado <br />
            <span className="text-blue-300">Gelando Hoje!</span>
          </h2>
          <p className="text-xl mb-8">
            Instalação, reparação e manutenção profissional em Orlando.
          </p>
          <a
            href="#book"
            className="bg-red-600 px-8 py-4 rounded-xl font-bold"
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="text-blue-600 mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-red-600 text-3xl font-black mb-4">
                {s.price}
              </p>
              <p className="mb-4 text-gray-600">{s.description}</p>
              <ul className="space-y-2">
                {s.features.map((f, idx) => (
                  <li key={idx} className="flex gap-2 items-center">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="text-3xl font-bold mb-6">
            Agende seu serviço
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              required
              placeholder="Nome"
              className="w-full p-3 rounded text-black"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              required
              placeholder="Telefone"
              className="w-full p-3 rounded text-black"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <select
              required
              className="w-full p-3 rounded text-black"
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
            >
              <option value="">Selecione o serviço</option>
              <option>Instalação</option>
              <option>Chamada de Serviço</option>
              <option>Refrigeração</option>
            </select>
            <textarea
              className="w-full p-3 rounded text-black"
              placeholder="Mensagem"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            <button className="w-full bg-red-600 py-3 rounded font-bold">
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-10 text-center text-gray-400">
        <Snowflake className="mx-auto mb-4 text-blue-500" />
        <p>
          © {new Date().getFullYear()} Orlando Air Conditioning
        </p>
      </footer>
    </div>
  );
}
