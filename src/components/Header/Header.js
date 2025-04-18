import Link from "next/link";
import React from "react";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{ display: "flex", alignItems: "center", color: "white" }}
        passHref
      >
        <img src="/logo.svg" height={40} width={40} alt="Logo" />{" "}
        <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }}>
          Faezeh
        </span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills" legacyBehavior>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <a href="https://blog.vipuljha.com">
          <NavLink>Blog</NavLink>
        </a>
      </li>
    </Div2>
    <Div3>
      <SocialIcons
        href="https://www.youtube.com/@sanooz_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillYoutube size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/sanazshamloo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.instagram.com/sanooz_/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.facebook.com/sanoozz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillFacebook size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
