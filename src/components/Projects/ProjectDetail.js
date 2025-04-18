import React from 'react';
import styled from 'styled-components';
import { Section, SectionTitle } from '../../styles/GlobalComponents';

const DetailContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  overflow-y: auto;
  padding: 2rem;
`;

const DetailContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: #1a1a1a;
  border-radius: 12px;
  padding: 2rem;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #333;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover {
    background: #444;
  }
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

const ProjectTitle = styled.h1`
  color: #9cc9e3;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #e4e6e7;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 1rem 0;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const Tag = styled.span`
  background: #333;
  color: #d8bfbf;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
`;

const SectionTitleStyled = styled(SectionTitle)`
  font-size: 1.8rem;
  margin: 1.5rem 0;
`;

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <DetailContainer>
      <DetailContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        
        <SectionTitleStyled>Gallery</SectionTitleStyled>
        <ImageGallery>
          {project.images.map((image, index) => (
            <GalleryImage key={index} src={image} alt={`${project.title} - Image ${index + 1}`} />
          ))}
        </ImageGallery>

        <SectionTitleStyled>Tech Stack</SectionTitleStyled>
        <TagsContainer>
          {project.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagsContainer>
      </DetailContent>
    </DetailContainer>
  );
};

export default ProjectDetail; 