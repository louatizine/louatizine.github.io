export type EducationEntry = {
  id: string;
  degree: string;
  institution: string;
  period: string;
  track?: string;
  summary?: string;
  coursework?: string[];
  current?: boolean;
};

export const education: EducationEntry[] = [
  {
    id: "iteam",
    degree: "Computer Engineering",
    institution: "Iteam University",
    period: "Sept 2023 – June 2026",
    track: "Big Data & Business Intelligence",
    summary:
      "Computer Engineering graduate specializing in data platforms, analytics, and Azure-oriented data systems.",
    coursework: [
      "Big Data architectures and processing",
      "Business Intelligence & reporting",
      "Data modeling & warehouses",
      "Applied ML for decision support",
    ],
    current: true,
  },
  {
    id: "isims",
    degree: "Bachelor's in Computer Science and Multimedia",
    institution: "ISIMS Sfax",
    period: "Sept 2020 – June 2023",
    summary:
      "Foundation in software, multimedia, and distributed systems — from JEE and cloud concepts to AI and Scrum.",
  },
  {
    id: "el-alia",
    degree: "High School Diploma in Computer Science",
    institution: "El Alia High School",
    period: "Sept 2015 – July 2019",
    summary: "Early focus on computer science and problem-solving fundamentals.",
  },
];
