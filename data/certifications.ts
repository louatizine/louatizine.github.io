export type Certification = {
  id: string;
  name: string;
  code?: string;
  issuer: string;
  focus?: string;
};

export const certifications: Certification[] = [
  {
    id: "dp-203",
    name: "Azure Data Engineer Associate",
    code: "DP-203",
    issuer: "Microsoft",
    focus: "Data pipelines, storage, and security on Azure",
  },
];
