import { Image } from './Image';

export type PageInfo = {
  _id: string;
  _createdAt: Date;
  _type: 'pageInfo';
  name: string;
  role: string;
  heroImage: Image;
  backgroundInformation: string;
  profilePic: Image;
  phoneNumber: string;
  email: string;
  address: string;
};
