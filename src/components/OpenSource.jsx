import React from "react";
import { motion } from "framer-motion";
import { SiReact, SiSpringboot, SiMysql, SiTailwindcss } from "react-icons/si";

const ProgressCard = ({ title, description, stack }) => (
  <motion.div
    className="flex flex-col justify-between px-6 py-6 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 transition-all duration-300 transform border hover:border-transparent dark:border-gray-700 hover:shadow-lg"
    whileInView={{ y: [40, 0], opacity: [0, 1] }}
    transition={{ duration: 1 }}
  >
    <h2 className="font-poppins text-[18px] font-semibold text-white mb-2">
      {title}
    </h2>
    <p className="font-poppins text-[14px] text-dimWhite mb-3">{description}</p>

    <p className="font-poppins font-semibold text-yellow-400 text-[15px]">
      🟡 On Progress
    </p>

    <div className="flex flex-wrap mt-4">
      {stack.map((tech) => (
        <div
          key={tech.id}
          className="flex items-center text-sm text-gray-300 mr-4 mt-2"
        >
          <tech.icon className="mr-2" /> {tech.name}
        </div>
      ))}
    </div>
  </motion.div>
);

const OpenSource = () => {
  const projectsInProgress = [
    {
      title: "A Robust Crowdfunding Platform (AES Encryption & Secure Payments)",
      description:
        "Advanced crowdfunding platform integrating AES encryption and secure payment processing to ensure data integrity and confidentiality.",
      stack: [
        { id: 1, icon: SiReact, name: "React.js" },
        { id: 2, icon: SiSpringboot, name: "Spring Boot" },
        { id: 3, icon: SiMysql, name: "MySQL" },
        { id: 4, icon: SiTailwindcss, name: "Tailwind CSS" },
      ],
    },
    {
      title: "Offensive AI – Adaptive Password & Social Engineering Simulator",
      description:
        "AI-powered simulator mimicking real-world password cracking and social engineering scenarios for ethical cybersecurity training.",
      stack: [
        { id: 1, icon: SiReact, name: "Python" },
        { id: 2, icon: SiSpringboot, name: "Flask" },
        { id: 3, icon: SiMysql, name: "MySQL" },
        { id: 4, icon: SiTailwindcss, name: "AI/ML APIs" },
      ],
    },
  ];

  return (
    <section id="openSource" className="py-10">
      <h1 className="font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px] mb-10">
        Projects On Progress
      </h1>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 justify-center">
        {projectsInProgress.map((project, index) => (
          <ProgressCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default OpenSource;
