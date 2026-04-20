import React from 'react';
import { ArrowRight, CircleCheck, Send } from 'lucide-react';

const FinancingSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por tu solicitud! Nos contactaremos contigo en menos de 2 horas.');
    e.target.reset();
  };

  return (
    <section id="financiamiento" className="py-20 bg-brand-premium premium-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-brand-metal font-semibold uppercase tracking-wider text-sm">Financiamiento</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-white">Obtén tu vehículo en menos de 24 horas</h2>
            <p className="text-white/90 mb-8 leading-relaxed">
              En AEM Autos hacemos que el financiamiento sea simple, rápido y transparente. Sin papeleos innecesarios, sin esperas interminables.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CircleCheck className="w-5 h-5 text-brand-metal mt-1 flex-shrink-0" />
                <span className="text-white/90">Aprobación express con documentación mínima</span>
              </div>
              <div className="flex items-start gap-3">
                <CircleCheck className="w-5 h-5 text-brand-metal mt-1 flex-shrink-0" />
                <span className="text-white/90">Tasas competitivas y planes flexibles</span>
              </div>
              <div className="flex items-start gap-3">
                <CircleCheck className="w-5 h-5 text-brand-metal mt-1 flex-shrink-0" />
                <span className="text-white/90">Asesoría gratuita para elegir la mejor opción</span>
              </div>
              <div className="flex items-start gap-3">
                <CircleCheck className="w-5 h-5 text-brand-metal mt-1 flex-shrink-0" />
                <span className="text-white/90">Aceptamos iniciales desde el 10%</span>
              </div>
            </div>

            <a href="#contacto" className="btn-primary-custom bg-brand-metal hover:bg-white hover:text-brand-navy text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 border-2 border-brand-metal">
              Solicitar financiamiento ahora
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="bg-brand-navy rounded-3xl p-8 border border-brand-metal/30">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Formulario de Financiamiento</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">Nombre completo *</label>
                <input type="text" required className="form-input-custom w-full bg-brand-premium/50 border border-brand-silver/30 rounded-xl px-4 py-3 text-white placeholder-white/50" placeholder="Tu nombre" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">Teléfono *</label>
                  <input type="tel" required className="form-input-custom w-full bg-brand-premium/50 border border-brand-silver/30 rounded-xl px-4 py-3 text-white placeholder-white/50" placeholder="(829) 000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">Correo electrónico *</label>
                  <input type="email" required className="form-input-custom w-full bg-brand-premium/50 border border-brand-silver/30 rounded-xl px-4 py-3 text-white placeholder-white/50" placeholder="tu@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">Vehículo de interés</label>
                <input type="text" className="form-input-custom w-full bg-brand-premium/50 border border-brand-silver/30 rounded-xl px-4 py-3 text-white placeholder-white/50" placeholder="Ej: Jeep Grand Cherokee 2022" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">Presupuesto aproximado</label>
                  <input type="text" className="form-input-custom w-full bg-brand-premium/50 border border-brand-silver/30 rounded-xl px-4 py-3 text-white placeholder-white/50" placeholder="Ej: $35,000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">Inicial disponible</label>
                  <input type="text" className="form-input-custom w-full bg-brand-premium/50 border border-brand-silver/30 rounded-xl px-4 py-3 text-white placeholder-white/50" placeholder="Ej: $5,000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">Mensaje adicional</label>
                <textarea rows="3" className="form-input-custom w-full bg-brand-premium/50 border border-brand-silver/30 rounded-xl px-4 py-3 text-white placeholder-white/50" placeholder="Cuéntanos más sobre lo que buscas..."></textarea>
              </div>
              <button type="submit" className="btn-primary-custom w-full bg-brand-metal hover:bg-white hover:text-brand-navy text-white py-4 rounded-xl font-bold text-lg mt-2 flex items-center justify-center gap-2 border-2 border-brand-metal">
                Enviar solicitud
                <Send className="w-5 h-5" />
              </button>
              <p className="text-xs text-white/60 text-center mt-3">Al enviar, aceptas nuestra política de privacidad. Te contactaremos en menos de 2 horas.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancingSection;
