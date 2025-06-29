import usrPic from "./assets/mypic.jpg";

const portfolioData = {
  personalDetails: {
    userDisplayPic: usrPic,
    name: "Manjunath KO",
    age: 28,
    role: "Full Stack Web Developer & DevOps Enthusiast",
    company: "Fractal Analytics",
    location: "Bangalore, India",
    email: "manjunathkankatteko@gmail.com",
    bio: "Full stack web developer experienced in building scalable applications using ReactJS, Next.js, Node.js, Express.js, FastAPI, and Gin (Go). Skilled in both SQL (MySQL) and NoSQL (MongoDB) databases, cloud deployments (GCP BigQuery, Data Engineering, Application Deployment), containerization (Docker), and CI/CD with Git and GitLab. Currently expanding expertise in DevOps.",
  },
  skills: [
    "JavaScript",
    "Python",
    "Golang",
    "ReactJS",
    "Next.js",
    "Node.js",
    "Express.js",
    "FastAPI",
    "Gin (Go)",
    "MySQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Google Cloud Platform (GCP)",
    "BigQuery",
    "GCP Data Engineering",
    "GCP Application Deployment",
    "Git",
    "GitLab",
    "HTML",
    "CSS",
    "Redux",
    "Sass",
  ],
  experience: [
    {
      role: "Full Stack Developer",
      company: "Fractal Analytics",
      years: "Nov 2023 - Present",
      description: `Full-stack Web Developer with hands-on experience in designing and developing scalable RESTful APIs using FastAPI, Go, and Node.js, and building robust, responsive front-end applications with React and Next.js. Proactively contributed to code quality through code reviews and led knowledge transfer (KT) sessions to mentor junior developers and foster team growth. Adept at collaborating across teams to deliver high-performance, maintainable solutions in agile environments.`,
    },
    {
      role: "Senior Software Engineer",
      company: "Justdial",
      years: "Oct 2021 - Oct 2023",
      description: `Full stack web developer responsible for designing and developing RESTful APIs using Go and Node.js, and building robust front-end applications with React and Next.js. Conducted code reviews and mentored junior developers to ensure code quality and team growth.`,
    },
    {
      role: "Full Stack Developer (Consultant)",
      company: "Terralogic Inc (Client: Fujitsu India)",
      years: "July 2019 - Sept 2021",
      description: `Developed RESTful APIs using Django and Node.js, and built micro front-end applications with React and Angular. Designed Python automation frameworks, delivered multiple client POCs, and contributed to the development of a recruitment tool to streamline hiring. Gained hands-on experience with deployment tools such as Apache, Nginx, uWSGI, and Docker.`,
    },
  ],
  projects: {
    personal: [
      {
        title: "Personal Blog Website",
        description:
          "A modern, responsive blog platform to share articles on general topics, travel, technology, current affairs, and more. Features include markdown support, category filtering, search, and a clean, accessible design.",
        tech: [
          "ReactJS",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Markdown",
          "CSS",
        ],
        link: "https://github.com/kom3",
      },
      {
        title: "AI Research Assistant",
        description:
          "An AI-powered agent with a ReactJS frontend that allows users to query research papers on any topic. The agent, built with FastAPI RESTful APIs, Langchain, and LLMs, aggregates and parses data from sources like Wikipedia, DuckDuckGo, and other search tools, delivering concise, precise summaries. Users can download results as PDF/Word or share via email, eliminating the need to read through all source material.",
        tech: [
          "FastAPI",
          "ReactJS",
          "MongoDB",
          "LLM",
          "Langchain",
          "Wikipedia API",
          "DuckDuckGo API",
          "PDF/Word Export",
          "Email Integration",
        ],
        link: "https://github.com/kom3",
      },
    ],
    company: [
      {
        title: "Warrior Framework Infrastructure",
        period: "Dec 2019 – Sept 2021",
        description:
          "Warrior’s infrastructure is designed for maximum reusability of built-in keywords, supporting diverse test environments (CLI, REST, SNMP).",
        responsibilities: [
          "Gathered framework requirements and proposed technical solutions",
          "Integrated user-facing elements with server-side logic",
          "Developed and enhanced code based on client requirements",
          "Created generic keywords for multi-environment support",
          "Developed and published a user-friendly PIP package for the Warrior framework on PyPI",
          "Implemented container-based deployments using Docker, including custom image delivery via Docker Hub",
        ],
        tech: ["Python", "Docker", "PyPI", "REST", "CLI", "SNMP"],
      },
      {
        title: "Katana Framework",
        period: "Dec 2019 – Sept 2021",
        description:
          "Katana is a web-based case creation and execution tool for the Warrior Framework, built with Django.",
        responsibilities: [
          "Designed and implemented REST APIs and backend services",
          "Integrated Keycloak authentication",
          "Developed micro front-end applications using ReactJS and Angular",
          "Implemented bug fixes and feature enhancements",
          "Added DRF and JWT token authentication",
          "Developed custom middleware for request/response flow control",
        ],
        tech: ["Django", "ReactJS", "Angular", "Keycloak", "DRF", "JWT"],
      },
      {
        title: "JD Pay",
        period: "Oct 2021 – Present",
        description:
          "JD Pay is Justdial’s fintech vertical, processing daily transactions worth 20M INR, using ReactJS, Next.js, PHP, Node.js, and Go.",
        responsibilities: [
          "Designed and implemented REST APIs with Go and Node.js",
          "Developed front-end applications using ReactJS and Next.js",
          "Provided ongoing bug fixes and feature enhancements",
        ],
        tech: ["Go", "Node.js", "ReactJS", "Next.js", "PHP"],
      },
      {
        title: "Centralized KYC Module",
        period: "Oct 2021 – Present",
        description:
          "A centralized KYC solution for Justdial, integrated across multiple business verticals for streamlined data management. Built with Next.js, Go, and Node.js.",
        responsibilities: [
          "Designed and implemented REST APIs with Go and Node.js",
          "Developed front-end applications using Next.js",
          "Provided ongoing bug fixes and feature enhancements",
        ],
        tech: ["Go", "Node.js", "Next.js"],
      },
    ],
  },
  certifications: [
    {
      title: "JavaScript Certificate",
      issuer: "HackerRank",
      credentialId: "02378214144e",
    },
    {
      title: "Python Certificate",
      issuer: "HackerRank",
      credentialId: "b73078f49101",
    },
    {
      title: "React Certificate",
      issuer: "HackerRank",
      credentialId: "c1c68fe9e5f2",
    },
  ],
  awards: [
    {
      title: "Rising Star",
      date: "Aug 2020",
      issuer: "Terralogic Inc",
      description:
        "Received this award as a mark of appreciation for dedication and hard work in the team.",
    },
    {
      title: "Client Champion",
      date: "Aug 2024",
      issuer: "Fractal Analytics",
      description:
        "Recognized as Client Champion for consistent efforts, dedication, teamwork, time management, and successfully meeting client deliverables.",
    },
  ],

  ContactDetails: {
    email: "mailto:manjunathkankatteko@gmail.com",
    linkedIn: "https://www.linkedin.com/in/manjunath-ko-b4181115a/",
    github: "https://github.com/kom3",
  },
};

export default portfolioData;
