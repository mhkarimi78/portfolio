import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

import {
  BlogCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import styles from "./Projects.module.css";

// Dynamically import ProjectDetail to ensure it's only loaded on the client side
const ProjectDetail = dynamic(() => import('./ProjectDetail'), {
  ssr: false
});

const Projects = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [currentImageIndices, setCurrentImageIndices] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredProjects =
    selectedType === "all"
      ? projects
      : projects.filter((p) => p.type === selectedType);

  useEffect(() => {
    if (!isClient) return;

    // Initialize current image indices for each project
    const initialIndices = {};
    filteredProjects.forEach((project, index) => {
      initialIndices[index] = 0;
    });
    setCurrentImageIndices(initialIndices);

    // Set up intervals for each project
    const intervals = filteredProjects.map((project, projectIndex) => {
      if (!project.images || project.images.length === 0) return null;
      
      return setInterval(() => {
        setCurrentImageIndices((prevIndices) => ({
          ...prevIndices,
          [projectIndex]:
            (prevIndices[projectIndex] + 1) % project.images.length,
        }));
      }, 3000);
    });

    // Clean up intervals on unmount
    return () => {
      intervals.forEach((interval) => interval && clearInterval(interval));
    };
  }, [filteredProjects, isClient]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  // Server-side rendering fallback
  if (!isClient) {
    return (
      <Section id="projects">
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
        <div className={styles.tabContainer}>
          <button className={styles.tabButton}>All</button>
          <button className={styles.tabButton}>Architecture</button>
          <button className={styles.tabButton}>Painting</button>
        </div>
        <GridContainer>
          {filteredProjects.map((p, i) => (
            <BlogCard key={i}>
              <div className={styles.slideshowContainer}>
                {p.images?.[0] && (
                  <Img src={p.images[0]} alt={p.title} />
                )}
              </div>
              <HeaderThree title={p.title}>{p.title}</HeaderThree>
              <Hr />
              <CardInfo className="card-info">{p.description}</CardInfo>
              <div>
                <TitleContent>Tech Stack</TitleContent>
                <Hr />
                <TagList>
                  {p.tags.map((t, i) => (
                    <Tag key={i}>{t}</Tag>
                  ))}
                </TagList>
              </div>
            </BlogCard>
          ))}
        </GridContainer>
      </Section>
    );
  }

  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>

      <div className={styles.tabContainer}>
        <button
          className={styles.tabButton}
          onClick={() => setSelectedType("all")}
        >
          All
        </button>
        <button
          className={styles.tabButton}
          onClick={() => setSelectedType("architecture")}
        >
          Architecture
        </button>
        <button
          className={styles.tabButton}
          onClick={() => setSelectedType("painting")}
        >
          Painting
        </button>
      </div>

      <GridContainer>
        {filteredProjects.map((p, i) => {
          return (
            <BlogCard key={i} onClick={() => handleProjectClick(p)} style={{ cursor: 'pointer' }}>
              <div className={styles.slideshowContainer}>
                {(p.images || []).map((image, imgIndex) => (
                  <Img
                    key={imgIndex}
                    src={image}
                    style={{
                      display:
                        imgIndex === currentImageIndices[i] ? "block" : "none",
                      transition: "opacity 0.5s ease-in-out",
                    }}
                  />
                ))}
              </div>

              <HeaderThree title={p.title}>{p.title}</HeaderThree>
              <Hr />

              <CardInfo className="card-info">{p.description}</CardInfo>
              <div>
                <TitleContent>Tech Stack</TitleContent>
                <Hr />
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
            </BlogCard>
          );
        })}
      </GridContainer>

      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={handleCloseDetail} />
      )}
    </Section>
  );
};

export default Projects;
