"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <button
            onClick={() => scrollToSection("hero")}
            className={styles.logoButton}
          >
            <span className={styles.logoText}>MA</span>
          </button>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className={styles.navLink}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("skills")}
                className={styles.navLink}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className={styles.navLink}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className={styles.navLink}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <a
            href="/cv/Muhammad-Arbaz-Dogar.pdf"
            download="Muhammad_Arbaz_Dogar_CV.pdf"
            className={`btn btn-secondary ${styles.cvButton}`}
          >
            Download CV
          </a>

          <button
            className={`${styles.menuToggle} ${
              isMenuOpen ? styles.menuToggleOpen : ""
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
