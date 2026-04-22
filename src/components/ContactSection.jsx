import React from 'react';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Mensaje enviado! Te responderemos lo antes posible.');
    e.target.reset();
  };

  return (
    <section id="contacto" className="py-5 bg-dark text-white">
      <div className="container py-5">
        <div className="text-center mb-5">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Contáctanos</span>
          <h2 className="display-6 fw-bold mt-3 mb-4">Visítanos o escríbenos</h2>
        </div>

        <div className="row g-5">
          <div className="col-lg-6">
            <div className="bg-secondary bg-opacity-10 rounded-4 p-4 p-md-5 border border-secondary border-opacity-25 h-100">
              <h3 className="h4 font-bold mb-4">Información de Contacto</h3>
              <div className="vstack gap-4">
                <div className="d-flex align-items-start gap-4">
                  <div className="bg-primary bg-opacity-20 rounded-3 flex items-center justify-center flex-shrink-0" style={{ width: '48px', height: '48px' }}>
                    <i className="bi bi-telephone text-primary fs-4"></i>
                  </div>
                  <div>
                    <p className="text-sm text-white-50 mb-0">Teléfonos</p>
                    <p className="fw-bold mb-0">(829) 982-3787</p>
                    <p className="fw-bold mb-0">(809) 997-3787</p>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-4">
                  <div className="bg-primary bg-opacity-20 rounded-3 flex items-center justify-center flex-shrink-0" style={{ width: '48px', height: '48px' }}>
                    <i className="bi bi-geo-alt text-primary fs-4"></i>
                  </div>
                  <div>
                    <p className="text-sm text-white-50 mb-0">Ubicación</p>
                    <p className="fw-bold mb-0">Calle Principal, El Caimito 41000</p>
                    <p className="text-white-50 mb-0">Santiago, República Dominicana</p>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-4">
                  <div className="bg-primary bg-opacity-20 rounded-3 flex items-center justify-center flex-shrink-0" style={{ width: '48px', height: '48px' }}>
                    <i className="bi bi-clock text-primary fs-4"></i>
                  </div>
                  <div>
                    <p className="text-sm text-white-50 mb-0">Horario de Atención</p>
                    <p className="fw-bold mb-0">Lunes a Domingo: 9:00 a.m. en adelante</p>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-4">
                  <div className="bg-primary bg-opacity-20 rounded-3 flex items-center justify-center flex-shrink-0" style={{ width: '48px', height: '48px' }}>
                    <i className="bi bi-instagram text-primary fs-4"></i>
                  </div>
                  <div>
                    <p className="text-sm text-white-50 mb-0">Redes Sociales</p>
                    <a href="https://instagram.com/aemautosrd" target="_blank" rel="noopener noreferrer" className="fw-bold text-primary text-decoration-none">@aemautosrd</a>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-4 overflow-hidden" style={{ height: '250px' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.5!2d-70.7!3d19.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb0f5c5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sEl%20Caimito%2C%20Santiago%2C%20Rep%C3%BAblica%20Dominicana!5e0!3m2!1ses!2sdo!4v1234567890" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card border-0 shadow-sm p-4 p-md-5 rounded-4 h-100 bg-white text-dark">
              <h3 className="h4 font-bold mb-4">Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                  <label className="form-label small fw-bold">Nombre Completo</label>
                  <input type="text" className="form-control" placeholder="Tu nombre" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-bold">Teléfono</label>
                  <input type="tel" className="form-control" placeholder="Tu teléfono" required />
                </div>
                <div className="col-12">
                  <label className="form-label small fw-bold">Correo Electrónico</label>
                  <input type="email" className="form-control" placeholder="tu@email.com" required />
                </div>
                <div className="col-12">
                  <label className="form-label small fw-bold">Mensaje</label>
                  <textarea className="form-control" rows="4" placeholder="¿En qué podemos ayudarte?" required></textarea>
                </div>
                <div className="col-12 mt-4">
                  <button type="submit" className="btn btn-primary w-100 py-3 fw-bold d-flex align-items-center justify-content-center gap-2">
                    <i className="bi bi-send"></i> ENVIAR MENSAJE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;