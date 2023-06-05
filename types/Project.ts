import { Image } from "./Image";
import { Technology } from "./Technology";

export type Project = {
  _id: string;
  _createdAt: Date;
  _type: "project";
  title: string;
  image: Image;
  summary: string;
  technologies: Technology[];
  linkToBuild: string;
  linkToSource: string;
};
