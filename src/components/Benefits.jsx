import React from 'react';
import { Zap, ShieldCheck, Users, FileCheck } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-brand-navy" />,
      title: 'Financiamiento Rápido',
      description: 'Aprobación en menos de 24 horas con procesos simplificados y transparentes.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-navy" />,
      title: 'Condiciones AAA+',
      description: 'Todos nuestros vehículos pasan por una inspección rigurosa de 150 puntos.'
    },
    {
      icon: <Users className="w-6 h-6 text-brand-navy" />,
      title: 'Atención Personalizada',
      description: 'Asesoría experta de principio a fin, adaptada a tus necesidades y presupuesto.'
    },
    {
      icon: <FileCheck className="w-6 h-6 text-brand-navy" />,
      title: 'Trámites Rápidos',
      description: 'Gestionamos toda la documentación para que recibas tu vehículo sin complicaciones.'
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-brand-silver/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-metal font-semibold uppercase tracking-wider text-sm">Por qué elegirnos</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-brand-dark">Beneficios de comprar en AEM Autos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 border border-brand-silver shadow-md hover:shadow-xl hover:border-brand-metal transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-navy/10 rounded-xl flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-brand-dark">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
