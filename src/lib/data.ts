export const personalInfo = {
  name: "Isaias Candia",
  title: "Computer Science Engineer",
  tagline:
    "Building intelligent solutions with SAP BTP, AI/ML, and modern web technologies.",
  email: "isaias.candia.dev@gmail.com",
  phone: "+595986654945",
  github: "https://github.com/isacandix",
  linkedin: "https://www.linkedin.com/in/isaias-candia-a90138248/",
  profilePicture: "/profile-picture.jpeg",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const experiences = [
  {
    role: "SAP BTP Full-Stack Developer",
    company: "Infocenter SAP Gold Partner",
    period: "Jan 2025 — Present",
    description:
      "As a technical lead, I manage a team of 5 developers across multiple S/4HANA implementation projects. I design and build Fiori apps, CAP services, and RAP extensions, and handle integrations between SAP and external systems using Integration Suite. I also work with AI capabilities like Joule to improve workflows in S/4HANA and SuccessFactors.",
    skills: [
      { name: "SAP BTP", level: "Advanced" },
      { name: "CAP", level: "Advanced" },
      { name: "SAP Fiori", level: "Advanced" },
      { name: "Node.js", level: "Advanced" },
      { name: "RAP", level: "Advanced" },
      { name: "Integration Suite", level: "Intermediate" },
      { name: "AI / Joule", level: "Intermediate" },
      { name: "SAP Certified — Fiori Developer", level: "Certified" },
      { name: "SAP Certified — CAP Backend", level: "Certified" },
      { name: "TOEFL", level: "Certified" },
    ],
  },
  {
    role: "Research Assistant",
    company: "Shuangho Hospital, Taiwan",
    period: "Aug 2024 — Jan 2025",
    description:
      "I worked on a Vision Transformer model that identifies bacterial pathogens from microscopy images, achieving 98% accuracy. This research was published in Computer Methods and Programs in Biomedicine (Elsevier).",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "PyTorch", level: "Intermediate" },
      { name: "Machine Learning", level: "Intermediate" },
      { name: "Data Science", level: "Intermediate" },
      { name: "Computer Vision", level: "Advanced" },
      { name: "Deep Learning", level: "Intermediate" },
      { name: "Image Processing", level: "Intermediate" },
      { name: "Research & Publication", level: "Advanced" },
    ],
  },
];

export const projects = [
  {
    title: "Triforce Gym",
    description:
      "A mobile app for gym management with 150+ active users. The owner can manage memberships, payments, attendance, and class schedules. Members can start workouts, track their stats, and manage their profile. Built with a real-time backend using Supabase and PostgreSQL.",
    techStack: "Expo · React Native · Supabase · PostgreSQL · TypeScript",
    image: "/projects/triforceapp.png",
    mobile: true,
    demoUrl: "https://apps.apple.com/py/app/triforce-gym/id6761962669?l=en-GB",
  },
  {
    title: "Joyería Fernando",
    description:
      "A full e-commerce site for a jewelry shop with 2-3k monthly visitors. Customers can browse the catalog, filter by category, add pieces to their cart, and complete their purchase with direct Pagopar payment integration. SEO-optimized with server-side rendering.",
    techStack: "Next.js · NestJS · PostgreSQL · React · Tailwind CSS · TypeScript · Pagopar",
    image: "/projects/joyeriafernando.png",
    demoUrl: "https://joyeriafernando.com.py/",
  },
  {
    title: "Rastrocero",
    description:
      "A landing page for Rastrocero, a climate intelligence platform that turns organizational data into structured, traceable carbon footprint metrics. The site explains how the platform works across scopes 1, 2, and 3, and guides potential clients toward requesting a demo.",
    techStack: "React · CSS · JavaScript",
    image: "/projects/rastrocero.png",
    demoUrl: "https://www.rastrocero.com.py/",
  },
];

export const education = [
  {
    institution: "Universidad Politécnica Taiwán-Paraguay",
    degree: "B.S. in Computer Science Engineering",
    period: "",
  },
  {
    institution: "National Taiwan University of Science and Technology",
    degree: "B.S. in Computer Science Engineering (Exchange Program)",
    period: "",
  },
];

export const certifications = [
  "SAP Certified Associate — Fiori Application Developer",
  "SAP Certified Associate — Backend Developer (CAP)",
  "TOEFL — International English Certification",
];

export const aboutStats = {
  experience: {
    label: "Experience",
    detail1: "5+ years",
    detail2: "Full Stack Development",
  },
  education: {
    label: "Education",
    detail1: "B.S. Computer Engineering",
    detail2: "Universidad Politécnica · NTUST Taiwan",
  },
};

export const aboutParagraph =
  "Full-stack developer specialized in SAP BTP with proven experience designing and delivering scalable enterprise applications for S/4HANA Public and Private Cloud. Strong expertise in CAP, RAP, SAP Fiori, and Integration Suite, combined with a background in AI-driven solutions and published ML research. Passionate about building high-quality, scalable systems and solving complex business problems through modern technologies.";
