import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
  cinematch,
  utrack,
  engineeringDashboard,
  canadianInstitute,
  unbLogo,
  atlanticSuperstore,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  {
    title: "Full-Stack Development",
    icon: web,
  },
  {
    title: "Frontend & UI/UX",
    icon: creator,
  },
  {
    title: "Backend & APIs",
    icon: backend,
  },
  {
    title: "Testing & QA",
    icon: mobile,
  },
];

const technologies = [
  { name: "JavaScript", icon: javascript },
  { name: "React", icon: reactjs },
  { name: "Node.js", icon: nodejs },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: git },
  { name: "Docker", icon: docker },
];

const experiences = [
  {
    title: "Cybersecurity Software Developer",
    company_name: "Canadian Institute for Cybersecurity, UNB",
    icon: canadianInstitute,
    iconBg: "#ffffff",
    date: "Apr 2026 – Present",
    points: [
      "Develop and maintain cybersecurity software tools using Python, HTML, React, and JavaScript, from initial design through user acceptance testing.",
      "Define technical design specifications, create logic flow charts, and implement code across high-impact security initiatives.",
      "Troubleshoot and resolve partner-facing technical issues, supporting production software operations.",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "University of New Brunswick",
    icon: unbLogo,
    iconBg: "#ffffff",
    date: "Jan 2026 – Apr 2026",
    points: [
      "Delivered tutorials and one-on-one support in Computability & Formal Languages (automata theory, computability, formal languages).",
      "Evaluated assignments and exams with precision, upholding rigorous academic standards.",
    ],
  },
  {
    title: "Residence Assistant",
    company_name: "University of New Brunswick",
    icon: unbLogo,
    iconBg: "#ffffff",
    date: "Sep 2025 – Present",
    points: [
      "Supported a residential community of 200+ students, coordinating programs for inclusion, wellness, and academic success.",
      "Mediated interpersonal conflicts and resolved student concerns with professionalism and discretion.",
    ],
  },
  {
    title: "Outreach Director",
    company_name: "Engineering Undergraduate Society – UNB",
    icon: unbLogo,
    iconBg: "#ffffff",
    date: "Sep 2025 – Present",
    points: [
      "Coordinated faculty-wide outreach initiatives, managing event planning, promotion, and execution with students, executive members, and external partners.",
    ],
  },
  {
    title: "Cashier",
    company_name: "Atlantic Superstore, Fredericton, NB",
    icon: atlanticSuperstore,
    iconBg: "#ffffff",
    date: "Mar 2025 – Aug 2026",
    points: [
      "Accurately processed 100+ customer transactions per shift in a high-volume, fast-paced retail environment.",
      "Collaborated with team members to maintain efficient operations and deliver consistent service quality.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Uchechi led frontend development and UI/UX design in our 12-person Agile team, delivering responsive dashboards and clean API integration.",
    name: "UTrack Team",
    designation: "Development Team",
    company: "UNB SWE",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=UTrack",
  },
  {
    testimonial:
      "Delivered a full React dashboard in 7 hours with live ML API integration, dynamic filtering, and graceful error handling.",
    name: "Hackathon",
    designation: "Engineering Dashboard",
    company: "Aug 2025",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=Hack",
  },
];

const projects = [
  {
    name: "UTrack – Development Team Dashboard",
    description:
      "Led frontend development and UI/UX in a 12-person Agile team. Built responsive dashboards with React, integrated backend APIs via Node.js and Express, and supported QA with Cypress end-to-end and regression testing.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express", color: "pink-text-gradient" },
      { name: "Cypress", color: "orange-text-gradient" },
    ],
    image: utrack,
    source_code_link: "https://github.com/Bolu-tec/UTrack",
  },
  {
    name: "Engineering Dashboard (Hackathon)",
    description:
      "Full React dashboard built in 7 hours. Consumed a live ML API to process and visualize PNID and Isometric engineering drawings with dynamic filtering and CSV/JSON export. Modular component architecture with API service layer and mock data fallback.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Recharts", color: "green-text-gradient" },
      { name: "Ant Design", color: "pink-text-gradient" },
    ],
    image: engineeringDashboard,
    imageFit: "contain",
    source_code_link: "https://github.com/Bolu-tec/Hackathon",
  },
  {
    name: "CineMatch – ML Movie Recommender",
    description:
      "Full-stack movie recommender with Python/Flask backend and React frontend. TMDB API for live search across 1M+ movies. Trained scikit-learn TF-IDF + kNN model on rated watch history for personalized recommendations with an adaptive pipeline.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Flask", color: "green-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
      { name: "scikit-learn", color: "orange-text-gradient" },
    ],
    image: cinematch,
    source_code_link: "https://github.com/Bolu-tec/Cinematch",
  },
  {
    name: "Reddit Auto-Reply Bot",
    description:
      "Automated Reddit comment monitoring using PRAW, with real-time keyword detection, structured logging, and exception handling for reliable continuous operation.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "PRAW API", color: "green-text-gradient" },
    ],
    image: null,
    source_code_link: "https://github.com/Bolu-tec/RedditBot",
  },
  {
    name: "Family Financial Tracker",
    description:
      "JavaFX desktop app to track and visualize family income and expenses, applying OOP principles, unit testing, and Git version control.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "JavaFX", color: "green-text-gradient" },
      { name: "OOP", color: "pink-text-gradient" },
    ],
    image: null,
    source_code_link: "https://github.com/Bolu-tec",
  },
];

const awards = [
  {
    title: "Government of Canada – Reliability Status",
    organization: "National Research Council Canada",
    period: "Jun 2026 – Jun 2036",
    description: "Security clearance granted by the National Research Council Canada.",
  },
  {
    title: "Dean's List",
    organization: "University of New Brunswick",
    period: "2024–2025, 2025–2026",
    description: "Academic excellence recognition for two consecutive years.",
  },
  {
    title: "Edwin Jacob Special University Scholarship",
    organization: "University of New Brunswick",
    period: "2025 – 2026",
    description: "Special university scholarship for outstanding achievement.",
  },
  {
    title: "UNB Entrance Scholarship",
    organization: "University of New Brunswick",
    period: "2023 – 2024",
    description: "Merit-based entrance award.",
  },
];

export { services, technologies, experiences, testimonials, projects, awards };
