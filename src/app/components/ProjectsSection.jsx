"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Threads clone",
    description: "Built with Next.js and MongoDB, this modern social media app takes inspiration from Meta's Threads. In it, users can create an account through Clerk to post threads, reply to friends, join communities and much more. ",
    image: "/images/projects/Threads.png",
    tag: ["All", "Full-Stack"],
    gitUrl: "https://github.com/mauzorzan/Threads",
    previewUrl: "https://mauzorzan-threads.vercel.app/",
  },
  {
    id: 2,
    title: "GymHub",
    description: "Built with React, this dynamic and user-friendly platform seamlessly integrates with RapidAPI, providing instant access to a vast database of exercises.",
    image: "/images/projects/GymHub.jpeg",
    tag: ["All"],
    gitUrl: "https://github.com/mauzorzan/GymHub/",
    previewUrl: "https://mauzorzan.github.io/GymHub/",
  },
  {
    id: 3,
    title: "PriceTracker",
    description: "This Amazon web scraper shows the information of a product and its price history from its Amazon link. Using CronJob, it will periodically check the price and send an alert to the user when the price is lowest.",
    image: "/images/projects/pricetracker.png",
    tag: ["All", "Full-Stack"],
    gitUrl: "https://github.com/mauzorzan/PriceTracker",
    previewUrl: "https://mauzorzan-pricetracker.vercel.app/",
  },
  {
    id: 4,
    title: "AlgoVisualizer",
    description: "A web-based pathfinding visualizer that allows users to interactively explore and visualize various pathfinding algorithms and maze generation techniques. This was submitted as my final project for my Data Structures and Algorithms class",
    image: "/images/projects/algovisualizer.png",
    tag: ["All"],
    gitUrl: "https://github.com/mauzorzan/AlgoVisualizer",
    previewUrl: "https://ysc2229-s1-23.github.io/final-project-mauzorzan/",
  },
  {
    id: 5,
    title: "Django Chatbot",
    description: "This interactive chat platform that combines Django with the OpenAI API to provide user authentication and chat history storage.",
    image: "/images/projects/Chatbot.png",
    tag: ["All"],
    gitUrl: "https://github.com/mauzorzan/ChatBot",
    previewUrl: "https://github.com/mauzorzan/ChatBot",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section name='projects' className='w-full h-auto text-white py-16' id="projects">
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Full-Stack"
          isSelected={tag === "Full-Stack"}
        />
      </div>
      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
