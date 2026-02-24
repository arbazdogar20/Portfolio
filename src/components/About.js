"use client";
import styles from "./About.module.css";

const About = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Desol Int.",
      period: "2022 - 2024",
      achievements: [
        "Delivered end-to-end features across 5 core technologies: React, Next.js, Node.js, MongoDB, and Socket.io.",
        "Mentored junior developers through code reviews and practical implementation guidance.",
        "Applied scalable architecture and clean coding standards to improve long-term maintainability.",
      ],
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Socket.io"],
    },
  ];

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">About Me</h2>
          <p className={styles.headerSubtitle}>
            Passionate developer turning ideas into digital reality
          </p>
        </div>

        {/* Experience Timeline */}
        <div className={styles.experienceSection}>
          <div className={styles.timeline}>
            {experiences.map((exp, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineMarker}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineLine}></div>
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineCard}>
                    <div className={styles.cardHeader}>
                      <h4 className={styles.jobTitle}>{exp.title}</h4>
                      <span className={styles.period}>{exp.period}</span>
                    </div>
                    <p className={styles.company}>{exp.company}</p>
                    <ul className={styles.achievements}>
                      {exp.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className={styles.achievementItem}
                        >
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    <div className={styles.technologies}>
                      {exp.technologies.map((tech) => (
                        <span key={tech} className={styles.tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
