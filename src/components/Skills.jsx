import '../styles/Skills.css';
import { GradientText } from './GradientText';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header-skills">

        <span className="skills-subtitle">The Secret </span><GradientText
          colors={['#171738','#2E1760','#3423A6','#7180B9','#DFF3E4']}
          animationSpeed={5}
          showBorder={false}
          className="text-content"
        >
          Sauce
        </GradientText>
      </div>

      <div className="skills-grid">
        <div className="skill-item">
          <img src="./react.svg" alt="React" className="skill_img" />
          <div className="skill-name">React</div>
        </div>
        <div className="skill-item">
          <img src="./next.svg" alt="Next JS" className="skill_img" />
          <div className="skill-name">Next</div>
        </div>
        <div className="skill-item">
          <img src="./tailwindcss.svg" alt="TailwindCSS" className="skill_img"/>
          <div className="skill-name">Tailwind</div>
        </div>
        <div className="skill-item">
          <img src="./angular-icon.svg" alt="angular"className="skill_img" />
          <div className="skill-name">Angular</div>
        </div>
        <div className="skill-item">
          <img src="./NodeJs.svg" alt="Node.js" className="skill_img" />
          <div className="skill-name">NodeJS</div>
        </div>
        
        <div className="skill-item">
          <img src="./python.svg" alt="python" className="skill_img" />
          <div className="skill-name">Python</div>
        </div>
        <div className="skill-item">
          <img src="./darkgreen.svg" alt="MongoDB" className="skill_img" />
          <div className="skill-name">MongoDB</div>
        </div>
        <div className="skill-item">
          <img src="./sky.svg" alt="PostgreSQL" className="skill_img" />
          <div className="skill-name">Postgres</div>
        </div>
        <div className="skill-item">
          <img src="./versal.svg" alt="Vercel" className="skill_img" />
          <div className="skill-name">Vercel</div>
        </div>
        <div className="skill-item">
          <img src="./redux.svg" alt="Redux" className="skill_img" />
          <div className="skill-name">Redux</div>
        </div>
        <div className="skill-item">
          <img src="./github.svg" alt="Git" className="skill_img" />
          <div className="skill-name">GitHub</div>
        </div>
        <div className="skill-item">
          <img src="./figma.svg" alt="Figma" className="skill_img" />
          <div className="skill-name">Figma</div>
        </div>
        <div className="skill-item">
          <img src="./aws.svg" alt="AWS" className="skill_img" />
          <div className="skill-name">AWS</div>
        </div>
        <div className="skill-item">
          <img src="./docker.svg" alt="Docker" className="skill_img" />
          <div className="skill-name">Docker</div>
        </div>
        <div className="skill-item">
          <img src="./typescript.svg" alt="TypeScript" className="skill_img"/>
          <div className="skill-name">TS</div>
        </div>
        <div className="skill-item">
          <img src="./javascript.svg" alt="JavaScript" className="skill_img"/>
          <div className="skill-name">JS</div>
        </div>
        {/* New skills below */}
        <div className="skill-item">
          <img src="./blue.svg" alt="Prisma" className="skill_img" />
          <div className="skill-name">Prisma</div>
        </div>
        <div className="skill-item">
          <img src="./bun.svg" alt="Bun" className="skill_img" />
          <div className="skill-name">Bun</div>
        </div>
        <div className="skill-item">
          <img src="./clerk.svg" alt="Clerk" className="skill_img"/>
          <div className="skill-name">Clerk</div>
        </div>
        <div className="skill-item">
          <img src="./express.svg" alt="Express" className="skill_img"/>
          <div className="skill-name">Express</div>
        </div>
        <div className="skill-item">
          <img src="./gray.svg" alt="Expo" className="skill_img"/>
          <div className="skill-name">Expo</div>
        </div>
        <div className="skill-item">
          <img src="./linux.svg" alt="Linux" className="skill_img"/>
          <div className="skill-name">Linux</div>
        </div>
       
        <div className="skill-item">
          <img src="./mysql.svg" alt="SQL" className="skill_img" />
          <div className="skill-name">MySQL</div>
        </div>
       
        <div className="skill-item">
          <img src="./claude-icon.svg" alt="Cloud" className="skill_img" />
          <div className="skill-name">Claude</div>
        </div>
     
        <div className="skill-item">
          <img src="./vs.svg" alt="VS Code" className="skill_img" />
          <div className="skill-name">VS</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;