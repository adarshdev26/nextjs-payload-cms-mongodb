import { Block } from 'payload'

const ImageText: Block = {
  slug: 'imageText',
  labels: {
    singular: 'Image + Text Block',
    plural: 'Image + Text Blocks',
  },
  fields: [
    {
      name: 'imagePosition',
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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'heading',
      type: 'text',
      required: false,
    },
    {
      name: 'bulletPoints',
      type: 'array',
      label: 'Bullet Points',
      fields: [
        {
          name: 'point',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'cta',
      type: 'group',
      fields: [
        {
          name: 'text',
          type: 'text',
        },
        {
          name: 'link',
          type: 'text',
        },
      ],
    },
    {
      name: 'variant',
      type: 'select',
      label: 'Style Variant',
      defaultValue: 'default',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Emphasis', value: 'emphasis' },
        { label: 'Light', value: 'light' },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'text',
      label: 'Background Color (optional, hex or tailwind class)',
    },
  ],
}

export default ImageText
