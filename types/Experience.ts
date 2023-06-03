import { Image } from "./Image";
import { Technology } from "./Technology";

export type Experience = {
  _id: string;
  _createdAt: Date;
  _type: "experience";
  jobTitle: string;
  companyImage: Image;
  company: string;
  dateStarted: Date;
  dateEnded: Date;
  phoneNumber: string;
  isCurrentlyWorkingHere: boolean;
  technologies: Technology[];
  points: string[];
};
