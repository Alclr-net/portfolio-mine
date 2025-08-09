import React from "react";
import { NavLink } from "react-router";
import "../styles/Grid.css";
import { PiHandshakeThin } from "react-icons/pi";
import { ImLocation } from "react-icons/im";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";
import { GiPencil } from "react-icons/gi";
import { CiGrid32 } from "react-icons/ci";
import { motion } from "framer-motion";
const Grid = () => {
  const coolMarquee = {
    x: ["0%", "-50%"],
    transition: {
      duration: 25,
      ease: "linear",
      repeat: Infinity,
    },
  };
  const coolestMarquee = {
    x: ["-50%", "0%"],
    transition: {
      duration: 25,
      ease: "linear",
      repeat: Infinity,
    },
  };
  const aiMarquee = {
    x: ["0%", "-50%"],
    transition: {
      duration: 40,
      ease: "linear",
      repeat: Infinity,
    },
  };
  return (
    <section className="grid-container">
      {/* Collaboration Section */}
      <div className="grid-item collaboration-section">
        <div className="icon-container">
          <div className="icon-circle">
            <PiHandshakeThin className="hand-shake" />
          </div>
        </div>
        <div className="section-content">
          <h3 id="collab">Collaboration</h3>
          <p className="collab-description">
            I believe in working with clients, not just for them — open collaboration is the key
            <br />
            to a successful build.
          </p>
        </div>
        <div className="profile-circles">
          <div className="profile-circle profile-1"></div>
          <div className="profile-circle profile-2"></div>
          <div className="profile-circle profile-3"></div>
          <div className="profile-circle profile-4"></div>
          <div className="profile-circle profile-5"></div>
          <div className="profile-circle profile-6"></div>
        </div>
      </div>

      {/* Time Zone Section */}
      <div className="grid-item timezone-section">
        <div className="section-content">
          <h3 id="zone"> Timezone-flexible for global teams & clients </h3>
          <div className="timezone-badges">
            <span className="timezone-badge" id="location_blur">
              <span className="small_badge">GB</span>
              UK
            </span>
            <span className="timezone-badge" id="india_time_zone">
              <span className="small_badge">IN</span>India
            </span>
            <span className="timezone-badge" id="location_blur">
              <span className="small_badge">US</span>
              USA
            </span>
          </div>
        </div>
        <div className="globe-container">
          <div className="globe">
            <div className="mesh">
              <div className="location-marker"></div>
            </div>
          </div>
        </div>

        <div className="location_map">
          <ImLocation className="location_icon" />
          <span className="location-text">Remote</span>
        </div>
        <NavLink to="/contact" className="globe_href">
          contact now
          {/* <FaArrowRightLong className="arrow_contact" /> */}
        </NavLink>
      </div>

      {/* Let's Work Section */}
      <div className="grid-item work-section">
        <div className="logo-container">
          <div className="logo"></div>
        </div>
        <div className="section-content">
          <h3 id="work">Let’s team up for your next big idea!</h3>
          <div className="email-container">
            <IoCopyOutline className="copy_icon"/>
            <span
              onClick={async () => {
                try {
                  navigator.clipboard.writeText("rachitSeth9305@gmail.com");
                  alert("👋Email copied successfully");
                } catch (err) {
                  alert("👋Hover it Again");
                }
              }}
            >
            hello@sethrachit.in
            </span>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="grid-item tech-section">
        <div className="section-content">
          <h3 id="passionate">Fuelled by innovation, focused on impact</h3>
          <div className="tech-badges">
            <div className="first-row">
              <motion.div animate={coolMarquee} className="tech-row-1">
                <span className="tech-badge">
                  <img className="skill_img" src="/clerk.svg"></img>Clerk
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/tailwindcss.svg"></img>
                  Tailwind
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/claude-icon.svg"></img>
                  Claude
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/html5.svg"></img>
                  HTML
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/mysql.svg"></img>
                  MySQL
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/framer.svg"></img>Motion
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/next.svg"></img>NextJS
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/clerk.svg"></img>Clerk
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/tailwindcss.svg"></img>
                  Tailwind
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/claude-icon.svg"></img>
                  Claude
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/html5.svg"></img>
                  HTML
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/mysql.svg"></img>
                  MySQL
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/framer.svg"></img>Motion
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/next.svg"></img>NextJS
                </span>
              </motion.div>
            </div>

            <div className="second-row">
              <motion.div animate={coolestMarquee} className="tech-row-1">
                <span className="tech-badge">
                  <img className="skill_img" src="/gray.svg"></img>Expo
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/docker.svg"></img>Docker
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/blue.svg"></img>Prisma
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/express.svg"></img>Express
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/figma.svg"></img>Figma
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/python.svg"></img>Python
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/redux.svg"></img>Redux
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/gray.svg"></img>Expo
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/docker.svg"></img>Docker
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/blue.svg"></img>Prisma
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/express.svg"></img>Express
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/figma.svg"></img>Figma
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/python.svg"></img>Python
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/redux.svg"></img>Redux
                </span>
                
              </motion.div>
            </div>
            <div className="third-row">
              <motion.div animate={coolMarquee} className="tech-row-1">
                <span className="tech-badge">
                  <img className="skill_img" src="/linux.svg"></img>Linux
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/bun.svg"></img>Bun
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/versal.svg"></img>Versal
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/github.svg"></img>GitHub
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/angular-icon.svg"></img>Angular
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/rust.svg"></img>Rust
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/vs.svg"></img>VScode
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/linux.svg"></img>Linux
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/bun.svg"></img>Bun
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/versal.svg"></img>Versal
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/github.svg"></img>GitHub
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/angular-icon.svg"></img>Angular
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/rust.svg"></img>Rust
                </span>
                <span className="tech-badge">
                  <img className="skill_img" src="/vs.svg"></img>VScode
                </span>
                
              </motion.div>
            </div>
          </div>
        </div>
        <div className="website-preview">
          <div className="browser-mockup">
            <div className="browser-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="browser-content">
              <h4 id="small_web">
                Websites that stand out. Experiences that make an impact.
              </h4>
              <div className="browser-buttons">
                <button className="primary-btn">Contact</button>
                <button className="secondary-btn">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Project Section */}
      <div className="grid-item project-section">
        <div className="project-section-overlay">
          <div className="section-header-grid">
            <CiGrid32 className="grid_icon" />
            <span className="section-label">The Secret Sauce</span>
            <h3 className="secret_grid">
              Currently building a Saas Application
            </h3>
          </div>
          <span className="secret_btn">Know More</span>
        </div>
        <motion.div animate={aiMarquee} className="tech-row-2">
          {" "}
          <div className="project-features">
            <div className="feature">
              <div className="feature-content">
                <h4 className="grid_title">Smart AI-Powered Writing</h4>
                <span className="grid_explain">
                  Leverages advanced AI models to generate high-quality content
                  for blogs, ads, and social media in seconds.
                </span>
              </div>
            </div>
            <div className="feature">
              <div className="feature-content">
                <h4 className="grid_title">Fully Customizable Templates</h4>
                <span className="grid_explain">
                  Pre-built content frameworks tailored for different industries
                  – just plug in your brand tone and go.
                </span>
              </div>
            </div>
            <div className="feature">
              <div className="feature-content">
                <h4 className="grid_title">10x Content Speed</h4>
                <span className="grid_explain">
                  Create SEO-optimized articles, captions, and newsletters 10x
                  faster without compromising on quality.
                </span>
              </div>
            </div>
            <div className="feature">
              <div className="feature-content">
                <h4 className="grid_title"> Analytics & Optimization</h4>
                <span className="grid_explain">
                  Built-in tools to track content performance and improve
                  engagement based on AI-driven insights.
                </span>
              </div>
            </div>

            <div className="feature">
              <div className="feature-content">
                <h4 className="grid_title">Smart AI-Powered Writing</h4>
                <span className="grid_explain">
                  Leverages advanced AI models to generate high-quality content
                  for blogs, ads, and social media in seconds.
                </span>
              </div>
            </div>
            <div className="feature">
              <div className="feature-content">
                <h4 className="grid_title">Fully Customizable Templates</h4>
                <span className="grid_explain">
                  Pre-built content frameworks tailored for different industries
                  – just plug in your brand tone and go.
                </span>
              </div>
            </div>
            <div className="feature">
              <div className="feature-content">
                <h4 className="grid_title">10x Content Speed</h4>
                <span className="grid_explain">
                  Create SEO-optimized articles, captions, and newsletters 10x
                  faster without compromising on quality.
                </span>
              </div>
            </div>
            <div className="feature">
              <div className="feature-content">
                <h4 className="grid_title"> Analytics & Optimization</h4>
                <span className="grid_explain">
                  Built-in tools to track content performance and improve
                  engagement based on AI-driven insights.
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Grid;
