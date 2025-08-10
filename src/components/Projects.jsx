import "../styles/Projects.css";
import { GradientText } from "./GradientText";
import TiltedCard from "./TiltedCard";

const Projects = () => {
  const handleRedirectFlow = () => {
    window.location.href = "https://flow-rs.vercel.app/";
  };
  const handleRedirectCodeHeist = () => {
    window.location.href = "https://chartreuse-satisfaction-400757.framer.app/";
  };
  return (
    <section className="projects-screenshot-layout-multi">
      {/* Project 1 */}
      <div className="projects_header">
        <span className="project-title">The Winning</span>
        <GradientText
          colors={["#171738", "#2E1760", "#3423A6", "#7180B9", "#DFF3E4"]}
          animationSpeed={5}
          showBorder={false}
          className="text-content"
        >
          Blueprints
        </GradientText>
      </div>

      {/* Project 1: Flow */}
      <div className="projects-screenshot-layout">
        <div className="showcase-left">
          <div className="project-showcase">
            <div className="showcase-header">
              A clean and conversion-focused website built for a B2B brand to
              enhance online presence and credibility.
            </div>
            <div
              className="showcase-image-placeholder"
              onClick={handleRedirectFlow}
            ></div>
          </div>
        </div>
        <div className="showcase-right">
          <div className="project-details">
            <h2 className="projectName">Flow – B2B Branding Website</h2>
            <p>
              Flow is a professionally crafted website developed for a friend's
              B2B venture, aimed at positioning their brand as trustworthy and
              solution-driven. The site features a modern, minimal UI, tailored
              content sections for services, and a responsive layout optimized
              for all devices. With a focus on performance, clarity, and user
              experience, this project reflects my ability to build real-world
              digital solutions that align with business goals.
            </p>
          </div>
          <div className="tech-stack">
            <div className="stack-badges">
              <span className="stack-badge">
                <img src="./next.svg" alt="Next JS" className="skill_img" />
                Next JS
              </span>
              <span className="stack-badge">
                <img src="./react.svg" alt="React" className="skill_img" />
                React
              </span>
              <span className="stack-badge">
                <img
                  src="./tailwindcss.svg"
                  alt="TailwindCSS"
                  className="skill_img"
                />
                Tailwind
              </span>
              <span className="stack-badge">
                <img
                  src="./typescript.svg"
                  alt="TypeScript"
                  className="skill_img"
                />
                TypeScript
              </span>
              <span className="stack-badge">
                <img src="./redux.svg" alt="Redux" className="skill_img" />
                Redux
              </span>
              <span className="stack-badge">
                <img src="./mysql.svg" alt="SQL" className="skill_img" />
                MySQL
              </span>
              <span className="stack-badge">
                <img src="./express.svg" alt="Express" className="skill_img" />
                Express
              </span>
              <span className="stack-badge">
                <img src="./docker.svg" alt="Docker" className="skill_img" />
                Docker
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Project 2: Designer Portfolio */}
      <div className="projects-screenshot-layout">
        <div className="showcase-left">
          <div className="project-showcase-02">
            <div className="showcase-header">
              A clean, responsive portfolio for product designer, showcasing his
              work and design approach.
            </div>
            <div
              className="showcase-image-placeholder-1"
              onClick={handleRedirectCodeHeist}
            ></div>
          </div>
        </div>
        <div className="showcase-right">
          <div className="project-details">
            <h2 className="projectName02">Product Designer Portfolio</h2>
            <p>
              This is a sleek, responsive portfolio website created for Jatin
              Bhaskar, a product designer focused on crafting user-centered
              digital experiences. The site presents his design process, case
              studies, and contact info in a clean and structured layout that
              reflects his personal brand. Built entirely using Framer, the
              project leverages a design-first, no-code approach to deliver
              smooth transitions, interactive components, and fast performance
              all without writing a single line of code. The result is a modern,
              minimal, and mobile-friendly portfolio tailored for creative
              professionals.
            </p>
          </div>
          <div className="tech-stack">
            <div className="stack-badges">
              <span className="stack-badge">
                <img src="./framer.svg" alt="framer" className="skill_img" />
                Framer
              </span>
              <span className="stack-badge">
                <img src="./darkgreen.svg" alt="aws" className="skill_img" />
                Mongo DB
              </span>
              <span className="stack-badge">
                <img src="./figma.svg" alt="figma" className="skill_img" />
                Figma
              </span>
              <span className="stack-badge">
                <img src="./linux.svg" alt="linux" className="skill_img" />
                Linux
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Project 3: My Portfolio */}
      <div className="projects-screenshot-layout">
        <div className="showcase-left">
          <div className="project-showcase-03">
            <div className="showcase-header">
              A clean, responsive portfolio for Myself, showcasing projects,
              technical expertise, and problem-solving approach.
            </div>
            <div
              className="showcase-image-placeholder-2"
              onClick={handleRedirectCodeHeist}
            ></div>
          </div>
        </div>
        <div className="showcase-right">
          <div className="project-details">
            <h2 className="projectName03">My Developer Portfolio</h2>
            <p>
              A modern and performance-driven portfolio website created to
              showcase my technical skills, project work, and development style.
              Designed with clarity, speed, and responsiveness in mind, this
              site also acts as a real-world demonstration of my ability to
              design and deploy production-ready web experiences.
            </p>
          </div>
          <div className="tech-stack">
            <div className="stack-badges">
              <span className="stack-badge">
                <img className="skill_img" src="/clerk.svg"></img>Clerk
              </span>
              <span className="stack-badge">
                <img className="skill_img" src="/tailwindcss.svg"></img>
                Tailwind
              </span>
              <span className="stack-badge">
                <img className="skill_img" src="/framer.svg"></img>Motion
              </span>
              <span className="stack-badge">
                <img className="skill_img" src="/darkgreen.svg"></img>Mongo DB
              </span>
              <span className="stack-badge">
                <img src="./react.svg" alt="react" className="skill_img" />
                React
              </span>
              <span className="stack-badge">
                <img src="./express.svg" alt="express" className="skill_img" />
                Express
              </span>
              <span className="stack-badge">
                <img src="./redux.svg" alt="redux" className="skill_img" />
                Redux
              </span>
              <span className="stack-badge">
                <img
                  src="./typescript.svg"
                  alt="linux"
                  className="skill_img"
                />
                TypeScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
