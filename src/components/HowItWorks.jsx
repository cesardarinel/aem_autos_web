import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Selección AAA+',
      desc: 'Elige entre nuestro inventario de vehículos certificados o solicita una importación directa de USA.'
    },
    {
      number: '02',
      title: 'Trámite y Financiamiento',
      desc: 'Gestionamos todo el papeleo y te conseguimos la mejor tasa del mercado con bancos locales.'
    },
    {
      number: '03',
      title: 'Entrega Garantizada',
      desc: 'Recibe tu vehículo en tiempo récord, listo para disfrutar con garantía y transparencia total.'
    }
  ];

  return (
    <div className="how-it-work-section py-5" id="proceso">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <span className="text-primary font-weight-bold text-uppercase small">Nuestro Proceso</span>
            <h2 className="display-6 fw-bold mt-2">¿Cómo trabajamos en AEM Autos?</h2>
          </div>
        </div>
        <div className="row g-4">
          {steps.map((step, index) => (
            <div key={index} className="col-lg-4">
              <div className="p-5 bg-white rounded-4 shadow-sm border h-100 text-center position-relative overflow-hidden">
                <div className="display-1 fw-bold text-light position-absolute" style={{ top: '-10px', right: '10px', zIndex: 0, opacity: 0.5 }}>
                  {step.number}
                </div>
                <div className="position-relative" style={{ zIndex: 1 }}>
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '60px', height: '60px' }}>
                    <i className={`bi bi-${index + 1}-circle fs-3`}></i>
                  </div>
                  <h4 className="fw-bold mb-3">{step.title}</h4>
                  <p className="text-muted mb-0">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
