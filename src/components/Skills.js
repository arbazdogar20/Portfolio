"use client";

import styles from "./Skills.module.css";

const PRIMARY_SKILLS = new Set([
  "React",
  "Node.js",
  "Next.js",
  "TypeScript",
  "MongoDB",
  "AWS",
]);

const SKILL_ICONS = {
  React: "⚛️",
  "Next.js": "▲",
  JavaScript: "🟨",
  TypeScript: "🔷",
  "Node.js": "🟢",
  "Express.js": "🚀",
  Python: "🐍",
  "REST APIs": "🔌",
  GraphQL: "◈",
  PostgreSQL: "🐘",
  MongoDB: "🍃",
  Redis: "🧠",
  Firebase: "🔥",
  AWS: "☁️",
  Docker: "🐳",
  Vercel: "▴",
  "CI/CD": "⚙️",
  Linux: "🐧",
  Git: "⑂",
  Figma: "🎨",
  Jest: "🧪",
  Webpack: "📦",
  "VS Code": "🧩",
  "Tailwind CSS": "🌬️",
  "HTML5 & CSS3": "🧱",
};

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
          {skillCategories.map((category) => (
            <article key={category.title} className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`${styles.skillTag} ${
                      PRIMARY_SKILLS.has(skill) ? styles.primarySkill : ""
                    }`}
                  >
                    <span className={styles.skillIcon} aria-hidden="true">
                      {SKILL_ICONS[skill] || "•"}
                    </span>
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
