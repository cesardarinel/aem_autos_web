import React from 'react';

const HeroBanner = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <span style={{ color: 'var(--accent-orange)', fontWeight: 'bold' }}>Distribuidor de Autos de Élite</span>
            <h1 className="hero-title mt-2">Ventas de Autos Premier</h1>
            <p className="lead mb-4">Los concesionarios de automóviles pueden vender autos nuevos de uno o varios fabricantes</p>
            <button className="btn btn-primary btn-lg">Explorar Más</button>
            <div className="mt-4 d-flex align-items-center gap-2">
              <div className="d-flex text-warning">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <span className="fw-bold">5.0</span>
              <span className="text-muted ms-2">Basado en 2348 Reseñas</span>
            </div>
          </div>
          <div className="col-lg-6 text-center mt-5 mt-lg-0">
             <div style={{ background: 'var(--primary-blue)', height: '300px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <h3>Marcador de Imagen del Vehículo</h3>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;