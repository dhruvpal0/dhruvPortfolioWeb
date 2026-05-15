export const BRAND = {
  name: "Dhruv Pal",
  role: "Software Engineer | Full-Stack Developer | Founder",
  tagline: "Building scalable digital ecosystems and next-generation student-driven platforms.",
  email: "pal664908@gmail.com",
  phone: "+91 8439621339",
  location: "Meerut, U.P., India",
  links: {
    github: "https://github.com/dhruv-pal",
    linkedin: "https://linkedin.com/in/dhruv-pal",
    twitter: "https://twitter.com/dhruv__pal",
    peerlynk: "https://peerlynk.com",
  }
};

export const NAVIGATION = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Open Source", href: "#github" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export const SKILLS = [
  {
    category: "Frontend",
    items: ["React.js", "React Native", "Next.js", "Expo", "Redux Toolkit", "Tailwind CSS", "HTML5", "CSS3", "Vite", "jQuery"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Socket.io", "WebSocket", "Convex", "Django", "Flask"]
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "SQL", "Prisma ORM"]
  },
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python"]
  },
  {
    category: "Auth & Security",
    items: ["Google OAuth 2.0", "JWT", "bcrypt.js", "Clerk"]
  },
  {
    category: "Tools & Soft Skills",
    items: ["Git", "GitHub", "Postman", "Netlify", "Render", "Cloudinary", "Expo EAS", "Leadership", "Team Management", "Problem Solving"]
  }
];

export const PROJECTS = [
  {
    id: "peerlynk",
    title: "peerlynk",
    subtitle: "The Academic Social Network",
    role: "Founder & Full-Stack App Developer",
    description: "A real-world academic networking platform for students, teachers, alumni, and colleges to solve communication, collaboration, and engagement problems through a modern, mobile-first social experience.",
    tech: ["React Native", "Node.js", "PostgreSQL", "Socket.io"],
    duration: "Aug 2025 – Present",
    links: {
      live: "https://peerlynk.com",
      github: "#",
      demo: "#"
    },
    features: [
      "Auto-Grouping System",
      "Multi-Role Academic Profiles",
      "Smart Academic Feed",
      "Real-Time Chat",
      "College Showcase"
    ],
    highlight: "Flagship Project",
    category: "Startup"
  },
  {
    id: "nextwise",
    title: "NextWise",
    subtitle: "Online Learning Platform",
    role: "Full-Stack Developer",
    description: "Developed a full-stack online learning platform with secure authentication, responsive UI, course management, and integrated payment system.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    duration: "Mar – May 2025",
    links: {
      live: "https://nextwise.dev",
      github: "#"
    },
    category: "EdTech"
  },
  {
    id: "cloud-wallet",
    title: "Cloud Wallet App",
    subtitle: "Finance Tracking App",
    role: "Full-Stack Developer",
    description: "Mobile application for personal finance tracking and cloud-based wallet management.",
    tech: ["React Native", "Convex", "PostgreSQL"],
    duration: "Jun – July 2025",
    links: {
      live: "https://cloudwallet.io",
      github: "#"
    },
    category: "FinTech"
  }
];

export const EXPERIENCE = [
  {
    title: "Founder & Full-Stack Developer",
    organization: "peerlynk",
    date: "Aug 2025 – Present",
    description: "Building the future of academic social networking."
  },
  {
    title: "Full-Stack Development Journey",
    organization: "Personal Projects",
    date: "2024 - 2025",
    description: "Mastering modern web and mobile technologies through hands-on building."
  },
  {
    title: "Hackathon Competitor",
    organization: "Various Platforms",
    date: "2024",
    description: "Solving real-world problems in time-constrained environments."
  }
];

export const ACHIEVEMENTS = [
  {
    title: "Smart India Hackathon 2024",
    description: "Participated in the national level hackathon solving critical governance problems.",
    icon: "trophy"
  },
  {
    title: "College Hackathon Runner-Up",
    description: "Recognized for innovative solutions and rapid prototyping.",
    icon: "award"
  }
];

export const STATS = [
  { label: "Projects Completed", value: "15+" },
  { label: "Technologies Mastered", value: "20+" },
  { label: "Hackathons", value: "5+" },
  { label: "Years Experience", value: "2+" },
];
