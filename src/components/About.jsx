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
      >
      Welcome to my portfolio! I'm currently honing my skills as a software developer at the <strong><a href="https://www.glr.nl/opleidingen/software-developer" className='opacity-80 transition-all hover:opacity-100' target='_blank'>Grafisch Lyceum Rotterdam</a></strong>, where I immerse myself in the dynamic world of coding and technology.
      My primary focus lies in front-end development, where I've developed a strong command over HTML, CSS, JavaScript, and modern frameworks like Tailwind and React. 
      These tools are my playground, and I love bringing creative and user-friendly interfaces to life.<br></br><br></br>

      While my expertise is more pronounced in front-end development, I also possess a solid foundation in back-end programming. 
      I've worked with tools like phpMyAdmin, SQLite, and PHP, which have given me valuable insights into server-side development. 
      This experience has sparked a growing interest in me to delve deeper into back-end technologies. 
      My goal is to evolve into a proficient full-stack developer, capable of seamlessly integrating both front and back-end aspects of a project.<br></br><br></br>

      Additionally, I've explored the realms of C#, where I've enjoyed building several projects, primarily focused on terminal applications. 
      These experiences have not only sharpened my technical skills but also broadened my perspective in software development.<br></br><br></br>

      As I continue my journey, I am eager to expand my knowledge and skills, especially in back-end development. 
      I am excited about the opportunities to learn, grow, and contribute to the world of technology.
       Thank you for visiting my portfolio, and I look forward to collaborating on innovative projects that push the boundaries of what's possible.
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