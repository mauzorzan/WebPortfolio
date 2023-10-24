"use client";
import React from "react";
import SkillsCards from '../components/SkillsCards'


const AboutSection = () => {

  return (
    <section name= 'about' className='w-full h-screen text-white lg:mb-[20px] lg:py-16 sm:mb-[80px]' id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg mb-4">
          I&apos;m in my final year at Yale-NUS College in Singapore pursuing my bachelor&apos;s in Mathematical, Computational and Statistical Sciences. I&apos;m passionate about problem-solving and enjoy the process of diving deep into code 
          to find elegant solutions. 
          {/* <br/>Whether it&apos;s building responsive layouts, optimizing website 
          performance, or creating seamless user interfaces, I&apos;m always up for the challenge.
          <br/>As a continuous learner, I stay updated with the latest web technologies and best practices. I believe in the power of collaboration and am excited to work with talented individuals and teams to create exceptional web experiences that leave a lasting impression.    */}
          </p>
         
        </div>
        <div>
            <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
            <p>Click to flip</p>
            
            <SkillsCards/>

         

        </div>
      </div>
    </section>
  );
};

export default AboutSection;