export type ExperienceRole = {
  id: string;
  title: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
  tech: string[];
};

export const experience: ExperienceRole[] = [
  {
    id: "dynamix",
    title: "Full Stack ERP Developer",
    company: "Dynamix Services",
    period: "Jun 2024 – Present",
    highlights: [
      "Developing a modular ERP covering HR, fleet, and document tracking with React dashboards and Node.js REST APIs.",
      "Designed and operated an n8n + OCR automation pipeline (extraction → transformation → structured storage), reducing manual data entry by 40%.",
      "Implemented JWT authentication with role-based access control (RBAC) across ERP modules.",
    ],
    tech: [
      "React",
      "Node.js",
      "REST APIs",
      "n8n",
      "OCR",
      "JWT",
      "RBAC",
    ],
  },
  {
    id: "martelli",
    title: "Full Stack Intern",
    company: "Martelli Tunisia",
    period: "Jul 2023 – May 2024",
    highlights: [
      "Built a real-time inventory application using WebSockets for live stock updates.",
      "Delivered a secure API backend with authentication and structured data handling.",
      "Containerized and deployed the application with Docker.",
    ],
    tech: ["WebSockets", "Node.js", "REST APIs", "Docker"],
  },
  {
    id: "digit",
    title: "Mobile Developer Intern",
    company: "Digit Kakushin Soft",
    period: "Feb 2023 – Jun 2023",
    highlights: [
      "Developed a cross-platform mobile application with Flutter.",
      "Integrated push notifications and connected the client to a Spring Boot backend.",
    ],
    tech: ["Flutter", "Spring Boot", "Push Notifications"],
  },
];
