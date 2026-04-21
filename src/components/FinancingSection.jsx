import React from 'react';

const FinancingSection = () => {
  const steps = [
    { id: 1, title: 'Elige tu auto', desc: 'Explora nuestro catálogo y selecciona el que más te guste.' },
    { id: 2, title: 'Solicitud Rápida', desc: 'Envíanos tus datos y procesaremos tu crédito en tiempo récord.' },
    { id: 3, title: '¡A conducir!', desc: 'Firma y sal montado en tu nuevo vehículo AAA+.' }
  ];

  return (
    <div className="financing-section py-5 bg-navy text-white">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h2 className="display-6 fw-bold mb-4">Financiamiento fácil y rápido</h2>
            <p className="lead mb-4">No dejes pasar la oportunidad de tener el vehículo que siempre soñaste. Tenemos alianzas con los principales bancos.</p>
            <div className="d-flex flex-column gap-3">
              {steps.map(step => (
                <div key={step.id} className="d-flex align-items-start gap-3">
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{width: '32px', height: '32px'}}>
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">{step.title}</h6>
                    <p className="small opacity-75 mb-0">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bg-white p-4 rounded-4 shadow-lg text-dark">
              <h5 className="fw-bold mb-4 text-center">Calcula tu cuota</h5>
              <div className="mb-3">
                <label className="form-label small fw-bold">Valor del vehículo</label>
                <input type="text" className="form-control" placeholder="$0.00" />
              </div>
              <div className="mb-3">
                <label className="form-label small fw-bold">Inicial</label>
                <input type="text" className="form-control" placeholder="$0.00" />
              </div>
              <button className="btn btn-primary w-100 fw-bold py-3 mt-3">SOLICITAR AHORA</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancingSection;
