import React from 'react';

const Header = () => {
  return (
    <>
      {/* Top Bar Original */}
      <div className="top-bar">
        <div className="company-logo">
          <a href="/" title="Drivco">
            <img className="img-fluid" src="/assets/images/logos/logo.png" alt="AEM Autos" style={{ width: '220px' }} />
          </a>
        </div>
        <div className="search-area">
          <form method="get" id="searchform" action="#">
            <div className="form-inner">
              <input type="text" name="s" id="s" placeholder="¿Qué vehículo buscas?" />
              <button type="submit"><i className="bi bi-search"></i></button>
            </div>
          </form>
        </div>
        <div className="topbar-right">
          <ul className="d-flex align-items-center list-unstyled m-0 gap-3">
            <li>
              <a className="primary-btn1" href="https://wa.me/18299951554" target="_blank" rel="noreferrer">
                <i className="bi bi-whatsapp me-2"></i> WHATSAPP
              </a>
            </li>
            <li>
              <a className="primary-btn1" href="tel:+18299951554">
                <i className="bi bi-telephone-fill me-2"></i> LLAMAR
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Header Area & Main Menu Sticky */}
      <header className="header-area style-1 sticky-header">
        <div className="header-logo d-lg-none d-flex justify-content-center py-2 bg-white">
          <a href="/"><img src="/assets/images/logos/logo.png" alt="Logo" style={{ height: '40px' }} /></a>
        </div>
        <div className="main-menu">
          <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
            <div className="mobile-logo-wrap">
              <a href="/"><img className="img-fluid" src="/assets/images/logos/logo.png" alt="Logo" style={{ height: '40px' }} /></a>
            </div>
          </div>
          <div className="menu-main-menu-container">
            <ul id="menu-main-menu" className="menu-list">
              <li className="menu-item"><a href="/#inicio">INICIO</a></li>
              <li className="menu-item"><a href="/#vehiculos">VEHÍCULOS</a></li>
              <li className="menu-item"><a href="/#beneficios">BENEFICIOS</a></li>
              <li className="menu-item"><a href="#financiamiento">FINANCIAMIENTO</a></li>
              <li className="menu-item"><a href="/#nosotros">NOSOTROS</a></li>
              <li className="menu-item"><a href="#contacto">CONTACTO</a></li>
            </ul>
          </div>
        </div>
        <div className="nav-right d-flex justify-content-end align-items-center">
          <div className="sidebar-button mobile-menu-btn">
            <i className="bi bi-list fs-1 text-white"></i>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
