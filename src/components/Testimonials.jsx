import React, { useState, useEffect } from 'react';
import { Star, User } from 'lucide-react';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const total = 3;

  const testimonials = [
    {
      text: '"Excelente servicio y atención rápida. Conseguí financiamiento en menos de 24 horas y el vehículo estaba en condiciones impecables. ¡Muy recomendados!"',
      author: 'Carlos M.',
      location: 'Santiago, RD'
    },
    {
      text: '"Vehículos en muy buenas condiciones y transparencia total en el proceso. El equipo de AEM me asesoró perfectamente para elegir el auto ideal para mi familia."',
      author: 'María L.',
      location: 'Santiago, RD'
    },
    {
      text: '"Compré mi Jeep Grand Cherokee con AEM Autos y fue la mejor experiencia. Trámites rápidos, precio justo y un vehículo que superó mis expectativas."',
      author: 'Roberto F.',
      location: 'Santiago, RD'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-brand-silver/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-metal font-semibold uppercase tracking-wider text-sm">Testimonios</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-brand-dark">Lo que dicen nuestros clientes</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            className="testimonial-track" 
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="w-full flex-shrink-0 px-4">
                <div className="bg-white rounded-3xl p-8 border border-brand-silver shadow-lg text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 italic mb-6">{t.text}</p>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-12 bg-brand-navy/10 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-brand-navy" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-brand-dark">{t.author}</p>
                      <p className="text-sm text-gray-500">{t.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-colors ${current === i ? 'bg-brand-metal' : 'bg-brand-silver'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
