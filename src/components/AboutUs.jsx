import React from 'react';
import { Instagram } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-brand-metal font-semibold uppercase tracking-wider text-sm">Sobre Nosotros</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-brand-dark">Tu próximo vehículo está más cerca de lo que imaginas</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              En <strong className="text-brand-dark">AEM Autos</strong>, somos un concesionario especializado en vehículos importados americanos ubicado en Santiago, República Dominicana. Nos dedicamos a ofrecer automóviles en condiciones AAA+, con transparencia, profesionalismo y un compromiso inquebrantable con la satisfacción del cliente.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Con más de 410 publicaciones en Instagram y una calificación de 5.0 estrellas en Google, nuestra reputación se construye sobre la confianza, la calidad y la rapidez en cada transacción.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center p-4 bg-brand-silver/30 rounded-xl border border-brand-silver">
                <p className="text-3xl font-bold text-brand-navy">5.0</p>
                <p className="text-sm text-gray-600">Estrellas en Google</p>
              </div>
              <div className="text-center p-4 bg-brand-silver/30 rounded-xl border border-brand-silver">
                <p className="text-3xl font-bold text-brand-navy">410+</p>
                <p className="text-sm text-gray-600">Vehículos gestionados</p>
              </div>
            </div>

            <a 
              href="https://instagram.com/aemautosrd" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-brand-metal font-semibold hover:text-brand-navy transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @aemautosrd • 910 seguidores
            </a>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border-4 border-brand-metal/30 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80" alt="Showroom AEM Autos" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-navy text-white p-6 rounded-2xl shadow-2xl max-w-xs">
              <p className="font-bold text-lg mb-1">¿Listo para encontrar tu vehículo ideal?</p>
              <p className="text-sm opacity-90">Visítanos en Santiago o contáctanos hoy mismo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
