import React from 'react';

const HowItWorks = () => {
  const steps = [
    { id: 1, title: 'Elige Cualquier Vehículo', desc: 'Los concesionarios de automóviles pueden vender vehículos nuevos de uno o varios fabricantes.', icon: 'bi-search' },
    { id: 2, title: 'Reserva tu Vehículo', desc: 'Los concesionarios de automóviles pueden vender vehículos nuevos de uno o varios fabricantes.', icon: 'bi-calendar-check' },
    { id: 3, title: 'Obtén tu Vehículo', desc: 'Los concesionarios de automóviles pueden vender vehículos nuevos de uno o varios fabricantes.', icon: 'bi-key' },
  ];

  return (
    <section className="py-5 my-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={{ color: 'var(--primary-blue)' }}>Cómo Funciona</h2>
          <p className="text-muted">Para obtener la información más precisa y actualizada</p>
        </div>
        <div className="row g-4 position-relative">
          {steps.map((step, index) => (
            <div className="col-md-4 text-center" key={step.id}>
              <div className="step-card">
                <div className="icon-wrapper mx-auto mb-4 bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center position-relative" style={{ width: '90px', height: '90px', zIndex: 2 }}>
                  <i className={`bi ${step.icon} fs-1`} style={{ color: 'var(--accent-orange)' }}></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary" style={{ backgroundColor: 'var(--primary-blue) !important' }}>
                    0{step.id}
                  </span>
                </div>
                <h5 className="fw-bold mb-3">{step.title}</h5>
                <p className="text-muted">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;