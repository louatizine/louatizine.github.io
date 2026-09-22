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
      { name: "Apache Kafka" },
      { name: "Apache Spark" },
      { name: "PySpark" },
      { name: "Hadoop" },
      { name: "Databricks", inProgress: true },
      { name: "Grafana" },
      { name: "Azure Data Factory", inProgress: true },
      { name: "Synapse", inProgress: true },
    ],
  },
  {
    id: "enterprise-dotnet",
    title: "Enterprise & .NET",
    skills: [
      { name: ".NET" },
      { name: "Blazor Server" },
      { name: "EF Core" },
      { name: "Wolverine" },
      { name: "Hangfire" },
      { name: "Azure AD" },
      { name: "Microsoft Graph API" },
      { name: "SharePoint" },
      { name: "Azure DevOps" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      { name: "MongoDB" },
      { name: "SQL Server" },
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
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Mobile",
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
      { name: "ResNet18" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Auth",
    skills: [
      { name: "Docker" },
      { name: "CI/CD" },
      { name: "GitHub Actions" },
      { name: "JWT" },
      { name: "RBAC" },
    ],
  },
];
