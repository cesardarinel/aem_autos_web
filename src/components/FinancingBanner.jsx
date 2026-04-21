import React from 'react';

const FinancingBanner = () => {
  return (
    <section className="bg-primary py-4 rounded-4 shadow-sm my-5 text-white">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-8">
            <h3 className="fw-bold mb-1">Financiamiento disponible</h3>
            <p className="mb-0 opacity-75">Obtén tu vehículo AAA+ con las mejores tasas del mercado.</p>
          </div>
          <div className="col-md-4 text-md-end mt-3 mt-md-0">
            <div className="d-flex justify-content-center justify-content-md-end gap-4">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-zap-fill fs-4"></i>
                <span className="small fw-bold">Aprobación rápida</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-shield-check fs-4"></i>
                <span className="small fw-bold">Garantía total</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancingBanner;
