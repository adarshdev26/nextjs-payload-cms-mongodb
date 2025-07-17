// payload/blocks/CustomSoftwareSection.ts
import { Block } from 'payload'

export const CustomSoftwareSection: Block = {
  slug: 'customSoftwareSection',
  labels: {
    singular: 'Custom Software Section',
    plural: 'Custom Software Sections',
  },
  fields: [
    {
      name: 'textPosition',
      type: 'radio',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      defaultValue: 'left',
      required: true,
      admin: { layout: 'horizontal' },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'techStack',
      type: 'array',
      label: 'Tech Stack Items',
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
        },
        {
          name: 'link',
          type: 'text',
        },
      ],
    },
  ],
}
