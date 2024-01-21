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
        <p className={styles.sectionSubText}>Overzicht van</p>
        <h2 className={styles.sectionHeadText}>Mijn vaardigheden</h2>
        <a href="assets/NLCV.pdf" download="NLCV.pdf">
          <h3 className={styles.sectionCVText}>
            Klik hier om mijn CV te downloaden
          </h3>
        </a>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px]
      max-w-3xl leading-[30px]"
      >
        Welkom op mijn portfolio! Ik ben momenteel mijn vaardigheden aan het
        aanscherpen als softwareontwikkelaar bij de{" "}
        <strong>
          <a
            href="https://www.glr.nl/opleidingen/software-developer"
            className="opacity-80 transition-all hover:opacity-100"
            target="_blank"
          >
            Grafisch Lyceum Rotterdam
          </a>
        </strong>
        , waar ik mezelf onderdompel in de dynamische wereld van programmeren en
        technologie. Mijn voornaamste focus ligt op front-end ontwikkeling, waar
        ik een sterke beheersing heb ontwikkeld over HTML, CSS, JavaScript en
        moderne frameworks zoals Tailwind en React. Deze tools zijn mijn
        speelterrein, en ik hou ervan om creatieve en gebruiksvriendelijke
        interfaces tot leven te brengen.<br></br>
        <br></br>
        Ondanks dat ik een sterke achtergrond heb in front-end ontwikkeling, heb
        ik ook een solide basis in back-end programmeren, met ervaring in tools
        als phpMyAdmin, SQLite, en PHP. Dit heeft mijn interesse gewekt om
        dieper in te gaan op back-end technologieën, met als doel een vaardige
        full-stack ontwikkelaar te worden.
        <br></br>
        <br></br>Ik heb ook gewerkt met C#, voornamelijk in het bouwen van
        terminal applicaties, wat mijn technische vaardigheden heeft verbeterd
        en mijn perspectief op softwareontwikkeling heeft verbreed. Ik heb ook
        interesse in het ontwikkelen van mobiele applicaties met Flutter & Dart,
        met Firebase als extra voor backend systemen.
        <br></br>
        <br></br>Ik ben toegewijd aan het uitbreiden van mijn kennis, met name
        op het gebied van back-end ontwikkeling, en ik ben enthousiast over de
        mogelijkheden voor leren, groei en het bijdragen aan innovatieve
        technologieprojecten. Bedankt voor het overwegen van mijn portfolio.
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
