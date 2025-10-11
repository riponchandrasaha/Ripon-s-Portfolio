// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
/* import angularLogo from './assets/tech_logo/angular.png'; */
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
/* import gsapLogo from './assets/tech_logo/gsap.png'; */
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import Dui from './assets/tech_logo/Dui.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import bp from './assets/company_logo/betopiagroup_logo.jpeg';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
/* import glaLogo from './assets/education_logo/gla_logo.png'; */
import bsaLogo from './assets/education_logo/ewulogo.png';
/* import vpsLogo from './assets/education_logo/vps_logo.png'; */

// Project Section Logo's
import gocart from './assets/work_logo/gocart.jpg';
import Chatapp from './assets/work_logo/Chatapp.jpg';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import removebgLogo1 from './assets/work_logo/image.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
     /*  { name: 'Angular', logo: angularLogo }, */
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Daisy UI', logo: Dui},
      { name: 'Material UI', logo: materialuiLogo },
      /* { name: 'Bootstrap', logo: bootstrapLogo }, */
    ],
  },
  {
    title: 'Backend',
    skills: [
     /*  { name: 'Springboot', logo: springbootLogo }, */
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
     /*  { name: 'PostgreSQL', logo: postgreLogo }, */
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      /* { name: 'Java', logo: javaLogo }, */
      { name: 'Python', logo: pythonLogo },
      /* { name: 'C-Sharp', logo: csharpLogo }, */
      { name: 'JavaScript', logo: javascriptLogo },
     /*  { name: 'TypeScript', logo: typescriptLogo }, */
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [

    {
      id: 2,
      img: bp,
      role: "Trainee Frontend Developer",
      company: "Betopia Group",
      date: "August 2025 - Present",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Tailwind, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",

        "Figma",
        "Material UI",
        "React JS",
        "TypeScript",

        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
  ];

  export const education = [

    {
      id: 1,
      img: bsaLogo,
      school: "East West University",
      date: "2020 - 2025",
      /* grade: "73.2%", */
      desc: "I completed my Bachelor's degree in Computer Science & Engineering (B.Sc.) from East West University, Dhaka, Bangladesh. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at University allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Science - Computer Science & Engineering ",
    },

  ];

  export const projects = [
    {
      id: 0,

      title: "Gocart E-Commerce Website",
      description:
        "Gocart is a modern e-commerce website built with Next.js, Express, and MongoDB. It features secure Stripe payments, Clerk authentication, admin role management, and a responsive user interface optimized for performance and SEO.",
      image: gocart,
      tags: ["HTML", "CSS", "JavaScript", "Next JS", "API", "Prisma", "Clerk","Express JS","MongoDB"],
      github: "https://github.com/riponchandrasaha/gocart",
      webapp: "https://gocart-lake.vercel.app/",
    },
   {
      id: 1,
      title: " Fullstack Next.js 15 Real-Time Chat App ",
      description:
        "I’m building a modern and fast frontend using Next.js 15 and React, styled with Tailwind CSS for a clean, responsive user interface. The backend is powered by MongoDB with Prisma for efficient database management. To ensure secure user authentication and session handling, I’ve integrated NextAuth. For global state management, I’m using Zustand, which keeps the application state simple and predictable. The project is written in TypeScript to maintain type safety and reduce bugs. Additionally, Pusher enables real-time messaging without needing page refreshes, while Cloudinary efficiently handles image and file uploads. Finally, the entire application is deployed seamlessly on Vercel, making it live and accessible on the web.A modern fullstack real-time chat application built with Next.js 15 (App Router), designed to provide seamless and instant communication between users. The app features real-time messaging, authentication, user presence, and file sharing, all wrapped in a sleek, responsive UI optimized for performance and scalability",
      image: Chatapp,
      tags: ["React JS"," Next.js " ,"Node.js"," TypeScript ", "MongoDB","Prisma", "Express", "HTML", "Tailwind CSS", " Zustand "," NextAuth"],
      github: "https://github.com/riponchandrasaha/Fullstack-Real-Time-Chat-App",
      webapp: "https://fullstack-real-time-chat-app-nine.vercel.app/",
    },
     /*
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    }, */
   /*  {
      id: 3,
      title: "Email Validator NPM Package",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: npmLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
      id: 4,
      title: "Task Reminder Chrome Extension Tool",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/codingmastr/Task-Reminder-Tool",
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 5,
      title: "Webverse Digital",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/codingmastr/Webverse-Digital",
      webapp: "https://webversedigital.com/",
    }, */
    /* {
      id: 6,
      title: "Coding Master",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: cmLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
      github: "https://codingmasterweb.in/",
      webapp: "https://codingmasterweb.in/",
    }, */
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      /* github: "https://github.com/codingmastr/Image-Search-App", */
      webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 8,
      title: "Food Management System",
      description:
        "Developed a full-stack restaurant and food ordering web application that allows users to browse the menu, place orders and make payments securely. Implemented user authentication, role-based access (admin/user), and real-time data fetching with React Query.",
      image: removebgLogo1,
      tags: ["React JS", "API", "Tailwind CSS", "HTML", "Node JS", "Javascript","MongoDB","DaisyUI"],
      github: "https://github.com/riponchandrasaha/bitro-boss-client",
      webapp: "https://bistro-boss-8543b.web.app/",
    },
  ];