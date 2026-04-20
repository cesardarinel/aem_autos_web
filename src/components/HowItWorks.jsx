import React from 'react';

const AboutUs = () => {
  return (
    <div className="how-it-work-section pt-100 pb-100" id="nosotros">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="section-title mb-4">
              <span>Sobre Nosotros</span>
              <h2>Tu próximo vehículo está más cerca de lo que imaginas</h2>
            </div>
            <p className="mb-4">En <strong>AEM Autos</strong>, somos un concesionario especializado en vehículos importados americanos ubicado en Santiago, República Dominicana. Nos dedicamos a ofrecer automóviles en condiciones AAA+, con transparencia y profesionalismo.</p>
            <p className="mb-4">Con más de 410 publicaciones en Instagram y una calificación de 5.0 estrellas en Google, nuestra reputación se construye sobre la confianza, la calidad y la rapidez.</p>
            <div className="row g-3">
              <div className="col-6">
                <div className="card p-3 text-center border">
                  <h3 className="mb-0">5.0</h3>
                  <p className="small mb-0">Estrellas en Google</p>
                </div>
              </div>
              <div className="col-6">
                <div className="card p-3 text-center border">
                  <h3 className="mb-0">410+</h3>
                  <p className="small mb-0">Vehículos gestionados</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80" className="img-fluid rounded-3 shadow" alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
