import React from "react";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonLink from "../components/ButtonLink";
import MotionFadeIn from "../components/animations/MotionFadeIn";
import MotionSlideUp from "../components/animations/MotionSlideUp";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Section from "../components/Section";
import Banner from "./Banner";
import BannerSection from "../components/BannerSection";
import Experience from "./Experience";

export default function Home() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* <Navbar></Navbar> */}{" "}
      <BannerSection id="home">
        <Banner />
      </BannerSection>
      <Section
        id="about"
        className="container"
        title="Who I Am"
        subtitle="A Frontend Developer focused on creating clean, modern, and user-friendly digital experiences."
      >
        <About />
      </Section>
      <Section
        id="skills"
        className="container"
        title="What I’m Good At"
        subtitle="The tools and technologies that power my front-end craft."
      >
        <Skills />
      </Section>
      <Section
        id="experience"
        className="container"
        title="How My Journey Began"
        subtitle="Projects that helped me improve and grow as a frontend developer"
      >
        <Experience />
      </Section>
      <Section
        id="projects"
        className="container"
        title="What I’ve Created"
        subtitle="Hands-on projects that reflect my learning and development in frontend"
      >
        <Projects />
      </Section>
      <Section
        id="contact"
        className="container"
        title="Contact"
        subtitle="Got a project or idea in mind? I’d love to collaborate and bring it to life."
      >
        <Contact />
      </Section>
    </div>
  );
}
