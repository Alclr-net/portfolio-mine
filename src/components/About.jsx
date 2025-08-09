import {useEffect} from "react";
import "../styles/About.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import {GradientText} from "./GradientText"

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 250);
  }, []);
  return (
    <section id="about" className="about-section">
      <div className="section-header-about">
     
        <span className="about-subtitle">
          Know My
        </span>
           <GradientText
            colors={['#171738','#2E1760','#3423A6','#7180B9','#DFF3E4']}
            animationSpeed={5}
            showBorder={false}
            className="text-content"
          >
            Story
          </GradientText>
      </div>

      <div className="about-content">
        <div className="about-image">
          <div className="image-container">
            <div className="image-placeholder"></div>
            <div className="image-decoration"></div>
          </div>
        </div>

        <div className="about-text">
          <p className="about-intro">
            Hello! I'm <span className="highlight-text">Rachit Seth</span>
            </p>
            <p className="about-intro">
              A dedicated full-stack developer with a passion for building
              engaging and efficient web experiences. Whether it's crafting
              sleek frontends with React and Next.js or developing robust
              backends with Node.js or Express.js, I thrive on turning complex
              challenges into elegant, scalable solutions. Curiosity drives me
            </p>
           <p className="about-intro">
              I'm constantly exploring new technologies and refining my skills
              to stay ahead in the ever-evolving tech landscape. Beyond the
              screen, I believe in balance, creativity, and continuous growth.
              Every day is a new opportunity to learn, contribute, and make a
              meaningful impact.
            </p>
           <p className="about-intro">Let’s build something great together!</p>
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
      </div>
    </section>
  );
};

export default About;
