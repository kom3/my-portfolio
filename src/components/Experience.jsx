import portfolioData from "../portfolioData";

const experience = portfolioData.experience;

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2>Experience Path</h2>
      <div className="experience-path">
        {experience.map((exp) => (
          <div key={exp.role + exp.company} className="exp-item" style={{ marginBottom: "1.2rem" }}>
            <strong>{exp.years}:</strong> {exp.role} at {exp.company}
            <div
              style={{
                fontSize: "0.98rem",
                color: "#666",
                marginTop: "0.2rem",
              }}
            >
              {exp.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
