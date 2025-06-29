import portfolioData from "../portfolioData";

const projects = portfolioData.projects;

function ProjectCard({ proj }) {
  return (
    <li className="project-card">
      <div className="project-card-header">
        <span className="project-icon" aria-hidden="true">
          🚀
        </span>
        <strong className="project-title">{proj.title}</strong>
      </div>
      <div className="project-desc">{proj.description}</div>
      <div className="project-tech">
        <span>Tech:</span> {proj.tech.join(", ")}
      </div>
      {proj.link && (
        <a
          href={proj.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View
        </a>
      )}
    </li>
  );
}

function PersonalProjects() {
  return (
    <div className="personal-projects">
      <h3>Personal Projects</h3>
      <ul>
        {projects.personal.map((proj) => (
          <ProjectCard key={proj.title} proj={proj} />
        ))}
      </ul>
    </div>
  );
}

function CompanyProjects() {
  return (
    <div className="company-projects">
      <h3>Company Projects</h3>
      <ul>
        {projects.company.map((proj) => (
          <ProjectCard key={proj.title} proj={proj} />
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="projects-categories">
        <PersonalProjects />
        <CompanyProjects />
      </div>
    </section>
  );
}
