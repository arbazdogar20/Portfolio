import styles from "./About.module.css";

const About = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Desol Int.",
      period: "2022 - 2024",
      description:
        "Leading development of scalable web applications using React, Next.js, Node.js, and AWS. Mentoring junior developers and implementing best practices.",
    },
    // {
    //   title: "Full Stack Developer",
    //   company: "Digital Agency Co.",
    //   period: "2021 - 2022",
    //   description:
    //     "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create responsive user interfaces.",
    // },
    // {
    //   title: "Frontend Developer",
    //   company: "StartUp Ventures",
    //   period: "2020 - 2021",
    //   description:
    //     "Built interactive user interfaces using React and TypeScript. Optimized application performance and improved user experience.",
    // },
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "AWS Certified",
      description: "Solutions Architect Associate",
    },
    {
      icon: "⚡",
      title: "Performance Expert",
      description: "Improved app speed by 60%",
    },
    {
      icon: "👥",
      title: "Team Leader",
      description: "Led 5+ developer teams",
    },
    {
      icon: "🚀",
      title: "Product Launch",
      description: "15+ successful deployments",
    },
  ];

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className={styles.content}>
          <div className={styles.intro}>
            <div className={styles.introText}>
              <h3 className={styles.introTitle}>
                Crafting Digital Experiences with Passion & Precision
              </h3>
              <p className={styles.introDescription}>
                I'm a passionate Full Stack Developer with over 3 years of
                experience in building modern web applications. I love creating
                seamless user experiences and robust backend systems that scale.
                My journey in tech started with curiosity and has evolved into a
                dedication to write clean, efficient code that solves real-world
                problems.
              </p>
            </div>

            {/* Achievements */}
            {/* <div className={styles.achievements}>
              {achievements.map((achievement, index) => (
                <div key={index} className={styles.achievement}>
                  <span className={styles.achievementIcon}>
                    {achievement.icon}
                  </span>
                  <div className={styles.achievementContent}>
                    <h4 className={styles.achievementTitle}>
                      {achievement.title}
                    </h4>
                    <p className={styles.achievementDescription}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Experience */}
          <div className={styles.experience}>
            <h3 className={styles.sectionSubtitle}>Professional Experience</h3>
            <div className={styles.timeline}>
              {experiences.map((exp, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineHeader}>
                      <h4 className={styles.experienceTitle}>{exp.title}</h4>
                      <span className={styles.experiencePeriod}>
                        {exp.period}
                      </span>
                    </div>
                    <p className={styles.experienceCompany}>{exp.company}</p>
                    <p className={styles.experienceDescription}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Info */}
        {/* <div className={styles.personalInfo}>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Location</span>
              <span className={styles.infoValue}>San Francisco, CA</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Experience</span>
              <span className={styles.infoValue}>3+ Years</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Email</span>
              <span className={styles.infoValue}>john.doe@email.com</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Languages</span>
              <span className={styles.infoValue}>English, Spanish</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
