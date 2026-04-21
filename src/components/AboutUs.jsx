import React from 'react';

const AboutUs = () => {
  return (
    <section id="nosotros" className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="text-primary font-weight-bold text-uppercase small">Sobre Nosotros</span>
            <h2 className="display-5 fw-bold mt-2 mb-4">Tu próximo vehículo está más cerca de lo que imaginas</h2>
            <p className="lead text-muted mb-4">
              En <strong className="text-dark">AEM Autos</strong>, somos un concesionario especializado en vehículos importados americanos ubicado en Santiago, República Dominicana.
            </p>
            <p className="text-muted mb-4">
              Nos dedicamos a ofrecer automóviles en condiciones AAA+, con transparencia y profesionalismo. Con más de 410 ventas exitosas, nuestra reputación se construye sobre la confianza.
            </p>
            
            <div className="row g-3 mb-4">
              <div className="col-6">
                <div className="p-4 bg-light rounded shadow-sm border text-center">
                  <p className="h2 fw-bold text-navy mb-0">5.0</p>
                  <p className="small text-muted mb-0">Estrellas en Google</p>
                </div>
              </div>
              <div className="col-6">
                <div className="p-4 bg-light rounded shadow-sm border text-center">
                  <p className="h2 fw-bold text-navy mb-0">410+</p>
                  <p className="small text-muted mb-0">Ventas exitosas</p>
                </div>
              </div>
            </div>

            <a 
              href="https://instagram.com/aemautosrd" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline-primary d-inline-flex align-items-center gap-2"
            >
              <i className="bi bi-instagram"></i>
              @aemautosrd
            </a>
          </div>

          <div className="col-lg-6">
            <div className="position-relative">
              <img 
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80" 
                alt="Showroom AEM Autos" 
                className="img-fluid rounded-4 shadow-lg" 
              />
              <div className="position-absolute bottom-0 end-0 bg-dark text-white p-4 rounded-3 m-3 shadow d-none d-md-block" style={{maxWidth: '250px'}}>
                <p className="fw-bold mb-1">Encuentra tu ideal</p>
                <p className="small mb-0 opacity-75">Visítanos en Santiago hoy mismo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
