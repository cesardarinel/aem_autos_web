import React, { useState } from 'react';

const FinancingPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    vehiculo: '',
    presupuesto: '',
    inicial: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const { nombre, telefono, vehiculo, presupuesto, inicial } = formData;
    
    const mensaje = `Hola AEM Autos, solicito información para *Financiamiento*:%0A%0A` +
      `*Nombre:* ${nombre}%0A` +
      `*Teléfono:* ${telefono}%0A` +
      `*Vehículo de interés:* ${vehiculo}%0A` +
      `*Presupuesto:* ${presupuesto}%0A` +
      `*Inicial disponible:* ${inicial}`;
    
    const whatsappUrl = `https://wa.me/18299951554?text=${mensaje}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="financing-page pt-100 pb-100 bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title-2 text-center mb-50">
              <span className="badge bg-light text-primary px-3 py-2 mb-2">FINANCIAMIENTO</span>
              <h2 className="fw-bold">Obtén tu vehículo en menos de 24 horas</h2>
              <p className="text-muted">Completa tus datos y un asesor te contactará vía WhatsApp de inmediato.</p>
            </div>

            <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5" style={{ backgroundColor: '#f8f9fa' }}>
              <form onSubmit={handleWhatsAppSubmit}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label">Nombre Completo *</label>
                    <input 
                      type="text" 
                      name="nombre"
                      required 
                      className="form-control" 
                      placeholder="Tu nombre"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Teléfono / WhatsApp *</label>
                    <input 
                      type="tel" 
                      name="telefono"
                      required 
                      className="form-control" 
                      placeholder="(829) 000-0000"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Vehículo de interés</label>
                    <input 
                      type="text" 
                      name="vehiculo"
                      className="form-control" 
                      placeholder="Ej: Jeep Grand Cherokee 2022"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Presupuesto aproximado</label>
                    <input 
                      type="text" 
                      name="presupuesto"
                      className="form-control" 
                      placeholder="Ej: $35,000"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Inicial disponible</label>
                    <input 
                      type="text" 
                      name="inicial"
                      className="form-control" 
                      placeholder="Ej: $5,000"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 text-center mt-4">
                    <button type="submit" className="primary-btn-unified w-100 py-3 shadow-lg">
                      <i className="bi bi-whatsapp me-2"></i> SOLICITAR POR WHATSAPP
                    </button>
                    <p className="small text-muted mt-3">Al hacer clic, se abrirá tu aplicación de WhatsApp con la información lista para enviar.</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="row mt-5 g-4">
          <div className="col-md-4 text-center">
            <i className="bi bi-clock-history fs-1 text-primary mb-3 d-block"></i>
            <h5 className="fw-bold">Aprobación Express</h5>
            <p className="small text-muted">Respuesta garantizada en menos de 2 horas laborables.</p>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-file-earmark-check fs-1 text-primary mb-3 d-block"></i>
            <h5 className="fw-bold">Papeles Mínimos</h5>
            <p className="small text-muted">Proceso simplificado con requisitos básicos.</p>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-percent fs-1 text-primary mb-3 d-block"></i>
            <h5 className="fw-bold">Tasas Bajas</h5>
            <p className="small text-muted">Planes competitivos adaptados a tu presupuesto.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancingPage;
