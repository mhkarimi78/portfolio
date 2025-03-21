import React, { useState } from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import styles from './Projects.module.css';

const Projects = () => {
  const [selectedType, setSelectedType] = useState('all');

  const filteredProjects = selectedType === 'all' 
    ? projects 
    : projects.filter(p => p.type === selectedType);

  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      
      <div className={styles.tabContainer}>
        <button className={styles.tabButton} onClick={() => setSelectedType('all')}>All</button>
        <button className={styles.tabButton} onClick={() => setSelectedType('architecture')}>Architecture</button>
        <button className={styles.tabButton} onClick={() => setSelectedType('painting')}>Painting</button>
      </div>

      <GridContainer>
        {filteredProjects.map((p, i) => {
          return (
            <BlogCard key={i}>
              <Img src={p.image} />

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
              <UtilityList>
                <ExternalLinks href={p.visit}>Live Preview</ExternalLinks>
                <ExternalLinks href={p.source}>Source Code</ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  );
};

export default Projects;