import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-5 pt-5 pb-3">
      <div className="container">
        <div className="row gy-5 mb-5">
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title mb-4 text-white">Sobre la Empresa</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#">Sobre Nosotros</a></li>
              <li><a href="#">Devoluciones e Intercambios</a></li>
              <li><a href="#">Política de Reembolso</a></li>
              <li><a href="#">Reseñas</a></li>
              <li><a href="#">Preguntas Frecuentes</a></li>
              <li><a href="#">Contáctanos</a></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title mb-4 text-white">Búsqueda y Exploración</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#">Vehículos Usados</a></li>
              <li><a href="#">Vehículos Nuevos</a></li>
              <li><a href="#">Subasta de Vehículos</a></li>
              <li><a href="#">Vender mi Vehículo</a></li>
              <li><a href="#">Comprar Ahora</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title mb-4 text-white">Vehículos por Marca</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#">BMW</a></li>
              <li><a href="#">Ferrari</a></li>
              <li><a href="#">Mercedes</a></li>
              <li><a href="#">Suzuki</a></li>
              <li><a href="#">TATA</a></li>
              <li><a href="#">Toyota</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title mb-4 text-white">Vehículos por Ubicación</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#">Santo Domingo</a></li>
              <li><a href="#">Santiago</a></li>
              <li><a href="#">Punta Cana</a></li>
              <li><a href="#">Puerto Plata</a></li>
              <li><a href="#">La Romana</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12">
            <h5 className="footer-title mb-4 text-white">Contáctanos</h5>
            <div className="d-flex align-items-start gap-3 mb-3 text-white-50">
              <i className="bi bi-geo-alt fs-5 text-white"></i>
              <span>998Q+JVQ, Calle Principal, El Caimito 41000, República Dominicana</span>
            </div>
            <div className="d-flex align-items-start gap-3 text-white-50">
              <i className="bi bi-telephone fs-5 text-white"></i>
              <span>+18299951554</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom pt-4 border-top border-secondary">
          <div className="row align-items-center gy-3">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0 text-white-50">Derechos de autor 2026 <span className="text-white fw-bold">AEM Autos</span> | Diseño por 1bits</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="social-links d-flex gap-3 justify-content-center justify-content-md-end">
                <span className="text-white me-2">Síguenos:</span>
                <a href="https://www.facebook.com/AEMautosrd/" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/aemautosrd/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                <a href="https://www.threads.com/@aemautosrd?xmt=AQF0ZbqhHSKqE1kyHEzlGDLIlJ_6k7dqbVOcE-KrRXY3QRk" target="_blank" rel="noopener noreferrer"><i className="bi bi-threads"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;