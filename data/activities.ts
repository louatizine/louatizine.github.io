export type Activity = {
  id: string;
  category: string;
  role: string;
  organization: string;
  period: string;
  description: string;
};

export const activities: Activity[] = [
  {
    id: "el-alia-sports-team",
    category: "Sports",
    role: "Member",
    organization: "El Alia Sports Team",
    period: "2010–2019",
    description:
      "Years of team training and competition   building discipline, stamina, and the habit of showing up.",
  },
  {
    id: "microsoft-club-isims",
    category: "Academic",
    role: "Member",
    organization: "Microsoft Club, ISIMS",
    period: "2010–2019",
    description:
      "Active in a campus tech community   workshops, peer learning, and early exposure to Microsoft tools.",
  },
];
