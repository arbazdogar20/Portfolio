"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Projects.module.css";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.",
      image: "/images/project-1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
      category: "fullstack",
      demoUrl: "https://demo-ecommerce.vercel.app",
      githubUrl: "https://github.com/johndoe/ecommerce-platform",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application built with Next.js and Firebase. Real-time updates, team collaboration, and project tracking capabilities.",
      image: "/images/project-2.jpg",
      technologies: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS"],
      category: "frontend",
      demoUrl: "https://task-manager-demo.vercel.app",
      githubUrl: "https://github.com/johndoe/task-manager",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics. Mobile-responsive design with PWA capabilities.",
      image: "/images/project-3.jpg",
      technologies: ["React", "OpenWeather API", "Chart.js", "PWA"],
      category: "frontend",
      demoUrl: "https://weather-dashboard-demo.vercel.app",
      githubUrl: "https://github.com/johndoe/weather-dashboard",
      featured: false,
    },
    {
      id: 4,
      title: "REST API Server",
      description:
        "Scalable REST API built with Node.js and Express, featuring JWT authentication, rate limiting, data validation, and comprehensive API documentation.",
      image: "/images/project-4.jpg",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Swagger"],
      category: "backend",
      demoUrl: "https://api-demo.herokuapp.com/docs",
      githubUrl: "https://github.com/johndoe/rest-api-server",
      featured: false,
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management with data visualization, scheduling capabilities, and multi-platform integration.",
      image: "/images/project-5.jpg",
      technologies: ["React", "D3.js", "Node.js", "Redis", "Socket.io"],
      category: "fullstack",
      demoUrl: "https://social-dashboard-demo.vercel.app",
      githubUrl: "https://github.com/johndoe/social-dashboard",
      featured: true,
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website built with Next.js, featuring smooth animations, dark mode support, and optimized performance.",
      image: "/images/project-6.jpg",
      technologies: ["Next.js", "CSS Modules", "Framer Motion", "Vercel"],
      category: "frontend",
      demoUrl: "https://johndoe-portfolio.vercel.app",
      githubUrl: "https://github.com/johndoe/portfolio",
      featured: false,
    },
  ];

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className={styles.intro}>
          <p className={styles.introText}>
            Here are some of my recent projects that showcase my skills and
            passion for creating innovative solutions. Each project represents a
            unique challenge and learning experience.
          </p>
        </div>

        {/* All Projects */}
        <div className={styles.allProjectsSection}>
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className={styles.image}
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.overlayActions}>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.overlayLink}
                        title="Live Demo"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15,3 21,3 21,9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.overlayLink}
                        title="View Code"
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
                    </div>
                  </div>
                </div>
                <div className={styles.projectContent}>
                  <h4 className={styles.projectTitle}>{project.title}</h4>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                  <div className={styles.technologies}>
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.moreProjects}>
          <p className={styles.moreText}>Want to see more of my work?</p>
          <a
            href="https://github.com/arbazdogar20"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
