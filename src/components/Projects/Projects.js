import React, { useState, useEffect } from "react";

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
import ProjectDetail from "./ProjectDetail";

const Projects = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [currentImageIndices, setCurrentImageIndices] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedType === "all"
      ? projects
      : projects.filter((p) => p.type === selectedType);

  useEffect(() => {
    // Initialize current image indices for each project
    const initialIndices = {};
    filteredProjects.forEach((project, index) => {
      initialIndices[index] = 0;
    });
    setCurrentImageIndices(initialIndices);

    // Set up intervals for each project
    const intervals = filteredProjects.map((project, projectIndex) => {
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
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [filteredProjects]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

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
                {p.images.map((image, imgIndex) => (
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
