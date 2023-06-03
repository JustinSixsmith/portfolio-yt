import { Image } from "sanity";

export type PageInfo = {
  _id: string;
  _createdAt: Date;
  name: string;
  role: string;
  heroImage: Image;
  backgroundInformation: string;
  profilePic: Image;
  phoneNumber: string;
  email: string;
  address: string;
};
