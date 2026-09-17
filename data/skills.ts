export type Skill = {
  name: string;
  inProgress?: boolean;
};

export type SkillCategory = {
  id: string;
  title: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "data-cloud",
    title: "Data & Cloud",
    skills: [
      { name: "Azure Data Factory", inProgress: true },
      { name: "Databricks", inProgress: true },
      { name: "Synapse", inProgress: true },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      { name: "MongoDB" },
      { name: "SQL Server" },
      { name: "EF Core" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "FastAPI" },
      { name: "Flask" },
      { name: "Spring Boot" },
      { name: ".NET" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React" },
      { name: "React Native" },
      { name: "Flutter" },
      { name: "Blazor" },
    ],
  },
  {
    id: "ai-ml",
    title: "AI/ML",
    skills: [
      { name: "TensorFlow/Keras" },
      { name: "PyTorch" },
      { name: "XGBoost" },
      { name: "CNN" },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    skills: [
      { name: "Docker" },
      { name: "CI/CD" },
      { name: "Azure DevOps" },
      { name: "GitHub Actions" },
    ],
  },
  {
    id: "auth-enterprise",
    title: "Auth & Enterprise",
    skills: [
      { name: "Azure AD" },
      { name: "Microsoft Graph API" },
      { name: "JWT" },
      { name: "RBAC" },
    ],
  },
];
