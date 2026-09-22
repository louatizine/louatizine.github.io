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
    location: "Bizerte, Tunisia",
    highlights: [
      "Architected a modular Clean Architecture Quality Portal (.NET/Blazor) for multi-plant certification management with Azure AD group-based authorization.",
      "Integrated Microsoft Graph API and SharePoint for certificate document storage; Wolverine transactional outbox with EF Core for reliable domain events.",
      "Designed and operated an n8n + OCR automation pipeline (extraction → transformation → structured storage), reducing manual data entry by 40%; JWT/RBAC across ERP modules serving 50+ users.",
    ],
    tech: [
      ".NET",
      "Blazor",
      "EF Core",
      "Azure AD",
      "SharePoint",
      "Wolverine",
      "React",
      "Node.js",
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
    location: "Bizerte, Tunisia",
    highlights: [
      "Built a real-time inventory application using WebSockets for live stock updates.",
      "Delivered a secure API backend with JWT authentication and structured data handling.",
      "Containerized and deployed the application with Docker.",
    ],
    tech: ["WebSockets", "Node.js", "React", "REST APIs", "Docker", "JWT"],
  },
  {
    id: "digit",
    title: "Mobile Developer Intern",
    company: "Digit Kakushin Soft",
    period: "Feb 2023 – Jun 2023",
    location: "Sfax, Tunisia",
    highlights: [
      "Developed a cross-platform leave management app (Flutter) used by 100+ employees.",
      "Implemented push notifications with 99% delivery rate and connected the client to a Spring Boot backend.",
    ],
    tech: ["Flutter", "Spring Boot", "Push Notifications"],
  },
];
