import bookmarketImg from "../assets/books-market.png";
import gameImg from "../assets/game.png";
import myexpensesImg from "../assets/myexpenses.png";
import travelImg from "../assets/travel.png";
import energotochka from "../assets/energotochka.png";
import casino from "../assets/casino.png";
import pnu from "../assets/pnu.png";

export const EXPERIENCE = [
  {
    id: 1,
    position: "Frontend Developer",
    workPlace: "Crotul",
    dateSpan: "Mar 2024 - Present",
    description:
      "Developed a Next.js application enabling users to create customizable business forms, significantly improving user interaction. <br/> <strong>Improved Feedback Mechanism:</strong> Integrated WhatsApp API to facilitate real-time feedback for form submissions, enhancing customer satisfaction.	<br>Built an admin panel featuring user management, simple analytics, and environment variable management, optimizing administrative tasks.",
  },

  {
    id: 2,
    position: "Frontend Developer",
    workPlace: "DevCoding IT Studio",
    dateSpan: "Apr 2023 – Feb 2024",
    description:
      "Contributed to the development and redesign of modal windows and forms, enhancing user experience. <br/> <strong>Ensured Compatibility:</strong> Conducted manual testing across devices and screen orientations, ensuring a seamless user experience. Bug Tracking & Reporting: Utilized Trello for efficient bug reporting and tracking, improving project workflow.",
  },

  {
    id: 3,
    position: "Chatbot developer",
    workPlace: "Freelance",
    dateSpan: "Feb 2020 – Nov 2020",
    description:
      "Developed a Node.js Telegram bot that automated customer interactions for a small e-cigarette business, significantly increasing sales efficiency and reducing manual workload.",
  },

  {
    id: 4,
    position: "Chatbot developer",
    workPlace: "PNU University",
    dateSpan: "Dec 2019 – Jun 2021",
    description:
      "Developed a chatbot in Telegram for viewing the university timetable, greatly improving the efficiency of access to the schedule for students and teachers. <br>Fetched and formatted schedule data from APIs, presenting it in an easily accessible format, thereby reducing the time spent by students and lecturers on timetable searches.",
  },
];

export const SKILLS = [
  "React",
  "Java Script",
  "Next.js",
  "Node.js",
  "Express",
  "SASS",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "JWT",
  "HTML",
  "Git",
  "Socket.io",
  "Redux",
  "Zustand",
  "Strapi",
  "Framer Motion",
  "Mongo",
  "SQL",
  "Prisma",
  "PostgreSQL",
  "Manual Testing",
];

export const PROJECTS = [
  {
    id: 1,
    name: "PNU",
    description:
      "An commercial Next.js web application for creating customizable business target forms",
    img: pnu,
    demoLink: "https://pnu.co.il/login",
    technologies: [
      "Next.js",
      "SCSS",
      "Next-Auth",
      "Tailwind",
      "PostgreSQL",
      "Prisma",
      "Webflow",
      "Cloudinary",
      "WhatsApp API",
      "Cron",
    ],
    githubLink: "https://github.com/whiz7z",
    direction: "right",
  },

  {
    id: 2,
    name: "Tip-top Casino",
    description: "An online casino website",
    img: casino,
    demoLink: "https://tiptopcasino3.online/en",
    technologies: ["React", "SCSS", "Manual Testing", "Responsive Design"],
    githubLink: "https://tiptopcasino3.online/en",
    direction: "left",
  },

  {
    id: 3,
    name: "Energotochka",
    description:
      "A landing page for selling charging stations for electric cars",
    img: energotochka,
    demoLink: "https://energotochkadev.onrender.com",
    technologies: ["React", "Responsive Design", "SCSS", "EmailJS"],
    githubLink: "https://github.com/Whiz7z/landing-commercial",
    direction: "right",
  },

  {
    id: 4,
    title: "BookMarket",
    description:
      "A web application for buying and selling books with an admin panel",
    img: bookmarketImg,
    demoLink: "https://books-market.onrender.com",
    technologies: ["React", "Node.js", "Express", "Mongo", "JWT"],
    githubLink: "https://github.com/Whiz7z/books-market-client",
    direction: "left",
  },

  {
    id: 5,
    name: "Money Tracker",
    description: "A web application for managing expenses and incomes",
    img: myexpensesImg,
    demoLink: "https://money-tracker-chi.vercel.app/",
    technologies: ["Next.js", "Mongo", "Next-Auth", "Tailwind"],
    githubLink: "https://github.com/Whiz7z/money-tracker",
    direction: "right",
  },

  {
    id: 5,
    name: "Travel Agency",
    description: "A simple landing page for travel agency",
    img: travelImg,
    demoLink: "https://travel-agency-4dqh.onrender.com",
    technologies: ["React", "SCSS", "Responsive Design"],
    githubLink: "https://github.com/Whiz7z/my-travel-logs",
    direction: "left",
  },

  {
    id: 7,
    name: "Rock Paper Scissors multiplayer",
    description:
      "A web application for playing rock paper scissors multiplayer via web sockets",
    img: gameImg,
    demoLink: "https://rock-paper-scissors-multiplayer-2n56.onrender.com",
    technologies: ["React", "Node.js", "Express", "Mongo", "JWT", "Socket.io"],
    githubLink: "https://github.com/Whiz7z/rock-paper-scissors-client",
    direction: "right",
  },
];
