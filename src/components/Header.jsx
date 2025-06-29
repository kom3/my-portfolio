export default function Header({ showTitle = true, compact = false, activeSection }) {
  return (
    <header className={`site-header sticky-nav${compact ? " compact" : ""}`}>
      <h1 className={`site-title${showTitle ? " show" : " hide"}`}>My Portfolio</h1>
      <nav className="site-nav" aria-label="Main Navigation">
        <a href="#about" tabIndex={0} aria-label="About section" className={activeSection === "about" ? "active" : ""}>About</a>
        <a href="#skills" tabIndex={0} aria-label="Skills section" className={activeSection === "skills" ? "active" : ""}>Skills</a>
        <a href="#experience" tabIndex={0} aria-label="Experience section" className={activeSection === "experience" ? "active" : ""}>Experience</a>
        <a href="#projects" tabIndex={0} aria-label="Projects section" className={activeSection === "projects" ? "active" : ""}>Projects</a>
        <a href="#certifications-awards" tabIndex={0} aria-label="Certifications and Awards section" className={activeSection === "certifications-awards" ? "active" : ""}>Certifications & Awards</a>
      </nav>
    </header>
  );
}
