import React from 'react';

const HeroBanner = () => {
  return (
    <div className="home6-banner-area" id="inicio">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-content text-start">
              <span className="badge px-3 py-2 mb-3" style={{ background: 'rgba(45, 114, 176, 0.1)', color: '#2D72B0', fontWeight: '700' }}>
                AEM AUTOS RD
              </span>
              <h1 className="display-4 fw-bold mb-4">
                Vehículos Importados <br />
                <span style={{ color: '#2D72B0' }}>Directo de USA</span>
              </h1>
              <p className="lead mb-5">
                Especialistas en vehículos americanos de alta calidad (AAA+). 
                Ubicados en Santiago con financiamiento disponible.
              </p>
              <div className="d-flex gap-3">
                <a href="#vehiculos" className="primary-btn7">VER CATÁLOGO</a>
                <a href="#contacto" className="btn-outline-custom">CONTACTO</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-img-group position-relative mt-5 mt-lg-0">
               <img 
                 src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80" 
                 alt="Car" 
                 className="img-fluid rounded-4 shadow-lg"
               />
               <div className="position-absolute bottom-0 start-0 bg-white p-3 rounded-4 shadow border m-3">
                  <h4 className="mb-0 fw-bold" style={{ color: '#0D3B66' }}>410+</h4>
                  <p className="small mb-0 text-muted">Ventas exitosas</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
