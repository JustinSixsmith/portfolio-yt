import { defineType } from 'sanity';

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of the skill',
      type: 'string',
    },
    // {
    //   name: "progress",
    //   title: "Progress",
    //   type: "number",
    //   description: "Progress of the skill from 0 to 100%",
    //   validation: (Rule) => Rule.min(0).max(100),
    // },
    {
      name: 'linkToWebsite',
      title: 'Link to Website',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
  ],
});
