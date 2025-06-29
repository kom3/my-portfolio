import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import portfolioData from "../portfolioData";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <a
          href={portfolioData.ContactDetails.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a href={portfolioData.ContactDetails.email} aria-label="Gmail">
          <FaEnvelope />
        </a>
        <a
          href={portfolioData.ContactDetails.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}
