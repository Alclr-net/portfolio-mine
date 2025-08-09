import "../styles/Hero.css";
import { NavLink } from "react-router";
import Particles from './Particles';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"><div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div></div>
      <div className="hero-content">
        <div className="hero-tag">
          <button className="new_btn-icon">
            New
            </button>
          <span className="hero-tag_text">Flow is Live Now!</span>
         
            <a href="https://flow-rs.vercel.app/" >  <span className="hero-tag_arrow"><IoIosArrowForward />  </span></a>
        

        </div>
        <h1 className="hero-title">
          I design and build websites that
          <br />
          make your brand <span className="highlight">stand out.</span>
        </h1>
        <span className="hero-subtitle">
          Hello👋, I'm Rachit Seth a{" "}
          <span className="highlight-text_hero">Full-Stack Developer.</span>
        </span>
        <div className="hero-buttons">
        <NavLink to='/contact'><button className="btn-icon">
            Let's Connect
            <div className="btn-icon_arrow">
              <FaArrowRight />
            </div>
          </button></NavLink>

          <a href="mailto:rachitseth9305@gmail.com" className="email-link">
            <span className="email-icon">
              <MdOutlineMarkEmailUnread />
            </span>
          </a>
        </div>
      </div>
      <div className="hero-curve"></div>
    </section>
  );
};

export default Hero;
