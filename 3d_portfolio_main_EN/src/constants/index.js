import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  csharp,
  tailwind,
  git,
  nodejs,
  figma,
  threejs,
  flutter,
  dart,
  kruidenhoek,
  libanonlyceum,
  grafischlyceum,
  hogeschoolrotterdam,
  muziekquiz,
  flutterdart,
  villas4u,
  portfolio,
  ds,
  quizzie,
  shabu,
  ixmox,
  collectors,
  ams,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Skills",
  },
  {
    id: "work",
    title: "School",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: creator,
  },
  {
    title: "App (mobile) Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "CSharp",
    icon: csharp,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Dart",
    icon: dart,
  },
];

const experiences = [
  {
    title: "Primary school",
    company_name: "Kruidenhoek",
    icon: kruidenhoek,
    iconBg: "#383E56",
    date: "Aug 2009 - July 2018",
    points: [
      "The school follows the ideas of Peter Petersen, focusing on individual child development and respect for differences.",
      "Emphasizes overall development, imparting social skills, and a curriculum that includes world orientation and basic skills like math and language.",
      "Located in northeastern Rotterdam, in Ommoord, with a scenic, green campus.",
      "Has around 220 students from diverse areas, not just local, and is part of the Bestuur Openbaar Onderwijs Rotterdam (BOOR).",
    ],
  },
  {
    title: "Secondary school",
    company_name: "Libanon Lyceum Rotterdam",
    icon: libanonlyceum,
    iconBg: "#E6DEDD",
    date: "Aug 2018 - July 2022",
    points: [
      "The school was founded in 1909 and is a public educational institution.",
      "It offers secondary education for MAVO, HAVO, and VWO (Atheneum, Gymnasium, and Technasium) levels.",
      "The Libanon Lyceum operates from two buildings: lower grades at Mecklenburglaan and higher grades at Ramlehweg.",
      "The school follows the 'Wereldklassen' concept, focusing on meaningful education with active teaching methods, and offers specialized programs like Technasium for HAVO and VWO students since 2011​.",
    ],
  },
  {
    title: "Secondary vocational education (MBO)",
    company_name: "Grafisch Lyceum Rotterdam",
    icon: grafischlyceum,
    iconBg: "#383E56",
    date: "Aug 2022 - July 2025",
    points: [
      "It's a vocational school in Rotterdam focused on media, entertainment, and technology, with about 3,800 MBO students, 500 VMBO pupils, and 450 staff members as of 2020​.",
      "Established in 1950 as a vocational school for graphic arts, it was renamed Rotterdamse Grafische School in 1979 and has been called Grafisch Lyceum Rotterdam since 1991​.",
      "The school offers around 20 different courses and specializations for careers in the creative sector, like Media Design, Audiovisual Media, Media Technology, Media Management, Editorial Worker, Stage and Event Technology, and Creative Production.",
      "The main MBO campus is located at Heer Bokelweg 255, while the VMBO department is at Stadhoudersplein 35 in Rotterdam.",
    ],
  },
  {
    title: "University of Applied Sciences (HBO)",
    company_name: "Hogeschool Rotterdam",
    icon: hogeschoolrotterdam,
    iconBg: "#E6DEDD",
    date: "Aug 2025 - July 2029",
    points: [
      "After I finish my MBO I would love to continue with my HBO.",
      "I've looked into suiting schools that caught my attention and can proudly say that 'Hogeschool Rotterdam' is a valid option.",
      "Focuses on practical software development skills.",
      "Emphasizes real-world experience through internships.",
    ],
  },
];

const projects = [
    {
    name: "Talk to me - Ongoing",
    description:
      "In progress: a state-of-the-art mobile app that redefines the art of communication. Powered by Flutter and Dart and supported by Firebase, this app will be your future go-to for all your messaging, file sharing, and more. Developed collaboratively, this app promises to revolutionize the way we connect with friends, family, and colleagues by providing a streamlined and interactive experience.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "orange-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: flutterdart,
    open_project:
      "https://90006.stu.sd-lab.nl/private/unavailable.html",
    source_code_link: "https://90006.stu.sd-lab.nl/private/unavailable.html",
  },
    {
    name: "MuziekQuiz - Ongoing",
    description:
      "In the making: a brand new multiplayer music quiz! Compete with friends to see who the real music expert is. Up to 4 players, endless fun. This project is being created together with a teammate.",
    tags: [
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
      {
        name: "Javascript (AJAX)",
        color: "green-text-gradient",
      },
      {
        name: "MySQL (database)",
        color: "blue-text-gradient",
      },
    ],
    image: muziekquiz,
    open_project:
      "https://90006.stu.sd-lab.nl/private/unavailable.html",
    source_code_link: "https://github.com/SilvesterNL/Muziekquiz",
  },
  {
    name: "Villas4U",
    description:
      "In this PHP, HTML, CSS, and Javascript based website, a friend of mine and I have created a page where you can view various villas and possibly make an offer on them. Includes contact page.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: villas4u,
    open_project:
      "https://89667.stu.sd-lab.nl/Villa-Te-Koop/Frontend/index.php",
    source_code_link: "https://github.com/romanized/Villa-Te-Koop",
  },
  {
    name: "Order Your Meal",
    description:
      "In this page made in HTML, CSS, and Javascript, a group and I were given the task to recreate a website. I made the logo, general design, home page, order page, header, and footer pages.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
    ],
    image: shabu,
    open_project:
      "https://90006.stu.sd-lab.nl/Bestel-Je-Maaltijd/HTML/index.html",
    source_code_link: "https://github.com/romanized/Bestel-Je-Maaltijd",
  },
  {
    name: "Ixmoxbeauty",
    description:
      "A website built on request by a client, using HTML, CSS, and JavaScript. The website includes a wealth of information about various massages and services. No other contributors.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: ixmox,
    open_project: "https://ixmoxbeauty.nl/",
    source_code_link: "https://90006.stu.sd-lab.nl/private/private.html",
  },
  {
    name: "The Collectors",
    description:
      "A PHP, CSS, JavaScript, and HTML-based website that allows users to browse a variety of products and place orders through a backend system. The website features a contact page and a fully functional CRUD (Create, Read, Update, Delete) system, enabling users to add, delete, and modify products. For those interested in testing the CRUD system extensively, please contact me.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: collectors,
    open_project: "https://90006.stu.sd-lab.nl/deVerzamelaar/PAGES/index.php",
    source_code_link: "https://github.com/romanized/deVerzamelaar",
  },
  {
    name: "Amsterdam Light Festival",
    description:
      "In this small but beautiful HTML/CSS website, I created a captivating showcase for the Amsterdam Light Festival within a brief timeframe. The single-page design is adorned with numerous animations, effectively bringing to life the festival's enchanting artistry. Explore this captivating world of light and immerse yourself in its beauty through seamless navigation.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
    ],
    image: ams,
    open_project:
      "https://90006.stu.sd-lab.nl/Amsterdam%20Light%20Festival%20Beroeps/HTML/index.html",
    source_code_link: "https://90006.stu.sd-lab.nl/private/unavailable.html",
  },
  {
    name: "Digital Signage Screenshower",
    description:
      "It looks simple but has a specific purpose. The website functions well on a DS stand where, in this case, 4 different video games are displayed. The inclusion of a screensaver not only protects the screen but also serves as an engaging way to attract attention when the stand is not actively in use.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: ds,
    open_project:
      "https://90006.stu.sd-lab.nl/DigitalSignage%20Minor/screensaver.html",
    source_code_link: "https://90006.stu.sd-lab.nl/private/unavailable.html",
  },
  {
    name: "Projects page",
    description:
      "This is a scraped portfolio page that now represents as a projects only page (showing off only my work). This scraped portfolio page is a vivid showcase of my creative versatility, with a clean design, a working light and dark mode bearing a distinct style. Built upon a rich foundation of HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    open_project:
      "https://90006.stu.sd-lab.nl/Portfolio_scrap/PAGES/projects.html",
    source_code_link: "https://github.com/romanized/Portfolio",
  },
];

export { services, technologies, experiences, projects };
