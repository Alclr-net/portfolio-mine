import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <span className="logo-text"></span>
        </NavLink>
        <div className={`menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-item">
          <NavLink 
          to="/"
          onClick={() => setIsMenuOpen(false)} >{({isActive})=>(   <span className={isActive ? "nav_link_active" : "nav_link_dActive"}
          id = "home_link">
            Home
            <div className={isActive?"bar_active":""}></div>
          </span>)}
          </NavLink>
          </div>
          <div className="nav-item">
          <NavLink 
          to="/about"
          onClick={() => setIsMenuOpen(false)} >{({isActive})=>(   <span className={isActive ? "nav_link_active" : "nav_link_dActive"}>
      About
      <div className={isActive?"bar_active":""}></div>
          </span>)}
          </NavLink>
          </div>
          <div className="nav-item">
          <NavLink 
          to="/projects"
          onClick={() => setIsMenuOpen(false)} >{({isActive})=>(   <span className={isActive ? "nav_link_active" : "nav_link_dActive"}>
            Projects
            <div className={isActive?"bar_active":""}></div>
          </span>)}
          </NavLink>
          </div>
          <div className="nav-item">
          <NavLink 
          to="/contact"
          onClick={() => setIsMenuOpen(false)} >{({isActive})=>(   <span className={isActive ? "nav_link_active" : "nav_link_dActive"}>
            Contact
            <div className={isActive?"bar_active":""}></div>
          </span>)}
          </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/contact" className="nav-link " onClick={() => setIsMenuOpen(false)}>
             <button className='nav-button'>Book a Call</button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;