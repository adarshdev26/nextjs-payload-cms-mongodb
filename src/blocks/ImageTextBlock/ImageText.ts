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
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
      defaultValue: 'left',
      required: true,
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
  ],
}

export default ImageText
