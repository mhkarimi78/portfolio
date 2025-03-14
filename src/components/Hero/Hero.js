import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          I'm Faezeh,
        </SectionTitle>
        <SectionText>
          I am Faezeh, an architect, interior designer, and artist with a strong
          focus on innovative and environmentally conscious design. With a
          Master’s degree in Architecture, I blend creativity with technical
          expertise to craft unique spaces and artworks. Alongside my
          architectural work, I am also a painter, expressing my artistic vision
          through various mediums. I continuously refine my skills in
          architectural modeling and digital visualization, using advanced
          design tools to bring my ideas to life.
        </SectionText>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/files/resume.pdf";
          }}
        >
          My Resume
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
