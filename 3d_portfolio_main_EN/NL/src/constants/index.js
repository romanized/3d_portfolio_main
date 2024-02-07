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
  villas4u,
  muziekquiz,
  portfolio,
  ds,
  quizzie,
  flutterdart,
  shabu,
  ixmox,
  collectors,
  ams,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Vaardigheden",
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
    title: "Basisschool",
    company_name: "Kruidenhoek",
    icon: kruidenhoek,
    iconBg: "#383E56",
    date: "Aug 2009 - Juli 2018",
    points: [
      "De school volgt de ideeën van Peter Petersen, met de focus op individuele kindontwikkeling en respect voor verschillen.",
      "Legt nadruk op algehele ontwikkeling, het bijbrengen van sociale vaardigheden en een curriculum dat wereldoriëntatie en basisvaardigheden zoals wiskunde en taal omvat.",
      "Gelegen in het noordoosten van Rotterdam, in Ommoord, met een schilderachtige, groene campus.",
      "Heeft ongeveer 220 leerlingen uit diverse gebieden, niet alleen lokaal, en maakt deel uit van het Bestuur Openbaar Onderwijs Rotterdam (BOOR).",
    ],
  },
  {
    title: "Middelbare school",
    company_name: "Libanon Lyceum Rotterdam",
    icon: libanonlyceum,
    iconBg: "#E6DEDD",
    date: "Aug 2018 - Juli 2022",
    points: [
      "De school is opgericht in 1909 en is een openbare onderwijsinstelling.",
      "Het biedt voortgezet onderwijs voor MAVO, HAVO en VWO (Atheneum, Gymnasium en Technasium) niveaus.",
      "Het Libanon Lyceum functioneert vanuit twee gebouwen: de lagere klassen in de Mecklenburglaan en de hogere klassen in de Ramlehweg.",
      "De school volgt het concept 'Wereldklassen', gericht op betekenisvol onderwijs met actieve onderwijsmethoden, en biedt sinds 2011 gespecialiseerde programma's zoals Technasium voor HAVO en VWO leerlingen.",
    ],
  },
  {
    title: "Software Developer (MBO)",
    company_name: "Grafisch Lyceum Rotterdam",
    icon: grafischlyceum,
    iconBg: "#383E56",
    date: "Aug 2022 - Juli 2025",
    points: [
      "Het is een beroepsschool in Rotterdam gericht op media, entertainment en technologie, met ongeveer 3.800 MBO-studenten, 500 VMBO-leerlingen en 450 personeelsleden in 2020​.",
      "Opgericht in 1950 als een beroepsschool voor grafische kunsten, werd het in 1979 hernoemd naar Rotterdamse Grafische School en sinds 1991 heet het Grafisch Lyceum Rotterdam​.",
      "De school biedt ongeveer 20 verschillende cursussen en specialisaties voor carrières in de creatieve sector, zoals Media Design, Audiovisuele Media, Mediatechnologie, Mediamanagement, Redactioneel Medewerker, Podium- en Evenemententechnologie, en Creatieve Productie.",
      "De hoofdcampus voor MBO is gelegen aan de Heer Bokelweg 255, terwijl de VMBO-afdeling zich bevindt aan het Stadhoudersplein 35 in Rotterdam.",
    ],
  },
  {
    title: "Informatica (HBO)",
    company_name: "Hogeschool Rotterdam",
    icon: hogeschoolrotterdam,
    iconBg: "#E6DEDD",
    date: "Aug 2025 - Juli 2029",
    points: [
      "Na het afronden van mijn MBO zou ik graag verder gaan met mijn HBO.",
      "Ik heb gekeken naar geschikte scholen die mijn aandacht hebben getrokken en kan met trots zeggen dat 'Hogeschool Rotterdam' een geldige optie is.",
      "Richt zich op praktische vaardigheden in softwareontwikkeling.",
      "Legt de nadruk op praktijkervaring door middel van stages.",
    ],
  },
];

const projects = [
    {
    name: "Talk to me - Bezig",
    description:
      "In de maak: een state-of-the-art mobiele app die de kunst van communicatie herdefinieert. Met de kracht van Flutter en Dart en ondersteund door Firebase, is deze app jouw toekomstige go-to voor al je berichten, bestanden delen, en meer. Ontwikkeld samen met een collega, belooft deze app de manier waarop we verbinden met vrienden, familie, en collega's te vernieuwen, door een gestroomlijnde en interactieve ervaring te bieden.",
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
    name: "MuziekQuiz - Bezig",
    description:
      "In de maak: een gloednieuwe multiplayer muziekquiz! Strijd met vrienden om te zien wie de echte muziekkenner is. Tot 4 spelers, oneindig veel fun. Dit project word samen met een teamgenoot gemaakt.",
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
      "In deze website, gebaseerd op PHP, HTML, CSS en Javascript, hebben een vriend van mij en ik een pagina gecreëerd waar je verschillende villa's kunt bekijken en mogelijk een bod op ze kunt uitbrengen. Bevat ook een contactpagina.",
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
    name: "Bestel Je Maaltijd",
    description:
      "Op deze pagina, gemaakt in HTML, CSS en Javascript, kreeg een groep en ik de taak om een website na te maken. Ik heb het logo, het algemene ontwerp, de homepage, de bestelpagina, de header en de footer pagina's gemaakt.",
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
      "Een website gebouwd op verzoek van een klant, met gebruik van HTML, CSS en JavaScript. De website bevat een schat aan informatie over verschillende massages en diensten. Code is prive voor rechten redenen en heeft geen andere bijdragers.",
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
    name: "De verzamelaars",
    description:
      "Een website gebaseerd op PHP, CSS, JavaScript en HTML die gebruikers in staat stelt om een verscheidenheid aan producten te bekijken en bestellingen te plaatsen via een backend-systeem. De website beschikt over een contactpagina en een volledig functioneel CRUD (Create, Read, Update, Delete) systeem, waardoor gebruikers producten kunnen toevoegen, verwijderen en wijzigen. Neem voor wie het CRUD-systeem uitgebreid wil testen contact met mij op.",
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
      "In deze kleine maar prachtige HTML/CSS-website heb ik binnen een korte tijdspanne een boeiende showcase voor het Amsterdam Light Festival gecreëerd. Het ontwerp van één pagina is versierd met talrijke animaties, waardoor de betoverende kunst van het festival effectief tot leven komt. Verken deze fascinerende wereld van licht en dompel jezelf onder in zijn schoonheid door middel van naadloze navigatie.",
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
      "Het ziet er eenvoudig uit, maar heeft een specifiek doel. De website functioneert goed op een DS-standaard waar in dit geval 4 verschillende videospellen worden getoond. De toevoeging van een screensaver beschermt niet alleen het scherm, maar dient ook als een boeiende manier om aandacht te trekken wanneer de stand niet actief in gebruik is.",
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
    name: "Projecten Pagina",
    description:
      "Dit is een geschraapte portfolio-pagina die nu dient als een alleen-projectenpagina (waar alleen mijn werk getoond wordt). Deze geschraapte portfolio-pagina is een levendige showcase van mijn creatieve veelzijdigheid, met een helder ontwerp, een werkende lichte en donkere modus met een onderscheidende stijl. Gebouwd op een rijke basis van HTML, CSS en JavaScript.",
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
