import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Overview of</p>
        <h2 className={styles.sectionHeadText}>My skills.</h2>
        <a href="src/assets/CV.jpg" download="CV.jpg">
          <h3 className={styles.sectionCVText}>Click here to download my CV</h3>
        </a>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px]
      max-w-3xl leading-[30px]"
      >
        Welcome to my portfolio! I'm currently honing my skills as a software
        developer at the{" "}
        <strong>
          <a
            href="https://www.glr.nl/opleidingen/software-developer"
            className="opacity-80 transition-all hover:opacity-100"
            target="_blank"
          >
            Grafisch Lyceum Rotterdam
          </a>
        </strong>
        , where I immerse myself in the dynamic world of coding and technology.
        My primary focus lies in front-end development, where I've developed a
        strong command over HTML, CSS, JavaScript, and modern frameworks like
        Tailwind and React. These tools are my playground, and I love bringing
        creative and user-friendly interfaces to life.<br></br>
        <br></br>
        While I have a strong background in front-end development, I also have a
        solid foundation in back-end programming, with experience in tools like
        phpMyAdmin, SQLite, and PHP. This has kindled my interest in delving
        deeper into back-end technologies, with the aim of becoming a proficient
        full-stack developer.
        <br></br>
        <br></br>I have also worked with C#, primarily in building terminal
        applications, which has enhanced my technical skills and broadened my
        perspective in software development.
        <br></br>
        <br></br>I am committed to expanding my knowledge, particularly in
        back-end development, and am excited about the possibilities for
        learning, growth, and contributing to innovative technology projects.
        Thank you for considering my portfolio.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
