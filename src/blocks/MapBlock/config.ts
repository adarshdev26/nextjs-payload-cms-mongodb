import { Block } from 'payload'

export const MapBlock: Block = {
  slug: 'map',
  labels: {
    singular: 'Map Block',
    plural: 'Map Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Map Title',
      type: 'text',
      required: false,
    },
    {
      name: 'embedUrl',
      label: 'Google Map Embed URL',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'https://www.google.com/maps/embed?...',
        description: 'Paste the iframe src URL from Google Maps Share → Embed a map',
      },
    },
    {
      name: 'height',
      label: 'Map Height (px)',
      type: 'number',
      defaultValue: 400,
    },
  ],
}
