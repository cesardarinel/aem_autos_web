import React from 'react';

const Footer = () => {
  return (
    <footer className="footer pt-100 pb-50" id="contacto">
      <div className="container">
        <div className="row g-4 mb-5">
          <div className="col-lg-4 col-md-6">
            <div className="footer-logo mb-4">
              <img src="/logo.png" alt="AEM Autos" style={{ maxWidth: '180px' }} />
            </div>
            <p className="mb-4">
              Concesionario de vehículos importados americanos en Santiago, República Dominicana. 
              Calidad AAA+, financiamiento rápido y atención personalizada.
            </p>
            <div className="social-links d-flex gap-3 mt-4">
              <a href="https://instagram.com/aemautosrd" target="_blank" rel="noreferrer" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://wa.me/18299951554" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="tel:+18299951554" aria-label="Phone">
                <i className="bi bi-telephone-fill"></i>
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title mb-4">Enlaces Rápidos</h5>
            <ul className="footer-links list-unstyled p-0">
              <li className="mb-2"><a href="#inicio" className="text-decoration-none">Inicio</a></li>
              <li className="mb-2"><a href="#vehiculos" className="text-decoration-none">Vehículos</a></li>
              <li className="mb-2"><a href="#beneficios" className="text-decoration-none">Beneficios</a></li>
              <li className="mb-2"><a href="#nosotros" className="text-decoration-none">Nosotros</a></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title mb-4">Nuestra Ubicación</h5>
            <ul className="footer-links list-unstyled p-0">
              <li className="mb-3 d-flex align-items-start gap-2">
                <i className="bi bi-geo-alt mt-1"></i>
                <span>Calle Principal, El Caimito 41000, Santiago, República Dominicana</span>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <i className="bi bi-clock"></i>
                <span>Lun - Dom: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title mb-4">Contacto Directo</h5>
            <ul className="footer-links list-unstyled p-0">
              <li className="mb-3 d-flex align-items-center gap-2">
                <i className="bi bi-telephone-plus"></i>
                <a href="tel:+18299951554" className="text-decoration-none">(829) 995-1554</a>
              </li>
              <li className="mb-3 d-flex align-items-center gap-2">
                <i className="bi bi-telephone"></i>
                <a href="tel:+18099973787" className="text-decoration-none">(809) 997-3787</a>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-envelope"></i>
                <span>info@aemautos.com.do</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-top pt-4 text-center">
          <p className="small mb-0">
            &copy; {new Date().getFullYear()} AEM Autos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
