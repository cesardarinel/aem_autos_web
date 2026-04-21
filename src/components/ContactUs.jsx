import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-section pt-100 pb-100" id="contacto-page">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="single-contact p-4 text-center border rounded-4 shadow-sm bg-white">
              <div className="icon mb-3 mx-auto d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(45, 114, 176, 0.1)', borderRadius: '50%' }}>
                <i className="bi bi-telephone" style={{ fontSize: '1.5rem', color: '#2D72B0' }}></i>
              </div>
              <h4 className="fw-bold">Teléfonos</h4>
              <p className="mb-1">(809) 997-3787</p>
              <p>(829) 982-3787</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-contact p-4 text-center border rounded-4 shadow-sm bg-white">
              <div className="icon mb-3 mx-auto d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(45, 114, 176, 0.1)', borderRadius: '50%' }}>
                <i className="bi bi-geo-alt" style={{ fontSize: '1.5rem', color: '#2D72B0' }}></i>
              </div>
              <h4 className="fw-bold">Ubicación</h4>
              <p className="mb-1">Calle Principal, El Caimito 41000</p>
              <p>Santiago, República Dominicana</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-contact p-4 text-center border rounded-4 shadow-sm bg-white">
              <div className="icon mb-3 mx-auto d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(45, 114, 176, 0.1)', borderRadius: '50%' }}>
                <i className="bi bi-clock" style={{ fontSize: '1.5rem', color: '#2D72B0' }}></i>
              </div>
              <h4 className="fw-bold">Horario</h4>
              <p className="mb-1">Lunes a Domingo</p>
              <p>9:00 a.m. en adelante</p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
            <div className="col-lg-6">
                <div className="inquiry-form p-4 p-md-5 rounded-4 shadow-lg border-0" style={{ backgroundColor: '#f8f9fa' }}>
                    <h3 className="fw-bold mb-4" style={{ color: '#0D3B66' }}>Envíanos un mensaje</h3>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" placeholder="Tu nombre" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Teléfono</label>
                            <input type="tel" className="form-control" placeholder="(829) 000-0000" />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Correo electrónico</label>
                            <input type="email" className="form-control" placeholder="tu@email.com" />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Mensaje</label>
                            <textarea className="form-control" rows="4" placeholder="¿En qué podemos ayudarte?"></textarea>
                        </div>
                        <div className="col-12 text-center mt-4">
                            <button type="submit" className="primary-btn-unified w-100 py-3">Enviar Mensaje</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
                <div className="map-wrapper rounded-4 overflow-hidden shadow-lg border-0" style={{ height: '100%', minHeight: '400px' }}>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.5!2d-70.7!3d19.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb0f5c5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sEl%20Caimito%2C%20Santiago%2C%20Rep%C3%BAblica%20Dominicana!5e0!3m2!1ses!2sdo!4v1234567890" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
