import React, { useState } from 'react';
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
  padding: 1rem;
`;

const DetailContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: #1a1a1a;
  border-radius: 12px;
  padding: 1.5rem;
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

const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background1};
  margin: 0.5rem 0;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center;
  transition: opacity 0.5s ease;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ProjectTitle = styled.h1`
  color: #9cc9e3;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  padding-right: 2rem;
`;

const ProjectDescription = styled.p`
  color: #e4e6e7;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0.5rem 0;
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
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
`;

const SectionTitleStyled = styled(SectionTitle)`
  font-size: 1.4rem;
  margin: 1rem 0;
`;

const ImageControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  margin: 0.5rem 0;
`;

const ControlButton = styled.button`
  background: #333;
  color: white;
  border: none;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background: #444;
  }
`;

const ImageCounter = styled.span`
  color: #e4e6e7;
  font-size: 0.9rem;
`;

const NoImagesMessage = styled.div`
  text-align: center;
  color: #666;
  font-style: italic;
  padding: 2rem;
  width: 100%;
`;

const ProjectDetail = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    if (!project.images || project.images.length === 0) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    if (!project.images || project.images.length === 0) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <DetailContainer>
      <DetailContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        
        <SectionTitleStyled>Gallery</SectionTitleStyled>
        <ImageContainer>
          {(project.images || []).map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${project.title} - Image ${index + 1}`}
              isActive={currentImageIndex === index}
            />
          ))}
          {(!project.images || project.images.length === 0) && (
            <NoImagesMessage>No images available for this project</NoImagesMessage>
          )}
        </ImageContainer>
        {project.images && project.images.length > 1 && (
          <ImageControls>
            <ControlButton onClick={prevImage}>←</ControlButton>
            <ImageCounter>
              {currentImageIndex + 1} / {project.images.length}
            </ImageCounter>
            <ControlButton onClick={nextImage}>→</ControlButton>
          </ImageControls>
        )}

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