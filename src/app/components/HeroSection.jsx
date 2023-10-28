"use client";
import React from "react";
import {HiArrowNarrowRight} from 'react-icons/hi'
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
import ParticlesContainer from './ParticlesContainer'



const HeroSection = () => {
  return (
    <section name='home' className='w-full py-30 mb-[150px]'>
      <ParticlesContainer/>
      <div style={{ position: 'relative', zIndex: '1' }}>
      <div >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-700">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Mauricio",
                1000,
                "a Software Engineer",
                1000,
                "and a Web Developer",
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div>
          <Link to="projects" smooth={true} duration={500}>
          <button className='text-white group border-2 px-4 sm:px-6 py-2 sm:py-3 my-2 flex items-center justify-center sm:justify-start hover:bg-pink-600 hover:border-pink-600'>
                View Work
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
                </span>
                </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;