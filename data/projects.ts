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

export const projects: Project[] = [
  {
    id: "hr-platform",
    title: "HR Management Platform",
    problem:
      "HR document intake relied on manual transcription from PDFs and images into structured records, slowing onboarding and increasing entry errors.",
    architecture:
      "MERN stack application with an n8n-orchestrated OCR pipeline: PDF/image intake → text extraction → CSV normalization → database persistence.",
    role: "Full stack development and pipeline automation design.",
    outcome:
      "Automated document-to-database flow that cut manual entry effort and improved consistency of HR records.",
    stack: ["MongoDB", "Express", "React", "Node.js", "n8n", "OCR"],
    image: "/projects/hr-platform.svg",
    dataFocus:
      "End-to-end document ETL: extraction, transformation to structured CSV, and load into the application database.",
  },
  {
    id: "oct-imaging",
    title: "AI-Based OCT Medical Imaging Platform",
    problem:
      "Clinical OCT image review required faster, consistent screening support without replacing specialist judgment.",
    architecture:
      "Custom CNN for OCT classification with a Flask inference service serving predictions to the application layer.",
    role: "Model development and inference pipeline integration.",
    outcome:
      "89% validation accuracy; inference responses delivered in under 3 seconds.",
    stack: ["Python", "CNN", "TensorFlow/Keras", "Flask"],
    image: "/projects/oct-imaging.svg",
    dataFocus:
      "Image preprocessing, model training/validation pipeline, and low-latency inference serving.",
  },
  {
    id: "agrismart",
    title: "AgriSmart AI Yield Prediction",
    problem:
      "Agricultural decision support needed reliable crop yield estimation and disease classification across many plant types.",
    architecture:
      "XGBoost models for yield prediction across crop classes; ResNet18 for disease classification; integrated prediction services for field use.",
    role: "ML model development and evaluation across crop and disease datasets.",
    outcome:
      "XGBoost reached 98% accuracy across 22 crop classes; ResNet18 reached 99% accuracy across 38 disease classes.",
    stack: ["XGBoost", "PyTorch", "ResNet18", "Python"],
    image: "/projects/agrismart.svg",
    dataFocus:
      "Feature engineering for tabular yield data and image-based disease classification pipelines.",
  },
  {
    id: "biometric",
    title: "Biometric Attendance System",
    problem:
      "Attendance tracking across sites required reliable identity capture and consistent synchronization of records.",
    architecture:
      "Microservices architecture with biometric capture services and real-time synchronization of attendance events.",
    role: "Backend services and real-time sync design.",
    outcome:
      "Real-time attendance synchronization across distributed capture points.",
    stack: ["Microservices", "Real-time sync", "APIs"],
    image: "/projects/biometric.svg",
    dataFocus:
      "Event-driven attendance data capture and synchronized storage across services.",
  },
  {
    id: "inventory",
    title: "Real-Time Inventory System",
    problem:
      "Inventory views lagged behind physical stock movements, limiting operational responsiveness.",
    architecture:
      "WebSocket-based real-time updates over a secure API backend, deployed with Docker.",
    role: "Full stack development of live inventory flows.",
    outcome: "Reduced update latency for inventory state across connected clients.",
    stack: ["WebSockets", "REST APIs", "Docker"],
    image: "/projects/inventory.svg",
    dataFocus:
      "Streaming inventory state changes and consistent client-side data refresh.",
  },
];
