"use client"

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import YNC from '../assets/ync.png'
import HP from '../assets/hp.png'
import S2T from '../assets/s2t.png'
import Image from "next/image";

import "react-vertical-timeline-component/style.min.css";



const experiences = [
    {
      title: "Student",
      company_name: "Yale-NUS College",
      icon: YNC,
      iconBg: "#FFF",
      date: "August 2020 - May 2024",
      points: [
        "I started my academic career as a Physics Student as I enjoyed the problem solving aspect of it",
        "In my the second half of my third year I realized I wanted to work on more concrete and real world problems so I pivoted to Computer Science",
        "Albeit a late start, I dove deep into Computer Science and fell in love with web development by building personal projects",
      ],
    },
    {
      title: "e-Commerce Testing Lead (Intern)",
      company_name: "HP",
      icon: HP,
      iconBg: "#FFF",
      date: "Feb 2023 - Jun 2023",
      points: [
        "Initiated and led Testing Automation for 16 APAC/LATAM e-Commerce platforms",
        "Created and formatted over 1000 BBD test cases",
        "Familiarized myself with Agile method",
      ],
    },
    {
    title: "Front End Developer (Intern)",
    company_name: "S2T Unlocking Cyberspace",
    icon: S2T,
    iconBg: "#FFF",
    date: "Jun 2023 - Aug 2023",
    points: [
        "Developed interactive user interfaces and components using React.js to enhance the functionality and responsiveness of web applications",
        "Collaborated closely with senior developers to debug and troubleshoot frontend issues and optimize website performance",
        "Communicated with cross-functional teams to gather requirements and provide progress updates",

    ],
      },
]


const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        visibility: "visible"
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631",  visibility: "visible" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, visibility: "visible"  }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section name='experience' className='w-full min-h-screen lg:py-16 mb-16' id="experience">
    <motion.div>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
          My Timeline
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline className="visibility:visible">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;