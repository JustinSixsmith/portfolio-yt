import { Image } from './Image';

export type Skill = {
  _id: string;
  _createdAt: Date;
  _type: 'skill';
  title: string;
  image: Image;
  linkToWebsite: string;
};
