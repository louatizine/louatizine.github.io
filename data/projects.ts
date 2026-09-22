export type Project = {
  id: string;
  title: string;
  problem: string;
  architecture: string;
  role: string;
  outcome: string;
  stack: string[];
  image: string;
  liveDemo?: string;
  sourceCode?: string;
  dataFocus?: string;
};

export type SecondaryProject = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  sourceCode: string;
};

export const secondaryProjects: SecondaryProject[] = [
  {
    id: "rent-car",
    title: "Rent-Car",
    description:
      "Car rental management platform with vehicle listings and booking operations.",
    stack: ["JavaScript", "React", "Node.js"],
    sourceCode: "https://github.com/louatizine/Rent-Car",
  },
  {
    id: "python-university-project",
    title: "Car Rental Platform (University)",
    description:
      "Flask + React car rental platform with booking management, admin dashboard, and MySQL.",
    stack: ["Python", "Flask", "React", "MySQL"],
    sourceCode: "https://github.com/louatizine/PythonUniversityProject",
  },
];

export const projects: Project[] = [
  {
    id: "quality-portal",
    title: "Quality Portal",
    problem:
      "Industrial plants need a unified platform to manage certifications, users, and renewal notifications across multiple sites.",
    architecture:
      "Modular Clean Architecture on .NET with Blazor Server, EF Core, and Wolverine. Azure AD group-based authorization with live permission sync; Microsoft Graph API and SharePoint for per-plant certificate document storage; Hangfire for scheduled expiration alerts.",
    role: "Full stack developer — architecture, auth, integrations, and CI/CD.",
    outcome:
      "Enterprise certification management with reliable domain events (transactional outbox), configurable per-plant alerts, and Azure DevOps delivery across a multi-developer team.",
    stack: [
      ".NET",
      "Blazor Server",
      "EF Core",
      "Wolverine",
      "Azure AD",
      "SharePoint",
      "Hangfire",
    ],
    image: "/projects/placeholder.svg",
    dataFocus:
      "Structured certification records, domain events via transactional outbox, and automated document storage workflows into SharePoint.",
  },
  {
    id: "esport-big-data-pipeline",
    title: "Esport Big Data Pipeline",
    problem:
      "Esports analytics requires ingesting and processing high-volume, real-time game data at scale.",
    architecture:
      "Production-oriented big data platform using the Riot Games API as the data source, Apache Kafka for event streaming, and Apache Spark Structured Streaming for real-time processing. Containerized with Docker, designed for GitHub Codespaces and modular scalability.",
    role: "Designed and built the pipeline architecture end-to-end.",
    outcome:
      "A modular, production-ready streaming analytics platform with live monitoring dashboards built in Streamlit.",
    stack: [
      "Apache Kafka",
      "Apache Spark",
      "Docker",
      "Python",
      "Streamlit",
      "Riot Games API",
    ],
    image: "/projects/bigData.png",
    sourceCode: "https://github.com/louatizine/esport-bigdata-pipeline",
    dataFocus:
      "Real-time stream ingestion, distributed processing, and event-driven architecture — direct hands-on Kafka and Spark experience.",
  },
  {
    id: "hr-platform",
    title: "HR Management Platform",
    problem:
      "Organizations need a unified system to manage the full employee lifecycle and daily HR operations across multiple functions.",
    architecture:
      "Multi-app platform covering employee management, leave, fleet, software licenses, and collaborative task workflows, with JWT/RBAC, n8n OCR invoice automation, and multi-language support (English, French, Arabic).",
    role: "Full stack development and pipeline automation design.",
    outcome:
      "Production-used HR platform serving 50+ users; OCR invoice pipeline reduced manual processing by 40%.",
    stack: ["React", "Node.js", "JWT", "RBAC", "n8n", "OCR", "Docker"],
    image: "/projects/hr-platform.png",
    sourceCode: "https://github.com/louatizine/erp",
    dataFocus:
      "Structured employee data across modules, OCR extraction to structured storage, and role-based workflow automation.",
  },
  {
    id: "biometric",
    title: "Biometric Attendance System",
    problem:
      "Attendance tracking across sites required reliable identity capture and consistent synchronization of records.",
    architecture:
      "React frontend, FastAPI backend, MongoDB database, and a C# SDK for biometric hardware integration. Deployed via Docker Compose with MongoDB Atlas setup scripts.",
    role: "Backend services and real-time sync design.",
    outcome:
      "Real-time check-in/check-out with fingerprint verification, an admin analytics dashboard, and CSV/Excel export.",
    stack: ["React", "FastAPI", "MongoDB", "C# SDK", "Docker", "JWT"],
    image: "/projects/biometric.png",
    sourceCode: "https://github.com/louatizine/Fingerprint-Pointage-App",
    dataFocus:
      "Real-time event data sync between hardware terminals and the central database, JWT-secured API layer.",
  },
  {
    id: "oct-imaging",
    title: "AI-Based OCT Medical Imaging Platform",
    problem:
      "Clinical OCT image review required faster, consistent screening support without replacing specialist judgment.",
    architecture:
      "Custom CNN for OCT classification with a Flask inference service and React frontend for upload, confidence visualization, and PDF report export.",
    role: "Full stack developer and ML engineer — model development and inference pipeline.",
    outcome:
      "89% validation accuracy detecting CNV, DME, Drusen, and Normal retina; inference under 3 seconds per scan.",
    stack: ["React", "Flask", "TensorFlow/Keras", "MongoDB", "CNN"],
    image: "/projects/OCT.jpg",
    sourceCode:
      "https://github.com/louatizine/machineLearning-Human-Eye-Disease-Prediction-System",
    dataFocus:
      "Image preprocessing, model training/validation pipeline, and low-latency inference serving.",
  },
  {
    id: "agrismart",
    title: "AgriSmart AI Yield Prediction",
    problem:
      "Agricultural decision support needed reliable crop yield estimation and disease classification across many plant types.",
    architecture:
      "XGBoost models for crop/fertilizer prediction; ResNet18 for disease classification; FastAPI backend with JWT and MongoDB; React dashboard for KPIs and live insights.",
    role: "Full stack developer and ML engineer — models, API, and dashboard.",
    outcome:
      "XGBoost reached 98% accuracy across 22 crop classes; ResNet18 reached 99% accuracy across 38 disease classes.",
    stack: ["React", "FastAPI", "XGBoost", "ResNet18", "MongoDB", "PyTorch"],
    image: "/projects/AGRIS.jpg",
    sourceCode: "https://github.com/louatizine/yield_Prediction_Sys",
    dataFocus:
      "Feature engineering for tabular yield data and image-based disease classification pipelines.",
  },
  {
    id: "fintness",
    title: "Fintness",
    problem:
      "People tracking workouts need a simple, fast mobile logging tool.",
    architecture:
      "Built with Expo, React Native, and TypeScript. Typed data models, centralized authentication and data-sync services, with a local write queue and planned MongoDB Atlas cloud sync.",
    role: "Mobile developer, full architecture.",
    outcome:
      "Functional workout tracker with tabbed navigation (Today, History, Progress, Settings), rep/weight tracking, and a rest timer.",
    stack: ["React Native", "TypeScript", "Expo", "MongoDB"],
    image: "/projects/FITNESS.jpg",
    sourceCode: "https://github.com/louatizine/fintness",
    dataFocus: "Local-first data sync architecture, typed data modeling.",
  },
  {
    id: "inventory",
    title: "Real-Time Inventory System",
    problem:
      "Inventory views lagged behind physical stock movements, limiting operational responsiveness.",
    architecture:
      "WebSocket-based real-time updates over a secure Node.js/React API backend, deployed with Docker.",
    role: "Full stack development of live inventory flows.",
    outcome:
      "Reduced update latency from ~5 seconds to near-instantaneous stock updates across connected clients.",
    stack: ["Node.js", "React", "WebSockets", "Docker"],
    image: "/projects/INVEN.jpg",
    dataFocus:
      "Streaming inventory state changes and consistent client-side data refresh.",
  },
];
