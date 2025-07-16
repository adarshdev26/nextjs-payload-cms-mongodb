import { Block } from 'payload'

export const TechSkillsBlock: Block = {
  slug: 'techSkills',
  labels: {
    singular: 'Tech Skill Block',
    plural: 'Tech Skill Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'Our Technical Skills',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Intro Description',
    },
    {
      name: 'skills',
      type: 'array',
      label: 'Skills',
      minRows: 1,
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'details',
          type: 'textarea',
          label: 'Skill Details',
        },
      ],
    },
  ],
}
