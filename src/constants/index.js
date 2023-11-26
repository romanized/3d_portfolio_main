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
  kruidenhoek,
  libanonlyceum,
  grafischlyceum,
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
    title: ".NET Developer",
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "CSharp",
    icon: csharp,
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
    title: "Higher professional education (HBO)",
    company_name: "Unknown",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Aug 2025 - July 2029",
    points: [
      "After I finish my MBO I would love to continue with my HBO.",
      "Since this is in the future I can not say what school I will be attending.",
      "After my HBO, my school career will be closed and I will start profressional working.",
      "More opportunities to expand my skills.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
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
  {
    name: "Quizzie game",
    description:
      "One of my first made website is a testament to my dedication and teamwork, created using HTML, CSS, and JS. I took the lead on the quiz mechanics, the highscore system, design of the website and crafted the Fortnite quiz section by leveraging various tutorials to enhance my coding expertise.",
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
    image: quizzie,
    open_project:
      "https://90006.stu.sd-lab.nl/Quizzie-BEROEPS1-main/HTML/homepage.html",
    source_code_link: "https://github.com/romanized/Quizzie-BEROEPS1",
  },
];

export { services, technologies, experiences, testimonials, projects };
