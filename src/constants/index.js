import { backend, creator, web, mobile } from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const socialLinks = {
  email: "rishushukla559@gmail.com",
  phone: "+91-9936767031",
  linkedin: "https://www.linkedin.com/in/",
  github: "https://github.com/",
  resume: "/RishuShukla_Resume2026.pdf",
};

const services = [
  { title: "Backend Engineering", icon: backend },
  { title: "Trading Systems", icon: web },
  { title: "Distributed Systems", icon: mobile },
  { title: "Real-time Platforms", icon: creator },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["Golang", "Scala", "C++", "SQL"],
  },
  {
    title: "Backend & Architecture",
    items: [
      "Distributed Systems",
      "Microservices",
      "REST APIs",
      "Event-Driven Architecture",
      "Concurrency",
      "System Design",
    ],
  },
  {
    title: "Databases & Messaging",
    items: ["PostgreSQL", "MongoDB", "Redis", "Kafka"],
  },
  {
    title: "Domain",
    items: [
      "Order Management",
      "Broker Integrations",
      "Risk Management (RMS)",
      "Trading Platforms",
      "Compliance",
    ],
  },
  {
    title: "Cloud & Observability",
    items: ["AWS (S3)", "OpenTelemetry", "New Relic APM", "Git"],
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "INDmoney, Bengaluru",
    initial: "IN",
    iconBg: "#1a3a5c",
    date: "Sep 2025 – Present",
    points: [
      "Led the Alpaca Fully Disclosed to Omnibus migration end-to-end, moving ~$10M of cash into the pool account and enabling interest income on idle balances.",
      "Drove the DriveWealth Omnibus migration across the trading stack, bringing ~$40M of cash into the omnibus pool and improving capital efficiency.",
      "Architected the Order Queueing system that runs RMS checks before broker submission, absorbs market-open spikes, and enables zero-downtime EOD/BOD operations.",
      "Spearheaded migration of critical trading services (Trade Screen, Order Placement, Event Consumption) from Scala to Golang.",
      "Owned Order Modification end-to-end (~5% of daily orders at 99.8% accuracy) and shipped SIP via Wallet (~10% of daily trading volume).",
      "Built Variable Pricing for dynamic brokerage, integrated GTN for European markets, and shipped Fractional Limit, Trigger, and Extended-Hours trading.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Junglee Games, Bengaluru",
    initial: "JG",
    iconBg: "#2d1f4e",
    date: "Aug 2024 – Aug 2025",
    points: [
      "Introduced preferential matchmaking with priority-based optimal table counts, cutting average join time by 25% and lifting system revenue by 10%.",
      "Developed geolocation and skill-based matchmaking using Golang, Redis (geospatial), Kafka, PostgreSQL and MongoDB.",
      "Delivered the BuyInLimits Service for real-time deposit validation with 100% regulatory compliance for responsible gaming.",
      "Improved observability with structured logging, system metrics and New Relic APM.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Junglee Games, Bengaluru",
    initial: "JG",
    iconBg: "#383E56",
    date: "Aug 2023 – Aug 2024",
    points: [
      "Designed and deployed a real-time Odds Calculator Service using the 2+2 algorithm and Cactus Kev’s algorithm.",
      "Optimized the HandHistory service (AWS S3) with Goroutines for 10x faster execution; integrated OpenTelemetry.",
      "Raised test coverage by 80% with unit and integration tests; refactored legacy code for maintainability.",
    ],
  },
];

const projects = [
  {
    name: "Route Optimization",
    description:
      "Implemented a CVRP search-based algorithm for biomedical waste management, optimizing real-world hospital collection routes.",
    tags: [
      { name: "algorithms", color: "blue-text-gradient" },
      { name: "optimization", color: "green-text-gradient" },
      { name: "cvrp", color: "pink-text-gradient" },
    ],
  },
  {
    name: "Snippy",
    description:
      "Full-stack code snippet manager for CS students using React, MongoDB and REST APIs, built to improve developer productivity.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "restapi", color: "pink-text-gradient" },
    ],
  },
];

const education = {
  school: "SRM Institute of Science and Technology, Chennai",
  degree: "B.Tech, Computer Science",
  date: "2020 – 2024",
  detail: "CGPA: 9.8",
};

const achievements = [
  "Star Performer of the Quarter at Junglee Games (Oct 2024).",
  "Shiv Nadar Foundation Scholarship for schooling and undergraduate studies.",
];

export {
  services,
  skillGroups,
  experiences,
  projects,
  education,
  achievements,
};
