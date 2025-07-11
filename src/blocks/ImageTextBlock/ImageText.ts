import { Block } from 'payload';

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
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'cta',
      type: 'group',
      label: 'Call to Action',
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
  ],
};

export default ImageText;
