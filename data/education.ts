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
      "Computer Engineering specializing in data platforms, analytics, and Azure-oriented data systems.",
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
    degree: "Bachelor's degree in Computer Science and Multimedia",
    institution: "ISIMSF",
    period: "Sept 2020 – June 2023",
    summary:
      "Foundation in software engineering, multimedia, and distributed systems   covering enterprise Java, cloud concepts, big data, game development, and AI.",
    coursework: [
      "JEE",
      "Hadoop",
      "Cloud Computing",
      "Big Data",
      "C",
      "Unity",
      "Adobe Illustrator",
      "Scrum",
      "AI",
    ],
  },
  {
    id: "el-alia",
    degree: "High School Diploma in Computer Science",
    institution: "El Alia High School",
    period: "Sept 2015 – July 2019",
    summary: "Early focus on computer science and problem-solving fundamentals.",
  },
];
