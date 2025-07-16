import {
  AI_Agent,
  Bootstrap,
  CSS,
  // Portfolio,
  CURD_Django,
  CURD_React,
  Custom_Modification,
  Django,
  ExpressJS,
  Git,
  Github,
  HTML,
  JavaScript,
  MongoDB,
  MySql,
  NodeJS,
  Portfolio_1,
  Python,
  ReactJS,
  Report_Card,
  TailwindCSS,
  Todo_List,
  TypeScript,
  VSCode,
  Web_Scrapping,
} from "./assets/export";
// import { FoundationalAI, Webexcep, GirlScript, Hack2Skill } from './assets/export';
import { DAFFODIL, SIWS, SWAMI } from "./assets/export";

export const Bio = {
  name: "Anuj Tiwari",
  roles: [
    "Frontend Developer",
    "Backend Developer",
    "Web Designer",
    "Full Stack Developer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  resume: "./Web Dev.pdf",
  linkedin: "https://www.linkedin.com/in/anuj-tiwari-459863338/",
  github: "https://github.com/Anuj-Tiwari-coder",
  instagram: "https://www.instagram.com/anuj.tiwari.coder",
  geeksforgeeks: "",
  X: "",
  whatsapp:
    "https://wa.me/9167971649?text=Hi Anuj! I'd like to know more about your services.",
};

export const skills = [
  // Frontend
  {
    title: "Frontend",
    skills: [
      { name: "HTML", image: HTML },
      { name: "CSS", image: CSS },
      { name: "JavaScript", image: JavaScript },
      { name: "React JS", image: ReactJS },
      { name: "TypeScript", image: TypeScript },
      { name: "Tailwind CSS", image: TailwindCSS },
      { name: "Bootstrap", image: Bootstrap },
    ],
  },
  // Backend
  {
    title: "Backend",
    skills: [
      { name: "Node JS", image: NodeJS },
      { name: "Express JS", image: ExpressJS },
      { name: "MongoDB", image: MongoDB },
      { name: "MySql", image: MySql },
    ],
  },
  // Languages
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", image: JavaScript },
      { name: "TypeScript", image: TypeScript },
      { name: "Python", image: Python },
      { name: "Django", image: Django },
    ],
  },
  // others
  {
    title: "Others",
    skills: [
      { name: "Git", image: Git },
      { name: "Github", image: Github },
      { name: "VS Code", image: VSCode },
    ],
  },
];

;

export const education = [
  {
    img: SIWS,
    College: "South Indians' Welfare Society College",
    date: "2024 - Present",
    grade: "6.06 CGPA",
    desc: "I am completed a Bachelor's degree in Computer Science where I am honing my skills in computer science and information technology. This program is equipping me with the knowledge and expertise required to thrive in the dynamic field of technology and software development.",
    degree: "Bsc (Bachelor of Computer Science)",
  },
  {
    img: SWAMI,
    college: "Swami Vivekanand Vidyalaya & Kanishtha Mahavidyalaya",
    date: "2021 - 2024",
    grade: "64.33%",
    desc: "I completed my Higher Secondary Certificate (HSC) from Swami Vivekanand Vidyalaya & Kanishtha Mahavidyalaya, where I developed a strong foundation in computer science. This educational background has equipped me with the skills necessary to excel in the field of technology and software development.",
    degree: "HSC (Higher Secondary Certificate)",
  },
  {
    img: DAFFODIL,
    school: "Daffodil English High School",
    date: "2020 - 2021",
    grade: "50.40%",
    desc: "I completed my Secondary School Certificate (SSC) from Daffodil English High School, where I gained a solid foundation in various subjects. This educational experience has prepared me for further studies and a successful career in technology and software development.",
    degree: "SSC (Secondary School Certificate)",
  },
];

export const projects = [
  {
    title: "Students-Report-Card-Generator",
    description:
      "A web application that generates student report cards using Django and Python. It allows users to input student details and grades, and generates a formatted report card for each student.",
    image: Report_Card,
    tags: [
      "HTML",
      "Django",
      "Python",
    ],
    github: "https://github.com/Anuj-Tiwari-coder/Students-Report-Card-Generator",
    link: "",
  },
  {
    title: "CURD-Operation-by-Django",
    description:
      "A web application built using Django that allows users to perform Create, Read, Update, and Delete (CRUD) operations on a database. The application provides a user-friendly interface for managing data efficiently and securely.",
    image: CURD_Django,
    tags: ["HTML", "Django", "Python"],
    github: "https://github.com/Anuj-Tiwari-coder/CURD-Operation-by-Django",
    link: "",
  },
  {
    title: "Custom-Modification",
    description:
      "A web application that allows users to create and modify custom modifications for Admin and shell.  ensuring a seamless experience for users.",
    image: Custom_Modification,
    tags: ["HTML", "Django", "Python"],
    github: "https://github.com/Anuj-Tiwari-coder/Custom-Modification",
    link: "",
  },
  {
    title: "Web Scrapping With Python",
    description:
      "Web scraping in Python involves extracting data from websites using libraries like BeautifulSoup, requests, and Selenium.It allows you to parse HTML, navigate the DOM, and gather structured information.Web scraping is useful for data collection, analysis, and automation, but be mindful of legal and ethical considerations.",
    image: Web_Scrapping,
    tags: ["Python"],
    github: "https://github.com/Anuj-Tiwari-coder/Web-Scrapping-In-Python",
    link: "",
  },
  {
    title: "Portfolio 1",
    description:
      "A personal portfolio website showcasing my skills, projects, and experience. Built with React.js, Tailwind CSS it provides a modern and responsive design for an engaging user experience.",
    image: Portfolio_1,
    tags: [
      "React JS",
      "tailwindcss",
    ],
    github: "https://github.com/Anuj-Tiwari-coder/Portfolio",
    link: "https://portfolio-anuj-tiwaris-projects-d18c3fcb.vercel.app/",
  },
  {
    title: "Curd by React",
    description: "Creating a CRUD (Create, Read, Update, Delete) app using React.js for the frontend and Express.js for the backend involves building a full-stack web application where users can interact with data dynamically. Overview: Frontend (React.js): Provides a responsive UI for users to create, view, edit, and delete data. Uses Axios or Fetch API to communicate with the backend. Backend (Express.js + Node.js): Handles API requests, processes data, and interacts with a database (MongoDB/MySQL) to perform CRUD operations.",

    image: CURD_React,
    tags: [
      "React JS",
      "tailwindcss",
      "Express JS",
    ],
    github: "https://github.com/Anuj-Tiwari-coder/CRUD-App",
    link: "",
  },
  {
    title: "AI Agent/Bot",
    description:
      "Agent Bay is an intelligent, real-time conversational AI assistant powered by the Gemini API (Google Generative AI). It features a sleek and modern UI, enabling natural human-like interactions with an emphasis on performance and user experience.",
    image: AI_Agent,
    tags: [
      "React JS",
      "tailwindcss",
      "Express JS",
    ],
    github: "https://github.com/Anuj-Tiwari-coder/Agent",
    link: "https://agent-bay.vercel.app/",
  },
  {
    title: "Todo List with react",
    description:
      "A simple Todo List application built with React.js and to make store data for a while used localstorage. It allows users to add, edit, and delete tasks, providing a user-friendly interface for managing daily activities.",
    image: Todo_List,
    tags: [
      "React JS",
    ],
    github: "https://github.com/Anuj-Tiwari-coder/todolist",
    link: "https://todolist-peach-gamma.vercel.app/",
  },
];

export const PROJECT_EXPERIENCES = [
  {
    projectName: "Image-To-Text Recognition",
    language: "Java",
    software: "Android Studio",
    duration: "February 2024 - March 2024",
    problemFaced: "Faced issues with build.gradle while configuring the project.",
  },
  {
    projectName: "Complete Python Program",
    language: "Python",
    software: "PyCharm",
    duration: "September 2022 - November 2022",
    problemFaced: "Faced various installation and runtime errors while practicing.",
  },
  {
    projectName: "Fake Details Generator",
    language: "Python",
    software: "VS Code",
    duration: "July 2024 - July 2024",
    problemFaced: "Difficult to generate and manipulate fake data via shell.",
  },
  {
    projectName: "Web Scrapping",
    language: "Python",
    software: "PyCharm",
    duration: "January 2025 - January 2025",
    problemFaced: "Using Bs4 for requesting for multiple attact.",
  },
  {
    projectName: "CRUD Operation with Django",
    language: "HTML, Python, Django",
    software: "VS Code",
    duration: "June 2024 - June 2024",
    problemFaced: "Challenges in setting up the Django environment and using the shell.",
  },
  {
    projectName: "Custom Modification",
    language: "Python ,Django",
    software: "VS Code",
    duration: "July 2024 - August 2024",
    problemFaced: "geting data From Shell.",
  },
  {
    projectName: "Students Report Card Generator",
    language: "HTML,Django, Python",
    software: "VS Code",
    duration: "July 2024 - July 2024",
    problemFaced: "Difficulties managing and aligning fake data on the report card.",
  },
  {
    projectName: "Portfolio 1 ",
    language: "HTML, Tailwind CSS, React.js",
    software: "Visual Studio Code",
    duration: "October 2024 - November 2024",
    problemFaced: "Optimizing the website for mobile responsiveness and ensuring cross-browser compatibility.",
  },
  {
    projectName: "Crud with react",
    language: "React.js , CSS, Express.js",
    software: "Vs Code",
    duration: "Novmber 2025 - Novmber  2024",
    duration: "September 2022 - November 2022",
    problemFaced: "Fetching details from API.",
  },
  {
    projectName: "Todo List with react",
    language: "React.js",
    software: "Vs Code",
    duration: "Febuary 2025 - Febuary 2025",
    duration: "September 2022 - November 2022",
    problemFaced: "Fetching details from API and store in local storage.",
  },
  {
    projectName: "AI Agent/Bot with react",
    language: "React.js, Tailwind CSS, Express.js",
    software: "Vs Code",
    duration: "March 2025 - March 2025",
    duration: "September 2022 - November 2022",
    problemFaced: "Invaladi detail Response from API key .",
  },
];


