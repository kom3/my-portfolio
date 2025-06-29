import { useEffect, useRef } from "react";

const sectionIds = ["about", "skills", "experience", "projects", "certifications-awards"];

export default function useScrollSpy(setActiveSection) {
  const observer = useRef();

  useEffect(() => {
    const handleScroll = () => {
      let found = false;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && window.scrollY + 290 >= section.offsetTop) {
          setActiveSection(sectionIds[i]);
          found = true;
          break;
        }
      }
      if (!found) setActiveSection(sectionIds[0]);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);
}
