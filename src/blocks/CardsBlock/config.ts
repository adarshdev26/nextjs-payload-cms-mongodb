import { Block } from 'payload'

const CardsBlock: Block = {
  slug: 'cards',
  labels: {
    singular: 'Cards Block',
    plural: 'Cards Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      //required: true,
    },
    {
      name: 'textColor',
      label: 'Text Color',
      type: 'select',
      options: [
        { label: 'Light (white)', value: 'white' },
        { label: 'Dark (black)', value: 'black' },
      ],
      defaultValue: 'black',
    },
    {
      name: 'columns',
      label: 'Cards Per Row',
      type: 'select',
      options: [
        { label: '1 Column', value: '1' },
        { label: '2 Columns', value: '2' },
        { label: '3 Columns', value: '3' },
        { label: '4 Columns', value: '4' },
      ],
      defaultValue: 3,
    },

    {
      name: 'cards',
      type: 'array',
      label: 'Cards',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          //required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
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

    {
      name: 'backgroundColor',
      label: 'Background Color',
      type: 'select',
      options: [
        {
          label: 'White',
          value: '#ffffff',
        },
        {
          label: 'Light Gray',
          value: '#f5f5f5',
        },
        {
          label: 'Dark Gray',
          value: '#333333',
        },
        {
          label: 'Blue',
          value: '#33a5df',
        },
        {
          label: 'Transparent Black',
          value: 'rgba(0,0,0,0.5)',
        },
        { label: 'Blue Gradient', value: 'linear-gradient(to right, #0963a4, #33a5df)' },
      ],
      defaultValue: '#ffffff',
    },
  ],
}

export default CardsBlock
