import React from 'react';
import { Phone, MapPin, Clock, Instagram, Send, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Mensaje enviado! Te responderemos lo antes posible.');
    e.target.reset();
  };

  return (
    <section id="contacto" className="py-20 bg-brand-premium premium-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-metal font-semibold uppercase tracking-wider text-sm">Contáctanos</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-white">Visítanos o escríbenos</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-brand-navy rounded-2xl p-6 border border-brand-metal/30">
              <h3 className="text-xl font-bold mb-6 text-white">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-metal/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-metal" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Teléfonos</p>
                    <p className="font-semibold text-white">(829) 995-1554</p>
                    <p className="font-semibold text-white">(809) 997-3787</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-metal/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-metal" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Ubicación</p>
                    <p className="font-semibold text-white">Calle Principal, El Caimito 41000</p>
                    <p className="text-white/80">Santiago, República Dominicana</p>
                    <p className="text-sm text-brand-metal mt-1">Plus Code: 998Q+JVQ</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-metal/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-metal" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Horario de Atención</p>
                    <p className="font-semibold text-white">Lunes a Domingo: 9:00 a.m. en adelante</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-metal/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-brand-metal" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Redes Sociales</p>
                    <a href="https://instagram.com/aemautosrd" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-metal hover:text-white transition-colors">@aemautosrd</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-navy rounded-2xl p-6 border border-brand-metal/30">
              <h3 className="text-xl font-bold mb-4 text-white">Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Tu nombre *" required className="form-input-custom w-full bg-brand-premium/50 border border-brand-silver/30 rounded-xl px-4 py-3 text-white placeholder-white/50" />
                  <input type="tel" placeholder="Tu teléfono *" required className="form-input-custom w-full bg-brand-premium/50 border border-brand-silver/30 rounded-xl px-4 py-3 text-white placeholder-white/50" />
                </div>
                <input type="email" placeholder="Tu correo electrónico *" required className="form-input-custom w-full bg-brand-premium/50 border border-brand-silver/30 rounded-xl px-4 py-3 text-white placeholder-white/50" />
                <textarea rows="4" placeholder="¿En qué podemos ayudarte?" className="form-input-custom w-full bg-brand-premium/50 border border-brand-silver/30 rounded-xl px-4 py-3 text-white placeholder-white/50"></textarea>
                <button type="submit" className="btn-primary-custom w-full bg-brand-metal hover:bg-white hover:text-brand-navy text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 border-2 border-brand-metal">
                  Enviar mensaje
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.5!2d-70.7!3d19.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb0f5c5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sEl%20Caimito%2C%20Santiago%2C%20Rep%C3%BAblica%20Dominicana!5e0!3m2!1ses!2sdo!4v1234567890" 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de AEM Autos">
              </iframe>
            </div>
            <div className="mt-4 text-center">
              <a href="https://maps.google.com/?q=998Q+JVQ" target="_blank" rel="noopener noreferrer" 
                 className="inline-flex items-center gap-2 text-brand-metal font-semibold hover:text-white transition-colors">
                <ExternalLink size={16} />
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
