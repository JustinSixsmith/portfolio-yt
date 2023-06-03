export type Image = {
  _id: string;
  _createdAt: Date;
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};
