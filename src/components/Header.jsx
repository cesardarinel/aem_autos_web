import React, { useState, useEffect } from 'react';

const Header = ({ pathname }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const currentPath = pathname || (typeof window !== 'undefined' ? window.location.pathname : '');

  const getActiveClass = (path) => {
    if (currentPath === path) return 'active';
    if (path !== '/' && currentPath.startsWith(path)) return 'active';
    return '';
  };

  return (
    <>
      <div className="top-bar">
        <div className="company-logo">
          <a href="/" title="AEM Autos">
            <img className="img-fluid" src="/assets/images/logos/logo.png" alt="AEM Autos" style={{ width: '220px' }} />
          </a>
        </div>
        <div className="search-area d-none d-md-block">
          <form method="get" action="#">
            <div className="form-inner">
              <input type="text" placeholder="¿Qué vehículo buscas?" />
              <button type="submit"><i className="bi bi-search"></i></button>
            </div>
          </form>
        </div>
        <div className="topbar-right">
          <ul className="d-flex align-items-center list-unstyled m-0 gap-3">
            <li>
              <a className="primary-btn1" href="https://wa.me/18099973787" target="_blank" rel="noreferrer">
                <i className="bi bi-whatsapp me-2"></i> WHATSAPP
              </a>
            </li>
            <li className="d-none d-sm-block">
              <a className="primary-btn1" href="tel:+18099973787">
                <i className="bi bi-telephone-fill me-2"></i> LLAMAR
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* suppressHydrationWarning evita que React se queje si jQuery añade la clase 'sticky' antes de tiempo */}
      <header 
        className={`header-area style-1 sticky-header ${mounted && isSticky ? 'sticky' : ''}`}
        suppressHydrationWarning={true}
      >
        <div className="header-logo d-lg-none d-flex justify-content-center py-2">
          <a href="/"><img src="/assets/images/logos/logo-footer.png" alt="Logo" style={{ height: '55px' }} /></a>
        </div>
        
        <div className={`main-menu ${isMenuOpen ? 'show-menu' : ''}`}>
          <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
            <div className="mobile-logo-wrap">
              <a href="/"><img className="img-fluid" src="/assets/images/logos/logo-footer.png" alt="Logo" style={{ height: '55px' }} /></a>
            </div>
            <div className="menu-close-btn" onClick={closeMenu}>
               <i className="bi bi-x-lg fs-2 text-dark"></i>
            </div>
          </div>
          <div className="menu-main-menu-container">
            <ul className="menu-list">
              <li className="menu-item">
                <a href="/" className={getActiveClass('/')} onClick={closeMenu} suppressHydrationWarning={true}>INICIO</a>
              </li>
              <li className="menu-item">
                <a href="/#vehiculos" onClick={closeMenu} suppressHydrationWarning={true}>VEHÍCULOS</a>
              </li>
              <li className="menu-item">
                <a href="/nosotros" className={getActiveClass('/nosotros')} onClick={closeMenu} suppressHydrationWarning={true}>NOSOTROS</a>
              </li>
              <li className="menu-item">
                <a href="/financiamiento" className={getActiveClass('/financiamiento')} onClick={closeMenu} suppressHydrationWarning={true}>FINANCIAMIENTO</a>
              </li>
              <li className="menu-item">
                <a href="/contacto" className={getActiveClass('/contacto')} onClick={closeMenu} suppressHydrationWarning={true}>CONTACTO</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="nav-right d-flex justify-content-end align-items-center">
          <div 
            className={`sidebar-button mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            suppressHydrationWarning={true}
          >
            <span></span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
