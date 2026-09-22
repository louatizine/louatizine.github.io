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
      "Car rental management platform with vehicle listings, booking flows, and operational admin tools for day-to-day fleet handling.",
    stack: ["JavaScript", "React", "Node.js"],
    sourceCode: "https://github.com/louatizine/Rent-Car",
  },
  {
    id: "python-university-project",
    title: "Car Rental Platform (University)",
    description:
      "Flask + React car rental platform with booking management, admin dashboard, role-based views, and MySQL persistence.",
    stack: ["Python", "Flask", "React", "MySQL"],
    sourceCode: "https://github.com/louatizine/PythonUniversityProject",
  },
];

export const projects: Project[] = [
  {
    id: "quality-portal",
    title: "Quality Portal",
    problem:
      "Industrial plants needed one place to manage certifications, users, and renewal notifications across multiple sites   without losing auditability or access control.",
    architecture:
      "Modular Clean Architecture on .NET with Blazor Server, EF Core, and Wolverine. Azure AD group-based roles (Administrator, QualityManager, SimpleUser) with live permission sync and JWT claims injection. Microsoft Graph API and SharePoint store certificate documents in per-plant folders. Hangfire runs configurable expiration alert jobs; Quality Managers maintain custom email recipient lists per certification. Full-page create/edit workflows replace modals for clearer UX. Delivered through Azure DevOps with structured branching and PR reviews.",
    role: "Full stack developer   architecture, authorization, integrations, notifications, and CI/CD.",
    outcome:
      "Production enterprise certification platform with reliable domain events (transactional outbox), automated SharePoint document filing, and scheduled renewal alerts across a multi-developer team.",
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
      "Esports analytics needs continuous ingestion of high-volume game events and near-real-time processing so dashboards stay useful during live competition windows.",
    architecture:
      "Riot Games API as the data source, Apache Kafka for event streaming, and Apache Spark Structured Streaming for distributed processing. Modular Python services containerized with Docker for Codespaces-friendly local runs and scalable deployment. Streamlit dashboards expose live pipeline health and analytics views.",
    role: "Designed and built the pipeline architecture end-to-end   ingestion, streaming, processing, and monitoring.",
    outcome:
      "A modular, production-oriented streaming analytics platform with live Streamlit monitoring and a clear path from raw Riot events to processed insights.",
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
      "Real-time stream ingestion, distributed processing, and event-driven architecture   direct hands-on Kafka and Spark experience.",
  },
  {
    id: "hr-platform",
    title: "HR Management Platform",
    problem:
      "Organizations needed a single system for employee lifecycle operations   leave, fleet, licenses, tasks, and documents   instead of scattered spreadsheets and manual handoffs.",
    architecture:
      "Multi-role React/Node platform with JWT authentication and RBAC across modules: employee management, leave tracking, vehicle fleet, software license administration, and collaborative task workflows. n8n automates invoice OCR (PDF/images → CSV → database). Digital archiving with OCR search, email notifications with user preferences, Material-UI dashboards, and EN/FR/AR i18n.",
    role: "Full stack development and pipeline automation design.",
    outcome:
      "Production HR platform serving 50+ users; OCR invoice automation cut manual processing time by about 40%, with real-time notifications and searchable document archives.",
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
      "Multi-site attendance depended on error-prone manual tracking; identity capture and record sync needed to be fast, consistent, and exportable for admins.",
    architecture:
      "Three-service setup: React frontend, FastAPI backend, MongoDB, plus a C# desktop service talking to fingerprint hardware over HTTP. Real-time check-in/out syncs terminals with the central database. Admin dashboard covers analytics charts, attendance stats, and CSV/Excel export. Docker Compose packages the stack for one-command deployment.",
    role: "Full stack developer   backend APIs, hardware sync design, and deployment packaging.",
    outcome:
      "Touchless fingerprint verification with sub-second checks, live terminal-to-database sync, and an admin analytics dashboard ready for operational reporting.",
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
      "Ophthalmologists reviewing OCT retina scans needed faster, consistent AI-assisted screening support   without replacing specialist judgment.",
    architecture:
      "Custom CNN trained with TensorFlow/Keras for CNV, DME, Drusen, and Normal classes. Flask inference service returns predictions in under 3 seconds. React frontend handles upload/preview, confidence visualization, personalized care guidance from diagnosis + urgency, PDF report export, and a multi-step Upload → Analyse → Results flow.",
    role: "Full stack developer and ML engineer   model training, inference pipeline, and clinical-facing UI.",
    outcome:
      "89% validation accuracy on retinal disease classes; end-to-end screening workflow from scan upload to PDF report in seconds.",
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
      "Farmers and agronomists needed decision support for crop choice, fertilizer planning, and plant disease identification across many plant types   not isolated models behind notebooks.",
    architecture:
      "XGBoost models for crop and fertilizer recommendation using seven inputs (N, P, K, temperature, humidity, pH, rainfall). Fine-tuned ResNet18 for leaf disease detection across 38 classes. FastAPI backend with JWT, prediction history, and MongoDB. React + Tailwind dashboard with KPI cards, yield trends, crop distribution charts, weather widget, and instant disease ID with treatment suggestions.",
    role: "Full stack developer and ML engineer   tabular/CV models, API, and interactive dashboard.",
    outcome:
      "98% XGBoost accuracy across 22 crop classes; 99% ResNet18 accuracy across 38 disease classes, wrapped in a usable field-decision UI.",
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
      "People logging workouts need a fast mobile tool that stays usable offline and stays typed end-to-end   without a heavy backend dependency on day one.",
    architecture:
      "Expo + React Native + TypeScript with typed data models, centralized auth and data-sync services, a local write queue, and planned MongoDB Atlas cloud sync. Tabbed navigation for Today, History, Progress, and Settings, plus rep/weight tracking and a rest timer.",
    role: "Mobile developer   full architecture, data models, and UX flows.",
    outcome:
      "A functional workout tracker with local-first logging, progress history, and a clear path to cloud sync.",
    stack: ["React Native", "TypeScript", "Expo", "MongoDB"],
    image: "/projects/FITNESS.jpg",
    sourceCode: "https://github.com/louatizine/fintness",
    dataFocus: "Local-first data sync architecture, typed data modeling.",
  },
  {
    id: "inventory",
    title: "Real-Time Inventory System",
    problem:
      "Warehouse inventory views lagged behind physical stock movements, so operators worked from stale numbers and slow refreshes.",
    architecture:
      "Node.js + React application with WebSocket push for live stock levels across locations, secured REST APIs for mutations, and Docker packaging for consistent dev/prod deploys.",
    role: "Full stack developer   live inventory flows, API security, and containerization.",
    outcome:
      "Cut update latency from roughly 5 seconds to near-instant stock updates across connected clients.",
    stack: ["Node.js", "React", "WebSockets", "Docker"],
    image: "/projects/INVEN.jpg",
    dataFocus:
      "Streaming inventory state changes and consistent client-side data refresh.",
  },
];
