import { Image } from "./Image";

export type Technology = {
  _id: string;
  _createdAt: Date;
  _type: "skill";
  title: string;
  image: Image;
  progress: number;
};
