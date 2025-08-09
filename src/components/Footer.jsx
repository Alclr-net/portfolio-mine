import "../styles/Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <div className="footer_logo_">
            <div className="logo-footer"></div>
          </div>
          <div className="_content">
           <p className="footer_para_01"> I'm Rachit, a full-stack developer and freelance problem solver
            dedicated to delivering high-performance web solutions. Glad to have
            you here!</p>
          </div>
          <FaGithub
            className="logos_about"
            onClick={() => {
              window.location.href = "https://github.com/Alclr-net";
            }}
          />
          <FaLinkedinIn
            className="logos_about"
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/in/rachit-seth-dev/";
            }}
          />
          <FaXTwitter
            className="logos_about"
            onClick={() => {
              window.location.href = "https://x.com/seth_rachit_";
            }}
          />
        </div>

        <div className="footer-links">
          <div className="footer-nav">
            <h3 id="footer_nav_header">Navigation</h3>
            <ul>
              <li>
                <NavLink className="footer_navlinks" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className="footer_navlinks" to="/about">About</NavLink>
              </li>
              <li>
                <NavLink className="footer_navlinks" to="/skills">Skills</NavLink>
              </li>
              <li>
                <NavLink className="footer_navlinks" to="/projects">Projects</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-links">
          <div className="footer-nav">
            <h3 id="footer_nav_header">More</h3>
            <ul>
              <li>
                <NavLink className="footer_navlinks" to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink className="footer_navlinks" to="/projects">Links</NavLink>
              </li>
            
              <li>
                <NavLink className="footer_navlinks" to="/">RSS</NavLink>
              </li>
            </ul>
          </div>
        </div>
        </div>
        
      </div>

      <div className="footer-bottom">
        <div className="footer-legal">
          <span>&copy; {currentYear} Rachit Seth. All rights reserved.</span>
          <div className="footer_legal_actions">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Settings</a>
          </div>
        </div>
      </div>
      
      <div className="svg_image">
        <h1 className="footer_name">RACHIT</h1>
      </div>
    </footer>
  );
};

export default Footer;
