import React, { useEffect } from 'react';
import logo from '../../logo.png'; // Assuming logo is in the root

const Header = () => {

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header.header-area');
      if (header) {
        header.classList.toggle("sticky", window.scrollY > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Bar - adapted from HTML model */}
      <div className="top-bar">
        <div className="container d-flex justify-content-between align-items-center py-2">
          <div className="company-logo">
            <a href="/">
              <img src={logo} alt="AEM Autos" className="img-fluid" style={{ height: '47px' }} />
            </a>
          </div>

          <div className="topbar-right">
            <ul className="list-unstyled d-flex align-items-center m-0">
              <li>
                <button className="primary-btn1 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#sellUsModal01" style={{border: 'none', background: 'transparent'}}>
                  <i className="bi bi-car-front me-2"></i> VENDE CON NOSOTROS
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Header - adapted from HTML model */}
      <header className="header-area style-1">
        <div className="header-logo d-lg-none d-flex">
          <a href="/" title="AEM Autos">
            <img className="img-fluid" src={logo} alt="AEM Autos" />
          </a>
        </div>
        <div className="main-menu">
          <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
            <div className="mobile-logo-wrap">
              <a href="/" title="AEM Autos">
                <img className="img-fluid" src={logo} alt="AEM Autos" />
              </a>
            </div>
          </div>

          {/* Main Menu */}
          <div className="menu-main-menu-container">
            <ul id="menu-main-menu" className="menu-list">
              <li className="menu-item menu-item-has-children"><a href="/">Inicio</a><i className="bi bi-plus dropdown-icon"></i></li>
              <li className="menu-item menu-item-has-children"><a href="#">Vehículos Nuevos</a><i className="bi bi-plus dropdown-icon"></i></li>
              <li className="menu-item"><a href="#">Vehículos Usados</a></li>
              <li className="menu-item menu-item-has-children"><a href="#">Páginas</a><i className="bi bi-plus dropdown-icon"></i></li>
              <li className="menu-item"><a href="#">Contáctanos</a></li>
            </ul>
          </div>
          
          <div className="topbar-right d-lg-none d-block">
            <a className="primary-btn3" href="#" data-bs-toggle="modal" data-bs-target="#sellUsModal01">
              <i className="bi bi-car-front me-2"></i> VENDE CON NOSOTROS
            </a>
          </div>
          <div className="hotline-area d-lg-none d-flex">
            <div className="icon">
              <img src="/modelos/Home 06 – Drivco_files/hotline-icon.svg" alt="Hotline" />
            </div>
            <div className="content">
              <span>Para Más Información</span>
              <h6><a href="tel:+18299951554">+18299951554</a></h6>
            </div>
          </div>
        </div>

        <div className="nav-right d-flex jsutify-content-end align-items-center">
          <div className="dropdown">
            {/* Cart has been removed as requested */}
          </div>
          
          <div className="hotline-area d-xl-flex d-none">
            <div className="icon">
              <img src="/modelos/Home 06 – Drivco_files/hotline-icon.svg" alt="Hotline" />
            </div>
            <div className="content">
              <span>Para Más Información</span>
              <h6><a href="tel:+18299951554">+18299951554</a></h6>
            </div>
          </div>

          <div className="sidebar-button mobile-menu-btn ">
            <span></span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;