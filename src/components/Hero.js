"use client";

import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import Image from "next/image";

const ROLES = [
  "Software Developer",
  "Web Developer",
  "Problem Solver",
  "Full Stack Engineer",
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const techStack = [
    { name: "React", icon: "/images/react.png" },
    { name: "Next.js", icon: "/images/next.png" },
    { name: "Node.js", icon: "/images/node.png" },
    { name: "Express.js", icon: "/images/expressjs.svg" },
    { name: "MongoDB", icon: "/images/mongodb.png" },
    { name: "TypeScript", icon: "/images/typescript.png" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.greeting}>
              <span className={styles.wave}>👋</span>
              <span>Hello, I'm</span>
            </div>

            <h1 className={styles.name}>
              Muhammad <span className={styles.highlight}>Arbaz</span>
            </h1>

            <div className={styles.roleContainer}>
              <span className={styles.rolePrefix}>I'm a </span>
              <span className={styles.role}>
                <span
                  className={styles.roleTrack}
                  style={{
                    transform: `translateY(-${currentRoleIndex * 1.2}em)`,
                  }}
                >
                  {ROLES.map((role) => (
                    <span key={role} className={styles.roleItem}>
                      {role}
                    </span>
                  ))}
                </span>
              </span>
            </div>

            <p className={styles.description}>
              I build scalable web applications that drive business success.
              With clean, efficient code and innovative solutions, I transform
              complex challenges into user-friendly digital experiences that
              deliver measurable results.
            </p>

            <div className={styles.actions}>
              <button
                onClick={() => scrollToSection("projects")}
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`${styles.btn} ${styles.btnSecondary}`}
              >
                Get In Touch
              </button>
            </div>

            <div className={styles.socialLinks}>
              <a
                href="https://github.com/arbazdogar20"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/muhammadarbazdogar"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775a4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827a4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985c0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.codeVisualization}>
            <div className={styles.codeWindow}>
              <div className={styles.windowHeader}>
                <div className={styles.windowButtons}>
                  <span className={styles.closeBtn}></span>
                  <span className={styles.minimizeBtn}></span>
                  <span className={styles.maximizeBtn}></span>
                </div>
                <span className={styles.fileName}>portfolio.js</span>
              </div>
              <div className={styles.codeContent}>
                <div className={styles.codeLine}>
                  <span className={styles.lineNumber}>1</span>
                  <span
                    className={styles.keyword}
                    style={{ marginRight: "4px" }}
                  >
                    const
                  </span>
                  <span className={styles.variable}>developer</span>
                  <span className={styles.operator}> = </span>
                  <span className={styles.string}>{"{"}</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.lineNumber}>2</span>
                  <span className={styles.property}> name</span>
                  <span className={styles.operator}>: </span>
                  <span className={styles.string}>'Muhammad Arbaz'</span>,
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.lineNumber}>3</span>
                  <span className={styles.property}> skills</span>
                  <span className={styles.operator}>: </span>
                  <span className={styles.string}>
                    ['React', 'Node.js', 'Next.js']
                  </span>
                  ,
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.lineNumber}>4</span>
                  <span className={styles.property}> passion</span>
                  <span className={styles.operator}>: </span>
                  <span className={styles.string}>'Building Amazing Apps'</span>
                  ,
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.lineNumber}>5</span>
                  <span className={styles.property}> hireable</span>
                  <span className={styles.operator}>: </span>
                  <span className={styles.boolean}>true</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.lineNumber}>6</span>
                  <span className={styles.string}>{"}"}</span>;
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className={styles.techStack}>
              {techStack.map((tech, index) => (
                <div className={styles.techItem} key={index}>
                  <div className={styles.techIcon}>
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={20}
                      height={20}
                    />
                  </div>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <button
            onClick={() => scrollToSection("about")}
            className={styles.scrollButton}
            aria-label="Scroll to about section"
          >
            <span className={styles.scrollText}>Scroll Down</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
