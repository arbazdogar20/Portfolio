"use client";

import styles from "./Skills.module.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "HTML5 & CSS3",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Python", "REST APIs", "GraphQL"],
    },
    {
      title: "Database & Storage",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Vercel", "CI/CD", "Linux"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Figma", "Jest", "Webpack", "VS Code"],
    },
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Technical Skills</h2>
          <p>
            Technologies and frameworks I work with to build robust applications
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
