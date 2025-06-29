import { useState, useEffect, useRef } from "react";
import useScrollSpy from "./hooks/useScrollSpy";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonalDetails from "./components/PersonalDetails";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CertificationsAwards from "./components/CertificationsAwards";
import BackToTopButton from "./components/BackToTopButton";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showTitle, setShowTitle] = useState(() => typeof window !== 'undefined' ? window.scrollY <= 60 : true);
  const [compactHeader, setCompactHeader] = useState(() => typeof window !== 'undefined' ? window.scrollY > 60 : false);
  const [activeSection, setActiveSection] = useState("about");
  const timer = useRef();

  useScrollSpy(setActiveSection);

  useEffect(() => {
    const handleScroll = () => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        if (window.scrollY > 60) {
          setShowTitle(false);
          setCompactHeader(true);
        } else {
          setShowTitle(true);
          setCompactHeader(false);
        }
      }, 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Header showTitle={showTitle} compact={compactHeader} activeSection={activeSection} />
      <div className="app-container">
        <button
          className="toggle-mode-btn"
          onClick={() => setDarkMode((d) => !d)}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? "🌙 Night" : "☀️ Light"}
        </button>
        <section id="about"><PersonalDetails /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="certifications-awards"><CertificationsAwards /></section>
      </div>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
