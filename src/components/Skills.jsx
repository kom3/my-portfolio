import skillIcons from "../skillIcons";
import portfolioData from "../portfolioData";

const skills = portfolioData.skills;

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-list">
        {skills.map((skill) => {
          const Icon = skillIcons[skill];
          return (
            <span key={skill} aria-label={skill} style={{display: 'flex', alignItems: 'center', gap: '0.5em'}}>
              {Icon && <Icon title={skill} style={{fontSize: '1.3em'}} />}
              {skill}
            </span>
          );
        })}
      </div>
    </section>
  );
}
