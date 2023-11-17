import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'; 
import { SectionWrapper } from '../hoc';

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
          speed: 450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >

          <img src={icon} alt={title}
          className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Overview of</p>
        <h2 className={styles.sectionHeadText}>My skills.</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px]
      max-w-3xl leading-[30px]"

      // <strong><a href="https://www.glr.nl/opleidingen/software-developer" className='opacity-80 transition-all hover:opacity-100' target='_blank'>
      >
      Welcome to my portfolio! As a software developer in training at the<br></br>
      <strong><a href="https://www.glr.nl/opleidingen/software-developer" className='opacity-80 transition-all hover:opacity-100' target='_blank'>Grafisch Lyceum Rotterdam</a></strong>, 
      I specialize in front-end development with expertise in <br></br>HTML, CSS, JavaScript, Tailwind, and React (Soon more).
      I also have a solid grounding in back-end technologies, including phpMyAdmin, SQLite, and PHP, 
      as I work towards becoming a full-stack developer.<br></br><br></br>

      My experience extends to building terminal applications in C#.
       I am committed to expanding my back-end skills and look forward to opportunities that challenge and grow my abilities in the tech world.
        Thank you for visiting my portfolio, and I hope to collaborate on projects that innovate and push technological boundaries.<br></br><br></br>

      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}


export default SectionWrapper(About, "about")