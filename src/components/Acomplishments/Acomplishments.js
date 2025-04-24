import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxTitle, BoxText, BoxDate, BoxVenue } from './AcomplishmentsStyles';

const publications = [
  {
    title: "Check the color of the tiled building with an emphasis on traditional Safavi mosque",
    venue: "Niavaran Cultural Center",
    date: "Jul 11, 2016",
    conference: "Second International Conference on Architecture, Civil Engineering and Urban Development at the beginning of the third millenium",
    link: "https://civilica.com/doc/531709/"
  },
  {
    title: "Simulation and Analysis of Double-Skin Facade Performance in Optimizing Energy Consumption in Residential Buildings Using DesignBuilder",
    venue: "Wolfsburg/Germany",
    date: "Mar 3, 2025",
    conference: "The first international conference on urban planning, architecture, civil engineering and environment",
    link: "https://civilica.com/doc/2214608/"
  }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Publications</SectionTitle>
    <Boxes>
      {publications.map((pub, index) => (
        <Box key={index} href={pub.link} target="_blank" rel="noopener noreferrer">
          <BoxTitle>{pub.title}</BoxTitle>
          <BoxText>{pub.conference}</BoxText>
          <BoxDate>{pub.date}</BoxDate>
          <BoxVenue>{pub.venue}</BoxVenue>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
