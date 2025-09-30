"use client";
import styles from "./About.module.css";

const About = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Desol Int.",
      period: "2022 - 2024",
      description:
        "Leading development of scalable web applications using React, Next.js, Node.js, and MongoDB. Mentoring junior developers and implementing best practices.",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Socket.io"],
    },
    {
      title: "Frontend Developer",
      company: "Tech Solutions",
      period: "2021 - 2022",
      description:
        "Built responsive web applications with modern JavaScript frameworks. Collaborated with design teams to create pixel-perfect user interfaces.",
      technologies: ["React", "JavaScript", "CSS3", "Git"],
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
                    <p className={styles.jobDescription}>{exp.description}</p>
                    <div className={styles.technologies}>
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={styles.tech}>
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
