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
      >
        <img src="/logo.svg" height={40} width={40} />{" "}
        <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }}>
          Vipul Jha
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
      <SocialIcons href="https://www.youtube.com/@sanooz_">
        <AiFillYoutube size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/sanazshamloo">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/sanooz_/?hl=en">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/sanoozz">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
