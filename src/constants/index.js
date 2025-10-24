import {
  gdsc,
  portfolio,
  oracle,
  klUniversity,
  davSchool,
  snjCollege,
  sih,
  patent,
  edu,
  crowd,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlask,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiTypescript,
  SiOracle,
  SiGmail,
  SiGooglesheets,
  SiThirdweb,
  SiIntellijidea
} from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiJenkins, SiKubernetes, SiCanva } from "react-icons/si";


import { FaHardHat, FaRust } from "react-icons/fa";

import { IoIosNotificationsOutline } from "react-icons/io";

import { FaGolang, FaXTwitter } from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { BiLogoVisualStudio } from "react-icons/bi";

import { RiGeminiFill } from "react-icons/ri";

export const resumeLink =
  "https://drive.google.com/file/d/1L1mqSbon1li7F-cRO4aou993sJbLFQjL/view?usp=drive_link";
export const repoLink = "https://github.com/godavarthibhargava/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/godavarthibhargava/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "openSource",
    title: "On Progress Projects",
  },
  
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: klUniversity,
    title: "KL University, Vijayawada",
    degree: "Bachelor of Technology",
    duration: "2023 - 2027",
    content1: "Major: Computer Science & Engineering",
    content2:"Specialization: Cyber Security & BlockChain Technology",
    content3: "CGPA: 9.54/10.0",
  },
  {
    id: "education-2",
    icon: snjCollege,
    title: "SNJ College",
    degree: "HSC (TSBIE)",
    duration: "2021 -2023",
    content1: "Physics, Chemistry, & Mathematics",
    content2: "Percentage: 94.9%",
  },
  {
    id: "education-3",
    icon: davSchool,
    title: "D.A.V Model School",
    degree: "SSC (TSBSE)",
    duration: "2021",
    content1: "Percentage: 100%",
    content2: "",
  },
];

// Add your past achievements here for example - rankings in hackathons/events
// Add your past achievements here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: patent,
    event: "Patent: Mobile-Controlled Water Fetching Robot",
    position: "Patent Filed",
    content1: "Application No. 202541073136 A, August 2025",
    content2: "Enables autonomous water retrieval serving 8,000+ households with 70% cost reduction",
    content3: "",
    article: "",
    project: "",
    youtube: "",
  },
  {
    id: "a-2",
    icon: sih, // or replace with your klu.png once added to assets
    event: "Smart India Hackathon 2025 - Internal Round",
    position: "Team Lead | Top 45 out of 450+ Teams",
    content1: "Led a team representing KL University in the internal round of SIH 2025.",
    content2: "Our innovative project idea was selected among the top 45 teams from over 450+ participants.",
    content3: "Collaborated with teammates on real-world problem statements with strong leadership and teamwork.",
    article: "", // optional link to article or certificate
    project: "", // optional project link
    youtube: "", // optional video link
  },
  {
    id: "a-3",
    icon: klUniversity,
    event: "Academic Excellence",
    position: "CGPA Achievement",
    content1: "Maintained a cumulative CGPA of 9.54 / 10.0 in B.Tech CSE at KL University.",
    content2: "Consistent top performer with strong focus on full-stack development, data structures, and emerging technologies.",
    content3: "",
    article: "",
    project: "",
    youtube: "",
  },
];


// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      { id: "pl-1", icon: DiJava, name: "Java" },
      { id: "pl-2", icon: SiC, name: "C" },
      { id: "pl-3", icon: SiJavascript, name: "JavaScript" },
      { id: "pl-4", icon: AiFillHtml5, name: "HTML" },
      { id: "pl-5", icon: DiCss3, name: "CSS" },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      { id: "f-1", icon: SiReact, name: "React.js" },
      { id: "f-2", icon: SiTailwindcss, name: "Tailwind CSS" },
      { id: "f-3", icon: SiBootstrap, name: "Bootstrap" },
      { id: "f-4", icon: DiJava, name: "Spring Boot" }, // Added Spring Boot
    ],
  },
  {
    title: "Tools & Technologies",
    items: [
      { id: "t-1", icon: SiMysql, name: "MySQL" },
      { id: "t-2", icon: SiPostman, name: "Postman" },
      { id: "t-3", icon: BiLogoVisualStudio, name: "VS Code" },
      { id: "t-4", icon: SiGit, name: "Git" },
      { id: "t-5", icon: AiFillGithub, name: "GitHub" },
      { id: "t-6", icon: SiNetlify, name: "Netlify" },
      { id: "t-7", icon: SiVite, name: "ViteJS" },
      { id: "t-8", icon: FaDocker, name: "Docker" }, // Added Docker
      { id: "t-9", icon: SiJenkins, name: "Jenkins" }, // Added Jenkins
      { id: "t-10", icon: SiKubernetes, name: "Kubernetes" }, // Added Kubernetes
      { id: "t-11", icon: SiCanva, name: "Canva" }, // Added Canva
    ],
  },
];


// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "KL University",
    logo: oracle,
    link: "https://www.kluniversity.in/",
    positions: [
      {
        title: "Event Designer (Official)",
        duration: "2024 - Present",
        content: [
          {
            text: "Designed 10+ brochures, 30+ posters for 12+ official college fests, achieving 35% increase in event visibility.",
            link: "",
          },
          {
            text: "Collaborated with 16+ student clubs increasing participation by 50% across 2,500+ students.",
            link: "",
          },
        ],
      },
      {
        title: "Social Intern",
        duration: "May 2024",
        content: [
          {
            text: "Participated in KLU Social Internship Program contributing to 8+ social impact projects reaching 300+ community members.",
            link: "",
          },
          {
            text: "Organized 15+ awareness campaigns, 40+ surveys across 10+ local communities, achieving 90% participant satisfaction.",
            link: "",
          },
        ],
      },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "EduVibe Learning Management System",
    github: "https://github.com/GodavarthiBhargava/SDP-EDUVIBE",
    // link: "https://eduvibe-lms.netlify.app/",
    image: edu,
    content:
      "Developed full-stack LMS using React, Spring Boot, MySQL with JWT authentication serving 800+ users with 99% uptime. Designed 3 user roles with CRUD operations for 300+ courses, 800+ assignments, deployed on Railway/Render platforms.",
    stack: [
      { id: "proj1-icon-1", icon: SiReact, name: "React.js" },
      { id: "proj1-icon-2", icon: DiJava, name: "Spring Boot" },
      { id: "proj1-icon-3", icon: SiMysql, name: "MySQL" },
      { id: "proj1-icon-4", icon: SiTailwindcss, name: "TailwindCSS" },
    ],
  },
  {
    id: "project-2",
    title: "Crowdfunding Platform",
    github: "https://github.com/GodavarthiBhargava/SDP-CROWDFUNDING-DOCKER",
    image: crowd,
    content:
      "Developed full-stack crowdfunding platform using React, Spring Boot, MySQL processing 30K+ transactions with 100% security. Implemented 3 user roles with CRUD operations for 150+ projects, 500+ contributions, deployed achieving 95% uptime.",
    stack: [
      { id: "proj2-icon-1", icon: SiReact, name: "React.js" },
      { id: "proj2-icon-2", icon: DiJava, name: "Spring Boot" },
      { id: "proj2-icon-3", icon: SiMysql, name: "MySQL" },
      { id: "proj2-icon-4", icon: SiTailwindcss, name: "TailwindCSS" },
    ],
  },

];


// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "GitHub Commits",
    value: "400+",
  },
  {
    id: "stats-2",
    title: "Projects Built",
    value: "12+",
  },
  {
    id: "stats-3",
    title: "Tools Proficiency",
    value: "8+",
  },
];



// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/godavarthibhargava/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/godavarthibhargava",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:bhargava9553@gmail.com",
  },
];

// Your professional summary
export const aboutMe = {
  name: "G Bhargava",
  githubUsername: "godavarthibhargava",
  tagLine:
    "Undergraduate (3rd Year) | Computer Science & Engineering | KL University | Patent Holder",
  intro:
    "Passionate Computer Science student with expertise in full-stack development, event management, and social impact initiatives.",
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
  "godavarthibhargava/eduvibe-lms",
  "godavarthibhargava/crowdfunding-platform",
  "godavarthibhargava/personal-portfolio",
];

